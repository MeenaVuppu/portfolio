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

export function visibleBounds(element: HTMLElement): Bounds {
  const rects = [element, ...element.querySelectorAll<HTMLElement>("*")]
    .filter((node) => {
      if (node.closest('.music-credit__popover, .watercolor-artworks[aria-hidden="true"]')) return false;
      const style = window.getComputedStyle(node);
      // The loading reveal hides whole objects, but their full footprints still count.
      return style.display !== "none" && style.visibility !== "hidden" && (node === element || Number(style.opacity) !== 0);
    })
    .map((node) => node.getBoundingClientRect())
    .filter((rect) => rect.width > 0 && rect.height > 0);

  // A temporarily hidden object still has a layout footprint. Empty extrema
  // would produce infinities and leave the shuffle with no selectable candidate.
  if (rects.length === 0) {
    const rect = element.getBoundingClientRect();
    return { bottom: rect.bottom, left: rect.left, right: rect.right, top: rect.top };
  }

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

function insideBoard(bounds: Bounds, board: DOMRect, radius: number, edge = BOARD_EDGE) {
  if (
    bounds.left < board.left + edge ||
    bounds.top < board.top + edge ||
    bounds.right > board.right - edge ||
    bounds.bottom > board.bottom - edge
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
        {
          x: boardRect.width * 0.030113,
          y: boardRect.height * 0.06167,
          stepX: boardRect.width * 0.03234,
          stepY: boardRect.height * 0.06777,
        },
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

// Read the already-painted material for desktop drag placement only. Initial
// layout/shuffle keeps its existing coordinate model.
export function dragPegboardSurface(board: HTMLElement) {
  const root = board.getBoundingClientRect();
  const style = window.getComputedStyle(board, "::before");
  const scale = root.width / board.offsetWidth || 1;
  const positions = style.backgroundPosition.split(",").map(pair => pair.trim().split(/\s+/).map(Number.parseFloat));
  const sizes = style.backgroundSize.split(",").map(pair => pair.trim().split(/\s+/).map(Number.parseFloat));
  if (style.content === "none" || !sizes[0]?.every(value => value > 0) || !Number.isFinite(Number.parseFloat(style.top))) {
    return { rect: root, holes: pegboardHoles(board) };
  }
  const px = (value: string) => Number.parseFloat(value) || 0;
  const left = root.left + (board.clientLeft + px(style.left)) * scale;
  const top = root.top + (board.clientTop + px(style.top)) * scale;
  const right = root.right - (board.clientLeft + px(style.right)) * scale;
  const bottom = root.bottom - (board.clientTop + px(style.bottom)) * scale;
  const rect = { left, top, right, bottom, width: right - left, height: bottom - top } as DOMRect;
  const holes: Point[] = [];
  // Layers 0 and 2 are hole interiors; 1 and 3 are their highlights.
  for (const index of [0, 2]) {
    const size = sizes[index] ?? sizes[0];
    const position = positions[index];
    if (!position || !size?.every(value => value > 0)) continue;
    const [stepX, stepY] = size.map(value => value * scale);
    const start = (position: number, size: number) => ((position + size / 2) % size + size) % size;
    const x0 = left + px(style.borderLeftWidth) * scale + start(position[0], size[0]) * scale;
    const y0 = top + px(style.borderTopWidth) * scale + start(position[1], size[1]) * scale;
    for (let y = y0; y < bottom; y += stepY) {
      for (let x = x0; x < right; x += stepX) holes.push({ x, y });
    }
  }
  return { rect, holes };
}

export function snapElementToNearestHole(
  board: HTMLElement,
  element: HTMLElement,
  targetOffset?: Point,
  boundsFor: (element: HTMLElement) => Bounds = visibleBounds,
) {
  const result = findElementPegPlacement(board, element, targetOffset, boundsFor);
  if (result) {
    element.dataset.pegX = String(result.x);
    element.dataset.pegY = String(result.y);
    element.style.translate = `${result.x}px ${result.y}px`;
  }
  return result;
}

export function findElementPegPlacement(
  board: HTMLElement,
  element: HTMLElement,
  targetOffset?: Point,
  boundsFor: (element: HTMLElement) => Bounds = visibleBounds,
  surface?: ReturnType<typeof dragPegboardSurface>,
) {

  const anchor = element.querySelector<HTMLElement>(
    "[data-headphone-mount-anchor], .project-file__clip, .pin--one, .peg-pin",
  );

  const boardRect = board.getBoundingClientRect();
  const scale = boardRect.width / board.offsetWidth || 1;
  const elementRect = element.getBoundingClientRect();
  let anchorRect = anchor?.getBoundingClientRect();
  // The existing pickup lift is visual only; calculate the resting anchor.
  const lift = surface ? Number.parseFloat(window.getComputedStyle(element).scale) || 1 : 1;
  if (anchorRect && lift !== 1) {
    const cx = (elementRect.left + elementRect.right) / 2;
    const cy = (elementRect.top + elementRect.bottom) / 2;
    anchorRect = { ...anchorRect,
      left: cx + (anchorRect.left - cx) / lift,
      top: cy + (anchorRect.top - cy) / lift,
      bottom: cy + (anchorRect.bottom - cy) / lift,
      width: anchorRect.width / lift,
      height: anchorRect.height / lift,
    } as DOMRect;
  }
  const currentOffset = {
    x: offsetValue(element.dataset.pegX),
    y: offsetValue(element.dataset.pegY),
  };
  const targetShift = targetOffset
    ? { x: (targetOffset.x - currentOffset.x) * scale, y: (targetOffset.y - currentOffset.y) * scale }
    : { x: 0, y: 0 };
  // These small pins were anchored below the pin head, which pushed their
  // paper outside the board at the first row and rejected that row entirely.
  // Use the same upper attachment reference as folders during dragging only.
  const topRowPin = surface && ["photo", "resume", "archive"].includes(element.dataset.pegDraggable ?? "");
  const anchorY = topRowPin && anchorRect
    ? anchorRect.top + 3 * scale
    : anchor && anchorRect
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
  const assembly = shifted(boundsFor(element), targetShift.x, targetShift.y);
  const otherBounds = Array.from(board.querySelectorAll<HTMLElement>("[data-peg-draggable]"))
    .filter(
      (candidate) => candidate !== element && window.getComputedStyle(candidate).visibility !== "hidden",
    )
    .map((candidate) => boundsFor(candidate));
  const radius = Number.parseFloat(window.getComputedStyle(board).borderTopLeftRadius) || 0;
  const candidates = [...(surface?.holes ?? pegboardHoles(board))].sort(
    (a, b) =>
      (a.x - anchorPoint.x) ** 2 + (a.y - anchorPoint.y) ** 2 -
      ((b.x - anchorPoint.x) ** 2 + (b.y - anchorPoint.y) ** 2),
  );

  for (const hole of candidates) {
    const delta = { x: hole.x - anchorPoint.x, y: hole.y - anchorPoint.y };
    const nextBounds = shifted(assembly, delta.x, delta.y);
    if (!insideBoard(nextBounds, surface?.rect ?? boardRect, radius, surface ? 4 : BOARD_EDGE) || otherBounds.some((other) => overlaps(nextBounds, other))) {
      continue;
    }

    const nextOffset = {
      x: (targetOffset?.x ?? currentOffset.x) + delta.x / scale,
      y: (targetOffset?.y ?? currentOffset.y) + delta.y / scale,
    };
    return nextOffset;
  }

  return null;
}

export const snapHeadphonesToNearestHole = snapElementToNearestHole;
