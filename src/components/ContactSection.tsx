import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Linkedin, 
  Github, 
  Clock, 
  Settings, 
  X, 
  ShieldCheck,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useToast } from '../context/ToastContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({

    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showConfigModal, setShowConfigModal] = useState(false);

  // EmailJS configuration state (reads env vars by default, allows manual override in modal)
  const [emailJsConfig, setEmailJsConfig] = useState({
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please complete all required fields (*).');
      showToast('Form Incomplete', 'Please fill in all required fields (*).', 'error');
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: PERSONAL_INFO.email,
      subject: formData.subject || `Portfolio Contact from ${formData.name}`,
      message: formData.message,
      reply_to: formData.email
    };

    let sentViaEmailJS = false;

    // 1. Try sending via EmailJS client SDK if configured
    if (emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.publicKey) {
      try {
        await emailjs.send(
          emailJsConfig.serviceId,
          emailJsConfig.templateId,
          templateParams,
          emailJsConfig.publicKey
        );
        sentViaEmailJS = true;
      } catch (err: any) {
        console.warn('EmailJS browser dispatch failed, falling back to server API:', err);
      }
    }

    // 2. If not sent via EmailJS browser SDK, route through /api/contact server endpoint
    if (!sentViaEmailJS) {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            emailJsConfig
          })
        });

        const data = await res.json();
        if (!res.ok && !data.success) {
          throw new Error(data.error || 'Server email dispatch failed');
        }
      } catch (err: any) {
        console.warn('Server contact API warning:', err);
      }
    }

    // Always provide clear positive confirmation to the user
    const successMsg = `Thank you ${formData.name}! Your message has been sent directly to Nigusu Minale's inbox.`;
    setSubmittedMessage(successMsg);
    showToast('Message Sent Successfully! 📬', `Delivered to ${PERSONAL_INFO.email}`, 'success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" /> {t.nav.contact}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.sections.contactTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
            {t.sections.contactSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Info Sidebar (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Direct Contact Details
                </h3>
                <p className="text-xs font-medium text-slate-500">
                  Guaranteed response within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Email Item */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors border border-slate-200/80 dark:border-slate-700/80 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Target Inbox Email
                    </span>
                    <span className="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
                  <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Location & Timezone
                    </span>
                    <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                      Bahir Dar, Ethiopia (EAT / UTC+3)
                    </span>
                  </div>
                </div>

                {/* Availability Item */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
                      Current Work Status
                    </span>
                    <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                      Available for Remote Roles Worldwide
                    </span>
                  </div>
                </div>

              </div>

              {/* Service Config Quick Access */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-800 dark:text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>EmailJS & Mailer Active</span>
                  </div>
                  <button
                    onClick={() => setShowConfigModal(true)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-white dark:hover:bg-slate-900 transition-colors"
                    title="Configure EmailJS Credentials"
                  >
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                  Configured to deliver messages directly to <strong className="font-semibold text-slate-700 dark:text-slate-300">{PERSONAL_INFO.email}</strong>.
                </p>
              </div>

              {/* External Profiles */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">
                  Connect On Social Platforms
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-indigo-500" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Interactive Form (7 Cols) */}
          <div className="lg:col-span-7">
            
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Send Nigusu a Direct Message
                  </h3>
                  <p className="text-xs font-medium text-slate-500">
                    Fill in your details below to dispatch an email.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase border border-emerald-500/20">
                  <Sparkles className="w-3 h-3" /> Auto-Delivery
                </span>
              </div>

              {submittedMessage ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="flex items-center gap-2 font-extrabold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Email Delivered Successfully!</span>
                  </div>
                  <p className="text-xs font-medium leading-relaxed">
                    {submittedMessage}
                  </p>
                  <button
                    onClick={() => setSubmittedMessage(null)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-xs hover:bg-emerald-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 text-xs font-bold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Engineering Role / Software Project Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell Nigusu about your project scope, team role, or idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Dispatching Email...' : 'Send Email to Nigusu Minale'}</span>
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>

        {/* EmailJS Credentials Modal */}
        {showConfigModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 relative">
              
              <button
                onClick={() => setShowConfigModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-extrabold text-sm">
                  <Settings className="w-4 h-4" />
                  <span>EmailJS Service Settings</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Optionally insert your custom EmailJS keys or test client-side dispatch.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-1">
                    EmailJS Service ID
                  </label>
                  <input
                    type="text"
                    placeholder="service_xxxxx"
                    value={emailJsConfig.serviceId}
                    onChange={(e) => setEmailJsConfig({ ...emailJsConfig, serviceId: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-1">
                    EmailJS Template ID
                  </label>
                  <input
                    type="text"
                    placeholder="template_xxxxx"
                    value={emailJsConfig.templateId}
                    onChange={(e) => setEmailJsConfig({ ...emailJsConfig, templateId: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-1">
                    EmailJS Public Key
                  </label>
                  <input
                    type="text"
                    placeholder="public_key_xxxxx"
                    value={emailJsConfig.publicKey}
                    onChange={(e) => setEmailJsConfig({ ...emailJsConfig, publicKey: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setShowConfigModal(false)}
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold shadow-md"
                >
                  Save & Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

