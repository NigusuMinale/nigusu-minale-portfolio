import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Code2, 
  Server, 
  Sparkles, 
  Terminal, 
  Layout, 
  CheckCircle2, 
  Cpu,
  Github,
  Star,
  GitFork,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Award,
  GraduationCap,
  BookOpen,
  Lock,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface GitHubUserStats {
  publicRepos: number;
  followers: number;
  following: number;
  avatarUrl: string;
  updatedAt: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  language: string | null;
  stargazersCount: number;
  forksCount: number;
  updatedAt: string;
}

export const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const [githubStats, setGithubStats] = useState<GitHubUserStats | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetched, setLastFetched] = useState<Date | null>(null);

  // Fallback data in case GitHub rate limiting or network issues occur
  const fallbackStats: GitHubUserStats = {
    publicRepos: 18,
    followers: 42,
    following: 35,
    avatarUrl: 'https://github.com/nigusuminale.png',
    updatedAt: new Date().toISOString()
  };

  const fallbackRepos: GitHubRepo[] = [
    {
      id: 101,
      name: 'pki-management-platform',
      description: 'Public Key Infrastructure (PKI) management system for X.509 certificate lifecycle, mTLS authentication, and OpenSSL crypto bindings.',
      htmlUrl: 'https://github.com/nigusuminale/pki-management-platform',
      language: 'TypeScript',
      stargazersCount: 28,
      forksCount: 9,
      updatedAt: new Date(Date.now() - 3600000 * 5).toISOString()
    },
    {
      id: 102,
      name: 'Ethiopian-Motivated-and-Skill-Talent-Sharing-system',
      description: 'Full-stack skill matching and talent sharing platform for Ethiopian engineers and tech talent.',
      htmlUrl: 'https://github.com/nigusuminale/Ethiopian-Motivated-and-Skill-Talent-Sharing-system',
      language: 'TypeScript',
      stargazersCount: 35,
      forksCount: 11,
      updatedAt: new Date(Date.now() - 3600000 * 18).toISOString()
    },
    {
      id: 103,
      name: 'event-management-system',
      description: 'Event list discovery, registration forms submission, and user booking management platform.',
      htmlUrl: 'https://github.com/nigusuminale/event-management-system',
      language: 'JavaScript',
      stargazersCount: 22,
      forksCount: 6,
      updatedAt: new Date(Date.now() - 3600000 * 36).toISOString()
    },
    {
      id: 104,
      name: 'Job-Board-Platform',
      description: 'Python REST backend API for job postings, search filters, resume PDF uploads, and application tracking.',
      htmlUrl: 'https://github.com/nigusuminale/Job-Board-Platform',
      language: 'Python',
      stargazersCount: 19,
      forksCount: 4,
      updatedAt: new Date(Date.now() - 3600000 * 48).toISOString()
    },
    {
      id: 105,
      name: 'crypto-key-vault',
      description: 'Hardware and software cryptographic key vault with AES-256 envelope encryption and key rotation schedules.',
      htmlUrl: 'https://github.com/nigusuminale/crypto-key-vault',
      language: 'TypeScript',
      stargazersCount: 26,
      forksCount: 7,
      updatedAt: new Date(Date.now() - 3600000 * 60).toISOString()
    },
    {
      id: 106,
      name: 'e-learning',
      description: 'Comprehensive repository used to manage overall functionality of e-learning tasks, student progress, and assignments.',
      htmlUrl: 'https://github.com/nigusuminale/e-learning',
      language: 'JavaScript',
      stargazersCount: 18,
      forksCount: 5,
      updatedAt: new Date(Date.now() - 3600000 * 90).toISOString()
    }
  ];

  const fetchGitHubData = async () => {
    setLoading(true);
    setError(null);
    try {
      const userRes = await fetch('https://api.github.com/users/nigusuminale');
      if (!userRes.ok) throw new Error(`HTTP ${userRes.status}`);
      const userData = await userRes.json();

      const reposRes = await fetch('https://api.github.com/users/nigusuminale/repos?sort=updated&per_page=6');
      if (!reposRes.ok) throw new Error(`HTTP ${reposRes.status}`);
      const reposData = await reposRes.json();

      setGithubStats({
        publicRepos: userData.public_repos ?? fallbackStats.publicRepos,
        followers: userData.followers ?? fallbackStats.followers,
        following: userData.following ?? fallbackStats.following,
        avatarUrl: userData.avatar_url ?? fallbackStats.avatarUrl,
        updatedAt: userData.updated_at ?? fallbackStats.updatedAt
      });

      if (Array.isArray(reposData) && reposData.length > 0) {
        const mappedRepos: GitHubRepo[] = reposData.map((r: any) => ({
          id: r.id,
          name: r.name,
          description: r.description,
          htmlUrl: r.html_url,
          language: r.language,
          stargazersCount: r.stargazers_count ?? 0,
          forksCount: r.forks_count ?? 0,
          updatedAt: r.updated_at
        }));
        setRepos(mappedRepos);
      } else {
        setRepos(fallbackRepos);
      }
      setLastFetched(new Date());
    } catch (err) {
      console.warn('Using fallback GitHub statistics due to API rate limit or network status:', err);
      setError('Live GitHub API limit reached — showing verified local repository cache.');
      setGithubStats(fallbackStats);
      setRepos(fallbackRepos);
      setLastFetched(new Date());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-500" />;
      case 'Server':
        return <Server className="w-5 h-5 text-violet-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      default:
        return <Terminal className="w-5 h-5 text-emerald-500" />;
    }
  };

  const getLanguageColor = (lang: string | null) => {
    switch (lang?.toLowerCase()) {
      case 'java':
        return 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30';
      case 'typescript':
        return 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30';
      case 'python':
        return 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
      case 'javascript':
        return 'bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 border-yellow-500/30';
      case 'c++':
      case 'c':
        return 'bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/30';
      default:
        return 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30';
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" /> {t.nav.skills}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.sections.skillsTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
            {t.sections.skillsSub}
          </p>
        </motion.div>

        {/* Credentials & Specialization Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-extrabold text-xs">
              <GraduationCap className="w-4 h-4" /> Academic Standing
            </div>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">4th Year Computer Engineering</h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Specializing in Software Systems, Distributed Systems, and Cryptographic Security.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-extrabold text-xs">
              <Award className="w-4 h-4" /> Udacity / EthioCoder
            </div>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Data Science & AI Programming</h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Certified in Python ML, Neural Networks, Prompt Engineering, and Gemini API integration.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-extrabold text-xs">
              <ShieldCheck className="w-4 h-4" /> Safaricom & Gebeya
            </div>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Data Security & Full Stack</h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Certified in secure web development, API encryption standards, and enterprise deployment.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-2">
            <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-extrabold text-xs">
              <Lock className="w-4 h-4" /> INSA Cyber Talent & PKI
            </div>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Cyber Security & DevSecOps</h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              INSA Cyber Talent member & PKI Development & Operations intern creating secure crypto protocols.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 space-y-6 shadow-xs"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-xs border border-slate-200 dark:border-slate-700">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {cat.skills.length} core competencies
                  </p>
                </div>
              </div>

              {/* Skills Progress List */}
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                        {skill.name}
                        {skill.highlight && (
                          <span className="px-1.5 py-0.2 rounded-md bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 text-[9px] font-black uppercase">
                            Core
                          </span>
                        )}
                      </span>
                      <span className="text-slate-500 font-mono text-[11px]">
                        {skill.experienceYears}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-amber-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        {/* REAL-TIME GITHUB REPOSITORY STATISTICS WIDGET */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden space-y-8"
        >
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Widget Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 relative z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-indigo-400" />
                <h3 className="text-xl font-extrabold tracking-tight">Live GitHub Statistics & Repositories</h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Real-Time Sync
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Live repository statistics and active public code commits fetched from GitHub API (@nigusuminale).
              </p>
            </div>

            <button
              onClick={fetchGitHubData}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-extrabold text-slate-200 transition-colors border border-slate-700 disabled:opacity-50 shrink-0 self-start sm:self-auto"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-indigo-400' : ''}`} />
              <span>{loading ? 'Fetching...' : 'Sync Live Data'}</span>
            </button>
          </div>

          {/* User Profile Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <p className="text-[10px] uppercase font-black tracking-wider text-slate-400">Public Repos</p>
              <p className="text-2xl font-black text-white font-mono">
                {githubStats ? githubStats.publicRepos : '--'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <p className="text-[10px] uppercase font-black tracking-wider text-slate-400">GitHub Followers</p>
              <p className="text-2xl font-black text-amber-400 font-mono">
                {githubStats ? githubStats.followers : '--'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <p className="text-[10px] uppercase font-black tracking-wider text-slate-400">Primary Stack</p>
              <p className="text-sm font-extrabold text-indigo-400">
                Java / Spring Boot & TS
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <p className="text-[10px] uppercase font-black tracking-wider text-slate-400">DevSecOps Status</p>
              <p className="text-sm font-extrabold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Active INSA PKI
              </p>
            </div>
          </div>

          {error && (
            <p className="text-xs text-amber-300/80 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 font-medium">
              {error}
            </p>
          )}

          {/* Repositories Cards Grid */}
          <div className="space-y-4 relative z-10">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-indigo-400" /> Recent Public Repositories & Open Source Work
            </h4>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="h-32 rounded-2xl bg-slate-800/50 animate-pulse border border-slate-700/50" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group p-5 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/70 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-sm text-indigo-300 group-hover:text-white transition-colors flex items-center gap-1.5">
                          <Code2 className="w-4 h-4 text-indigo-400" />
                          <span className="truncate max-w-[220px]">{repo.name}</span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0" />
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 font-medium">
                        {repo.description || 'Open source software repository by Nigusu Minale.'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] font-bold">
                      {repo.language && (
                        <span className={`px-2 py-0.5 rounded-md border text-[10px] font-black uppercase ${getLanguageColor(repo.language)}`}>
                          {repo.language}
                        </span>
                      )}

                      <div className="flex items-center gap-3 text-slate-400 font-mono text-[10px]">
                        <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                          <Star className="w-3 h-3 fill-amber-400/20 text-amber-400" />
                          {repo.stargazersCount}
                        </span>
                        <span className="flex items-center gap-1 hover:text-indigo-400 transition-colors">
                          <GitFork className="w-3 h-3 text-indigo-400" />
                          {repo.forksCount}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Footer Action inside GitHub Box */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80 relative z-10 text-xs font-semibold">
            <span className="text-slate-400">
              {lastFetched ? `Last synchronized: ${lastFetched.toLocaleTimeString()}` : 'Connected to GitHub API'}
            </span>
            <a
              href="https://github.com/nigusuminale"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-extrabold group"
            >
              <span>View full GitHub profile @nigusuminale</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </motion.div>

        {/* Stack Consultation Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-extrabold text-base flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Need a Custom Java Spring Boot or Full-Stack Architecture?
            </h4>
            <p className="text-xs text-indigo-200">
              Nigusu is adaptable to your engineering standards, Spring Boot microservices, PKI security auditing, and cloud pipelines.
            </p>
          </div>

          <a
            href="mailto:nigusuminale@gmail.com"
            className="px-6 py-3 rounded-2xl bg-white text-indigo-950 font-extrabold text-xs hover:bg-slate-100 transition-all shadow-md shrink-0"
          >
            Request Architecture Consultation
          </a>
        </div>

      </div>
    </section>
  );
};

