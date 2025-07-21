import React from 'react';

const sections = [
  { id: 'introduction', label: 'Introduction & Vision' },
  { id: 'content', label: 'Content & Platform Positioning' },
  { id: 'ai', label: 'Role & Application of AI' },
  { id: 'tokenomics', label: 'Sustainable Tokenomics & Business Model' },
  { id: 'roadmap', label: 'Roadmap & Action Plan' },
  { id: 'compliance', label: 'Compliance, Ethics & Anti-Speculation Policy' },
  { id: 'impact', label: 'Real-World Impact & Social Good' },
  { id: 'team', label: 'Team, Advisors & Partnerships' },
  { id: 'contact', label: 'Contact & Transparency' },
  { id: 'faq', label: 'FAQ & Community Governance' },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="mb-12 md:mb-20 px-4 md:px-0 max-w-3xl mx-auto fadein-section"
  >
    <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text" style={{ scrollMarginTop: 96 }}>
      {title}
    </h2>
    <div className="bg-gradient-to-br from-ai-dark/60 to-ai-darker/80 rounded-2xl p-6 md:p-10 border border-ai-blue/20 shadow-lg">
      {children}
    </div>
  </section>
);

const WhitepaperPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-ai-dark to-ai-darker text-white font-sans pt-24 pb-16">
      {/* Minimal TOC */}
      <nav className="hidden md:block fixed left-8 top-32 z-30 w-56">
        <div className="bg-gradient-to-br from-ai-dark/80 to-ai-darker/90 rounded-2xl border border-ai-blue/20 shadow-lg p-4 sticky top-32">
          <ul className="space-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollToSection(s.id)}
                  className="text-left w-full px-2 py-1 rounded-lg text-gray-300 hover:text-ai-blue hover:bg-ai-blue/10 transition-colors duration-200"
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto pt-2 pb-32 md:pl-64">
        <Section id="introduction" title="Introduction & Vision">
          <p>
            ContribAI is a global decentralized education platform powered by blockchain and artificial intelligence. Our mission is to enable children and youth everywhere to access high-quality, trustworthy educational resources—regardless of their location or socioeconomic status.
          </p>
          <ul className="list-disc pl-5 mt-4 text-[#b0b8c1]">
            <li>ContribAI is not a speculative token project.</li>
            <li>Blockchain is used only for transparency, trust, cross-border efficiency, and building a fair, incentive-driven knowledge economy.</li>
          </ul>
        </Section>

        <Section id="content" title="Content & Platform Positioning">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold text-white">Q&amp;A Community:</span> Learners can ask and answer questions on a wide range of topics. High-quality answers are rewarded.
            </li>
            <li>
              <span className="font-bold text-white">Smart Quiz Bank:</span> Structured practice with thousands of curated questions, tailored to different ages and abilities.
            </li>
            <li>
              <span className="font-bold text-white">Curated Video Content:</span> Expert-created short educational videos to supplement core learning modules.
            </li>
          </ul>
          <div className="mt-4">
            <span className="font-bold text-white">Why this model?</span>
            <ul className="list-disc pl-5 mt-2 text-[#b0b8c1]">
              <li>Q&amp;A fosters community and interactive learning.</li>
              <li>Smart quizzes provide measurable academic progress.</li>
              <li>Videos enhance engagement and help explain complex concepts visually.</li>
            </ul>
          </div>
        </Section>

        <Section id="ai" title="Role & Application of AI">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold text-white">Personalized Recommendations:</span> AI analyzes learning behavior, quiz performance, and engagement to suggest tailored content and learning paths.
            </li>
            <li>
              <span className="font-bold text-white">Automated Q&amp;A Assistant:</span> AI can answer common questions instantly, providing first-line support to learners.
            </li>
            <li>
              <span className="font-bold text-white">Content Quality Assurance:</span> AI evaluates submissions for relevance, accuracy, and age appropriateness, flagging low-quality or inappropriate content.
            </li>
            <li>
              <span className="font-bold text-white">Video Enhancement:</span> AI auto-generates subtitles, summaries, and highlights to improve video accessibility and comprehension.
            </li>
          </ul>
          <div className="mt-4 text-[#b0b8c1]">
            <span className="font-bold text-white">AI’s Role:</span> Not to replace human educators, but to empower both learners and contributors, making quality education scalable, efficient, and equitable.
          </div>
        </Section>

        <Section id="tokenomics" title="Sustainable Tokenomics & Business Model">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold text-white">CTAI Token:</span> Fixed-supply digital currency (18,446,744,073 tokens), serving as the backbone of the ecosystem.
            </li>
            <li>
              <span className="font-bold text-white">Incentivized Knowledge Sharing:</span> Contributors earn CTAI for creating high-quality content, answering questions, or curating quiz banks and videos.
            </li>
            <li>
              <span className="font-bold text-white">Token Utility:</span> Users spend CTAI to access premium content, request expert help, or unlock advanced quizzes and courses.
            </li>
            <li>
              <span className="font-bold text-white">Recycling & Sustainability:</span> A portion of CTAI spent on services is burned or returned to the community rewards pool to maintain healthy circulation.
            </li>
            <li>
              <span className="font-bold text-white">Deflationary Incentive Model:</span> Rewards per contribution gradually decrease as the user base grows, ensuring long-term sustainability.
            </li>
            <li>
              <span className="font-bold text-white">No Speculation Policy:</span> CTAI is not marketed as an investment vehicle. There are no pump-and-dump mechanics or price manipulation incentives.
            </li>
          </ul>
          <div className="mt-4">
            <span className="font-bold text-white">Example Loop:</span>
            <ul className="list-disc pl-5 mt-2 text-[#b0b8c1]">
              <li>Learner spends CTAI → Contributor receives CTAI → Contributor creates more content → Platform quality increases → More learners join → CTAI utility grows.</li>
            </ul>
          </div>
        </Section>

        <Section id="roadmap" title="Roadmap & Action Plan">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-ai-blue mb-2">
                Phase 1: Infrastructure & Launch <span className="text-gray-400 font-normal">(2025 Q1 - Q2)</span>
              </h3>
              <ul className="list-disc pl-5 text-gray-200">
                <li>Platform website and MVP (Q&amp;A and quiz modules) launch</li>
                <li>Whitepaper publication and core community formation</li>
                <li>Onboarding early educators and contributors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-ai-blue mb-2">
                Phase 2: Community & Feature Development <span className="text-gray-400 font-normal">(2025 Q3 - Q4)</span>
              </h3>
              <ul className="list-disc pl-5 text-gray-200">
                <li>Launch incentive system and AI-powered Q&amp;A assistant</li>
                <li>Expand smart quiz bank and add first video modules</li>
                <li>Partnerships with education organizations and NGOs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-ai-blue mb-2">
                Phase 3: Ecosystem Expansion & DAO Governance <span className="text-gray-400 font-normal">(2026 Q1 - Q2)</span>
              </h3>
              <ul className="list-disc pl-5 text-gray-200">
                <li>Advanced AI personalization and content curation features</li>
                <li>Community governance (DAO) launched</li>
                <li>Scale up marketing, user acquisition, and international cooperation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-ai-blue mb-2">
                Phase 4: Sustainable Growth & Global Expansion <span className="text-gray-400 font-normal">(2026 Q3+)</span>
              </h3>
              <ul className="list-disc pl-5 text-gray-200">
                <li>Continuous AI and blockchain upgrades</li>
                <li>Worldwide partnership network</li>
                <li>Global educational outreach and social impact programs</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="compliance" title="Compliance, Ethics & Anti-Speculation Policy">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold text-white">Absolute Transparency:</span> All token issuance, distribution, and governance are visible on-chain and in regular transparency reports.
            </li>
            <li>
              <span className="font-bold text-white">Legal Compliance:</span> Adherence to AML/KYC regulations; no support for illicit activity or unregulated investment.
            </li>
            <li>
              <span className="font-bold text-white">Non-Speculative Mission:</span> CTAI exists only to facilitate educational value—not for price speculation, “farming,” or manipulative trading.
            </li>
            <li>
              <span className="font-bold text-white">Open Partnership:</span> Collaboration with reputable organizations, NGOs, and education professionals.
            </li>
          </ul>
        </Section>

        <Section id="impact" title="Real-World Impact & Social Good">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold text-white">Accessible Knowledge:</span> Free or low-cost access to quality resources for underserved communities.
            </li>
            <li>
              <span className="font-bold text-white">Equal Opportunity:</span> Breaking barriers of geography and income through digital education.
            </li>
            <li>
              <span className="font-bold text-white">Genuine Stories:</span> Collect and share success cases where ContribAI has directly benefited learners or educators.
            </li>
            <li>
              <span className="font-bold text-white">Charity & Philanthropy:</span> Partner with NGOs to run scholarship, outreach, or special support programs using CTAI.
            </li>
          </ul>
        </Section>

        <Section id="team" title="Team, Advisors & Partnerships">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-bold text-white">To be announced:</span> Education experts, technologists, and global advisors committed to ContribAI’s mission.
            </li>
            <li>
              <span className="font-bold text-white">Seeking partnerships:</span> Schools, NGOs, and edtech companies worldwide.
            </li>
          </ul>
        </Section>

        <Section id="contact" title="Contact & Transparency">
          <ul className="list-none pl-0 space-y-1">
            <li>
              <span className="font-bold text-white">Website:</span>{' '}
              <a
                href="https://www.contribai.com"
                className="text-ai-blue underline hover:text-ai-teal transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.contribai.com
              </a>
            </li>
            <li>
              <span className="font-bold text-white">Email:</span>{' '}
              <a
                href="mailto:info@contribai.com"
                className="text-ai-blue underline hover:text-ai-teal transition"
              >
                info@contribai.com
              </a>
            </li>
            <li>
              <span className="font-bold text-white">X (Twitter):</span>{' '}
              <a
                href="https://x.com/AiContrib25247"
                className="text-ai-blue underline hover:text-ai-teal transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                @AiContrib25247
              </a>
            </li>
            <li>
              <span className="font-bold text-white">DAO and governance details:</span> To be published
            </li>
          </ul>
          <div className="mt-4 text-gray-300 text-sm">
            ContribAI: Blockchain for Education, Not Speculation. Join us in building a transparent, equitable, and impactful education ecosystem for the next generation.
          </div>
        </Section>

        {/* FAQ Section */}
        <section id="faq" className="mb-8 md:mb-16 px-4 md:px-0 max-w-3xl mx-auto fadein-section">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text" style={{ scrollMarginTop: 96 }}>
            FAQ & Community Governance
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">Will a fixed token supply limit platform growth?</h3>
              <blockquote className="bg-gradient-to-br from-ai-dark/70 to-ai-darker/80 border-l-4 border-ai-blue/60 rounded-2xl p-6 md:p-8 text-base md:text-lg text-[#b0b8c1] shadow-lg">
                <span className="block font-bold text-white mb-2">No.</span>
                With balanced token release, recycling mechanisms, diverse real-world use cases, and dynamic DAO governance, ContribAI ensures sustainable incentives and long-term ecosystem prosperity—even with a fixed total supply.
              </blockquote>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">How does AI benefit learners and contributors?</h3>
              <blockquote className="bg-gradient-to-br from-ai-dark/70 to-ai-darker/80 border-l-4 border-ai-blue/60 rounded-2xl p-6 md:p-8 text-base md:text-lg text-[#b0b8c1] shadow-lg">
                AI automates routine support, provides tailored learning paths, ensures quality, and boosts community efficiency—empowering both learners and content creators.
              </blockquote>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">How can I contribute or join the DAO?</h3>
              <blockquote className="bg-gradient-to-br from-ai-dark/70 to-ai-darker/80 border-l-4 border-ai-blue/60 rounded-2xl p-6 md:p-8 text-base md:text-lg text-[#b0b8c1] shadow-lg">
                Anyone can start by answering questions, creating quizzes, or uploading educational content. As your reputation grows, you’ll be able to participate in DAO proposals and community decisions.
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      {/* Fade-in animation styles */}
      <style>{`
        .fadein-section {
          opacity: 0;
          transform: translateY(40px);
          animation: fadein 1s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .fadein-section:nth-child(1) { animation-delay: 0.1s; }
        .fadein-section:nth-child(2) { animation-delay: 0.2s; }
        .fadein-section:nth-child(3) { animation-delay: 0.3s; }
        .fadein-section:nth-child(4) { animation-delay: 0.4s; }
        .fadein-section:nth-child(5) { animation-delay: 0.5s; }
        .fadein-section:nth-child(6) { animation-delay: 0.6s; }
        .fadein-section:nth-child(7) { animation-delay: 0.7s; }
        .fadein-section:nth-child(8) { animation-delay: 0.8s; }
        .fadein-section:nth-child(9) { animation-delay: 0.9s; }
        @keyframes fadein {
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default WhitepaperPage; 