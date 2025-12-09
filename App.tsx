import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Exhibition from './components/Exhibition';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-800 selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <Calculator />
        <Exhibition />
      </main>
      <Footer />
    </div>
  );
}

export default App;