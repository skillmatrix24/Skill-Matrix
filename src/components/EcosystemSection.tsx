import React from 'react';
import { ExternalLink, ArrowUpRight, Network, Sparkles } from 'lucide-react';
import { ECOSYSTEM_PLATFORMS } from '../data/ecosystemData';
import { EcosystemPlatform } from '../types';

interface EcosystemSectionProps {
  darkMode: boolean;
  onSelectPlatform: (platform: EcosystemPlatform) => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ darkMode, onSelectPlatform }) => {
  return (
    <section id="ecosystem" className={`py-28 relative transition-colors duration-300 ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <Network className="w-3.5 h-3.5" />
            <span>The Skill Matrix Portfolio</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            Our Ecosystem
          </h2>
          <p className={`text-lg sm:text-xl font-normal leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            One vision. Multiple products. A growing technology ecosystem owned and operated by Skill Matrix.
          </p>
        </div>

        {/* Central Brand Hierarchy Visualization Banner */}
        <div className={`mb-16 p-6 sm:p-8 rounded-2xl border relative overflow-hidden shadow-sm ${
          darkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
        }`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-500">Parent Group Hierarchy</span>
              <h3 className={`text-xl sm:text-2xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                Skill Matrix SaaS Product Company & Venture Group
              </h3>
              <p className={`text-sm mt-1 max-w-xl ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                We build, own, operate, and scale our own proprietary software products and digital platforms.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              <span>6 Proprietary SaaS Products</span>
            </div>
          </div>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ECOSYSTEM_PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              className={`group relative rounded-2xl border p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-sm hover:shadow-xl ${
                darkMode 
                  ? 'bg-neutral-900 border-neutral-800 hover:border-cyan-500/50' 
                  : 'bg-white border-neutral-200 hover:border-cyan-500/50'
              }`}
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platform.badgeColor} flex items-center justify-center text-white font-extrabold text-2xl shadow-lg group-hover:scale-105 transition-transform`}>
                    {platform.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    darkMode ? 'bg-neutral-800 border-neutral-700 text-neutral-300' : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                  }`}>
                    {platform.category}
                  </span>
                </div>

                {/* Name & Tagline */}
                <h3 className={`text-2xl font-bold tracking-tight mb-2 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  {platform.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-3">
                  A Skill Matrix Product
                </p>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {platform.description}
                </p>
              </div>

              {/* Card Footer / Action */}
              <div className={`pt-4 border-t flex items-center justify-between ${darkMode ? 'border-neutral-800' : 'border-neutral-100'}`}>
                <button
                  onClick={() => onSelectPlatform(platform)}
                  className="inline-flex items-center space-x-1.5 text-sm font-semibold text-cyan-500 hover:text-cyan-400 transition-colors group-hover:underline"
                >
                  <span>Explore Product</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={platform.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-xl border transition-colors ${
                    darkMode 
                      ? 'border-neutral-800 bg-neutral-950 text-neutral-300 hover:bg-neutral-800 hover:text-white' 
                      : 'border-neutral-200 bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  aria-label={`Visit ${platform.name} website`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}

          {/* Future Expansion Card Placeholder */}
          <div className={`rounded-2xl border border-dashed p-7 flex flex-col items-center justify-center text-center transition-all ${
            darkMode ? 'border-neutral-800 bg-neutral-900/40 hover:border-cyan-500/40' : 'border-neutral-300 bg-neutral-50 hover:border-cyan-500/40'
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 mb-4 animate-pulse">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              The Matrix Is Growing
            </h3>
            <p className={`text-xs leading-relaxed max-w-xs ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Skill Matrix continues to explore new product ideas, technologies, and opportunities to build tomorrow's digital businesses.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
