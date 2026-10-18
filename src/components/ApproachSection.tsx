import React from 'react';
import { Search, Hammer, Network, TrendingUp, Sparkles } from 'lucide-react';
import { APPROACH_PILLARS } from '../data/ecosystemData';

interface ApproachSectionProps {
  darkMode: boolean;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-6 h-6 text-cyan-500" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-blue-500" />;
      case 'Network': return <Network className="w-6 h-6 text-indigo-500" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-500" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-500" />;
    }
  };

  return (
    <section id="approach" className={`py-28 transition-colors duration-300 ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Lifecycle & Strategy</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            Our Approach
          </h2>
          <p className={`text-lg sm:text-xl font-normal leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            How Skill Matrix conceives, builds, operates, and scales proprietary SaaS products.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {APPROACH_PILLARS.map((pillar, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-sm hover:shadow-xl ${
                darkMode 
                  ? 'bg-neutral-900 border-neutral-800 hover:border-cyan-500/50' 
                  : 'bg-neutral-50 border-neutral-200 hover:border-cyan-500/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-sm ${
                    darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'
                  }`}>
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-cyan-500/40">
                    {pillar.step}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  {pillar.title}
                </h3>

                <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {pillar.description}
                </p>
              </div>

              <div className={`pt-6 mt-6 border-t flex items-center space-x-2 ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Skill Matrix Protocol</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
