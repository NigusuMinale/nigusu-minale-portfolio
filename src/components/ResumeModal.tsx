import React, { useRef } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Globe, 
  Github, 
  Linkedin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, EDUCATION, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';
import { useToast } from '../context/ToastContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { showToast } = useToast();

  if (!isOpen) return null;

  const handlePrint = () => {
    showToast('Print Document Opened', 'Opening browser print window for resume document.', 'info');
    window.print();
  };

  const handleDownloadTxt = () => {
    const resumeText = `
NIGUSU MINALE
Senior Full-Stack Engineer & AI Systems Developer
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
Location: ${PERSONAL_INFO.location}

SUMMARY:
${PERSONAL_INFO.bio}

WORK EXPERIENCE:
${WORK_EXPERIENCE.map(exp => `
${exp.role} | ${exp.company} (${exp.period})
- ${exp.description}
Key Accomplishments:
${exp.achievements.map(a => `  * ${a}`).join('\n')}
Tech: ${exp.technologies.join(', ')}
`).join('\n')}

EDUCATION:
${EDUCATION.map(edu => `${edu.degree} - ${edu.institution} (${edu.period})`).join('\n')}

CERTIFICATIONS:
${CERTIFICATIONS.map(cert => `${cert.title} - ${cert.issuer} (${cert.issueDate})`).join('\n')}
`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Nigusu_Minale_Resume.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Resume Downloaded 📄', 'Nigusu_Minale_Resume.txt saved to your device.', 'download');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
        
        {/* Modal Top Actions Bar */}
        <div className="p-4 px-6 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-sm text-slate-900 dark:text-white">
              Nigusu Minale — Official Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadTxt}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Text Resume</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume View */}
        <div className="p-8 overflow-y-auto flex-1 space-y-8 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2 text-left">
            <h1 className="text-3xl font-extrabold tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 pt-1">
              <span>✉️ {PERSONAL_INFO.email}</span>
              <span>📍 {PERSONAL_INFO.location.split('(')[0]}</span>
              <span>🔗 {PERSONAL_INFO.github}</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2 text-left">
            <h2 className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Executive Summary
            </h2>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Core Technical Stack */}
          <div className="space-y-3 text-left">
            <h2 className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Technical Stack & Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <h3 className="font-extrabold text-xs text-slate-900 dark:text-white mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Work History */}
          <div className="space-y-4 text-left">
            <h2 className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Professional Work History
            </h2>
            <div className="space-y-6">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                      {exp.role} <span className="text-indigo-600 font-bold">@ {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono font-bold text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {exp.description}
                  </p>
                  <ul className="space-y-1 pt-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                        <span className="text-indigo-500 font-extrabold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-left">
            <div className="space-y-2">
              <h2 className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Education
              </h2>
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="space-y-0.5">
                  <h4 className="font-extrabold text-xs">{edu.degree}</h4>
                  <p className="text-[11px] text-slate-500">{edu.institution} • {edu.period}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Certifications
              </h2>
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="space-y-0.5">
                  <h4 className="font-extrabold text-xs">{cert.title}</h4>
                  <p className="text-[11px] text-slate-500">{cert.issuer} • {cert.issueDate}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
