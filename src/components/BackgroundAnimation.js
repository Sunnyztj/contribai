import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-ai-blue/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-ai-teal/10 to-ai-blue/10 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 border border-ai-orange/20 rotate-45 animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-ai-blue/10 to-ai-teal/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Network nodes */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-ai-glow rounded-full animate-pulse-slow"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-ai-glow rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-ai-glow rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-ai-blue/5 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-ai-teal/5 via-transparent to-transparent"></div>
    </div>
  );
};

export default BackgroundAnimation; 