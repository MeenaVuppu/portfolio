export type ProjectStat = {
  value: string;
  label: string;
  isForecast?: boolean;
};

export type ProjectDecision = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  pegboardTheme: {
    board: string;
    holes: string;
  };
  eyebrow: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  category: string;
  headline: string;
  metadata: string[];
  stats: ProjectStat[];
  opportunity: { title: string; body: string };
  problem: { title: string; body: string };
  decisions: ProjectDecision[];
  solution: { title: string; body: string };
  impact: { title: string; body: string };
};

export const projects: Project[] = [
  {
    slug: "digital-gold",
    pegboardTheme: { board: "#F7E8A4", holes: "#C8B96F" },
    eyebrow: "Muthoot · Product redesign",
    title: "Digital Gold",
    description:
      "Placeholder for a sharper story about redesigning a high-trust investment experience.",
    metric: "+32%",
    metricLabel: "impact metric placeholder",
    category: "Digital Gold · Investment experience",
    headline: "Redesigning digital gold around trust and clarity.",
    metadata: ["Product designer", "Product redesign", "Fintech"],
    stats: [
      { value: "Redesign", label: "Investment experience" },
      { value: "Muthoot", label: "Product context" },
      { value: "[Real metric]", label: "Business / product impact" },
    ],
    opportunity: {
      title: "Making a high-trust product easier to understand.",
      body: "Placeholder for the sharpest opportunity: where the existing investment experience created uncertainty and what a clearer journey needed to unlock.",
    },
    problem: {
      title: "Trust had to be designed into every decision.",
      body: "Placeholder for the user and business tension that made this redesign matter, expressed as one concise product problem.",
    },
    decisions: [
      {
        title: "Clarify the investment journey",
        body: "Placeholder for the strongest information or interaction decision that reduced ambiguity.",
      },
      {
        title: "Surface confidence at key moments",
        body: "Placeholder for the decision that helped users understand value, risk, or next steps.",
      },
    ],
    solution: {
      title: "A clearer path from intent to investment.",
      body: "Placeholder for the final experience and the one product visual that best communicates the redesign.",
    },
    impact: {
      title: "A stronger, more legible investment experience.",
      body: "Impact metric placeholder. Replace this with the verified business and user outcome when available.",
    },
  },
  {
    slug: "vyapar-plus",
    pegboardTheme: { board: "#C9DCE3", holes: "#91AEB9" },
    eyebrow: "Muthoot · Kirana earning platform",
    title: "Vyapar Plus",
    description:
      "Placeholder for a business-facing platform story led from zero to one.",
    metric: "0 → 1",
    metricLabel: "Sole Product Designer · impact metric placeholder",
    category: "Vyapar Plus · Kirana fintech",
    headline: "Designing a kirana commission platform from 0 → 1.",
    metadata: ["Sole product designer", "0→1 product", "Fintech"],
    stats: [
      { value: "0 → 1", label: "Product built from scratch" },
      { value: "1", label: "Sole product designer" },
      { value: "[Real metric]", label: "Business / product impact" },
    ],
    opportunity: {
      title: "Turn a new business model into a usable product.",
      body: "Placeholder for the market and product opportunity behind the kirana commission platform, kept focused on the reason the product needed to exist.",
    },
    problem: {
      title: "A new platform had to make earning feel clear and dependable.",
      body: "Placeholder for the core user and business tension that shaped the zero-to-one product direction.",
    },
    decisions: [
      {
        title: "Make commission logic legible",
        body: "Placeholder for the decision that made complex earning rules easier to understand and act on.",
      },
      {
        title: "Design for repeat use",
        body: "Placeholder for the workflow decision that supported a dependable day-to-day product habit.",
      },
    ],
    solution: {
      title: "One focused platform for earning and tracking.",
      body: "Placeholder for the final product experience and the major visual that best explains how it works.",
    },
    impact: {
      title: "From an idea to a product ready to create value.",
      body: "Impact metric placeholder. Replace this with the verified launch, business, or user outcome when available.",
    },
  },
  {
    slug: "hives",
    pegboardTheme: { board: "#CDD9C5", holes: "#97AA8D" },
    eyebrow: "Bumble · Concept feature",
    title: "Hives",
    description:
      "Placeholder for a concept feature that explores smaller social contexts inside Bumble.",
    metric: "+18%",
    metricLabel: "predicted impact metric placeholder",
    category: "Hives · Bumble concept feature",
    headline: "Designing smaller social contexts inside Bumble.",
    metadata: ["Concept project", "Feature design", "Social"],
    stats: [
      { value: "Concept", label: "Feature exploration" },
      { value: "Bumble", label: "Product context" },
      { value: "[Target metric]", label: "Predicted / target impact", isForecast: true },
    ],
    opportunity: {
      title: "Move from matching toward a shared context.",
      body: "Placeholder for the concept opportunity: how smaller social settings could help people discover and connect with more intention.",
    },
    problem: {
      title: "A match alone does not create momentum.",
      body: "Placeholder for the behavioural gap the concept explores. This project should frame any future outcome as predicted, not observed.",
    },
    decisions: [
      {
        title: "Start with a shared context",
        body: "Placeholder for the concept decision that gives people a clearer reason to participate.",
      },
      {
        title: "Keep discovery lightweight",
        body: "Placeholder for the decision that balances social possibility with a low-pressure experience.",
      },
    ],
    solution: {
      title: "A concept for discovering people through smaller groups.",
      body: "Placeholder for the concept experience and the major product visual that best communicates the direction.",
    },
    impact: {
      title: "A testable direction for deeper engagement.",
      body: "Predicted impact placeholder only. Replace with a clearly labelled target or forecast when the concept is validated.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getOtherProjects(slug: string) {
  return projects.filter((project) => project.slug !== slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  return projects[(currentIndex + 1) % projects.length];
}
