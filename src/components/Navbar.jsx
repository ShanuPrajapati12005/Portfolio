import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Coding', href: '#coding' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{ padding: scrolled ? '10px 16px' : '16px 16px' }}
    >
      <nav
        className="transition-all duration-500 w-full"
        style={{
          maxWidth: scrolled ? '860px' : '1200px',
          background: 'var(--bg-navbar)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--border-subtle)',
          borderRadius: scrolled ? '20px' : '16px',
          boxShadow: scrolled
            ? '0 4px 30px rgba(0,0,0,0.08), 0 0 0 1px var(--border-subtle)'
            : '0 1px 4px rgba(0,0,0,0.04)',
          padding: '0 24px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <motion.a
          href="#home"
          className="flex-shrink-0 flex items-center gap-0.5 group"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: '0.9rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
          }}
        >
          <span className="text-blue-500/80 transition-transform duration-300 group-hover:-translate-x-0.5">&lt;</span>
          <span 
            className="gradient-text-accent font-extrabold tracking-tight" 
            style={{ 
              textShadow: '0 0 12px rgba(59, 130, 246, 0.25)' 
            }}
          >
            SHANU
          </span>
          <span className="font-light tracking-wider text-[11px] ml-1.5 opacity-80" style={{ color: 'var(--text-secondary)' }}>
            Portfolio
          </span>
          <span className="text-purple-500/80 transition-transform duration-300 group-hover:translate-x-0.5">&nbsp;/&gt;</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-300"
                style={{
                  color: isActive ? 'var(--text-accent)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  borderRadius: '10px',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.color = 'var(--text-secondary)';
                }}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Side: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.9, rotate: 180 }}
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-accent)',
              cursor: 'pointer',
            }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiSun size={16} />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiMoon size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="absolute top-full left-4 right-4 mt-2 md:hidden"
            style={{
              background: 'var(--bg-navbar)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
              padding: '8px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="block px-4 py-3 text-sm font-medium rounded-xl transition-colors"
                style={{
                  color: activeSection === link.href.slice(1) ? 'var(--text-accent)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  background: activeSection === link.href.slice(1) ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
