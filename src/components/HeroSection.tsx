import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
  onOpenResume: () => void;
}

export function HeroSection({ onScrollToSection, onOpenResume }: HeroSectionProps) {
  const { t } = useLanguage();
  const { showToast } = useToast();

  const handleResumeClick = () => {
    onOpenResume();
    showToast('Resume opened', 'View, print, or download your resume.', 'info', 2500);
  };

  return (
    <section id="about" className="py-24 md:py-32 relative bg-white dark:bg-slate-950 bg-hero-circuit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
              {t.hero.bio}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onScrollToSection('projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-50 transition-colors"
              >
                View projects
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {PERSONAL_INFO.location}
                </p>
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  {PERSONAL_INFO.status}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
