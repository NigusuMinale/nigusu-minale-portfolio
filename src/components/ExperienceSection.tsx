import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Building2
} from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string>('exp-1');

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" /> {t.nav.experience}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.sections.experienceTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
            {t.sections.experienceSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience Timeline (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <Building2 className="w-5 h-5 text-indigo-500" /> Professional Positions
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {WORK_EXPERIENCE.map((exp) => {
                const isExpanded = expandedId === exp.id;

                return (
                  <div
                    key={exp.id}
                    className="relative pl-12 transition-all"
                  >
                    {/* Timeline Node Dot */}
                    <div className={`absolute left-4 top-5 w-4 h-4 rounded-full border-2 transition-all -translate-x-1/2 ${
                      exp.current
                        ? 'bg-indigo-600 border-white dark:border-slate-900 ring-4 ring-indigo-500/20'
                        : 'bg-slate-300 dark:bg-slate-700 border-white dark:border-slate-900'
                    }`} />

                    {/* Card Body */}
                    <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/90 dark:border-slate-700/80 space-y-4 shadow-xs">
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">
                              {exp.role}
                            </h4>
                            {exp.current && (
                              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
                            {exp.company} • {exp.type}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 text-slate-500 text-xs font-medium">
                          <span className="flex items-center gap-1 font-mono">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" /> {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" /> {exp.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Expandable Bullet Achievements */}
                      <div>
                        <button
                          onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                          className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline pt-1"
                        >
                          <span>{isExpanded ? 'Hide Accomplishments' : 'View Key Accomplishments'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        {isExpanded && (
                          <ul className="mt-3 space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 animate-in fade-in duration-200">
                            {exp.achievements.map((ach, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Tech Used Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-[10px] font-bold border border-slate-200 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education & Certifications Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Education Block */}
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                <GraduationCap className="w-5 h-5 text-indigo-500" /> Academic Degree
              </h3>

              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/90 dark:border-slate-700/80 space-y-2 shadow-xs"
                >
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    {edu.institution}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-1">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                  {edu.honors && (
                    <span className="inline-block px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px] font-black uppercase mt-1">
                      {edu.honors}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Certifications Block */}
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                <Award className="w-5 h-5 text-indigo-500" /> Industry Certifications
              </h3>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/90 dark:border-slate-700/80 flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div>
                      <h5 className="font-extrabold text-xs text-slate-900 dark:text-white">
                        {cert.title}
                      </h5>
                      <p className="text-[11px] font-medium text-slate-500">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-mono font-bold shrink-0">
                      {cert.issueDate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
