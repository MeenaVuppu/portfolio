# Portfolio Agent Guide

This file is the compact working memory for Meena Vuppu's portfolio. Read it before making changes. The current repository is the source of truth; when this guide conflicts with a newer explicit user request or the rendered implementation, follow the newer request and preserve working code.

## Repository

- Working directory: `/Users/meena/workspace/portfolio`.
- Stack: Next.js 16, React 19, TypeScript, vinext/Vite, plain CSS in `app/globals.css`.
- Main routes: `/`, `/archive`, `/projects/digital-gold`, `/projects/vyapar-plus`, `/projects/hives`.
- Primary components: `PortfolioExperience`, `HomeBoard`, `ProjectMode`, `ArchiveMode`, `ProjectFile`, and `Hardware`.
- Interaction helpers live in `app/hooks`; project data lives in `app/lib/projects.ts`.
- Local commands: `npm run dev`, `npm run build`, `npm test`, `npm run lint`.
- Node requirement: `>=22.13.0`.
- GitHub owner: `MeenaVuppu`. Never request or store a password or token.
- Do not commit, push, deploy, or alter hosting configuration unless explicitly requested.
- The worktree may be dirty. Never discard or rewrite unrelated changes.

## Scope Discipline

This portfolio has been refined through many tightly scoped iterations. Preserve the current approved implementation unless a request explicitly changes it.

- Make the smallest localized change possible.
- Inspect the exact component and selectors before editing.
- Reuse existing tokens, components, placement helpers, and interaction logic.
- Do not refactor working architecture for a visual correction.
- Never modify Home while working only on a project or Archive page.
- Never modify other project pages when updating one project's copy.
- Do not change layout, object positions, responsive behavior, interactions, or content unless named in the request.
- Do not fix an overlap by hiding another object or creating arbitrary empty space.
- Reference images are visual references only unless the user explicitly asks to add the asset.
- Use `rg` for search and `apply_patch` for manual edits.
- For targeted frontend work, verify only the affected route and requested viewport unless the change touches shared behavior.

## Current Visual System

- The site is a physical, tactile pegboard portfolio, not a conventional portfolio grid or corporate case-study site.
- Keep the design bright, quiet, editorial, and spatial. Use subtle depth and physical attachment details.
- Avoid gradients, glassmorphism, generic SaaS cards, excessive animation, decorative clutter, and invented content.
- Home uses the restored original hot-pink pegboard and its original surrounding page color.
- Project and Archive pegboards use the shared calm cream surface (`#FAF7F2`) with the original hot pink reserved for important metrics and highlights.
- Project pages do not use project-specific board colors.
- Keep existing pegboard holes, geometry, spacing, edges, and shadows unchanged unless explicitly requested.
- Papers and folders are off-white/cream with dark charcoal typography.
- Pink and large type are attention tools: use them only for recruiter-relevant metrics and decisive insights.
- Bunny ears were removed from navigation everywhere. Do not restore them.
- The small bunny face remains part of the In Progress note and favicon.

## Home Baseline

Treat the current landing page as the locked Home baseline (previously called Pegboard Home v1, PEGBOARD HOME BASE v2, PEGBOARD V1, and UPDATED VERSION). Do not change it incidentally.

- Header: `Meena Vuppu` at upper left and centered headline `Design is chasing a feeling`.
- Desktop Home is a fixed, fully visible pegboard composition with no board scrolling.
- Mobile Home is a vertically scrolling, compact packed composition.
- No horizontal page overflow at any breakpoint.
- Home objects must never overlap or crop. Preserve intentional negative space.
- Desktop objects are draggable with collision prevention, boundary checks, nearest-hole snapping, and shuffle.
- Mobile uses its existing compact packing/shuffle behavior. Do not replace it with absolute random coordinates or giant vertical zones.
- Default pinned positions and drop positions use the visible attachment anchor, not the card center or top-left corner.
- If the nearest peg hole would collide or overflow, use the next nearest valid hole.
- Preserve all current object positions, rotations, dimensions, snap behavior, collision bounds, and shuffle slots unless explicitly requested.

### Home Objects

- Active project folders on Home: Digital Gold and Vyapar Plus.
- Hives was removed from Home and is displayed only in Archive.
- Other objects: Figma Config photo, headphones/music, ceramic watercolor holder, Resume, Let's talk work, LinkedIn, money plant, In Progress note, and Archive.
- Project folders are dominant. Personal and decorative objects remain secondary.
- The Figma photo caption is `Figma Config Bengaluru` in the established handwriting font.
- The photo opens its existing LinkedIn post in a new tab.
- LinkedIn reads `Connect on LinkedIn` in the handwriting font and opens `https://www.linkedin.com/in/meena-vuppu` in a new tab.
- Resume uses `view PDF` in the handwriting font and preserves its current placeholder/new-tab behavior until a real resume is supplied.
- Let's talk work copies `vuppumeena@gmail.com` to the clipboard. It must never download a file or open Gmail. Keep the noticeable but subtle `copied!` feedback and mobile haptic feedback where supported.

### Hover and Click Rules

- Interactive/revealing objects may use their approved subtle lift.
- Money plant: decorative, no hover lift/tilt/scale/elevated shadow.
- Headphones: static on hover and click; no tilt, lift, or scale.
- Let's talk work: no hover movement.
- In Progress: unavailable, no hover movement.
- Archive is now interactive and may use the same restrained hover language as clickable artifacts.
- Apply hover styles to the individual object, never a shared wrapper that moves siblings.
- Drag and click must remain distinct; a real drag must not trigger navigation or other click actions.

## Audio

- Headphones toggle the existing looped `Lemonade` track after a user gesture. Never autoplay on page load.
- Clicking headphones controls playback only; it must not open music credits.
- The tiny white music-note control alone opens music credits.
- Credits are click/tap only, never hover-triggered. Close on pointer leaving the note region on desktop and outside tap on mobile.
- Keep credits inside the board/viewport and above objects; prefer nearby empty space before overlap.
- Placement sound uses the current `on pin.mp3` and plays once only after an object successfully moves and settles in a new valid position.
- Project-open sound uses the current `page flip.mp3` only when opening a project folder, including bottom next-project folders.
- Do not play page-flip audio for `Board`/back navigation.
- Do not mix or replace the music and feedback-audio systems.

## Physical Assets

- Do not recolor the headphones, photo, plant, leaves, pots, brushes, artwork, illustrations, or bunny face.
- Plant and brush holder must remain clean transparent cutouts with no backing plates, fake hooks, frames, dots, or visible mounting hardware.
- Peg holes must not show through opaque ceramic silhouettes.
- Money-plant pot is completely stationary at rest. Only separated leaf/vine layers sway.
- Animate foliage inside the plant, never the same wrapper used for dragging.
- Plant hover and drag must not interfere with leaf animation.
- Watercolor holder keeps its existing artwork reveal/fan interaction and collision bounds.
- Headphones rest on the current small white curved cradle; its mounting anchor is the peg-hole snap reference.

## Shared Shell and Navigation

- Home, Project, and Archive belong to one portfolio environment.
- Preserve shared board width, gutters, border radius, and headline-to-board spacing.
- Home-to-project transitions should feel like the same surface changing state, while URL/history remain correct.
- Project header is sticky, opaque off-white, and remains visible throughout the case study.
- Project header compacts smoothly without disappearing, jitter, threshold loops, or fixing the entire page.
- `← Board` returns to Home using the existing seamless transition and must remain accessible.
- Home has no redundant Home/Board control.
- On mobile, normal project document scrolling must remain continuous: no scroll lock, snap, nested competing scrollers, or leaked desktop `100dvh` rules.

## Project Pages

- Keep the established pinned-paper case-study composition. It is not a conventional article, dashboard, or generic grid.
- Reuse pins, tape, paperclips, rotations, shadows, type, visual placeholders, and entrance/scroll motion.
- Keep case studies concise and impact-first. Do not add generic UX-process sections such as personas, wireframes, or testing unless explicitly supplied.
- Never fabricate outcomes. Clearly distinguish baseline data, predicted impact, launch targets, and achieved results.
- Keep at most the existing meaningful visual placeholders; do not invent screenshots.
- Bottom project recommendations remain physical project-folder artifacts.

### Digital Gold

- Context: Muthoot Fincorp One, sole Product Designer, pre-launch/awaiting validation.
- Core baseline: 80,554 entered; 8,502 (10.55%) reached Buy Now; 5,605 (6.96%) proceeded to payment; 3,704 (4.60%) completed.
- `4.6%` is the old journey baseline, never an achieved redesign impact.
- The redundant 30-day funnel card was removed because the hero already communicates the funnel.
- Final section is `Validation & measurement`, not `Impact`.
- Post-launch success measures are targets: first-payment conversion, recurring-saving adoption, mandate creation, repeat-saving rate, journey drop-offs, and gold/jewellery redemption.
- The story covers the signal, exploratory branch research, acquisition/product disconnect, V1→V2→V3 evolution, sole ownership, final recurring/goal-saving direction, knowns vs hypotheses, and next validation.

### Vyapar Plus

- Context: Muthoot Finance, sole Product Designer, 0→1, shipped Sep 2026.
- Core early result (Sep 1–11, 2026): 2,282 started, 819 completed digital onboarding, 35.9% completion.
- Hero is intentionally clean like Digital Gold; do not repeat eyebrow, role, products, or metrics unnecessarily.
- All hero numbers use the established large metric size; use pink emphasis selectively.
- Launch targets (10,000 agents, under 10 minutes, ₹10K+) must be labeled as targets, not outcomes.
- Connected ecosystem has exactly three columns: Website — Discover; Merchant App — Join + Serve customers + Earn; Saathi — Assist + Physical verification.
- Closing progression uses centered dots, not arrows: `0→1 · Shipped · ...`.
- Recruiter hierarchy matters: large pink type only for the few most important results/insights; supporting copy stays smaller and dark.

### Hives

- Hives is a concept project. Any metrics are predicted/target placeholders, never achieved results.
- The `/projects/hives` route/content remains in the codebase, but Archive's Hives artifact is intentionally non-interactive.
- Do not add Hives back to Home unless explicitly requested.

## Archive

- Route: `/archive`.
- Header contains `← Board` and only the title `Archive`; no subtitle.
- The page fits the available viewport with no horizontal or vertical scroll.
- Archive uses the same cream project pegboard, holes, shell, typography, and restrained entrance behavior as project pages.
- The pegboard contains exactly five mounted holders: three in the first row and two in the second.
- Holder 1 contains the Hives folder. Holders 2–5 are completely empty.
- Hives is disabled/non-clickable with no hover action. Do not add labels or placeholder projects to empty holders.
- Holders use the existing Vyapar Plus-style physical document-holder language: low light rail with rounded endcaps, not thick black frames, picture frames, generic cards, or mesh boxes.
- Pins/clips must align to visible peg holes.
- Keep the board's bottom breathing room matched to Home (currently 24px in the approved implementation).
- Do not add descriptive copy inside the Archive pegboard.

## Responsive and Visual QA

- Desktop reference viewport: 1440×900 unless the user specifies another size.
- Mobile reference viewport: approximately 375–400px wide, often 375×714 or 400×714.
- Validate at normal zoom, not only through code inspection.
- Check: no overlap, no cropping, no horizontal overflow, all primary content visible, text contained, and attachment anchors visually aligned to holes.
- For mobile packing changes, inspect multiple shuffle outcomes, not one lucky arrangement.
- Hard refresh shared/SSR changes and check for zero hydration warnings.
- Server and client must render identical initial markup; use CSS media queries for responsive presentation where possible.
- Never use `suppressHydrationWarning` or disable SSR to hide a mismatch.
- Start the local server after implementation when needed and give the user the actual URL.

## Deployment Notes

- The app uses vinext/Vite but the build script is currently `next build`; inspect the current deployment configuration before changing it.
- Vercel previously failed when `vite.config.ts` imported a missing `./.openai/hosting.json`; do not reintroduce a required local-only config import.
- Vercel also previously expected `.next` while vinext produced different output. Keep framework/output settings consistent with the current build rather than guessing.
- Do not add or modify `.openai/hosting.json` unless explicitly working with Sites hosting.

## Completion Contract

- Before editing, state briefly what will change.
- For long work, give concise progress updates; for micro fixes, act quickly.
- Report exactly which files and behaviors changed.
- Say what was actually verified and at which viewport/route.
- Do not claim a browser-specific interaction is fixed without testing that browser when the user explicitly requires it.
- Do not update or rename an approved baseline until the user has visually approved the change.
- The newest explicit user instruction always overrides older notes in this file.
