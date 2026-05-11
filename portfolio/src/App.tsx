import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import Loader from './components/Loader';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={loading} />

      {!loading && (
        <>
          {/* Background layers */}
          <ParticleBackground isDark={isDark} />
          <div className="aurora-bg" />
          <div className="grid-pattern fixed inset-0 z-0 pointer-events-none" />

          {/* Navigation */}
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />

          {/* Main Content */}
          <main className="relative z-10">
            <Hero isDark={isDark} />
            <About isDark={isDark} />
            <Skills isDark={isDark} />
            <Projects isDark={isDark} />
            <Education isDark={isDark} />
            <Certifications isDark={isDark} />
            <Contact isDark={isDark} />
          </main>

          {/* Footer */}
          <Footer isDark={isDark} />
        </>
      )}
    </>
  );
}
