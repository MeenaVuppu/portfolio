"use client";

import { useEffect, useRef, useState } from "react";
import { getOtherProjects, getProject, type Project } from "../lib/projects";
import { HomeBoard } from "./HomeBoard";
import { PortfolioTitleHeader } from "./PortfolioTitleHeader";
import { ProjectMode, type ProjectModePhase } from "./ProjectMode";
import { ArchiveMode } from "./ArchiveMode";

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
  const closingFromControl = useRef(false);
  const lastProjectTrigger = useRef<HTMLElement | null>(null);

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
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: boardScrollY.current, behavior: "auto" });
        lastProjectTrigger.current?.focus({ preventScroll: true });
      });
    });
  }

  useEffect(() => {
    history.replaceState(
      { portfolio: true, project: initialProject?.slug ?? null, archive: initialArchive, fromBoard: false },
      "",
      window.location.href,
    );

    function handlePopState() {
      clearTransitionTimer();
      const project = projectFromPathname(window.location.pathname);
      const archive = window.location.pathname === "/archive" || window.location.pathname === "/archive/";
      if (archive) {
        setSelectedProject(null);
        setArchiveOpen(true);
        setPhase("opening");
        transitionTimer.current = window.setTimeout(() => setPhase("open"), 420);
        return;
      }
      if (!project) {
        if (closingFromControl.current) {
          closingFromControl.current = false;
          finishOnBoard();
          return;
        }
        setPhase("closing");
        transitionTimer.current = window.setTimeout(finishOnBoard, 320);
        return;
      }

      setSelectedProject(project);
      setArchiveOpen(false);
      setPhase("opening");
      transitionTimer.current = window.setTimeout(() => setPhase("open"), 420);
    }

    window.addEventListener("popstate", handlePopState);
    return () => {
      clearTransitionTimer();
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
      { portfolio: true, project: project.slug, fromBoard: true },
      "",
      `/projects/${project.slug}`,
    );
    setSelectedProject(project);
    setArchiveOpen(false);
    setPhase("opening");
    transitionTimer.current = window.setTimeout(() => setPhase("open"), 440);
  }

  function openArchive(trigger: HTMLElement) {
    clearTransitionTimer();
    lastProjectTrigger.current = trigger;
    boardScrollY.current = window.scrollY;
    history.pushState({ portfolio: true, project: null, archive: true, fromBoard: true }, "", "/archive");
    setSelectedProject(null);
    setArchiveOpen(true);
    setPhase("opening");
    transitionTimer.current = window.setTimeout(() => setPhase("open"), 440);
  }

  function closeProject() {
    if ((!selectedProject && !archiveOpen) || phase === "closing") return;
    clearTransitionTimer();
    setPhase("closing");

    transitionTimer.current = window.setTimeout(() => {
      if (history.state?.fromBoard) {
        closingFromControl.current = true;
        history.back();
      } else {
        history.replaceState({ portfolio: true, project: null, fromBoard: false }, "", "/");
        finishOnBoard();
      }
    }, 340);
  }

  function switchProject(project: Project) {
    if (!selectedProject || selectedProject.slug === project.slug) return;
    clearTransitionTimer();
    setPhase("switching");

    transitionTimer.current = window.setTimeout(() => {
      history.replaceState(
        { ...history.state, portfolio: true, project: project.slug },
        "",
        `/projects/${project.slug}`,
      );
      setSelectedProject(project);
      setPhase("opening");
      transitionTimer.current = window.setTimeout(() => setPhase("open"), 360);
    }, 180);
  }

  return (
    <div className={`portfolio-experience ${selectedProject || archiveOpen ? "is-project-mode" : "is-board-mode"} project-phase-${phase}`}>
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
        {archiveOpen ? <ArchiveMode phase={phase} /> : null}
      </div>
    </div>
  );
}
