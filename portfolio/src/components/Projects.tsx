import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Bot, BarChart3 } from 'lucide-react';

const projects = [
  {
    title: 'AI Document Q&A System',
    year: '2026',
    icon: <Bot size={28} />,
    description: 'A web application where users can upload PDF documents and images, then ask questions through a chat interface. Built an automated system using smart search with FAISS to find the most relevant sections and generate accurate answers.',
    bullets: [
      'Upload PDF documents and images with chat interface',
      'Smart search using FAISS vector similarity',
      'Accurate answers based only on uploaded files',
    ],
    tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Google Gemini', 'SQLite'],
    gradient: 'from-[var(--color-primary-500)] to-[var(--color-cyber-500)]',
    github: 'https://github.com/Princesingh489',
  },
  {
    title: 'E-commerce Analytics Dashboard',
    year: '2026',
    icon: <BarChart3 size={28} />,
    description: 'An end-to-end analytics project where sales data was processed and analyzed to generate business insights. Created an interactive dashboard to visualize sales trends, customer behavior, and product performance.',
    bullets: [
      'SQL data extraction & advanced Python analysis',
      'Interactive dashboard with filters and KPIs',
      'Top products, regional trends & discount impact analysis',
    ],
    tech: ['Python', 'SQL Server', 'Tableau'],
    gradient: 'from-[var(--color-accent-500)] to-[var(--color-primary-500)]',
    github: 'https://github.com/Princesingh489',
  },
];

export default function Projects({ isDark }: { isDark: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-container py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-mono tracking-widest uppercase ${isDark ? 'text-[var(--color-primary-400)]' : 'text-[var(--color-primary-600)]'}`}>
            — My Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3" style={{ fontFamily: 'Space Grotesk' }}>
            <span className={isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}>Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-gradient-to-br ${project.gradient} text-white shadow-lg`}>
                    {project.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}`} style={{ fontFamily: 'Space Grotesk' }}>
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-mono ${isDark ? 'bg-white/5 text-[var(--color-primary-400)]' : 'bg-[var(--color-primary-50)] text-[var(--color-primary-600)]'}`}>
                        {project.year}
                      </span>
                    </div>

                    <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-[var(--color-surface-400)]' : 'text-[var(--color-surface-600)]'}`}>
                      {project.description}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {project.bullets.map((b) => (
                        <li key={b} className={`text-sm flex items-start gap-2 ${isDark ? 'text-[var(--color-surface-300)]' : 'text-[var(--color-surface-700)]'}`}>
                          <span className="text-[var(--color-primary-400)] mt-1">▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((t) => (
                        <span key={t} className={`px-3 py-1 rounded-lg text-xs font-mono ${isDark ? 'bg-white/5 text-[var(--color-accent-400)] border border-white/5' : 'bg-[var(--color-accent-500)]/5 text-[var(--color-accent-600)] border border-[var(--color-accent-500)]/10'}`}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          isDark ? 'bg-white/5 hover:bg-white/10 text-[var(--color-surface-200)]' : 'bg-[var(--color-surface-100)] hover:bg-[var(--color-surface-200)] text-[var(--color-surface-700)]'
                        }`}
                      >
                        <Github size={16} /> Code
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] text-white"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
