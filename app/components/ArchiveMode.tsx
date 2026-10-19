"use client";

import { useEffect } from "react";
import { ProjectFile } from "./ProjectFile";
import { projects, type Project } from "../lib/projects";
import { PegPin, PaperClip } from "./Hardware";
import type { ProjectModePhase } from "./ProjectMode";
import styles from "./ArchiveExperiments.module.css";

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
  metric: "88%",
  metricLabel: "Top Fellow · Graduation Project",
};

export function ArchiveMode({ phase }: ArchiveModeProps) {
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
              <ProjectFile project={hivesProject} className="archive-hives" externalHref="https://assets.nextleap.app/submissions/HivesCaseStudy-cb636350-e245-462f-b229-da36d2199b60.pdf" externalTitleHref="https://www.figma.com/proto/kVL7VTLA4mfSRs8o6vBZzM/M3--Prototype?node-id=93-2465&t=NqwsOi4ts5pt8Ixj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=93%3A2465" />
            </div>
          </div>
          <div className="archive-supporting-label section-kicker">Experiments &amp; Explorations</div>
          <section className={styles.experiments} aria-label="Design to development experiments">
            <article className={`project-story-pin archive-work-pin ${styles.card}`}>
              <PegPin />
              <span className="section-kicker">Experiments</span>
              <h2>AI-Assisted Design to Development</h2>
              <p className={styles.subtitle}>Exploring AI-assisted design workflows.</p>
              <div className={styles.sections}>
                <section className={styles.experiment} aria-labelledby="archive-experiment-01">
                  <span className={styles.number}>01</span>
                  <h3 id="archive-experiment-01">Claude + Figma MCP</h3>
                  <p>Generated editable UI designs directly in Figma.</p>
                  <Workflow tools={["Claude", "Figma MCP", "Figma"]} label="Claude to Figma workflow" />
                </section>
                <section className={styles.experiment} aria-labelledby="archive-experiment-02">
                  <span className={styles.number}>02</span>
                  <h3 id="archive-experiment-02">Figma MCP + Codex</h3>
                  <p>Translated Figma designs into code and deployed via GitHub.</p>
                  <Workflow tools={["Figma", "Codex", "GitHub", "Vercel"]} label="Figma to deployment workflow" />
                </section>
              </div>
            </article>
          </section>
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

function Workflow({ tools, label }: { tools: string[]; label: string }) {
  return (
    <ol className={styles.workflow} aria-label={label}>
      {tools.map((tool) => <li key={tool}>{tool}</li>)}
    </ol>
  );
}
