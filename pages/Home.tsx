
import React from 'react';
import { PRODUCTS } from '../constants';

interface HomeProps {
  onNavigate: (path: string) => void;
  avatar: string | null;
}

const DataConstellation: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
    <svg className="absolute inset-0 w-full h-full">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(79, 70, 229, 0.1)" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="1.5" fill="rgba(79, 70, 229, 0.2)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    {[...Array(12)].map((_, i) => (
      <div 
        key={i}
        className="absolute w-px h-64 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent animate-scan-v"
        style={{
          left: `${(i + 1) * 8}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: '6s'
        }}
      />
    ))}
  </div>
);

const Home: React.FC<HomeProps> = ({ onNavigate, avatar }) => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* 🚀 ELITE HERO SECTION */}
      <section className="relative pt-48 pb-32 px-4 overflow-hidden">
        <DataConstellation />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          
          {/* Central Brand Identity */}
          <div className="relative mb-12 animate-materialize">
            <div className="absolute -inset-10 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] bg-slate-900 border border-white/10 shadow-2xl overflow-hidden relative group">
              {avatar ? (
                <img src={avatar} alt="Nestor Core" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-4xl animate-pulse">N</div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="scan-line absolute top-0 left-0"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter mb-8 animate-fade-in-up leading-[0.9]">
            Data, <br /><span className="text-indigo-600">done right.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-16 leading-relaxed font-light animate-fade-in-up delay-200">
            Building the infrastructure of intelligence. We combine expert human reasoning with deterministic automation to solve the world's hardest data problems.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 animate-fade-in-up delay-300">
            <button 
              onClick={() => onNavigate('/products')}
              className="px-12 py-6 bg-slate-900 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 transform hover:-translate-y-2"
            >
              Explore Logic
            </button>
            <button 
              onClick={() => onNavigate('/contact')}
              className="px-12 py-6 bg-white text-slate-900 border border-slate-200 font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-slate-50 transition-all transform hover:-translate-y-2"
            >
              Talk to Us
            </button>
          </div>
        </div>
      </section>

      {/* 🧩 SOPHISTICATED PRODUCT GRID */}
      <section className="py-32 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 animate-fade-in">
            <div className="max-w-2xl">
              <span className="text-indigo-500 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">System Architecture</span>
              <h2 className="text-5xl font-bold tracking-tighter mb-6">Systems for Scale</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Proprietary platforms designed for high-stakes data operations, multi-modal extraction, and continuous resolution.
              </p>
            </div>
            <button onClick={() => onNavigate('/products')} className="mt-8 md:mt-0 text-white font-black uppercase tracking-widest text-[10px] border-b-2 border-indigo-600 pb-2 hover:text-indigo-400 transition-colors">
              Full Stack View &rarr;
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product, index) => (
              <div 
                key={product.id}
                onClick={() => onNavigate(`/products/${product.id}`)}
                className={`group relative bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white hover:text-slate-900 transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center font-black text-xl mb-8 group-hover:scale-110 transition-transform">
                    {product.name[0]}
                  </div>
                  <h3 className="font-bold text-2xl mb-4 tracking-tight">{product.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-600 transition-colors">
                    {product.tagline}
                  </p>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    Explore Protocol &rarr;
                  </div>
                </div>
                {/* Decorative background number */}
                <span className="absolute -right-4 -bottom-8 text-9xl font-black text-white/5 pointer-events-none group-hover:text-slate-100 transition-colors">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧠 PHILOSOPHY - NESTOR'S VOID */}
      <section className="py-40 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-xs font-black tracking-[0.3em] text-indigo-600 uppercase mb-8">Intelligence Layer</h2>
            <h3 className="text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
              Where Logic <br />Meets Nuance.
            </h3>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light">
              We don't believe in pure automation for complex data. Real context requires human-in-the-loop integrity, validated by programmatic QA layers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-200 transition-all">
                <h4 className="font-bold text-slate-900 mb-2">Deterministic QA</h4>
                <p className="text-sm text-slate-500">Programmatic validation at every stage of ingestion.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-200 transition-all">
                <h4 className="font-bold text-slate-900 mb-2">Audit Trails</h4>
                <p className="text-sm text-slate-500">Every decision traceable to its source extraction.</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-float">
             <div className="absolute -inset-20 bg-indigo-500/5 rounded-full blur-[100px]"></div>
             <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden group w-full max-w-lg">
                <div className="flex items-center justify-between mb-12">
                   <div className="bg-indigo-600 inline-block px-4 py-1.5 rounded-lg text-[10px] font-black tracking-widest uppercase">CORE STATUS: ACTIVE</div>
                   <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                     {avatar && <img src={avatar} alt="Core" className="w-full h-full object-cover animate-materialize" />}
                   </div>
                </div>

                <div className="text-3xl md:text-4xl font-light mb-16 leading-tight italic text-slate-100 relative z-10 text-center">
                  "Truth in data is not <span className="text-indigo-400 font-normal">probabilistic</span>—it is <span className="text-indigo-400 font-normal">proven</span>."
                </div>

                <div className="flex items-center justify-center space-x-6 relative z-10">
                  <div className="w-px h-12 bg-white/10"></div>
                  <div className="text-center">
                    <div className="font-black text-xl tracking-tighter">NESTOR</div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">System Observer</div>
                  </div>
                  <div className="w-px h-12 bg-white/10"></div>
                </div>

                <div className="absolute -right-20 -bottom-20 opacity-[0.03] select-none pointer-events-none transition-transform duration-700">
                   <span className="text-[18rem] font-black tracking-tighter">NEST</span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
