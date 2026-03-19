import React from 'react';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Features from './components/feature.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;