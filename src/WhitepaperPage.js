import React from 'react';

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'value-proposition', label: 'Value Proposition' },
  { id: 'technology', label: 'Technology' },
  { id: 'tokenomics', label: 'Tokenomics' },
  { id: 'community', label: 'Community Incentives' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'risks', label: 'Risks & Compliance' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
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
      {/* Minimal TOC (optional, can be removed if not needed) */}
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
        <Section id="introduction" title="Introduction">
          <p>
            ContribAI is a decentralized platform leveraging blockchain and artificial intelligence to revolutionize global education. Our mission is to incentivize knowledge sharing, empower educators and learners, and foster a sustainable, transparent, and accessible educational ecosystem for everyone.
          </p>
        </Section>

        <Section id="value-proposition" title="Value Proposition">
          <ul className="list-disc pl-5 space-y-2">
            <li>Democratize access to high-quality educational resources worldwide.</li>
            <li>Reward contributors, reviewers, and mentors with transparent, on-chain incentives.</li>
            <li>Enable a trustless, community-governed platform for lifelong learning and teaching.</li>
            <li>Utilize AI to ensure content quality, relevance, and personalized learning experiences.</li>
          </ul>
        </Section>

        <Section id="technology" title="Technology">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-ai-blue">Blockchain Infrastructure</h3>
              <p>
                Built on Solana, ContribAI ensures fast, low-cost, and scalable transactions. All contributions, reviews, and rewards are recorded on-chain for full transparency and auditability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-ai-blue">AI-Powered Collaboration</h3>
              <p>
                AI algorithms automatically assess content quality, detect plagiarism, and provide personalized recommendations to learners. Community members and AI work together to maintain high standards.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-ai-blue">Decentralized Storage</h3>
              <p>
                Educational content is stored using decentralized solutions (e.g., IPFS), ensuring permanence, censorship resistance, and open access.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-ai-blue">DAO Governance</h3>
              <p>
                Platform decisions are made by token holders through a decentralized autonomous organization (DAO), ensuring community-driven development and oversight.
              </p>
            </div>
          </div>
        </Section>

        <Section id="tokenomics" title="Tokenomics">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-ai-blue">Token Name</h3>
              <p>ContribAI (CTAI)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-ai-blue">Total Supply</h3>
              <p>18,446,744,073 CTAI (fixed supply on Solana blockchain)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-ai-blue">Distribution</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>40% Community Rewards</li>
                <li>20% Ecosystem Development & Partnerships</li>
                <li>20% Team & Advisors (vesting)</li>
                <li>10% Marketing & Operations</li>
                <li>10% Reserve</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-ai-blue">Utility</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Incentivize content creators, reviewers, and mentors</li>
                <li>Governance voting rights</li>
                <li>Access to premium educational resources</li>
                <li>Payment for educational services and content</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="community" title="Community Incentives">
          <ul className="list-disc pl-5 space-y-2">
            <li>Contributors earn CTAI tokens for sharing high-quality educational content.</li>
            <li>Reviewers and validators are rewarded for maintaining content standards.</li>
            <li>Learners can earn tokens by participating in peer reviews and community activities.</li>
            <li>Special bounties and grants for innovative educational projects and research.</li>
          </ul>
        </Section>

        <Section id="roadmap" title="Roadmap">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-ai-blue">Phase 1: Infrastructure (2024 Q2–Q3)</h3>
              <p>Launch website and community, publish whitepaper, onboard early contributors.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-ai-blue">Phase 2: Community Growth (2024 Q4–2025 Q1)</h3>
              <p>Implement incentive mechanisms, deploy AI content review, expand partnerships.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-ai-blue">Phase 3: Ecosystem Expansion (2025 Q2–Q4)</h3>
              <p>Scale up marketing, establish collaborations with educational institutions and NGOs, enhance DAO governance.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-ai-blue">Phase 4: Sustainable Growth (2026+)</h3>
              <p>Continuous AI and blockchain upgrades, global community expansion, support for online and offline educational initiatives.</p>
            </div>
          </div>
        </Section>

        <Section id="risks" title="Risks & Compliance">
          <ul className="list-disc pl-5 space-y-2">
            <li>Strict adherence to global legal and regulatory standards, with regular compliance audits.</li>
            <li>Robust data privacy and security measures to protect user information.</li>
            <li>Transparent governance and financial operations to mitigate risks.</li>
          </ul>
        </Section>

        <Section id="team" title="Team">
          <p>
            The ContribAI core team brings together expertise in software development, blockchain, artificial intelligence, and education. Advisors include industry leaders and educators committed to advancing global learning. Detailed team profiles will be published as the project progresses.
          </p>
        </Section>

        <Section id="contact" title="Contact">
          <ul className="list-none pl-0 space-y-1">
            <li>
              Website:{' '}
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
              Email:{' '}
              <a
                href="mailto:info@contribai.com"
                className="text-ai-blue underline hover:text-ai-teal transition"
              >
                info@contribai.com
              </a>
            </li>
          </ul>
          <div className="mt-4 text-gray-300 text-sm">
            Join us in building a fair, open, and rewarding global education ecosystem powered by blockchain and AI.
          </div>
        </Section>

        {/* FAQ Section */}
        <section className="mb-8 md:mb-16 px-4 md:px-0 max-w-3xl mx-auto fadein-section">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text" style={{ scrollMarginTop: 96 }}>
            FAQ
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">Will a fixed token supply limit platform growth?</h3>
              <blockquote className="bg-gradient-to-br from-ai-dark/70 to-ai-darker/80 border-l-4 border-ai-blue/60 rounded-2xl p-6 md:p-8 text-base md:text-lg text-[#b0b8c1] shadow-lg">
                <span className="block font-bold text-white mb-2">No.</span>
                With balanced token release, recycling mechanisms, diverse real-world use cases, and dynamic DAO governance, ContribAI ensures sustainable incentives and long-term ecosystem prosperity—even with a fixed total supply. Tokens for community rewards are released gradually over time, and transaction fees are partially burned or returned to the rewards pool to maintain healthy circulation. The DAO can also adjust incentive policies as the community grows.
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