import React from 'react';
import { ChevronDown, Users, User, UserPlus } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-stone-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/132/1920/1080"
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay for the "Light Flow" effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-900/40 to-emerald-900/60 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/20 to-stone-900"></div>
        
        {/* Animated Particles/Orbs (Simulated with CSS) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center h-full pt-20">
        <div className="space-y-8">
          {/* Participant Counter */}
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/10">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center border-2 border-stone-800"><User className="w-4 h-4 text-white"/></div>
              <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center border-2 border-stone-800"><Users className="w-4 h-4 text-white"/></div>
              <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center border-2 border-stone-800"><UserPlus className="w-4 h-4 text-white"/></div>
            </div>
            <span className="text-white text-sm font-medium">已有 <span className="text-amber-400 font-bold">2,680</span> 位芳療師參與體驗</span>
          </div>

          {/* Main Typography */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight drop-shadow-lg">
              <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-100">光影流芳</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-emerald-200">五行共生</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-amber-100/80 tracking-widest font-light">
              2026 台灣精油芳療年會
            </p>
          </div>

          {/* CTA */}
          <button 
             onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
             className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-8 py-4 rounded-full text-lg font-bold tracking-wider shadow-lg shadow-amber-900/50 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1"
          >
            開始探索你的五行能量
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Right Side Glass Card */}
        <div className="hidden md:block">
           <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl text-white/90 shadow-2xl max-w-md ml-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
             <p className="text-lg leading-relaxed font-light">
               每個人都有專屬的五行能量密碼，透過生命靈數，找到你與精油的共振頻率。在光影交織中，感受<span className="text-emerald-300 font-medium">木的生發</span>、<span className="text-red-300 font-medium">火的熱情</span>、<span className="text-yellow-300 font-medium">土的穩定</span>、<span className="text-gray-300 font-medium">金的收斂</span>、<span className="text-blue-300 font-medium">水的流動</span>。
             </p>
           </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center animate-bounce">
        <span className="text-xs tracking-widest mb-2">向下探索</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;