import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    school: 'Lovely Professional University',
    degree: 'B.Tech — Computer Science and Engineering',
    grade: 'CGPA: 6.50',
    location: 'Pagwara, Punjab',
    period: 'August 2021 – July 2025',
  },
  {
    school: 'Indian Public School',
    degree: 'Senior Secondary (Intermediate)',
    grade: 'Percentage: 61.8%',
    location: 'Hajipur, Bihar',
    period: 'April 2019 – March 2021',
  },
  {
    school: 'KCI Public School',
    degree: 'Matriculation',
    grade: 'Percentage: 73.9%',
    location: 'Mahua, Bihar',
    period: 'April 2018 – March 2019',
  },
];

const training = {
  title: 'Python — Self Paced (Programming Pathshala)',
  year: '2025',
  points: [
    'Hands-on experience with NumPy and Pandas',
    'Data cleaning and preprocessing for analysis',
    'CSV and Excel data manipulation and reporting',
    'Small data analysis projects for real-world problem solving',
  ],
};

export default function Education({ isDark }: { isDark: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-container py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-mono tracking-widest uppercase ${isDark ? 'text-[var(--color-primary-400)]' : 'text-[var(--color-primary-600)]'}`}>
            — Education & Training
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3" style={{ fontFamily: 'Space Grotesk' }}>
            <span className={isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}>Academic </span>
            <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className={`absolute left-6 sm:left-8 top-0 bottom-0 w-px ${isDark ? 'bg-white/10' : 'bg-[var(--color-surface-200)]'}`} />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] border-4 border-[var(--color-surface-950)] z-10" style={{ borderColor: isDark ? 'var(--color-surface-950)' : 'var(--color-surface-50)' }} />

                <div className="glass-card rounded-2xl p-6 hover-lift">
                  <div className="flex items-start gap-3 mb-2">
                    <GraduationCap size={20} className="text-[var(--color-primary-400)] shrink-0 mt-0.5" />
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}`} style={{ fontFamily: 'Space Grotesk' }}>
                      {edu.school}
                    </h3>
                  </div>
                  <p className={`text-sm font-medium mb-2 ml-8 ${isDark ? 'text-[var(--color-surface-300)]' : 'text-[var(--color-surface-700)]'}`}>
                    {edu.degree}
                  </p>
                  <p className="text-sm font-mono ml-8 gradient-text-warm font-semibold mb-3">{edu.grade}</p>
                  <div className={`flex flex-wrap gap-4 ml-8 text-xs ${isDark ? 'text-[var(--color-surface-400)]' : 'text-[var(--color-surface-500)]'}`}>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {edu.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {edu.period}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Training */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="max-w-3xl mx-auto mt-16"
        >
          <h3 className={`text-xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}`} style={{ fontFamily: 'Space Grotesk' }}>
            Training
          </h3>
          <div className="glass-card rounded-2xl p-6 sm:p-8 hover-lift">
            <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
              <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}`}>
                {training.title}
              </h4>
              <span className={`text-xs font-mono px-3 py-1 rounded-full ${isDark ? 'bg-white/5 text-[var(--color-primary-400)]' : 'bg-[var(--color-primary-50)] text-[var(--color-primary-600)]'}`}>
                {training.year}
              </span>
            </div>
            <ul className="space-y-2">
              {training.points.map((p) => (
                <li key={p} className={`text-sm flex items-start gap-2 ${isDark ? 'text-[var(--color-surface-300)]' : 'text-[var(--color-surface-600)]'}`}>
                  <span className="text-[var(--color-neon-400)] mt-1">✦</span> {p}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
