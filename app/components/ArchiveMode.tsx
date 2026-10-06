"use client";

import { useEffect } from "react";
import { ProjectFile } from "./ProjectFile";
import { projects, type Project } from "../lib/projects";
import { PegPin, PaperClip } from "./Hardware";
import type { ProjectModePhase } from "./ProjectMode";

type ArchiveModeProps = { phase: ProjectModePhase; onOpenProject?: (project: Project, trigger: HTMLAnchorElement) => void };

const workSnapshots = [
  { title: "Credit Score", descriptor: "CRIF + CIBIL", scope: "Payments · Rewards", evidence: "<2% payment-completion baseline" },
  { title: "Lending", descriptor: "Gold Loan · Vehicle Loan", scope: "Lead generation · Application journeys" },
  { title: "Forex", descriptor: "Financial-service journeys" },
  { title: "Other Product Work", descriptor: "Chatbot · Permissions", scope: "Supporting fintech journeys" },
];

const hivesProject: Project = {
  ...projects.find((project) => project.slug === "hives")!,
  title: "Hives",
  eyebrow: "NextLeap Fellowship",
  metric: "Top Fellow · 88%",
  metricLabel: "Graduation Project",
};

export function ArchiveMode({ phase, onOpenProject }: ArchiveModeProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.querySelectorAll<HTMLElement>(".archive-mode .project-reveal")
      .forEach((item) => item.setAttribute("data-revealed", "true"));
  }, []);

  return (
    <main className={`project-mode archive-mode project-mode--${phase}`} aria-label="Archive" aria-live="polite">
      <div className="project-view project-view--archive">
        <section className="project-pegboard archive-pegboard" aria-label="Archived work board">
          <div className="archive-case-study">
            <span className="section-kicker">Full case studies</span>
            <div className="archive-case-study-folders">
              <ProjectFile project={projects.find((project) => project.slug === "fixed-deposit")!} className="archive-fd" onOpenProject={onOpenProject} />
              <ProjectFile project={hivesProject} className="archive-hives" externalHref="https://assets.nextleap.app/submissions/HivesCaseStudy-cb636350-e245-462f-b229-da36d2199b60.pdf" />
            </div>
          </div>
          <div className="archive-supporting-label section-kicker">Supporting work</div>
          <div className="archive-work-gallery" aria-label="Additional product exposure">
            {workSnapshots.map((work, index) => (
              <article className="project-story-pin archive-work-pin project-reveal" key={work.title}>
                {index % 2 === 0 ? <PegPin /> : <PaperClip />}
                <span className="section-kicker">Product exposure</span>
                <h2>{work.title}</h2>
                <p>{work.descriptor}</p>
                {work.scope && <p>{work.scope}</p>}
                {work.evidence && <small className="project-story-footnote">{work.evidence}</small>}
              </article>
            ))}
          </div>
      </section>
      </div>
    </main>
  );
}
