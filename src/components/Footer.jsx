import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--footer-bg)' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3
              className="font-bold text-base tracking-[0.1em] mb-1"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>{'<'}</span>
              <span className="gradient-text-accent">SHANU Portfolio</span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>{' />'}</span>
            </h3>
            <p className="text-sm font-semibold text-slate-400">
              Full Stack Engineer
            </p>
            <a
              href="tel:+918630680768"
              className="text-xs font-semibold tracking-wider mt-1.5 block hover:text-blue-500 transition-colors"
              style={{ fontFamily: "'JetBrains Mono', monospace", textDecoration: 'none', color: 'var(--text-muted)' }}
            >
              +91 8630680768
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FaGithub size={17} />, href: 'https://github.com/ShanuPrajapati12005', label: 'GitHub' },
              { icon: <FaLinkedin size={17} />, href: 'https://www.linkedin.com/in/shanu-prajapati-313b44322/', label: 'LinkedIn' },
              { icon: <FaXTwitter size={17} />, href: 'https://x.com/SPrajapati99535', label: 'X' },
              { icon: <FiMail size={17} />, href: 'mailto:prajapatishanu111@gmail.com', label: 'Email' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'rgba(255, 255, 255, 0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px my-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

        {/* Copyright */}
        <p className="text-center text-sm font-semibold tracking-wider" style={{ color: 'rgba(255, 255, 255, 0.4)', fontFamily: "'JetBrains Mono', monospace" }}>
          © 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
