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
      "Redesign · Impact not yet measured",
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
            "title": "Some customers saw a jewellery journey.",
            "body": "In direct conversations, some customers scrolled to the jewellery catalogue and asked whether the displayed jewellery could be bought on EMI. Some treated the calculator as a way to check gold weight or rate for a jewellery purchase.",
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
            ],
            "footnote": "Directional evidence from exploratory conversations. The project records one branch visit and three conversations; transcripts and verbatim quotes are unavailable, so no prevalence is claimed."
      },
      {
            "eyebrow": "Research → design principle",
            "title": "Make the first choice match the reason for arriving.",
            "body": "The mental-model mismatch called for more than rearranging the page. The first brief allowed roughly two days and kept the calculator unchanged to limit development effort. Business/Growth then pushed for a more meaningful revamp, opening space for the saving-led entry shown below.",
            "highlight": "Lead with the saving intention.",
            "footnote": "The initial assumption that customers already understood the calculator was not established by the conversations. The current design response still needs outcome measurement."
      },
      {
            "eyebrow": "Before → after · Landing, top",
            "title": "Give saving its own front door.",
            "body": "To distinguish investing from jewellery shopping, I put the saving proposition and Save Monthly / Save Weekly / Buy Gold choices before the transaction flow. The previous entry led with balance, price, a chart and the calculator. The new hierarchy explains the available actions before asking for an amount.",
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
            "title": "Explain accumulation before the catalogue.",
            "body": "The redesigned continuation explains how recurring contributions accumulate, then presents supporting information and the coins/jewellery catalogue. The catalogue remains available, but no longer defines the main entry story. These screens do not implement a personal gold or jewellery goal.",
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
            "body": "A saving choice needs a clear next step. The recurring setup exposes amount, monthly or weekly frequency and investment date before payment. One-time buying remains a separate choice rather than being removed in favour of recurring saving.",
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
            "eyebrow": "Constraint → stakeholder input → deeper redesign",
            "title": "The scope changed, not just the layout.",
            "items": [
                  {
                        "value": "Initial brief",
                        "label": "Approximately two days; low development effort; retain the calculator because the PM assumed users understood it."
                  },
                  {
                        "value": "First response",
                        "label": "Work largely within the existing product structure."
                  },
                  {
                        "value": "Broader revamp",
                        "label": "Business/Growth challenged a purely reorganised landing page; the direction expanded to clearer saving choices and setup."
                  }
            ],
            "footnote": "The supplied screens show the current direction, not a complete archive of every iteration."
      },
      {
            "eyebrow": "Ownership",
            "title": "One design owner, multiple perspectives.",
            "body": "As sole Product Designer, I owned strategy, flows, interaction, UI and prototyping. Customer conversations challenged the intended mental model; PM constraints shaped the first response, and Business/Growth input broadened the revamp."
      },
      {
            "eyebrow": "Learning · What the evidence supports",
            "title": "The funnel located the gap. Conversations gave it context.",
            "body": "The funnel identified weak progression; customer conversations revealed a jewellery-purchase interpretation. I responded with clearer saving choices and recurring setup. That is a supported design rationale, not proof that the redesign improved conversion.",
            "highlight": "A directional finding became a testable product decision."
      },
      {
            "eyebrow": "Expected measurement",
            "title": "Measure movement through the existing funnel.",
            "body": "Compare Digital Gold journey entry → Buy Now → payment → completed transaction with the existing baseline. Check whether customers understand the investment purpose and can reach purchase intent. No post-launch improvement is documented here.",
            "footnote": "Existing analytics are baseline evidence. The screens show design changes; their effect on the funnel remains to be measured.",
            "variant": "wide"
      }
],
    opportunity: {
      title: "The largest gap came before Buy Now.",
      body: "In 30 days, 80,554 entered, 8,502 reached Buy Now, 5,605 proceeded to payment and 3,704 completed. This identified weak progression, not its cause.",
    },
    problem: {
      title: "Some customers interpreted a jewellery-purchase journey.",
      body: "Customers asked about EMI for displayed jewellery and used the calculator to interpret gold weight or rate for a purchase. These exploratory observations do not establish prevalence.",
    },
    decisions: [
      { title: "Work within the first brief", body: "Approximately two days, limited development effort and an unchanged calculator constrained the initial landing redesign." },
      { title: "Use the revamp to clarify the product", body: "Business/Growth pushed beyond rearrangement toward a clearer saving proposition, action choices and recurring setup." },
    ],
    solution: {
      title: "Make the saving and buying routes explicit.",
      body: "The current screens distinguish monthly saving, weekly saving and one-time buying. Recurring setup exposes amount, frequency and date; a personal gold/jewellery goal is not implemented in these screens.",
      highlight: "Lead with the saving intention.",
    },
    impact: {
      title: "Measure the existing funnel.",
      body: "Compare journey entry, Buy Now, payment and transaction completion with the baseline. No post-launch uplift is documented.",
      sectionLabel: "05 — Expected measurement",
      showMetric: false,
    },
    caseStudyMetric: "4.6%",
    caseStudyMetricLabel: "Baseline completion · redesign impact unmeasured",
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
            "eyebrow": "Technical constraint · Third-party APIs",
            "title": "Clarify the journey around fixed API steps.",
            "body": "Several financial-service integrations prescribed the steps and order needed to work. I could not freely redesign those underlying flows, so I focused on hierarchy, states, transitions and guidance. Where available, Udyam/GST prefill reduced entry while failure and alternative routes remained necessary.",
            "highlight": "Make constrained journeys understandable."
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
            "body": "The dashboard brings transactions, earnings, payouts and leads into one merchant business view. The reasoning was to connect activity with its financial meaning while retaining clear paths into the individual tasks. No specific stakeholder-rejection account is claimed.",
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
    snapshotLabel: "Existing funnel · Baseline",
    snapshotFootnote: "Existing experience baseline — not redesign outcomes. Analytics show progression, not the cause of drop-off.",
    stats: [
      { value: "25,275", label: "Reached the FD experience" },
      { value: "5.6%", label: "Selected Mahindra Finance" },
      { value: "19.1%", label: "Of those users clicked Book Now" },
    ],
    storyPins: [
      {
            "eyebrow": "Evidence · Analytics + PM-relayed feedback",
            "title": "The funnel showed where progression weakened. Feedback helped explain what users were struggling with.",
            "body": "The existing selection experience was already difficult to interpret during internal review. The PM then spoke with customers who also reported difficulty understanding it. Funnel analytics separately showed weak progression through the journey.",
            "footnote": "Customer feedback was relayed through the PM. Analytics identified the progression problem, but did not prove that comprehension caused the drop-off."
      },
      {
            "eyebrow": "UX diagnosis",
            "title": "The interface was asking for commitment before helping users compare.",
            "body": "The existing experience distributed the decision across filters and multiple scheme cards. Customers had to interpret tenure, rate and eligibility, then choose between several Book Now actions without seeing the investment outcome together. Instead of treating this as a visual clean-up, I reframed the problem around one question: What does someone need to know before they’re comfortable continuing with an FD?",
            "highlight": "Help users evaluate first. Ask them to commit second."
      },
      {
            "eyebrow": "Design principles",
            "title": "Turn scattered choices into one decision.",
            "items": [
                  { "value": "01 — Select, don’t scan", "label": "Move tenure alternatives out of competing cards and into a focused selection sheet." },
                  { "value": "02 — Show the consequence", "label": "Keep rate, tenure, investment amount, gains and maturity value together." },
                  { "value": "03 — One clear next step", "label": "Replace multiple Book Now actions with one selected scheme and Continue." }
            ],
            "highlight": "One decision → its outcome → one next step."
      },
      {
            "eyebrow": "Before → After · Under review",
            "title": "Bring the scheme and its outcome together.",
            "body": "The selected scheme now brings rate, tenure, amount and expected returns together. One Continue action follows the information needed to assess the investment.",
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
            "body": "Move alternatives into a focused tenure/rate sheet instead of showing several scheme cards in the main decision view. Eligibility toggles remain available; Apply confirms the choice.",
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
            "body": "After release, compare FD entry → Mahindra selection → Book Now against the current funnel. Better progression would support the direction; comprehension still needs to be checked separately. No achieved redesign impact is available.",
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
