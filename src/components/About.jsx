import { motion } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const education = [
  {
    school: 'IMS Engineering College',
    degree: 'B.Tech - Computer Science & Engineering',
    year: '2023 - 2027',
    grade: 'CGPA: 8.4',
    icon: <FiBookOpen size={18} />,
  },
  {
    school: 'K.M.S.V.M. Inter College, Hapur',
    degree: 'Intermediate Education (PCM)',
    year: '2020 - 2022',
    grade: '82.8%',
    icon: <FiAward size={18} />,
  },
];

const DeveloperEditor = () => {
  const { isDark } = useTheme();

  // Themed editor styles
  const editorBg = isDark ? 'rgba(10, 14, 26, 0.88)' : 'rgba(255, 255, 255, 0.9)';
  const editorBorder = isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(15, 23, 42, 0.08)';
  const editorTextColor = isDark ? '#ABB2BF' : '#383A42';
  const headerBorderColor = isDark ? 'border-white/5' : 'border-black/5';

  // Syntax highlighting colors (One Dark vs One Light styles)
  const kwColor = isDark ? '#C678DD' : '#A626A4';  // Purple
  const varColor = isDark ? '#61AFEF' : '#4078F2'; // Blue
  const valColor = isDark ? '#98C379' : '#50A14F'; // Green (strings)
  const propColor = isDark ? '#E06C75' : '#E45649'; // Red/coral (keys)
  const textOpacity = isDark ? 'opacity-40' : 'opacity-60';

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[420px] mx-auto select-none"
    >
      {/* Background Glow */}
      <div
        className="absolute w-72 h-72 rounded-full blur-[80px] -z-10 opacity-40"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(139, 92, 246, 0.2))',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Editor Mockup Card */}
      <motion.div
        whileHover={{
          y: -6,
          rotateY: 5,
          rotateX: -3,
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 30px rgba(59, 130, 246, 0.08)'
        }}
        style={{
          perspective: 1000,
          transformStyle: 'preserve-3d',
          background: editorBg,
          backdropFilter: 'blur(20px)',
          border: editorBorder,
          borderRadius: '16px',
          boxShadow: 'var(--shadow-card)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, background 0.4s ease, border-color 0.4s ease',
          fontFamily: "'JetBrains Mono', monospace",
          color: editorTextColor,
        }}
        className="overflow-hidden p-5 text-[13px] leading-relaxed"
      >
        {/* Title bar */}
        <div className={`flex items-center justify-between mb-4 border-b ${headerBorderColor} pb-3`}>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className={`text-[10px] ${textOpacity} select-none tracking-wider uppercase font-semibold`}>developer.js</span>
          <div className="w-10" />
        </div>

        {/* Code Body */}
        <div className="space-y-0.5 pl-1 select-none text-[12.5px]">
          <div>
            <span style={{ color: kwColor }}>const</span>{' '}
            <span style={{ color: varColor }}>developer</span> = {'{'}
          </div>
          <div className="pl-4">
            <span style={{ color: propColor }}>name</span>: <span style={{ color: valColor }}>"Shanu"</span>,
          </div>
          <div className="pl-4">
            <span style={{ color: propColor }}>role</span>: <span style={{ color: valColor }}>"Full Stack Developer & GenAI Engineer"</span>,
          </div>
          <div className="pl-4">
            <span style={{ color: propColor }}>skills</span>: [
          </div>
          <div className="pl-8">
            <span style={{ color: valColor }}>"MERN Stack (Production-grade)"</span>,
          </div>
          <div className="pl-8">
            <span style={{ color: valColor }}>"GenAI & Agentic Workflows"</span>,
          </div>
          <div className="pl-8">
            <span style={{ color: valColor }}>"REST API Design & Security"</span>,
          </div>
          <div className="pl-8">
            <span style={{ color: valColor }}>"System Design & Clean Architecture"</span>
          </div>
          <div className="pl-4">
            ],
          </div>
          <div className="pl-4">
            <span style={{ color: propColor }}>achievements</span>: {'{'}
          </div>
          <div className="pl-8">
            <span style={{ color: propColor }}>leetcode</span>: <span style={{ color: valColor }}>"1750+ rating | 900+ problems"</span>,
          </div>
          <div className="pl-8">
            <span style={{ color: propColor }}>hackathons</span>: <span style={{ color: valColor }}>"2x Winner"</span>
          </div>
          <div className="pl-4">
            {'}'},
          </div>
          <div className="pl-4">
            <span style={{ color: propColor }}>status</span>: <span style={{ color: valColor }}>"Building. Learning. Shipping."</span>
          </div>
          <div>{'};'}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden" style={{ background: 'transparent' }}>
      {/* Background Decorations */}
      <div className="bg-glow-2" style={{ top: '20%', right: '-10%' }} />

      <div className="section-wrapper">
        {/* Massive Elevated Card for Entire Section */}
        <div className="section-card p-6 md:p-10 relative overflow-hidden">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading gradient-heading font-black !mb-10"
          >
            About Me
          </motion.div>

          {/* About + Editor Mockup Layout */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center mb-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: 'var(--shadow-card-hover)',
                  borderColor: 'rgba(59, 130, 246, 0.2)',
                }}
                className="p-8 md:py-10 md:px-9 rounded-3xl relative overflow-hidden transition-all duration-300 flex flex-col justify-center"
                style={{
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--border-card)',
                  boxShadow: 'var(--shadow-card)',
                  minHeight: '330px',
                }}
              >
                {/* Visual Accent Glow */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-20 pointer-events-none"
                  style={{ background: 'var(--gradient-accent)' }}
                />

                {/* Elegant Left Border Accent */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[4px]"
                  style={{ background: 'var(--gradient-accent)' }}
                />

                <p className="mb-4 leading-relaxed text-[15.5px] font-medium" style={{ color: 'var(--text-primary)' }}>
                  I am a Final Year B.Tech CSE Student, a 2x Hackathon Winner, and a dedicated Problem Solver. I develop Dynamic Full-Stack Applications using the MERN Stack and Next.js, and integrate GenAI to build Intelligent, AI-Powered Solutions. I am highly passionate about writing Clean Code, designing intuitive User Experiences, and turning Great Ideas into Functional Products.
                </p>
                <p className="mb-4 leading-relaxed text-[15px]" style={{ color: 'var(--text-secondary)' }}>
                  Beyond web development, I actively practice Data Structures and Algorithms in Java and have solved 600+ problems on LeetCode. I have also completed two internships focused on AI and MERN Stack development.
                </p>
                <p className="leading-relaxed text-[15px]" style={{ color: 'var(--text-secondary)' }}>
                  I also develop applications using Generative AI and Agentic Workflows. I have practical knowledge of LLMs, LangChain, LangGraph, and Vector Databases, and I use these technologies to build the Next Generation of Intelligent Web Applications.
                </p>
              </motion.div>
            </motion.div>

            {/* Developer Editor Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block w-[400px]"
            >
              <DeveloperEditor />
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: 'var(--gradient-accent)' }}>
                <FiBookOpen size={14} />
              </span>
              Education
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    boxShadow: '0 12px 30px rgba(59, 130, 246, 0.08)',
                    transition: { type: 'spring', stiffness: 400, damping: 25 }
                  }}
                  className="p-5 flex flex-col sm:flex-row gap-4 rounded-2xl"
                  style={{
                    background: 'var(--bg-card-solid)',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: 'var(--shadow-sm)',
                    cursor: 'default',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ background: 'var(--gradient-accent)' }}
                  >
                    {edu.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[0.95rem]" style={{ color: 'var(--text-primary)' }}>{edu.school}</h4>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{edu.degree}</p>
                    <div className="flex gap-2 mt-3">
                      <span className="tech-chip">{edu.year}</span>
                      <span className="tech-chip">{edu.grade}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
