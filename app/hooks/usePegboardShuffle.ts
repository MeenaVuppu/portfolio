"use client";

import { type RefObject, useLayoutEffect } from "react";
import { visibleBounds } from "../lib/headphoneMount";

type Slot = { id: string; x: number; y: number };
type PlacedBox = { bottom: number; id?: string; left: number; right: number; top: number };
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

type RuntimeLayout = {
  viewport?: { width: number; height: number };
  assignments: Array<[string, Slot]>;
  mobileHeight: number;
  seed: number;
  signature: string;
  placement?: {
    height: string;
    objects: Array<{ id: string; left: string; right: string; top: string; translate: string; x?: string; y?: string }>;
  };
};

// The page owns the cache: production routes can load separate module instances.
// A new document (refresh/new visit) intentionally starts with an empty cache.
type LayoutWindow = Window & { __portfolioHomeLayouts?: Map<"desktop" | "mobile", RuntimeLayout> };

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
  const placed: PlacedBox[] = [];
  const assignments = new Map<string, Slot>();
  const isLarge = (id?: string) => id === "digital-gold" || id === "vyapar-plus" || id === "fixed-deposit" || id === "plant";

  for (const item of items) {
    const left = edge - item.leftOffset;
    const right = boardWidth - edge - item.rightOffset;
    const center = (boardWidth - item.width) / 2 - item.leftOffset;
    const horizontalCandidates = shuffled([left, center, right], next);

    const candidates = horizontalCandidates.map((anchorLeft) => {
      let anchorTop = edge - item.topOffset;
      for (let iteration = 0; iteration < placed.length + 2; iteration += 1) {
        const candidate = {
          bottom: anchorTop + item.bottomOffset,
          left: anchorLeft + item.leftOffset,
          right: anchorLeft + item.rightOffset,
          top: anchorTop + item.topOffset,
        };
        const blockers = placed.filter((other) => overlaps(candidate, other, isLarge(item.id) || isLarge(other.id) ? 32 : 24));
        if (blockers.length === 0) return { anchorLeft, anchorTop, box: candidate };
        anchorTop = Math.max(...blockers.map((blocker) => blocker.bottom + (isLarge(item.id) || isLarge(blocker.id) ? 32 : 24))) - item.topOffset;
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

    placed.push({ ...selected.box, id: item.id });
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

// Short desktop windows can exhaust the curated slots. Pack the same objects
// into available space instead of leaving the overlapping CSS fallback visible.
function packDesktop(items: ShuffleItem[], width: number, height: number, next: () => number) {
  const gap = 18;
  let free = [{ left: 22, top: 22, right: width - 22, bottom: height - 22 }];
  const result = new Map<string, Slot>();
  const ordered = items.map(item => ({ item, rank: Math.max(item.width, item.height) * (0.8 + next() * 0.4) }))
    .sort((a, b) => b.rank - a.rank).map(entry => entry.item);
  for (const item of ordered) {
    const choices = free.filter(r => r.right - r.left >= item.width && r.bottom - r.top >= item.height);
    choices.sort((a, b) =>
      Math.min(a.right - a.left - item.width, a.bottom - a.top - item.height) -
      Math.min(b.right - b.left - item.width, b.bottom - b.top - item.height));
    const space = choices[0];
    if (!space) return null;
    const box = { left: space.left, top: space.top, right: space.left + item.width, bottom: space.top + item.height };
    result.set(item.id, {
      id: `packed-${item.id}`,
      x: (box.left - item.leftOffset) / width * 100,
      y: (box.top - item.topOffset) / height * 100,
    });
    const split: typeof free = [];
    for (const r of free) {
      if (!overlaps(box, r, gap)) { split.push(r); continue; }
      if (box.left - gap > r.left) split.push({ ...r, right: box.left - gap });
      if (box.right + gap < r.right) split.push({ ...r, left: box.right + gap });
      if (box.top - gap > r.top) split.push({ ...r, bottom: box.top - gap });
      if (box.bottom + gap < r.bottom) split.push({ ...r, top: box.bottom + gap });
    }
    free = split.filter((r, i) => !split.some((other, j) => j !== i &&
      other.left <= r.left && other.top <= r.top && other.right >= r.right && other.bottom >= r.bottom &&
      (j < i || other.left < r.left || other.top < r.top || other.right > r.right || other.bottom > r.bottom)));
  }
  return result;
}

export function usePegboardShuffle(boardRef: RefObject<HTMLElement | null>, projectModeActive = false) {
  useLayoutEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const page = window as LayoutWindow;
    const runtimeLayouts = page.__portfolioHomeLayouts ??= new Map<"desktop" | "mobile", RuntimeLayout>();
    const mobileQuery = window.matchMedia("(max-width: 760px)");
    let mobile = mobileQuery.matches;
    let layoutFrame: number | null = null;
    const selectors = {
      "digital-gold": '[data-peg-draggable="digital-gold"]',
      "vyapar-plus": '[data-peg-draggable="vyapar-plus"]',
      "fixed-deposit": '[data-peg-draggable="fixed-deposit"]',
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
      delete board.dataset.layoutRestored;

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
      if (mobile && !projectModeActive && !runtimeLayouts.has("mobile")) {
        // A fresh mobile board starts below its header, rather than inheriting
        // a previous document's scroll. In-app returns use the saved board scroll.
        window.history.scrollRestoration = "manual";
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      const visualBoardRect = board.getBoundingClientRect();
      const boardScale = visualBoardRect.width / board.offsetWidth || 1;
      const boardRect = { left: visualBoardRect.left, top: visualBoardRect.top, width: visualBoardRect.width / boardScale, height: visualBoardRect.height / boardScale };
      const projectRegions = DESKTOP_PROJECT_REGIONS;

      const elements = new Map<string, HTMLElement>();
      for (const [id, selector] of Object.entries(selectors)) {
        const element = board.querySelector<HTMLElement>(selector);
        if (element) elements.set(id, element);
      }

      const measuredBounds = new Map([...elements].map(([id, element]) => [id, visibleBounds(element)]));
      const dimensions = (id: string, slots: Slot[]): ShuffleItem | null => {
        const element = elements.get(id);
        if (!element) return null;
        const style = window.getComputedStyle(element);
        // CSS left/top place the margin box; offsetLeft/Top report its border box.
        const layoutLeft = element.offsetLeft - (Number.parseFloat(style.marginLeft) || 0);
        const layoutTop = element.offsetTop - (Number.parseFloat(style.marginTop) || 0);
        const bounds = measuredBounds.get(id)!;
        const visibleLeft = (bounds.left - boardRect.left) / boardScale;
        const visibleTop = (bounds.top - boardRect.top) / boardScale;
        const visibleRight = (bounds.right - boardRect.left) / boardScale;
        const visibleBottom = (bounds.bottom - boardRect.top) / boardScale;

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

      const savedLayout = runtimeLayouts.get(mobile ? "mobile" : "desktop");
      const sameViewport = savedLayout?.viewport?.width === window.innerWidth &&
        (mobile || savedLayout?.viewport?.height === window.innerHeight);
      if (savedLayout?.placement && sameViewport) {
        // Restore the final snapped/dragged state before paint, without measuring
        // the hidden project-mode board or rerunning initial alignment.
        board.style.height = savedLayout.placement.height;
        savedLayout.placement.objects.forEach(({ id, left, right, top, translate, x, y }) => {
          const element = elements.get(id);
          if (!element) return;
          Object.assign(element.style, { left, right, top, translate });
          if (x !== undefined) element.dataset.pegX = x;
          if (y !== undefined) element.dataset.pegY = y;
        });
        savedLayout.assignments.forEach(([id, slot]) => {
          const element = elements.get(id);
          if (element) element.dataset.shuffleSlot = slot.id;
        });
        board.dataset.layoutSeed = String(savedLayout.seed);
        board.dataset.layoutRestored = "true";
        board.dataset.shuffleReady = "true";
        return;
      }

      if (projectModeActive || window.getComputedStyle(board.firstElementChild as Element).visibility === "hidden") return;

      const previousSignature = window.sessionStorage.getItem(PREVIOUS_LAYOUT_KEY);
      const runtimeLayout = runtimeLayouts.get(mobile ? "mobile" : "desktop");
      let selected: Map<string, Slot> | null = runtimeLayout && sameViewport ? new Map(runtimeLayout.assignments) : null;
      let selectedSignature = runtimeLayout?.signature ?? "";
      let selectedSeed = runtimeLayout?.seed ?? 0;
      let selectedMobileHeight = runtimeLayout?.mobileHeight ?? 0;

      for (let attempt = 0; attempt < 160 && !selected; attempt += 1) {
        const seedBytes = new Uint32Array(1);
        window.crypto.getRandomValues(seedBytes);
        const seed = ((runtimeLayout?.seed ?? seedBytes[0]) + attempt) >>> 0;
        const next = random(seed);
        const placed: PlacedBox[] = [];
        const assignments = new Map<string, Slot>();
        const projectIds = shuffled(["digital-gold", "vyapar-plus", "fixed-deposit"], next);

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
          let packed = compactMobileAssignments(items, boardRect.width, next);
          const viewportBottom = Math.min(window.innerHeight, window.visualViewport?.height ?? window.innerHeight) - boardRect.top - 14;
          const featured = items.filter((item) => item.id === "digital-gold" || item.id === "vyapar-plus");
          const hasVisibleProject = featured.some((item) => {
            const slot = packed.assignments.get(item.id);
            return slot && slot.y + item.topOffset >= 0 && slot.y + item.bottomOffset <= viewportBottom;
          });
          if (!hasVisibleProject) {
            // Keep the ordinary random composition when it already satisfies
            // the viewport constraint. Otherwise lead with either featured file
            // during initial packing, before any positions reach the DOM.
            const first = featured.find((item) => item.id === projectIds.find((id) => id !== "fixed-deposit"));
            if (first) packed = compactMobileAssignments([first, ...items.filter((item) => item !== first)], boardRect.width, next);
          }
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
        if (signature === previousSignature && !runtimeLayout) continue;
        selected = assignments;
        selectedSignature = signature;
        selectedSeed = seed;
      }

      if (!selected && !mobile) {
        const seedBytes = new Uint32Array(1);
        window.crypto.getRandomValues(seedBytes);
        selectedSeed = runtimeLayout?.seed ?? seedBytes[0];
        const next = random(selectedSeed);
        const items = Object.keys(selectors).map(id => dimensions(id, []))
          .filter((item): item is ShuffleItem => item !== null);
        for (let attempt = 0; attempt < 32 && !selected; attempt += 1) {
          selected = packDesktop(items, boardRect.width, boardRect.height, next);
        }
        if (selected) selectedSignature = [...selected].map(([id, slot]) => `${id}:${slot.x},${slot.y}`).join("|");
      }
      if (!selected) return;
      runtimeLayouts.set(mobile ? "mobile" : "desktop", {
        viewport: { width: window.innerWidth, height: window.innerHeight },
        assignments: [...selected.entries()],
        mobileHeight: selectedMobileHeight,
        seed: selectedSeed,
        signature: selectedSignature,
      });
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
          const lowestVisibleEdge = Math.max(...[...elements.values()].map((element) =>
            visibleBounds(element).bottom - currentBoardRect.top,
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

    const handleResize = () => {
      if (board.closest(".is-project-mode")) return;
      const saved = runtimeLayouts.get(mobile ? "mobile" : "desktop");
      if (saved?.viewport?.width === window.innerWidth && (mobile || saved?.viewport?.height === window.innerHeight)) return;
      if (layoutFrame !== null) window.cancelAnimationFrame(layoutFrame);
      layoutFrame = window.requestAnimationFrame(() => {
        layoutFrame = null;
        clearCalculatedLayout();
        applyLayout();
      });
    };

    const savePlacement = () => {
      if (board.closest(".is-project-mode") || board.dataset.shuffleReady !== "true") return;
      const layout = runtimeLayouts.get(mobile ? "mobile" : "desktop");
      if (!layout) return;
      layout.placement = {
        height: board.style.height,
        objects: Object.entries(selectors).flatMap(([id, selector]) => {
          const element = board.querySelector<HTMLElement>(selector);
          return element ? [{
            id, left: element.style.left, right: element.style.right,
            top: element.style.top, translate: element.style.translate,
            x: element.dataset.pegX, y: element.dataset.pegY,
          }] : [];
        }),
      };
    };
    const placementObserver = new MutationObserver(savePlacement);
    applyLayout();
    savePlacement();
    placementObserver.observe(board, { subtree: true, attributes: true, attributeFilter: ["style"] });
    mobileQuery.addEventListener("change", handleBreakpointChange);
    window.addEventListener("resize", handleResize);

    return () => {
      savePlacement();
      placementObserver.disconnect();
      mobileQuery.removeEventListener("change", handleBreakpointChange);
      window.removeEventListener("resize", handleResize);
      if (layoutFrame !== null) window.cancelAnimationFrame(layoutFrame);
    };
  }, [boardRef, projectModeActive]);
}
