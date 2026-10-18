import React from 'react';
import { Layers, ShieldCheck, Sparkles, Network } from 'lucide-react';

interface TrustIntroProps {
  darkMode: boolean;
}

export const TrustIntro: React.FC<TrustIntroProps> = ({ darkMode }) => {
  return (
    <section id="introduction" className={`py-24 border-y ${darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Corporate Positioning</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            One Vision. Multiple Products. A Growing Ecosystem.
          </h2>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Skill Matrix is a technology and SaaS product company building, owning, operating, and scaling a growing ecosystem of digital products and platforms. We build products we own.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className={`p-8 rounded-2xl border transition-all hover:-translate-y-1 ${
            darkMode 
              ? 'bg-neutral-950 border-neutral-800 hover:border-cyan-500/50 shadow-xl' 
              : 'bg-white border-neutral-200 hover:border-cyan-500/50 shadow-sm'
          }`}>
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 mb-6">
              <Network className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              SaaS Product Company
            </h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              We build, own, and operate our own software products, platforms, and digital businesses rather than serving external client projects.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`p-8 rounded-2xl border transition-all hover:-translate-y-1 ${
            darkMode 
              ? 'bg-neutral-950 border-neutral-800 hover:border-blue-500/50 shadow-xl' 
              : 'bg-white border-neutral-200 hover:border-blue-500/50 shadow-sm'
          }`}>
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              Connected Ecosystem
            </h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Our products—Biztrix, RojgarMatrix, LinkQR, AppMatrix, ChatMatrix, and Jyotrix—are united by a shared technological foundation and long-term vision.
            </p>
          </div>

          {/* Card 3 */}
          <div className={`p-8 rounded-2xl border transition-all hover:-translate-y-1 ${
            darkMode 
              ? 'bg-neutral-950 border-neutral-800 hover:border-indigo-500/50 shadow-xl' 
              : 'bg-white border-neutral-200 hover:border-indigo-500/50 shadow-sm'
          }`}>
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              Built for Scale
            </h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Every platform is engineered for rigorous security, seamless user experience, and sustainable enterprise scalability.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
