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
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-violet-500/10 dark:bg-violet-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {language === 'en' ? (
                  <>My Life's Journey & <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-amber-500 bg-clip-text text-transparent">Engineering</span> Progress <span className="underline decoration-indigo-500/40 underline-offset-8">& Growth</span></>
                ) : (
                  <>የሕይወቴ ጉዞ እና የ <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-amber-500 bg-clip-text text-transparent">ኢንጂነሪንግ</span> እድገት <span className="underline decoration-indigo-500/40 underline-offset-8">መሻሻል</span></>
                )}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                {t.hero.greeting}. {t.hero.bio}
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
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onScrollToSection('copilot')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-700 hover:opacity-90 text-white font-extrabold text-xs shadow-lg shadow-violet-600/25 transition-all hover:scale-105 border border-violet-400/30"
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
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Connect Directly:
              </span>
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
              <div className="text-center space-y-1">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  {PERSONAL_INFO.title}
                </p>
              </div>

              {/* Stats 2x2 Grid */}
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

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center">
                  <div className="text-xl font-extrabold text-amber-500">
                    {PERSONAL_INFO.codeCommitsThisYear}
                  </div>
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
                    Commits / Year
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center">
                  <div className="text-xl font-extrabold text-violet-500">
                    {PERSONAL_INFO.clientsSatisfied}
                  </div>
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
                    Satisfaction Rate
                  </div>
                </div>
              </div>

              {/* Interactive Terminal Snippet */}
              <div className="p-3.5 rounded-2xl bg-slate-950 text-slate-300 font-mono text-[11px] leading-relaxed border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 mb-1.5 pb-1 border-b border-slate-800 text-[10px] text-slate-500 font-sans">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>nigusu-dev-status.sh</span>
                </div>
                <p><span className="text-emerald-400">$</span> nigusu --current-stack</p>
                <p className="text-slate-400">['React', 'TypeScript', 'Node.js', 'Python', 'Gemini AI']</p>
                <p><span className="text-emerald-400">$</span> nigusu --portfolio-status</p>
                <p className="text-emerald-300 font-bold">"98% Verified Engineering Milestones Complete"</p>
              </div>

            </div>

          </div>

        </div>

        {/* Center Page: Portfolio Engineering Progress Tracker */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-indigo-500/20 dark:border-indigo-500/30 shadow-2xl relative overflow-hidden space-y-6">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 animate" /> Live Engineering Status
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Portfolio Completion & Technical Roadmap Progress
                </h3>
              </div>

              {/* Glowing Percentage Pill */}
              <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 text-white px-4 py-2 rounded-2xl shadow-lg shadow-indigo-500/25 border border-indigo-400/30">
                <span className="text-2xl font-black leading-none">98%</span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider opacity-90 leading-tight">
                  Portfolio<br />Verified
                </span>
              </div>
            </div>

            {/* Main Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-500" /> Overall Engineering Milestones
                </span>
                <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">24 / 24 Projects Delivered</span>
              </div>
              <div className="w-full h-4 rounded-full bg-slate-100 dark:bg-slate-800 p-0.5 overflow-hidden border border-slate-200/60 dark:border-slate-700/60 shadow-inner">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-400 transition-all duration-1000 shadow-md relative overflow-hidden"
                  style={{ width: '98%' }}
                >
                  <div className="absolute inset-0 bg-white/25 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Milestone Progress Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-3 hover:border-emerald-500/40 transition-colors">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 dark:text-white">PKI DevSecOps Suite</div>
                  <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">100% Complete (INSA)</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-3 hover:border-emerald-500/40 transition-colors">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 dark:text-white">Full-Stack Platforms</div>
                  <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">100% Complete</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-3 hover:border-emerald-500/40 transition-colors">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 dark:text-white">Data Science & AI</div>
                  <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">100% Certified</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-3 hover:border-indigo-500/40 transition-colors">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 dark:text-white">Gemini 3.6 Copilot</div>
                  <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">98% Active & Live</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
