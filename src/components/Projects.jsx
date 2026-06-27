import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import { TbApi, TbBrain, TbDatabase, TbPlugConnected } from 'react-icons/tb';

const projects = [
  {
    title: 'Syncora',
    description: 'A production-grade developer workspace that syncs GitHub issues directly into your IDE. Decomposes tasks instantly with Gemini AI and opens the exact file or code line in VS Code — one click from browser to editor.',
    image: '/projects/syncora.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Gemini AI', 'GitHub OAuth', 'Tailwind'],
    github: 'https://github.com/ShanuPrajapati12005/syncora',
    demo: 'https://syncora-peach.vercel.app/',
    gradient: 'from-rose-500/10 to-purple-500/10',
    glowColor: 'rgba(244, 63, 94, 0.12)',
    borderColor: 'rgba(168, 85, 247, 0.3)',
  },
  {
    title: 'EventSphere',
    description: 'A premium event discovery & booking platform with fluid GSAP animations, glassmorphism UI, and real-time state management. Browse, filter, and book events with a buttery-smooth experience built for scale.',
    image: '/projects/eventsphere.png',
    tags: ['React', 'Tailwind', 'Zustand', 'GSAP', 'Node.js', 'Express'],
    github: 'https://github.com/ShanuPrajapati12005/eventsphere-platform',
    demo: '#',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    glowColor: 'rgba(16, 185, 129, 0.12)',
    borderColor: 'rgba(20, 184, 166, 0.3)',
  },
  {
    title: 'BRD Agent',
    description: 'An AI-powered multi-modal agent that converts fragmented inputs — text, meeting notes, wireframes, and diagrams — into structured, conflict-checked Business Requirements Documents using Gemini AI on GCP.',
    image: '/projects/brd-agent.png',
    tags: ['React', 'Python', 'Gemini AI', 'FastAPI', 'Firebase', 'GCP'],
    github: 'https://github.com/ShanuPrajapati12005/BRD-AGENT',
    demo: '#',
    gradient: 'from-violet-500/10 to-indigo-500/10',
    glowColor: 'rgba(139, 92, 246, 0.12)',
    borderColor: 'rgba(99, 102, 241, 0.3)',
  },
  {
    title: 'Runtime Hacker Club',
    description: 'Official frontend for the Runtime Hacker Club at IMS Engineering College — a fully responsive, type-safe club portal built with React, TypeScript, and Vite to showcase events, members, and achievements.',
    image: '/projects/runtime-hc.png',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    github: 'https://github.com/ShanuPrajapati12005/runtime-hacker-club-frontend',
    demo: '#',
    gradient: 'from-orange-500/10 to-red-500/10',
    glowColor: 'rgba(249, 115, 22, 0.12)',
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
];

const tagInfo = {
  'React': { icon: <FaReact />, color: '#61DAFB' },
  'Node.js': { icon: <FaNodeJs />, color: '#339933' },
  'Langchain': { icon: <TbBrain />, color: '#1C3C3C' },
  'Vector DB': { icon: <TbDatabase />, color: '#7C3AED' },
  'Express': { icon: <SiExpress />, color: '#888888' },
  'MongoDB': { icon: <SiMongodb />, color: '#47A248' },
  'WebSocket': { icon: <TbPlugConnected />, color: '#2B6CB0' },
  'REST API': { icon: <TbApi />, color: '#FF6C37' },
  'Python': { icon: <FaPython />, color: '#3776AB' },
  'GenAI': { icon: <TbBrain />, color: '#10B981' },
  'Tailwind': { icon: <SiTailwindcss />, color: '#06B6D4' },
  'Gemini AI': { icon: <TbBrain />, color: '#8B5CF6' },
  'GitHub OAuth': { icon: <TbPlugConnected />, color: '#181717' },
  'Helmet': { icon: <TbApi />, color: '#F59E0B' },
  'Zustand': { icon: <TbDatabase />, color: '#FF6C37' },
  'GSAP': { icon: <TbBrain />, color: '#88CE02' },
  'FastAPI': { icon: <TbApi />, color: '#009688' },
  'Firebase': { icon: <TbDatabase />, color: '#FFCA28' },
  'GCP': { icon: <TbDatabase />, color: '#4285F4' },
  'TypeScript': { icon: <TbBrain />, color: '#3178C6' },
  'Vite': { icon: <TbBrain />, color: '#646CFF' },
};

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden" style={{ background: 'transparent' }}>
      {/* Background Glows */}
      <div className="bg-glow-1" style={{ bottom: '10%', left: '-8%' }} />

      <div className="section-wrapper">
        {/* Massive Elevated Card for Entire Section */}
        <div className="section-card p-5 sm:p-8 md:p-12 relative">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading gradient-heading font-black"
          >
            Featured Projects
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  zIndex: 10,
                  borderColor: project.borderColor || 'rgba(59, 130, 246, 0.3)',
                  boxShadow: `0 15px 35px ${project.glowColor || 'rgba(59, 130, 246, 0.12)'}`,
                  transition: { type: 'spring', stiffness: 400, damping: 25 }
                }}
                className="gradient-border-card group overflow-hidden"
                style={{
                  boxShadow: 'var(--shadow-card)',
                  background: 'var(--bg-card-solid)',
                  border: '1px solid var(--border-card)',
                }}
              >
                {/* Image / Logo Fallback */}
                <div className={`h-48 overflow-hidden relative bg-gradient-to-br ${project.gradient}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Premium full-card logo fallback — shown when image is missing */}
                  <div
                    className="absolute inset-0 hidden flex-col items-center justify-center"
                    style={{
                      background: `radial-gradient(ellipse at 50% 40%, ${project.glowColor?.replace('0.12','0.45')} 0%, transparent 70%), linear-gradient(135deg, #0a0e1a 0%, #0f172a 100%)`,
                    }}
                  >
                    {/* Decorative dot grid */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `radial-gradient(circle, ${project.borderColor} 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }} />
                    {/* Outer glow ring */}
                    <div className="absolute w-36 h-36 rounded-full opacity-20" style={{
                      border: `1px solid ${project.borderColor}`,
                      boxShadow: `0 0 40px ${project.glowColor?.replace('0.12','0.5')}`,
                    }} />
                    {/* Inner ring */}
                    <div className="absolute w-24 h-24 rounded-full opacity-30" style={{
                      border: `1px solid ${project.borderColor}`,
                    }} />
                    {/* Giant initials */}
                    <div
                      className="relative z-10 flex items-center justify-center font-black"
                      style={{
                        fontSize: '3.5rem',
                        lineHeight: 1,
                        color: '#fff',
                        letterSpacing: '-0.04em',
                        textShadow: `0 0 40px ${project.borderColor}, 0 0 80px ${project.glowColor?.replace('0.12','0.8')}`,
                      }}
                    >
                      {project.title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                    {/* Project name under initials */}
                    <div
                      className="relative z-10 mt-3 font-bold uppercase"
                      style={{
                        fontSize: '0.6rem',
                        letterSpacing: '0.28em',
                        color: 'rgba(255,255,255,0.55)',
                      }}
                    >
                      {project.title}
                    </div>
                    {/* Bottom accent line */}
                    <div className="absolute bottom-5 w-12 h-0.5 rounded-full" style={{
                      background: `linear-gradient(90deg, transparent, ${project.borderColor}, transparent)`,
                    }} />
                  </div>
                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4"
                    style={{ background: 'rgba(10, 14, 26, 0.6)', backdropFilter: 'blur(6px)' }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:border-white/40 transition-colors"
                    >
                      <FiGithub size={18} />
                    </motion.a>
                    {project.demo && project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:border-white/40 transition-colors"
                      >
                        <FiExternalLink size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6" style={{ background: 'var(--bg-card-solid)' }}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <div className="flex gap-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg transition-colors"
                        style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-accent)'; e.currentTarget.style.background = 'rgba(59,130,246,0.08)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; }}
                      >
                        <FiGithub size={16} />
                      </a>
                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg transition-colors"
                          style={{ color: 'var(--text-muted)' }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-accent)'; e.currentTarget.style.background = 'rgba(59,130,246,0.08)'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'transparent'; }}
                        >
                          <FiExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  {/* Tech Badges with Icons */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="group/badge inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold select-none border transition-all duration-300"
                        style={{
                          background: 'var(--bg-category-pill)',
                          borderColor: 'var(--border-subtle)',
                          color: 'var(--text-secondary)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--bg-tertiary)';
                          e.currentTarget.style.borderColor = (tagInfo[tag]?.color || '#3B82F6') + '40';
                          e.currentTarget.style.transform = 'translateY(-1.5px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'var(--bg-category-pill)';
                          e.currentTarget.style.borderColor = 'var(--border-subtle)';
                          e.currentTarget.style.transform = 'none';
                        }}
                      >
                        {tagInfo[tag] && (
                          <span
                            className="text-[13px] transition-transform duration-300 group-hover/badge:scale-110"
                            style={{ color: tagInfo[tag].color }}
                          >
                            {tagInfo[tag].icon}
                          </span>
                        )}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
