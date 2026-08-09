import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  Search, 
  Eye, 
  Star,
  Layers,
  ArrowUpRight,
  Filter,
  Tag,
  ShieldCheck,
  Cpu,
  Server,
  Code2,
  Clock,
  Calendar
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { getTechBadgeConfig } from '../utils/techIcons';
import { useLanguage } from '../context/LanguageContext';

export const ProjectsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const { t } = useLanguage();


  // Available tag filter options
  const filterTags = [
    { id: 'All', label: 'All Projects', icon: Layers },
    { id: 'AI', label: 'AI', icon: Sparkles },
    { id: 'Full Stack', label: 'Full Stack', icon: Code2 },
    { id: 'Cyber Security', label: 'Cyber Security', icon: ShieldCheck },
    { id: 'Spring Boot', label: 'Spring Boot', icon: Server },
    { id: 'Cloud', label: 'Cloud & Infrastructure', icon: Cpu }
  ];

  // Helper to count projects matching each tag
  const getTagCount = (tagId: string) => {
    if (tagId === 'All') return FEATURED_PROJECTS.length;
    return FEATURED_PROJECTS.filter((p) => {
      const hasTag = p.tags?.includes(tagId);
      const matchesCategory = p.category.toLowerCase() === tagId.toLowerCase().replace(/\s+/g, '');
      return hasTag || matchesCategory;
    }).length;
  };

  const filteredProjects = FEATURED_PROJECTS.filter((p) => {
    // Tag matching logic
    const matchesTag = selectedTag === 'All' || 
      (p.tags && p.tags.includes(selectedTag)) ||
      p.category.toLowerCase() === selectedTag.toLowerCase().replace(/\s+/g, '');

    // Search query matching logic
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = query === '' || 
      p.title.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      (p.tags && p.tags.some((t) => t.toLowerCase().includes(query))) ||
      p.techStack.some((t) => t.toLowerCase().includes(query));

    return matchesTag && matchesSearch;
  });

  const getTagBadgeStyle = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'ai':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      case 'cyber security':
      case 'security':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'spring boot':
      case 'springboot':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      case 'full stack':
      case 'fullstack':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'cloud':
        return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20';
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" /> {t.nav.projects}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.sections.projectsTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
            {t.sections.projectsSub}
          </p>
        </motion.div>

        {/* Filter Bar & Search */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 mb-10"
        >
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Tag Filter Buttons Bar */}
            <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/60 dark:bg-slate-800/80 rounded-2xl overflow-x-auto scrollbar-none">
              {filterTags.map((tag) => {
                const IconComponent = tag.icon;
                const isSelected = selectedTag === tag.id;
                const count = getTagCount(tag.id);

                return (
                  <button
                    key={tag.id}
                    onClick={() => setSelectedTag(tag.id)}
                    className={`relative px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                      isSelected
                        ? 'text-indigo-600 dark:text-indigo-400 font-extrabold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeTagTab"
                        className="absolute inset-0 bg-white dark:bg-slate-900 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                    <IconComponent className="w-3.5 h-3.5 relative z-10 shrink-0" />
                    <span className="relative z-10">{tag.label}</span>
                    <span className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                      isSelected 
                        ? 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-300' 
                        : 'bg-slate-300/50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Filter by keyword, tech, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

          {/* Active Filter Indicators */}
          {(selectedTag !== 'All' || searchQuery !== '') && (
            <div className="flex items-center gap-2 pt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Filter className="w-3.5 h-3.5 text-indigo-500" />
              <span>Showing <strong>{filteredProjects.length}</strong> project{filteredProjects.length === 1 ? '' : 's'}</span>
              {selectedTag !== 'All' && (
                <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-[11px] flex items-center gap-1">
                  Tag: {selectedTag}
                  <button onClick={() => setSelectedTag('All')} className="hover:text-indigo-900 dark:hover:text-white">✕</button>
                </span>
              )}
              {searchQuery && (
                <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-[11px] flex items-center gap-1">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="hover:text-amber-900 dark:hover:text-white">✕</button>
                </span>
              )}
              <button 
                onClick={() => { setSelectedTag('All'); setSearchQuery(''); }}
                className="ml-auto text-xs font-bold text-indigo-600 hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.div 
              key="no-results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
                <Tag className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                No projects found matching your selected filters.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Try clearing your search query or selecting a different tag filter like "AI", "Full Stack", or "Cyber Security".
              </p>
              <button
                onClick={() => { setSelectedTag('All'); setSearchQuery(''); }}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-extrabold text-xs shadow-md hover:bg-indigo-500 transition-colors"
              >
                Reset All Filters
              </button>
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ 
                    duration: 0.45, 
                    delay: index * 0.08,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.025,
                    boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.22)',
                    transition: { duration: 0.25, ease: 'easeOut' } 
                  }}
                  className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Image & Overlay */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="px-4 py-2 rounded-xl bg-white text-slate-900 font-extrabold text-xs shadow-lg flex items-center gap-1.5 hover:scale-105 transition-transform"
                      >
                        <Eye className="w-3.5 h-3.5 text-indigo-600" />
                        <span>View Case Study</span>
                      </button>
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/75 text-white text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {project.stars && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/90 text-white text-[10px] font-black backdrop-blur-md">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{project.stars}</span>
                      </div>
                    )}

                    {project.lastUpdated && (
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/85 text-emerald-300 text-[10px] font-extrabold backdrop-blur-md border border-emerald-500/30 shadow-xs">
                        <Clock className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Updated {project.lastUpdated}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 text-indigo-500 mt-1" />
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                          {project.subtitle}
                        </p>
                        {project.lastUpdated && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-slate-700/60">
                            <Calendar className="w-3 h-3 text-indigo-500 shrink-0" />
                            <span>{project.lastUpdated}</span>
                          </span>
                        )}
                      </div>

                      {/* Project Filterable Tags */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 py-1">
                          {project.tags.map((t) => (
                            <button
                              key={t}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedTag(t);
                              }}
                              className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase border transition-colors ${getTagBadgeStyle(t)} hover:opacity-80`}
                              title={`Filter by ${t}`}
                            >
                              #{t}
                            </button>
                          ))}
                        </div>
                      )}

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 font-medium">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Icon Badges */}
                    <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 5).map((tech) => {
                          const { icon: TechIcon, style } = getTechBadgeConfig(tech);
                          return (
                            <span
                              key={tech}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-extrabold border transition-colors ${style}`}
                            >
                              <TechIcon className="w-3 h-3 shrink-0" />
                              <span>{tech}</span>
                            </span>
                          );
                        })}
                        {project.techStack.length > 5 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700 text-[10px] font-extrabold">
                            +{project.techStack.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Quick Card Actions */}
                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => setActiveProjectModal(project)}
                          className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          Read Case Study →
                        </button>

                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors"
                              title="GitHub Repo"
                            >
                              <Github className="w-3.5 h-3.5" />
                            </a>
                          )}

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors"
                              title="Live Demo"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>

                    </div>

                  </div>

                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};

