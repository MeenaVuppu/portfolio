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
  screens?: Array<{ src: string; alt: string }>;
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
    storyPins: [
      {
            "eyebrow": "The problem · Existing 30-day funnel",
            "title": "Interest wasn’t the problem. Progression was.",
            "body": "80,554 entered the journey; 8,502 reached Buy Now, 5,605 proceeded to payment and 3,704 completed. The largest loss happened before Buy Now. The funnel showed where users left, not why.",
            "highlight": "4.60% completed a transaction.",
            "footnote": "Old-journey baseline, not redesign impact."
      },
      {
            "eyebrow": "Talking to real users · Exploratory branch research",
            "title": "The promise of saving met a different product story.",
            "body": "I visited one branch and spoke with three customers. The existing research account describes an expectation gap: saving-led banners brought people in, while the product mixed investment and jewellery-purchase journeys.",
            "items": [
                  {
                        "value": "Observation",
                        "label": "A mismatch between the acquisition message and the experience."
                  },
                  {
                        "value": "Interpretation",
                        "label": "A saving intention needed a clearer path inside the product."
                  },
                  {
                        "value": "Design response",
                        "label": "Bring recurring saving forward, while retaining one-time buying."
                  }
            ],
            "footnote": "Directional evidence from the existing project account. Interview transcripts and verbatim quotes are not available in the repository; these conversations do not establish prevalence."
      },
      {
            "eyebrow": "Research → design principle",
            "title": "Make the first choice match the reason for arriving.",
            "body": "The recorded expectation gap informed a saving-led entry point. Monthly, weekly and one-time routes make the intended action explicit instead of asking users to interpret SIP terminology first.",
            "highlight": "Lead with the saving intention.",
            "footnote": "Design hypothesis: clearer choices may help users find the relevant path. Comprehension and completion still need testing."
      },
      {
            "eyebrow": "Before → after · Landing, top",
            "title": "Give saving its own front door.",
            "body": "Before, balance, price, a chart and the purchase form lead the experience. After, the saving proposition leads into Save Monthly, Save Weekly and Buy Gold, followed by a short explanation of the process.",
            "screens": [
                  {
                        "src": "/dg-evidence/before-top.png",
                        "alt": "BEFORE — TOP"
                  },
                  {
                        "src": "/dg-evidence/after-top.png",
                        "alt": "AFTER — TOP"
                  }
            ],
            "variant": "visual",
            "footnote": "Consecutive landing captures continue in the next pin. Scroll within a phone to inspect the full section."
      },
      {
            "eyebrow": "Before → after · Landing, continued",
            "title": "Connect the habit to a tangible gold outcome.",
            "body": "The old landing continues through jewellery shopping, FAQs and articles. The redesign explains accumulation and then connects gold savings to coins and jewellery. This supports the goal-saving direction recorded with Growth; it does not demonstrate a complete goal-setting flow.",
            "screens": [
                  {
                        "src": "/dg-evidence/before-continued.png",
                        "alt": "BEFORE — CONTINUED"
                  },
                  {
                        "src": "/dg-evidence/after-continued.png",
                        "alt": "AFTER — CONTINUED"
                  }
            ],
            "variant": "visual",
            "footnote": "Each image starts exactly where its top section ends. Illustrative growth values and trust claims are supplied UI copy, not validated portfolio results."
      },
      {
            "eyebrow": "Design decision · From intention to setup",
            "title": "Make recurring saving a concrete action.",
            "body": "With Marketing, the direction moved from explaining gold to making recurring saving explicit. The supplied setup screen exposes amount, monthly or weekly frequency, and the investment date before payment.",
            "screens": [
                  {
                        "src": "/dg-evidence/recurring.png",
                        "alt": "AFTER — RECURRING SAVING"
                  }
            ],
            "variant": "visual",
            "footnote": "This screen demonstrates the design response. It does not prove recurring-saving adoption or mandate completion."
      },
      {
            "eyebrow": "V1 → V2 → V3",
            "title": "The direction evolved through the work.",
            "items": [
                  {
                        "value": "V1 · Explain",
                        "label": "Show how small investments accumulate into gold."
                  },
                  {
                        "value": "V2 · Act",
                        "label": "With Marketing, simplify jargon and foreground recurring saving."
                  },
                  {
                        "value": "V3 · Purpose",
                        "label": "With Growth, connect repeated contributions to a tangible gold goal."
                  }
            ],
            "footnote": "Evolution documented in the existing case study; the supplied files do not establish a dated version history."
      },
      {
            "eyebrow": "Ownership",
            "title": "One design owner, multiple perspectives.",
            "body": "As sole Product Designer, I owned strategy, flows, interaction, UI and prototyping. Branch conversations informed the problem; Marketing and Growth shaped the recurring-saving and goal directions."
      },
      {
            "eyebrow": "Learning · What the evidence supports",
            "title": "The funnel located the gap. Conversations gave it context.",
            "body": "The baseline establishes a progression problem. The exploratory conversations suggest an expectation mismatch. The redesign translates that interpretation into saving-led choices and recurring setup—not a proven conversion improvement.",
            "highlight": "Evidence → interpretation → a testable design response."
      },
      {
            "eyebrow": "Validation & measurement · Pre-launch",
            "title": "Prototype first. Engineering second.",
            "body": "Validate the prototype with branch users: do they understand the choices, see a meaningful goal and complete setup without assistance? After launch, measure first-payment conversion, recurring-saving adoption, mandate creation, repeat saving, journey drop-offs and gold or jewellery redemption.",
            "footnote": "Awaiting validation. No measured redesign impact is available.",
            "variant": "wide"
      }
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
    pegboardTheme: { board: "#FAF7F2", holes: "#C7A2AF" },
    eyebrow: "Muthoot · Kirana earning platform",
    title: "Vyapar Plus",
    description:
      "I designed Vyapar Plus from 0→1 — simplifying complex financial services into an accessible platform for kirana owners to onboard, earn and serve customers from their stores.",
    metric: "0 → 1",
    metricLabel: "Sole Product Designer · impact metric placeholder",
    category: "VYAPAR PLUS · MUTHOOT FINANCE",
    headline: "Turning neighbourhood kiranas into financial-service distribution points.",
    metadata: ["Sole Product Designer", "0→1", "Shipped Sep 2026"],
    stats: [{ value: "819", label: "Completed digital onboarding" }, { value: "2,282", label: "Started onboarding" }, { value: "35.9%", label: "End-to-end completion" }],
    snapshotFootnote: "Sep 1–11, 2026 · Early post-launch data",
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
            "body": "I worked across the merchant experience and the operational journey that takes merchant-generated opportunities toward conversion.",
            "items": [
                  {
                        "value": "Merchant experience",
                        "label": "Onboarding · Dashboard · Transactions · Wallet · Earnings · AEPS · Leads · Payouts"
                  },
                  {
                        "value": "Operational / BDE experience",
                        "label": "Lead visibility · Assignment · Verification · Fulfilment"
                  }
            ]
      },
      {
            "eyebrow": "Early product evidence",
            "title": "Acquisition was only the start.",
            "body": "The early funnel showed that acquisition alone wasn’t enough. Getting merchants through onboarding and into meaningful product usage was the next problem to solve."
      },
      {
            "eyebrow": "Onboarding · Designing around the system",
            "title": "Ask for less when the system knows more.",
            "body": "Udyam or GST data could prefill information already available to the system. The journey also had to handle failed verification, missing records, incorrect bank details and alternate routes.",
            "highlight": "Reduce merchant effort without hiding system complexity."
      },
      {
            "eyebrow": "The dashboard",
            "title": "From app home to business home.",
            "body": "Once onboarded, merchants needed more than a catalogue of services. I brought transactions, earnings, payouts and leads closer together to make their business understandable.",
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
            "title": "A transaction isn’t the end of the story.",
            "body": "Completing a transaction is only one step. Merchants also need to understand where the money went and what they earned.",
            "flow": [
                  "Activity",
                  "Money movement",
                  "Earnings"
            ],
            "screens": [
                  {
                        "src": "/vp-android/transaction-history.png",
                        "alt": "Supplied customer Transaction History within Beneficiary Details"
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
            "body": "Kirana owners already had trusted customer relationships. Instead of fulfilling an entire financial-product journey, merchants could identify an opportunity and submit the customer as a lead.",
            "highlight": "This turned the merchant app from a transaction tool into an acquisition channel."
      },
      {
            "eyebrow": "Merchant → BDE · From referral to conversion",
            "title": "Submission wasn’t the finish line.",
            "body": "Submitted opportunities moved into the BDE workflow for follow-up and verification, connecting merchant acquisition with field execution.",
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
            "eyebrow": "Actual early results",
            "title": "First two weeks",
            "items": [
                  {
                        "value": "2,500+",
                        "label": "Kirana merchants onboarded"
                  },
                  {
                        "value": "1,000+",
                        "label": "Loan leads submitted"
                  },
                  {
                        "value": "600+",
                        "label": "Gold Loan + VM loan leads converted"
                  }
            ]
      },
      {
            "eyebrow": "Product decision / reflection",
            "title": "Designing for the business, not just the feature.",
            "body": "An early dashboard direction brought transactions, earnings, payouts and leads into one business view. Initially challenged, the direction became clearer as the product evolved.",
            "highlight": "A merchant shouldn’t have to reconstruct their business from separate features."
      },
      {
            "eyebrow": "The bigger picture",
            "title": "What started as an app became a distribution workflow.",
            "flow": [
                  "Merchant activity",
                  "Financial opportunity",
                  "Field execution",
                  "Conversion"
            ],
            "body": "The product connected merchant activity with downstream execution, turning kirana relationships into a measurable financial-services channel."
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
    description: "Redesigning Fixed Deposits around informed investment decisions.",
    metric: "5.6%",
    metricLabel: "Mahindra selection baseline",
    category: "FIXED DEPOSIT · INVESTMENT EXPERIENCE",
    headline: "Redesigning Fixed Deposits around informed investment decisions.",
    metadata: ["Product Designer", "Under review · Not yet shipped", "Measurement planned post-launch"],
    stats: [
      { value: "25,275", label: "Reached the FD experience" },
      { value: "5.6%", label: "Selected Mahindra Finance" },
      { value: "19.1%", label: "Of those users clicked Book Now" },
    ],
    storyPins: [
      {
            "eyebrow": "The problem",
            "title": "Commitment came before confidence.",
            "body": "The old selection screen offered multiple rate cards with Book Now actions. Investment amount, maturity value and gains appeared in a later step.",
            "highlight": "5.6% selected Mahindra Finance.",
            "footnote": "Existing funnel baseline. This identifies a progression gap; it does not establish why users left."
      },
      {
            "eyebrow": "Design direction",
            "title": "Make the investment decision understandable before commitment.",
            "body": "Bring the selected scheme, investment amount and expected returns into one decision view, with a focused sheet for changing tenure.",
            "highlight": "The decision is the journey — not just the Book Now action."
      },
      {
            "eyebrow": "Before → After · Under review",
            "title": "Understand the product before starting.",
            "body": "Retain benefits, rates and key terms before Start Investing. The revised discovery screen adds a women-specific rate row and makes lock-in and interest-payout options explicit.",
            "screens": [
                  {
                        "src": "/fd-iphone/before-landing.png",
                        "alt": "Before: Understand the product before starting."
                  },
                  {
                        "src": "/fd-iphone/after-landing.png",
                        "alt": "After: Understand the product before starting."
                  }
            ],
            "variant": "visual",
            "footnote": "Full-length supplied captures, shown uncropped. The FAQ text is placeholder content in both designs."
      },
      {
            "eyebrow": "Before → After · Under review",
            "title": "Bring the scheme and its outcome together.",
            "body": "Replace several rate cards and Book Now actions with one selected scheme. Interest rate, tenure, investment amount, maturity amount, total gains, maturity action and interest payout are visible together before Continue.",
            "screens": [
                  {
                        "src": "/fd-iphone/before-schemes.png",
                        "alt": "Before: Bring the scheme and its outcome together."
                  },
                  {
                        "src": "/fd-iphone/after-scheme.png",
                        "alt": "After: Bring the scheme and its outcome together."
                  }
            ],
            "variant": "visual",
            "footnote": "The old amount step already showed maturity value and gains. The change consolidates that information rather than introducing it."
      },
      {
            "eyebrow": "Before → After · Under review",
            "title": "Make changing tenure a focused decision.",
            "body": "Move tenure and rate selection into one sheet. Each row pairs a tenure with its interest rate; eligibility toggles remain available and Apply confirms the selection.",
            "screens": [
                  {
                        "src": "/fd-iphone/before-schemes.png",
                        "alt": "Before: Make changing tenure a focused decision."
                  },
                  {
                        "src": "/fd-iphone/after-tenure.png",
                        "alt": "After: Make changing tenure a focused decision."
                  }
            ],
            "variant": "visual",
            "footnote": "Design intent: reduce the need to interpret several scheme cards. A usability improvement has not yet been measured."
      },
      {
            "eyebrow": "Success metric · Measurement planned",
            "title": "Measure whether clearer decisions improve progression.",
            "body": "After launch, measure FD product view → partner or plan selection → investment initiation. Compare progression against the existing baseline; no redesign uplift is claimed.",
            "footnote": "Under review · Not yet shipped · Impact measurement planned post-launch",
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
