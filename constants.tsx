
import { Product, Solution, LabExperiment, TeamMember, JobOpening, Briefing, LabService, Alumnus, Fellow } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'annonest',
    name: 'Annonest',
    tagline: 'Data CRM, Annotation, Extraction & QA System',
    description: 'A unified data operations system covering data intake, enrichment, annotation, transcription, extraction, sales workflows, and first-class quality assurance.',
    longDescription: 'Annonest is a unified data operations system that combines Data CRM, annotation, transcription, extraction, sales intelligence workflows, and quality assurance into a single, auditable platform.',
    whyItExists: 'Fragmented tooling breaks context and creates quality gaps. Annonest unifies the entire data lifecycle.',
    features: ['Data CRM Foundation', 'Schema-driven Annotation', 'Multi-modal Extraction', 'Programmatic QA'],
    capabilities: [
      { title: 'Data CRM', desc: 'Centralized storage for lifecycle tracking.' },
      { title: 'Annotation', desc: 'Text, image, audio, and video annotation.' },
      { title: 'Extraction', desc: 'Structured data extraction via OCR.' },
      { title: 'QA', desc: 'Audit logs and discrepancy detection.' }
    ],
    useCases: ['AI training datasets', 'Compliance workflows'],
    connections: [{ system: 'NestResolve', desc: 'Escalation for conflicts.' }],
    outputs: ['Versioned datasets', 'QA reports']
  },
  {
    id: 'nestlens',
    name: 'NestLens',
    tagline: 'Data Intelligence & Marketplace',
    description: 'Curated data intelligence and marketplace priced for teams.',
    longDescription: 'NestLens combines intelligence with an open, quality-controlled data marketplace.',
    whyItExists: 'Inverts the model of expensive brand-driven datasets to focus on quality.',
    features: ['Curated Intelligence', 'Marketplace', 'Flat Pricing'],
    capabilities: [{ title: 'Intelligence', desc: 'Proprietary verified datasets.' }],
    useCases: ['Competitive monitoring', 'ESG risk'],
    connections: [{ system: 'Annonest', desc: 'Upstream data creation.' }],
    outputs: ['Intelligence feeds']
  },
  {
    id: 'nesthr',
    name: 'NestHR',
    tagline: 'People & Operations Intelligence',
    description: 'Built for clarity, scale, and fairness.',
    longDescription: 'Connects people, work, and outcomes in a transparent way.',
    whyItExists: 'Bridges the gap between administration and operational output.',
    features: ['Operations Intelligence', 'Core HR'],
    capabilities: [{ title: 'Operations', desc: 'Task visibility and utilization signals.' }],
    useCases: ['Distributed team management'],
    connections: [{ system: 'Annonest', desc: 'Productivity signals.' }],
    outputs: ['Dashboards']
  },
  {
    id: 'nestresolve',
    name: 'NestResolve',
    tagline: 'Issue Resolution & Governance',
    description: 'Customizable resolution system for data-driven teams.',
    longDescription: 'Replaces generic ticketing with data-linked accountability.',
    whyItExists: 'Data issues require context and lineage, which generic tools lack.',
    features: ['Issue Core', 'Data Governance'],
    capabilities: [{ title: 'Governance', desc: 'Policy-linked issue tracking.' }],
    useCases: ['QA discrepancies', 'Client data issues'],
    connections: [{ system: 'NestLens', desc: 'Conflict resolution.' }],
    outputs: ['Audit logs']
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: 'contacts',
    title: 'Contacts Intelligence',
    description: 'Verified decision-maker intelligence built for research.',
    builtWith: ['Annonest', 'NestLens'],
    capabilities: ['Role identification', 'Relationship graphs'],
    useCaseText: 'GTM targeting and research.'
  }
];

export const LAB_SERVICES: LabService[] = [
  {
    id: 'annotation',
    title: 'Annotation (All Types)',
    description: 'Schema-driven annotation across all modalities.',
    includes: ['Text', 'Image', 'Audio', 'Video']
  }
];

export const LABS: LabExperiment[] = [
  {
    id: 'meth-1',
    category: 'Methodologies',
    title: 'The Paradox of Perfect Data',
    status: 'Public',
    readTime: '15 min',
    excerpt: 'Exploring why 100% accuracy is often a false signal.'
  }
];

export const BRIEFINGS: Briefing[] = [
  {
    id: 'br-2',
    title: 'Sovereignty and Scale: Why LabelNest is Building an INR-First Data Ecosystem',
    summary: 'For too long, the Indian tech ecosystem has been forced to buy "Indian context" at "Global prices."',
    content: `For too long, the Indian tech ecosystem has been forced to buy "Indian context" at "Global prices."

Most AI data firms in Bangalore and beyond are looking West. They price their services in USD, operate on Western timelines, and treat the domestic Indian market as a secondary priority. At LabelNest, we believe that for India to become a global AI superpower, our foundational infrastructure must be Currency Aligned.

### The Problem with the USD-Standard

When an Indian startup or research firm builds a model, they face a massive hurdle: exchange rate volatility. Paying for data annotation or market intelligence in USD means your ROI is at the mercy of the forex market.

Furthermore, global platforms often fail to capture the nuance of the Indian landscape. Whether it’s regional dialects, local retail environments, or specific financial regulations, "Global" usually means "Generic."

### The INR Advantage: Why We Are Different

At LabelNest, we are building a "Platform-First" ecosystem designed specifically for the needs of local and global firms operating in India. Here is why our INR-first approach is a strategic advantage for our clients:

1. **Budget Predictability:** No hidden "forex taxes" or mid-project price hikes. What you see in INR is what you pay.
2. **Contextual Intelligence:** We aren’t just cheaper; we are closer. When we annotate Indian road data or transcribe regional dialects, we aren’t just processing data—we are applying lived experience.
3. **The Local Multiplier:** By keeping capital within the Indian ecosystem, we can scale our Nestling workforce faster, providing elite "Human-in-the-Loop" quality at a fraction of the cost of offshore enterprise platforms.

### A Suite Built for Scale

Our mid-February launch of the full "Nest" Suite—AnnoNest, NestLens, and NestResolve—is built on this philosophy of logical precision and economic transparency. Whether you are using NestHR to find subject matter experts or buying entity-level data on NestLens, you are accessing institutional-grade power through a domestic pricing lens.

### Founder’s Final Thought

LabelNest is a proudly bootstrapped firm. We don’t answer to VC benchmarks in Silicon Valley; we answer to the Indian founder who needs high-integrity, ground-truth data to build the next generation of AI.

The future of data shouldn't be a "black box" priced in a foreign currency. It should be transparent, precise, and built right here.`,
    date: 'Feb 5, 2026',
    scope: 'Sovereignty',
    tags: ['Economy', 'AI Infrastructure', 'India'],
    readTime: '6 min',
    isFeatured: true,
    author: {
      name: 'Ankit Kumar Suman',
      role: 'Founder & Director',
      department: 'Leadership & Strategy'
    }
  },
  {
    id: 'br-1',
    title: 'Built to Last: Why Bootstrapping LabelNest is a Choice for Logical Precision',
    summary: 'In a world of AI hype, LabelNest is building a sustainable, piece-by-piece data ecosystem focused on accuracy and client-led growth.',
    content: `In the current AI gold rush, the standard playbook is simple: raise millions in venture capital, spend it on aggressive marketing, and hope the product catches up to the hype. 

At LabelNest, we’ve chosen a different path. We are **bootstrapped by design.** Choosing to build without external funding isn't just a financial decision; it is a commitment to **Logical Precision.** When you aren't burning someone else’s cash, every feature you build and every dataset you curate must solve a real-world problem for a paying client. There is no room for "filler" code or "fluff" data.

### The "Piece-by-Piece" Philosophy

We didn't launch a vague "AI company." We built an ecosystem, one functional block at a time:

1. **NestHR (The Foundation):** We started by solving the talent problem. You cannot have high-quality AI data without high-quality human experts. NestHR allowed us to build an automated pipeline of Subject Matter Experts (SMEs).
2. **AnnoNest (The Engine):** Once we had the people, we built the workbench. AnnoNest isn't just a labeling tool; it’s a Data CRM that handles extraction, translation, and monitoring with flat-pricing transparency.
3. **NestLens (The Marketplace):** With the talent and the tools in place, we began harvesting ground-truth intelligence. Now, we are opening that vault as India’s first alternative data marketplace.
4. **NestResolve (The Final Polish):** Our upcoming launch in mid-February completes the loop, ensuring that conflict resolution and QA are baked into the very fabric of the data.

### Why "Bootstrap" Means Better Data for You

When a firm is venture-backed, they are often pressured to prioritize **volume over value** to meet monthly growth targets. They need to show millions of labels, even if the accuracy is questionable.

As a bootstrapped firm, LabelNest prioritizes **Precision over Volume.** Our survival depends on our data working perfectly for your models. If our "Human-in-the-Loop" services fail to deliver ground truth, we don't just lose a metric—we lose a partner.

### Building the "Datarade of India" with INR Pricing

By being lean, we have the freedom to price our services in INR, making enterprise-grade data intelligence accessible to the Indian market. We aren't chasing a Silicon Valley exit; we are building a long-term utility for the global AI economy, rooted in Indian expertise.

The road ahead is clear. We are proving that you don't need a massive burn rate to build a massive impact. All you need is a piece-by-piece commitment to logic, precision, and the clients who trust us to fuel their AI.`,
    date: 'Feb 2, 2026',
    scope: 'Foundry',
    tags: ['Bootstrap', 'AIOps', 'Strategic Growth', 'Precision'],
    readTime: '6 min',
    isFeatured: true,
    author: {
      name: 'Ankit Kumar Suman',
      role: 'Founder & Director',
      department: 'Leadership & Strategy'
    }
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'ankit-kumar-suman',
    name: 'Ankit Suman',
    role: 'Founder & Director',
    bio: 'Founded LabelNest to address structural gaps in data trust and intelligence systems. Brings deep experience across private market research, large-scale data operations, and system design, with a focus on building reliable, scalable data platforms that combine human expertise with automation.',
    expertise: ['System Architecture', 'Intelligence Strategy', 'Leadership'],
    linkedin: 'https://www.linkedin.com/in/ankit-kumar-suman-29159b146/'
  },
  {
    id: 'muskaan-grover',
    name: 'Muskaan Grover',
    role: 'Associate Project Manager',
    bio: 'Leads complex, multi-workflow data projects with a strong focus on execution rigor, operational clarity, and quality outcomes. Experienced in coordinating large teams, streamlining processes, and ensuring reliable delivery across annotation and evaluation programs.',
    expertise: ['Operations Management', 'Team Coordination', 'Quality Assurance'],
    linkedin: 'https://www.linkedin.com/in/muskaan0026/'
  },
  {
    id: 'himani-bhatt',
    name: 'Himani Bhatt',
    role: 'Analyst - Project Management',
    bio: 'Works at the intersection of partnerships, communication, and execution to build meaningful external relationships. Focused on initiating high-value conversations, managing stakeholders, and creating collaboration opportunities that deliver mutual value.',
    expertise: ['Strategic Outreach', 'Stakeholder Management', 'Partnership Development'],
    linkedin: 'https://www.linkedin.com/in/himani-bhatt-98b7a0261/'
  },
  {
    id: 'srishti-shiyal',
    name: 'Srishti Shiyal',
    role: 'HR Analyst - I',
    bio: 'Brings a people-first approach to building structured and scalable teams. Experienced across recruitment, talent acquisition, and people operations, with a strong foundation in creating processes that support long-term organizational growth.',
    expertise: ['Recruitment', 'People Operations', 'HRMS Management'],
    linkedin: 'https://www.linkedin.com/in/srishtis291/'
  },
  {
    id: 'suganya-gautam',
    name: 'Suganya Gautam',
    role: 'HR Analyst - I',
    bio: 'Contributes to building structured and efficient people processes across onboarding, operations, and internal coordination. Focused on documentation, stakeholder alignment, and ensuring smooth execution of HR workflows.',
    expertise: ['Onboarding', 'Process Documentation', 'Stakeholder Management'],
    linkedin: 'https://www.linkedin.com/in/suganya-gautam-a37b0262/'
  },
  {
    id: 'sumedha-pandey',
    name: 'Sumedha Pandey',
    role: 'HR Analyst - I',
    bio: 'Supports internal systems and people processes with an emphasis on structure, clarity, and scalability. Interested in designing efficient, human-centric frameworks that evolve alongside fast-growing organizations.',
    expertise: ['Internal Systems', 'HR Process Management', 'Support Frameworks'],
    linkedin: 'https://www.linkedin.com/in/sumedha-pandey/'
  },
  {
    id: 'phalachandra-udupa',
    name: 'Phalachandra Udupa',
    role: 'Data & Annotation Intern',
    bio: 'Works across data collection, research, and validation to ensure accuracy and reliability of datasets. Brings hands-on experience in sourcing data from multiple channels and validating it through structured research and analysis.',
    expertise: ['Data Collection', 'Python Programming', 'Computer Vision'],
    linkedin: 'https://www.linkedin.com/in/phalachandra/'
  },
  {
    id: 'suhas-bhat',
    name: 'Suhas Bhat',
    role: 'Data Research Intern',
    bio: 'Brings strong technical depth in machine learning, deep learning, and computer vision. Experienced in building data-driven and AI-based solutions for image analysis and applied research using Python and modern ML frameworks.',
    expertise: ['Machine Learning', 'Deep Learning', 'Python Programming'],
    linkedin: 'https://www.linkedin.com/in/suhas-bhat-7a616322a/'
  },
  {
    id: 'prajwal-pb',
    name: 'Prajwal PB',
    role: 'Data Annotation Specialist',
    bio: 'Specializes in delivering high-accuracy datasets for advanced AI systems, particularly in mobility and autonomous domains. Experienced in quality governance, process design, and leading teams to bridge execution with long-term data strategy.',
    expertise: ['Mobility AI', 'ADAS Data Strategy', 'Quality Governance'],
    linkedin: 'https://www.linkedin.com/in/prajwal-pb-6a0637225/'
  },
  {
    id: 'shubham-singh',
    name: 'Shubham Singh',
    role: 'Junior Coordinator',
    bio: 'Supporting operational delivery and logistics across various data research and annotation projects.',
    expertise: ['Program Delivery', 'Logistics Coordination', 'Operational Support'],
    linkedin: 'https://www.linkedin.com/in/shubham-singh/'
  },
  {
    id: 'maybin-k-uthuppan',
    name: 'MAYBIN K UTHUPPAN',
    role: 'Agronomy Research Analyst',
    bio: 'Brings specialized agricultural knowledge to data systems, focusing on agronomy research and contextual knowledge transfer for agricultural AI applications.',
    expertise: ['Agronomy Research', 'Systems Training', 'Knowledge Transfer'],
    linkedin: 'https://www.linkedin.com/in/maybin-k-uthuppan-835320282/'
  },
  {
    id: 'robin-joshi',
    name: 'Robin Joshi',
    role: 'Data Annotation Specialist',
    bio: 'Experienced in healthcare data operations, focusing on the accuracy and compliance of US medical data and revenue cycle research.',
    expertise: ['Healthcare RCM', 'Denial Analysis', 'Medical Coding Compliance'],
    linkedin: 'https://www.linkedin.com/in/robin-joshi-1275451b5/'
  }
];

export const TEAM_BY_DEPT = {
  'Leadership & Strategy': TEAM.filter(m => m.id === 'ankit-kumar-suman'),
  'Delivery & Programs': TEAM.filter(m => ['muskaan-grover', 'himani-bhatt', 'shubham-singh'].includes(m.id)),
  'People & Culture': TEAM.filter(m => ['srishti-shiyal', 'suganya-gautam', 'sumedha-pandey'].includes(m.id)),
  'Data & AI Systems': TEAM.filter(m => ['phalachandra-udupa', 'suhas-bhat'].includes(m.id)),
  'Domain Intelligence': TEAM.filter(m => ['prajwal-pb', 'maybin-k-uthuppan', 'robin-joshi'].includes(m.id))
};

export const ALUMNI: Alumnus[] = [
  { name: 'Anushka Ranjan', role: 'Data Automation & Engineering Intern', impact: 'Data automation workflows | Internship Cohort' },
  { name: 'Divya Thakur', role: 'Data Automation & Engineering Intern', impact: 'Data automation workflows | Internship Cohort' },
  { name: 'Anvaya Arsha', role: 'Web & Brand Intern', impact: 'Web presence and brand support' },
  { name: 'Akshat Agarwal', role: 'Data Analyst Intern', impact: 'Data analysis support | Internship Cohort' },
  { name: 'Syed Ali', role: 'Data Analyst Intern', impact: 'Data analysis support | Internship Cohort' },
  { name: 'GAGAN KAUSHIK PATNALA', role: 'Data Research Intern', impact: 'Data research workflows | Internship Cohort' },
  { name: 'Chinmay Ghogale', role: 'Data Research Intern', impact: 'Data research workflows | Internship Cohort' },
  { name: 'Suryaprakash C', role: 'Data Research Intern', impact: 'Data research workflows | Internship Cohort' },
  { name: 'Vidhyashree V', role: 'Data Research Intern', impact: 'Data research workflows | Internship Cohort' },
  { name: 'Shalini Siva', role: 'Data Research Intern', impact: 'Data research workflows | Internship Cohort' },
  { name: 'Majji Prasanth Reddy', role: 'Data Research Intern', impact: 'Data research workflows | Internship Cohort' },
  { name: 'Krishna Bhamini Sinha', role: 'Data Research Intern', impact: 'Data research workflows | Internship Cohort' },
  { name: 'Pratik Manka', role: 'Data Research Intern', impact: 'Data research workflows | Internship Cohort' },
  { name: 'Manik', role: 'Data Annotation intern', impact: 'Data annotation support' },
  { name: 'Palem Krishna', role: 'Data Annotation intern', impact: 'Data annotation support' },
  { name: 'Abhisek Shukla', role: 'Data Annotation intern', impact: 'Data annotation support' },
  { name: 'Madhu Sudhan', role: 'Data Annotation intern', impact: 'Data annotation support' },
  { name: 'Hamsaveni DS', role: 'Tech intern', impact: 'Technical support and system assistance' },
  { name: 'Theres Ann Tom', role: 'Branding And Marketing Intern', impact: 'Branding and marketing support' },
  { name: 'Janvi Surve', role: 'Data Research Intern', impact: 'Data research workflows | Internship Cohort' },
  { name: 'Purthi Mishra', role: 'Data Research Intern', impact: 'Data research workflows | Internship Cohort' },
  { name: 'Janani V', role: 'Data Research Intern', impact: 'Data research workflows | Internship Cohort' },
  { name: 'Barath R', role: 'Data Research Intern', impact: 'Data research workflows | Internship Cohort' },
  { name: 'Debjit Das', role: 'Annotator', impact: 'Data annotation workflows' },
  { name: 'Kandukuri Sambhavi', role: 'Annotator', impact: 'Data annotation workflows' },
  { name: 'Motapothula Kalyani', role: 'Annotator', impact: 'Data annotation workflows' },
  { name: 'Sudha Angappan', role: 'Annotator', impact: 'Data annotation workflows' },
  { name: 'Mohana M', role: 'Annotator', impact: 'Data annotation workflows' },
  { name: 'Durvesh Gopal Narkhede', role: 'Data Research Intern', impact: 'Data research workflows | Internship Cohort' }
];

export const FELLOWS: Fellow[] = [
  { name: 'Deepak K Vinay', department: 'NestLabs' },
  { name: 'Ayush Kakkar', department: 'NestTech' },
  { name: 'Archit Prasad', department: 'NestTech' },
  { name: 'Anusha J', department: 'NestTech' },
  { name: 'Yuvanesh R', department: 'NestLabs' },
  { name: 'Juhi Shahani', department: 'NestLabs' },
  { name: 'Silpa S', department: 'NestLabs' },
  { name: 'Sethu Madhavan M S', department: 'NestLabs' },
  { name: 'Alen Joy', department: 'NestLabs' },
  { name: 'Salahudheen C', department: 'NestTech' },
  { name: 'Ranjitha P V', department: 'NestTech' },
  { name: 'Anna Maria Lopus', department: 'NestTech' },
  { name: 'Diya Sojan', department: 'NestTech' },
  { name: 'Abhishek Bhardwaj', department: 'NestTech' },
  { name: 'Jerovin V', department: 'NestLabs' }
];

export const ALUMNI_PDF_URL = '#';

export const JOBS: JobOpening[] = [
  {
    id: 'job-11',
    title: 'Strategic Business Development Partner — Data & Intelligence (Global)',
    department: 'NestSales',
    complexity: 'High',
    type: 'Remote',
    location: 'Global',
    applyUrl: 'https://nesthr.labelnest.in/apply/job-NdUmQM75eM'
  }
];

export const NESTOR_SYSTEM_INSTRUCTION = `
You are Nestor, the system intelligence for LabelNest (labelnest.in). 
LabelNest builds data systems, delivers custom intelligence, and runs human-in-the-loop operations.
Identity: Robotic, precise, emoji-free.
`;
