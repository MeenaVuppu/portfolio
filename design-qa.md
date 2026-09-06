**Design QA**

- Design target: a single-screen portfolio pegboard based on the supplied layout, peg-hole, and desk references.
- Desktop target: 1440 x 760 CSS px.
- Mobile target: 390 x 844 CSS px.
- Local rendered screenshot comparison remains blocked because browser policy rejects localhost access.

**Landing Architecture**

- Landing and project views share one sticky full-to-compact title component.
- Name, bunny, and positioning statement sit in the off-white area above the pegboard.
- The desktop board fits beneath the full header within a 1440 x 900 viewport without horizontal scrolling.
- The pegboard uses two offset elongated-slot patterns to reproduce staggered physical peg holes.
- All three project folders and every personal object use percentage-based board coordinates.
- Desktop Hives bounds end at 96% of board height; mobile Hives bounds end at 97%.
- Project folders are display objects and do not expose project-route links.
- The lower off-white area is intentionally empty while the desk environment is deferred.
- Desktop objects intentionally occupy less than half of the visible pegboard.
- Peg holes are recessed 6 x 16px vertical slots on a spacious 72 x 68px staggered pattern.
- The three projects use holder, rail, and clip attachment variants.
- The utility area groups Resume, Say hello, and LinkedIn into one physical cluster.
- A disabled archive and one noninteractive money plant sit below the primary hierarchy.

**Interaction Checks**

- Every board object has a restrained hover lift, brightness response, or both.
- Headphone click renders a local four-note burst that rises and fades without opening a player.
- The watercolour holder is an original cream ceramic cutout based only on the supplied material/form reference.
- The photo includes a small first Figma Config Bengaluru caption.
- Reduced-motion rules suppress spatial animation.

**Verification Result**

- Build: passed.
- Lint: passed.
- Automated homepage, fixed-board bounds, and three-route rendering tests: passed.
- Browser-rendered responsive screenshots: blocked by browser security policy.
