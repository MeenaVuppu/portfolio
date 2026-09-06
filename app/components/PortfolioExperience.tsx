"use client";

import { useEffect, useRef, useState } from "react";
import { getOtherProjects, getProject, type Project } from "../lib/projects";
import { HomeBoard } from "./HomeBoard";
import { PortfolioTitleHeader } from "./PortfolioTitleHeader";
import { ProjectMode, type ProjectModePhase } from "./ProjectMode";

type PortfolioExperienceProps = {
  initialProject?: Project | null;
};

const HOME_HEADLINE = "Design is chasing a feeling";

function projectFromPathname(pathname: string) {
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
  return match ? getProject(match[1]) ?? null : null;
}

export function PortfolioExperience({ initialProject = null }: PortfolioExperienceProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(initialProject);
  const [phase, setPhase] = useState<ProjectModePhase>(initialProject ? "open" : "closing");
  const boardScrollY = useRef(0);
  const transitionTimer = useRef<number | null>(null);
  const closingFromControl = useRef(false);
  const lastProjectTrigger = useRef<HTMLAnchorElement | null>(null);

  function clearTransitionTimer() {
    if (transitionTimer.current !== null) {
      window.clearTimeout(transitionTimer.current);
      transitionTimer.current = null;
    }
  }

  function finishOnBoard() {
    setSelectedProject(null);
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
      { portfolio: true, project: initialProject?.slug ?? null, fromBoard: false },
      "",
      window.location.href,
    );

    function handlePopState() {
      clearTransitionTimer();
      const project = projectFromPathname(window.location.pathname);
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
      setPhase("opening");
      transitionTimer.current = window.setTimeout(() => setPhase("open"), 420);
    }

    window.addEventListener("popstate", handlePopState);
    return () => {
      clearTransitionTimer();
      window.removeEventListener("popstate", handlePopState);
    };
  }, [initialProject]);

  useEffect(() => {
    document.body.classList.toggle("portfolio-project-active", selectedProject !== null);
    return () => document.body.classList.remove("portfolio-project-active");
  }, [selectedProject]);

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
    setPhase("opening");
    transitionTimer.current = window.setTimeout(() => setPhase("open"), 440);
  }

  function closeProject() {
    if (!selectedProject || phase === "closing") return;
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
    <div className={`portfolio-experience ${selectedProject ? "is-project-mode" : "is-board-mode"} project-phase-${phase}`}>
      <PortfolioTitleHeader
        title={selectedProject && phase !== "closing" ? selectedProject.headline : HOME_HEADLINE}
        compactTitle={selectedProject && phase !== "closing" ? selectedProject.headline : HOME_HEADLINE}
        onHome={selectedProject ? closeProject : undefined}
        projectMode={selectedProject !== null}
      />
      <div className="portfolio-state-stage">
        <HomeBoard onOpenProject={openProject} projectModeActive={selectedProject !== null} />
        {selectedProject ? (
          <ProjectMode
            project={selectedProject}
            otherProjects={getOtherProjects(selectedProject.slug)}
            phase={phase}
            onSwitchProject={switchProject}
          />
        ) : null}
      </div>
    </div>
  );
}
