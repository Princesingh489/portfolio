import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, BarChart3, Brain } from 'lucide-react';

const highlights = [
  { icon: <Code2 size={24} />, title: 'Python Developer', desc: 'Building robust applications' },
  { icon: <Database size={24} />, title: 'Data Analyst', desc: 'Transforming raw data to insights' },
  { icon: <BarChart3 size={24} />, title: 'Dashboard Builder', desc: 'Interactive visualizations' },
  { icon: <Brain size={24} />, title: 'AI Enthusiast', desc: 'LangChain & Gemini powered apps' },
];

export default function About({ isDark }: { isDark: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-container py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-mono tracking-widest uppercase ${isDark ? 'text-[var(--color-primary-400)]' : 'text-[var(--color-primary-600)]'}`}>
            — About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3" style={{ fontFamily: 'Space Grotesk' }}>
            <span className={isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}>Know Who </span>
            <span className="gradient-text">I Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-[var(--color-surface-300)]' : 'text-[var(--color-surface-600)]'}`}>
              I'm a <strong className="gradient-text-warm">B.Tech Computer Science graduate</strong> from Lovely Professional University with a deep passion for data analysis and AI development.
            </p>
            <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-[var(--color-surface-400)]' : 'text-[var(--color-surface-600)]'}`}>
              I specialize in building intelligent applications using Python, LangChain, and Google Gemini. I love working with data — from cleaning and preprocessing to creating interactive dashboards that tell compelling stories.
            </p>
            <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-[var(--color-surface-400)]' : 'text-[var(--color-surface-600)]'}`}>
              My projects range from AI-powered document Q&A systems to comprehensive e-commerce analytics dashboards. I'm always eager to learn new technologies and solve real-world problems through code.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Python', 'SQL', 'LangChain', 'Tableau', 'FastAPI', 'AWS'].map((tag) => (
                <span
                  key={tag}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isDark ? 'bg-white/5 text-[var(--color-primary-300)] border border-white/10' : 'bg-[var(--color-primary-50)] text-[var(--color-primary-600)] border border-[var(--color-primary-100)]'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`glass-card rounded-2xl p-6 hover-lift cursor-default ${isDark ? 'hover:border-[var(--color-primary-500)]/30' : ''}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? 'bg-[var(--color-primary-500)]/10 text-[var(--color-primary-400)]' : 'bg-[var(--color-primary-50)] text-[var(--color-primary-500)]'
                }`}>
                  {item.icon}
                </div>
                <h3 className={`font-semibold text-sm mb-1 ${isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}`}>{item.title}</h3>
                <p className={`text-xs ${isDark ? 'text-[var(--color-surface-400)]' : 'text-[var(--color-surface-500)]'}`}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
