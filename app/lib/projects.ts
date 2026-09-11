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

export type ProjectStoryPin = {
  eyebrow: string;
  title: string;
  body?: string;
  items?: Array<{ value: string; label: string }>;
  flow?: string[];
  highlight?: string;
  footnote?: string;
  visual?: string;
  variant?: "wide" | "accent" | "visual";
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
  snapshotLabel?: string;
  snapshotCopy?: string;
  snapshotFootnote?: string;
  products?: string[];
  detailNotes?: ProjectDetailNote[];
  storyPins?: ProjectStoryPin[];
  opportunity: { title: string; body: string; highlight?: string };
  problem: { title: string; body: string; highlight?: string };
  decisions: ProjectDecision[];
  solution: { title: string; body: string; highlight?: string };
  impact: { title: string; body: string; sectionLabel?: string; showMetric?: boolean };
};

export const projects: Project[] = [
  {
    slug: "digital-gold",
    pegboardTheme: { board: "#FAEDB8", holes: "#CDBD78" },
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
      highlight: "89% of journey entries did not reach Buy Now.",
    },
    problem: {
      title: "The acquisition message and product told different stories.",
      body: "One branch visit and 3 exploratory customer conversations exposed an expectation gap. Saving-led banners brought users in, but the product mixed investment and jewellery-purchase journeys. This was directional research, not statistically representative validation.",
      highlight: "The acquisition message and the in-product experience were telling two different stories.",
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
      highlight: "Understand → Start saving → Build a habit → Reach a tangible gold goal.",
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
      "I designed Vyapar Plus from 0→1 — simplifying complex financial services into an accessible platform for kirana owners to onboard, earn and serve customers from their stores.",
    metric: "0 → 1",
    metricLabel: "Sole Product Designer · impact metric placeholder",
    category: "VYAPAR PLUS · MUTHOOT FINANCE",
    headline: "Turning neighbourhood kiranas into Muthoot financial-service points.",
    metadata: ["Sole Product Designer · 0→1 · Shipped Sep 2026"],
    stats: [
      { value: "819", label: "Completed digital onboarding" },
      { value: "2,282", label: "Started onboarding" },
      { value: "35.9%", label: "End-to-end completion" },
    ],
    snapshotFootnote: "Sep 1–11, 2026 · Early post-launch data",
    storyPins: [
      {
        eyebrow: "The opportunity",
        title: "What if every kirana could extend Muthoot's reach?",
        body: "Customers outside major urban centres face friction accessing everyday financial services, while kirana owners need more ways to earn. Vyapar Plus brings payments, transfers, AEPS, travel and referrals into one local platform.",
        items: [
          { value: "10,000 agents", label: "Target in 3 months" },
          { value: "<10 min", label: "Target onboarding" },
          { value: "₹10K+", label: "Target additional monthly income" },
        ],
        footnote: "Launch targets, not achieved outcomes.",
        variant: "wide",
      },
      {
        eyebrow: "My role",
        title: "One designer across an entire new ecosystem.",
        body: "As the sole Product Designer, I owned the experience from concept to launch across three connected products.",
        items: [
          { value: "Merchant App", label: "Onboard · Serve · Transact · Earn" },
          { value: "Saathi App", label: "Acquire · Assist · Verify" },
          { value: "Website", label: "Discover · Understand · Join" },
        ],
        highlight: "Product strategy · UX/UI · Prototyping · Implementation",
      },
      {
        eyebrow: "The design challenge",
        title: "The system was complex. The merchant experience couldn't be.",
        body: "Each service required a different mix of identity, business, bank and compliance verification across multiple third-party systems.",
        highlight: "Complex system underneath → simple merchant journey above it.",
        variant: "accent",
      },
      {
        eyebrow: "Designing the core journey",
        title: "Before a kirana can earn, we have to get them successfully onboarded.",
        body: "Instead of one long KYC flow, onboarding asks for information only when it becomes relevant to the services selected.",
        flow: ["Register", "Choose services", "Verify identity", "Verify business", "Add bank", "Sign", "Start earning"],
        highlight: "The journey only asks for verification relevant to the services a merchant chooses.",
        visual: "Visual 01 · Onboarding journey",
        variant: "visual",
      },
      {
        eyebrow: "Designing around the system",
        title: "APIs determined what was possible. UX determined how it felt.",
        body: "Udyam or GST data prefills details the system already knows. The experience also accounts for failed verification, missing records, incorrect bank details and alternative routes.",
        highlight: "Ask merchants for less when the system already knows more.",
      },
      {
        eyebrow: "Beyond one app",
        title: "The merchant journey doesn't end on the merchant's phone.",
        items: [
          { value: "Website", label: "Discover" },
          { value: "Merchant App", label: "Join + Verify" },
          { value: "Saathi", label: "Assist + Physical verification" },
          { value: "Merchant App", label: "Serve customers + Earn" },
        ],
        highlight: "One business journey. Three connected product experiences.",
        visual: "Visual 02 · Connected ecosystem",
        variant: "visual",
      },
      {
        eyebrow: "What comes next",
        title: "Launch gave us the baseline. Now we learn from real usage.",
        body: "Merchant conversations and funnel behaviour will reveal where merchants drop, what creates friction, which services get adopted and what drives repeat transactions.",
        highlight: "Those insights will shape the next iteration as Bills, DMT and more services enter the platform.",
      },
      {
        eyebrow: "From 0→1 to real merchants",
        title: "From a business idea to a working kirana fintech ecosystem.",
        body: "I translated financial services, compliance requirements and operational workflows into a connected product ecosystem for neighbourhood merchants.",
        highlight: "0→1 → Shipped → serving real neighbourhood merchants.",
        variant: "wide",
      },
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
