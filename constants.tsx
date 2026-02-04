
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
    id: 'br-1',
    title: 'Private Market Resilience 2024',
    summary: 'Infrastructure debt funds activity shifts.',
    date: 'Aug 12, 2024',
    scope: 'Market',
    tags: ['Finance'],
    readTime: '10 min',
    isFeatured: true
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'ankit-kumar-suman',
    name: 'Ankit Kumar Suman',
    role: 'Founder & Director',
    bio: 'Ankit Suman founded LabelNest to solve the structural gaps in data trust, bringing extensive experience in private market research and large-scale operations.',
    expertise: ['System Architecture', 'Intelligence Strategy', 'Leadership'],
    linkedin: 'https://www.linkedin.com/in/ankit-kumar-suman-29159b146/'
  },
  {
    id: 'muskaan-grover',
    name: 'Muskaan Grover',
    role: 'Associate Project Manager',
    bio: 'I am an Associate Project Manager working in a full Project Manager role, leading across multi-workflow annotation and evaluation projects. I specialize in structured execution, streamlined operations, and coordinating large teams across multiple workflows. With a strong technical foundation, I ensure quality-driven delivery and smooth project management end to end.',
    expertise: ['Operations Management', 'Team Coordination', 'Quality Assurance'],
    linkedin: 'https://www.linkedin.com/in/muskaan0026/'
  },
  {
    id: 'himani-bhatt',
    name: 'Himani Bhatt',
    role: 'Analyst - Project Management',
    bio: 'I am an Analyst Project Manager at LabelNest, responsible for driving strategic collaborations and expanding the company\'s partner network. I work closely with vendors and companies to initiate meaningful conversations. With a strong focus on communication, execution, and relationship management, I aim to create opportunities that deliver clear value for both partners and the organization.',
    expertise: ['Strategic Outreach', 'Stakeholder Management', 'Partnership Development'],
    linkedin: 'https://www.linkedin.com/in/himani-bhatt-98b7a0261/'
  },
  {
    id: 'srishti-shiyal',
    name: 'Srishti Shiyal',
    role: 'HR Analyst - I',
    bio: 'Srishti is an experienced HR professional specializing in recruitment, talent acquisition, and people operations. With an MBA in HR and Finance, she brings a strong people-first approach to building high-performing teams.',
    expertise: ['Recruitment', 'People Operations', 'HRMS Management'],
    linkedin: 'https://www.linkedin.com/in/srishti5291/'
  },
  {
    id: 'suganya-gautam',
    name: 'Suganya Gautam',
    role: 'HR Analyst - I',
    bio: 'HR Analyst-I with hands-on experience in HR operations, onboarding, stakeholder management, and people data management. I am contributing to structured and scalable HR processes at LabelNest.',
    expertise: ['Onboarding', 'Process Documentation', 'Stakeholder Management'],
    linkedin: 'https://www.linkedin.com/in/suganya-gautam-a37b0262/'
  },
  {
    id: 'sumedha-pandey',
    name: 'Sumedha Pandey',
    role: 'HR Analyst - I',
    bio: 'HR Analyst-I at LabelNest, working across HR operations and internal systems to support structure people processes in a fast-growing organization. Interested in building efficient, people-first HR frameworks that scale with the business.',
    expertise: ['Internal Systems', 'HR Process Management', 'Support Frameworks'],
    linkedin: 'https://www.linkedin.com/in/sumedha-pandey/'
  },
  {
    id: 'phalachandra-udupa',
    name: 'Phalachandra Udupa',
    role: 'Data & Annotation Intern',
    bio: 'I am working as a Data Research and Annotation intern. I collect data from the different sources and further research about it for the correctness of the data collected.',
    expertise: ['Data Collection', 'Image Analysis', 'Microsoft SharePoint'],
    linkedin: 'https://www.linkedin.com/in/phalachandra/'
  },
  {
    id: 'suhas-bhat',
    name: 'Suhas Bhat',
    role: 'Data Research Intern',
    bio: 'I am a motivated AI & Data Science professional currently pursuing my M.Tech, with strong expertise in image processing, machine learning, and deep learning. I have hands-on experience in developing AI-based models for image analysis, computer vision, and data-driven applications using Python and deep learning frameworks.',
    expertise: ['Machine Learning', 'Deep Learning', 'Python Programming'],
    linkedin: 'https://www.linkedin.com/in/suhas-bhat-7a616322a/'
  },
  {
    id: 'prajwal-pb',
    name: 'Prajwal PB',
    role: 'Data Annotation Specialist',
    bio: 'I am a Data Annotation Specialist & Quality Operations professional with 5.5+ years of experience delivering high-accuracy datasets for autonomous driving, ADAS, and mobility AI systems. My strengths lie in process design, quality governance, and people leadership, enabling me to bridge execution and strategy.',
    expertise: ['Mobility AI', 'ADAS Data Strategy', 'Quality Governance'],
    linkedin: 'https://www.linkedin.com/in/prajwal-pb-6a0637225/'
  },
  {
    id: 'shubham-singh',
    name: 'Shubham Singh',
    role: 'Junior Coordinator',
    bio: 'Junior Coordinator supporting delivery and programs at LabelNest with a focus on project logistics and operational support.',
    expertise: ['Program Delivery', 'Logistics Coordination', 'Operational Support'],
    linkedin: 'https://www.linkedin.com/in/shubham-singh/'
  },
  {
    id: 'maybin-k-uthuppan',
    name: 'MAYBIN K UTHUPPAN',
    role: 'Agronomy Research Analyst',
    bio: 'I am an Agronomist with a Master\'s degree in Agriculture (Agronomy) and professional experience across agricultural education, research, and practical crop production systems. I am passionate about advancing sustainable agriculture through research and data-driven decision making.',
    expertise: ['Agronomy Research', 'Systems Training', 'Knowledge Transfer'],
    linkedin: 'https://www.linkedin.com/in/maybin-k-uthuppan-835320282/'
  },
  {
    id: 'robin-joshi',
    name: 'Robin Joshi',
    role: 'Data Annotation Specialist',
    bio: 'Hi my name is Robin and I am a US Healthcare Specialist with over 3 years of experience in Revenue Cycle Management (RCM), specializing in charge posting, patient demographics, and denial analysis. I have a strong command of CPT, ICD-10, and HCPCS coding standards.',
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
    id: 'job-1',
    title: 'Data Research',
    department: 'Data',
    complexity: 'Medium',
    type: 'Remote',
    location: 'Anywhere in India',
    applyUrl: 'mailto:hr@labelnest.in'
  }
];

export const NESTOR_SYSTEM_INSTRUCTION = `
You are Nestor, the system intelligence for LabelNest (labelnest.in). 
LabelNest builds data systems, delivers custom intelligence, and runs human-in-the-loop operations.
Identity: Robotic, precise, emoji-free.
`;
