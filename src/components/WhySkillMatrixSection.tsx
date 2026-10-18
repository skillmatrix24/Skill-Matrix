import React from 'react';
import { Sparkles, Zap, Share2, Layers, Compass, Eye } from 'lucide-react';
import { DIFFERENTIATORS } from '../data/ecosystemData';

interface WhySkillMatrixSectionProps {
  darkMode: boolean;
}

export const WhySkillMatrixSection: React.FC<WhySkillMatrixSectionProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-cyan-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-blue-500" />;
      case 'Layers': return <Layers className="w-6 h-6 text-indigo-500" />;
      case 'Compass': return <Compass className="w-6 h-6 text-emerald-500" />;
      case 'Eye': return <Eye className="w-6 h-6 text-teal-500" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-500" />;
    }
  };

  return (
    <section id="why" className={`py-28 transition-colors duration-300 ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Differentiators</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            Why Skill Matrix
          </h2>
          <p className={`text-lg sm:text-xl font-normal leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Principles that set our technology group apart in the global digital landscape.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIATORS.map((item, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl ${
                darkMode 
                  ? 'bg-neutral-900 border-neutral-800 hover:border-cyan-500/50' 
                  : 'bg-neutral-50 border-neutral-200 hover:border-cyan-500/50'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 shadow-sm ${
                darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'
              }`}>
                {getIcon(item.icon)}
              </div>

              <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                {item.title}
              </h3>

              <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
