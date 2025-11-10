import React from 'react';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Infographic from './components/Infographic';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Hero />
      <Dashboard />
      <Infographic />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
