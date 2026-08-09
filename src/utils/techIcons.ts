import { 
  Code2, 
  FileCode2, 
  Terminal, 
  Server, 
  Database, 
  Box, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Lock, 
  Cpu, 
  Coffee,
  Globe
} from 'lucide-react';
import React from 'react';

export interface TechConfig {
  icon: React.ComponentType<{ className?: string }>;
  style: string;
}

export function getTechBadgeConfig(tech: string): TechConfig {
  const t = tech.toLowerCase();

  if (t.includes('react')) {
    return {
      icon: Code2,
      style: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20'
    };
  }
  if (t.includes('typescript') || t === 'ts') {
    return {
      icon: FileCode2,
      style: 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border-blue-600/20'
    };
  }
  if (t.includes('javascript') || t === 'js') {
    return {
      icon: Code2,
      style: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
    };
  }
  if (t.includes('python') || t.includes('django') || t.includes('fastapi')) {
    return {
      icon: Terminal,
      style: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
    };
  }
  if (t.includes('spring') || t.includes('java')) {
    return {
      icon: Coffee,
      style: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20'
    };
  }
  if (t.includes('node') || t.includes('express')) {
    return {
      icon: Server,
      style: 'bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 border-emerald-600/20'
    };
  }
  if (t.includes('postgres') || t.includes('sql') || t.includes('mongo') || t.includes('db')) {
    return {
      icon: Database,
      style: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20'
    };
  }
  if (t.includes('docker') || t.includes('container') || t.includes('k8s') || t.includes('kubernetes')) {
    return {
      icon: Box,
      style: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20'
    };
  }
  if (t.includes('security') || t.includes('pki') || t.includes('crypto') || t.includes('openssl') || t.includes('jwt') || t.includes('lock')) {
    return {
      icon: ShieldCheck,
      style: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20'
    };
  }
  if (t.includes('ai') || t.includes('genai') || t.includes('gemini') || t.includes('llm')) {
    return {
      icon: Sparkles,
      style: 'bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/20'
    };
  }
  if (t.includes('tailwind') || t.includes('css') || t.includes('html')) {
    return {
      icon: Layers,
      style: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20'
    };
  }

  return {
    icon: Cpu,
    style: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20'
  };
}
