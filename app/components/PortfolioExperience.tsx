"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { getOtherProjects, getProject, type Project } from "../lib/projects";
import { HomeBoard } from "./HomeBoard";
import { PortfolioTitleHeader } from "./PortfolioTitleHeader";
import { ProjectMode, type ProjectModePhase } from "./ProjectMode";
import { ArchiveMode } from "./ArchiveMode";
import { playInteractionTick, preloadInteractionTick } from "../lib/soundEffects";

type PortfolioExperienceProps = {
  initialProject?: Project | null;
  initialArchive?: boolean;
};

const HOME_HEADLINE = "Design is chasing a feeling";

function projectFromPathname(pathname: string) {
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
  return match ? getProject(match[1]) ?? null : null;
}

export function PortfolioExperience({ initialProject = null, initialArchive = false }: PortfolioExperienceProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(initialProject);
  const [archiveOpen, setArchiveOpen] = useState(initialArchive);
  const [phase, setPhase] = useState<ProjectModePhase>(initialProject || initialArchive ? "open" : "closing");
  const boardScrollY = useRef(0);
  const transitionTimer = useRef<number | null>(null);
  const activeTransition = useRef<ViewTransition | null>(null);
  const outgoingSnapshot = useRef<HTMLElement | null>(null);
  const lastProjectTrigger = useRef<HTMLElement | null>(null);

  function navigationClick(event: MouseEvent<HTMLDivElement>) {
    if (event.button !== 0 || !event.nativeEvent.isTrusted || !(event.target instanceof Element)) return;
    const control = event.target.closest('a[href], button, [role="button"]');
    if (!control || control.closest("[data-page-snapshot]") || control.getAttribute("aria-disabled") === "true") return;
    // Music playback and the mute toggle keep their own audio behavior.
    if (control.matches(".headphones-button, [data-sound-control]")) return;
    const href = control.getAttribute("href");
    if (href !== null && (!href || href.startsWith("#") || href.startsWith("javascript:"))) return;
    // Bubble after the drag handler so a suppressed drag-click remains silent.
    playInteractionTick();
  }

  function clearTransitionTimer() {
    if (transitionTimer.current !== null) {
      window.clearTimeout(transitionTimer.current);
      transitionTimer.current = null;
    }
  }

  function finishOnBoard() {
    setSelectedProject(null);
    setArchiveOpen(false);
    setPhase("closing");
  }

  // Every navigation path swaps the same persistent surface through opacity only.
  function transitionTo(project: Project | null, archive = false) {
    clearTransitionTimer();
    activeTransition.current?.skipTransition();
    outgoingSnapshot.current?.remove();
    outgoingSnapshot.current = null;
    const update = () => {
      flushSync(() => {
        if (!project && !archive) finishOnBoard();
        else {
          setSelectedProject(project);
          setArchiveOpen(archive);
          setPhase("open");
        }
      });
      window.scrollTo({ top: project || archive ? 0 : boardScrollY.current, behavior: "auto" });
      if (!project && !archive) lastProjectTrigger.current?.focus({ preventScroll: true });
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      update();
    } else if (document.startViewTransition) {
      activeTransition.current = document.startViewTransition(update);
    } else {
      // Older browsers need a temporary, inert copy to crossfade without a blank frame.
      const source = document.querySelector<HTMLElement>(".portfolio-experience")!;
      const copy = source.cloneNode(true) as HTMLElement;
      const sourceNodes = [source, ...source.querySelectorAll<HTMLElement>("*")];
      const copiedNodes = [copy, ...copy.querySelectorAll<HTMLElement>("*")];
      sourceNodes.forEach((node, index) => {
        const style = getComputedStyle(node);
        copiedNodes[index].style.opacity = style.opacity;
        copiedNodes[index].style.transform = style.transform;
        copiedNodes[index].style.filter = style.filter;
      });
      const snapshot = document.createElement("div");
      snapshot.setAttribute("data-page-snapshot", "");
      snapshot.setAttribute("aria-hidden", "true");
      snapshot.inert = true;
      Object.assign(copy.style, {
        position: "absolute", top: `${-window.scrollY}px`, left: "0",
        width: `${source.getBoundingClientRect().width}px`,
      });
      snapshot.append(copy);
      document.body.append(snapshot);
      outgoingSnapshot.current = snapshot;
      update();
      transitionTimer.current = window.setTimeout(() => {
        snapshot.remove();
        outgoingSnapshot.current = null;
      }, 200);
    }
  }

  useEffect(() => {
    preloadInteractionTick();
    history.replaceState(
      { ...history.state, portfolio: true, project: initialProject?.slug ?? null, archive: initialArchive, fromBoard: false },
      "",
      window.location.href,
    );

    function handlePopState() {
      const project = projectFromPathname(window.location.pathname);
      const archive = window.location.pathname === "/archive" || window.location.pathname === "/archive/";
      transitionTo(project, archive);
    }

    window.addEventListener("popstate", handlePopState);
    return () => {
      clearTransitionTimer();
      activeTransition.current?.skipTransition();
      outgoingSnapshot.current?.remove();
      window.removeEventListener("popstate", handlePopState);
    };
  }, [initialArchive, initialProject]);

  useEffect(() => {
    document.body.classList.toggle("portfolio-project-active", selectedProject !== null || archiveOpen);
    return () => document.body.classList.remove("portfolio-project-active");
  }, [archiveOpen, selectedProject]);

  function openProject(project: Project, trigger: HTMLAnchorElement) {
    clearTransitionTimer();
    lastProjectTrigger.current = trigger;
    boardScrollY.current = window.scrollY;
    history.pushState(
      { ...history.state, portfolio: true, project: project.slug, fromBoard: true },
      "",
      `/projects/${project.slug}`,
    );
    transitionTo(project);
  }

  function openArchive(trigger: HTMLElement) {
    clearTransitionTimer();
    lastProjectTrigger.current = trigger;
    boardScrollY.current = window.scrollY;
    history.pushState({ ...history.state, portfolio: true, project: null, archive: true, fromBoard: true }, "", "/archive");
    transitionTo(null, true);
  }

  function closeProject() {
    if (!selectedProject && !archiveOpen) return;
    if (history.state?.fromBoard) history.back();
    else {
      history.pushState({ ...history.state, portfolio: true, project: null, fromBoard: false }, "", "/");
      transitionTo(null);
    }
  }

  function switchProject(project: Project) {
    if (!selectedProject || selectedProject.slug === project.slug) return;
    history.pushState(
      { ...history.state, portfolio: true, project: project.slug, fromBoard: false },
      "",
      `/projects/${project.slug}`,
    );
    transitionTo(project);
  }

  return (
    <div onClick={navigationClick} className={`portfolio-experience ${selectedProject || archiveOpen ? "is-project-mode" : "is-board-mode"} project-phase-${phase}`}>
      <PortfolioTitleHeader
        title={phase !== "closing" ? (selectedProject?.headline ?? (archiveOpen ? "Archive" : HOME_HEADLINE)) : HOME_HEADLINE}
        compactTitle={selectedProject?.headline ?? (archiveOpen ? "Archive" : HOME_HEADLINE)}
        onHome={selectedProject || archiveOpen ? closeProject : undefined}
        projectMode={selectedProject !== null || archiveOpen}
      />
      <div className="portfolio-state-stage">
        <HomeBoard onOpenProject={openProject} onOpenArchive={openArchive} projectModeActive={selectedProject !== null || archiveOpen} />
        {selectedProject ? (
          <ProjectMode
            project={selectedProject}
            otherProjects={getOtherProjects(selectedProject.slug).filter((project) => project.slug !== "hives")}
            phase={phase}
            onSwitchProject={switchProject}
          />
        ) : null}
        {archiveOpen ? <ArchiveMode phase={phase} onOpenProject={openProject} /> : null}
      </div>
    </div>
  );
}
