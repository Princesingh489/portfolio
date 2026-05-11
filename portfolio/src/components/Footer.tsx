import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer({ isDark }: { isDark: boolean }) {
  return (
    <footer className={`section-container border-t ${isDark ? 'border-white/5' : 'border-[var(--color-surface-200)]'}`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-lg font-bold gradient-text" style={{ fontFamily: 'Space Grotesk' }}>
              &lt;Prince /&gt;
            </span>
            <p className={`text-sm mt-2 ${isDark ? 'text-[var(--color-surface-500)]' : 'text-[var(--color-surface-400)]'}`}>
              Built with <Heart size={12} className="inline text-red-400 mx-1" /> using React & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: <Github size={18} />, href: 'https://github.com/Princesingh489', label: 'GitHub' },
              { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/PrinceKumarSingh5', label: 'LinkedIn' },
              { icon: <Mail size={18} />, href: 'mailto:Raj9596prince@gmail.com', label: 'Email' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className={`p-2.5 rounded-lg transition-all ${
                  isDark ? 'text-[var(--color-surface-400)] hover:text-[var(--color-primary-400)] hover:bg-white/5' : 'text-[var(--color-surface-500)] hover:text-[var(--color-primary-600)] hover:bg-[var(--color-surface-100)]'
                }`}
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          <p className={`text-xs ${isDark ? 'text-[var(--color-surface-600)]' : 'text-[var(--color-surface-400)]'}`}>
            © {new Date().getFullYear()} Prince Kumar Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
