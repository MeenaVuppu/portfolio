"use client";

import { type RefObject, useEffect } from "react";

import { snapElementToNearestHole } from "../lib/headphoneMount";

type Box = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
};

type Point = { x: number; y: number };

type DragState = {
  candidate: Point | null;
  element: HTMLElement;
  lastSafeOffset: Point;
  moved: boolean;
  pointerId: number;
  startOffset: Point;
  startPointer: Point;
  startRect: Box;
  zIndex: string;
};

const DESKTOP_DRAG_QUERY = "(min-width: 1100px) and (hover: hover) and (pointer: fine)";
const DRAG_THRESHOLD = 6;
const COLLISION_GAP = 16;
const BOARD_PADDING = 22;
const ANCHOR_STEP_X = 29;
const ANCHOR_STEP_Y = 27;

function numberFromDataset(value: string | undefined) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function relativeBox(element: HTMLElement, boardBox: DOMRect): Box {
  const rect = element.getBoundingClientRect();
  const insets = (element.dataset.pegBounds ?? "0,0,0,0")
    .split(",")
    .map((value) => Number.parseFloat(value) || 0);
  const [leftRatio, topRatio, rightRatio, bottomRatio] = insets;
  const insetLeft = rect.width * leftRatio;
  const insetTop = rect.height * topRatio;
  const insetRight = rect.width * rightRatio;
  const insetBottom = rect.height * bottomRatio;
  const width = rect.width - insetLeft - insetRight;
  const height = rect.height - insetTop - insetBottom;

  return {
    bottom: rect.bottom - boardBox.top - insetBottom,
    height,
    left: rect.left - boardBox.left + insetLeft,
    right: rect.right - boardBox.left - insetRight,
    top: rect.top - boardBox.top + insetTop,
    width,
  };
}

function boxAt(point: Point, width: number, height: number): Box {
  return {
    bottom: point.y + height,
    height,
    left: point.x,
    right: point.x + width,
    top: point.y,
    width,
  };
}

function overlaps(a: Box, b: Box, gap = COLLISION_GAP) {
  return !(
    a.right + gap <= b.left ||
    a.left >= b.right + gap ||
    a.bottom + gap <= b.top ||
    a.top >= b.bottom + gap
  );
}

function cornerInsideRoundedBoard(x: number, y: number, width: number, height: number, radius: number) {
  const left = x < radius;
  const right = x > width - radius;
  const top = y < radius;
  const bottom = y > height - radius;

  if ((!left && !right) || (!top && !bottom)) return true;

  const centerX = left ? radius : width - radius;
  const centerY = top ? radius : height - radius;
  return (x - centerX) ** 2 + (y - centerY) ** 2 <= radius ** 2;
}

function fitsBoard(box: Box, width: number, height: number, radius: number) {
  if (
    box.left < BOARD_PADDING ||
    box.top < BOARD_PADDING ||
    box.right > width - BOARD_PADDING ||
    box.bottom > height - BOARD_PADDING
  ) {
    return false;
  }

  return [
    [box.left, box.top],
    [box.right, box.top],
    [box.left, box.bottom],
    [box.right, box.bottom],
  ].every(([x, y]) => cornerInsideRoundedBoard(x, y, width, height, radius));
}

function isValid(box: Box, others: Box[], boardWidth: number, boardHeight: number, radius: number) {
  return fitsBoard(box, boardWidth, boardHeight, radius) && !others.some((other) => overlaps(box, other));
}

function nearestAnchor(
  desired: Point,
  itemSize: { width: number; height: number },
  others: Box[],
  boardSize: { width: number; height: number },
  radius: number,
) {
  const candidates: Array<Point & { distance: number }> = [];
  const maxX = boardSize.width - BOARD_PADDING - itemSize.width;
  const maxY = boardSize.height - BOARD_PADDING - itemSize.height;

  for (let y = BOARD_PADDING; y <= maxY; y += ANCHOR_STEP_Y) {
    for (let x = BOARD_PADDING; x <= maxX; x += ANCHOR_STEP_X) {
      candidates.push({ x, y, distance: (x - desired.x) ** 2 + (y - desired.y) ** 2 });
    }
  }

  candidates.sort((a, b) => a.distance - b.distance);
  for (const candidate of candidates) {
    const candidateBox = boxAt(candidate, itemSize.width, itemSize.height);
    if (isValid(candidateBox, others, boardSize.width, boardSize.height, radius)) {
      return { x: candidate.x, y: candidate.y };
    }
  }

  return null;
}

function setOffset(element: HTMLElement, point: Point) {
  element.dataset.pegX = String(point.x);
  element.dataset.pegY = String(point.y);
  element.style.translate = `${point.x}px ${point.y}px`;
}

export function usePegboardDrag(
  boardRef: RefObject<HTMLElement | null>,
  previewRef: RefObject<HTMLDivElement | null>,
  onPlaced?: () => void,
) {
  useEffect(() => {
    const board = boardRef.current;
    const preview = previewRef.current;
    if (!board || !preview) return;
    const boardElement: HTMLElement = board;
    const previewElement: HTMLDivElement = preview;

    const desktopQuery = window.matchMedia(DESKTOP_DRAG_QUERY);
    let active: DragState | null = null;
    let suppressedElement: HTMLElement | null = null;
    let suppressClickUntil = 0;

    const draggableItems = () =>
      Array.from(boardElement.querySelectorAll<HTMLElement>("[data-peg-draggable]"));

    function hidePreview() {
      previewElement.classList.remove("is-visible");
    }

    function showPreview(point: Point, width: number, height: number) {
      previewElement.style.left = `${point.x}px`;
      previewElement.style.top = `${point.y}px`;
      previewElement.style.width = `${width}px`;
      previewElement.style.height = `${height}px`;
      previewElement.classList.add("is-visible");
    }

    function resetArrangement() {
      hidePreview();
      draggableItems().forEach((item) => {
        delete item.dataset.pegX;
        delete item.dataset.pegY;
        item.classList.remove("is-peg-dragging", "is-peg-settling");
        item.style.removeProperty("translate");
        item.style.removeProperty("scale");
        item.style.removeProperty("z-index");
        item.removeAttribute("aria-grabbed");
      });
      active = null;
    }

    function onPointerDown(event: PointerEvent) {
      if (!desktopQuery.matches || event.button !== 0 || active) return;

      const origin = event.target;
      if (!(origin instanceof Element)) return;
      const element = origin.closest<HTMLElement>("[data-peg-draggable]");
      if (!element || !boardElement.contains(element)) return;

      const boardBox = boardElement.getBoundingClientRect();
      const startRect = relativeBox(element, boardBox);
      const startOffset = {
        x: numberFromDataset(element.dataset.pegX),
        y: numberFromDataset(element.dataset.pegY),
      };

      active = {
        candidate: null,
        element,
        lastSafeOffset: startOffset,
        moved: false,
        pointerId: event.pointerId,
        startOffset,
        startPointer: { x: event.clientX, y: event.clientY },
        startRect,
        zIndex: element.style.zIndex,
      };

    }

    function onPointerMove(event: PointerEvent) {
      if (!active || event.pointerId !== active.pointerId) return;

      const delta = {
        x: event.clientX - active.startPointer.x,
        y: event.clientY - active.startPointer.y,
      };

      if (!active.moved && Math.hypot(delta.x, delta.y) < DRAG_THRESHOLD) return;

      event.preventDefault();
      if (!active.moved) {
        active.moved = true;
        active.element.setPointerCapture(event.pointerId);
        active.element.classList.add("is-peg-dragging");
        active.element.setAttribute("aria-grabbed", "true");
        active.element.style.zIndex = "100";
      }

      const boardBox = boardElement.getBoundingClientRect();
      const boardStyle = window.getComputedStyle(boardElement);
      const radius = Math.max(BOARD_PADDING, Number.parseFloat(boardStyle.borderTopLeftRadius) || 0);
      const others = draggableItems()
        .filter((item) => item !== active?.element)
        .map((item) => relativeBox(item, boardBox));
      const desired = {
        x: active.startRect.left + delta.x,
        y: active.startRect.top + delta.y,
      };
      const itemSize = { width: active.startRect.width, height: active.startRect.height };
      const boardSize = { width: boardBox.width, height: boardBox.height };
      const candidate = nearestAnchor(desired, itemSize, others, boardSize, radius);

      active.candidate = candidate;
      if (candidate) showPreview(candidate, itemSize.width, itemSize.height);
      else hidePreview();

      const directBox = boxAt(desired, itemSize.width, itemSize.height);
      if (isValid(directBox, others, boardSize.width, boardSize.height, radius)) {
        const nextOffset = { x: active.startOffset.x + delta.x, y: active.startOffset.y + delta.y };
        active.lastSafeOffset = nextOffset;
        setOffset(active.element, nextOffset);
      }
    }

    function finishDrag(event: PointerEvent) {
      if (!active || event.pointerId !== active.pointerId) return;

      const drag = active;
      active = null;
      hidePreview();

      if (drag.element.hasPointerCapture(event.pointerId)) {
        drag.element.releasePointerCapture(event.pointerId);
      }

      if (!drag.moved) return;

      const boardBox = boardElement.getBoundingClientRect();
      const currentRect = relativeBox(drag.element, boardBox);
      const currentOffset = {
        x: numberFromDataset(drag.element.dataset.pegX),
        y: numberFromDataset(drag.element.dataset.pegY),
      };
      const destination = drag.candidate
        ? {
            x: currentOffset.x + drag.candidate.x - currentRect.left,
            y: currentOffset.y + drag.candidate.y - currentRect.top,
          }
        : drag.startOffset;
      const shouldSnapToPeg = [
        "digital-gold",
        "vyapar-plus",
        "fixed-deposit",
        "photo",
        "contact",
        "resume",
        "archive",
        "headphones",
      ].includes(drag.element.dataset.pegDraggable ?? "");
      const finalDestination = shouldSnapToPeg
        ? snapElementToNearestHole(boardElement, drag.element, destination) ?? drag.startOffset
        : destination;
      const placedInNewPosition = Boolean(
        drag.candidate && Math.hypot(finalDestination.x - drag.startOffset.x, finalDestination.y - drag.startOffset.y) > 1,
      );

      drag.element.classList.remove("is-peg-dragging");
      drag.element.classList.add("is-peg-settling");
      drag.element.removeAttribute("aria-grabbed");
      drag.element.style.zIndex = drag.zIndex;
      setOffset(drag.element, finalDestination);
      if (placedInNewPosition && onPlaced) window.setTimeout(onPlaced, 240);
      window.setTimeout(() => drag.element.classList.remove("is-peg-settling"), 260);

      suppressedElement = drag.element;
      suppressClickUntil = window.performance.now() + 500;
    }

    function onClickCapture(event: MouseEvent) {
      if (!suppressedElement || window.performance.now() > suppressClickUntil) return;
      const origin = event.target;
      if (origin instanceof Node && suppressedElement.contains(origin)) {
        event.preventDefault();
        event.stopPropagation();
        suppressedElement = null;
      }
    }

    function onDragStart(event: DragEvent) {
      const origin = event.target;
      if (origin instanceof Element && origin.closest("[data-peg-draggable]")) event.preventDefault();
    }

    function onDesktopChange() {
      if (!desktopQuery.matches) resetArrangement();
    }

    boardElement.addEventListener("pointerdown", onPointerDown);
    boardElement.addEventListener("pointermove", onPointerMove, { passive: false });
    boardElement.addEventListener("pointerup", finishDrag);
    boardElement.addEventListener("pointercancel", finishDrag);
    boardElement.addEventListener("click", onClickCapture, true);
    boardElement.addEventListener("dragstart", onDragStart);
    desktopQuery.addEventListener("change", onDesktopChange);

    return () => {
      boardElement.removeEventListener("pointerdown", onPointerDown);
      boardElement.removeEventListener("pointermove", onPointerMove);
      boardElement.removeEventListener("pointerup", finishDrag);
      boardElement.removeEventListener("pointercancel", finishDrag);
      boardElement.removeEventListener("click", onClickCapture, true);
      boardElement.removeEventListener("dragstart", onDragStart);
      desktopQuery.removeEventListener("change", onDesktopChange);
    };
  }, [boardRef, onPlaced, previewRef]);
}
