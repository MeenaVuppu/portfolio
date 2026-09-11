"use client";

import { useEffect, type CSSProperties } from "react";
import type { Project } from "../lib/projects";
import { PaperClip, PegPin } from "./Hardware";
import { ProjectFile } from "./ProjectFile";

export type ProjectModePhase = "opening" | "open" | "switching" | "closing";

type ProjectModeProps = {
  project: Project;
  otherProjects: Project[];
  phase: ProjectModePhase;
  onSwitchProject: (project: Project) => void;
};

export function ProjectMode({ project, otherProjects, phase, onSwitchProject }: ProjectModeProps) {
  const caseStudyMetric = project.caseStudyMetric ?? project.metric;
  const caseStudyMetricLabel = project.caseStudyMetricLabel ?? project.metricLabel;
  const pegboardTheme = {
    "--project-pegboard": project.pegboardTheme.board,
    "--project-pegboard-hole": project.pegboardTheme.holes,
  } as CSSProperties;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".project-mode .project-reveal"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.setAttribute("data-revealed", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).setAttribute("data-revealed", "true");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -7%", threshold: 0.08 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [project.slug]);

  return (
    <main className={`project-mode project-mode--${phase}`} aria-label={`${project.title} project`} aria-live="polite">
      <div className={`project-view project-view--${project.slug}`}>
        <section className="project-pegboard" style={pegboardTheme} aria-label={`${project.title} case study board`}>
          <div className="project-board-intro project-reveal">
            <span className="project-board-label">Project snapshot</span>
            {project.snapshotCopy && <p className="project-board-copy">{project.snapshotCopy}</p>}
            <div className="project-board-meta">
              {project.metadata.map((item) => <span key={item}>{item}</span>)}
            </div>
            {project.products && (
              <div className="project-board-products">
                {project.products.map((item) => <span key={item}>{item}</span>)}
              </div>
            )}
            <div className="project-board-stats">
              {project.stats.map((stat) => (
                <div className={stat.isForecast ? "is-forecast" : ""} key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            {project.snapshotFootnote && <small className="project-board-footnote">{project.snapshotFootnote}</small>}
          </div>

          {project.detailNotes && (
            <section className="project-detail-notes project-reveal" aria-label="Digital Gold evidence and direction">
              {project.detailNotes.map((note) => (
                <article className="project-detail-note" key={note.title}>
                  <PegPin />
                  <span>{note.eyebrow}</span>
                  <h2>{note.title}</h2>
                  {note.body && <p>{note.body}</p>}
                  {note.items && (
                    <div className="project-detail-note__metrics">
                      {note.items.map((item) => (
                        <div key={item.label}>
                          <strong>{item.value}</strong>
                          <small>{item.label}</small>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </section>
          )}

          {project.storyPins ? (
            <section className="project-story-board" aria-label={`${project.title} project story`}>
              {project.storyPins.map((pin, index) => (
                <article
                  className={`project-story-pin project-story-pin--${pin.variant ?? "paper"} project-reveal`}
                  key={pin.title}
                >
                  {index % 2 === 0 ? <PegPin /> : <PaperClip />}
                  <span className="section-kicker">{pin.eyebrow}</span>
                  <h2>{pin.title}</h2>
                  {pin.body && <p>{pin.body}</p>}
                  {pin.flow && (
                    <div className="project-story-flow" aria-label={pin.flow.join(" then ")}>
                      {pin.flow.map((step, stepIndex) => (
                        <div key={step}>
                          <strong>{step}</strong>
                          {stepIndex < pin.flow!.length - 1 && <span aria-hidden="true">→</span>}
                        </div>
                      ))}
                    </div>
                  )}
                  {pin.items && (
                    <div className="project-story-items">
                      {pin.items.map((item) => (
                        <div key={`${item.value}-${item.label}`}>
                          <strong>{item.value}</strong>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {pin.highlight && <strong className="project-story-highlight">{pin.highlight}</strong>}
                  {pin.visual && (
                    <div className="project-story-visual">
                      <span>Major product visual placeholder</span>
                      <small>{pin.visual}</small>
                    </div>
                  )}
                  {pin.footnote && <small className="project-story-footnote">{pin.footnote}</small>}
                </article>
              ))}
            </section>
          ) : <>
          <section className="project-board-row project-board-row--opportunity project-reveal">
            <article className="project-paper project-paper--copy">
              <PaperClip className="project-paper__clip" />
              <span className="section-kicker">01 — Opportunity</span>
              <h2>{project.opportunity.title}</h2>
              <p>{project.opportunity.body}</p>
              {project.opportunity.highlight && <strong className="project-section-highlight">{project.opportunity.highlight}</strong>}
            </article>
            <div className="project-screen project-screen--pinned">
              <PegPin />
              <span>Major product visual placeholder</span>
              <small>Visual 01 · Opportunity</small>
            </div>
          </section>

          <section className="project-board-row project-board-row--matter project-reveal">
            <aside className="project-sticky-note">
              <PegPin />
              <span>02 — Why it matters</span>
              <strong>{caseStudyMetric}</strong>
              <small>{caseStudyMetricLabel}</small>
            </aside>
            <article className="project-paper project-paper--wide">
              <h2>{project.problem.title}</h2>
              <p>{project.problem.body}</p>
              {project.problem.highlight && <strong className="project-section-highlight">{project.problem.highlight}</strong>}
            </article>
          </section>

          <section className="project-decisions project-reveal">
            <div className="project-decisions__heading">
              <span className="section-kicker">03 — Product decisions</span>
              <h2>The decisions that shaped the product.</h2>
            </div>
            <div className="project-decision-stack">
              {project.decisions.map((decision, index) => (
                <article className="project-decision-sheet" key={decision.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{decision.title}</h3>
                  <p>{decision.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="project-experience project-reveal">
            <article className="project-paper project-paper--experience">
              <span className="section-kicker">04 — Experience</span>
              <h2>{project.solution.title}</h2>
              <p>{project.solution.body}</p>
              {project.solution.highlight && <strong className="project-section-highlight">{project.solution.highlight}</strong>}
            </article>
            <div className="project-screen project-screen--wide">
              <PaperClip />
              <span>Major product visual placeholder</span>
              <small>Visual 02 · Final experience</small>
            </div>
          </section>

          <section className="project-impact project-reveal">
            <span className="section-kicker">{project.impact.sectionLabel ?? "05 — Impact"}</span>
            <h2>{project.impact.title}</h2>
            <p>{project.impact.body}</p>
            {project.impact.showMetric !== false && (
              <>
                <strong>{caseStudyMetric}</strong>
                <small>{caseStudyMetricLabel}</small>
              </>
            )}
          </section>
          </>}

          <nav className="project-elsewhere project-reveal" aria-label="Other projects">
            <span>The Good Stuff Continues...</span>
            <div className="project-elsewhere__files">
              {otherProjects.map((otherProject) => (
                <ProjectFile
                  key={otherProject.slug}
                  project={otherProject}
                  className="project-elsewhere__file"
                  compact
                  onOpenProject={onSwitchProject}
                />
              ))}
            </div>
          </nav>
        </section>
      </div>
    </main>
  );
}
