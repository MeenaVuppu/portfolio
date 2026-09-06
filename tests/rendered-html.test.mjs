import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio board", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Meena Vuppu/);
  assert.match(html, /Digital Gold/);
  assert.match(html, /Vyapar Plus/);
  assert.match(html, /Hives/);
  assert.match(html, /Design is chasing a feeling/);
  assert.equal((html.match(/class="project-file /g) ?? []).length, 3);
  assert.doesNotMatch(html, /desk-decor-(?:cutout|v1)\.png/);
  assert.match(html, /Play background music/);
  assert.match(html, /lemonade-by-sakura-girl\.mp3/);
  assert.match(html, /Lemonade/);
  assert.match(html, /creativecommons\.org\/licenses\/by\/3\.0/);
  assert.match(html, /soundcloud\.com\/sakuragirl_official/);
  assert.match(html, /ceramic-watercolor-holder-clean\.png/);
  assert.match(html, /money-plant-clean\.png/);
  assert.doesNotMatch(html, /src="\/(?:ceramic-watercolor-holder|money-plant)\.png"/);
  assert.match(html, /money-plant__hover/);
  assert.doesNotMatch(html, /money-plant__(?:mount|pot-occlusion)/);
  assert.match(html, /money-plant__pot/);
  assert.match(html, /money-plant__leaves/);
  assert.equal((html.match(/money-plant__leaf money-plant__leaf--/g) ?? []).length, 3);
  assert.match(html, /brush-holder__hover/);
  assert.match(html, /brush-holder__hitarea/);
  assert.equal((html.match(/class="watercolor-artwork watercolor-artwork--/g) ?? []).length, 3);
  assert.match(html, /Watercolor artwork previews/);
  assert.doesNotMatch(html, /brush-holder__(?:occlusion|mount|hook|cradle)/);
  assert.match(html, /Figma Config Bengaluru/);
  assert.doesNotMatch(html, /first Figma Config/);
  assert.match(html, /More work/);
  assert.match(html, /Still shaping these/);
  assert.match(html, /Drafts, experiments &amp; case studies coming up/);
  assert.match(html, /Connect on LinkedIn/);
  assert.match(html, /In progress/);
  assert.match(html, /Make digital journeys/);
  assert.match(html, /portfolio-title-header/);
  assert.doesNotMatch(html, /bunny(?:\.svg|-mark|__bunny)/i);
  assert.doesNotMatch(html, /← Board/);
  assert.match(html, /href="\/projects\/digital-gold"/);
  assert.match(html, /href="\/projects\/vyapar-plus"/);
  assert.match(html, /href="\/projects\/hives"/);
  assert.match(html, /href="https:\/\/www\.linkedin\.com\/in\/meena-vuppu"/);
  assert.match(html, /href="https:\/\/www\.linkedin\.com\/posts\/meena-vuppu_friendsoffigma-configwatchparty-config2025-activity-7327375191125172224-LsLU\?utm_source=share&amp;utm_medium=member_desktop&amp;rcm=ACoAACnGjGoBggAAG-XnFBamgY1cN6IJn76lm10"/);
  assert.match(html, /Let’s talk work/);
  assert.match(html, /vuppumeena@gmail\.com/);
  assert.match(html, /class="contact-note board-object" data-peg-draggable="contact"/);
  assert.match(html, /class="photo-object board-object"[^>]*target="_blank"[^>]*rel="noopener noreferrer"[^>]*draggable="false"/);
  assert.match(html, /class="resume-object board-object"[^>]*target="_blank"[^>]*rel="noopener noreferrer"[^>]*draggable="false"/);
  assert.match(html, /class="contact-note__action(?: is-copied)?" type="button" draggable="false"/);
  assert.doesNotMatch(html, /<a[^>]*class="contact-note"|<form[^>]*class="contact-note"/);
  assert.match(html, /class="linkedin-note board-object"[^>]*target="_blank"[^>]*rel="noopener noreferrer"[^>]*draggable="false"/);
  assert.doesNotMatch(html, /download(?:=|>)/);
  assert.match(html, /<audio[^>]*lemonade-by-sakura-girl\.mp3[^>]*loop/);
  assert.match(html, /<audio[^>]*on-pin\.mp3[^>]*preload="auto"/);
  assert.doesNotMatch(html, /site-credits|<summary>Credits<\/summary>/);
  assert.doesNotMatch(html, />explore/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("keeps every primary and tertiary board object in the landing composition", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const stabilizationLayer = css.slice(css.lastIndexOf("Landing stabilization"));

  assert.match(stabilizationLayer, /\.fixed-board \.p1\s*\{/);
  assert.match(stabilizationLayer, /\.fixed-board \.p2\s*\{/);
  assert.match(stabilizationLayer, /\.fixed-board \.p3\s*\{[\s\S]*?display:\s*block[\s\S]*?visibility:\s*visible/);
  assert.match(stabilizationLayer, /\.fixed-board \.project-file\s*\{[\s\S]*?position:\s*absolute/);
  assert.match(stabilizationLayer, /\.fixed-board \.archive-object\s*\{[\s\S]*?display:\s*grid/);
  assert.match(stabilizationLayer, /height:\s*clamp\(600px,\s*calc\(100svh - 196px\),\s*720px\)/);
  assert.match(stabilizationLayer, /@media \(min-width:\s*761px\) and \(max-width:\s*1099px\)/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.fixed-board\s*\{[\s\S]*?height:\s*3000px/);
  assert.match(stabilizationLayer, /@media \(max-width:\s*760px\)[\s\S]*?\.fixed-board \.photo-object\s*\{[\s\S]*?height:\s*9\.5%/);
});

test("registers the complete desktop pegboard drag set", async () => {
  const response = await render();
  const html = await response.text();
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const dragSource = await readFile(new URL("../app/hooks/usePegboardDrag.ts", import.meta.url), "utf8");
  const dragIds = [...html.matchAll(/data-peg-draggable="([^"]+)"/g)].map((match) => match[1]).sort();

  assert.deepEqual(dragIds, [
    "archive",
    "contact",
    "digital-gold",
    "headphones",
    "hives",
    "linkedin",
    "photo",
    "plant",
    "progress-note",
    "resume",
    "vyapar-plus",
    "watercolor",
  ]);
  assert.match(html, /data-peg-draggable="plant"[^>]*data-peg-bounds="0\.17,0\.055,0\.085,0\.105"/);
  assert.match(html, /data-peg-draggable="watercolor"[^>]*data-peg-bounds="0\.19,0\.15,0\.19,0\.16"/);
  assert.match(dragSource, /active\.startOffset\.x \+ delta\.x/);
  assert.match(dragSource, /active\.startOffset\.y \+ delta\.y/);
  assert.ok(css.lastIndexOf("Final Pegboard Home v1 decorative-object geometry") > css.lastIndexOf("Project view system"));
});

test("builds a combinatorial slot shuffle and sounds only successful changed placements", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const homeSource = await readFile(new URL("../app/components/HomeBoard.tsx", import.meta.url), "utf8");
  const dragSource = await readFile(new URL("../app/hooks/usePegboardDrag.ts", import.meta.url), "utf8");
  const shuffleSource = await readFile(new URL("../app/hooks/usePegboardShuffle.ts", import.meta.url), "utf8");

  assert.match(homeSource, /usePegboardShuffle\(boardRef\)/);
  assert.match(shuffleSource, /DESKTOP_PROJECT_REGIONS/);
  assert.match(shuffleSource, /findAssignments/);
  assert.match(shuffleSource, /validBox/);
  assert.match(shuffleSource, /window\.crypto\.getRandomValues/);
  assert.match(shuffleSource, /signature === previousSignature/);
  assert.match(shuffleSource, /board\.dataset\.shuffleReady = "true"/);
  assert.match(shuffleSource, /resume:\s*'\[data-peg-draggable="resume"\]'/);
  assert.match(shuffleSource, /contact:\s*'\[data-peg-draggable="contact"\]'/);
  assert.match(shuffleSource, /linkedin:\s*'\[data-peg-draggable="linkedin"\]'/);
  assert.match(shuffleSource, /function compactMobileAssignments/);
  assert.match(shuffleSource, /const gap = 16/);
  assert.match(shuffleSource, /Math\.max\(\.\.\.blockers\.map\(\(blocker\) => blocker\.bottom\)\) \+ gap/);
  assert.match(shuffleSource, /height: Math\.ceil\(Math\.max\(\.\.\.placed\.map\(\(box\) => box\.bottom\)\) \+ 28\)/);
  assert.match(shuffleSource, /board\.style\.height = `\$\{fittedHeight\}px`/);
  assert.doesNotMatch(shuffleSource, /MOBILE_ZONE_ROWS/);
  assert.doesNotMatch(shuffleSource, /contacts:\s*['"]\.contact-cluster/);
  assert.doesNotMatch(shuffleSource, /layoutVariant/);
  assert.match(css, /Curated load-time shuffle/);
  assert.match(dragSource, /drag\.candidate && Math\.hypot\(destination\.x - drag\.startOffset\.x, destination\.y - drag\.startOffset\.y\) > 1/);
  assert.match(dragSource, /if \(placedInNewPosition && onPlaced\) window\.setTimeout\(onPlaced, 240\)/);
  assert.match(homeSource, /audio\.currentTime = 0/);
  assert.match(homeSource, /audio\.volume = 0\.32/);
  assert.match(homeSource, /void audio\.play\(\)\.catch\(\(\) => undefined\)/);
  const projectFileSource = await readFile(new URL("../app/components/ProjectFile.tsx", import.meta.url), "utf8");
  assert.match(projectFileSource, /preloadPageFlipSound\(\)/);
  assert.match(projectFileSource, /if \(isOpening\) return;\s*\n\s*playPageFlipSound\(\)/);
  const soundEffectsSource = await readFile(new URL("../app/lib/soundEffects.ts", import.meta.url), "utf8");
  assert.match(soundEffectsSource, /new Audio\("\/page-flip\.mp3"\)/);
  assert.match(soundEffectsSource, /getPageFlipAudio\(\)\.load\(\)/);
  const experienceSource = await readFile(new URL("../app/components/PortfolioExperience.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(experienceSource, /playPageFlipSound/);
});

test("keeps contextual notes edge-aware and immediately dismissible", async () => {
  const source = await readFile(new URL("../app/components/HomeBoard.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(source, /function useSafeContextNote/);
  assert.match(source, /querySelectorAll<HTMLElement>\("\.board-object"\)/);
  assert.match(source, /collisionArea/);
  assert.match(source, /Math\.min\(boardRect\.right, window\.innerWidth\)/);
  assert.match(source, /Math\.min\(boardRect\.bottom, window\.innerHeight\)/);
  assert.match(source, /setIsMusicCreditOpen\(false\)/);
  assert.match(source, /setIsArchiveNoteOpen\(false\)/);
  assert.doesNotMatch(source, /onPointerEnter=.*setIsMusicCreditOpen/);
  assert.match(source, /Connect on LinkedIn/);
  assert.match(source, /Still shaping these\./);
  assert.match(source, /Drafts, experiments &amp; case studies coming up\./);
  assert.match(source, /document\.addEventListener\("pointerdown", closeContextNotes, true\)/);
  assert.match(css, /\.music-credit\.is-open \.music-credit__popover/);
  assert.match(css, /\.archive-context-note\.is-open/);
});

test("uses quiet vertical recessed slots on every pegboard", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const material = css.slice(css.lastIndexOf("Physical pegboard slots"));

  assert.match(material, /ellipse 1\.5px 3\.5px/);
  assert.match(material, /ellipse 1\.7px 3\.7px/);
  assert.match(material, /--pegboard-hole-interior:[\s\S]*?82%[\s\S]*?#5f4d55 18%/);
  assert.match(material, /--pegboard-hole-edge:[\s\S]*?92%[\s\S]*?8%/);
  assert.match(material, /background-size:\s*56px 84px/);
  assert.match(material, /background-size:\s*56px 42px/);
  assert.match(material, /ellipse 1\.3px 3px/);
  assert.match(material, /\.fixed-board[\s\S]*?\.project-pegboard/);
});

test("keeps the watercolor reveal local, position-aware, and safely bounded", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const source = await readFile(new URL("../app/components/HomeBoard.tsx", import.meta.url), "utf8");

  assert.match(source, /const safeMargin = mobile \? 12 : 22/);
  assert.match(source, /Math\.min\(boardRect\.bottom, window\.innerHeight\)/);
  assert.match(source, /Math\.max\(boardRect\.left, 0\)/);
  assert.match(source, /rotatedSize\(width, height, ARTWORK_ROTATIONS\[index\]\)/);
  assert.match(source, /const baseAngle = Math\.atan2\(verticalBias, horizontalBias/);
  assert.match(source, /overlap \* 12000 \+ holderOverlap \* 6000/);
  assert.match(source, /rotatedSize\(sizes\[index\]\.width, sizes\[index\]\.height, 0, 1\.52\)/);
  assert.match(css, /\.fixed-board\.is-artwork-open > \.board-object:not\(\.brushes-object\)\s*\{[\s\S]*?opacity:\s*0\.2/);
  assert.match(css, /\.brushes-object\.is-open\.is-positioned \.watercolor-artwork\.is-selected/);
});

test("keeps contact-card hover and email activation independent", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const source = await readFile(new URL("../app/components/HomeBoard.tsx", import.meta.url), "utf8");
  const projectLayer = css.slice(css.lastIndexOf("Project view system"));

  assert.match(projectLayer, /\.fixed-board \.contact-cluster:hover\s*\{[\s\S]*?transform:\s*rotate\(-0\.8deg\)/);
  assert.match(projectLayer, /\.resume-object:not\(\.is-peg-dragging\):hover/);
  assert.match(projectLayer, /\.contact-note:not\(\.is-peg-dragging\):hover/);
  assert.match(projectLayer, /\.linkedin-note:not\(\.is-peg-dragging\):hover/);
  assert.match(source, /navigator\.clipboard\.writeText\(EMAIL_ADDRESS\)/);
  assert.match(source, /navigator\.vibrate\(24\)/);
  assert.match(source, /isEmailCopied \? "Email copied!" : "Let’s talk work"/);
  assert.doesNotMatch(source, /mail\.google\.com|window\.open|about:blank|mailto:/);
  assert.match(source, /onDragStart=\{\(event\) => event\.preventDefault\(\)\}/);
  assert.doesNotMatch(source, /href=\{GMAIL_COMPOSE|action=\{GMAIL_COMPOSE/);
});

test("keeps landing document flow vertically scrollable", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const flowGuard = css.slice(
    css.lastIndexOf("Landing stabilization"),
    css.lastIndexOf("Pegboard Home v1 viewport and plant motion refinements"),
  );

  assert.match(flowGuard, /overflow-x:\s*hidden/);
  assert.match(flowGuard, /overflow-y:\s*auto/);
  assert.match(flowGuard, /\.fixed-landing[\s\S]*?height:\s*auto/);
  assert.match(flowGuard, /\.fixed-board[\s\S]*?margin-top:\s*var\(--portfolio-board-gap\)/);
  assert.doesNotMatch(flowGuard, /height:\s*100(?:d|s|l)?vh/);
  assert.doesNotMatch(flowGuard, /position:\s*fixed/);
});

test("uses hysteresis without changing the sticky header footprint", async () => {
  const source = await readFile(new URL("../app/components/PortfolioTitleHeader.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const stabilizationLayer = css.slice(css.lastIndexOf("Landing stabilization"));

  assert.match(source, /!isCompact && scrollY > 140/);
  assert.match(source, /isCompact && scrollY < 70/);
  assert.match(source, /requestAnimationFrame/);
  assert.match(stabilizationLayer, /\.portfolio-title-header\s*\{[\s\S]*?height:\s*150px[\s\S]*?top:\s*-90px/);
  assert.match(stabilizationLayer, /\.portfolio-title-header\.is-compact \.portfolio-title-header__inner[\s\S]*?height:\s*150px/);
});

test("keeps mobile Home folders clear of hardware and interpolates its header", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const source = await readFile(new URL("../app/components/PortfolioTitleHeader.tsx", import.meta.url), "utf8");
  const mobileCorrections = css.slice(
    css.lastIndexOf("Approved Pegboard Home Base v2 mobile folder and header corrections"),
  );

  assert.match(source, /matchMedia\("\(max-width: 760px\)"\)/);
  assert.match(source, /const progress = Math\.min\(1, Math\.max\(0, scrollY \/ 126\)\)/);
  assert.match(source, /--mobile-header-brand-y/);
  assert.match(source, /--mobile-header-brand-size/);
  assert.match(source, /--mobile-header-brand-line-height/);
  assert.match(source, /--mobile-header-title-top/);
  assert.match(source, /--mobile-header-title-scale/);
  assert.match(source, /const compactTitleVisible = progress >= 0\.9/);
  assert.match(source, /const fullOpacity = compactTitleVisible \? 0 : 1/);
  assert.match(source, /const compactOpacity = compactTitleVisible \? 1 : 0/);
  assert.match(source, /--mobile-header-height/);
  assert.match(source, /requestAnimationFrame/);
  assert.match(source, /document\.addEventListener\("scroll", updateCompactState, \{ passive: true \}\)/);
  assert.match(mobileCorrections, /@media \(max-width:\s*760px\)/);
  assert.match(mobileCorrections, /\.portfolio-title-header__brand,[\s\S]*?\.portfolio-title-header__compact\s*\{[\s\S]*?transition:\s*none/);
  assert.match(mobileCorrections, /\.portfolio-experience\.is-board-mode > \.portfolio-title-header\s*\{[\s\S]*?height:\s*var\(--mobile-header-height, 184px\)[\s\S]*?min-height:\s*var\(--mobile-header-height, 184px\)[\s\S]*?overflow:\s*visible;[\s\S]*?position:\s*fixed;[\s\S]*?top:\s*0;[\s\S]*?z-index:\s*50/);
  assert.match(mobileCorrections, /\.portfolio-experience\.is-board-mode \.portfolio-state-stage\s*\{[\s\S]*?padding-top:\s*184px/);
  assert.match(mobileCorrections, /\.portfolio-title-header h1,[\s\S]*?transform:\s*translateX\(-50%\)/);
  assert.match(mobileCorrections, /\.portfolio-title-header__brand\s*\{[\s\S]*?font-size:\s*var\(--mobile-header-brand-size, 14px\)[\s\S]*?line-height:\s*var\(--mobile-header-brand-line-height, 21px\)/);
  assert.match(mobileCorrections, /\.portfolio-title-header__full,[\s\S]*?opacity:\s*var\(--mobile-header-full-opacity, 1\)[\s\S]*?scale\(var\(--mobile-header-title-scale, 1\)\)/);
  assert.match(mobileCorrections, /\.portfolio-title-header__compact,[\s\S]*?display:\s*block;[\s\S]*?opacity:\s*var\(--mobile-header-compact-opacity, 0\)/);
  assert.match(mobileCorrections, /\.project-file--hives\s*\{[\s\S]*?height:\s*12%/);
  assert.match(mobileCorrections, /\.project-file__document\s*\{[\s\S]*?padding:\s*30px 18px 72px/);
  assert.match(mobileCorrections, /\.project-file__metric\s*\{[\s\S]*?margin-top:\s*auto/);
  assert.match(mobileCorrections, /\.project-file--vyapar-plus \.project-file__document\s*\{[\s\S]*?padding-bottom:\s*64px/);
  assert.match(mobileCorrections, /\.project-file--hives \.project-file__document\s*\{[\s\S]*?padding-bottom:\s*30px;[\s\S]*?padding-top:\s*41px/);
});

test("keeps the in-progress note visually dormant", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const source = await readFile(new URL("../app/components/HomeBoard.tsx", import.meta.url), "utf8");

  assert.match(css, /\.fixed-board \.progress-note\s*\{[\s\S]*?aspect-ratio:\s*1\.36[\s\S]*?background:\s*#fffdf3[\s\S]*?border:\s*1px solid rgba\(51, 44, 42, 0\.88\)/);
  assert.match(css, /\.fixed-board \.progress-note::before\s*\{[\s\S]*?background-color:\s*#d98391[\s\S]*?radial-gradient/);
  assert.match(css, /\.fixed-board \.progress-note::before\s*\{[\s\S]*?top:\s*-12px[\s\S]*?z-index:\s*2/);
  assert.doesNotMatch(css.match(/\.fixed-board \.progress-note\s*\{[\s\S]*?\n\}/)?.[0] ?? "", /clip-path/);
  assert.match(source, /progress-note__doodle[\s\S]*?<i \/>[\s\S]*?<b \/>/);
  assert.match(css, /\.fixed-board \.progress-note__doodle\s*\{[\s\S]*?background:\s*#fff/);
  assert.match(css, /\.fixed-board \.progress-note__doodle > i\s*\{[\s\S]*?box-shadow:/);
  assert.match(css, /\.fixed-board \.progress-note__task\s*\{[\s\S]*?padding-right:\s*28px/);
  assert.doesNotMatch(css, /\.progress-note:not\(\.is-peg-dragging\):hover/);
});

test("locks only desktop Home to the viewport and isolates plant motion layers", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const homeRefinement = css.slice(
    css.lastIndexOf("Pegboard Home v1 viewport and plant motion refinements"),
    css.lastIndexOf("Project view system"),
  );
  const approvedAffordances = css.slice(
    css.lastIndexOf("Approved Pegboard V1 decorative and unavailable affordances"),
  );

  assert.match(homeRefinement, /@media \(min-width:\s*1100px\)[\s\S]*?\.portfolio-experience\.is-board-mode\s*\{[\s\S]*?height:\s*100dvh[\s\S]*?overflow:\s*hidden/);
  assert.match(homeRefinement, /\.portfolio-experience\.is-board-mode \.fixed-board\s*\{[\s\S]*?height:\s*min\(720px,\s*calc\(100dvh/);
  assert.doesNotMatch(homeRefinement, /\.portfolio-experience\.is-project-mode[\s\S]*?overflow:\s*hidden/);
  assert.match(approvedAffordances, /\.money-plant:not\(\.is-peg-dragging\):hover \.money-plant__hover\s*\{[\s\S]*?filter:\s*none;[\s\S]*?transform:\s*none/);
  assert.match(approvedAffordances, /\.archive-object\s*\{[\s\S]*?background:\s*#fffdfb/);
  assert.match(homeRefinement, /@keyframes plant-leaves-a/);
  assert.match(homeRefinement, /@keyframes plant-leaves-b/);
  assert.match(homeRefinement, /@keyframes plant-leaves-c/);
  assert.match(homeRefinement, /\.money-plant__pot\s*\{[\s\S]*?transform:\s*none/);
  assert.match(css, /\.fixed-board \.money-plant__leaves\s*\{[\s\S]*?transform:\s*scale\(1\.1\)/);
  assert.match(css, /Final Pegboard Home v1 decorative-object geometry[\s\S]*?@media \(max-width:\s*760px\)[\s\S]*?\.fixed-board \.brushes-object\s*\{[\s\S]*?width:\s*28%/);
  assert.match(css, /\.fixed-board \.brushes-object\s*\{[\s\S]*?aspect-ratio:\s*1023\s*\/\s*1537/);
  assert.match(css, /\.fixed-board \.brush-holder__image\s*\{[\s\S]*?left:\s*0[\s\S]*?top:\s*0[\s\S]*?width:\s*100%/);
  assert.match(css, /\.fixed-board \.brushes-object:not\(\.is-peg-dragging\):hover \.brush-holder__hover/);
  assert.match(css, /\.fixed-board \.brush-holder__hitarea\s*\{[\s\S]*?inset:\s*15% 19% 16%/);
  assert.match(css, /\.fixed-board\.is-artwork-open > \.board-object:not\(\.brushes-object\)/);
  assert.match(css, /\.fixed-board \.brushes-object\.is-open\.is-positioned \.watercolor-artwork/);
  assert.match(css, /@media \(max-width:\s*760px\)[\s\S]*?\.fixed-board \.watercolor-artwork--3/);
  assert.match(css, /prefers-reduced-motion[\s\S]*?\.fixed-board \.watercolor-artwork/);
  assert.match(homeRefinement, /prefers-reduced-motion[\s\S]*?\.money-plant__leaf\s*\{[\s\S]*?animation:\s*none/);
});

test("restores normal mobile document flow only for project routes", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const source = await readFile(new URL("../app/components/HomeBoard.tsx", import.meta.url), "utf8");
  const projectLayer = css.slice(css.lastIndexOf("Project view system"));
  const plantComponent = source.slice(source.indexOf("function MoneyPlant"), source.indexOf("export function HomeBoard"));

  assert.match(projectLayer, /body\.portfolio-project-active\s*\{[\s\S]*?height:\s*auto[\s\S]*?overflow-y:\s*auto/);
  assert.match(projectLayer, /@media \(max-width:\s*760px\)[\s\S]*?\.portfolio-experience\.is-project-mode[\s\S]*?height:\s*auto[\s\S]*?overflow:\s*visible/);
  assert.match(projectLayer, /\.portfolio-experience\.is-project-mode \.fixed-landing\s*\{[\s\S]*?position:\s*absolute/);
  assert.doesNotMatch(projectLayer, /@media \(min-width:\s*1100px\)[\s\S]*?\.portfolio-experience\.is-project-mode[\s\S]*?height:\s*auto/);
  assert.doesNotMatch(plantComponent, /window|matchMedia|Math\.random|useState|hydration/i);
});

test("reserves enough mobile header space before the project pegboard", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const projectLayer = css.slice(css.lastIndexOf("Project view system"));

  assert.match(projectLayer, /--project-mobile-header-height:\s*clamp\(220px,\s*58vw,\s*248px\)/);
  assert.match(projectLayer, /\.portfolio-title-header\.is-project-title\s*\{[\s\S]*?height:\s*var\(--project-mobile-header-height\)/);
  assert.match(projectLayer, /\.portfolio-title-header\.is-project-title\.is-compact\s*\{[\s\S]*?height:\s*72px/);
  assert.match(projectLayer, /\.portfolio-experience\.is-project-mode \.portfolio-state-stage\s*\{[\s\S]*?padding-top:\s*var\(--project-mobile-header-height\)/);
});

test("pins the project header and isolates the softer project pegboard theme", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const projectLayer = css.slice(css.lastIndexOf("Project view system"));

  assert.match(projectLayer, /\.project-pegboard\s*\{[\s\S]*?background-color:\s*var\(--project-pegboard\)/);
  assert.match(projectLayer, /background-image:\s*radial-gradient\([^;]*var\(--project-pegboard-hole\)/);
  assert.match(projectLayer, /transition:\s*background-color 380ms ease/);
  assert.match(projectLayer, /\.portfolio-title-header\.is-project-title\s*\{[\s\S]*?position:\s*fixed[\s\S]*?top:\s*0[\s\S]*?z-index:\s*50/);
  assert.match(projectLayer, /\.portfolio-title-header\.is-project-title\s*\{[\s\S]*?border-bottom:\s*0/);
  assert.match(projectLayer, /\.portfolio-experience\.is-project-mode \.portfolio-state-stage\s*\{[\s\S]*?padding-top:\s*150px/);
  assert.match(css, /\.fixed-board\s*\{[^}]*background-color:\s*#ff2f8b/);
});

test("aligns Home and Project boards with one shared shell", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const projectLayer = css.slice(css.lastIndexOf("Project view system"));
  const stabilizationLayer = css.slice(
    css.lastIndexOf("Landing stabilization"),
    css.lastIndexOf("Pegboard Home v1 viewport and plant motion refinements"),
  );

  assert.match(projectLayer, /--portfolio-board-gap:\s*clamp\(18px,\s*2\.6vh,\s*24px\)/);
  assert.match(projectLayer, /--portfolio-board-gutter:\s*clamp\(32px,\s*3\.2vw,\s*48px\)/);
  assert.match(projectLayer, /--portfolio-board-max:\s*1500px/);
  assert.match(projectLayer, /--portfolio-board-radius:\s*16px/);
  assert.match(stabilizationLayer, /\.fixed-landing\s*\{[\s\S]*?padding:\s*0 var\(--portfolio-board-gutter\)/);
  assert.match(stabilizationLayer, /\.fixed-board\s*\{[\s\S]*?border-radius:\s*var\(--portfolio-board-radius\)[\s\S]*?margin-top:\s*var\(--portfolio-board-gap\)[\s\S]*?max-width:\s*var\(--portfolio-board-max\)/);
  assert.match(projectLayer, /\.project-view\s*\{[\s\S]*?padding:\s*var\(--portfolio-board-gap\) var\(--portfolio-board-gutter\)/);
  assert.match(projectLayer, /\.project-pegboard\s*\{[\s\S]*?border-radius:\s*var\(--portfolio-board-radius\)[\s\S]*?max-width:\s*var\(--portfolio-board-max\)/);
});

const caseStudies = [
  ["digital-gold", "Digital Gold", "Vyapar Plus", "Redesigning digital gold around trust and clarity", "#F7E8A4", "#C8B96F"],
  ["vyapar-plus", "Vyapar Plus", "Hives", "Designing a kirana commission platform", "#C9DCE3", "#91AEB9"],
  ["hives", "Hives", "Digital Gold", "Designing smaller social contexts", "#CDD9C5", "#97AA8D"],
];

for (const [slug, title, nextTitle, headline, boardColor, holeColor] of caseStudies) {
  test(`server-renders the ${title} editorial project document`, async () => {
    const response = await render(`/projects/${slug}`);
    assert.equal(response.status, 200);

    const html = await response.text();
    assert.match(html, new RegExp(title));
    assert.match(html, new RegExp(headline));
    assert.match(html, /portfolio-title-header/);
    assert.match(html, /portfolio-experience is-project-mode/);
    assert.match(html, /project-mode project-mode--open/);
    assert.match(html, /01[\s\S]*Opportunity/);
    assert.match(html, /project-pegboard/);
    assert.match(html, new RegExp(`--project-pegboard:${boardColor}`));
    assert.match(html, new RegExp(`--project-pegboard-hole:${holeColor}`));
    assert.match(html, /03[\s\S]*Product decisions/);
    assert.match(html, /The Good Stuff Continues\.\.\./);
    assert.match(html, new RegExp(nextTitle));
    assert.equal((html.match(/class="project-file /g) ?? []).length, 5);
    assert.equal((html.match(/← Board/g) ?? []).length, 1);
    assert.equal((html.match(/class="portfolio-title-header /g) ?? []).length, 1);
    assert.doesNotMatch(html, /project-view-header|project-mode__scroller/);
    assert.doesNotMatch(html, /Back to the board/);
    assert.doesNotMatch(html, /bunny(?:\.svg|-mark|__bunny)/i);
    assert.match(html, /<audio[^>]*lemonade-by-sakura-girl\.mp3[^>]*loop/);
    assert.doesNotMatch(html, /What&#x27;s pinned next\?/);
    assert.doesNotMatch(html, /More from the board/);
    if (slug === "vyapar-plus") {
      assert.match(html, /Muthoot · Kirana earning platform/);
      assert.doesNotMatch(html, /0 → 1 Kirana commission platform/);
      assert.match(html, />0 → 1</);
    }
  });
}
