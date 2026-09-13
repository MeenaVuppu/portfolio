"use client";

import { useEffect } from "react";
import { projects } from "../lib/projects";
import { ProjectFile } from "./ProjectFile";
import type { ProjectModePhase } from "./ProjectMode";

type ArchiveModeProps = { phase: ProjectModePhase };

function EmptyArchiveHolder({ className }: { className: string }) {
  return (
    <div className={`archive-holder-slot ${className} project-reveal`} aria-hidden="true">
      <span className="project-holder archive-empty-holder">
        <span className="project-holder__mesh" />
        <span className="project-holder__lip" />
      </span>
    </div>
  );
}

export function ArchiveMode({ phase }: ArchiveModeProps) {
  const hives = projects.find((project) => project.slug === "hives")!;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.querySelectorAll<HTMLElement>(".archive-mode .project-reveal")
      .forEach((item) => item.setAttribute("data-revealed", "true"));
  }, []);

  return (
    <main className={`project-mode archive-mode project-mode--${phase}`} aria-label="Archive" aria-live="polite">
      <div className="project-view project-view--archive">
        <section className="project-pegboard archive-pegboard" aria-label="Archived work board">
          <div className="archive-holder-gallery">
            <div className="archive-holder-slot archive-holder-slot--hives project-reveal">
              <ProjectFile project={hives} disabled className="archive-hives" />
            </div>
          <EmptyArchiveHolder className="archive-holder-slot--two" />
          <EmptyArchiveHolder className="archive-holder-slot--three" />
        </div>
      </section>
      </div>
    </main>
  );
}
