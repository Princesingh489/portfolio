import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'NumPy', level: 85 },
      { name: 'Pandas', level: 88 },
      { name: 'LangChain', level: 78 },
      { name: 'Matplotlib', level: 80 },
      { name: 'FastAPI', level: 75 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'Excel', level: 85 },
      { name: 'Tableau', level: 80 },
      { name: 'Power BI', level: 75 },
      { name: 'Jupyter Notebook', level: 90 },
    ],
  },
  {
    title: 'Cloud & Others',
    skills: [
      { name: 'AWS (EC2)', level: 65 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'Streamlit', level: 85 },
      { name: 'Google Gemini', level: 78 },
    ],
  },
];

export default function Skills({ isDark }: { isDark: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-container py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-mono tracking-widest uppercase ${isDark ? 'text-[var(--color-primary-400)]' : 'text-[var(--color-primary-600)]'}`}>
            — Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3" style={{ fontFamily: 'Space Grotesk' }}>
            <span className={isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}>My </span>
            <span className="gradient-text">Skill Set</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.15, duration: 0.5 }}
              className={`glass-card rounded-2xl p-6 sm:p-8 hover-lift`}
            >
              <h3 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}`} style={{ fontFamily: 'Space Grotesk' }}>
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className={`text-sm font-medium ${isDark ? 'text-[var(--color-surface-200)]' : 'text-[var(--color-surface-700)]'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-xs font-mono ${isDark ? 'text-[var(--color-primary-400)]' : 'text-[var(--color-primary-600)]'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/5' : 'bg-[var(--color-surface-100)]'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: ci * 0.15 + si * 0.1 + 0.5, duration: 1.2, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}`} style={{ fontFamily: 'Space Grotesk' }}>
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Problem-Solving', 'Team Player', 'Leadership', 'Adaptability', 'Communication', 'Critical Thinking'].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium cursor-default transition-all ${
                  isDark
                    ? 'bg-gradient-to-r from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 text-[var(--color-primary-300)] border border-[var(--color-primary-500)]/20'
                    : 'bg-gradient-to-r from-[var(--color-primary-50)] to-[var(--color-accent-500)]/5 text-[var(--color-primary-600)] border border-[var(--color-primary-200)]'
                }`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
