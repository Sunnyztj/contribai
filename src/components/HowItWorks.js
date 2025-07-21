import React from "react";
import { FaGlobeAmericas, FaCheckCircle, FaRecycle, FaBalanceScale, FaUserShield, FaHandshake, FaRobot, FaBookOpen, FaVideo, FaQuestionCircle, FaShieldAlt } from "react-icons/fa";

const WhitepaperVisionSection = () => (
  <section className="max-w-3xl mx-auto my-16 px-4 md:px-0 fadein-section">
    {/* Vision */}
    <div className="mb-12">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-4 gradient-text">
        <span className="mr-2 text-3xl md:text-4xl"><FaGlobeAmericas className="inline-block text-ai-blue" /></span>
        Vision – Beyond Crypto
      </h2>
      <div className="bg-gradient-to-br from-ai-dark/70 to-ai-darker/80 rounded-2xl p-6 md:p-8 border border-ai-blue/20 shadow-lg">
        <p className="text-lg md:text-xl text-white font-semibold mb-2">
          ContribAI is not just another blockchain project—it’s a <span className="gradient-text font-bold">borderless knowledge platform</span> dedicated to empowering children and young learners worldwide with equal access to high-quality education.
        </p>
        <p className="text-[#b0b8c1] mt-2">
          Blockchain here is strictly used as a transparent, low-barrier payment and tracking infrastructure, never for speculation or manipulation.
        </p>
      </div>
    </div>

    {/* Real Impact & Trust */}
    <div className="mb-12">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-4 gradient-text">
        <span className="mr-2 text-2xl md:text-3xl"><FaCheckCircle className="inline-block text-ai-teal" /></span>
        Real Impact & Trust
      </h2>
      <div className="bg-gradient-to-br from-ai-dark/70 to-ai-darker/80 rounded-2xl p-6 md:p-8 border border-ai-blue/20 shadow-lg space-y-5">
        <div className="flex items-start">
          <span className="mr-3 mt-1 text-ai-blue"><FaBalanceScale className="w-5 h-5" /></span>
          <div>
            <span className="font-bold text-white">No Speculation Policy:</span>
            <p className="text-[#b0b8c1]">
              We strictly reject price manipulation and speculative trading. The ContribAI token (CTAI) is exclusively for rewarding educational contributions and promoting learning engagement.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="mr-3 mt-1 text-ai-blue"><FaUserShield className="w-5 h-5" /></span>
          <div>
            <span className="font-bold text-white">Complete Transparency & Auditability:</span>
            <p className="text-[#b0b8c1]">
              All token issuances, reward distributions, and governance decisions are publicly traceable on-chain. Quarterly transparency reports are published for community verification.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="mr-3 mt-1 text-ai-blue"><FaShieldAlt className="w-5 h-5" /></span>
          <div>
            <span className="font-bold text-white">Compliance & Ethics:</span>
            <p className="text-[#b0b8c1]">
              ContribAI fully complies with AML/KYC regulations where required, ensuring no misuse or illicit activities can take place through the platform.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="mr-3 mt-1 text-ai-blue"><FaHandshake className="w-5 h-5" /></span>
          <div>
            <span className="font-bold text-white">Real-World Partnerships:</span>
            <p className="text-[#b0b8c1]">
              Collaborations with reputable NGOs and education-focused organizations demonstrate real-world impact and ensure legitimacy.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Sustainable Token Economy */}
    <div className="mb-12">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-4 gradient-text">
        <span className="mr-2 text-2xl md:text-3xl"><FaRecycle className="inline-block text-ai-orange" /></span>
        Sustainable Token Economy
      </h2>
      <div className="bg-gradient-to-br from-ai-dark/70 to-ai-darker/80 rounded-2xl p-6 md:p-8 border border-ai-blue/20 shadow-lg space-y-5">
        <div className="flex items-start">
          <span className="mr-3 mt-1 text-ai-orange"><FaRecycle className="w-5 h-5" /></span>
          <div>
            <span className="font-bold text-white">Continuous Reward Loop:</span>
            <p className="text-[#b0b8c1]">
              Tokens are rewarded for contributions, partially recycled back into the community fund, and utilized effectively for sustained token circulation.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="mr-3 mt-1 text-ai-orange"><FaRobot className="w-5 h-5" /></span>
          <div>
            <span className="font-bold text-white">AI-Enhanced Learning & Quality Control:</span>
            <p className="text-[#b0b8c1]">
              AI technology is integrated as a personalized learning assistant, quality reviewer, and content curator, ensuring educational effectiveness.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="mr-3 mt-1 text-ai-orange"><FaBookOpen className="w-5 h-5" /></span>
          <div>
            <span className="font-bold text-white">Real Educational Value:</span>
            <ul className="list-disc pl-5 text-[#b0b8c1]">
              <li className="flex items-center"><FaQuestionCircle className="w-4 h-4 mr-2 text-ai-blue" /> Q&amp;A community support</li>
              <li className="flex items-center"><FaRobot className="w-4 h-4 mr-2 text-ai-teal" /> Intelligent practice quizzes</li>
              <li className="flex items-center"><FaVideo className="w-4 h-4 mr-2 text-ai-orange" /> Educational video resources</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Compliance Declaration */}
    <div className="mb-8">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-4 gradient-text">
        <span className="mr-2 text-2xl md:text-3xl"><FaUserShield className="inline-block text-ai-blue" /></span>
        Clear Compliance Declaration
      </h2>
      <blockquote className="bg-gradient-to-br from-ai-dark/80 to-ai-darker/90 border-l-4 border-ai-blue/60 rounded-2xl p-6 md:p-8 text-base md:text-lg text-[#b0b8c1] shadow-lg">
        <span className="italic">
          "We understand the concerns around blockchain misuse. ContribAI exists solely to empower global education. We utilize blockchain's transparency to reinforce trust and fairness. No speculative or illicit activities are permitted on this platform."
        </span>
      </blockquote>
    </div>
  </section>
);

export default WhitepaperVisionSection; 