import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

export default function Contact({ isDark }: { isDark: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:Raj9596prince@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'Raj9596prince@gmail.com', href: 'mailto:Raj9596prince@gmail.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+91-8292179091', href: 'tel:+918292179091' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Hajipur, Bihar, India', href: '#' },
    { icon: <Github size={20} />, label: 'GitHub', value: 'Princesingh489', href: 'https://github.com/Princesingh489' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'PrinceKumarSingh5', href: 'https://linkedin.com/in/PrinceKumarSingh5' },
  ];

  return (
    <section id="contact" className="section-container py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-mono tracking-widest uppercase ${isDark ? 'text-[var(--color-primary-400)]' : 'text-[var(--color-primary-600)]'}`}>
            — Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3" style={{ fontFamily: 'Space Grotesk' }}>
            <span className={isDark ? 'text-white' : 'text-[var(--color-surface-900)]'}>Let's </span>
            <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <p className={`text-base mb-8 leading-relaxed ${isDark ? 'text-[var(--color-surface-400)]' : 'text-[var(--color-surface-600)]'}`}>
              I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is always open!
            </p>
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                  isDark ? 'hover:bg-white/5' : 'hover:bg-[var(--color-surface-100)]'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isDark ? 'bg-[var(--color-primary-500)]/10 text-[var(--color-primary-400)]' : 'bg-[var(--color-primary-50)] text-[var(--color-primary-500)]'
                }`}>
                  {info.icon}
                </div>
                <div>
                  <p className={`text-xs ${isDark ? 'text-[var(--color-surface-500)]' : 'text-[var(--color-surface-400)]'}`}>{info.label}</p>
                  <p className={`text-sm font-medium ${isDark ? 'text-[var(--color-surface-200)]' : 'text-[var(--color-surface-700)]'}`}>{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="glass-card rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div>
              <label className={`text-sm font-medium block mb-2 ${isDark ? 'text-[var(--color-surface-300)]' : 'text-[var(--color-surface-700)]'}`}>Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--color-primary-500)]/50 ${
                  isDark ? 'bg-white/5 border border-white/10 text-white placeholder-[var(--color-surface-500)]' : 'bg-[var(--color-surface-50)] border border-[var(--color-surface-200)] text-[var(--color-surface-900)] placeholder-[var(--color-surface-400)]'
                }`}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className={`text-sm font-medium block mb-2 ${isDark ? 'text-[var(--color-surface-300)]' : 'text-[var(--color-surface-700)]'}`}>Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--color-primary-500)]/50 ${
                  isDark ? 'bg-white/5 border border-white/10 text-white placeholder-[var(--color-surface-500)]' : 'bg-[var(--color-surface-50)] border border-[var(--color-surface-200)] text-[var(--color-surface-900)] placeholder-[var(--color-surface-400)]'
                }`}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className={`text-sm font-medium block mb-2 ${isDark ? 'text-[var(--color-surface-300)]' : 'text-[var(--color-surface-700)]'}`}>Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none focus:ring-2 focus:ring-[var(--color-primary-500)]/50 ${
                  isDark ? 'bg-white/5 border border-white/10 text-white placeholder-[var(--color-surface-500)]' : 'bg-[var(--color-surface-50)] border border-[var(--color-surface-200)] text-[var(--color-surface-900)] placeholder-[var(--color-surface-400)]'
                }`}
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] flex items-center justify-center gap-2 shadow-lg"
            >
              <Send size={18} /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
