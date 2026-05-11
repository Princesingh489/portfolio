import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
  { name: 'Python', issuer: 'Programming Pathshala', year: '2025' },
  { name: 'Excel', issuer: 'Coursera', year: '2026' },
  { name: 'SQL for Data Science', issuer: 'Coursera', year: '2026' },
  { name: 'Pandas for Data Analysis', issuer: 'GeeksforGeeks (GFG)', year: '2025' },
];

export default function Certifications({ isDark }: { isDark: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="section-container py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-mono tracking-widest uppercase ${isDark ? 'text-[var(--color-primary-400)]' : 'text-[var(--color-primary-600)]'}`}>
            — Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3" style={{ fontFamily: 'Space Grotesk' }}>
            <span className={isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}>Certificates & </span>
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass-card rounded-2xl p-6 text-center hover-lift group cursor-default"
            >
              <div className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4 transition-all group-hover:scale-110 ${
                isDark ? 'bg-[var(--color-primary-500)]/10 text-[var(--color-primary-400)]' : 'bg-[var(--color-primary-50)] text-[var(--color-primary-500)]'
              }`}>
                <Award size={28} />
              </div>
              <h3 className={`font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}`}>
                {cert.name}
              </h3>
              <p className={`text-xs mb-2 ${isDark ? 'text-[var(--color-surface-400)]' : 'text-[var(--color-surface-500)]'}`}>
                {cert.issuer}
              </p>
              <span className={`text-xs font-mono ${isDark ? 'text-[var(--color-accent-400)]' : 'text-[var(--color-accent-600)]'}`}>
                {cert.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
