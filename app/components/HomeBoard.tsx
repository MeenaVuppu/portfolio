"use client";

import Image from "next/image";
import { type CSSProperties, type RefObject, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { BoardHook, PegPin } from "./Hardware";
import { ProjectFile } from "./ProjectFile";
import { projects, type Project } from "../lib/projects";
import { usePegboardDrag } from "../hooks/usePegboardDrag";
import { usePegboardShuffle } from "../hooks/usePegboardShuffle";

type HomeBoardProps = {
  onOpenProject?: (project: Project, trigger: HTMLAnchorElement) => void;
  projectModeActive?: boolean;
};

const EMAIL_ADDRESS = "vuppumeena@gmail.com";
const ARTWORK_ROTATIONS = [-5, 4, -2];

type ArtworkPosition = {
  selectedX: number;
  selectedY: number;
  x: number;
  y: number;
};

type ContextNotePosition = { left: number; top: number };

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function rotatedSize(width: number, height: number, rotation: number, scale = 1) {
  const radians = Math.abs(rotation * Math.PI / 180);
  return {
    height: (Math.abs(height * Math.cos(radians)) + Math.abs(width * Math.sin(radians))) * scale,
    width: (Math.abs(width * Math.cos(radians)) + Math.abs(height * Math.sin(radians))) * scale,
  };
}

function overlapRatio(a: { x: number; y: number; width: number; height: number }, b: { x: number; y: number; width: number; height: number }) {
  const overlapWidth = Math.max(0, Math.min(a.x + a.width / 2, b.x + b.width / 2) - Math.max(a.x - a.width / 2, b.x - b.width / 2));
  const overlapHeight = Math.max(0, Math.min(a.y + a.height / 2, b.y + b.height / 2) - Math.max(a.y - a.height / 2, b.y - b.height / 2));
  return (overlapWidth * overlapHeight) / Math.min(a.width * a.height, b.width * b.height);
}

function useSafeContextNote(
  open: boolean,
  anchorRef: RefObject<HTMLElement | null>,
  noteRef: RefObject<HTMLElement | null>,
  boardRef: RefObject<HTMLElement | null>,
  positionRootRef: RefObject<HTMLElement | null> = anchorRef,
) {
  const [position, setPosition] = useState<ContextNotePosition>({ left: 0, top: 0 });

  useLayoutEffect(() => {
    if (!open) return;
    const anchor = anchorRef.current;
    const note = noteRef.current;
    const board = boardRef.current;
    const positionRoot = positionRootRef.current;
    if (!anchor || !note || !board || !positionRoot) return;

    const anchorRect = anchor.getBoundingClientRect();
    const noteRect = note.getBoundingClientRect();
    const boardRect = board.getBoundingClientRect();
    const positionRootRect = positionRoot.getBoundingClientRect();
    const margin = 12;
    const gap = 10;
    const safe = {
      bottom: Math.min(boardRect.bottom, window.innerHeight) - margin,
      left: Math.max(boardRect.left, 0) + margin,
      right: Math.min(boardRect.right, window.innerWidth) - margin,
      top: Math.max(boardRect.top, 0) + margin,
    };
    const candidates = [
      { clearance: safe.right - anchorRect.right, left: anchorRect.right + gap, top: anchorRect.top + (anchorRect.height - noteRect.height) / 2 },
      { clearance: anchorRect.left - safe.left, left: anchorRect.left - noteRect.width - gap, top: anchorRect.top + (anchorRect.height - noteRect.height) / 2 },
      { clearance: safe.bottom - anchorRect.bottom, left: anchorRect.left + (anchorRect.width - noteRect.width) / 2, top: anchorRect.bottom + gap },
      { clearance: anchorRect.top - safe.top, left: anchorRect.left + (anchorRect.width - noteRect.width) / 2, top: anchorRect.top - noteRect.height - gap },
    ];
    const permanentRects = [...board.querySelectorAll<HTMLElement>(".board-object")]
      .filter((element) => element !== anchor && !element.contains(anchor) && !anchor.contains(element))
      .map((element) => element.getBoundingClientRect());
    const overflow = (candidate: ContextNotePosition) =>
      Math.max(0, safe.left - candidate.left)
      + Math.max(0, candidate.left + noteRect.width - safe.right)
      + Math.max(0, safe.top - candidate.top)
      + Math.max(0, candidate.top + noteRect.height - safe.bottom);
    const evaluated = candidates.map((candidate) => {
      const left = clamp(candidate.left, safe.left, Math.max(safe.left, safe.right - noteRect.width));
      const top = clamp(candidate.top, safe.top, Math.max(safe.top, safe.bottom - noteRect.height));
      const collisionArea = permanentRects.reduce((total, rect) => {
        const overlapWidth = Math.max(0, Math.min(left + noteRect.width, rect.right + 6) - Math.max(left, rect.left - 6));
        const overlapHeight = Math.max(0, Math.min(top + noteRect.height, rect.bottom + 6) - Math.max(top, rect.top - 6));
        return total + overlapWidth * overlapHeight;
      }, 0);
      return {
        ...candidate,
        collisionArea,
        left,
        score: overflow(candidate) * 1_000_000 + collisionArea * 1_000 - candidate.clearance,
        top,
      };
    });
    const best = evaluated.reduce((selected, candidate) => candidate.score < selected.score ? candidate : selected);

    setPosition({ left: best.left - positionRootRect.left, top: best.top - positionRootRect.top });
  }, [anchorRef, boardRef, noteRef, open, positionRootRef]);

  return position;
}

function MoneyPlant() {
  return (
    <div
      className="money-plant board-object"
      data-peg-draggable="plant"
      data-peg-bounds="0.17,0.055,0.085,0.105"
      aria-hidden="true"
    >
      <div className="money-plant__hover">
        <span className="money-plant__pot">
          <Image src="/money-plant-clean.png" alt="" width={1254} height={1254} unoptimized />
        </span>
        <span className="money-plant__leaves">
          <span className="money-plant__leaf money-plant__leaf--a">
            <Image src="/money-plant-clean.png" alt="" width={1254} height={1254} unoptimized />
          </span>
          <span className="money-plant__leaf money-plant__leaf--b">
            <Image src="/money-plant-clean.png" alt="" width={1254} height={1254} unoptimized />
          </span>
          <span className="money-plant__leaf money-plant__leaf--c">
            <Image src="/money-plant-clean.png" alt="" width={1254} height={1254} unoptimized />
          </span>
        </span>
      </div>
    </div>
  );
}

export function HomeBoard({ onOpenProject, projectModeActive = false }: HomeBoardProps) {
  const [noteBurst, setNoteBurst] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isArtworkOpen, setIsArtworkOpen] = useState(false);
  const [isArtworkPositioned, setIsArtworkPositioned] = useState(false);
  const [isArchiveNoteOpen, setIsArchiveNoteOpen] = useState(false);
  const [isMusicCreditOpen, setIsMusicCreditOpen] = useState(false);
  const [artworkPositions, setArtworkPositions] = useState<ArtworkPosition[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);
  const boardRef = useRef<HTMLElement>(null);
  const archiveRef = useRef<HTMLDivElement>(null);
  const archiveNoteRef = useRef<HTMLDivElement>(null);
  const brushesRef = useRef<HTMLDivElement>(null);
  const brushHitareaRef = useRef<HTMLButtonElement>(null);
  const artworkRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const dragPreviewRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const headphonesRef = useRef<HTMLDivElement>(null);
  const musicCreditRef = useRef<HTMLDivElement>(null);
  const musicCreditNoteRef = useRef<HTMLDivElement>(null);
  const placementAudioRef = useRef<HTMLAudioElement>(null);
  const fadeFrameRef = useRef<number | null>(null);
  const emailFeedbackTimerRef = useRef<number | null>(null);
  const musicPlayingRef = useRef(false);

  const playPlacementSound = useCallback(() => {
    const audio = placementAudioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.muted = false;
    audio.volume = 0.32;
    void audio.play().catch(() => undefined);
  }, []);

  usePegboardDrag(boardRef, dragPreviewRef, playPlacementSound);
  usePegboardShuffle(boardRef);

  const archiveNotePosition = useSafeContextNote(isArchiveNoteOpen, archiveRef, archiveNoteRef, boardRef);
  const musicCreditPosition = useSafeContextNote(isMusicCreditOpen, headphonesRef, musicCreditNoteRef, boardRef, musicCreditRef);

  async function copyEmailAddress() {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
    } catch {
      const copyField = document.createElement("textarea");
      copyField.value = EMAIL_ADDRESS;
      copyField.setAttribute("readonly", "");
      copyField.style.position = "fixed";
      copyField.style.opacity = "0";
      document.body.append(copyField);
      copyField.select();
      document.execCommand("copy");
      copyField.remove();
    }

    if ("vibrate" in navigator) navigator.vibrate(24);
    setIsEmailCopied(true);
    if (emailFeedbackTimerRef.current !== null) {
      window.clearTimeout(emailFeedbackTimerRef.current);
    }
    emailFeedbackTimerRef.current = window.setTimeout(() => {
      setIsEmailCopied(false);
      emailFeedbackTimerRef.current = null;
    }, 1800);
  }

  function stopAudioFade() {
    if (fadeFrameRef.current !== null) {
      window.cancelAnimationFrame(fadeFrameRef.current);
      fadeFrameRef.current = null;
    }
  }

  function fadeAudio(audio: HTMLAudioElement, targetVolume: number, duration: number, onComplete?: () => void) {
    stopAudioFade();
    const startVolume = audio.volume;
    const startedAt = window.performance.now();

    function tick(now: number) {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - (1 - progress) ** 3;
      audio.volume = startVolume + (targetVolume - startVolume) * eased;

      if (progress < 1) {
        fadeFrameRef.current = window.requestAnimationFrame(tick);
      } else {
        fadeFrameRef.current = null;
        onComplete?.();
      }
    }

    fadeFrameRef.current = window.requestAnimationFrame(tick);
  }

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    setIsMusicCreditOpen(true);

    if (musicPlayingRef.current) {
      musicPlayingRef.current = false;
      setIsMusicPlaying(false);
      fadeAudio(audio, 0, 1000, () => audio.pause());
      return;
    }

    musicPlayingRef.current = true;
    setIsMusicPlaying(true);
    if (audio.paused) audio.volume = 0;

    try {
      await audio.play();
      setNoteBurst((burst) => burst + 1);
      fadeAudio(audio, 0.12, 1300);
    } catch {
      musicPlayingRef.current = false;
      setIsMusicPlaying(false);
    }
  }

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      stopAudioFade();
      if (emailFeedbackTimerRef.current !== null) {
        window.clearTimeout(emailFeedbackTimerRef.current);
      }
      audio?.pause();
    };
  }, []);

  useEffect(() => {
    if (!isArtworkOpen) return;

    function closeFromOutside(event: MouseEvent) {
      const target = event.target;
      if (target instanceof Node && brushesRef.current?.contains(target)) return;
      event.preventDefault();
      event.stopPropagation();
      setIsArtworkOpen(false);
      setIsArtworkPositioned(false);
      setSelectedArtwork(null);
    }

    function closeFromEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setIsArtworkOpen(false);
      setIsArtworkPositioned(false);
      setSelectedArtwork(null);
    }

    document.addEventListener("click", closeFromOutside, true);
    document.addEventListener("keydown", closeFromEscape);
    return () => {
      document.removeEventListener("click", closeFromOutside, true);
      document.removeEventListener("keydown", closeFromEscape);
    };
  }, [isArtworkOpen]);

  useEffect(() => {
    if (!isArchiveNoteOpen && !isMusicCreditOpen) return;

    function closeContextNotes(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (archiveRef.current?.contains(target) || musicCreditRef.current?.contains(target)) return;
      setIsArchiveNoteOpen(false);
      setIsMusicCreditOpen(false);
    }

    document.addEventListener("pointerdown", closeContextNotes, true);
    return () => document.removeEventListener("pointerdown", closeContextNotes, true);
  }, [isArchiveNoteOpen, isMusicCreditOpen]);

  useLayoutEffect(() => {
    if (!isArtworkOpen) return;
    const board = boardRef.current;
    const holder = brushesRef.current;
    const hitarea = brushHitareaRef.current;
    const artworks = artworkRefs.current;
    if (!board || !holder || !hitarea || artworks.some((artwork) => !artwork)) return;

    const boardRect = board.getBoundingClientRect();
    const hitareaRect = hitarea.getBoundingClientRect();
    const mobile = window.matchMedia("(max-width: 760px)").matches;
    const safeMargin = mobile ? 12 : 22;
    const safe = {
      bottom: Math.min(boardRect.bottom, window.innerHeight) - safeMargin,
      left: Math.max(boardRect.left, 0) + safeMargin,
      right: Math.min(boardRect.right, window.innerWidth) - safeMargin,
      top: Math.max(boardRect.top, 0) + safeMargin,
    };
    const origin = {
      x: hitareaRect.left + hitareaRect.width / 2,
      y: hitareaRect.top + hitareaRect.height / 2,
    };
    const sizes = artworks.map((artwork, index) => {
      const width = artwork?.offsetWidth ?? 0;
      const height = artwork?.offsetHeight ?? 0;
      return { ...rotatedSize(width, height, ARTWORK_ROTATIONS[index]), height, width };
    });
    const available = {
      down: safe.bottom - origin.y,
      left: origin.x - safe.left,
      right: safe.right - origin.x,
      up: origin.y - safe.top,
    };
    const horizontalBias = available.right - available.left;
    const verticalBias = available.down - available.up;
    const baseAngle = Math.atan2(verticalBias, horizontalBias || 0.001);
    const angleSpreads = [
      [-1.05, 0, 1.05],
      [-1.25, -0.2, 0.9],
      [-0.9, 0.2, 1.25],
      [-1.45, -0.45, 0.55],
      [-0.55, 0.45, 1.45],
    ];
    let best: { positions: Array<{ x: number; y: number }>; score: number } | null = null;

    for (const spread of angleSpreads) {
      for (const radiusScale of [0.92, 1.06, 1.2, 1.34]) {
        const positions = sizes.map((size, index) => {
          const radius = (Math.max(size.width, size.height) + Math.max(hitareaRect.width, hitareaRect.height) * 0.34) * radiusScale;
          const angle = baseAngle + spread[index];
          const proposedX = origin.x + Math.cos(angle) * radius;
          const proposedY = origin.y + Math.sin(angle) * radius;
          return {
            x: clamp(proposedX, safe.left + size.width / 2, safe.right - size.width / 2),
            y: clamp(proposedY, safe.top + size.height / 2, safe.bottom - size.height / 2),
          };
        });
        const boxes = positions.map((position, index) => ({ ...position, width: sizes[index].width, height: sizes[index].height }));
        const overlap = overlapRatio(boxes[0], boxes[1]) + overlapRatio(boxes[0], boxes[2]) + overlapRatio(boxes[1], boxes[2]);
        const holderBox = { x: origin.x, y: origin.y, width: hitareaRect.width, height: hitareaRect.height };
        const holderOverlap = boxes.reduce((total, box) => total + overlapRatio(box, holderBox), 0);
        const clampDistance = positions.reduce((total, position, index) => {
          const radius = (Math.max(sizes[index].width, sizes[index].height) + Math.max(hitareaRect.width, hitareaRect.height) * 0.34) * radiusScale;
          const angle = baseAngle + spread[index];
          return total + Math.hypot(position.x - (origin.x + Math.cos(angle) * radius), position.y - (origin.y + Math.sin(angle) * radius));
        }, 0);
        const score = overlap * 12000 + holderOverlap * 6000 + clampDistance * 4 + radiusScale * 20;
        if (!best || score < best.score) best = { positions, score };
      }
    }

    const nextPositions = (best?.positions ?? []).map((position, index) => {
      const selectedSize = rotatedSize(sizes[index].width, sizes[index].height, 0, 1.52);
      const selectedX = clamp(position.x, safe.left + selectedSize.width / 2, safe.right - selectedSize.width / 2);
      const selectedY = clamp(position.y, safe.top + selectedSize.height / 2, safe.bottom - selectedSize.height / 2);
      return {
        selectedX: selectedX - origin.x,
        selectedY: selectedY - origin.y,
        x: position.x - origin.x,
        y: position.y - origin.y,
      };
    });

    setArtworkPositions(nextPositions);
    setIsArtworkPositioned(true);
  }, [isArtworkOpen]);

  function toggleArtwork() {
    setIsArtworkPositioned(false);
    setIsArtworkOpen((isOpen) => {
      if (isOpen) {
        setSelectedArtwork(null);
      }
      return !isOpen;
    });
  }

  return (
    <main className="fixed-landing" inert={projectModeActive} aria-hidden={projectModeActive}>
      <section
        ref={boardRef}
        className={isArtworkOpen ? "fixed-board is-artwork-open" : "fixed-board"}
        aria-label="Meena Vuppu portfolio pegboard"
      >
        <ProjectFile project={projects[0]} className="board-object p1" onOpenProject={onOpenProject} pegboardDragId="digital-gold" />

        <a
          className="photo-object board-object"
          data-peg-draggable="photo"
          href="https://www.linkedin.com/posts/meena-vuppu_friendsoffigma-configwatchparty-config2025-activity-7327375191125172224-LsLU?utm_source=share&utm_medium=member_desktop&rcm=ACoAACnGjGoBggAAG-XnFBamgY1cN6IJn76lm10"
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          aria-label="Meena Vuppu at Figma Config 2025"
        >
          <PegPin className="pin--one" />
          <PegPin className="pin--two" />
          <Image src="/meena-photo.jpeg" alt="Meena Vuppu" width={500} height={380} priority unoptimized />
          <span className="photo-caption">
            <span>Figma Config Bengaluru</span>
          </span>
        </a>

        <div
          ref={headphonesRef}
          className={`headphones-object board-object ${isMusicPlaying ? "is-playing" : ""}${isMusicCreditOpen ? " is-context-open" : ""}`}
          data-peg-draggable="headphones"
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") setIsMusicCreditOpen(false);
          }}
        >
          <button
            type="button"
            className="headphones-button"
            onClick={toggleMusic}
            aria-label={isMusicPlaying ? "Pause background music" : "Play background music"}
            aria-pressed={isMusicPlaying}
          >
            <BoardHook />
            <Image
              className="airpods-image"
              src="/airpods-max-lavender.png"
              alt="Lavender AirPods Max"
              width={2892}
              height={2960}
              unoptimized
            />
          </button>
          {noteBurst > 0 ? (
            <span className="music-notes" key={noteBurst} aria-hidden="true">
              <i>♪</i>
              <i>♫</i>
              <i>♪</i>
              <i>♬</i>
            </span>
          ) : null}
          <div
            ref={musicCreditRef}
            className={isMusicCreditOpen ? "music-credit is-open" : "music-credit"}
          >
            <button
              type="button"
              className="music-credit__trigger"
              aria-label="Music credit"
              aria-expanded={isMusicCreditOpen}
              onClick={() => setIsMusicCreditOpen((open) => !open)}
            >♪</button>
            <div
              ref={musicCreditNoteRef}
              className="music-credit__popover"
              style={{ left: musicCreditPosition.left, top: musicCreditPosition.top }}
            >
              <strong>Lemonade — Sakura Girl</strong>
              <span>
                <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noreferrer">CC BY 3.0</a>
                {" · Music via "}
                <a href="https://links.al/youtube" target="_blank" rel="noreferrer">Audio Library</a>
              </span>
              <span>
                <a href="https://soundcloud.com/sakuragirl_official" target="_blank" rel="noreferrer">Sakura Girl</a>
                {" · "}
                <a href="https://links.al/M09" target="_blank" rel="noreferrer">Free download</a>
              </span>
            </div>
          </div>
          <audio ref={audioRef} src="/lemonade-by-sakura-girl.mp3" loop preload="none" />
          <audio ref={placementAudioRef} src="/on-pin.mp3" preload="auto" aria-hidden="true" />
        </div>

        <ProjectFile project={projects[1]} className="board-object p2" onOpenProject={onOpenProject} pegboardDragId="vyapar-plus" />

        <a
          className="resume-object board-object"
          data-peg-draggable="resume"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          aria-label="Resume placeholder"
        >
          <PegPin />
          <strong>Resume</strong>
          <small>view PDF</small>
        </a>
        <div
          className="contact-note board-object"
          data-peg-draggable="contact"
        >
          <button
            className={isEmailCopied ? "contact-note__action is-copied" : "contact-note__action"}
            type="button"
            draggable={false}
            onDragStart={(event) => event.preventDefault()}
            onClick={copyEmailAddress}
            aria-label="Copy vuppumeena@gmail.com to clipboard"
          >
            <strong aria-live="polite">{isEmailCopied ? "Email copied!" : "Let’s talk work"}</strong>
            <small>{EMAIL_ADDRESS}</small>
          </button>
        </div>
        <a
          className="linkedin-note board-object"
          data-peg-draggable="linkedin"
          href="https://www.linkedin.com/in/meena-vuppu"
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
        >
          <strong>Connect on LinkedIn</strong>
        </a>

        <ProjectFile project={projects[2]} className="board-object p3" onOpenProject={onOpenProject} pegboardDragId="hives" />

        <div
          ref={brushesRef}
          className={`${isArtworkOpen ? "brushes-object board-object is-open" : "brushes-object board-object"}${isArtworkPositioned ? " is-positioned" : ""}`}
          data-peg-draggable={isArtworkOpen ? undefined : "watercolor"}
          data-peg-bounds="0.19,0.15,0.19,0.16"
        >
          <div className="brush-holder">
            <div className="brush-holder__hover">
              <Image
                className="brush-holder__image"
                src="/ceramic-watercolor-holder-clean.png"
                alt="Watercolor brushes in a handmade ceramic holder"
                width={1024}
                height={1536}
                unoptimized
              />
            </div>
            <button
              ref={brushHitareaRef}
              className="brush-holder__hitarea"
              type="button"
              onClick={toggleArtwork}
              aria-label={isArtworkOpen ? "Hide watercolor artwork" : "Reveal watercolor artwork"}
              aria-expanded={isArtworkOpen}
            />
          </div>
          <div className="watercolor-artworks" role="group" aria-label="Watercolor artwork previews" aria-hidden={!isArtworkOpen}>
            {[0, 1, 2].map((artwork) => (
              <button
                className={`watercolor-artwork watercolor-artwork--${artwork + 1}${selectedArtwork === artwork ? " is-selected" : ""}`}
                type="button"
                key={artwork}
                tabIndex={isArtworkOpen ? 0 : -1}
                aria-label={`Inspect artwork placeholder ${artwork + 1}`}
                aria-pressed={selectedArtwork === artwork}
                onClick={() => setSelectedArtwork(artwork)}
                ref={(element) => { artworkRefs.current[artwork] = element; }}
                style={{
                  "--art-rotation": `${ARTWORK_ROTATIONS[artwork]}deg`,
                  "--art-selected-x": `${artworkPositions[artwork]?.selectedX ?? 0}px`,
                  "--art-selected-y": `${artworkPositions[artwork]?.selectedY ?? 0}px`,
                  "--art-x": `${artworkPositions[artwork]?.x ?? 0}px`,
                  "--art-y": `${artworkPositions[artwork]?.y ?? 0}px`,
                } as CSSProperties}
              >
                <span className="watercolor-artwork__surface" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div
          ref={archiveRef}
          className={isArchiveNoteOpen ? "archive-object board-object is-context-open" : "archive-object board-object"}
          data-peg-draggable="archive"
          role="button"
          tabIndex={0}
          aria-expanded={isArchiveNoteOpen}
          onClick={() => setIsArchiveNoteOpen(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setIsArchiveNoteOpen(true);
            }
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") setIsArchiveNoteOpen(false);
          }}
        >
          <PegPin />
          <span>Archive</span>
          <strong>More work</strong>
          <div
            ref={archiveNoteRef}
            className={isArchiveNoteOpen ? "archive-context-note is-open" : "archive-context-note"}
            style={{ left: archiveNotePosition.left, top: archiveNotePosition.top }}
            role="status"
          >
            <strong>Still shaping these.</strong>
            <span>Drafts, experiments &amp; case studies coming up.</span>
          </div>
        </div>

        <div
          className="progress-note board-object"
          data-peg-draggable="progress-note"
          role="note"
          aria-label="In progress: Make digital journeys feel simpler."
        >
          <strong>In progress</strong>
          <span className="progress-note__task">
            <i aria-hidden="true" />
            <span>Make digital journeys<br />feel simpler.</span>
          </span>
          <span className="progress-note__doodle" aria-hidden="true">
            <i />
            <b />
          </span>
        </div>

        <MoneyPlant />
        <div ref={dragPreviewRef} className="peg-drag-preview" aria-hidden="true" />
      </section>
    </main>
  );
}
