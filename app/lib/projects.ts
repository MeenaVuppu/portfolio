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
  screens?: Array<{ src: string; alt: string; label?: string; staticViewport?: boolean; scrollViewport?: boolean }>;
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
    pegboardTheme: { board: "#FAF7F2", holes: "#C7A2AF" },
    eyebrow: "Muthoot · Product redesign",
    title: "Digital Gold",
    description:
      "Redesigning Digital Gold around clearer investment choices and different saving scenarios.",
    metric: "4.6%",
    metricLabel: "Transaction baseline",
    category: "DIGITAL GOLD · MUTHOOT FINCORP ONE",
    headline: "80K+ entered. Only 4.6% transacted.",
    metadata: [
      "Product Designer · Experience Redesign",
      "Research → Strategy → UX/UI → Prototype",
      "Saving-led investment journeys",
    ],
    stats: [
      { value: "80,554", label: "Entered Digital Gold journey" },
      { value: "10.55%", label: "Reached Buy Now · 8,502 users" },
      { value: "4.60%", label: "Completed transaction · 3,704 users" },
    ],
    storyPins: [
      {
            "eyebrow": "The problem · Transaction completion",
            "title": "The largest gap came before Buy Now.",
            "body": "The existing Digital Gold journey attracted interest, but only 4.6% of journey entries resulted in completed transactions. The funnel showed where users were dropping off, particularly before they initiated a purchase. This led me to examine how the experience communicated digital gold, presented investment choices and guided users towards their first purchase.",
            "footnote": "Original funnel: 80,554 journey entries → 8,502 reached Buy Now → 5,605 proceeded to payment → 3,704 completed transactions."
      },
      {
            "eyebrow": "Talking to real users · Exploratory branch research",
            "title": "Some customers saw a jewellery journey.",
            "body": "Exploratory customer conversations revealed that some customers assumed the jewellery shown could be purchased through EMI. Some treated the calculator as a way to check gold weight or rate for a jewellery purchase. This suggested that the catalogue was shaping expectations before the page had explained Digital Gold as an investment product.",
            "items": [
                  {
                        "value": "Observed interpretation",
                        "label": "Jewellery purchase, rather than the intended Digital Gold investment journey."
                  },
                  {
                        "value": "Insight",
                        "label": "The page needed to explain what customers were saving or buying before asking them to calculate an amount."
                  },
                  {
                        "value": "Design response",
                        "label": "Lead with the saving proposition and explicit monthly, weekly and one-time choices."
                  }
            ]
      },
      {
            "eyebrow": "Design decision · Clear saving actions",
            "title": "Make the next action obvious.",
            "body": "I separated Save Monthly, Save Weekly and Buy Digital Gold into explicit entry points. Customers can choose a regular saving rhythm or a one-time purchase before entering an amount. Clear investment messaging and action labels address the jewellery-EMI assumption and explain how to begin saving in gold.",
            "highlight": "Choose how to save, then decide how much."
      },
      {
            "eyebrow": "Before → after · Landing, top",
            "title": "Give saving its own front door.",
            "body": "The previous experience prioritised balance, gold prices and the calculator. The redesign introduces clearer saving options and entry points, helping customers understand how to start investing.",
            "screens": [
                  {
                        "src": "/dg-evidence/old-landing-screen.png",
                        "alt": "BEFORE",
                        "scrollViewport": true
                  },
                  {
                        "src": "/dg-evidence/new-user.png",
                        "alt": "AFTER",
                        "scrollViewport": true
                  }
            ],
            "variant": "visual",
            "footnote": "Compare the initial entry hierarchy: the existing experience and the latest new-user design."
      },
      {
            "eyebrow": "Design decision · User scenarios",
            "title": "One product. Three different starting points.",
            "body": "New users need to understand Digital Gold and choose how to start. Returning users without a SIP need visibility into their holdings and a clear route into regular saving. Returning SIP users need to review progress and continue investing. I designed these three scenarios around those different information needs and next actions.",
            "items": [
                  { "value": "New user", "label": "Explain the product, saving choices and how gold can accumulate." },
                  { "value": "Returning user without SIP", "label": "Surface current holdings and encourage a regular saving habit." },
                  { "value": "Returning SIP user", "label": "Prioritise savings progress and continued investment." }
            ]
      },
      {
            "eyebrow": "Design decision · From intention to setup",
            "title": "Make recurring saving a concrete action.",
            "body": "A saving choice needs a clear next step. The recurring setup exposes amount, monthly or weekly frequency and investment date before payment. One-time buying remains a separate choice rather than being removed in favour of recurring saving.",
            "screens": [
                  {
                        "src": "/dg-evidence/recurring.png",
                        "alt": "AFTER — RECURRING SAVING"
                  }
            ],
            "variant": "visual"
      },
      {
            "eyebrow": "Returning Users",
            "title": "Make progress the reason to keep saving.",
            "body": "For returning users without an active SIP, visible holdings and saving entry points encourage starting regular savings. For users with an active SIP, the design surfaces existing savings and progress, with Invest More encouraging continued investment.",
            "screens": [
                  { "src": "/dg-evidence/returning-sip.png", "alt": "RETURNING SIP USER" }
            ],
            "footnote": "Prioritising progress and continued investment for users who already save regularly.",
            "variant": "visual"
      },
      {
            "eyebrow": "Measuring success",
            "title": "Measuring whether clearer journeys lead to more investments.",
            "body": "I'd evaluate whether clearer product messaging and saving actions help more users move from interest to purchase and recurring saving. The funnel figures describe baseline performance; the targets below are proposed improvements, not achieved results.",
            "items": [
                  { "value": "Transaction completion", "label": "Baseline: 4.6% · Illustrative target: 6–7%" },
                  { "value": "Buy Now engagement", "label": "Target: Increase relative to existing baseline" },
                  { "value": "Recurring saving setup completion", "label": "Target: Establish baseline and improve after launch" }
            ],
            "highlight": "Good investment experiences don't just encourage the first purchase. They make it easier to understand, start and keep saving.",
            "variant": "wide"
      }
],
    opportunity: {
      title: "The largest gap came before Buy Now.",
      body: "In 30 days, 80,554 entered, 8,502 reached Buy Now, 5,605 proceeded to payment and 3,704 completed. The largest drop-off occurred before customers initiated a purchase.",
    },
    problem: {
      title: "Some customers interpreted a jewellery-purchase journey.",
      body: "Exploratory customer conversations revealed that some customers assumed the displayed jewellery could be purchased through EMI. This informed clearer investment messaging and saving actions.",
    },
    decisions: [
      { title: "Make the next action obvious.", body: "Separate Save Monthly, Save Weekly and Buy Digital Gold so customers can choose how to begin." },
      { title: "One product. Three different starting points.", body: "New users, returning users without SIP and returning SIP users need different information and next actions." },
    ],
    solution: {
      title: "Make the saving and buying routes explicit.",
      body: "The current screens distinguish monthly saving, weekly saving and one-time buying. The three user scenarios connect product understanding, holdings and savings progress to the appropriate next action.",
      highlight: "Lead with the saving intention.",
    },
    impact: {
      title: "Measuring whether clearer journeys lead to more investments.",
      body: "Transaction completion baseline: 4.6%; illustrative target: 6–7%. Increase Buy Now engagement relative to its baseline and establish a recurring-saving setup baseline after launch. These are proposed targets, not achieved results.",
      sectionLabel: "05 — Expected measurement",
      showMetric: false,
    },
    caseStudyMetric: "4.6%",
    caseStudyMetricLabel: "Transaction completion baseline",
  },
  {
    slug: "vyapar-plus",
    pegboardTheme: { board: "#FAF7F2", holes: "#C7A2AF" },
    eyebrow: "Muthoot · Kirana earning platform",
    title: "Vyapar Plus",
    description:
      "I designed Vyapar Plus from 0→1 — simplifying complex financial services into an accessible platform for kirana owners to onboard, earn and serve customers from their stores.",
    metric: "0 → 1",
    metricLabel: "Sole Product Designer",
    category: "VYAPAR PLUS · MUTHOOT FINANCE",
    headline: "Turning neighbourhood kiranas into financial-service distribution points.",
    metadata: ["Sole Product Designer", "0→1", "Shipped Sep 2026"],
    stats: [{ value: "2,500+", label: "Merchants onboarded" }, { value: "1,000+", label: "Loan leads submitted" }, { value: "600+", label: "Loan leads converted" }],
    snapshotFootnote: "First two weeks · Reported business results",
    storyPins: [
      {
            "eyebrow": "The opportunity",
            "title": "Turn trusted neighbourhood kiranas into financial-service touchpoints.",
            "body": "Kiranas already have local reach and customer trust. The opportunity was to formalize that network into a digital distribution channel — helping Muthoot extend financial services into semi-urban and rural communities while creating an additional income stream for merchants.",
            "items": [
                  {
                        "value": "10,000",
                        "label": "Kiranas onboarded · 3-month target"
                  },
                  {
                        "value": "80%",
                        "label": "Monthly active agents · Target"
                  },
                  {
                        "value": "₹10K+",
                        "label": "Avg. revenue / kirana / month · Target"
                  }
            ],
            "footnote": "BRD success metrics · Business targets, not achieved results."
      },
      {
            "eyebrow": "My role · Sole Product Designer",
            "title": "One designer across the ecosystem.",
            "body": "As sole Product Designer on this 0→1 Android / B2B fintech product, I connected discovery, merchant activity and field execution. The system spans Website — Discover; Merchant App — Join, serve customers and earn; Saathi — Assist and physical verification.",
            "items": [
                  {
                        "value": "Merchant experience",
                        "label": "Onboarding · Dashboard · Transactions · Wallet · Earnings · AEPS · Leads · Payouts"
                  },
                  {
                        "value": "Saathi / BDE workflow",
                        "label": "Lead visibility · Assignment · Verification · Fulfilment"
                  }
            ]
      },
      {
            "eyebrow": "Early product evidence",
            "title": "Acquisition was only the start.",
            "body": "The Sep 1–11 digital onboarding cohort showed a gap between starting and completing digital onboarding. It points to activation as a follow-up priority; it does not identify which verification step caused the loss or establish later product usage.",
            "items": [
                  { "value": "2,282", "label": "Started digital onboarding" },
                  { "value": "819", "label": "Completed digital onboarding" },
                  { "value": "35.9%", "label": "End-to-end completion" }
            ],
            "footnote": "Sep 1–11, 2026 · Digital onboarding cohort"
      },
      {
            "eyebrow": "DESIGNING AROUND API CONSTRAINTS",
            "title": "Going beyond what the API provides.",
            "body": "The third-party integration supported retrieving existing beneficiaries, but that alone didn't give merchants a complete picture of their past transfers. I proposed bringing beneficiary-specific transaction history into the same experience, making it easier to review previous activity without navigating between separate flows.",
            "highlight": "Design for the user's context, not just the API's capabilities."
      },
      {
            "eyebrow": "The dashboard",
            "title": "From app home to business home.",
            "body": "Transactions, earnings, payouts and leads risked becoming separate destinations that merchants had to reconcile. I brought them into one dashboard so the entry point reflected the business, not just a service catalogue. The screen shows this architecture; its effect on task completion was not measured here.",
            "footnote": "What happened? What did I earn? What needs my attention? What happened to my leads?",
            "screens": [
                  {
                        "src": "/vp-android/dashboard.png",
                        "alt": "Supplied Vyapar Plus dashboard with earnings, transactions, payouts and leads"
                  }
            ],
            "variant": "visual"
      },
      {
            "eyebrow": "A connected money story",
            "title": "What did I do—and what did I earn?",
            "body": "A merchant should not have to reconstruct a transaction and its associated earnings across disconnected features. I treated transaction history, wallet movement and commission/earnings as connected parts of the business experience. The screens show that relationship without claiming every transaction earns commission.",
            "flow": [
                  "Activity",
                  "Money movement",
                  "Earnings"
            ],
            "screens": [
                  {
                        "src": "/vp-android/transaction-history.png",
                        "alt": "Kirana Transaction History with filters, transaction statuses, expanded details and Download Full Report"
                  },
                  {
                        "src": "/vp-android/wallet-ledger.png",
                        "alt": "Supplied Vyapar Plus Wallet / Ledger"
                  },
                  {
                        "src": "/vp-android/earnings-breakdown.png",
                        "alt": "Supplied Earnings Summary and earnings by service"
                  }
            ],
            "visual": "Transaction history · Wallet / ledger · Earnings breakdown",
            "variant": "visual"
      },
      {
            "eyebrow": "The product expands",
            "title": "The bigger opportunity was already in the store.",
            "body": "The business model used kiranas’ existing customer relationships to generate financial-product opportunities. Merchants could submit a lead rather than fulfil the entire journey themselves. That division of responsibility required a downstream field workflow.",
            "highlight": "This turned the merchant app from a transaction tool into an acquisition channel."
      },
      {
            "eyebrow": "Merchant → BDE · From referral to conversion",
            "title": "Submission wasn’t the finish line.",
            "body": "Lead submission needed an operational next step. I connected the merchant confirmation with BDE work visibility and verification so the workflow continued beyond the merchant app. The screens show those interfaces, not an independently measured handoff improvement.",
            "flow": [
                  "Lead submitted",
                  "Assigned",
                  "Verified",
                  "Converted"
            ],
            "screens": [
                  {
                        "src": "/vp-android/lead-submitted.png",
                        "alt": "Merchant confirmation of gold-loan lead submission"
                  },
                  {
                        "src": "/vp-android/bde-assigned.png",
                        "alt": "Supplied BDE Leads Assigned dashboard showing retailer verification work"
                  },
                  {
                        "src": "/vp-android/bde-verification.png",
                        "alt": "Supplied BDE Physical Verification directory"
                  }
            ],
            "visual": "Merchant submission · BDE work queue · Physical verification",
            "footnote": "Screens show submission and field execution; conversion is evidenced by the early results below.",
            "variant": "visual"
      },
      {
            "eyebrow": "PRODUCT ADOPTION · OCTOBER 2026",
            "title": "From 0→1 launch to growing product adoption",
            "body": "As the sole Product Designer, I designed Vyapar Plus's core journeys across onboarding, financial services, and earnings. By October 2026, the platform recorded over 17,000 monthly active users, reflecting growing adoption of the product.",
            "items": [
                  {
                        "value": "17K+",
                        "label": "Monthly active users · October 1–23, 2026 (month-to-date)"
                  },
                  {
                        "value": "+164%",
                        "label": "Increase in October month-to-date MAU compared with September 2026's full-month MAU"
                  }
            ],
            "footnote": "Last 30 days: 18,460 active users · 16,629 new app activations (not completed merchant onboardings). First two weeks: 2,500+ kirana merchants onboarded · 1,000+ loan leads submitted · 600+ Gold Loan + VM loan leads converted. Adoption metrics do not isolate design's contribution to growth."
      },
      {
            "eyebrow": "THE DESIGN DECISIONS",
            "title": "Designing a product, not a collection of screens.",
            "body": "As the sole Product Designer for Vyapar Plus, I worked across onboarding, financial transactions, earnings, and lead generation. Each feature had its own requirements, but the challenge was making them feel like one connected experience. I focused on simplifying complex journeys, establishing consistent interaction patterns, and helping merchants understand what they could do next.",
            "highlight": "Consistency wasn't just visual. It was about making different services feel like one product."
      },
      {
            "eyebrow": "WHAT I LEARNED",
            "title": "Ownership taught me when to simplify, question, and compromise.",
            "flow": [
                  "Merchant activity",
                  "Financial opportunity",
                  "Field execution",
                  "Conversion"
            ],
            "body": "Designing Vyapar Plus end-to-end meant balancing merchant needs, business priorities, technical constraints, and delivery timelines. Not every decision had an obvious answer. I learned to question requirements, explain my reasoning to stakeholders, and make practical trade-offs without losing sight of the user experience. My biggest learning: Good design isn't about having complete freedom. It's about making thoughtful decisions within real constraints."
      }
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
    slug: "fixed-deposit",
    pegboardTheme: { board: "#FAF7F2", holes: "#C7A2AF" },
    eyebrow: "Muthoot · Investment redesign",
    title: "Fixed Deposit",
    description: "Simplifying scheme selection, surfacing returns earlier, and reducing steps between exploring an FD and starting an investment.",
    metric: "5.6%",
    metricLabel: "Partner-selection baseline",
    category: "FIXED DEPOSIT · INVESTMENT EXPERIENCE",
    headline: "Making Fixed Deposit investments easier to start",
    metadata: ["Product Designer"],
    snapshotLabel: "Historical CleverTap funnel · 01 Aug – 01 Sept",
    snapshotCopy: "Simplifying scheme selection, surfacing returns earlier, and reducing steps between exploring an FD and starting an investment.",
    snapshotFootnote: "Further down the historical funnel: 91 KYC starts · 5 proceeded to pay.",
    stats: [
      { value: "94.4%", label: "Drop-off: 25,275 FD page views → 1,416 Mahindra partner selections (5.6% progressed)" },
      { value: "80.9%", label: "Drop-off: 1,416 partner selections → 271 ROI / Book Now clicks (19.1% progressed)" },
    ],
    storyPins: [
      {
            "eyebrow": "THE OPPORTUNITY",
            "title": "Confusing investment choices were creating friction before users could begin investing.",
            "body": "Historical funnel data showed that only 271 of 25,275 FD page visitors proceeded to Book Now.",
            "footnote": "In exploratory research, 5 of 8 participants reported confusion in the existing investment-selection experience. This helped identify a usability problem worth addressing."
      },
      {
        eyebrow: "THE DESIGN DECISION",
        title: "Review the scheme and returns, then continue.",
        body: "I simplified scheme selection, brought interest rates and projected returns together, and reduced navigation between choosing an FD and starting an investment.",
        screens: [
          { src: "/fd-iphone/before-schemes.png", alt: "Before: Scheme and tenure selection leading to a separate investment-detail screen", label: "BEFORE · CHOOSE, THEN ENTER DETAILS" },
          { src: "/fd-iphone/after-scheme.png", alt: "After: Scheme summary, amount and returns with a clear Continue action", label: "AFTER · REVIEW & CONTINUE" },
        ],
        variant: "visual",
      },
      {
        eyebrow: "02 — SIMPLIFIED SELECTION",
        title: "Make rate and tenure choices easier to review.",
        body: "The old amount step sat separately from scheme selection. The redesigned selection sheet groups interest rates and tenure choices in a focused view.",
        screens: [
          { src: "/fd-iphone/investment-details.png", alt: "Before: A separate investment amount and returns step", label: "BEFORE · SEPARATE AMOUNT STEP" },
          { src: "/fd-iphone/after-tenure.png", alt: "After: Interest-rate selection sheet with clear tenure choices", label: "AFTER · RATE & TENURE SHEET" },
        ],
        variant: "visual",
      },
      {
            "eyebrow": "EXPECTED IMPACT · PROJECTED",
            "title": "Investment Initiation Rate",
            "body": "Exploratory research identified confusion in the existing scheme-selection experience. By simplifying tenure selection, surfacing returns earlier, and reducing navigation, the redesign targets a higher rate of investment initiation.",
            "items": [
                  {
                        "value": "271",
                        "label": "Existing baseline · investment initiations · 1.07% conversion."
                  },
                  {
                        "value": "500+",
                        "label": "Projected (Post-redesign) · investment initiations · ~2.0% conversion."
                  }
            ],
            "highlight": "~85% projected relative uplift",
            "footnote": "Assumes comparable traffic of 25,275 FD page views. Projected target; not measured production results.",
            "variant": "wide"
      }
],
    opportunity: {
      title: "Make fixed deposits easier to understand.",
      body: "Placeholder content for the product opportunity and the customer need behind the experience.",
    },
    problem: {
      title: "A savings decision should feel clear and dependable.",
      body: "Placeholder content for the key product challenge that shaped the project direction.",
    },
    decisions: [
      {
        title: "Clarify the decision",
        body: "Placeholder content for the first major product decision.",
      },
      {
        title: "Support confident completion",
        body: "Placeholder content for the second major product decision.",
      },
    ],
    solution: {
      title: "A clearer fixed-deposit experience.",
      body: "Placeholder content for the final approach and product experience.",
    },
    impact: {
      title: "Outcome to be updated.",
      body: "Placeholder content for the project outcome and future success measures.",
    },
  },
  {
    slug: "hives",
    pegboardTheme: { board: "#FAF7F2", holes: "#C7A2AF" },
    eyebrow: "Bumble · Concept feature",
    title: "Hives",
    description:
      "Placeholder for a concept feature that explores smaller social contexts inside Bumble.",
    metric: "Concept",
    metricLabel: "Not validated",
    category: "Hives · Bumble concept feature",
    headline: "Exploring smaller social contexts inside Bumble.",
    metadata: ["Concept project", "Social discovery", "Not validated"],
    stats: [
      { value: "Concept", label: "Exploration, not a shipped outcome" },
      { value: "Bumble", label: "Product context" },
      { value: "Unvalidated", label: "No measured impact available" },
    ],
    opportunity: {
      title: "Could a smaller group make discovery more intentional?",
      body: "Hives explores smaller social contexts inside Bumble. The concept brief proposes shared context as a reason to connect; it does not document a measured user problem or research finding.",
    },
    problem: {
      title: "The starting point is a hypothesis.",
      body: "The premise is that matching alone may not provide enough context to start a connection. No interviews, behavioural data or user testing are documented to confirm that premise.",
    },
    decisions: [
      { title: "Explore shared context", body: "Use smaller groups as the concept direction for helping people find a reason to connect. This is a proposed response to the premise, not a validated decision." },
      { title: "Keep discovery low-pressure", body: "The brief favours lightweight participation. The trade-off between giving people context and adding effort still needs to be explored and tested." },
    ],
    solution: {
      title: "A direction, not a demonstrated product outcome.",
      body: "The documented scope is a concept for discovering people through smaller groups. No supporting product screens or tested prototype are available in this repository to substantiate a completed implementation.",
    },
    impact: {
      title: "Validate the premise before claiming impact.",
      body: "Next, establish whether shared context addresses a real discovery problem, then test whether a smaller-group concept helps. No measured result or defensible numerical forecast is documented.",
      sectionLabel: "05 — Concept validation",
      showMetric: false,
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
