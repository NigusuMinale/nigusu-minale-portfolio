import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Github, 
  Linkedin, 
  Mail, 
  CheckCircle2, 
  Download,
  Globe,
  Terminal,
  Code2,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection, onOpenResume }) => {
  const { t, language } = useLanguage();
  const { showToast } = useToast();

  const handleResumeClick = () => {
    onOpenResume();
    showToast('Resume Reader Opened 📄', 'View, print, or download Nigusu Minale\'s resume.', 'info', 3000);
  };

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      
      {/* Subtle background grid instead of heavy glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Main Headline - Simplified */}
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                👋 Welcome
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                I'm {PERSONAL_INFO.name.split(' ')[0]}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-normal">
                {t.hero.bio}
              </p>
            </div>

            {/* Sub-bio bullet highlights */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> PKI & Cyber Security DevSecOps
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> React / TypeScript / Node.js
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Java Spring Boot & Python
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onScrollToSection('projects')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-indigo-600/30 transition-all"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onScrollToSection('copilot')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-700 hover:opacity-90 text-white font-extrabold text-xs shadow-lg shadow-violet-600/25 transition-all border border-violet-400/30"
              >
                <Bot className="w-4 h-4 text-amber-300" />
                <span>{t.nav.copilot}</span>
              </button>

              <button
                onClick={handleResumeClick}
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition-all border border-slate-200 dark:border-slate-700"
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>{t.hero.downloadCV}</span>
              </button>
            </div>


            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Profile Card & Tech Floating Pills */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Card Frame */}
            <div className="relative w-full max-w-md p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
              
              {/* Profile Image & Avatar */}
              <div className="relative mx-auto w-44 h-44 rounded-3xl overflow-hidden border-4 border-indigo-500/30 shadow-xl group">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-extrabold text-white flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-indigo-400" /> {PERSONAL_INFO.location.split('(')[0]}
                  </span>
                </div>
              </div>

              {/* Quick Info Header */}
              <div className="text-center space-y-2">
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                  Based in {PERSONAL_INFO.location.split('(')[0].trim()}
                </p>
                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  {PERSONAL_INFO.status}
                </p>
              </div>

              {/* Stats 2x1 Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center">
                  <div className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    {PERSONAL_INFO.yearsExperience}
                  </div>
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
                    Years Exp.
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center">
                  <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    {PERSONAL_INFO.projectsCompleted}
                  </div>
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
                    Projects Delivered
                  </div>
                </div>
              </div>

              {/* Interactive Terminal Snippet */}
              <div className="p-3.5 rounded-2xl bg-slate-950 text-slate-300 font-mono text-[11px] leading-relaxed border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 mb-1.5 pb-1 border-b border-slate-800 text-[10px] text-slate-500 font-sans">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>nigusu-profile.sh</span>
                </div>
                <p><span className="text-emerald-400">$</span> cat current-role.txt</p>
                <p className="text-amber-200">PKI Intern @ INSA · Spring Boot + Java</p>
                <p><span className="text-emerald-400">$</span> cat stack.json</p>
                <p className="text-slate-300">{`{"frontend":"React/TypeScript","backend":"Spring Boot, Node.js","focus":"Application Security"}`}</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
