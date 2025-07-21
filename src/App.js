import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import WhitepaperPage from './WhitepaperPage';

function App() {
  return (
    <div className="App relative min-h-screen">
      <Navigation />
      <BackgroundAnimation />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <HowItWorks />
            <Tokenomics />
            <Footer />
          </>
        } />
        <Route path="/whitepaper" element={<WhitepaperPage />} />
      </Routes>
    </div>
  );
}

export default App; 