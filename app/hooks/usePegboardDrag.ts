"use client";

import { type RefObject, useEffect } from "react";

import { dragPegboardSurface, findElementPegPlacement } from "../lib/headphoneMount";

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
  snappedOffset: Point | null;
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

function numberFromDataset(value: string | undefined) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function dragBounds(element: HTMLElement) {
  const measured = element.getBoundingClientRect();
  const lift = hasPegAnchor(element) && element.classList.contains("is-peg-dragging")
    ? Number.parseFloat(window.getComputedStyle(element).scale) || 1 : 1;
  const cx = (measured.left + measured.right) / 2;
  const cy = (measured.top + measured.bottom) / 2;
  const rect = {
    left: cx - measured.width / lift / 2,
    right: cx + measured.width / lift / 2,
    top: cy - measured.height / lift / 2,
    bottom: cy + measured.height / lift / 2,
    width: measured.width / lift,
    height: measured.height / lift,
  };
  // The replacement shelf image is tightly cropped; its old holder-only
  // insets would exclude the books and shelf ends from collision checks.
  const insets = (element.dataset.pegDraggable === "watercolor" ? "0,0,0,0" : element.dataset.pegBounds ?? "0,0,0,0")
    .split(",")
    .map((value) => Number.parseFloat(value) || 0);
  const [leftRatio, topRatio, rightRatio, bottomRatio] = insets;
  const insetLeft = rect.width * leftRatio;
  const insetTop = rect.height * topRatio;
  const insetRight = rect.width * rightRatio;
  const insetBottom = rect.height * bottomRatio;
  return {
    bottom: rect.bottom - insetBottom,
    left: rect.left + insetLeft,
    right: rect.right - insetRight,
    top: rect.top + insetTop,
  };
}

function relativeBox(element: HTMLElement, boardBox: DOMRect): Box {
  const rect = dragBounds(element);
  const scale = boardBox.width / element.closest<HTMLElement>(".fixed-board")!.offsetWidth || 1;

  return {
    bottom: (rect.bottom - boardBox.top) / scale,
    height: (rect.bottom - rect.top) / scale,
    left: (rect.left - boardBox.left) / scale,
    right: (rect.right - boardBox.left) / scale,
    top: (rect.top - boardBox.top) / scale,
    width: (rect.right - rect.left) / scale,
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

function fitsBoard(box: Box, width: number, height: number, radius: number, padding = BOARD_PADDING) {
  if (
    box.left < padding ||
    box.top < padding ||
    box.right > width - padding ||
    box.bottom > height - padding
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

function isValid(box: Box, others: Box[], boardWidth: number, boardHeight: number, radius: number, padding = BOARD_PADDING) {
  return fitsBoard(box, boardWidth, boardHeight, radius, padding) && !others.some((other) => overlaps(box, other));
}

function nearestAnchor(
  desired: Point,
  itemSize: { width: number; height: number },
  others: Box[],
  boardSize: { width: number; height: number },
  radius: number,
  padding = BOARD_PADDING,
  visibleInsets = { left: 0, top: 0, right: 0, bottom: 0 },
) {
  const candidates: Array<Point & { distance: number }> = [];
  const minX = padding + visibleInsets.left;
  const minY = padding + visibleInsets.top;
  const maxX = boardSize.width - padding - itemSize.width - visibleInsets.right;
  const maxY = boardSize.height - padding - itemSize.height - visibleInsets.bottom;

  // Consider actual free-space edges, not an unrelated coarse grid that can
  // miss every valid position for a large folder in a narrow gap.
  const xs = [desired.x, minX, maxX, ...others.flatMap(box =>
    [box.right + COLLISION_GAP, box.left - itemSize.width - COLLISION_GAP])];
  const ys = [desired.y, minY, maxY, ...others.flatMap(box =>
    [box.bottom + COLLISION_GAP, box.top - itemSize.height - COLLISION_GAP])];
  // The plant's full foliage may reach a rounded corner even when its inset
  // collision box fits. Include edge positions clear of the corner arc, rather
  // than rejecting the entire top row when the pointer is above/near a corner.
  if (visibleInsets.left || visibleInsets.top || visibleInsets.right || visibleInsets.bottom) {
    xs.push(radius + visibleInsets.left, boardSize.width - radius - itemSize.width - visibleInsets.right);
    ys.push(radius + visibleInsets.top, boardSize.height - radius - itemSize.height - visibleInsets.bottom);
  }
  for (const y of ys) {
    for (const x of xs) {
      candidates.push({ x, y, distance: (x - desired.x) ** 2 + (y - desired.y) ** 2 });
    }
  }

  const abovePlantEdge = visibleInsets.top > 0 && desired.y < minY;
  candidates.sort((a, b) => {
    if (abovePlantEdge && (a.y === minY) !== (b.y === minY)) return a.y === minY ? -1 : 1;
    return a.distance - b.distance;
  });
  for (const candidate of candidates) {
    const candidateBox = boxAt(candidate, itemSize.width, itemSize.height);
    const visibleBox = { ...candidateBox,
      left: candidateBox.left - visibleInsets.left, top: candidateBox.top - visibleInsets.top,
      right: candidateBox.right + visibleInsets.right, bottom: candidateBox.bottom + visibleInsets.bottom,
    };
    if (isValid(candidateBox, others, boardSize.width, boardSize.height, radius, padding) &&
        fitsBoard(visibleBox, boardSize.width, boardSize.height, radius, padding)) {
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

function hasPegAnchor(element: HTMLElement) {
  return ["digital-gold", "vyapar-plus", "fixed-deposit", "photo", "contact", "resume", "archive", "headphones", "linkedin", "progress-note", "theme"]
    .includes(element.dataset.pegDraggable ?? "");
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
      if (origin.closest(".music-credit")) return;
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
        snappedOffset: null,
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

      const scale = boardElement.getBoundingClientRect().width / boardElement.offsetWidth || 1;
      const delta = {
        x: (event.clientX - active.startPointer.x) / scale,
        y: (event.clientY - active.startPointer.y) / scale,
      };

      if (!active.moved && Math.hypot(delta.x, delta.y) * scale < DRAG_THRESHOLD) return;

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
      const boardSize = { width: boardElement.offsetWidth, height: boardElement.offsetHeight };
      let candidate = nearestAnchor(desired, itemSize, others, boardSize, radius);
      const usesPaintedBoundary = ["watercolor", "plant"].includes(active.element.dataset.pegDraggable ?? "");
      const surface = hasPegAnchor(active.element) || usesPaintedBoundary ? dragPegboardSurface(boardElement) : null;
      // The plant's collision insets exclude transparent image padding, but
      // its foliage must still stay inside the board when testing boundaries.
      const plant = active.element.dataset.pegDraggable === "plant";
      const raw = active.element.getBoundingClientRect();
      const plantInsets = (active.element.dataset.pegBounds ?? "0,0,0,0").split(",").map(Number);
      const visibleInsets = plant ? {
        left: raw.width * plantInsets[0] / scale, top: raw.height * plantInsets[1] / scale,
        right: raw.width * plantInsets[2] / scale, bottom: raw.height * plantInsets[3] / scale,
      } : { left: 0, top: 0, right: 0, bottom: 0 };
      if (surface && usesPaintedBoundary) {
        // These unpinned objects use the same painted edge as pinned objects,
        // without changing their geometry or introducing peg snapping.
        const origin = { x: (surface.rect.left - boardBox.left) / scale, y: (surface.rect.top - boardBox.top) / scale };
        const localOthers = others.map(box => ({ ...box,
          left: box.left - origin.x, right: box.right - origin.x,
          top: box.top - origin.y, bottom: box.bottom - origin.y,
        }));
        const local = nearestAnchor({ x: desired.x - origin.x, y: desired.y - origin.y }, itemSize,
          localOthers, { width: surface.rect.width / scale, height: surface.rect.height / scale }, radius, 4 / scale, visibleInsets);
        candidate = local ? { x: local.x + origin.x, y: local.y + origin.y } : null;
      } else if (surface) {
        // Preview and release must use one solver, one geometry and one result.
        active.snappedOffset = findElementPegPlacement(boardElement, active.element, {
          x: active.startOffset.x + delta.x,
          y: active.startOffset.y + delta.y,
        }, dragBounds, surface);
        const current = relativeBox(active.element, boardBox);
        const offset = active.snappedOffset;
        candidate = offset ? {
          x: current.left + offset.x - numberFromDataset(active.element.dataset.pegX),
          y: current.top + offset.y - numberFromDataset(active.element.dataset.pegY),
        } : null;
      }

      active.candidate = candidate;
      if (candidate) showPreview(candidate, itemSize.width, itemSize.height);
      else hidePreview();

      const directBox = boxAt(desired, itemSize.width, itemSize.height);
      const fitsSurface = surface
        ? fitsBoard(boxAt({
            x: desired.x - (surface.rect.left - boardBox.left) / scale - visibleInsets.left,
            y: desired.y - (surface.rect.top - boardBox.top) / scale - visibleInsets.top,
          }, itemSize.width + visibleInsets.left + visibleInsets.right,
          itemSize.height + visibleInsets.top + visibleInsets.bottom), surface.rect.width / scale, surface.rect.height / scale, radius, 4 / scale)
        : fitsBoard(directBox, boardSize.width, boardSize.height, radius);
      if (fitsSurface) {
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
      // The bookshelf has no pin/clip anchor. Snapping its top edge to a hole
      // can reject free space; it settles at the validated candidate instead.
      const finalDestination = hasPegAnchor(drag.element)
        ? drag.snappedOffset ?? drag.startOffset
        : destination;
      drag.element.classList.remove("is-peg-dragging");
      drag.element.classList.add("is-peg-settling");
      drag.element.removeAttribute("aria-grabbed");
      drag.element.style.zIndex = drag.zIndex;
      setOffset(drag.element, finalDestination);
      if (onPlaced) window.setTimeout(onPlaced, 240);
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
