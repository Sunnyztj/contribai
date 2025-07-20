import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About ContribAI</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ai-blue to-ai-teal mx-auto rounded-full"></div>
        </div>

        <div className="bg-gradient-to-br from-ai-dark/50 to-ai-darker/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-ai-blue/20 glow-effect">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center">
            ContribAI is a decentralized token on Solana, designed to incentivize and reward those who contribute knowledge, teaching resources, and mentorship. Our mission is to make high-quality education accessible and sustainable for everyone.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-gradient-to-br from-ai-dark/30 to-ai-darker/30 rounded-xl border border-ai-blue/10 hover:border-ai-blue/30 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-ai-blue to-ai-teal rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Decentralized</h3>
            <p className="text-gray-400">Built on Solana blockchain for fast, secure, and cost-effective transactions</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-ai-dark/30 to-ai-darker/30 rounded-xl border border-ai-teal/10 hover:border-ai-teal/30 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-ai-teal to-ai-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
            <p className="text-gray-400">Leveraging artificial intelligence to match educators with learners globally</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-ai-dark/30 to-ai-darker/30 rounded-xl border border-ai-orange/10 hover:border-ai-orange/30 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-ai-orange to-ai-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Global Community</h3>
            <p className="text-gray-400">Connecting educators and learners worldwide in a sustainable ecosystem</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 