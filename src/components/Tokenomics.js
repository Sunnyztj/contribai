import React from 'react';

const Tokenomics = () => {
  const tokenDetails = [
    {
      label: 'Total Supply',
      value: '18,446,744,073.709551615',
      unit: 'CTAI',
      description: 'Fixed supply on Solana blockchain'
    },
    {
      label: 'Decimals',
      value: '9',
      unit: '',
      description: 'Standard Solana token precision'
    },
    {
      label: 'Mint Address',
      value: 'DrrFfzMWgYyMMKsNNZh4YdLYvScTWPPMbRViwNAqj4VZ',
      unit: '',
      description: 'Official token contract address'
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
            <span className="gradient-text">Tokenomics</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ai-blue to-ai-teal mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Token Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Token Details</h3>
            {tokenDetails.map((detail, index) => (
              <div key={index} className="bg-gradient-to-br from-ai-dark/50 to-ai-darker/50 backdrop-blur-sm rounded-xl p-6 border border-ai-blue/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm font-medium">{detail.label}</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-bold text-white">{detail.value}</span>
                  {detail.unit && <span className="text-ai-blue font-semibold">{detail.unit}</span>}
                </div>
                <p className="text-gray-400 text-sm mt-2">{detail.description}</p>
              </div>
            ))}
          </div>

          {/* Supply Distribution */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Supply Distribution</h3>
            <div className="bg-gradient-to-br from-ai-dark/50 to-ai-darker/50 backdrop-blur-sm rounded-xl p-6 border border-ai-blue/20">
              {/* Placeholder Chart */}
              <div className="relative w-full h-64 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-8 border-ai-blue/20 relative">
                    {/* Chart segments - simplified representation */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ai-blue/30 to-ai-teal/30 transform rotate-0"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ai-teal/30 to-ai-orange/30 transform rotate-144"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ai-orange/30 to-ai-blue/30 transform rotate-216"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ai-blue/30 to-ai-teal/30 transform rotate-324"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-ai-teal/30 to-ai-orange/30 transform rotate-342"></div>
                    
                    {/* Center */}
                    <div className="absolute inset-4 bg-ai-darker rounded-full flex items-center justify-center">
                      <span className="text-ai-blue font-bold text-lg">CTAI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distribution Legend */}
              <div className="space-y-3">
                {distributionData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 bg-gradient-to-r ${item.color} rounded-full`}></div>
                      <span className="text-gray-300 text-sm">{item.category}</span>
                    </div>
                    <span className="text-white font-semibold">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-ai-dark/30 to-ai-darker/30 backdrop-blur-sm rounded-2xl p-8 border border-ai-blue/20">
            <h3 className="text-2xl font-bold text-white mb-4">Built on Solana</h3>
            <p className="text-gray-300 mb-6">
              ContribAI leverages Solana's high-performance blockchain for fast, secure, and cost-effective transactions, 
              making it ideal for global education applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="px-3 py-1 bg-ai-blue/10 rounded-full border border-ai-blue/20">Fast Transactions</span>
              <span className="px-3 py-1 bg-ai-teal/10 rounded-full border border-ai-teal/20">Low Fees</span>
              <span className="px-3 py-1 bg-ai-orange/10 rounded-full border border-ai-orange/20">Scalable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics; 