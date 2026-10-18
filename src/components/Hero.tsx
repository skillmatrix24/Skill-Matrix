import React from 'react';
import { ArrowRight, Network } from 'lucide-react';
import { ECOSYSTEM_PLATFORMS } from '../data/ecosystemData';
import { EcosystemPlatform } from '../types';

interface HeroProps {
  darkMode: boolean;
  onExploreEcosystem: () => void;
  onSelectPlatform: (platform: EcosystemPlatform) => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onExploreEcosystem, onSelectPlatform }) => {
  return (
    <section id="home" className={`relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
      {/* Background ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] rounded-full blur-[140px] opacity-25 ${
          darkMode ? 'bg-cyan-900/40' : 'bg-cyan-100'
        }`} />
        <div className={`absolute bottom-10 right-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full blur-[120px] opacity-20 ${
          darkMode ? 'bg-blue-900/30' : 'bg-blue-100'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <span>SaaS Product Company & Technology Venture Group</span>
            </div>

            {/* Main Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500">Products We Own.</span>
            </h1>

            {/* Supporting Copy */}
            <p className={`text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Skill Matrix is a technology and SaaS product company building, owning, operating, and scaling a growing ecosystem of digital products and platforms.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={onExploreEcosystem}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25 group"
              >
                <span>Explore Our Ecosystem</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#about"
                className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl border font-semibold transition-all shadow-sm ${
                  darkMode 
                    ? 'border-neutral-800 bg-neutral-900 text-neutral-200 hover:bg-neutral-800 hover:text-white' 
                    : 'border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
                }`}
              >
                <span>About Skill Matrix</span>
              </a>
            </div>

            {/* Trust Indicators / Highlights */}
            <div className={`pt-6 border-t grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-cyan-500">6</span>
                <span className={`text-xs uppercase tracking-wider mt-1 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>SaaS Products</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-500">100%</span>
                <span className={`text-xs uppercase tracking-wider mt-1 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>Owned & Operated</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-indigo-500">Global</span>
                <span className={`text-xs uppercase tracking-wider mt-1 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>Digital Scale</span>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract Ecosystem Network Visualization */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0">
            <div className={`w-full max-w-md aspect-square relative rounded-3xl p-6 border flex items-center justify-center shadow-xl ${
              darkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-neutral-50/80 border-neutral-200'
            }`}>
              
              {/* Central Skill Matrix Hub */}
              <div className="absolute z-20 w-28 sm:w-32 h-28 sm:h-32 rounded-2xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 p-0.5 shadow-xl shadow-cyan-500/20">
                <div className={`w-full h-full rounded-[14px] flex flex-col items-center justify-center p-3 text-center ${
                  darkMode ? 'bg-neutral-950 text-white' : 'bg-white text-neutral-900'
                }`}>
                  <Network className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-500 mb-1" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider">SKILL MATRIX</span>
                  <span className="text-[8px] sm:text-[9px] text-cyan-500 font-mono font-medium">Product Group</span>
                </div>
              </div>

              {/* Orbiting Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[280px] sm:w-[310px] h-[280px] sm:h-[310px] rounded-full border border-cyan-500/20 absolute animate-spin" style={{ animationDuration: '40s' }} />
                <div className="w-[210px] sm:w-[230px] h-[210px] sm:h-[230px] rounded-full border border-dashed border-blue-500/30 absolute animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
              </div>

              {/* Node 1: Biztrix (Top) */}
              <div 
                onClick={() => onSelectPlatform(ECOSYSTEM_PLATFORMS[0])}
                className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-30 cursor-pointer group"
              >
                <div className={`px-2.5 sm:px-3 py-1.5 rounded-xl border shadow-md transition-all text-center ${
                  darkMode 
                    ? 'bg-neutral-900 border-neutral-800 hover:border-cyan-500 text-white' 
                    : 'bg-white border-neutral-200 hover:border-cyan-500 text-neutral-900'
                }`}>
                  <span className="block text-[11px] sm:text-xs font-bold group-hover:text-cyan-500 transition-colors">Biztrix</span>
                  <span className="text-[8px] sm:text-[9px] text-neutral-400">Business SaaS</span>
                </div>
              </div>

              {/* Node 2: RojgarMatrix (Top Right) */}
              <div 
                onClick={() => onSelectPlatform(ECOSYSTEM_PLATFORMS[1])}
                className="absolute top-10 sm:top-12 right-1 sm:right-2 z-30 cursor-pointer group"
              >
                <div className={`px-2.5 sm:px-3 py-1.5 rounded-xl border shadow-md transition-all text-center ${
                  darkMode 
                    ? 'bg-neutral-900 border-neutral-800 hover:border-emerald-500 text-white' 
                    : 'bg-white border-neutral-200 hover:border-emerald-500 text-neutral-900'
                }`}>
                  <span className="block text-[11px] sm:text-xs font-bold group-hover:text-emerald-500 transition-colors">RojgarMatrix</span>
                  <span className="text-[8px] sm:text-[9px] text-neutral-400">Talent Platform</span>
                </div>
              </div>

              {/* Node 3: LinkQR (Bottom Right) */}
              <div 
                onClick={() => onSelectPlatform(ECOSYSTEM_PLATFORMS[2])}
                className="absolute bottom-10 sm:bottom-12 right-1 sm:right-2 z-30 cursor-pointer group"
              >
                <div className={`px-2.5 sm:px-3 py-1.5 rounded-xl border shadow-md transition-all text-center ${
                  darkMode 
                    ? 'bg-neutral-900 border-neutral-800 hover:border-violet-500 text-white' 
                    : 'bg-white border-neutral-200 hover:border-violet-500 text-neutral-900'
                }`}>
                  <span className="block text-[11px] sm:text-xs font-bold group-hover:text-violet-500 transition-colors">LinkQR</span>
                  <span className="text-[8px] sm:text-[9px] text-neutral-400">QR & Growth</span>
                </div>
              </div>

              {/* Node 4: AppMatrix (Bottom) */}
              <div 
                onClick={() => onSelectPlatform(ECOSYSTEM_PLATFORMS[3])}
                className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 cursor-pointer group"
              >
                <div className={`px-2.5 sm:px-3 py-1.5 rounded-xl border shadow-md transition-all text-center ${
                  darkMode 
                    ? 'bg-neutral-900 border-neutral-800 hover:border-cyan-500 text-white' 
                    : 'bg-white border-neutral-200 hover:border-cyan-500 text-neutral-900'
                }`}>
                  <span className="block text-[11px] sm:text-xs font-bold group-hover:text-cyan-500 transition-colors">AppMatrix</span>
                  <span className="text-[8px] sm:text-[9px] text-neutral-400">App Builder</span>
                </div>
              </div>

              {/* Node 5: ChatMatrix (Top Left) */}
              <div 
                onClick={() => onSelectPlatform(ECOSYSTEM_PLATFORMS[4])}
                className="absolute top-10 sm:top-12 left-1 sm:left-2 z-30 cursor-pointer group"
              >
                <div className={`px-2.5 sm:px-3 py-1.5 rounded-xl border shadow-md transition-all text-center ${
                  darkMode 
                    ? 'bg-neutral-900 border-neutral-800 hover:border-amber-500 text-white' 
                    : 'bg-white border-neutral-200 hover:border-amber-500 text-neutral-900'
                }`}>
                  <span className="block text-[11px] sm:text-xs font-bold group-hover:text-amber-500 transition-colors">ChatMatrix</span>
                  <span className="text-[8px] sm:text-[9px] text-neutral-400">WhatsApp API</span>
                </div>
              </div>

              {/* Node 6: Jyotrix (Bottom Left) */}
              <div 
                onClick={() => onSelectPlatform(ECOSYSTEM_PLATFORMS[5])}
                className="absolute bottom-10 sm:bottom-12 left-1 sm:left-2 z-30 cursor-pointer group"
              >
                <div className={`px-2.5 sm:px-3 py-1.5 rounded-xl border shadow-md transition-all text-center ${
                  darkMode 
                    ? 'bg-neutral-900 border-neutral-800 hover:border-purple-500 text-white' 
                    : 'bg-white border-neutral-200 hover:border-purple-500 text-neutral-900'
                }`}>
                  <span className="block text-[11px] sm:text-xs font-bold group-hover:text-purple-500 transition-colors">Jyotrix</span>
                  <span className="text-[8px] sm:text-[9px] text-neutral-400">Astrology</span>
                </div>
              </div>

              {/* Ambient label */}
              <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-[9px] sm:text-[10px] font-mono text-neutral-400 tracking-wider">
                CLICK NODES TO EXPLORE
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
