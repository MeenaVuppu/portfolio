export type ProjectStat = {
  value: string;
  label: string;
  isForecast?: boolean;
};

export type ProjectDecision = {
  title: string;
  body: string;
};

export type ProjectDetailNote = {
  eyebrow: string;
  title: string;
  body?: string;
  items?: Array<{ value: string; label: string }>;
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
  caseStudyMetric?: string;
  caseStudyMetricLabel?: string;
  category: string;
  headline: string;
  metadata: string[];
  stats: ProjectStat[];
  detailNotes?: ProjectDetailNote[];
  opportunity: { title: string; body: string };
  problem: { title: string; body: string };
  decisions: ProjectDecision[];
  solution: { title: string; body: string };
  impact: { title: string; body: string; sectionLabel?: string; showMetric?: boolean };
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
    category: "DIGITAL GOLD · MUTHOOT FINCORP ONE",
    headline: "80K+ entered. Only 4.6% transacted.",
    metadata: [
      "Sole Product Designer",
      "Research → Strategy → UX/UI → Prototype",
      "Pre-launch · Awaiting validation",
    ],
    stats: [
      { value: "80,554", label: "Entered Digital Gold journey" },
      { value: "10.55%", label: "Reached Buy Now · 8,502 users" },
      { value: "4.60%", label: "Completed transaction · 3,704 users" },
    ],
    detailNotes: [
      {
        eyebrow: "30-day funnel",
        title: "Where progression narrowed",
        items: [
          { value: "80,554", label: "Entered" },
          { value: "8,502 · 10.55%", label: "Reached Buy Now" },
          { value: "5,605 · 6.96%", label: "Proceeded to payment" },
          { value: "3,704 · 4.60%", label: "Completed" },
        ],
      },
      {
        eyebrow: "V1 → V2 → V3",
        title: "The direction evolved",
        body: "Explain Digital Gold → make recurring saving easy → connect the habit to a tangible gold goal.",
      },
      {
        eyebrow: "Ownership + validation",
        title: "One design owner, multiple perspectives",
        body: "I owned strategy, flows, interaction, UI and prototyping. Marketing and Growth shaped the inputs; goal motivation, comprehension and unassisted completion still need validation.",
      },
    ],
    opportunity: {
      title: "Interest wasn’t the problem. Progression was.",
      body: "In 30 days, 80,554 users entered the journey. 8,502 reached Buy Now, 5,605 proceeded to payment and 3,704 completed a transaction. The largest loss happened before Buy Now; the data showed where users left, not why.",
    },
    problem: {
      title: "The acquisition message and product told different stories.",
      body: "One branch visit and 3 exploratory customer conversations exposed an expectation gap. Saving-led banners brought users in, but the product mixed investment and jewellery-purchase journeys. This was directional research, not statistically representative validation.",
    },
    decisions: [
      {
        title: "Move from education to action",
        body: "V1 explained how small investments accumulate into gold. With Marketing, V2 simplified jargon and brought recurring saving forward: Buy once, Weekly or Monthly.",
      },
      {
        title: "Give saving a tangible purpose",
        body: "With Growth, V3 adapted goal-based saving to Muthoot: repeated contributions toward a gold coin or jewellery outcome redeemable in its ecosystem.",
      },
    ],
    solution: {
      title: "From buying gold once to building a saving habit.",
      body: "The final direction connects recurring contributions to a fixed, tangible gold goal. It aims to make larger purchases feel attainable while creating potential for repeat saving and eventual redemption—outcomes still to be validated.",
    },
    impact: {
      title: "Prototype first. Engineering second.",
      body: "The redesign is pre-launch. Next, the prototype will be validated with branch users. Success metrics to measure after launch: first-payment conversion, recurring-saving adoption, mandate creation, repeat-saving rate, journey drop-offs and gold or jewellery redemption.",
      sectionLabel: "05 — Validation & measurement",
      showMetric: false,
    },
    caseStudyMetric: "4.6%",
    caseStudyMetricLabel: "Current completion · redesign pre-launch",
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
