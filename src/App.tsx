import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { EcosystemSection } from './components/EcosystemSection';
import { AboutSection } from './components/AboutSection';
import { ApproachSection } from './components/ApproachSection';
import { TechnologySection } from './components/TechnologySection';
import { VisionSection } from './components/VisionSection';
import { FutureSection } from './components/FutureSection';
import { WhySkillMatrixSection } from './components/WhySkillMatrixSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PlatformModal } from './components/PlatformModal';
import { EcosystemPlatform } from './types';

export default function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<EcosystemPlatform | null>(null);
  
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('skill_matrix_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('skill_matrix_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleExploreEcosystem = () => {
    const section = document.getElementById('ecosystem');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden font-sans transition-colors duration-300 ${
      darkMode ? 'bg-neutral-950 text-neutral-100' : 'bg-white text-neutral-900'
    }`}>
      {/* Background Dot Grid & Atmospheric Accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute inset-0 opacity-30 ${darkMode ? 'bg-dot-grid-dark' : 'bg-dot-grid'}`}></div>
        <div className={`absolute top-[-10%] left-[-5%] w-[45%] h-[45%] rounded-full blur-[140px] ${
          darkMode ? 'bg-cyan-950/40' : 'bg-cyan-100/50'
        }`} />
        <div className={`absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full blur-[120px] ${
          darkMode ? 'bg-blue-950/30' : 'bg-blue-100/40'
        }`} />
      </div>

      {/* Sticky Navigation */}
      <Navbar 
        darkMode={darkMode} 
        onToggleDarkMode={toggleDarkMode} 
        onExploreEcosystem={handleExploreEcosystem} 
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          darkMode={darkMode}
          onExploreEcosystem={handleExploreEcosystem}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />

        <TrustIntro darkMode={darkMode} />

        <EcosystemSection
          darkMode={darkMode}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />

        <AboutSection darkMode={darkMode} />

        <ApproachSection darkMode={darkMode} />

        <TechnologySection darkMode={darkMode} />

        <VisionSection darkMode={darkMode} />

        <FutureSection darkMode={darkMode} />

        <WhySkillMatrixSection darkMode={darkMode} />

        <ContactSection darkMode={darkMode} />
      </main>

      {/* Sophisticated Footer */}
      <Footer
        darkMode={darkMode}
        onSelectPlatform={(platform) => setSelectedPlatform(platform)}
      />

      {/* Platform Explore Modal */}
      <PlatformModal
        darkMode={darkMode}
        platform={selectedPlatform}
        onClose={() => setSelectedPlatform(null)}
      />
    </div>
  );
}
