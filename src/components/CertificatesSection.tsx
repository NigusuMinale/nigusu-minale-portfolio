import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Search, 
  QrCode, 
  X, 
  FileCheck, 
  Lock, 
  Download, 
  Building2,
  Calendar,
  Layers
} from 'lucide-react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';
import { Certification } from '../types';

export const CertificatesSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCertModal, setSelectedCertModal] = useState<Certification | null>(null);

  const categories = [
    { id: 'all', label: 'All Certificates' },
    { id: 'ai', label: 'AI & Data Science' },
    { id: 'fullstack', label: 'Data Security & Full Stack' },
    { id: 'security', label: 'Cyber Security & PKI' }
  ];

  const filteredCertifications = CERTIFICATIONS.filter((cert) => {
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = query === '' ||
      cert.title.toLowerCase().includes(query) ||
      cert.issuer.toLowerCase().includes(query) ||
      (cert.description && cert.description.toLowerCase().includes(query)) ||
      (cert.skills && cert.skills.some((s) => s.toLowerCase().includes(query)));

    return matchesCategory && matchesSearch;
  });

  const getIssuerBadgeColor = (issuer: string) => {
    if (issuer.includes('Udacity') || issuer.includes('EthioCoder')) {
      return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
    }
    if (issuer.includes('Safaricom') || issuer.includes('Gebeya')) {
      return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
    }
    if (issuer.includes('INSA')) {
      return 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20';
    }
    return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
  };

  return (
    <section id="certificates" className="py-20 bg-slate-50/70 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" /> {t.nav.certificates}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.sections.certTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
            {t.sections.certSub}
          </p>
        </motion.div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-2xl w-full sm:w-auto overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {selectedCategory === cat.id && (
                  <motion.div
                    layoutId="activeCertTab"
                    className="absolute inset-0 bg-white dark:bg-slate-900 rounded-xl shadow-xs border border-slate-200/80 dark:border-slate-700/80"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search certificates or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
            />
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCertifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group relative overflow-hidden"
            >
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-amber-500 to-violet-500 opacity-80" />

              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-inner">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase border ${getIssuerBadgeColor(cert.issuer)} mb-1`}>
                        {cert.issuer}
                      </span>
                      <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold shrink-0 border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3" /> Verified
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {cert.description}
                </p>

                {/* Acquired Skills */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold border border-slate-200 dark:border-slate-700/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Metadata & Button */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
                <div className="text-slate-500 text-[11px] font-mono space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center gap-1.5 text-slate-400 text-[10px]">
                      <QrCode className="w-3.5 h-3.5" />
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedCertModal(cert)}
                  className="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-indigo-600 dark:text-indigo-400 font-extrabold text-xs transition-colors flex items-center justify-center gap-1.5 shrink-0"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Certificate Modal Dialog */}
        <AnimatePresence>
          {selectedCertModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 relative overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCertModal(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Certificate Diploma Visual Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white space-y-4 border border-indigo-500/30 relative">
                  <div className="flex items-center justify-between border-b border-indigo-500/20 pb-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-6 h-6 text-amber-400" />
                      <span className="font-extrabold text-xs uppercase tracking-widest text-indigo-300">
                        Official Certificate of Competency
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase border border-emerald-500/30">
                      Verified
                    </span>
                  </div>

                  <div className="space-y-1 text-center py-2">
                    <p className="text-[11px] text-indigo-300 font-medium">This certifies that</p>
                    <h3 className="text-2xl font-black text-amber-300 tracking-tight">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-slate-300 font-medium">has successfully completed requirements for</p>
                    <h4 className="text-lg font-extrabold text-white pt-1">{selectedCertModal.title}</h4>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-indigo-500/20 text-[11px] font-mono text-indigo-200">
                    <span>Issuer: {selectedCertModal.issuer}</span>
                    <span>Date: {selectedCertModal.issueDate}</span>
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Certificate Summary & Skills</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    {selectedCertModal.description}
                  </p>

                  {selectedCertModal.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {selectedCertModal.skills.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 gap-3">
                  <span className="text-[11px] font-mono text-slate-400 truncate">
                    ID: {selectedCertModal.credentialId || 'AUTHENTICATED-CERT'}
                  </span>

                  {selectedCertModal.verificationUrl && (
                    <a
                      href={selectedCertModal.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs transition-colors flex items-center gap-2 shadow-md shrink-0"
                    >
                      <span>Verify Online</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
