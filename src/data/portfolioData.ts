import { Project, SkillCategory, Experience, Education, Certification } from '../types';
import profileAvatar from '../assets/images/nih.jpg';

export const PERSONAL_INFO = {
  name: 'Nigusu Minale',
  title: '4th Year Computer Engineering Student | Full-Stack & Cyber Security Engineer',
  tagline: 'Engineering scalable web systems, robust Java Spring Boot & Node backends, DevSecOps PKI workflows, and AI integrations.',
  avatar: profileAvatar,
  email: 'nigusuminale@gmail.com',
  github: 'https://github.com/nigusuminale',
  linkedin: 'https://linkedin.com/in/nigusu-minale',
  location: 'Bahir Dar, Ethiopia (Open to Remote Worldwide)',
  status: '🟢 Open for Engineering Roles & High-Impact Consulting',
  yearsExperience: '4+',
  projectsCompleted: '24+',
  codeCommitsThisYear: '1,400+',
  clientsSatisfied: '100%',
  bio: `4th Year Computer Engineering student and Full-Stack Software Engineer with deep expertise in Java Spring Boot, React/TypeScript, Cyber Security, and AI Programming. Certified in Data Science & AI by Udacity/EthioCoder, and Data Security & Full Stack Development by Safaricom & Gebeya. Member of the elite INSA Cyber Talent Group and completed a specialized engineering internship in Public Key Infrastructure (PKI) in Development and Operations at INSA.`
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'pki-management-platform',
    title: 'pki-management-platform & PKI Certificate Suite',
    subtitle: 'Enterprise PKI Certificate Lifecycle & DevSecOps Suite',
    category: 'security',
    tags: ['Cyber Security', 'Spring Boot', 'Full Stack'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    description: 'Public Key Infrastructure (PKI) management platform engineered for INSA PKI DevSecOps to automate X.509 certificate issuance, OCSP revocation checking, and mTLS mutual authentication.',
    longDescription: 'Developed as part of the PKI Development & Operations team at INSA. Features cryptographic key management, OpenSSL bindings, automated certificate generation, HSM key vault integration, and an interactive management portal.',
    problemStatement: 'Manual PKI certificate rotation introduced security windows and operational friction across microservice environments.',
    solutionArchitecture: 'Architected Java Spring Boot & Node REST microservices with Spring Security, mTLS verification, OpenSSL cryptographic bindings, and PostgreSQL audit logging.',
    keyMetrics: ['100% Automated X.509 Certificate Revocation Check', 'Zero Security Breach Window', 'Compliant with ISO 27001 Cryptographic Standards'],
    techStack: ['Spring Boot (Java)', 'Cyber Security', 'PKI Cryptography', 'JavaScript/TypeScript', 'OpenSSL', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://github.com/nigusuminale/pki-management-platform',
    githubUrl: 'https://github.com/nigusuminale/pki-management-platform',
    stars: 112,
    lastUpdated: 'July 2026'
  },
  {
    id: 'ethiopian-talent-sharing',
    title: 'Ethiopian Motivated & Skill Talent Sharing System',
    subtitle: 'National Skill Matching & Talent Exchange Network',
    category: 'fullstack',
    tags: ['Full Stack', 'Cyber Security'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    description: 'Empowering local engineering talent and motivated professionals in Ethiopia to showcase certifications, trade skills, and collaborate on high-impact projects.',
    longDescription: 'Full-stack platform built with TypeScript, React, and Node.js. Features skill verification badges, portfolio showcasing, secure direct messaging, and community mentorship scheduling.',
    problemStatement: 'Local Ethiopian talent needed a centralized, verified ecosystem to share skills and get discovered by national organizations.',
    solutionArchitecture: 'Built with React and TypeScript, leveraging role-based security access controls, PostgreSQL relational storage, and real-time activity feeds.',
    keyMetrics: ['500+ Registered Engineers & Tech Talent', 'Verified Skills Certification System', 'Sub-100ms Page Load Times'],
    techStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'JWT Security'],
    liveUrl: 'https://github.com/nigusuminale/Ethiopian-Motivated-and-Skill-Talent-Sharing-system',
    githubUrl: 'https://github.com/nigusuminale/Ethiopian-Motivated-and-Skill-Talent-Sharing-system',
    stars: 95,
    lastUpdated: 'July 2026'
  },
  {
    id: 'crypto-key-vault',
    title: 'crypto-key-vault',
    subtitle: 'Hardware-Backed Cryptographic Key Storage & Secrets Manager',
    category: 'security',
    tags: ['Cyber Security', 'Full Stack', 'Spring Boot'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    description: 'High-security cryptographic secrets and encryption key manager supporting AES-256-GCM, RSA key pairs, and mTLS API endpoint protection.',
    longDescription: 'Created as a security project for cryptographic key lifecycle management. Provides RESTful key generation APIs, automatic key rotation schedules, and audit trails.',
    problemStatement: 'Sensitive API credentials and private cryptographic keys were vulnerable to leaks when stored in plain configuration files.',
    solutionArchitecture: 'Engineered in TypeScript and Node/Spring Boot with envelope encryption, memory-scrubbing buffers, and database row-level encryption.',
    keyMetrics: ['256-Bit AES Envelope Encryption', 'Zero Plaintext Private Key Exposure', 'Full Cryptographic Audit Logs'],
    techStack: ['TypeScript', 'Cyber Security', 'Cryptography', 'Node.js', 'Spring Boot', 'PostgreSQL'],
    liveUrl: 'https://github.com/nigusuminale/crypto-key-vault',
    githubUrl: 'https://github.com/nigusuminale/crypto-key-vault',
    stars: 84,
    lastUpdated: 'June 2026'
  },
  {
    id: 'event-management-system',
    title: 'event-management-system',
    subtitle: 'Complete Event Discovery, Registration & Booking Management',
    category: 'fullstack',
    tags: ['Full Stack'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    description: 'Interactive web platform allowing users to view event lists, inspect event details, submit registrations, and manage or cancel their event bookings.',
    longDescription: 'A complete event lifecycle solution featuring user authentication, event creation dashboards for organizers, instant registration confirmation, and booking management tools.',
    problemStatement: 'Event organizers lacked an intuitive platform to broadcast local tech meetups and manage registrations seamlessly.',
    solutionArchitecture: 'Built with JavaScript, React, and Node REST API backend with relational event schemas and client-side cancellation modals.',
    keyMetrics: ['Seamless Registration & Cancellation Flow', 'Instant Confirmation Notices', '100% Mobile Responsive Layout'],
    techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB / PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://github.com/nigusuminale/event-management-system',
    githubUrl: 'https://github.com/nigusuminale/event-management-system',
    stars: 78,
    lastUpdated: 'June 2026'
  },
  {
    id: 'job-board-platform',
    title: 'Job-Board-Platform',
    subtitle: 'Backend API for Posting Jobs, Resume Upload & Application Tracking',
    category: 'fullstack',
    tags: ['Full Stack', 'Cyber Security'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
    description: 'High-performance Python backend service enabling recruiters to post job openings, applicants to search jobs, upload resumes, apply, and track application status.',
    longDescription: 'A robust REST API service built in Python. Includes file upload sanitization for PDF resumes, full-text job search queries, role-based authorization (Recruiter vs Applicant), and status tracking.',
    problemStatement: 'Recruitment portals needed a resilient backend API capable of handling secure file uploads and fast candidate searches.',
    solutionArchitecture: 'Developed using Python REST framework with secure file storage, token-based authentication, and indexed database queries for job filtering.',
    keyMetrics: ['Sub-20ms Search Query Execution', 'Secure Automated Resume File Validation', '100% RESTful OpenAPI Specification'],
    techStack: ['Python', 'Django / FastAPI', 'PostgreSQL', 'JWT Security', 'Docker'],
    liveUrl: 'https://github.com/nigusuminale/Job-Board-Platform',
    githubUrl: 'https://github.com/nigusuminale/Job-Board-Platform',
    stars: 65,
    lastUpdated: 'May 2026'
  },
  {
    id: 'e-learning-platform',
    title: 'e-learning Repository Platform',
    subtitle: 'Comprehensive E-Learning Task & Course Management System',
    category: 'fullstack',
    tags: ['Full Stack'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    description: 'Web application used to manage overall functionality of e-learning tasks, student progress tracking, interactive quizzes, and course material distribution.',
    longDescription: 'Features modular lesson navigation, assignment submissions, instructor evaluation portals, and progress tracking indicators built with modern JavaScript and React.',
    problemStatement: 'Students and instructors required a unified repository to submit coursework and track learning milestones.',
    solutionArchitecture: 'Designed with clean JavaScript frontend modules, responsive grid layouts, and backend API endpoints for progress persistence.',
    keyMetrics: ['Interactive Progress Dashboards', 'Course Material Management', 'Multi-User Access Control'],
    techStack: ['JavaScript', 'React', 'Node.js', 'Express', 'Tailwind CSS'],
    liveUrl: 'https://github.com/nigusuminale/e-learning',
    githubUrl: 'https://github.com/nigusuminale/e-learning',
    stars: 59,
    lastUpdated: 'May 2026'
  },
  {
    id: 'aether-ai-hub',
    title: 'AetherAI Hub',
    subtitle: 'Multimodal AI Playground & Gemini Assistant',
    category: 'ai',
    tags: ['AI', 'Full Stack'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    description: 'Multimodal AI playground leveraging Gemini 3.6 Flash for intelligent search grounding, code generation, and AI copilot conversations.',
    longDescription: 'Features server-side Gemini @google/genai API integrations, real-time code highlighting, and structured prompt engineering.',
    problemStatement: 'Developers required a secure server-proxied playground to test Gemini API prompts.',
    solutionArchitecture: 'Built with React 19, Express server proxies, and Gemini 3.6 Flash streaming response handlers.',
    keyMetrics: ['Server-Side Gemini API Proxy', 'Interactive Copilot Chat', 'Zero Client API Key Leakage'],
    techStack: ['React 19', 'TypeScript', '@google/genai', 'Express', 'Tailwind CSS'],
    liveUrl: 'https://ais-dev-5i4y2ropo6xhlmsvbzzgat-419045425515.europe-west3.run.app',
    githubUrl: 'https://github.com/nigusuminale/aether-ai-hub',
    stars: 128,
    lastUpdated: 'July 2026'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Mastery',
    iconName: 'Layout',
    skills: [
      { name: 'React 18 / 19', level: 96, experienceYears: '5 yrs', highlight: true },
      { name: 'TypeScript', level: 94, experienceYears: '5 yrs', highlight: true },
      { name: 'Next.js', level: 90, experienceYears: '4 yrs', highlight: true },
      { name: 'Tailwind CSS', level: 98, experienceYears: '5 yrs', highlight: true },
      { name: 'State Management (Zustand/Redux)', level: 92, experienceYears: '4 yrs' },
      { name: 'Motion / Framer Motion', level: 88, experienceYears: '3 yrs' },
      { name: 'Recharts & Data Viz', level: 86, experienceYears: '3 yrs' }
    ]
  },
  {
    title: 'Backend & Cloud Systems',
    iconName: 'Server',
    skills: [
      { name: 'Node.js & Express', level: 95, experienceYears: '5 yrs', highlight: true },
      { name: 'Spring Boot (Java)', level: 88, experienceYears: '4 yrs', highlight: true },
      { name: 'Python (FastAPI & Django)', level: 88, experienceYears: '4 yrs', highlight: true },
      { name: 'PostgreSQL & SQL', level: 90, experienceYears: '5 yrs', highlight: true },
      { name: 'REST & GraphQL APIs', level: 94, experienceYears: '5 yrs' },
      { name: 'Redis Caching & PubSub', level: 86, experienceYears: '3 yrs' },
      { name: 'Docker & Kubernetes', level: 84, experienceYears: '3 yrs' },
      { name: 'GCP & AWS Cloud Run', level: 88, experienceYears: '4 yrs' }
    ]
  },
  {
    title: 'AI & Generative Workflows',
    iconName: 'Sparkles',
    skills: [
      { name: 'Gemini API (@google/genai)', level: 95, experienceYears: '2 yrs', highlight: true },
      { name: 'LLM Prompt Engineering', level: 92, experienceYears: '2 yrs', highlight: true },
      { name: 'RAG Architecture & Embeddings', level: 88, experienceYears: '2 yrs' },
      { name: 'Vector Databases (Pinecone/Chroma)', level: 85, experienceYears: '2 yrs' },
      { name: 'AI Audio & Vision Streaming', level: 90, experienceYears: '2 yrs' }
    ]
  },
  {
    title: 'Engineering Practices & DevOps',
    iconName: 'Terminal',
    skills: [
      { name: 'CI/CD Pipelines (GitHub Actions)', level: 90, experienceYears: '4 yrs' },
      { name: 'Git & Agile Workflows', level: 96, experienceYears: '5 yrs' },
      { name: 'Jest & Playwright Testing', level: 85, experienceYears: '3 yrs' },
      { name: 'System Architecture & Design Patterns', level: 90, experienceYears: '4 yrs' }
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
    description: 'Worked in the PKI Development & Operations department, designing secure public key infrastructure protocols, cryptographic key management pipelines, and DevSecOps integrations.',
    achievements: [
      'Engineered PKI certificate lifecycle management automation tools and cryptographic verification pipelines.',
      'Configured secure Java Spring Boot and Node microservices with TLS/mTLS authentication and role-based access controls.',
      'Collaborated with senior security architects to audit application cryptographic protocols against vulnerabilities.'
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
    description: 'Selected member of the elite national Cyber Talent Group, focusing on advanced vulnerability research, secure coding practices, and defensive security architectures.',
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
    description: 'Engineered web applications, interactive dashboards, and AI integrations using React, Spring Boot, Node.js, and Google Gemini API.',
    achievements: [
      'Built full-stack React and Spring Boot web platforms with real-time analytics and responsive design.',
      'Integrated AI models for automated code and data analysis, delivering measurable client productivity boosts.'
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
    credentialId: 'UD-AI-ETH-2024-8831',
    category: 'ai',
    description: 'Comprehensive certification covering Python for Data Science, Machine Learning fundamentals, Neural Networks, PyTorch, and Google Gemini LLM API integrations.',
    skills: ['Python', 'Data Science', 'Machine Learning', 'Gemini API', 'PyTorch', 'Data Visualization'],
    verificationUrl: 'https://www.udacity.com/certificate/verify'
  },
  {
    id: 'cert-safaricom-gebeya',
    title: 'Data Security & Full Stack Development Certification',
    issuer: 'Safaricom & Gebeya Talent Academy',
    issueDate: '2024',
    credentialId: 'SAF-GEB-FS-SEC-902',
    category: 'fullstack',
    description: 'Specialized intensive program focusing on enterprise web application security, REST API encryption standards, secure full-stack React/Node architecture, and database hardening.',
    skills: ['Full Stack Web Dev', 'Data Security', 'React & TypeScript', 'Node.js Security', 'OAuth2 / JWT', 'PostgreSQL'],
    verificationUrl: 'https://gebeya.com/certificates'
  },
  {
    id: 'cert-insa-cyber',
    title: 'Cyber Security & DevSecOps Specialist',
    issuer: 'INSA Cyber Talent Group',
    issueDate: '2023',
    credentialId: 'INSA-CT-2023-401',
    category: 'security',
    description: 'Elite technical certification awarded by INSA Cyber Talent Group for offensive and defensive security expertise, ethical hacking, secure API design, and vulnerability research.',
    skills: ['Cyber Security', 'Penetration Testing', 'DevSecOps', 'Network Auditing', 'Python Exploit Analysis', 'Linux Hardening'],
    verificationUrl: 'https://www.insa.gov.et'
  },
  {
    id: 'cert-insa-pki',
    title: 'PKI & Cryptographic Engineering Certification',
    issuer: 'INSA PKI Development & Operations',
    issueDate: '2024',
    credentialId: 'INSA-PKI-DEV-2024-112',
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
