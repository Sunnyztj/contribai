import React from 'react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 z-10">
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto flex items-center justify-center glow-effect">
            <img 
              src="/images/logo.png" 
              alt="ContribAI Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Empowering Global Education</span>
          <br />
          <span className="text-white">with Blockchain & AI</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          ContribAI rewards knowledge contribution, connecting educators and learners worldwide.
        </p>

        {/* Call to Action */}
        <button
          onClick={scrollToAbout}
          className="px-8 py-4 bg-gradient-to-r from-ai-blue to-ai-teal text-white font-semibold rounded-full text-lg hover:from-ai-teal hover:to-ai-blue transition-all duration-300 transform hover:scale-105 glow-effect"
        >
          Join the Movement
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-ai-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-ai-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 