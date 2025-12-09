import React from 'react';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-stone-900 text-stone-400 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-stone-800 pb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-white text-2xl font-serif">2026 台灣精油芳療年會</h3>
            <p className="text-sm leading-relaxed max-w-md">
              致力於推廣正統芳香療法，結合東方五行哲學與西方科學實證，
              為現代人尋找身心平衡的自然處方。
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wider text-sm uppercase">快速連結</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">大會議程</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">講師陣容</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">購票資訊</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">常見問題</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold tracking-wider text-sm uppercase">聯絡我們</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm mt-4">
               <Mail className="w-4 h-4" />
               <span>contact@aroma2026.tw</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2026 Taiwan Aromatherapy Conference. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">隱私權政策</a>
            <a href="#" className="hover:text-white">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;