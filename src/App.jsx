import { ThemeProvider } from './context/ThemeContext';
import DeveloperBackground from './components/DeveloperBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative z-10" style={{ background: 'var(--bg-primary)', transition: 'background 0.4s ease' }}>
        {/* Global Dotted Background Pattern */}
        <div className="dot-pattern absolute inset-0 z-[-1]" />

        {/* Animated Developer Background */}
        <DeveloperBackground />

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
