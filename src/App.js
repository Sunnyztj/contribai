import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="App relative min-h-screen">
      <BackgroundAnimation />
      <Hero />
      <About />
      <HowItWorks />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App; 