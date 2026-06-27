import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M16.102 17.93l-2.69 2.607c-.466.451-1.211.451-1.677 0l-4.51-4.37c-.467-.453-.467-1.173 0-1.626L11.73 9.935c.466-.452 1.211-.452 1.678 0l2.693 2.612c.466.452.466 1.174 0 1.627l-2.69 2.607c-.466.452-1.211.452-1.678 0l-1.01-1.026c-.466-.452-1.211-.452-1.678 0s-.466 1.173 0 1.626l1.01 1.026c.466.452 1.211.452 1.678 0z" />
    <path d="M22 14.077c0-.284-.117-.557-.323-.757l-6.386-6.19c-.466-.452-1.211-.452-1.678 0l-2.69 2.607c-.467.453-.467 1.173 0 1.626l2.69 2.607c.466.452 1.211.452 1.678 0l2.69-2.607c.206-.2.323-.473.323-.757" opacity="0.4" />
    <path d="M5.937 13.06c-.466-.452-1.211-.452-1.677 0L1.57 15.667c-.466.452-.466 1.173 0 1.626l4.51 4.37c.467.453 1.211.453 1.678 0l2.69-2.607c.466-.452.466-1.173 0-1.626L5.937 13.06z" />
  </svg>
);

const GeeksforGeeksIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5c1.86 0 3.44 1.13 4.14 2.75L13 12h1.5v1.5H16v1.5h-2.5v-1H12v-1.5H9.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5V11h1.54c-.21-1.16-1.21-2-2.44-2-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5h3.04c-.34.88-1.2 1.5-2.22 1.5z" />
  </svg>
);

const platforms = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Shanu_Prajapati/',
    icon: <LeetCodeIcon />,
    color: '#FFA116',
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/profile/prajapati87h4?tab=activity',
    icon: <GeeksforGeeksIcon />,
    color: '#298D46',
  }
];

const CodingProfiles = () => {
  return (
    <section id="coding" className="relative" style={{ background: 'transparent' }}>
      <div className="section-wrapper">
        {/* Massive Elevated Card for Entire Section */}
        <div className="section-card p-6 sm:p-10 md:p-12 relative">
          {/* Section Heading - Left-Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading gradient-heading font-black !mb-10"
          >
            Coding Profiles
          </motion.div>

          {/* Platforms Buttons Container */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-2">
            {platforms.map((platform, i) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -3,
                  scale: 1.01,
                  borderColor: 'rgba(59, 130, 246, 0.25)', // Subtle theme-neutral border color
                  boxShadow: 'var(--shadow-md)', // Standard subtle shadow
                  transition: { type: 'spring', stiffness: 400, damping: 25 }
                }}
                className="flex items-center justify-between gap-6 px-8 py-7 rounded-2xl w-full sm:w-auto min-w-[320px] relative overflow-hidden group"
                style={{
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--border-card)',
                  color: 'var(--text-primary)',
                  fontFamily: "'JetBrains Mono', monospace",
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Left block: Icon + Name */}
                <div className="flex items-center gap-3.5">
                  <span className="flex items-center text-xl transition-transform duration-300 group-hover:scale-105" style={{ color: platform.color }}>
                    {platform.icon}
                  </span>
                  <span className="font-bold text-[1.02rem]" style={{ color: 'var(--text-primary)' }}>
                    {platform.name}
                  </span>
                </div>

                {/* Right block: Subtle "View Profile" link text */}
                <div 
                  className="flex items-center gap-1.5 text-xs font-bold transition-all duration-300"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <span className="group-hover:text-[var(--text-primary)] transition-colors duration-300">View Profile</span>
                  <FiExternalLink size={13} className="opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
