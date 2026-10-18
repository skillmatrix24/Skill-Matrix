import React from 'react';
import { Network, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { OFFICIAL_CONTACT, ECOSYSTEM_PLATFORMS } from '../data/ecosystemData';
import { EcosystemPlatform } from '../types';

interface FooterProps {
  darkMode: boolean;
  onSelectPlatform: (platform: EcosystemPlatform) => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onSelectPlatform }) => {
  return (
    <footer className={`border-t pt-20 pb-12 transition-colors duration-300 ${
      darkMode ? 'bg-neutral-950 border-neutral-800 text-neutral-400' : 'bg-white border-neutral-200 text-neutral-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b ${
          darkMode ? 'border-neutral-800' : 'border-neutral-200'
        }`}>
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Network className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className={`font-extrabold text-xl tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  SKILL MATRIX
                </span>
                <span className="block text-[10px] uppercase font-semibold tracking-wider text-cyan-500 dark:text-cyan-400">
                  Parent Technology Group
                </span>
              </div>
            </div>

            <p className={`text-sm leading-relaxed max-w-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Skill Matrix is a technology-driven parent company building and leading a growing ecosystem of digital products, platforms, and business solutions.
            </p>

            <div className="space-y-2 pt-2">
              <div className={`flex items-center space-x-2 text-xs ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                <Mail className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>{OFFICIAL_CONTACT.email}</span>
              </div>
              <div className={`flex items-center space-x-2 text-xs ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                <Phone className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>{OFFICIAL_CONTACT.phone}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <h4 className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className={`transition-colors ${darkMode ? 'hover:text-cyan-400 text-neutral-400' : 'hover:text-cyan-600 text-neutral-600'}`}>About Skill Matrix</a>
              </li>
              <li>
                <a href="#vision" className={`transition-colors ${darkMode ? 'hover:text-cyan-400 text-neutral-400' : 'hover:text-cyan-600 text-neutral-600'}`}>Vision & Philosophy</a>
              </li>
              <li>
                <a href="#approach" className={`transition-colors ${darkMode ? 'hover:text-cyan-400 text-neutral-400' : 'hover:text-cyan-600 text-neutral-600'}`}>Our Approach</a>
              </li>
              <li>
                <a href="#technology" className={`transition-colors ${darkMode ? 'hover:text-cyan-400 text-neutral-400' : 'hover:text-cyan-600 text-neutral-600'}`}>Technology & Innovation</a>
              </li>
              <li>
                <a href="#contact" className={`transition-colors ${darkMode ? 'hover:text-cyan-400 text-neutral-400' : 'hover:text-cyan-600 text-neutral-600'}`}>Contact Headquarters</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Ecosystem */}
          <div className="space-y-4">
            <h4 className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Ecosystem</h4>
            <ul className="space-y-2.5 text-sm">
              {ECOSYSTEM_PLATFORMS.map((platform) => (
                <li key={platform.id}>
                  <button
                    onClick={() => onSelectPlatform(platform)}
                    className={`transition-colors text-left flex items-center space-x-1 ${darkMode ? 'hover:text-cyan-400 text-neutral-400' : 'hover:text-cyan-600 text-neutral-600'}`}
                  >
                    <span>{platform.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="space-y-4">
            <h4 className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Governance & Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#privacy" className={`transition-colors ${darkMode ? 'hover:text-cyan-400 text-neutral-400' : 'hover:text-cyan-600 text-neutral-600'}`}>Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className={`transition-colors ${darkMode ? 'hover:text-cyan-400 text-neutral-400' : 'hover:text-cyan-600 text-neutral-600'}`}>Terms of Governance</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between text-xs space-y-4 sm:space-y-0 ${
          darkMode ? 'text-neutral-500' : 'text-neutral-500'
        }`}>
          <div>
            © Skill Matrix. All Rights Reserved.
          </div>
          <div className="font-mono text-cyan-600 dark:text-cyan-400 font-medium">
            "Building the Digital Ecosystem of Tomorrow."
          </div>
        </div>

      </div>
    </footer>
  );
};
