import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'How it Works', href: '/#how-it-works' },
  { label: 'Tokenomics', href: '/#tokenomics' },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Helper to close menu on navigation
  const handleNavClick = (href) => {
    setMenuOpen(false);
    // If already on home, scroll to anchor
    if (location.pathname === '/' && href.startsWith('/#')) {
      const anchor = href.split('#')[1];
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-sans backdrop-blur-md bg-black/60 shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Brand (same as footer) */}
          <a href="/#hero" className="flex items-center space-x-3 select-none group">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/images/logo.png" 
                alt="ContribAI Logo" 
                className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <span className="text-xl font-bold tracking-tight gradient-text">ContribAI</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-teal-400 focus:text-blue-400 transition-colors duration-150 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold shadow hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150"
            >
              Whitepaper
            </a>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900/95 shadow-lg z-50 transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{backdropFilter: 'blur(12px)'}}
      >
        <div className="flex flex-col h-full py-8 px-6 space-y-6">
          <div className="flex items-center justify-between mb-8">
            <span className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="/images/logo.png" 
                  alt="ContribAI Logo" 
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <span className="text-xl font-bold gradient-text">ContribAI</span>
            </span>
            <button
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90 text-lg hover:text-teal-400 focus:text-blue-400 transition-colors duration-150 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/whitepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold shadow hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150"
              onClick={() => setMenuOpen(false)}
            >
              Whitepaper
            </a>
          </nav>
          <div className="flex-grow" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 