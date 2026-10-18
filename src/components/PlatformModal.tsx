import React from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { EcosystemPlatform } from '../types';

interface PlatformModalProps {
  darkMode: boolean;
  platform: EcosystemPlatform | null;
  onClose: () => void;
}

export const PlatformModal: React.FC<PlatformModalProps> = ({ darkMode, platform, onClose }) => {
  if (!platform) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className={`relative w-full max-w-2xl border rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8 transition-colors duration-300 ${
          darkMode 
            ? 'bg-neutral-900 border-neutral-800 text-neutral-100' 
            : 'bg-white border-neutral-200 text-neutral-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors ${
            darkMode 
              ? 'bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700' 
              : 'bg-neutral-100 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200'
          }`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.badgeColor} flex items-center justify-center text-white font-bold text-xl shadow-md`}>
            {platform.name.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                darkMode ? 'bg-cyan-950 text-cyan-400 border-cyan-800' : 'bg-cyan-50 text-cyan-700 border-cyan-200'
              }`}>
                {platform.category}
              </span>
              <span className={`text-xs font-mono ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>Skill Matrix Ecosystem</span>
            </div>
            <h3 className={`text-2xl font-bold tracking-tight mt-1 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>{platform.name}</h3>
          </div>
        </div>

        {/* Description */}
        <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
          {platform.description}
        </p>

        {/* Key Focus Areas */}
        <div className="mb-8">
          <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>Key Focus & Capabilities</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {platform.keyFocus.map((focus, index) => (
              <div key={index} className={`flex items-center space-x-2.5 p-2.5 rounded-xl border ${
                darkMode ? 'bg-neutral-950/60 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
              }`}>
                <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                <span className={`text-sm font-medium ${darkMode ? 'text-neutral-200' : 'text-neutral-800'}`}>{focus}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Parent Relationship Notice */}
        <div className={`p-4 rounded-xl border flex items-start space-x-3 mb-6 ${
          darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
        }`}>
          <ShieldCheck className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
          <div className={`text-xs leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            <strong className={`font-semibold ${darkMode ? 'text-neutral-200' : 'text-neutral-900'}`}>Skill Matrix Ecosystem Member:</strong> {platform.name} is fully owned, led, and integrated within the Skill Matrix technology group, benefiting from shared security, scalable cloud architecture, and unified digital vision.
          </div>
        </div>

        {/* Actions */}
        <div className={`flex items-center justify-end space-x-4 pt-4 border-t ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
          <button
            onClick={onClose}
            className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
              darkMode ? 'border-neutral-700 text-neutral-300 hover:bg-neutral-800' : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100'
            }`}
          >
            Close
          </button>
          <a
            href={platform.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 text-sm"
          >
            <span>Visit Platform</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
