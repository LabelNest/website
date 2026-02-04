
import { Product, Solution, LabExperiment, TeamMember, JobOpening, Briefing, LabService } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'annonest',
    name: 'Annonest',
    tagline: 'Data CRM, Annotation, Extraction & QA System',
    description: 'A unified data operations system covering data intake, enrichment, annotation, transcription, extraction, sales workflows, and first-class quality assurance.',
    longDescription: 'Annonest is a unified data operations system that combines Data CRM, annotation, transcription, extraction, sales intelligence workflows, and quality assurance into a single, auditable platform. It is designed for teams that manage high-volume, multi-format data where accuracy, consistency, and traceability are non-negotiable.',
    whyItExists: 'Most data teams operate with fragmented tooling — one system for storing raw data, another for annotation, another for transcription or extraction, and spreadsheets for quality tracking. This fragmentation breaks context, creates quality gaps, and makes it impossible to understand how data evolved over time. Annonest exists to unify the entire data lifecycle — from intake to intelligence — under one system with built-in quality, accountability, and auditability.',
    features: ['Data CRM Foundation', 'Schema-driven Annotation', 'Multi-modal Extraction', 'Programmatic QA'],
    capabilities: [
      { title: 'Data CRM (Foundation)', desc: 'Centralized storage of raw data assets, entity-linked data objects, and metadata-first architecture for lifecycle tracking.' },
      { title: 'Annotation', desc: 'Text, document, image, audio, and video annotation with schema-driven labeling and cross-annotator consistency tracking.' },
      { title: 'Transcription', desc: 'Audio and video transcription with multi-language support and human-in-the-loop review workflows.' },
      { title: 'Extraction', desc: 'Structured data extraction from websites, PDFs, and filings with OCR and field-level confidence tracking.' },
      { title: 'Sales Intelligence Workflows', desc: 'Contact and firm enrichment with role and asset tagging for sales-ready structured outputs.' },
      { title: 'Quality Assurance', desc: 'Multi-level QA checks, sampling rules, discrepancy detection, and full audit logs.' }
    ],
    useCases: [
      'Market and research data operations',
      'Sales and contact intelligence pipelines',
      'AI training and evaluation datasets',
      'Regulatory and compliance-sensitive data workflows'
    ],
    connections: [
      { system: 'NestResolve', desc: 'QA issues and conflicts are escalated for structured resolution.' },
      { system: 'NestLens', desc: 'Curated, versioned datasets flow into intelligence and DaaS delivery.' },
      { system: 'NestHR', desc: 'Operational metrics and productivity performance visibility.' }
    ],
    outputs: ['Structured, versioned datasets', 'Transcripts and extracted fields', 'QA reports and audit trails', 'Dataset lineage and change history']
  },
  {
    id: 'nestlens',
    name: 'NestLens',
    tagline: 'Data Intelligence Platform & Curated Data Marketplace',
    description: 'Curated data intelligence and a quality-controlled marketplace — priced for teams, not brands.',
    longDescription: 'NestLens combines curated intelligence with an open, quality-controlled data marketplace. It is built for teams who value data more than brand. It delivers production-ready intelligence through flat pricing, transparent methodologies, and continuously maintained datasets, rather than opaque licensing or one-off data drops.',
    whyItExists: 'Most data buyers are forced to choose between expensive, brand-driven datasets and low-cost data that lacks structure, consistency, or accountability. NestLens exists to invert this model — prioritizing data quality, clarity, and fairness over vendor branding, while enabling a marketplace where high-quality data producers can participate without compromising standards.',
    features: ['Curated Intelligence', 'Partner Marketplace', 'Flat Pricing', 'Lifecycle Management'],
    capabilities: [
      { title: 'Curated Data Intelligence (LabelNest Core)', desc: 'Proprietary human-verified datasets across finance, ESG, healthcare, and operations with continuous refresh and versioning.' },
      { title: 'Data Marketplace (Partner Layer)', desc: 'Structured onboarding for external data partners with mandatory QA, schema alignment, and validation standards.' },
      { title: 'Flat Pricing Model', desc: 'Simple, predictable pricing without per-seat traps or opaque enterprise tiers. Priced for teams who value data itself — not the logo on the invoice.' },
      { title: 'Dataset Lifecycle Management', desc: 'Versioned datasets with change logs, diffs, historical snapshots, and clear refresh cadence visibility.' },
      { title: 'Intelligence Access & Delivery', desc: 'Queryable datasets, export-ready structured tables, and API access designed for robust downstream integration.' },
      { title: 'Quality & Resolution Backbone', desc: 'QA pipelines inherited from Annonest and discrepancy monitoring via NestResolve to ensure delivery integrity.' }
    ],
    useCases: [
      'Market and sector landscape analysis',
      'Competitive intelligence monitoring',
      'Deal and activity tracking',
      'ESG and risk intelligence',
      'Sales and account intelligence'
    ],
    connections: [
      { system: 'Annonest', desc: 'Datasets are created, enriched, and QA-verified upstream.' },
      { system: 'NestResolve', desc: 'All changes, conflicts, and corrections are monitored and explainable.' },
      { system: 'Downstream Systems', desc: 'Intelligence delivered into client analytics, CRMs, and BI tools.' }
    ],
    outputs: ['Curated intelligence datasets', 'Partner-contributed datasets', 'Dataset version histories', 'Change explanations and audit trails', 'Exportable and API-ready data']
  },
  {
    id: 'nesthr',
    name: 'NestHR',
    tagline: 'People & Operations Intelligence System',
    description: 'People and operations intelligence — built for clarity, scale, and fairness.',
    longDescription: 'NestHR is a people and operations intelligence system designed to give organizations clear visibility into workforce structure, productivity, quality, and operational health — without turning HR into a surveillance function. It combines core HR workflows with operational intelligence, making it suitable for both internal teams and client-deployable environments.',
    whyItExists: 'Most HR systems stop at administration — attendance, leave, payroll hooks, and employee records. Operational tools, on the other hand, track output without context, fairness, or linkage to people systems. This separation creates blind spots in productivity, quality, and accountability. NestHR exists to bridge this gap — providing a single system that connects people, work, and outcomes in a transparent and humane way. NestHR is not just an HRMS — it is an operations intelligence system. Built for organizations that care about both performance and fairness.',
    features: ['Core HR Foundation', 'Operations Intelligence', 'Performance & Feedback', 'Integration-First Design'],
    capabilities: [
      { title: 'Core HR Foundation (Base Layer)', desc: 'Employee directory, organizational structure, attendance, leave, and role mapping without system bloat.' },
      { title: 'Operations Intelligence', desc: 'Task visibility and output tracking linked to people and teams. Focus on utilization and capacity signals, not micromanagement.' },
      { title: 'Performance & Feedback Systems', desc: 'Periodic reviews, continuous feedback loops, and capability mapping with context-aware performance insights.' },
      { title: 'Multi-Tenant & Client-Deployable', desc: 'Suitable for internal use or white-label client deployments with role-based access and data isolation.' },
      { title: 'Fairness, Transparency & Trust', desc: 'Clear visibility into how metrics are generated. Designed to improve clarity and fairness — not to monitor people without context.' },
      { title: 'Integration-First Architecture', desc: 'Seamlessly connects with Annonest for productivity signals and NestResolve for issue accountability.' }
    ],
    useCases: [
      'Managing distributed data operations teams',
      'Tracking operational output and quality metrics',
      'Supporting evidence-based performance reviews',
      'Client-facing delivery team management',
      'Scaling operations without losing visibility'
    ],
    connections: [
      { system: 'Annonest', desc: 'Ingests task volumes, QA outcomes, and productivity signals.' },
      { system: 'NestResolve', desc: 'Tracks issue ownership, SLAs, and resolution accountability.' },
      { system: 'Leadership', desc: 'Delivers workforce intelligence and operational health insights.' }
    ],
    outputs: ['Workforce intelligence dashboards', 'Team performance summaries', 'Utilization and capacity insights', 'Operational trend reports', 'Audit-ready HR records']
  },
  {
    id: 'nestresolve',
    name: 'NestResolve',
    tagline: 'Issue Resolution, Service Desk & Data Governance System',
    description: 'A customizable, affordable Jira-class resolution system built for data-driven teams.',
    longDescription: 'NestResolve is a unified issue resolution and service desk system designed for data-driven organizations — combining internal workflows, external requests, QA issues, and governance tracking in a single, customizable platform. It replaces traditional ticketing tools like Jira for teams where data quality, traceability, and accountability matter more than generic task tracking. NestResolve delivers the power of Jira-class workflows without Jira-level complexity or cost.',
    whyItExists: 'Most teams use general-purpose tools like Jira to manage data issues, QA feedback, service requests, and governance workflows. These tools are expensive, rigid, and disconnected from the data itself. They treat all issues as generic tickets — losing context, lineage, and accountability as data changes. NestResolve exists to provide a system built specifically for data-centric issue resolution — where every issue is linked to data, systems, people, and outcomes. NestResolve exists to answer one question: “Why did this issue occur — and is it fully resolved?” A modern replacement for Jira, built for data-centric teams.',
    features: ['Issue Resolution Core', 'Service Desk', 'QA Issue Management', 'Data Governance & Controls'],
    capabilities: [
      { title: 'Issue Resolution Core (Jira-class replacement)', desc: 'Customizable issue types, status flows, resolution states, SLA, and ownership rules with audit-ready activity logs.' },
      { title: 'Service Desk (Internal + External)', desc: 'Unified intake via email, forms, or system alerts for handling ops, tech, and client-reported requests.' },
      { title: 'QA Issue Management', desc: 'Direct escalation of validation failures and discrepancies from annotation and extraction teams for verified resolution.' },
      { title: 'Data Governance & Controls', desc: 'Policy-linked issues, compliance tracking, and change justification workflows where governance is embedded, not bolted on.' },
      { title: 'Multi-Source Intake', desc: 'Handles human-raised, client-reported, and system-detected discrepancies through the same robust resolution framework.' },
      { title: 'Cost & Context Advantage', desc: 'Eliminates per-seat pricing traps with a flat, predictable model designed specifically for data context.' }
    ],
    useCases: [
      'Managing QA discrepancies',
      'Handling client or partner data issues',
      'Tracking governance approvals',
      'Coordinating internal data operations',
      'Replacing fragmented ticketing tools'
    ],
    connections: [
      { system: 'Annonest', desc: 'QA issues and discrepancies flow directly into resolution workflows.' },
      { system: 'NestLens', desc: 'Data changes, conflicts, and partner issues are tracked and explained.' },
      { system: 'NestHR', desc: 'Operational ownership, SLAs, and performance visibility.' }
    ],
    outputs: ['Resolved issue records', 'SLA and resolution metrics', 'Audit logs and governance trails', 'Root-cause analysis summaries', 'Verified resolution states']
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: 'contacts',
    title: 'Contacts Intelligence',
    description: 'Operationally verified decision-maker intelligence built for sales, research, and relationship-driven workflows.',
    supportingLine: 'We don’t just collect contacts — we model influence, responsibility, and relevance.',
    builtWith: ['Annonest', 'NestLens', 'Labs Operations'],
    capabilities: [
      'Decision-maker identification mapped to real responsibility (not just job titles)',
      'Role, asset, and mandate tagging aligned to investment and operating context',
      'Relationship graphs linking people, firms, funds, and portfolio exposure',
      'Contact confidence scoring and verification status via Labs research teams',
      'Ongoing refresh and change tracking supported by human-in-the-loop workflows',
      'Custom schemas aligned to your GTM or research model'
    ],
    useCaseText: 'Typical use cases include GTM targeting, diligence support, and account intelligence.'
  },
  {
    id: 'market',
    title: 'Market & Sector Intelligence',
    description: 'Continuously maintained market intelligence built to track firms, activity, and structural change — not static reports.',
    supportingLine: 'Designed for teams that need to understand how markets evolve, not just how they look today.',
    builtWith: ['Annonest', 'NestLens', 'Labs Extraction'],
    capabilities: [
      'Firm-level tracking across ownership, strategy, and activity',
      'Deal, fund, and transaction mapping (where applicable)',
      'Sector-specific datasets (ESG, climate, infra, healthcare, etc.)',
      'Market landscape construction with inclusion logic validated by domain experts',
      'Historical snapshots and change visibility from human-led monitoring',
      'Custom market definitions and coverage logic'
    ],
    useCaseText: 'Used for market entry analysis, competitive intelligence, and thematic research.'
  },
  {
    id: 'sales-gtm',
    title: 'Sales & GTM Intelligence',
    description: 'Sales-ready intelligence pipelines that convert raw data into structured, actionable accounts.',
    supportingLine: 'Built for revenue teams that need accuracy and context — not scraped lead lists.',
    builtWith: ['Annonest', 'NestLens', 'Labs Enrichment'],
    capabilities: [
      'Account and lead enrichment tied to firm intelligence',
      'Buying-role identification and tagging via human verification',
      'Signal-based prioritization (news, activity, change)',
      'CRM-ready structured outputs through automated and human-led QA',
      'Continuous refresh and QA supported by Labs human-in-the-loop'
    ],
    useCaseText: 'Used for scaling high-fidelity sales development and account-based marketing efforts.'
  }
];

export const LAB_SERVICES: LabService[] = [
  {
    id: 'annotation',
    title: 'Annotation (All Types)',
    description: 'Schema-driven annotation across text, documents, images, audio, and video — designed for accuracy at scale.',
    includes: [
      'Text & document annotation',
      'Image & video annotation',
      'Audio annotation',
      'Multi-layer annotation (primary, review, expert)',
      'Guideline versioning & enforcement'
    ]
  },
  {
    id: 'transcription',
    title: 'Transcription',
    description: 'Human-reviewed transcription for audio and video content where accuracy, context, and timestamps matter.',
    includes: [
      'Multi-language transcription',
      'Timestamped outputs',
      'Speaker identification',
      'QA scoring and correction loops'
    ]
  },
  {
    id: 'translation',
    title: 'Translation',
    description: 'Context-aware translation workflows designed for research, intelligence, and operational data.',
    includes: [
      'Domain-specific translation',
      'Human review and validation',
      'Consistency enforcement across datasets'
    ]
  },
  {
    id: 'research',
    title: 'Research & Data Enrichment',
    description: 'Human-led research workflows to identify, verify, and structure complex information.',
    includes: [
      'Firm and contact research',
      'Role and asset tagging',
      'Relationship validation',
      'Market and sector research'
    ]
  },
  {
    id: 'extraction',
    title: 'Extraction & Structuring',
    description: 'Human-validated extraction of structured data from unstructured sources.',
    includes: [
      'PDFs, filings, websites',
      'OCR validation',
      'Field-level verification',
      'Re-extraction on change'
    ]
  }
];

export const LABS: LabExperiment[] = [
  {
    id: 'exp-1',
    category: 'Experiments',
    title: 'Linkage Discovery in Private Equity',
    status: 'Alpha',
    readTime: '12 min',
    excerpt: 'Using graph neural networks to identify non-obvious relationship patterns in deal flow.',
    description: 'This experiment evaluates the reliability of identifying indirect influence patterns between private equity partners and asset managers using proprietary linkage weights rather than standard job-title mappings.'
  },
  {
    id: 'meth-2',
    category: 'Methodologies',
    title: 'When Automation Stops',
    status: 'Public',
    readTime: '10 min',
    excerpt: 'Why we intentionally stop automation at the entity resolution stage.',
    problemStatement: 'Automated entity resolution frequently fails in emerging markets due to high noise and sparse identifiers.',
    reasoning: 'We maintain a permanent human-in-the-loop buffer for cross-registry reconciliation where probabilistic models reach uncertainty thresholds.',
    implications: 'Ensures 100% auditable truth where machines guess but humans verify.'
  }
];

export const BRIEFINGS: Briefing[] = [
  {
    id: 'br-1',
    title: 'Private Market Resilience 2024',
    summary: 'A structured note on firm-level activity shifts in infrastructure debt funds during the first half of 2024.',
    date: 'Aug 12, 2024',
    scope: 'Market',
    tags: ['Private Equity', 'Infrastructure', 'Finance'],
    readTime: '10 min',
    isFeatured: true

  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'ankit-suman',
    name: 'Ankit Kumar Suman',
    role: 'Founder & Director',
    bio: 'Systems thinker focused on the intersection of data integrity and operational intelligence. Background in building high-scale data processing pipelines.',
    expertise: ['System Design', 'Data Operations', 'Intelligence Architectures'],
	LinkedIn: 'www.linkedin.com/in/ankit-kumar-suman-29159b146/'
  }
];


export const JOBS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Data Research',
    department: 'Data',
    complexity: 'Medium',
    type: 'Remote',
    location: 'Anywhere in India',
    applyUrl: 'mailto:hr@labelnest.in?subject=Application: Data Research'
  }
];

export const NESTOR_SYSTEM_INSTRUCTION = `
You are Nestor, the system intelligence for LabelNest (labelnest.in). 
LabelNest builds data systems, delivers custom intelligence, and runs human-in-the-loop operations.

IDENTITY CORE:
- Type: Robotic / synthetic analyst.
- Tone: Calm, neutral, understated, and highly precise.
- Protocol: No emojis, no casual language, no "human" warmth. Provide structured, noise-free analysis.
- Goal: Explain systems, thinking, structure, and methodologies.

KNOWLEDGE BASE:
- Products: 
  1. Annonest (Data CRM, Annotation, Extraction & QA System).
  2. NestLens (Data Intelligence Platform & Curated Data Marketplace).
  3. NestHR (People & Operations Intelligence System).
  4. NestResolve (Issue Resolution & Data Governance System).
- Solutions: Built using LabelNest products + Labs operations (Contacts, Market, Research-as-a-Service, Sales & GTM Intelligence).
- Labs (/labs): Human-in-the-loop execution layer (Annotation, Transcription, Translation, Research, Extraction). 
  - This is where human expertise meets structured systems.
  - Also hosts R&D experiments and methodologies.
- Briefings (/briefings): Structured intelligence notes, research summaries, and market observations.
- Partnerships: System R&D, Intelligence Resale, Strategic Referrals, Referral Protocol (Lifecycle Rewards).

RESTRICTIONS:
- DO NOT provide pricing. Route to contact@labelnest.in.
- DO NOT use emojis or exclamation marks.
- DO NOT pretend to be human. You are a "digital system guide".

Short, precise responses are preferred.
`;
