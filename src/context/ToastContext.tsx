import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Info, Download, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info' | 'download';

export interface ToastItem {
  id: string;
  title: string;
  message?: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  showToast: (title: string, message?: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (title: string, message?: string, type: ToastType = 'success', duration = 4000) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastItem = { id, title, message, type, duration };

      setToasts((prev) => [...prev.slice(-4), newToast]); // Keep maximum 5 active toasts

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      {/* Floating Toast Notification Container */}
      <div className="fixed top-20 right-4 sm:right-6 z-[100] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -20, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.85, x: 30, transition: { duration: 0.2 } }}
              layout
              className="pointer-events-auto p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-2xl shadow-indigo-500/10 flex items-start gap-3.5 relative overflow-hidden"
            >
              {/* Type Specific Accent Bar & Icon */}
              {toast.type === 'success' && (
                <>
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500" />
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </>
              )}

              {toast.type === 'download' && (
                <>
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-500" />
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                    <Download className="w-5 h-5" />
                  </div>
                </>
              )}

              {toast.type === 'error' && (
                <>
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rose-500" />
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                </>
              )}

              {toast.type === 'info' && (
                <>
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500" />
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                    <Info className="w-5 h-5" />
                  </div>
                </>
              )}

              {/* Toast Text Content */}
              <div className="flex-1 min-w-0 pr-4">
                <h4 className="text-xs font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {toast.title}
                </h4>
                {toast.message && (
                  <p className="text-[11px] font-medium text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    {toast.message}
                  </p>
                )}
              </div>

              {/* Manual Close Button */}
              <button
                onClick={() => removeToast(toast.id)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors shrink-0"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
