"use client";

import { type RefObject, useLayoutEffect } from "react";

type Slot = { id: string; x: number; y: number };
type PlacedBox = { bottom: number; left: number; right: number; top: number };
type ShuffleItem = {
  bottomOffset: number;
  element: HTMLElement;
  height: number;
  id: string;
  leftOffset: number;
  rightOffset: number;
  slots: Slot[];
  topOffset: number;
  width: number;
};

const PREVIOUS_LAYOUT_KEY = "portfolio-home-layout-signature";

const DESKTOP_PROJECT_REGIONS: Slot[][] = [
  [{ id: "project-left-high", x: 3, y: 24 }, { id: "project-left-low", x: 4, y: 57 }],
  [{ id: "project-center-high", x: 38, y: 4 }, { id: "project-center-low", x: 38, y: 58 }],
  [{ id: "project-right-high", x: 58, y: 23 }, { id: "project-right-low", x: 58, y: 57 }],
];

const DESKTOP_GENERAL_SLOTS: Slot[] = [
  { id: "general-a", x: 3, y: 3 }, { id: "general-b", x: 22, y: 4 },
  { id: "general-c", x: 39, y: 34 }, { id: "general-d", x: 60, y: 3 },
  { id: "general-e", x: 74, y: 34 }, { id: "general-f", x: 73, y: 66 },
  { id: "general-g", x: 3, y: 66 }, { id: "general-h", x: 22, y: 39 },
  { id: "general-i", x: 41, y: 72 }, { id: "general-j", x: 61, y: 38 },
  { id: "general-k", x: 76, y: 5 }, { id: "general-l", x: 24, y: 68 },
];

const DESKTOP_WATERCOLOR_SLOTS: Slot[] = [
  { id: "watercolor-a", x: 20, y: 5 }, { id: "watercolor-b", x: 22, y: 39 },
  { id: "watercolor-c", x: 22, y: 63 }, { id: "watercolor-d", x: 42, y: 33 },
  { id: "watercolor-e", x: 44, y: 4 }, { id: "watercolor-f", x: 61, y: 35 },
  { id: "watercolor-g", x: 72, y: 63 },
];

const DESKTOP_PLANT_SLOTS: Slot[] = [
  { id: "plant-right-high", x: 81, y: 2 }, { id: "plant-right-mid", x: 81, y: 34 },
  { id: "plant-right-low", x: 81, y: 65 }, { id: "plant-left-high", x: 1, y: 2 },
  { id: "plant-left-low", x: 1, y: 65 },
];

function random(seed: number) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ result >>> 15, result | 1);
    result ^= result + Math.imul(result ^ result >>> 7, result | 61);
    return ((result ^ result >>> 14) >>> 0) / 4294967296;
  };
}

function shuffled<T>(values: T[], next: () => number) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(next() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function overlaps(a: PlacedBox, b: PlacedBox, gap: number) {
  return !(a.right + gap <= b.left || a.left >= b.right + gap || a.bottom + gap <= b.top || a.top >= b.bottom + gap);
}

function boxFor(slot: Slot, item: ShuffleItem, boardWidth: number, boardHeight: number): PlacedBox {
  const anchorLeft = boardWidth * slot.x / 100;
  const anchorTop = boardHeight * slot.y / 100;
  return {
    bottom: anchorTop + item.bottomOffset,
    left: anchorLeft + item.leftOffset,
    right: anchorLeft + item.rightOffset,
    top: anchorTop + item.topOffset,
  };
}

function validBox(box: PlacedBox, placed: PlacedBox[], boardWidth: number, boardHeight: number, gap: number, edge = 10) {
  return box.left >= edge && box.top >= edge && box.right <= boardWidth - edge && box.bottom <= boardHeight - edge
    && !placed.some((other) => overlaps(box, other, gap));
}

function findAssignments(items: ShuffleItem[], placed: PlacedBox[], boardWidth: number, boardHeight: number, gap: number, next: () => number, edge = 10) {
  const assignments = new Map<string, Slot>();
  const ordered = [...items].sort((a, b) => b.width * b.height - a.width * a.height);

  function place(index: number): boolean {
    if (index === ordered.length) return true;
    const item = ordered[index];
    for (const slot of shuffled(item.slots, next)) {
      const box = boxFor(slot, item, boardWidth, boardHeight);
      if (!validBox(box, placed, boardWidth, boardHeight, gap, edge)) continue;
      placed.push(box);
      assignments.set(item.id, slot);
      if (place(index + 1)) return true;
      assignments.delete(item.id);
      placed.pop();
    }
    return false;
  }

  return place(0) ? assignments : null;
}

function compactMobileAssignments(items: ShuffleItem[], boardWidth: number, next: () => number) {
  const edge = 14;
  const gap = 16;
  const placed: PlacedBox[] = [];
  const assignments = new Map<string, Slot>();

  for (const item of items) {
    const left = edge - item.leftOffset;
    const right = boardWidth - edge - item.rightOffset;
    const center = (boardWidth - item.width) / 2 - item.leftOffset;
    const horizontalCandidates = item.id === "digital-gold" || item.id === "vyapar-plus" || item.id === "hives"
      ? shuffled([left, right, center], next)
      : shuffled([left, right], next);

    const candidates = horizontalCandidates.map((anchorLeft) => {
      let anchorTop = edge - item.topOffset;
      for (let iteration = 0; iteration < placed.length + 2; iteration += 1) {
        const candidate = {
          bottom: anchorTop + item.bottomOffset,
          left: anchorLeft + item.leftOffset,
          right: anchorLeft + item.rightOffset,
          top: anchorTop + item.topOffset,
        };
        const blockers = placed.filter((other) => overlaps(candidate, other, gap));
        if (blockers.length === 0) return { anchorLeft, anchorTop, box: candidate };
        anchorTop = Math.max(...blockers.map((blocker) => blocker.bottom)) + gap - item.topOffset;
      }

      const box = {
        bottom: anchorTop + item.bottomOffset,
        left: anchorLeft + item.leftOffset,
        right: anchorLeft + item.rightOffset,
        top: anchorTop + item.topOffset,
      };
      return { anchorLeft, anchorTop, box };
    });
    const bestTop = Math.min(...candidates.map((candidate) => candidate.box.top));
    const earliest = candidates.filter((candidate) => Math.abs(candidate.box.top - bestTop) < 1);
    const selected = earliest[Math.floor(next() * earliest.length)];
    const side = Math.abs(selected.box.left - edge) < 2 ? "left" : Math.abs(selected.box.right - (boardWidth - edge)) < 2 ? "right" : "center";

    placed.push(selected.box);
    assignments.set(item.id, {
      id: `mobile-packed-${side}-${Math.round(selected.anchorTop)}`,
      x: selected.anchorLeft,
      y: selected.anchorTop,
    });
  }

  return {
    assignments,
    height: Math.ceil(Math.max(...placed.map((box) => box.bottom)) + 28),
  };
}

export function usePegboardShuffle(boardRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const mobileQuery = window.matchMedia("(max-width: 760px)");
    let mobile = mobileQuery.matches;
    let layoutFrame: number | null = null;
    const selectors = {
      "digital-gold": '[data-peg-draggable="digital-gold"]',
      "vyapar-plus": '[data-peg-draggable="vyapar-plus"]',
      hives: '[data-peg-draggable="hives"]',
      photo: '[data-peg-draggable="photo"]',
      headphones: '[data-peg-draggable="headphones"]',
      watercolor: '.brushes-object',
      "progress-note": '[data-peg-draggable="progress-note"]',
      resume: '[data-peg-draggable="resume"]',
      contact: '[data-peg-draggable="contact"]',
      linkedin: '[data-peg-draggable="linkedin"]',
      archive: '[data-peg-draggable="archive"]',
      plant: '[data-peg-draggable="plant"]',
    } as const;

    const clearCalculatedLayout = () => {
      board.style.removeProperty("height");
      delete board.dataset.layoutSeed;
      delete board.dataset.shuffleReady;

      for (const selector of Object.values(selectors)) {
        const element = board.querySelector<HTMLElement>(selector);
        if (!element) continue;
        element.style.removeProperty("left");
        element.style.removeProperty("right");
        element.style.removeProperty("top");
        element.style.removeProperty("translate");
        element.style.removeProperty("scale");
        element.style.removeProperty("z-index");
        delete element.dataset.pegX;
        delete element.dataset.pegY;
        delete element.dataset.shuffleSlot;
        element.classList.remove("is-peg-dragging", "is-peg-settling");
      }
    };

    const applyLayout = () => {
      const boardRect = board.getBoundingClientRect();
      const projectRegions = DESKTOP_PROJECT_REGIONS;

      const elements = new Map<string, HTMLElement>();
      for (const [id, selector] of Object.entries(selectors)) {
        const element = board.querySelector<HTMLElement>(selector);
        if (element) elements.set(id, element);
      }

      const dimensions = (id: string, slots: Slot[]): ShuffleItem | null => {
        const element = elements.get(id);
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        if (!mobile) {
          return {
            bottomOffset: rect.height,
            element,
            height: rect.height,
            id,
            leftOffset: 0,
            rightOffset: rect.width,
            slots,
            topOffset: 0,
            width: rect.width,
          };
        }

        const layoutLeft = element.offsetLeft;
        const layoutTop = element.offsetTop;
        const visibleRects = [element, ...element.querySelectorAll<HTMLElement>("*")]
          .filter((node) => {
            const style = window.getComputedStyle(node);
            const closedDetails = node.closest("details:not([open])");
            return (!closedDetails || node.tagName === "SUMMARY")
              && style.display !== "none"
              && style.visibility !== "hidden"
              && Number(style.opacity) !== 0;
          })
          .map((node) => node.getBoundingClientRect())
          .filter((visibleRect) => visibleRect.width > 0 && visibleRect.height > 0);
        const visibleLeft = Math.min(...visibleRects.map((visibleRect) => visibleRect.left)) - boardRect.left;
        const visibleTop = Math.min(...visibleRects.map((visibleRect) => visibleRect.top)) - boardRect.top;
        const visibleRight = Math.max(...visibleRects.map((visibleRect) => visibleRect.right)) - boardRect.left;
        const visibleBottom = Math.max(...visibleRects.map((visibleRect) => visibleRect.bottom)) - boardRect.top;

        return {
          bottomOffset: visibleBottom - layoutTop,
          element,
          height: visibleBottom - visibleTop,
          id,
          leftOffset: visibleLeft - layoutLeft,
          rightOffset: visibleRight - layoutLeft,
          slots,
          topOffset: visibleTop - layoutTop,
          width: visibleRight - visibleLeft,
        };
      };

      const previousSignature = window.sessionStorage.getItem(PREVIOUS_LAYOUT_KEY);
      let selected: Map<string, Slot> | null = null;
      let selectedSignature = "";
      let selectedSeed = 0;
      let selectedMobileHeight = 0;

      for (let attempt = 0; attempt < 160 && !selected; attempt += 1) {
        const seedBytes = new Uint32Array(1);
        window.crypto.getRandomValues(seedBytes);
        const seed = (seedBytes[0] + attempt) >>> 0;
        const next = random(seed);
        const placed: PlacedBox[] = [];
        const assignments = new Map<string, Slot>();
        const projectIds = shuffled(["digital-gold", "vyapar-plus", "hives"], next);

        if (mobile) {
          const secondaryIds = shuffled([
            "photo", "headphones", "watercolor", "plant", "progress-note",
            "resume", "contact", "linkedin", "archive",
          ], next);
          const sequence = [
            ...secondaryIds.slice(0, 2), projectIds[0],
            ...secondaryIds.slice(2, 5), projectIds[1],
            ...secondaryIds.slice(5, 7), projectIds[2],
            ...secondaryIds.slice(7),
          ];
          const items = sequence.map((id) => dimensions(id, [])).filter((item): item is ShuffleItem => item !== null);
          const packed = compactMobileAssignments(items, boardRect.width, next);
          const signature = [...packed.assignments.entries()]
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([id, slot]) => `${id}:${Math.round(slot.x)},${Math.round(slot.y)}`)
            .join("|");
          if (signature === previousSignature) continue;
          selected = packed.assignments;
          selectedSignature = signature;
          selectedSeed = seed;
          selectedMobileHeight = packed.height;
          break;
        }

        let projectsValid = true;

        for (let region = 0; region < projectRegions.length; region += 1) {
          const item = dimensions(projectIds[region], projectRegions[region]);
          if (!item) continue;
          const slot = shuffled(projectRegions[region], next).find((candidate) => {
            const box = boxFor(candidate, item, boardRect.width, boardRect.height);
            return validBox(box, placed, boardRect.width, boardRect.height, mobile ? 14 : 14, mobile ? 14 : 10);
          });
          if (!slot) {
            projectsValid = false;
            break;
          }
          assignments.set(item.id, slot);
          placed.push(boxFor(slot, item, boardRect.width, boardRect.height));
        }

        if (!projectsValid) continue;

        const remaining = [
          dimensions("resume", DESKTOP_GENERAL_SLOTS),
          dimensions("contact", DESKTOP_GENERAL_SLOTS),
          dimensions("linkedin", DESKTOP_GENERAL_SLOTS),
          dimensions("plant", DESKTOP_PLANT_SLOTS),
          dimensions("photo", DESKTOP_GENERAL_SLOTS),
          dimensions("watercolor", DESKTOP_WATERCOLOR_SLOTS),
          dimensions("headphones", DESKTOP_GENERAL_SLOTS),
          dimensions("progress-note", DESKTOP_GENERAL_SLOTS),
          dimensions("archive", DESKTOP_GENERAL_SLOTS),
        ].filter((item): item is ShuffleItem => item !== null);
        const rest = findAssignments(remaining, placed, boardRect.width, boardRect.height, 14, next);
        if (!rest) continue;
        rest.forEach((slot, id) => assignments.set(id, slot));

        const signature = [...assignments.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([id, slot]) => `${id}:${slot.id}`).join("|");
        if (signature === previousSignature) continue;
        selected = assignments;
        selectedSignature = signature;
        selectedSeed = seed;
      }

      if (!selected) return;
      selected.forEach((slot, id) => {
        const element = elements.get(id);
        if (!element) return;
        element.style.left = mobile ? `${slot.x}px` : `${slot.x}%`;
        element.style.right = "auto";
        element.style.top = mobile ? `${slot.y}px` : `${slot.y}%`;
        element.dataset.shuffleSlot = slot.id;
      });
      if (mobile && selectedMobileHeight > 0) {
        board.style.height = `${selectedMobileHeight}px`;
        for (let pass = 0; pass < 12; pass += 1) {
          const currentBoardRect = board.getBoundingClientRect();
          const lowestVisibleEdge = Math.max(...[...elements.values()].flatMap((element) =>
            [element, ...element.querySelectorAll<HTMLElement>("*")]
              .filter((node) => {
                const style = window.getComputedStyle(node);
                return style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) !== 0;
              })
              .map((node) => node.getBoundingClientRect().bottom - currentBoardRect.top),
          ));
          const fittedHeight = Math.ceil(lowestVisibleEdge + 28);
          if (Math.abs(board.getBoundingClientRect().height - fittedHeight) < 1) break;
          board.style.height = `${fittedHeight}px`;
        }
      }
      board.dataset.layoutSeed = String(selectedSeed);
      board.dataset.shuffleReady = "true";
      window.sessionStorage.setItem(PREVIOUS_LAYOUT_KEY, selectedSignature);
    };

    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches === mobile) return;
      mobile = event.matches;
      clearCalculatedLayout();
      layoutFrame = window.requestAnimationFrame(() => {
        layoutFrame = null;
        applyLayout();
      });
    };

    applyLayout();
    mobileQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mobileQuery.removeEventListener("change", handleBreakpointChange);
      if (layoutFrame !== null) window.cancelAnimationFrame(layoutFrame);
    };
  }, [boardRef]);
}
