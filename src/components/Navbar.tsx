import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Network, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onExploreEcosystem: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleDarkMode, onExploreEcosystem }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Approach', href: '#approach' },
    { name: 'Technology', href: '#technology' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? darkMode 
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 py-3 shadow-xl' 
          : 'bg-white/90 backdrop-blur-md border-b border-neutral-200/80 py-3 shadow-md'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Parent indicator */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Network className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className={`font-extrabold text-lg sm:text-xl tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                SKILL MATRIX
              </span>
              <span className="block text-[10px] uppercase font-semibold tracking-wider text-cyan-500">
                SaaS Product Company & Venture Group
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  darkMode 
                    ? 'text-neutral-300 hover:text-white hover:bg-neutral-900' 
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleDarkMode}
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode 
                  ? 'bg-neutral-900 border-neutral-800 text-amber-400 hover:bg-neutral-800' 
                  : 'bg-neutral-100 border-neutral-200 text-neutral-700 hover:bg-neutral-200'
              }`}
              aria-label="Toggle Theme"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onExploreEcosystem}
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30"
            >
              <span>Explore Ecosystem</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger & Theme Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onToggleDarkMode}
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode 
                  ? 'bg-neutral-900 border-neutral-800 text-amber-400' 
                  : 'bg-neutral-100 border-neutral-200 text-neutral-700'
              }`}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${
                darkMode ? 'border-neutral-800 bg-neutral-900 text-white' : 'border-neutral-200 bg-neutral-100 text-neutral-900'
              }`}
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 border-b shadow-2xl p-6 transition-all ${
          darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-neutral-200'
        }`}>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  darkMode ? 'text-neutral-200 hover:bg-neutral-900' : 'text-neutral-800 hover:bg-neutral-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExploreEcosystem();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md shadow-cyan-500/20"
              >
                <span>Explore Ecosystem</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
