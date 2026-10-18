import React from 'react';
import { Globe, Server, Cpu, Workflow, Cloud, Boxes, ShieldCheck, Code2, Sparkles } from 'lucide-react';
import { TECHNOLOGY_CAPABILITIES } from '../data/ecosystemData';

interface TechnologySectionProps {
  darkMode: boolean;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-500" />;
      case 'Server': return <Server className="w-5 h-5 text-blue-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-500" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-emerald-500" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-500" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-amber-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-500" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-violet-500" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <section id="technology" className={`py-28 border-t transition-colors duration-300 ${
      darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            Technology & Innovation
          </h2>
          <p className={`text-lg sm:text-xl font-normal leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Powering our proprietary SaaS ecosystem through advanced engineering, automation, and modern cloud architecture.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNOLOGY_CAPABILITIES.map((cap, index) => (
            <div
              key={index}
              className={`p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-sm ${
                darkMode ? 'bg-neutral-950 border-neutral-800 hover:border-cyan-500/50' : 'bg-white border-neutral-200 hover:border-cyan-500/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                    darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
                  }`}>
                    {getIcon(cap.icon)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Capability</span>
                </div>

                <h3 className={`text-lg font-bold mb-2.5 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  {cap.title}
                </h3>

                <p className={`text-xs leading-relaxed mb-6 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {cap.description}
                </p>
              </div>

              {/* Tags */}
              <div className={`flex flex-wrap gap-1.5 pt-4 border-t ${darkMode ? 'border-neutral-800' : 'border-neutral-100'}`}>
                {cap.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                      darkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-300' : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
