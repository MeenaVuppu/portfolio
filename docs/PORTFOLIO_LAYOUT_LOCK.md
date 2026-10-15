# Portfolio layout lock — v1

Approved on 2026-10-15. This document records the current user-approved layout; it does not request a redesign or normalize the intentionally different top gaps.

- Permanent baseline tag: `portfolio-layout-locked-v1`
- Approved code commit: `9324ccd7483777b2b7656789866d628e4a19774a`
- Branch at approval: `portfolio-fallback-6b0e867`
- The tag points to the approved code commit, before this documentation-only commit. Do not move or overwrite the tag.

> DO NOT modify approved pegboard dimensions,
> margins, scaling, or responsive layout behavior
> unless explicitly requested by the user.
>
> All future changes must preserve this baseline.

## Measurement conventions and approved desktop measurements

Values below record the rendered measurements from the preceding verification of this approved CSS, rounded to approximately 0.1px. They are not new cross-browser measurements. CSS pixels, normal browser zoom. Measure the homepage's visible pink `::before` rectangle after transforms, not just its coordinate-area wrapper. Soft shadow falloff is not a hard board edge. Top gap is measured below the 64px header. Project bottom gap is measured after the entire board at the document bottom.

| Viewport | Homepage visible pink width × height | Homepage coordinate-area rendered width × height | Header bottom | Pink top | Home top gap | Home left / right / bottom |
| --- | --- | --- | --- | --- | --- | --- |
| 1440×900 | 1347.8 × 782.9 | 1347.8 × 743.8 | 64 | 71.0 | ~7.0 | 46.08 / 46.08 / 46.08 |
| 1800×1042 | 1704 × 923 | 1704 × 882 | 64 | 71 | 7 | 48 / 48 / 48 |
| 1920×1080 | 1824 × 961 | 1824 × 920 | 64 | 71 | 7 | 48 / 48 / 48 |

The visible material extends above the unchanged object coordinate area. Its height is therefore larger than the coordinate area's height. The visible-height values above follow from the verified top and bottom boundaries; do not substitute the old 882px coordinate height for the current visible pink height at 1800×1042.

| Viewport | Project board width | Project board height | Project top / header-to-board gap | Project left / right / bottom |
| --- | --- | --- | --- | --- |
| 1440×900 | 1347.8 | Content-driven | 70 / 6 | 46.08 / 46.08 / 46.08 |
| 1800×1042 | 1704 | Content-driven | 70 / 6 | 48 / 48 / 48 |
| 1920×1080 | 1824 | Content-driven | 70 / 6 | 48 / 48 / 48 |

These project measurements apply to Vyapar Plus, Digital Gold, and Fixed Deposit. Project heights intentionally vary with content and must not be fixed to the viewport. Preserve natural vertical scrolling. Homepage has no horizontal or vertical scrolling at these desktop sizes. The approximately 1px difference between the homepage and project top gaps is approved.

## Active desktop CSS and coordinate system

Source of truth: `app/globals.css` at the tagged commit. Relevant selectors:

- `.portfolio-title-header` and `.portfolio-state-stage`: shared header and stage positioning.
- `.portfolio-experience.is-board-mode .fixed-landing`: at widths >=761px, `height: calc(100dvh - 76px)`, `min-height: 0`, `position: relative`.
- `.portfolio-experience.is-board-mode .fixed-board`: logical object coordinate area, centered with `left: 50%`, `transform-origin: top center`, and `transform: translateX(-50%) scale(var(--home-fit))`.
- `.portfolio-experience.is-board-mode .fixed-board::before`: actual pink material, border, holes and shadow; desktop inset is `calc((6px - var(--home-edge-space)) / var(--home-fit)) -1px -1px`. Preserve this upward background extension without moving the objects.
- `.portfolio-experience.is-project-mode .project-view`: desktop top padding 6px; at >=1100px, `padding: 6px var(--board-space) var(--board-space)`.
- `.project-pegboard`: content-driven board; desktop >=1100px `max-width: none`. Preserve its internal padding, border and inset effects.

Desktop >=1100px uses:

```css
--board-space: clamp(32px, 3.2vw, 48px);
--home-edge-space: var(--board-space, max(var(--portfolio-board-gutter), calc((100vw - var(--portfolio-board-max)) / 2)));
--home-available-height: calc(100dvh - 64px - 2 * var(--home-edge-space));
--home-layout-height: max(760px, var(--home-available-height));
--home-fit: min(1, calc(var(--home-available-height) / var(--home-layout-height)));
```

Homepage logical width at >=1100px is `calc((100vw - 2 * var(--board-space)) / var(--home-fit))`; height is `var(--home-layout-height)`. Its top is `calc((100dvh - 64px - var(--home-layout-height) * var(--home-fit)) / 2 - 12px)`. Width compensation and uniform scale work together; never change one independently without measuring the visible result. Fit is approximately 0.9787 at 1440×900 and 1 at the other two desktop references.

Keep existing `--portfolio-board-gutter`, `--portfolio-board-max` (1500px fallback), `--portfolio-board-radius`, and shared `--pegboard-hole-pattern`, `--pegboard-hole-position`, `--pegboard-hole-spacing` definitions and breakpoint scope. The 1500px fallback does not cap the approved >=1100px desktop board.

Homepage and desktop project outer shadows use `0 18px 38px rgba(85, 21, 48, 0.17)`; preserve distinct inset effects. Do not adjust margins to compensate for shadow falloff.

## Mobile and tablet baseline

Mobile is <=760px. Preserve its existing compact packing, object proportions, scrolling and interactions. Do not leak desktop height fitting, pseudo-element extension, or spacing into mobile.

Recorded homepage mobile verification (844px viewport height, scrolled to document bottom):

| Width | Board width | Left / right | Board bottom in viewport | Bottom outer gap | Bottom corner radius | Horizontal overflow |
| --- | --- | --- | --- | --- | --- | --- |
| 390 | 370 | 10 / 10 | 826 | 18 | 16 | 0 |
| 430 | 410 | 10 / 10 | 826 | 18 | 16 | 0 |

Observed homepage board heights in those particular shuffled states were 1264px and 1214px respectively; these are observations, not fixed height requirements. Preserve dynamic mobile packing. Mobile `::before` has `content: none`, so no desktop background extension is active. Both tested screenshots had zero pink pixels in the gap below the board and intact rounded corners. The thin line in responsive-preview chrome was not reproduced in the rendered page; do not add clipping to conceal browser UI.

Mobile `.project-view` retains `padding: 0 10px 18px`; project boards remain content-driven, with their existing top/internal spacing. Mobile `.fixed-board, .project-pegboard` retain `box-shadow: none`. Preserve the existing compact project-header behavior.

Tablet widths 761–1099px retain their current fallback width/fit and object responsive rules. The 761–900px rule retains `--home-layout-height: max(900px, var(--home-available-height))`. Do not apply the >=1100px desktop width expansion to tablet. No new tablet numerical measurements were taken for this documentation-only task; the tagged implementation is authoritative.

## Interaction and change-control contract

Preserve existing shuffle distribution, percentage placements, dragging, collision detection, snapping, saved positions, navigation/return state, reveal order/timing, audio, assets and project content. A shuffled arrangement is not one permanent set of object coordinates; preserve its existing behavior and valid arrangements rather than freezing one screenshot.

Future approved layout work must compare visible board boundaries at all five reference widths above, verify no clipping/overflow, and verify navigation and dragging. The tag is a comparison/recovery reference, not authorization to reset the repository or discard unrelated work.

This lock includes committed portfolio code only. Existing unrelated working-tree changes to `app/lib/headphoneMount.ts` and the deletion of `public/resume.pdf` are not part of this tag or documentation commit and must remain untouched.
