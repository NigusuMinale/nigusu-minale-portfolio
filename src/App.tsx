import React, { useState, useEffect } from 'react';
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
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nigusu_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [activeSection, setActiveSection] = useState<string>('about');
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  // Sync dark mode class with html root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('nigusu_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('nigusu_theme', 'light');
    }
  }, [darkMode]);

  // Intersection observer for active navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'certificates', 'copilot', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <ToastProvider>
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors selection:bg-indigo-500 selection:text-white">
          
          {/* Top Navigation */}
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            onOpenResume={() => setResumeModalOpen(true)}
            onScrollToSection={handleScrollToSection}
            activeSection={activeSection}
          />

          {/* Main Content Sections */}
          <main>
            {/* About & Hero Banner */}
            <HeroSection
              onScrollToSection={handleScrollToSection}
              onOpenResume={() => setResumeModalOpen(true)}
            />

            {/* Featured Projects & Case Studies */}
            <ProjectsSection />

            {/* Technical Skills & Stack Matrix */}
            <SkillsSection />

            {/* Verified Certificates & Credentials */}
            <CertificatesSection />

            {/* Gemini AI Copilot Chat */}
            <AICopilotSection />

            {/* Experience, Education & Career Timeline */}
            <ExperienceSection />

            {/* Contact Form & Direct Details */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer onScrollToSection={handleScrollToSection} />

          {/* Resume Overlay Modal */}
          <ResumeModal
            isOpen={resumeModalOpen}
            onClose={() => setResumeModalOpen(false)}
          />

        </div>
      </ToastProvider>
    </LanguageProvider>
  );
}


