import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { scrollTo } from '../hooks/useScrollTo';

export default function Hero({ isDark }: { isDark: boolean }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              isDark ? 'bg-white/5 text-[var(--color-primary-300)] border border-white/10' : 'bg-[var(--color-primary-50)] text-[var(--color-primary-600)] border border-[var(--color-primary-100)]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Opportunities
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: 'Space Grotesk' }}>
            <span className={isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}>Hi, I'm</span>
            <br />
            <span className="gradient-text">Prince Kumar Singh</span>
          </h1>

          <div className={`text-xl sm:text-2xl font-medium mb-6 h-16 ${isDark ? 'text-[var(--color-surface-300)]' : 'text-[var(--color-surface-700)]'}`}>
            <TypeAnimation
              sequence={[
                'Data Analyst 📊', 2000,
                'Python Developer 🐍', 2000,
                'AI/ML Enthusiast 🤖', 2000,
                'Problem Solver 💡', 2000,
              ]}
              repeat={Infinity}
              speed={40}
              cursor={true}
            />
          </div>

          <p className={`text-base sm:text-lg mb-8 max-w-lg leading-relaxed ${isDark ? 'text-[var(--color-surface-400)]' : 'text-[var(--color-surface-600)]'}`}>
            B.Tech graduate in Computer Science from Lovely Professional University, passionate about turning data into actionable insights and building intelligent AI-powered applications.
          </p>

          <div className="flex items-center gap-2 mb-8">
            <MapPin size={16} className="text-[var(--color-primary-400)]" />
            <span className={`text-sm ${isDark ? 'text-[var(--color-surface-400)]' : 'text-[var(--color-surface-600)]'}`}>Hajipur, Bihar, India</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => scrollTo('contact')} className="bg-transparent border-none p-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="magnetic-btn px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] shadow-lg"
              >
                Get In Touch
              </motion.button>
            </button>

            <button onClick={() => scrollTo('projects')} className="bg-transparent border-none p-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3.5 rounded-xl font-semibold border transition-all ${
                  isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-[var(--color-surface-200)] text-[var(--color-surface-700)] hover:bg-[var(--color-surface-100)]'
                }`}
              >
                View Projects
              </motion.button>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-8">
            {[
              { icon: <Github size={20} />, href: 'https://github.com/Princesingh489', label: 'GitHub' },
              { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/PrinceKumarSingh5', label: 'LinkedIn' },
              { icon: <Mail size={20} />, href: 'mailto:Raj9596prince@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-xl transition-all ${
                  isDark ? 'bg-white/5 hover:bg-white/10 text-[var(--color-surface-300)] hover:text-[var(--color-primary-400)]' : 'bg-[var(--color-surface-100)] hover:bg-[var(--color-primary-50)] text-[var(--color-surface-600)] hover:text-[var(--color-primary-600)]'
                }`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex justify-center z-10"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border border-dashed opacity-20"
              style={{ borderColor: 'var(--color-primary-400)' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-10 rounded-full border border-dashed opacity-10"
              style={{ borderColor: 'var(--color-accent-400)' }}
            />
            <div className="relative w-72 h-72 rounded-full overflow-hidden animate-pulse-glow gradient-border">
              <img
                src="/profile.png"
                alt="Prince Kumar Singh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button onClick={() => scrollTo('about')} className="cursor-pointer bg-transparent border-none p-0">
          <ArrowDown size={24} className={`${isDark ? 'text-[var(--color-surface-500)]' : 'text-[var(--color-surface-400)]'}`} />
        </button>
      </motion.div>
    </section>
  );
}
