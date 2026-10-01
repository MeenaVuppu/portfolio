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
            "title": "The largest gap came before Buy Now.",
            "body": "Digital Gold lets customers buy and accumulate gold digitally. The existing 30-day funnel lost most users before Buy Now; 5,605 then proceeded to payment. That located the problem, but did not explain whether expectations, comprehension or another barrier caused it.",
            "footnote": "The opening snapshot shows the observed funnel. It is a baseline, not evidence of redesign impact."
      },
      {
            "eyebrow": "Talking to real users · Exploratory branch research",
            "title": "The promise of saving met a different product story.",
            "body": "I visited one branch and spoke with three customers. The existing research account describes an expectation gap: saving-led banners brought people in, while the product mixed investment and jewellery-purchase journeys.",
            "items": [
                  {
                        "value": "Reported pattern",
                        "label": "Saving-led acquisition and the mixed investment/jewellery journey set different expectations."
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
            "body": "The branch conversations suggested a saving intention that the entry experience did not foreground. I made monthly, weekly and one-time routes explicit, while keeping buying available. The landing comparison below shows that response.",
            "highlight": "Lead with the saving intention.",
            "footnote": "Design hypothesis: clearer choices may help users find the relevant path. Comprehension and completion still need testing."
      },
      {
            "eyebrow": "Before → after · Landing, top",
            "title": "Give saving its own front door.",
            "body": "To respond to the reported expectation gap, I moved the saving proposition and Save Monthly / Save Weekly / Buy Gold choices ahead of the transaction flow. The old entry led with balance, price, a chart and the purchase form. The redesign also explains how recurring saving works before setup.",
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
            "body": "Choosing a saving route needs to lead to a usable plan. With Marketing, I moved from explaining gold to exposing amount, frequency and investment date before payment. Monthly and weekly choices support recurrence without removing the one-time path shown on the landing.",
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
            "body": "Analytics located the progression gap; three exploratory conversations suggested an expectation mismatch. I translated that interpretation into saving-led choices and recurring setup. The small research sample and pre-launch status limit what can be concluded about comprehension or conversion.",
            "highlight": "A directional finding became a testable product decision."
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
            "body": "The Sep 1–11 onboarding cohort in the opening snapshot showed a gap between starting and completing digital onboarding. It points to activation as a follow-up priority; it does not identify which verification step caused the loss or establish later product usage."
      },
      {
            "eyebrow": "Onboarding · Designing around the system",
            "title": "Ask for less when the system knows more.",
            "body": "Udyam or GST data could prefill details already available through the system. I used that opportunity to reduce repeat entry while retaining routes for failed verification, missing records and incorrect bank details. Automation could not replace recovery when the data or verification failed.",
            "highlight": "Reduce merchant effort without hiding system complexity."
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
            ],
            "footnote": "Reported business results for the first two weeks. These are distinct from BRD targets and the Sep 1–11 digital-onboarding cohort; they do not isolate the effect of a particular design decision."
      },
      {
            "eyebrow": "Product decision / reflection",
            "title": "Designing for the business, not just the feature.",
            "body": "The consolidated dashboard direction was initially challenged. As the product expanded, the need for one business view became clearer. The trade-off was to bring related activity together without making merchants discover and reconcile every feature independently.",
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
            "body": "The shipped system connected merchant activity with field execution. Early business results show uptake; long-term merchant activity, earnings and the effect of individual design decisions still need further evidence."
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
            "eyebrow": "Analytics signal → problem hypothesis",
            "title": "Selection was a progression bottleneck.",
            "body": "The opening funnel shows limited progression from FD entry to Mahindra selection and then Book Now. In the old UI, users encountered rate cards before the investment amount and expected returns. My hypothesis was that separating these details created decision friction; the analytics alone cannot establish that cause.",
            "footnote": "Observed funnel baseline. No interviews or causal usability finding are documented for this project."
      },
      {
            "eyebrow": "Design direction",
            "title": "Make the investment decision understandable before commitment.",
            "body": "To address that hypothesis, I brought the selected scheme, amount and expected returns into one view. A separate tenure sheet keeps alternatives available without showing every rate card alongside the investment summary. This is a design response awaiting validation.",
            "highlight": "The decision is the journey — not just the Book Now action."
      },
      {
            "eyebrow": "Before → After · Under review",
            "title": "Understand the product before starting.",
            "body": "Users need the product’s terms before choosing an investment. I retained benefits and rates, added the women-specific rate row, and made lock-in and payout options explicit. This keeps discovery useful before Start Investing; improved understanding remains a hypothesis.",
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
            "body": "To avoid asking users to commit before seeing the outcome, I replaced multiple Book Now cards with one selected scheme and Continue. Rate, tenure, amount, maturity value, gains, maturity action and payout sit together. The trade-off is a focused summary with alternatives accessed separately.",
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
            "body": "To compare alternatives without filling the main view with scheme cards, I moved tenure and rate into a focused sheet. Each row pairs the two values; eligibility toggles remain available and Apply confirms the choice. This prioritizes comparison inside one task.",
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
            "body": "The redesign is under review and has not shipped. Check whether users can interpret the selected scheme, change tenure and understand expected returns before continuing. After launch, compare product view → selection → investment initiation against the baseline; no projected uplift or achieved conversion gain is claimed.",
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
