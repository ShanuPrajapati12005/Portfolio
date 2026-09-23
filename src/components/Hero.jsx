import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FiArrowDown, FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';

const FloatingIcon = ({ children, delay = 0, duration = 6, x = 0, y = 0 }) => (
  <motion.div
    className="absolute text-2xl opacity-20"
    style={{ left: `${x}%`, top: `${y}%`, color: 'var(--text-accent)' }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, -5, 0],
      opacity: [0.1, 0.25, 0.1],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bgX = useTransform(mouseX, [0, 1], [-15, 15]);
  const bgY = useTransform(mouseY, [0, 1], [-15, 15]);

  // Card dynamic 3D tilt tracking with increased intensity (28deg max)
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Relative coordinates: xc: 1 (left) to -1 (right), yc: -1 (top) to 1 (bottom)
    const xc = ((rect.width / 2) - x) / (rect.width / 2);
    const yc = (y - (rect.height / 2)) / (rect.height / 2);

    const rotateY = xc * -28; // Left side tilts inward, right side tilts inward
    const rotateX = yc * 28;  // Top tilts inward, bottom tilts inward

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`,
      boxShadow: '0 35px 70px rgba(15, 23, 42, 0.18), 0 0 50px rgba(59, 130, 246, 0.15)',
      transition: 'none',
    });
  };

  const handleCardMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08), 0 0 0 1px var(--border-card)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease',
    });
  };

  const [processedImg, setProcessedImg] = useState('/shanu picturee.png');

  useEffect(() => {
    const img = new Image();
    img.src = '/shanu picturee.png';
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      const width = canvas.width;
      const height = canvas.height;

      // Flood fill queue to only remove background white pixels and keep white shirt intact
      const queue = [];
      const visited = new Uint8Array(width * height);

      const isNearWhite = (x, y) => {
        const idx = (y * width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        return r > 235 && g > 235 && b > 235;
      };

      // Initialize queue with all boundary pixels
      for (let x = 0; x < width; x++) {
        if (isNearWhite(x, 0)) {
          queue.push([x, 0]);
          visited[0 * width + x] = 1;
        }
        if (isNearWhite(x, height - 1)) {
          queue.push([x, height - 1]);
          visited[(height - 1) * width + x] = 1;
        }
      }
      for (let y = 0; y < height; y++) {
        if (isNearWhite(0, y)) {
          queue.push([0, y]);
          visited[y * width + 0] = 1;
        }
        if (isNearWhite(width - 1, y)) {
          queue.push([width - 1, y]);
          visited[y * width + (width - 1)] = 1;
        }
      }

      // BFS flood fill
      let head = 0;
      while (head < queue.length) {
        const [cx, cy] = queue[head++];
        const idx = (cy * width + cx) * 4;
        data[idx + 3] = 0; // Make background pixel fully transparent

        const neighbors = [
          [cx + 1, cy],
          [cx - 1, cy],
          [cx, cy + 1],
          [cx, cy - 1]
        ];

        for (const [nx, ny] of neighbors) {
          if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            const nidx = ny * width + nx;
            if (!visited[nidx] && isNearWhite(nx, ny)) {
              visited[nidx] = 1;
              queue.push([nx, ny]);
            }
          }
        }
      }

      // Soften edges next to transparent pixels to avoid jagged lines
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const idx = (y * width + x) * 4;
          if (data[idx + 3] > 0) {
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];
            const brightness = (r + g + b) / 3;
            if (brightness > 220) {
              const hasTransparentNeighbor = 
                data[((y - 1) * width + x) * 4 + 3] === 0 ||
                data[((y + 1) * width + x) * 4 + 3] === 0 ||
                data[(y * width + (x - 1)) * 4 + 3] === 0 ||
                data[(y * width + (x + 1)) * 4 + 3] === 0;

              if (hasTransparentNeighbor) {
                const alphaFactor = (255 - brightness) / (255 - 220);
                data[idx + 3] = Math.floor(255 * alphaFactor);
              }
            }
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setProcessedImg(canvas.toDataURL());
    };
  }, []);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    const el = containerRef.current;
    if (el) el.addEventListener('mousemove', handleMouse);
    return () => { if (el) el.removeEventListener('mousemove', handleMouse); };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[70vh] md:min-h-screen flex items-center overflow-hidden pt-28 pb-16 md:py-0"
      style={{ background: 'transparent' }}
    >
      {/* Background decoration elements only - grid pattern removed as it is global in App.jsx */}
      {/* Animated Gradient Blobs */}
      <motion.div
        className="bg-glow-1"
        style={{ top: '-10%', right: '-5%', x: bgX, y: bgY }}
      />
      <motion.div
        className="bg-glow-2"
        style={{ bottom: '10%', left: '-5%' }}
      />

      {/* Floating Code Snippets */}
      <FloatingIcon x={5} y={20} delay={0} duration={7}>{'{ }'}</FloatingIcon>
      <FloatingIcon x={85} y={15} delay={1} duration={8}>{'</>'}</FloatingIcon>
      <FloatingIcon x={90} y={65} delay={2} duration={6}>{'fn()'}</FloatingIcon>
      <FloatingIcon x={10} y={75} delay={0.5} duration={9}>{'[ ]'}</FloatingIcon>
      <FloatingIcon x={70} y={80} delay={1.5} duration={7}>{'=>'}</FloatingIcon>

      {/* Main Content */}
      <div className="section-wrapper w-full relative z-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left Column */}
          <div>
            {/* Code Tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span
                className="code-tag inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(59, 130, 246, 0.08)',
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                {'// Full Stack Developer'}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text font-black">Shanu</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed font-normal"
              style={{ color: 'var(--text-secondary)' }}
            >
              I build Dynamic Full-Stack Applications and use GenAI to create Intelligent, AI-Powered Solutions. I am passionate about writing Clean Code, crafting intuitive User Experiences, and turning Great Ideas into Functional Products.
            </motion.p>

            {/* CTA & Socials Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/resume.pdf" 
                  download="Shanu_Prajapati_Resume.pdf"
                  className="btn-secondary flex items-center gap-2 relative overflow-hidden group transition-all duration-300"
                  style={{
                    borderColor: 'rgba(59, 130, 246, 0.45)',
                    boxShadow: '0 0 15px rgba(59, 130, 246, 0.15)',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.07), rgba(139, 92, 246, 0.07))',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.7)';
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(139, 92, 246, 0.3)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(139, 92, 246, 0.12))';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.45)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.15)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.07), rgba(139, 92, 246, 0.07))';
                    e.currentTarget.style.transform = 'translateY(0px)';
                  }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  <FiDownload size={16} className="text-blue-500 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <span className="gradient-text-accent font-extrabold relative z-10">Resume</span>
                </a>
                <a href="#contact" className="btn-secondary flex items-center gap-2">
                  <FiMail size={16} />
                  Contact Me
                </a>
              </div>

              {/* Find Me On Section (Moved below buttons) */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Find me on
                </span>
                <div className="flex items-center gap-2">
                  {[
                    { icon: <FiGithub size={16} />, href: 'https://github.com/ShanuPrajapati12005', label: 'GitHub', glow: 'rgba(59, 130, 246, 0.4)' },
                    { icon: <FiLinkedin size={16} />, href: 'https://www.linkedin.com/in/shanu-prajapati-313b44322/', label: 'LinkedIn', glow: 'rgba(139, 92, 246, 0.4)' },
                  ].map((s, idx) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: idx * 0.5
                      }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{
                        border: '1px solid var(--border-card)',
                        color: 'var(--text-secondary)',
                        background: 'var(--bg-card)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = s.glow;
                        e.currentTarget.style.boxShadow = `0 0 15px ${s.glow}`;
                        e.currentTarget.style.color = 'var(--text-accent)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-card)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                      aria-label={s.label}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column — Photo in Developer Window Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex justify-center relative z-10 md:mt-14"
          >
            {/* Glow behind the mockup */}
            <div
              className="absolute w-80 h-80 rounded-full blur-[80px] -z-10 opacity-60"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.2))',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* macOS Style Mockup Frame */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                perspective: 1000,
                transformStyle: 'preserve-3d',
                background: 'var(--bg-card-solid)',
                border: '1px solid var(--border-card)',
                borderRadius: '24px',
                padding: '14px',
                boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08), 0 0 0 1px var(--border-card)',
                ...tiltStyle, // Dynamic tilt styles from mouse tracking state
              }}
              className="w-[330px] md:w-[400px] lg:w-[450px] overflow-hidden group/window relative"
            >
              {/* Window Header (Code Import Style instead of dots) */}
              <div className="flex items-center justify-between mb-3.5 px-2 border-b border-[var(--border-subtle)] pb-2">
                <span className="text-[10.5px] font-mono select-none tracking-wide text-slate-400">
                  <span className="text-purple-500 font-bold">import</span> <span className="text-[#61AFEF]">FullStackEngineer</span> <span className="text-purple-500 font-bold">from</span> <span className="text-[#98C379] font-medium">'shanu'</span>;
                </span>
              </div>

              {/* Photo Area */}
              <div
                className="rounded-2xl overflow-hidden relative"
                style={{
                  background: 'linear-gradient(180deg, var(--bg-secondary), var(--bg-primary))',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <img
                  src={processedImg}
                  alt="Shanu"
                  className="w-full h-auto object-cover object-top select-none pointer-events-none"
                  style={{
                    maxHeight: '480px',
                    filter: 'contrast(1.02) brightness(0.98)',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: '2px solid var(--border-card)' }}
        >
          <motion.div
            className="w-1.5 h-3 rounded-full"
            style={{ background: 'var(--gradient-accent)' }}
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
