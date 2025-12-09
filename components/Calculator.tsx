import React, { useState, useMemo } from 'react';
import { ChevronDown, RefreshCw } from 'lucide-react';
import { ELEMENT_MAPPING } from '../constants';
import { FiveElementResult } from '../types';

const Calculator: React.FC = () => {
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [result, setResult] = useState<FiveElementResult | null>(null);

  // Generate Year, Month, Day options
  const years = useMemo(() => Array.from({ length: 80 }, (_, i) => 2024 - i).map(String), []);
  const months = useMemo(() => Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0')), []);
  const days = useMemo(() => Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0')), []);

  const calculate = () => {
    if (!year || !month || !day) return;

    const fullString = `${year}${month}${day}`;
    let sum = 0;
    for (const char of fullString) sum += parseInt(char);

    // Reduce to single digit
    while (sum > 9) {
      let temp = 0;
      String(sum).split('').forEach(n => temp += parseInt(n));
      sum = temp;
    }

    // Get mapping
    const mapping = ELEMENT_MAPPING[sum];
    if (mapping) {
      setResult({ number: sum, ...mapping });
    }
  };

  const reset = () => {
    setResult(null);
    setYear('');
    setMonth('');
    setDay('');
  };

  return (
    <section id="calculator" className="py-24 bg-stone-50 overflow-hidden relative">
       {/* Decorative Background Elements */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-6xl md:text-9xl font-serif text-stone-800 opacity-10 absolute top-[-40px] select-none">01</h2>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-4 relative">生命靈數計算</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
          {/* Input Area */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100">
            <h3 className="text-xl text-stone-600 mb-8 font-medium">請選擇您的西元出生日期</h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-stone-500 font-medium tracking-wide">年份</label>
                <div className="relative">
                  <select 
                    value={year} 
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-stone-700"
                  >
                    <option value="" disabled>選擇年份</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-stone-500 font-medium tracking-wide">月份</label>
                <div className="relative">
                  <select 
                    value={month} 
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-stone-700"
                  >
                    <option value="" disabled>選擇月份</option>
                    {months.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-stone-500 font-medium tracking-wide">日期</label>
                <div className="relative">
                  <select 
                    value={day} 
                    onChange={(e) => setDay(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-stone-700"
                  >
                    <option value="" disabled>選擇日期</option>
                    {days.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <button 
                onClick={calculate}
                disabled={!year || !month || !day}
                className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-stone-300 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-900/20 mt-4"
              >
                計算我的五行屬性
              </button>
            </div>
            
            <p className="text-center text-xs text-stone-400 mt-4">計算結果將即時顯示在右側（或下方）</p>
          </div>

          {/* Result Area */}
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            {result ? (
              <div className="text-center animate-fade-in-up w-full">
                 <div className={`w-32 h-32 mx-auto rounded-full ${result.color} flex items-center justify-center shadow-2xl mb-8 ring-8 ring-white`}>
                    <result.icon className="w-16 h-16 text-white" />
                 </div>
                 <h4 className="text-2xl text-stone-500 mb-2">您的生命靈數為 <span className="font-bold text-stone-800">{result.number}</span></h4>
                 <h3 className="text-5xl font-serif font-bold text-stone-800 mb-6">屬性：{result.element}</h3>
                 
                 <div className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100 max-w-md mx-auto">
                    <p className="text-xl font-medium text-stone-700 mb-2">{result.description}</p>
                    <p className="text-stone-500">{result.traits}</p>
                 </div>
                 
                 <div className="mt-8 text-stone-400 text-sm">
                   <p>選擇你的生日，開啟專屬五行之旅</p>
                 </div>

                 <button onClick={reset} className="mt-8 flex items-center justify-center gap-2 mx-auto text-stone-400 hover:text-stone-600 transition-colors">
                    <RefreshCw className="w-4 h-4" /> 重新計算
                 </button>
              </div>
            ) : (
              <div className="text-center space-y-8 opacity-50">
                <div className="flex gap-4 justify-center">
                  {[1,2,3,4,5].map((_, i) => (
                    <div key={i} className={`w-12 h-12 rounded-full flex items-center justify-center border-2 border-dashed border-stone-300 ${i === 2 ? 'scale-125 border-solid bg-stone-200' : ''}`}>
                      <div className="w-full h-full rounded-full animate-pulse bg-stone-200"></div>
                    </div>
                  ))}
                </div>
                <p className="text-xl text-stone-500 font-serif">選擇你的生日，開啟專屬五行之旅</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;