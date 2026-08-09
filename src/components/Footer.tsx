import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection }) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-md">
              <Terminal className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-lg text-white block leading-none">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-bold text-indigo-400 block mt-0.5">
                {PERSONAL_INFO.title}
              </span>
            </div>
          </div>

          {/* Quick Section Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-300">
            <button onClick={() => onScrollToSection('about')} className="hover:text-indigo-400 transition-colors">
              {t.nav.about}
            </button>
            <button onClick={() => onScrollToSection('projects')} className="hover:text-indigo-400 transition-colors">
              {t.nav.projects}
            </button>
            <button onClick={() => onScrollToSection('skills')} className="hover:text-indigo-400 transition-colors">
              {t.nav.skills}
            </button>
            <button onClick={() => onScrollToSection('certificates')} className="hover:text-indigo-400 transition-colors">
              {t.nav.certificates}
            </button>
            <button onClick={() => onScrollToSection('copilot')} className="hover:text-indigo-400 transition-colors">
              {t.nav.copilot}
            </button>
            <button onClick={() => onScrollToSection('experience')} className="hover:text-indigo-400 transition-colors">
              {t.nav.experience}
            </button>
            <button onClick={() => onScrollToSection('contact')} className="hover:text-indigo-400 transition-colors">
              {t.nav.contact}
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-all border border-slate-800 flex items-center gap-2 text-xs font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-500">
            Engineered with React 19, TypeScript, Tailwind CSS & Gemini 3.6 Flash
          </p>
        </div>

      </div>
    </footer>
  );
};
