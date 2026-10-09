import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ToastProvider } from './context/ToastContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { AICopilotSection } from './components/AICopilotSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    
    const saved = localStorage.getItem('nigusu_theme');
    return saved === 'dark';
  });

  const [activeSection, setActiveSection] = useState('about');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    if (!darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('nigusu_theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('nigusu_theme', 'dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'certificates', 'copilot', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const { offsetTop, offsetHeight } = element;
        const sectionTop = offsetTop;
        const sectionBottom = offsetTop + offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offsetTop = element.getBoundingClientRect().top + window.scrollY;
    const targetScroll = offsetTop - 80;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <LanguageProvider>
      <ToastProvider>
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200 selection:bg-indigo-500 selection:text-white">
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            onOpenResume={() => setResumeModalOpen(true)}
            onScrollToSection={scrollToSection}
            activeSection={activeSection}
          />

          <main className="flex flex-col">
            <HeroSection
              onScrollToSection={scrollToSection}
              onOpenResume={() => setResumeModalOpen(true)}
            />

            <ProjectsSection />

            <SkillsSection />

            <CertificatesSection />

            <AICopilotSection />

            <ExperienceSection />

            <ContactSection />
          </main>

          <Footer onScrollToSection={scrollToSection} />

          <ResumeModal
            isOpen={resumeModalOpen}
            onClose={() => setResumeModalOpen(false)}
          />
        </div>
      </ToastProvider>
    </LanguageProvider>
  );
}


