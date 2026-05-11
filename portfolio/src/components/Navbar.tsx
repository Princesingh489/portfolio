import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { scrollTo } from '../hooks/useScrollTo';

const navLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'education', label: 'Education' },
  { to: 'certifications', label: 'Certificates' },
  { to: 'contact', label: 'Contact' },
];

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark ? 'glass shadow-lg' : 'glass-light shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="cursor-pointer bg-transparent border-none p-0">
          <motion.span whileHover={{ scale: 1.05 }} className="text-xl font-bold gradient-text" style={{ fontFamily: 'Space Grotesk' }}>
            &lt;Prince /&gt;
          </motion.span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.to}
              onClick={() => scrollTo(link.to)}
              className={`px-4 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all duration-300 bg-transparent border-none ${
                isDark ? 'text-[var(--color-surface-200)] hover:bg-white/5 hover:text-[var(--color-primary-400)]' : 'text-[var(--color-surface-700)] hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary-600)]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl transition-colors ${
              isDark ? 'bg-white/5 hover:bg-white/10 text-yellow-400' : 'bg-[var(--color-primary-50)] hover:bg-[var(--color-primary-100)] text-[var(--color-primary-600)]'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <button className="md:hidden p-2 rounded-lg" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden ${isDark ? 'glass' : 'glass-light'}`}
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div key={link.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <button
                    onClick={() => { scrollTo(link.to); setMobileOpen(false); }}
                    className={`w-full text-left block px-4 py-3 rounded-lg text-sm font-medium cursor-pointer transition-all bg-transparent border-none ${
                      isDark ? 'text-[var(--color-surface-200)] hover:bg-white/5' : 'text-[var(--color-surface-700)] hover:bg-[var(--color-primary-50)]'
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
