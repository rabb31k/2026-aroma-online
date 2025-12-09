import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EXHIBITION_DATA } from '../constants';
import { ExhibitionCardData } from '../types';

const Card: React.FC<{ data: ExhibitionCardData }> = ({ data }) => {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] h-[500px] cursor-pointer shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      {/* Background Image */}
      <img 
        src={data.imageUrl} 
        alt={data.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${data.bgGradient} opacity-80 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-90`}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="flex justify-start">
           <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-white tracking-widest uppercase border border-white/10">
             {data.tag}
           </span>
        </div>

        <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
          <h3 className={`text-4xl font-serif font-bold mb-2 ${data.color} drop-shadow-md`}>
            {data.title}
          </h3>
          <p className="text-white/80 text-lg mb-8 font-light tracking-wide">
            {data.subtitle}
          </p>
          
          <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white px-6 py-3 rounded-full transition-all duration-300 group-hover:pl-8">
            進入體驗 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Exhibition: React.FC = () => {
  return (
    <section id="exhibition" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-20 space-y-4">
           <span className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-bold tracking-wider">線上虛擬展覽</span>
           <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-800">
             沉浸式五行體驗<br/>
             <span className="text-stone-600 italic text-3xl md:text-5xl mt-2 block">探索光影流芳的奧秘</span>
           </h2>
           <p className="text-stone-500 max-w-2xl mx-auto pt-4">
             透過虛擬實境技術，在家也能身歷其境參與年會展覽。每個展區都對應不同的五行能量，等待您的探索。
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXHIBITION_DATA.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibition;