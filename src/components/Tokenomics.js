import React, { useState, useRef } from 'react';

const Tokenomics = () => {
  const tokenDetails = [
    {
      label: 'Total Supply',
      value: '18,446,744,073', // Only integer part
      unit: 'CTAI',
      description: 'Fixed supply on Solana blockchain'
    },
    {
      label: 'Decimals',
      value: '9',
      unit: '',
      description: 'Standard Solana token precision'
    }
  ];

  const distributionData = [
    { category: 'Community Rewards', percentage: 40, color: 'from-ai-blue to-ai-teal' },
    { category: 'Development Fund', percentage: 25, color: 'from-ai-teal to-ai-orange' },
    { category: 'Ecosystem Growth', percentage: 20, color: 'from-ai-orange to-ai-blue' },
    { category: 'Team & Advisors', percentage: 10, color: 'from-ai-blue to-ai-teal' },
    { category: 'Reserve', percentage: 5, color: 'from-ai-teal to-ai-orange' }
  ];

  return (
    <section id="tokenomics" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Token Details</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ai-blue to-ai-teal mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Token Details */}
          <div className="space-y-8">
            {/* Total Supply */}
            <div className="bg-gradient-to-br from-ai-dark/50 to-ai-darker/50 backdrop-blur-sm rounded-2xl p-8 border border-ai-blue/20">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                {tokenDetails[0].value} <span className="text-ai-blue text-2xl font-bold">{tokenDetails[0].unit}</span>
              </div>
              <div className="text-gray-400 text-sm">{tokenDetails[0].description}</div>
            </div>
            {/* Decimals */}
            <div className="bg-gradient-to-br from-ai-dark/50 to-ai-darker/50 backdrop-blur-sm rounded-2xl p-8 border border-ai-blue/20">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                {tokenDetails[1].value}
              </div>
              <div className="text-gray-400 text-sm">{tokenDetails[1].description}</div>
            </div>
            {/* Mint Address Card */}
            <div className="mt-4">
              <MintAddressCard />
            </div>
          </div>
          {/* Supply Distribution Chart (custom SVG + legend) */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 mb-6">
              <svg viewBox="0 0 200 200" width="100%" height="100%">
                {/* Background circle */}
                <circle cx="100" cy="100" r="90" fill="#181f2a" />
                {/* Segments */}
                {getPieSegments(distributionData).map((seg, idx) => (
                  <path
                    key={idx}
                    d={describeArc(100, 100, 90, seg.startAngle, seg.endAngle)}
                    fill="none"
                    stroke={seg.color}
                    strokeWidth="32"
                    strokeLinecap="round"
                  />
                ))}
                {/* Center circle */}
                <circle cx="100" cy="100" r="56" fill="#101624" />
                <text x="100" y="110" textAnchor="middle" className="font-bold" fontSize="28" fill="#0ea5e9">CTAI</text>
              </svg>
            </div>
            {/* Legend */}
            <div className="space-y-3 w-full max-w-xs mx-auto">
              {distributionData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className={`w-4 h-4 inline-block rounded-full bg-gradient-to-r ${item.color}`}></span>
                    <span className="text-gray-300 text-sm">{item.category}</span>
                  </div>
                  <span className="text-white font-semibold">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper functions for SVG pie chart
function getPieSegments(data) {
  // Assign a color for each segment
  const colorMap = [
    'url(#blue-teal)',
    'url(#teal-orange)',
    'url(#orange-blue)',
    'url(#blue-teal2)',
    'url(#teal-orange2)'
  ];
  let total = data.reduce((sum, d) => sum + d.percentage, 0);
  let angle = 0;
  return data.map((d, i) => {
    const startAngle = angle;
    const endAngle = angle + (d.percentage / total) * 360;
    angle = endAngle;
    return {
      startAngle,
      endAngle,
      color: colorMap[i % colorMap.length]
    };
  });
}

// SVG arc helper
function polarToCartesian(cx, cy, r, angle) {
  let a = ((angle - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(a),
    y: cy + r * Math.sin(a)
  };
}
function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  return [
    'M', start.x, start.y,
    'A', r, r, 0, largeArcFlag, 0, end.x, end.y
  ].join(' ');
}

function MintAddressCard() {
  const MINT_ADDRESS = 'DrrFfzMWgYyMMKsNNZh4YdLYvScTWPPMbRViwNAqj4VZ';
  const SOLSCAN_URL = `https://solscan.io/token/${MINT_ADDRESS}`;
  function truncateAddress(addr) {
    if (!addr) return '';
    return addr.slice(0, 8) + '...' + addr.slice(-8);
  }
  const [copied, setCopied] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const timeoutRef = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText(MINT_ADDRESS);
    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div
      id="tokenomics-mint-address"
      className="w-full max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-ai-blue/20 rounded-3xl shadow-lg p-7 flex flex-col items-center relative transition-all duration-300 hover:bg-white/20"
      onMouseEnter={() => setShowFull(true)}
      onMouseLeave={() => setShowFull(false)}
    >
      <div className="flex items-center w-full justify-between gap-2">
        {/* Address */}
        <div className="flex items-center gap-2 relative w-0 flex-1 min-w-0">
          <span
            className="font-mono text-base md:text-lg font-normal text-[#B0B8C1] tracking-wider cursor-pointer select-all transition-all break-all whitespace-pre-line"
            style={{wordBreak: 'break-all'}}
            title={MINT_ADDRESS}
          >
            {showFull ? MINT_ADDRESS : truncateAddress(MINT_ADDRESS)}
          </span>
        </div>
        {/* Copy Button */}
        <button
          onClick={e => { e.stopPropagation(); handleCopy(); }}
          className="ml-2 flex items-center p-1.5 rounded-full bg-white/20 hover:bg-ai-blue/80 transition-colors border border-ai-blue/20 text-ai-blue focus:outline-none focus:ring-2 focus:ring-ai-blue"
          aria-label="Copy mint address"
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-ai-blue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="9" y="9" width="13" height="13" rx="2" className="fill-ai-blue/10" />
              <rect x="3" y="3" width="13" height="13" rx="2" />
            </svg>
          )}
        </button>
      </div>
      {/* Description */}
      <div className="mt-2 w-full text-left">
        <span className="text-gray-400 text-xs md:text-sm">Official token contract address</span>
        <a
          href={SOLSCAN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3 inline-flex items-center text-xs text-ai-blue hover:text-ai-teal transition-colors underline"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7L21 10z" />
          </svg>
          View on Solscan
        </a>
      </div>
    </div>
  );
}

export default Tokenomics; 