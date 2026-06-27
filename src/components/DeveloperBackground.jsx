import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const symbols = [
  '</>', '{ }', '[ ]', '=>', 'const', 'let', 'await', 'async',
  '01', '10', 'function', 'import', 'export', '&&', '||', '??'
];

const DeveloperBackground = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      text: symbols[i % symbols.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 14 + 10,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 5,
    }));
    setElements(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Glowing Nodes */}
      <div
        className="absolute top-[15%] left-[5%] w-[450px] h-[450px] rounded-full blur-[140px] opacity-[0.06] dark:opacity-[0.03]"
        style={{ background: 'var(--text-accent)' }}
      />
      <div
        className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.06] dark:opacity-[0.03]"
        style={{ background: 'var(--gradient-accent)' }}
      />

      {/* Floating Developer Symbols */}
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute font-mono select-none font-bold text-blue-500/10 dark:text-blue-400/5 transition-colors duration-500"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            fontSize: `${el.size}px`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 15, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {el.text}
        </motion.div>
      ))}
    </div>
  );
};

export default DeveloperBackground;
