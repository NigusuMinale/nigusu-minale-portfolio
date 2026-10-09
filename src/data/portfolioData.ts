import { Project, SkillCategory, Experience, Education, Certification } from '../types';
import profileAvatar from '../assets/images/nih.jpg';

export const PERSONAL_INFO = {
  name: 'Nigusu Minale',
  title: 'Computer Engineering Student · Full-Stack & Security',
  tagline: 'Building secure systems, one commit at a time.',
  avatar: profileAvatar,
  email: 'nigusuminale@gmail.com',
  github: 'https://github.com/nigusuminale',
  linkedin: 'https://linkedin.com/in/nigusu-minale',
  location: 'Bahir Dar, Ethiopia (Open to Remote Worldwide)',
  status: 'Open to opportunities · Currently interning at INSA',
  yearsExperience: '1+',
  projectsCompleted: '6',
  bio: `Fourth-year Computer Engineering student at Bahir Dar University. I work in the PKI Development & Operations team at INSA, build full-stack web applications with React and Spring Boot, and have a focus on application security and cryptographic systems.`
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'pki-management-platform',
    title: 'pki-management-platform & PKI Certificate Suite',
    subtitle: 'PKI Certificate Management System',
    category: 'security',
    tags: ['Cyber Security', 'Spring Boot', 'Full Stack'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    description: 'PKI management tool built for INSA to automate X.509 certificate issuance and revocation checking. Implements mTLS mutual authentication, OpenSSL bindings for key management, and audit logging in PostgreSQL. Built with Spring Boot and Java.',
    longDescription: 'Developed as part of the PKI Development & Operations team at INSA. Features cryptographic key management, OpenSSL bindings, automated certificate generation, and an interactive management portal.',
    problemStatement: 'Manual PKI certificate rotation introduced security gaps and operational friction across microservice environments.',
    solutionArchitecture: 'Java Spring Boot & Node REST microservices with Spring Security, mTLS verification, OpenSSL cryptographic bindings, and PostgreSQL audit logging.',
    techStack: ['Spring Boot (Java)', 'Cyber Security', 'PKI Cryptography', 'JavaScript/TypeScript', 'OpenSSL', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://github.com/nigusuminale/pki-management-platform',
    githubUrl: 'https://github.com/nigusuminale/pki-management-platform',
    stars: 8,
    lastUpdated: 'July 2024'
  },
  {
    id: 'ethiopian-talent-sharing',
    title: 'Ethiopian Motivated & Skill Talent Sharing System',
    subtitle: 'Skill-Matching Platform for Ethiopian Engineers',
    category: 'fullstack',
    tags: ['Full Stack', 'Cyber Security'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    description: 'Skill-matching platform for Ethiopian engineers to showcase verified certifications and connect with organizations. Built with React, TypeScript, Node.js, and PostgreSQL. Includes role-based access control and secure direct messaging.',
    longDescription: 'Full-stack platform featuring skill verification badges, portfolio showcasing, secure direct messaging, and community mentorship scheduling.',
    problemStatement: 'Local Ethiopian talent needed a centralized, verified ecosystem to share skills and get discovered by organizations.',
    solutionArchitecture: 'Built with React and TypeScript, leveraging role-based security access controls, PostgreSQL relational storage, and real-time activity feeds.',
    techStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'JWT Security'],
    liveUrl: 'https://github.com/nigusuminale/Ethiopian-Motivated-and-Skill-Talent-Sharing-system',
    githubUrl: 'https://github.com/nigusuminale/Ethiopian-Motivated-and-Skill-Talent-Sharing-system',
    stars: 7,
    lastUpdated: 'July 2024'
  },
  {
    id: 'crypto-key-vault',
    title: 'crypto-key-vault',
    subtitle: 'Cryptographic Key Storage & Secrets Manager',
    category: 'security',
    tags: ['Cyber Security', 'Full Stack', 'Spring Boot'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    description: 'Key management service supporting AES-256-GCM encryption, RSA key pairs, and automatic rotation schedules. Provides a REST API for key generation and retrieval, with row-level encryption in the database and audit trails.',
    longDescription: 'Cryptographic key lifecycle management service. Provides RESTful key generation APIs, automatic key rotation schedules, and audit trails.',
    problemStatement: 'Sensitive API credentials and private cryptographic keys were vulnerable to leaks when stored in configuration files.',
    solutionArchitecture: 'Built in TypeScript and Node/Spring Boot with envelope encryption, memory-scrubbing buffers, and database row-level encryption.',
    techStack: ['TypeScript', 'Cyber Security', 'Cryptography', 'Node.js', 'Spring Boot', 'PostgreSQL'],
    liveUrl: 'https://github.com/nigusuminale/crypto-key-vault',
    githubUrl: 'https://github.com/nigusuminale/crypto-key-vault',
    stars: 6,
    lastUpdated: 'June 2024'
  },
  {
    id: 'event-management-system',
    title: 'event-management-system',
    subtitle: 'Event Discovery & Registration Platform',
    category: 'fullstack',
    tags: ['Full Stack'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    description: 'Web application for event listing, registration, and booking management. Users can register for events and cancel bookings; organizers have a dashboard for event creation and attendee tracking. Built with React and a Node/Express backend.',
    longDescription: 'Complete event lifecycle solution featuring user authentication, event creation dashboards for organizers, instant registration confirmation, and booking management tools.',
    problemStatement: 'Event organizers needed an intuitive platform to broadcast local tech meetups and manage registrations.',
    solutionArchitecture: 'Built with JavaScript, React, and Node REST API backend with relational event schemas and client-side cancellation modals.',
    techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB / PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://github.com/nigusuminale/event-management-system',
    githubUrl: 'https://github.com/nigusuminale/event-management-system',
    stars: 6,
    lastUpdated: 'June 2024'
  },
  {
    id: 'job-board-platform',
    title: 'Job-Board-Platform',
    subtitle: 'Job Posting & Application Tracking API',
    category: 'fullstack',
    tags: ['Full Stack', 'Cyber Security'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
    description: 'Python REST API for job posting and application tracking. Supports resume PDF uploads, full-text job search, role-based authorization (Recruiter vs Applicant), and status tracking endpoints.',
    longDescription: 'REST API service built in Python. Includes file upload sanitization for PDF resumes, full-text job search queries, role-based authorization, and status tracking.',
    problemStatement: 'Recruitment portals needed a backend API capable of handling secure file uploads and fast candidate searches.',
    solutionArchitecture: 'Developed using Python REST framework with secure file storage, token-based authentication, and indexed database queries for job filtering.',
    techStack: ['Python', 'Django / FastAPI', 'PostgreSQL', 'JWT Security', 'Docker'],
    liveUrl: 'https://github.com/nigusuminale/Job-Board-Platform',
    githubUrl: 'https://github.com/nigusuminale/Job-Board-Platform',
    stars: 5,
    lastUpdated: 'May 2024'
  },
  {
    id: 'e-learning-platform',
    title: 'e-learning Repository Platform',
    subtitle: 'Course Management System',
    category: 'fullstack',
    tags: ['Full Stack'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    description: 'Course management system for students and instructors. Features lesson navigation, assignment submission, instructor grading portal, and progress tracking. Built with JavaScript and React.',
    longDescription: 'Features modular lesson navigation, assignment submissions, instructor evaluation portals, and progress tracking indicators built with modern JavaScript and React.',
    problemStatement: 'Students and instructors needed a unified repository to submit coursework and track learning progress.',
    solutionArchitecture: 'Designed with clean JavaScript frontend modules, responsive grid layouts, and backend API endpoints for progress persistence.',
    techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'Tailwind CSS'],
    liveUrl: 'https://github.com/nigusuminale/e-learning',
    githubUrl: 'https://github.com/nigusuminale/e-learning',
    stars: 5,
    lastUpdated: 'May 2024'
  },
  {
    id: 'aether-ai-hub',
    title: 'AetherAI Hub',
    subtitle: 'AI Playground & Gemini Assistant',
    category: 'ai',
    tags: ['AI', 'Full Stack'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    description: 'AI playground that proxies requests to the Gemini API server-side to avoid exposing API keys on the client. Supports multi-turn chat, code generation, and prompt testing. Built with React 19, TypeScript, and an Express proxy server.',
    longDescription: 'Features server-side Gemini @google/genai API integrations, real-time code highlighting, and structured prompt engineering.',
    problemStatement: 'Developers needed a secure server-proxied playground to test Gemini API prompts.',
    solutionArchitecture: 'Built with React 19, Express server proxies, and Gemini 3.6 Flash streaming response handlers.',
    techStack: ['React 19', 'TypeScript', '@google/genai', 'Express', 'Tailwind CSS'],
    liveUrl: 'https://ais-dev-5i4y2ropo6xhlmsvbzzgat-419045425515.europe-west3.run.app',
    githubUrl: 'https://github.com/nigusuminale/aether-ai-hub',
    stars: 9,
    lastUpdated: 'July 2024'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    iconName: 'Layout',
    skills: [
      { name: 'React 18 / 19', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'Next.js', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'State Management (Zustand/Redux)' },
      { name: 'Framer Motion' },
      { name: 'Recharts & Data Visualization' }
    ]
  },
  {
    title: 'Backend & Cloud',
    iconName: 'Server',
    skills: [
      { name: 'Node.js & Express', highlight: true },
      { name: 'Spring Boot (Java)', highlight: true },
      { name: 'Python (FastAPI & Django)', highlight: true },
      { name: 'PostgreSQL & SQL', highlight: true },
      { name: 'REST & GraphQL APIs' },
      { name: 'Redis Caching & PubSub' },
      { name: 'Docker & Kubernetes' },
      { name: 'GCP & AWS Cloud Run' }
    ]
  },
  {
    title: 'AI & Generative',
    iconName: 'Sparkles',
    skills: [
      { name: 'Gemini API (@google/genai)', highlight: true },
      { name: 'LLM Prompt Engineering', highlight: true },
      { name: 'RAG Architecture & Embeddings' },
      { name: 'Vector Databases (Pinecone/Chroma)' },
      { name: 'AI Audio & Vision' }
    ]
  },
  {
    title: 'Engineering & DevOps',
    iconName: 'Terminal',
    skills: [
      { name: 'CI/CD Pipelines (GitHub Actions)' },
      { name: 'Git & Agile Workflows' },
      { name: 'Jest & Playwright Testing' },
      { name: 'System Architecture & Design Patterns' }
    ]
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: 'exp-insa-intern',
    role: 'PKI (Public Key Infrastructure) Development & Operations Intern',
    company: 'INSA (Information Network Security Agency)',
    location: 'Bahir Dar / Addis Ababa, Ethiopia',
    type: 'Internship',
    period: '2024 — Present',
    current: true,
    description: 'Working in the PKI Development & Operations department on public key infrastructure protocols, cryptographic key management pipelines, and DevSecOps integrations.',
    achievements: [
      'Built PKI certificate lifecycle management automation tools and cryptographic verification pipelines.',
      'Configured secure Java Spring Boot and Node microservices with TLS/mTLS authentication and role-based access controls.',
      'Collaborated with security architects to audit application cryptographic protocols against vulnerabilities.'
    ],
    technologies: ['Spring Boot (Java)', 'PKI Cryptography', 'DevSecOps', 'OpenSSL', 'Docker', 'PostgreSQL', 'Linux']
  },
  {
    id: 'exp-insa-talent',
    role: 'Cyber Security Engineer',
    company: 'INSA Cyber Talent Group',
    location: 'Bahir Dar / Addis Ababa, Ethiopia',
    type: 'Fellowship',
    period: '2023 — Present',
    current: true,
    description: 'Member of the INSA Cyber Talent Group, focusing on vulnerability research, secure coding practices, and defensive security architectures.',
    achievements: [
      'Participated in threat modeling, penetration testing, and secure code review for web applications and backend APIs.',
      'Built custom security auditing tools for automated API vulnerability detection and OAuth 2.0/OIDC validation.'
    ],
    technologies: ['Cyber Security', 'Network Security', 'Penetration Testing', 'Python', 'Spring Boot', 'Linux']
  },
  {
    id: 'exp-fullstack-dev',
    role: 'Full-Stack & AI Software Developer',
    company: 'Tech Solutions & Freelance Engineering',
    location: 'Bahir Dar, Ethiopia / Remote',
    type: 'Full-time',
    period: '2022 — Present',
    current: true,
    description: 'Building web applications, interactive dashboards, and AI integrations using React, Spring Boot, Node.js, and Google Gemini API.',
    achievements: [
      'Built full-stack React and Spring Boot web platforms with real-time analytics and responsive design.',
      'Integrated AI models for automated code and data analysis.'
    ],
    technologies: ['React', 'TypeScript', 'Spring Boot (Java)', 'Node.js', 'PostgreSQL', 'Gemini API', 'Tailwind CSS']
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu-1',
    degree: 'B.S. in Computer Engineering (4th Year Candidate)',
    institution: 'Higher Education Engineering Faculty',
    period: '2022 — Present (4th Year)',
    location: 'Bahir Dar, Ethiopia',
    honors: 'Specialization in Software Systems, Cyber Security, and AI Development'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-udacity',
    title: 'Data Science & AI Programming Certification',
    issuer: 'Udacity / EthioCoder',
    issueDate: '2024',
    category: 'ai',
    description: 'Certification covering Python for Data Science, Machine Learning fundamentals, Neural Networks, PyTorch, and Google Gemini LLM API integrations.',
    skills: ['Python', 'Data Science', 'Machine Learning', 'Gemini API', 'PyTorch', 'Data Visualization'],
    verificationUrl: 'https://www.udacity.com/certificate/verify'
  },
  {
    id: 'cert-safaricom-gebeya',
    title: 'Data Security & Full Stack Development Certification',
    issuer: 'Safaricom & Gebeya Talent Academy',
    issueDate: '2024',
    category: 'fullstack',
    description: 'Specialized intensive program on enterprise web application security, REST API encryption standards, secure full-stack React/Node architecture, and database hardening.',
    skills: ['Full Stack Web Dev', 'Data Security', 'React & TypeScript', 'Node.js Security', 'OAuth2 / JWT', 'PostgreSQL'],
    verificationUrl: 'https://gebeya.com/certificates'
  },
  {
    id: 'cert-insa-cyber',
    title: 'Cyber Security & DevSecOps Specialist',
    issuer: 'INSA Cyber Talent Group',
    issueDate: '2023',
    category: 'security',
    description: 'Technical certification for offensive and defensive security expertise, ethical hacking, secure API design, and vulnerability research.',
    skills: ['Cyber Security', 'Penetration Testing', 'DevSecOps', 'Network Auditing', 'Python Exploit Analysis', 'Linux Hardening'],
    verificationUrl: 'https://www.insa.gov.et'
  },
  {
    id: 'cert-insa-pki',
    title: 'PKI & Cryptographic Engineering Certification',
    issuer: 'INSA PKI Development & Operations',
    issueDate: '2024',
    category: 'security',
    description: 'Advanced credential in Public Key Infrastructure (PKI), TLS/mTLS mutual authentication, X.509 certificate lifecycle management, and Java Spring Boot cryptographic microservices.',
    skills: ['PKI Infrastructure', 'X.509 Certificates', 'OpenSSL', 'Spring Security', 'Java Cryptography', 'DevSecOps'],
    verificationUrl: 'https://www.insa.gov.et'
  }
];

export const RECOMMENDED_PROMPT_CHIPS = [
  'What is Nigusu’s core tech stack?',
  'Tell me about his recent AI projects.',
  'Is Nigusu open for remote full-time roles?',
  'What is Nigusu’s education & experience background?'
];
