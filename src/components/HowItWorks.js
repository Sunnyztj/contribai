import React from 'react';

const steps = [
  {
    title: 'Contribute',
    description: 'Educators, experts, and users upload educational content (articles, videos, courses, datasets).',
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 shadow-lg">
        {/* Book/Upload Icon */}
        <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 0l-4 4m4-4l4 4" />
          <rect x="4" y="16" width="16" height="4" rx="2" className="fill-white/10" />
        </svg>
      </span>
    ),
    gradient: 'from-blue-700/80 to-teal-600/80',
    shadow: 'shadow-blue-500/30',
  },
  {
    title: 'AI Quality Review',
    description: 'AI algorithms and community voting assess and score the quality of each contribution.',
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 shadow-lg">
        {/* AI/Brain Icon */}
        <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a3 3 0 016 0m-3-7v2m0 10v2m7-7h-2M5 12H3m15.07 4.93l-1.41-1.41M6.34 6.34l-1.41-1.41m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
        </svg>
      </span>
    ),
    gradient: 'from-teal-500/80 to-blue-700/80',
    shadow: 'shadow-teal-400/30',
  },
  {
    title: 'Reward',
    description: 'High-quality contributors and reviewers are rewarded with CTAI tokens on the Solana blockchain.',
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg">
        {/* Reward/Coin Icon */}
        <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2 2" />
        </svg>
      </span>
    ),
    gradient: 'from-yellow-400/80 to-orange-500/80',
    shadow: 'shadow-orange-400/30',
  },
  {
    title: 'Knowledge Sharing',
    description: 'All valuable content is transparently recorded and available to the global community.',
    icon: (
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-teal-300 shadow-lg">
        {/* Globe/Share Icon */}
        <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
        </svg>
      </span>
    ),
    gradient: 'from-blue-400/80 to-teal-300/80',
    shadow: 'shadow-teal-300/30',
  },
];

const Arrow = ({ direction = 'right', className = '' }) => (
  <svg
    className={`w-10 h-10 text-ai-blue/60 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    viewBox="0 0 24 24"
  >
    {direction === 'right' ? (
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-4-4 4 4-4 4" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-4-4 4 4 4-4" />
    )}
  </svg>
);

const HowItWorks = () => {
  return (
    <section id="howitworks" className="min-h-screen bg-gradient-to-br from-ai-dark to-ai-darker text-white font-sans pt-28 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">How ContribAI Works</h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">A Decentralized Knowledge Sharing Platform Powered by Blockchain & AI</h2>
        </div>

        {/* Desktop: Horizontal flow with arrows */}
        <div className="hidden md:flex justify-between items-center gap-4 mb-16">
          {steps.map((step, idx) => (
            <React.Fragment key={step.title}>
              <div
                className={`group flex flex-col items-center flex-1 bg-gradient-to-br ${step.gradient} ${step.shadow} rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ai-blue/40 cursor-pointer relative`}
              >
                <div className="mb-4 group-hover:scale-110 group-focus:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white text-center tracking-wide drop-shadow-lg">
                  {step.title}
                </h3>
                <p className="text-gray-100 text-center text-base leading-relaxed opacity-80 font-normal">
                  {step.description}
                </p>
                {/* Animated highlight ring */}
                <span className="absolute -inset-1 rounded-2xl pointer-events-none group-hover:shadow-[0_0_0_4px_rgba(14,165,233,0.25)] group-focus:shadow-[0_0_0_4px_rgba(14,165,233,0.25)] transition-all duration-300" />
              </div>
              {idx < steps.length - 1 && (
                <Arrow direction="right" className="mx-2 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: Vertical flow with arrows */}
        <div className="md:hidden flex flex-col items-center gap-8 mb-10">
          {steps.map((step, idx) => (
            <React.Fragment key={step.title}>
              <div
                className={`group w-full flex flex-col items-center bg-gradient-to-br ${step.gradient} ${step.shadow} rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ai-blue/40 cursor-pointer relative`}
              >
                <div className="mb-3 group-hover:scale-110 group-focus:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold mb-1 text-white text-center tracking-wide drop-shadow-lg">
                  {step.title}
                </h3>
                <p className="text-gray-100 text-center text-base leading-relaxed opacity-80 font-normal">
                  {step.description}
                </p>
                <span className="absolute -inset-1 rounded-2xl pointer-events-none group-hover:shadow-[0_0_0_4px_rgba(14,165,233,0.25)] group-focus:shadow-[0_0_0_4px_rgba(14,165,233,0.25)] transition-all duration-300" />
              </div>
              {idx < steps.length - 1 && (
                <Arrow direction="down" className="my-2" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <a
            href="/#hero"
            className="px-8 py-4 bg-gradient-to-r from-ai-blue to-ai-teal text-white font-semibold rounded-full text-lg shadow hover:from-ai-teal hover:to-ai-blue transition-all duration-300 transform hover:scale-105"
          >
            Start Contributing
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 