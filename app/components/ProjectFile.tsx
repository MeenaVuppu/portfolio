"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type CSSProperties, type MouseEvent, useEffect, useState } from "react";
import type { Project } from "../lib/projects";
import { playPageFlipSound, preloadPageFlipSound } from "../lib/soundEffects";
import { PaperClip } from "./Hardware";

type ProjectFileProps = {
  project: Project;
  className?: string;
  compact?: boolean;
  disabled?: boolean;
  pegboardDragId?: string;
  onOpenProject?: (project: Project, trigger: HTMLAnchorElement) => void;
};

export function ProjectFile({ project, className = "", compact, disabled = false, pegboardDragId, onOpenProject }: ProjectFileProps) {
  const router = useRouter();
  const [isOpening, setIsOpening] = useState(false);
  const [openingStyle, setOpeningStyle] = useState<CSSProperties>();
  const href = `/projects/${project.slug}`;

  useEffect(() => {
    preloadPageFlipSound();
    return () => document.body.classList.remove("project-opening");
  }, []);

  function openProject(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    if (isOpening) return;

    playPageFlipSound();

    const element = event.currentTarget;
    const board = element.closest(".fixed-board, .project-pegboard") as HTMLElement | null;
    if (board) {
      sessionStorage.setItem("portfolio-board-scroll", String(board.scrollTop));
    }

    const rect = element.getBoundingClientRect();
    setOpeningStyle({
      "--project-origin-left": `${rect.left}px`,
      "--project-origin-top": `${rect.top}px`,
      "--project-origin-width": `${rect.width}px`,
      "--project-origin-height": `${rect.height}px`,
      "--project-shift-x": `${window.innerWidth / 2 - (rect.left + rect.width / 2)}px`,
      "--project-shift-y": `${window.innerHeight / 2 - (rect.top + rect.height / 2)}px`,
    } as CSSProperties);

    setIsOpening(true);
    document.body.classList.add("project-opening");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (onOpenProject) {
      window.setTimeout(
        () => onOpenProject(project, element),
        reducedMotion ? 0 : board?.classList.contains("fixed-board") ? 240 : 0,
      );
      window.setTimeout(() => {
        setIsOpening(false);
        document.body.classList.remove("project-opening");
      }, reducedMotion ? 0 : 620);
    } else {
      window.setTimeout(() => router.push(href), reducedMotion ? 0 : 420);
    }
  }

  const projectContent = (
    <>
      <span className="project-file__back-sheet" aria-hidden="true" />
      <span className="project-file__document">
        <PaperClip className="project-file__clip" />
        <span className="project-file__tab" aria-hidden="true" />
        <span className="project-file__eyebrow">{project.eyebrow}</span>
        <span className="project-file__title">{project.title}</span>
        <span className="project-file__metric">{project.metric}</span>
        <span className="project-file__label">{project.metricLabel}</span>
      </span>
      <span className="project-holder" aria-hidden="true">
        <span className="project-holder__mesh" />
        <span className="project-holder__lip" />
      </span>
    </>
  );

  const projectClassName = `project-file project-file--${project.slug} ${compact ? "project-file--compact" : ""} ${isOpening ? "is-opening" : ""} ${className}`;

  if (disabled) {
    return (
      <div className={projectClassName} aria-label={`${project.title} project`} data-peg-draggable={pegboardDragId}>
        {projectContent}
      </div>
    );
  }

  return (
    <Link className={projectClassName} data-peg-draggable={pegboardDragId} href={href} onClick={openProject} style={openingStyle}>
      {projectContent}
    </Link>
  );
}
