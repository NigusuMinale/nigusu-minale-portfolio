export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | 'ai' | 'cloud' | 'mobile' | 'security' | 'springboot';
  tags?: string[];
  featured: boolean;
  image: string;
  description: string;
  longDescription: string;
  problemStatement: string;
  solutionArchitecture: string;
  keyMetrics: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  stars?: number;
  lastUpdated?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1-100
    experienceYears: string;
    highlight?: boolean;
    icon?: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote' | 'Internship' | 'Fellowship';
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  honors?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  skills?: string[];
  badgeUrl?: string;
  description?: string;
  category?: 'ai' | 'security' | 'fullstack';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
