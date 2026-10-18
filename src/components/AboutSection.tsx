import React from 'react';
import { Cpu, Globe, Layers, Zap, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  darkMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-28 border-t transition-colors duration-300 ${
      darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Skill Matrix</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              Built to Own. Built to Scale.
            </h2>

            <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Skill Matrix is built around a simple idea: create technology products that we believe can solve meaningful problems, build businesses around them, and continuously evolve them for scale.
            </p>

            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
              We create technology products for our own ecosystem — from idea and development to launch, operation, continuous improvement, and scale. Our focus is entirely on product ownership rather than client services.
            </p>

            {/* Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 flex-shrink-0 mt-1">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-neutral-900'}`}>SaaS Architecture</h4>
                  <p className={`text-xs mt-0.5 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Modern multi-tenant cloud-native products.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Product Ownership</h4>
                  <p className={`text-xs mt-0.5 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>We own and operate every product we build.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 flex-shrink-0 mt-1">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Ecosystem Synergy</h4>
                  <p className={`text-xs mt-0.5 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Unified platforms sharing core technology.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Continuous Growth</h4>
                  <p className={`text-xs mt-0.5 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>Evolving successful ventures into businesses.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Corporate Card */}
          <div className="lg:col-span-6">
            <div className={`p-8 sm:p-10 rounded-3xl border relative overflow-hidden shadow-xl ${
              darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'
            }`}>
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs font-mono uppercase tracking-widest text-cyan-500 font-semibold">Core Philosophy</span>
              <h3 className={`text-2xl font-bold mt-2 mb-6 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                "We Build Products We Own."
              </h3>

              <blockquote className={`border-l-2 border-cyan-500 pl-4 text-sm sm:text-base italic leading-relaxed mb-8 ${
                darkMode ? 'text-neutral-300' : 'text-neutral-700'
              }`}>
                "Every product within the Skill Matrix ecosystem is designed with long-term ownership, continuous improvement, and scalability in mind. We don't just build software — we build businesses around software."
              </blockquote>

              <div className={`pt-6 border-t flex items-center justify-between ${darkMode ? 'border-neutral-800' : 'border-neutral-100'}`}>
                <div>
                  <span className={`block font-bold text-sm ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Skill Matrix Group</span>
                  <span className="text-xs text-neutral-400 font-mono">SaaS Product Company</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  SM
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
