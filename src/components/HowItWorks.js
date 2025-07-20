import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Contribute Knowledge',
      description: 'Share your expertise, teaching resources, or provide mentorship to learners worldwide.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: 'from-ai-blue to-ai-teal'
    },
    {
      number: '02',
      title: 'Earn ContribAI Tokens',
      description: 'Get rewarded with CTAI tokens for your valuable contributions to the education ecosystem.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      gradient: 'from-ai-teal to-ai-orange'
    },
    {
      number: '03',
      title: 'Redeem or Support Global Learning',
      description: 'Use your tokens to access premium content or support educational initiatives worldwide.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: 'from-ai-orange to-ai-blue'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">How It Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ai-blue to-ai-teal mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three simple steps to join the future of decentralized education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-ai-blue/30 to-ai-teal/30 transform -translate-y-1/2 z-0"></div>
              )}
              
              <div className="relative z-10 bg-gradient-to-br from-ai-dark/50 to-ai-darker/50 backdrop-blur-sm rounded-2xl p-8 border border-ai-blue/20 hover:border-ai-blue/40 transition-all duration-300 glow-effect">
                {/* Step number */}
                <div className="text-6xl font-bold text-ai-blue/20 mb-4">{step.number}</div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mb-6`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-ai-dark/30 to-ai-darker/30 backdrop-blur-sm rounded-2xl p-8 border border-ai-blue/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">Join thousands of educators and learners already contributing to the future of education.</p>
            <button className="px-8 py-4 bg-gradient-to-r from-ai-blue to-ai-teal text-white font-semibold rounded-full text-lg hover:from-ai-teal hover:to-ai-blue transition-all duration-300 transform hover:scale-105 glow-effect">
              Start Contributing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 