import React from 'react';
import { Network, Sparkles, CheckCircle2, Shield } from 'lucide-react';

interface VisionSectionProps {
  darkMode: boolean;
}

export const VisionSection: React.FC<VisionSectionProps> = ({ darkMode }) => {
  return (
    <section id="vision" className={`py-28 relative overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-neutral-950' : 'bg-white'}`}>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`p-10 sm:p-16 rounded-3xl border shadow-xl relative overflow-hidden ${
          darkMode 
            ? 'bg-neutral-900 border-neutral-800' 
            : 'bg-gradient-to-br from-neutral-50 to-neutral-100 border-neutral-200'
        }`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
                <Network className="w-3.5 h-3.5" />
                <span>Long-Term Philosophy</span>
              </div>

              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                "More than individual products. A connected technology ecosystem."
              </h2>

              <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                While each platform within our portfolio—Biztrix, RojgarMatrix, LinkQR, AppMatrix, ChatMatrix, and Jyotrix—solves a specific, real-world challenge with precision, Skill Matrix provides the overarching strategic vision, technology foundation, and ecosystem direction.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <p className={`text-sm ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    <strong className={`font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Unified Security & Governance:</strong> Standards applied consistently across all member platforms.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <p className={`text-sm ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    <strong className={`font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Cross-Platform Synergy:</strong> Data and operational workflows that seamlessly interconnect.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <p className={`text-sm ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    <strong className={`font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Sustainable Innovation:</strong> Continuous investment in future-proof technologies and digital expansion.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Graphic Card */}
            <div className="lg:col-span-5">
              <div className={`p-8 rounded-2xl border text-center relative shadow-lg ${
                darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-300'
              }`}>
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 mx-auto mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  The Matrix Standard
                </h3>
                <p className={`text-xs leading-relaxed mb-6 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  Every product launched under Skill Matrix adheres to strict benchmarks of code hygiene, security resilience, user-first design, and operational excellence.
                </p>
                <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20 font-semibold">
                  <span>Parent Governance Model</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
