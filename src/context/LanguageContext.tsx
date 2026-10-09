import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'am';

export interface Translations {
  nav: {
    about: string;
    projects: string;
    skills: string;
    certificates: string;
    copilot: string;
    experience: string;
    contact: string;
    resume: string;
    hireMe: string;
  };
  hero: {
    status: string;
    role: string;
    greeting: string;
    location: string;
    viewProjects: string;
    contactMe: string;
    downloadCV: string;
    bio: string;
  };
  sections: {
    projectsTitle: string;
    projectsSub: string;
    skillsTitle: string;
    skillsSub: string;
    certTitle: string;
    certSub: string;
    copilotTitle: string;
    copilotSub: string;
    experienceTitle: string;
    experienceSub: string;
    contactTitle: string;
    contactSub: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      certificates: 'Certificates',
      copilot: 'AI Copilot',
      experience: 'Experience',
      contact: 'Contact',
      resume: 'Resume',
      hireMe: 'Hire Nigusu'
    },
    hero: {
      status: 'Open to opportunities in software engineering',
      role: 'Computer Engineer | Full-Stack & AI Software Developer',
      greeting: "Hello, I'm Nigusu Minale",
      location: 'Bahir Dar, Ethiopia (Open to Remote Worldwide)',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      downloadCV: 'Download Resume',
      bio: '4th-year Computer Engineering student. Interning in PKI Development & Operations at INSA, building full-stack web apps and working on cryptographic security systems.'
    },
    sections: {
      projectsTitle: 'Projects',
      projectsSub: 'Full-stack projects spanning security, platforms, and AI integrations.',
      skillsTitle: 'Technical Skills',
      skillsSub: 'Languages, frameworks, and tools I work with regularly.',
      certTitle: 'Certifications',
      certSub: 'Formal credentials from industry programs.',
      copilotTitle: 'Ask the AI Copilot',
      copilotSub: 'An AI assistant that can answer questions about my background and projects.',
      experienceTitle: 'Experience & Education',
      experienceSub: 'Internship at INSA, fellowship with the Cyber Talent Group, and studies in Computer Engineering.',
      contactTitle: 'Get in Touch',
      contactSub: 'Send a message directly — responses typically within 24 hours.'
    }
  },
  am: {
    nav: {
      about: 'ስለ እኔ',
      projects: 'ፕሮጀክቶች',
      skills: 'ክህሎቶች',
      certificates: 'ሰርተፊኬቶች',
      copilot: 'AI ረዳት',
      experience: 'ልምድና ትምህርት',
      contact: 'ያግኙኝ',
      resume: 'ቪታ (CV)',
      hireMe: 'ንጉሱይን ይቅጠሩ'
    },
    hero: {
      status: '🟢 ለሶፍትዌር፡ አርቲፊሻል ኢንተሊጀንስ እና ደህንነት ስራዎች ዝግጁ',
      role: 'ኮምፒውተር ኢንጂነር | ፉል-ስታክ እና AI ሶፍትዌር አልሚ',
      greeting: 'ሰላም፡ እኔ ንጉሱ ሚናለ ነኝ',
      location: 'ባህር ዳር፡ ኢትዮጵያ (በሩቅ/ሪሞት ለመስራት ዝግጁ)',
      viewProjects: 'ፕሮጀክቶችን ይመልከቱ',
      contactMe: 'አሁኑኑ ያግኙኝ',
      downloadCV: 'ቪታ (CV) ያውርዱ',
      bio: 'የ4ኛ ዓመት የኮምፒውተር ኢንጂነሪንግ ተማሪ። በሳይበር ደህንነት (Cyber Security)፡ PKI መሠረተ ልማት፡ ፉል-ስታክ ሶፍትዌር እና አርቲፊሻል ኢንተሊጀንስ (AI) ልማት ላይ የተካነ።'
    },
    sections: {
      projectsTitle: 'ዋና ዋና የኢንጂነሪንግ ፕሮጀክቶች',
      projectsSub: 'በPKI ደህንነት፡ የክህሎት ማጋሪያ፡ የክስተቶች ማኔጅመንት፡ የሥራ ማስታወቂያ እና AI ቴክኖሎጂዎች ላይ የተሰሩ ፕሮጀክቶች።',
      skillsTitle: 'የቴክኒክ ክህሎቶች እና አርክቴክቸር',
      skillsSub: 'በፉል-ስታክ ዌብ፡ ሳይበር ደህንነት፡ PKI ክሪፕቶግራፊ፡ AI ሞዴሎች እና ማይክሮሰርቪስ ላይ ያሉ አጠቃላይ ክህሎቶች።',
      certTitle: 'የተረጋገጡ የሙያ ሰርተፊኬቶች',
      certSub: 'በዳታ ሳይንስ፡ AI ፕሮግራሚንግ፡ ሳይበር ደህንነት፡ ፉል-ስታክ ሶፍትዌር እና በINSA PKI የተረጋገጡ ምስክር ወረቀቶች።',
      copilotTitle: 'የGemini AI ረዳትን ይ ጠይቁ',
      copilotSub: 'የንጉሱ ሚናለን የትምህርት ዝግጅት፡ የፕሮጀክት ልምድ እና የቴክኖሎጂ ክህሎቶች መረጃ የያዘ በGemini የተጎላበተ ረዳት።',
      experienceTitle: 'የሥራ ልምድ፡ ፌሎውሺፕ እና ትምህርት',
      experienceSub: 'በINSA PKI DevSecOps፡ የሳይበር ታለንት ቡድን፡ ፉል-ስታክ ልማት እና የኮምፒውተር ኢንጂነሪንግ የትምህርት ጉዞ።',
      contactTitle: 'ቀጥታ መልእክት ወደ ኢሜይሌ ይላኩ',
      contactSub: 'በEmailJS እና Nodemailer የሚሰራ። የሚልኩት መልእክት ቀጥታ ወደ nigusuminale@gmail.com ይደርሳል።'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved === 'am' || saved === 'en') ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
