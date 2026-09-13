type Point = { x: number; y: number };

type Bounds = {
  bottom: number;
  left: number;
  right: number;
  top: number;
};

const ASSEMBLY_GAP = 14;
const BOARD_EDGE = 12;

function offsetValue(value: string | undefined) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function visibleBounds(element: HTMLElement): Bounds {
  const rects = [element, ...element.querySelectorAll<HTMLElement>("*")]
    .filter((node) => {
      if (node.closest(".music-credit__popover")) return false;
      const style = window.getComputedStyle(node);
      return style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) !== 0;
    })
    .map((node) => node.getBoundingClientRect())
    .filter((rect) => rect.width > 0 && rect.height > 0);

  return {
    bottom: Math.max(...rects.map((rect) => rect.bottom)),
    left: Math.min(...rects.map((rect) => rect.left)),
    right: Math.max(...rects.map((rect) => rect.right)),
    top: Math.min(...rects.map((rect) => rect.top)),
  };
}

function shifted(bounds: Bounds, x: number, y: number): Bounds {
  return {
    bottom: bounds.bottom + y,
    left: bounds.left + x,
    right: bounds.right + x,
    top: bounds.top + y,
  };
}

function overlaps(a: Bounds, b: Bounds) {
  return !(
    a.right + ASSEMBLY_GAP <= b.left ||
    a.left >= b.right + ASSEMBLY_GAP ||
    a.bottom + ASSEMBLY_GAP <= b.top ||
    a.top >= b.bottom + ASSEMBLY_GAP
  );
}

function insideBoard(bounds: Bounds, board: DOMRect, radius: number) {
  if (
    bounds.left < board.left + BOARD_EDGE ||
    bounds.top < board.top + BOARD_EDGE ||
    bounds.right > board.right - BOARD_EDGE ||
    bounds.bottom > board.bottom - BOARD_EDGE
  ) {
    return false;
  }

  const corners = [
    [bounds.left, bounds.top],
    [bounds.right, bounds.top],
    [bounds.left, bounds.bottom],
    [bounds.right, bounds.bottom],
  ];

  return corners.every(([x, y]) => {
    const left = x < board.left + radius;
    const right = x > board.right - radius;
    const top = y < board.top + radius;
    const bottom = y > board.bottom - radius;
    if ((!left && !right) || (!top && !bottom)) return true;
    const centerX = left ? board.left + radius : board.right - radius;
    const centerY = top ? board.top + radius : board.bottom - radius;
    return (x - centerX) ** 2 + (y - centerY) ** 2 <= radius ** 2;
  });
}

function pegboardHoles(board: HTMLElement): Point[] {
  const mobile = window.matchMedia("(max-width: 760px)").matches;
  const boardRect = board.getBoundingClientRect();
  const originX = board.clientLeft;
  const originY = board.clientTop;
  const patterns = mobile
    ? [
        { x: 19.7, y: 19.6, stepX: 48, stepY: 80 },
        { x: 43.7, y: 59.6, stepX: 48, stepY: 80 },
      ]
    : [
        { x: 21.7, y: 19.6, stepX: 56, stepY: 84 },
        { x: 49.7, y: 61.6, stepX: 56, stepY: 84 },
      ];
  const holes: Point[] = [];

  for (const pattern of patterns) {
    for (let y = pattern.y; y < boardRect.height; y += pattern.stepY) {
      for (let x = pattern.x; x < boardRect.width; x += pattern.stepX) {
        holes.push({ x: boardRect.left + originX + x, y: boardRect.top + originY + y });
      }
    }
  }

  return holes;
}

export function snapElementToNearestHole(board: HTMLElement, element: HTMLElement, targetOffset?: Point) {
  const anchor = element.querySelector<HTMLElement>(
    "[data-headphone-mount-anchor], .project-file__clip, .pin--one, .peg-pin",
  );

  const boardRect = board.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  const anchorRect = anchor?.getBoundingClientRect();
  const currentOffset = {
    x: offsetValue(element.dataset.pegX),
    y: offsetValue(element.dataset.pegY),
  };
  const targetShift = targetOffset
    ? { x: targetOffset.x - currentOffset.x, y: targetOffset.y - currentOffset.y }
    : { x: 0, y: 0 };
  const anchorY = anchor && anchorRect
    ? anchor.matches("[data-headphone-mount-anchor]")
      ? anchorRect.top + anchorRect.height / 2
      : anchor.matches(".project-file__clip")
        ? anchorRect.top + 3
        : anchorRect.bottom + 7
    : elementRect.top;
  const anchorPoint = {
    x: (anchorRect ? anchorRect.left + anchorRect.width / 2 : elementRect.left + elementRect.width / 2) + targetShift.x,
    y: anchorY + targetShift.y,
  };
  const assembly = shifted(visibleBounds(element), targetShift.x, targetShift.y);
  const otherBounds = Array.from(board.querySelectorAll<HTMLElement>("[data-peg-draggable]"))
    .filter((candidate) => candidate !== element)
    .map((candidate) => candidate.getBoundingClientRect());
  const radius = Number.parseFloat(window.getComputedStyle(board).borderTopLeftRadius) || 0;
  const candidates = pegboardHoles(board).sort(
    (a, b) =>
      (a.x - anchorPoint.x) ** 2 + (a.y - anchorPoint.y) ** 2 -
      ((b.x - anchorPoint.x) ** 2 + (b.y - anchorPoint.y) ** 2),
  );

  for (const hole of candidates) {
    const delta = { x: hole.x - anchorPoint.x, y: hole.y - anchorPoint.y };
    const nextBounds = shifted(assembly, delta.x, delta.y);
    if (!insideBoard(nextBounds, boardRect, radius) || otherBounds.some((other) => overlaps(nextBounds, other))) {
      continue;
    }

    const nextOffset = {
      x: (targetOffset?.x ?? currentOffset.x) + delta.x,
      y: (targetOffset?.y ?? currentOffset.y) + delta.y,
    };
    element.dataset.pegX = String(nextOffset.x);
    element.dataset.pegY = String(nextOffset.y);
    element.style.translate = `${nextOffset.x}px ${nextOffset.y}px`;
    return nextOffset;
  }

  return null;
}

export const snapHeadphonesToNearestHole = snapElementToNearestHole;
