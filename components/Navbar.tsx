import React, { useState, useEffect } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center text-white">
        {/* Logo Area */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="bg-gradient-to-tr from-yellow-400 to-amber-600 p-2 rounded-full">
            <Flower2 className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
             <span className="font-serif text-lg font-bold leading-none tracking-widest">AROMATHERAPY</span>
             <span className="text-[10px] tracking-wider opacity-80">2026 CONFERENCE</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('calculator')} className="hover:text-amber-400 transition-colors text-sm tracking-widest">
            生命靈數計算
          </button>
          <button onClick={() => scrollToSection('exhibition')} className="hover:text-amber-400 transition-colors text-sm tracking-widest">
            線上展覽
          </button>
          <button onClick={() => scrollToSection('footer')} className="hover:text-amber-400 transition-colors text-sm tracking-widest">
            芳療師分享
          </button>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105">
            立即報名
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-stone-900 border-t border-stone-800 p-6 flex flex-col space-y-4 shadow-xl">
          <button onClick={() => scrollToSection('calculator')} className="text-left text-white hover:text-amber-400 py-2">
            生命靈數計算
          </button>
          <button onClick={() => scrollToSection('exhibition')} className="text-left text-white hover:text-amber-400 py-2">
            線上展覽
          </button>
          <button onClick={() => scrollToSection('footer')} className="text-left text-white hover:text-amber-400 py-2">
            芳療師分享
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;