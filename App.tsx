import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SymptomChecker from './components/SymptomChecker';
import RiskAssessment from './components/RiskAssessment';
import FirstAidGuide from './components/FirstAidGuide';
import EmergencyAlert from './components/EmergencyAlert';
import HealthTips from './components/HealthTips';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <SymptomChecker />
      <RiskAssessment />
      <FirstAidGuide />
      <EmergencyAlert />
      <HealthTips />
      <Footer />
    </div>
  );
}

export default App;