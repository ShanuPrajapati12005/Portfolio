import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
  FaJava, FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaDatabase, FaDocker
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiMysql, SiRedis, SiPostman, SiExpress, SiPostgresql
} from 'react-icons/si';
import { TbApi, TbRobot, TbPlugConnected, TbBrain, TbBolt } from 'react-icons/tb';

// Custom inline SVG icons for 100% compile safety and high rendering accuracy
const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    {/* Official TypeScript logo — blue square with "TS" letters */}
    <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.978a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.009z"/>
  </svg>
);

const NextJsIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm5.13 17.587l-4.595-5.918h-.834v3.136h-.995V8.583h.995v.852l4.582 5.9v.038h.834V8.583h.995v9.004h-.987z"/>
  </svg>
);

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
      { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
      { name: 'TypeScript', icon: <TypeScriptIcon />, color: '#3178C6' },
      { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
      { name: 'REST API', icon: <TbApi />, color: '#FF6C37' },
      { name: 'WebSockets', icon: <TbPlugConnected />, color: '#2B6CB0' },
      { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Next.js', icon: <NextJsIcon />, color: '#000000' },
      { name: 'GSAP', icon: <TbBolt />, color: '#88CE02' },
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />, color: '#888888' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
      { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    ],
  },
  {
    title: 'GenAI',
    skills: [
      { name: 'Langchain', icon: <TbBrain />, color: '#1C3C3C' },
      { name: 'Vector DB', icon: <FaDatabase />, color: '#7C3AED' },
      { name: 'Agents', icon: <TbRobot />, color: '#10B981' },
    ],
  },
];

const Skills = () => {
  const { isDark } = useTheme();

  const getAdjustedColor = (color) => {
    if (!isDark) return color;
    const darkThemeFallback = {
      '#181717': '#F1F5F9', // GitHub white fallback
      '#1C3C3C': '#E2E8F0', // Langchain light fallback
      '#000000': '#FFFFFF', // Next.js and Express white fallback
      '#010101': '#60A5FA', // WebSockets fallback
    };
    return darkThemeFallback[color] || color;
  };

  return (
    <section id="skills" className="relative overflow-hidden" style={{ background: 'transparent' }}>
      {/* Background Glows */}
      <div className="bg-glow-1" style={{ top: '30%', left: '-8%' }} />
      <div className="bg-glow-2" style={{ bottom: '10%', right: '-5%' }} />

      <div className="section-wrapper">
        {/* Massive Elevated Card for Entire Section */}
        <div className="section-card p-5 sm:p-8 md:p-12 relative overflow-hidden">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading gradient-heading font-black"
          >
            Skills & Technologies
          </motion.div>

          <div className="space-y-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Category Label - Premium Badge Pill */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative group/pill">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[2px] opacity-15" />
                    <div
                      className="relative px-5 py-2 rounded-full border text-xs font-black uppercase tracking-wider flex items-center gap-2 select-none"
                      style={{
                        background: 'var(--bg-card-solid)',
                        borderColor: 'var(--border-card)',
                        color: 'var(--text-accent)',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
                      <span className="gradient-text-accent font-black">{category.title}</span>
                    </div>
                  </div>
                  <div
                    className="flex-1 h-[1.5px]"
                    style={{ background: 'linear-gradient(90deg, var(--border-card), transparent)' }}
                  />
                </div>

                {/* Skill Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.skills.map((skill, i) => {
                    const displayColor = getAdjustedColor(skill.color);

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{
                          y: -6,
                          scale: 1.02,
                          borderColor: displayColor + '40',
                          boxShadow: `0 10px 30px ${displayColor}15`,
                          transition: { type: 'spring', stiffness: 400, damping: 25 }
                        }}
                        className="skill-card group"
                        style={{
                          background: 'var(--bg-card-solid)',
                          border: '1px solid var(--border-skill)',
                          boxShadow: 'var(--shadow-skill)',
                        }}
                      >
                        {/* Icon Container with glowing background */}
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 relative"
                          style={{
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--border-subtle)',
                          }}
                        >
                          <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[8px] -z-10"
                            style={{ background: displayColor + '20' }}
                          />

                          <span
                            className="text-3xl transition-transform duration-300 group-hover:scale-110"
                            style={{
                              color: displayColor,
                            }}
                          >
                            {skill.icon}
                          </span>
                        </div>

                        <span className="text-xs font-semibold text-center mt-1" style={{ color: 'var(--text-primary)' }}>
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
