import React from 'react';
import { Sparkles, Compass } from 'lucide-react';

interface FutureSectionProps {
  darkMode: boolean;
}

export const FutureSection: React.FC<FutureSectionProps> = ({ darkMode }) => {
  return (
    <section id="future" className={`py-28 border-t transition-colors duration-300 ${
      darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Continuous Evolution</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            The Matrix Is Growing.
          </h2>

          <p className={`text-lg sm:text-xl font-normal leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Skill Matrix is continuously exploring new product ideas, emerging technologies, and digital opportunities. As our ecosystem expands, we remain committed to incubating transformative products that redefine industry standards.
          </p>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <div className={`px-5 py-3 rounded-xl border shadow-sm text-sm font-medium flex items-center space-x-2 ${
              darkMode ? 'bg-neutral-950 border-neutral-800 text-neutral-200' : 'bg-white border-neutral-200 text-neutral-700'
            }`}>
              <Sparkles className="w-4 h-4 text-cyan-500" />
              <span>R&D Incubator</span>
            </div>
            <div className={`px-5 py-3 rounded-xl border shadow-sm text-sm font-medium flex items-center space-x-2 ${
              darkMode ? 'bg-neutral-950 border-neutral-800 text-neutral-200' : 'bg-white border-neutral-200 text-neutral-700'
            }`}>
              <Compass className="w-4 h-4 text-blue-500" />
              <span>Strategic Ventures</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
