"use client";

import { useEffect, useState } from "react";
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
  const [experimentsOpen, setExperimentsOpen] = useState(false);
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
          <section className={styles.experiments} aria-label="Design to development experiments">
            <button
              type="button"
              className={`project-story-pin archive-work-pin ${styles.card}`}
              aria-expanded={experimentsOpen}
              aria-controls="archive-experiments-detail"
              onClick={() => setExperimentsOpen((open) => !open)}
            >
              <PegPin />
              <span className="section-kicker">Experiments</span>
              <h2>From Figma to Deployment</h2>
              <p>AI-Assisted Design to Development</p>
              <span className={styles.action}>{experimentsOpen ? "Close experiments −" : "Explore two experiments +"}</span>
            </button>
            <div id="archive-experiments-detail" className={styles.detail} hidden={!experimentsOpen}>
              <article>
                <h3>01 — Claude + Figma MCP</h3>
                <p>Explored generating editable UI designs directly inside Figma using Claude and Figma MCP.</p>
                <ol className={styles.workflow} aria-label="Claude and Figma MCP workflow">
                  <li>Claude</li><li>Figma MCP</li><li>Editable UI in Figma</li>
                </ol>
              </article>
              <article>
                <h3>02 — Figma MCP + Codex</h3>
                <p>Connected Figma MCP to Codex in VS Code. Pointed Codex to the Figma design to interpret it and implement code changes, then pushed those changes to GitHub for deployment on Vercel.</p>
                <ol className={styles.workflow} aria-label="Figma MCP and Codex workflow">
                  <li>Figma design</li><li>Figma MCP</li><li>Codex in VS Code</li><li>Code changes</li><li>GitHub</li><li>Vercel deployment</li>
                </ol>
              </article>
              <p className={styles.note}>Explorations of AI-assisted workflows, not production implementations or automatic Figma-to-code synchronization.</p>
            </div>
          </section>
      </section>
      </div>
    </main>
  );
}
