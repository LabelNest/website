
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  whyItExists: string;
  features: string[];
  capabilities: { title: string; desc: string }[];
  useCases: string[];
  connections: { system: string; desc: string }[];
  outputs: string[];
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  supportingLine?: string;
  builtWith: string[];
  capabilities: string[];
  useCaseText?: string;
}

export interface LabService {
  id: string;
  title: string;
  description: string;
  includes: string[];
}

export interface LabExperiment {
  id: string;
  category: 'Experiments' | 'Methodologies' | 'System Notes';
  title: string;
  excerpt: string;
  description?: string;
  status: 'Alpha' | 'Beta' | 'Archived' | 'Public';
  readTime: string;
  problemStatement?: string;
  reasoning?: string;
  implications?: string;
}

export interface Briefing {
  id: string;
  title: string;
  summary: string;
  date: string;
  scope: string; // Market / Sector / Theme
  tags: string[];
  readTime: string;
  isFeatured?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image?: string;
  linkedin?: string;
}

export interface Alumnus {
  name: string;
  role: string;
  impact: string;
}

export interface Fellow {
  name: string;
  department: 'NestLabs' | 'NestTech';
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  complexity: 'Low' | 'Medium' | 'Moderate' | 'High' | 'Critical';
  type: 'Full-time' | 'Remote' | 'Hybrid' | 'Contract';
  location: string;
  applyUrl?: string;
}
