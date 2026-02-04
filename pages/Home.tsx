
import React from 'react';
import { PRODUCTS } from '../constants';

interface HomeProps {
  onNavigate: (path: string) => void;
  avatar: string | null;
}

const TelemetryLabel: React.FC<{ label: string; value: string; className?: string }> = ({ label, value, className }) => (
  <div className={`flex flex-col text-left font-mono ${className}`}>
    <span className="text-[7px] text-slate-400 uppercase tracking-widest font-black">{label}</span>
    <span className="text-[10px] text-indigo-600 font-bold">{value}</span>
  </div>
);

const StrategicResolutionEngine: React.FC = () => (
  <div className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center animate-materialize select-none">
    {/* Dynamic Background Mesh */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <pattern id="dot-mesh" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="0.8" fill="#4F46E5" fillOpacity="0.3" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dot-mesh)" />
      </svg>
    </div>

    {/* Atmospheric Glows */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-500/5 rounded-full blur-[160px] animate-pulse"></div>
    
    <svg width="600" height="500" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 w-full h-full overflow-visible">
      <circle cx="300" cy="250" r="220" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="4 20" className="animate-[spin_50s_linear_infinite]" />
      
      {/* Central Resolution Lattice */}
      <g className="animate-float">
        <path d="M300 120 L400 180 V320 L300 380 L200 320 V180 L300 120Z" fill="white" stroke="#1E293B" strokeWidth="1" />
        <circle cx="300" cy="250" r="15" fill="#4F46E5" className="animate-pulse" />
      </g>
    </svg>

    <TelemetryLabel label="Core Identity" value="LN_DETERMINISTIC_ENGINE" className="absolute top-12 left-12" />
    <TelemetryLabel label="Resolution" value="99.998%_ACCURACY" className="absolute top-24 right-12 text-right" />
    <TelemetryLabel label="System Load" value="OPERATIONAL" className="absolute bottom-24 left-24" />
    <TelemetryLabel label="Latency" value="1.2ms" className="absolute bottom-12 right-24 text-right" />
    
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent animate-scan-v"></div>
  </div>
);

const DataConstellation: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
    <svg className="absolute inset-0 w-full h-full">
      <defs>
        <pattern id="deep-grid" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M 120 0 L 0 0 0 120" fill="none" stroke="rgba(79, 70, 229, 0.05)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#deep-grid)" />
    </svg>
  </div>
);

const Home: React.FC<HomeProps> = ({ onNavigate, avatar }) => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-48 pb-40 px-4 overflow-hidden min-h-[95vh] flex flex-col items-center">
        <DataConstellation />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 w-full gap-24">
          <div className="w-full lg:w-[40%] text-center lg:text-left space-y-12 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[0.82] select-none">
              Data, <br /><span className="text-indigo-600">done right.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Building the infrastructure of intelligence. We combine expert human reasoning with deterministic automation to solve the world's hardest data problems.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-5 sm:space-y-0 sm:space-x-10">
              <button 
                onClick={() => onNavigate('/products')}
                className="px-14 py-6 bg-slate-900 text-white font-black uppercase tracking-[0.3em] text-[11px] rounded-2xl hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 transform hover:-translate-y-2 active:scale-95"
              >
                Explore Logic
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[60%] flex justify-center lg:justify-end">
            <StrategicResolutionEngine />
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-32 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 animate-fade-in">
            <div className="max-w-2xl">
              <span className="text-indigo-500 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">System Architecture</span>
              <h2 className="text-5xl font-bold tracking-tighter mb-6 leading-none text-white">Systems for Scale</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product, index) => (
              <div 
                key={product.id}
                onClick={() => onNavigate(`/products/${product.id}`)}
                className="group relative bg-white/5 border border-white/10 p-12 rounded-[4rem] hover:bg-white hover:text-slate-900 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-indigo-600 rounded-[1.5rem] flex items-center justify-center font-black text-2xl mb-10 text-white">
                    {product.name[0]}
                  </div>
                  <h3 className="font-bold text-3xl mb-4 tracking-tighter group-hover:text-slate-900">{product.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-10 group-hover:text-slate-600 transition-colors font-light">
                    {product.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY - NESTOR SECTION */}
      <section className="py-40 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-xs font-black tracking-[0.3em] text-indigo-600 uppercase mb-8">Intelligence Layer</h2>
            <h3 className="text-7xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-10">
              Where Logic <br />Meets Nuance.
            </h3>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light">
              We don't believe in pure automation for complex data. Real context requires human-in-the-loop integrity, validated by programmatic QA layers.
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-float">
             <div className="absolute -inset-20 bg-indigo-500/5 rounded-full blur-[100px]"></div>
             <div className="bg-slate-950 rounded-[5rem] p-16 text-white relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden group w-full max-w-xl">
                <div className="flex items-center justify-between mb-16">
                   <div className="bg-indigo-600 inline-block px-5 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase text-white">CORE STATUS: ACTIVE</div>
                   <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/20">
                     {avatar && <img src={avatar} alt="Core" className="w-full h-full object-cover" />}
                   </div>
                </div>

                <div className="text-3xl md:text-5xl font-light mb-20 leading-tight italic text-slate-100 relative z-10 text-center tracking-tight">
                  "Truth in data is not <span className="text-indigo-400 font-normal underline decoration-indigo-400/30 underline-offset-8">probabilistic</span>—it is <span className="text-indigo-400 font-normal">proven</span>."
                </div>

                <div className="flex items-center justify-center space-x-10 relative z-10">
                  <div className="w-px h-16 bg-white/10"></div>
                  <div className="text-center">
                    <div className="font-black text-2xl tracking-tighter text-white">NESTOR</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">System Observer</div>
                  </div>
                  <div className="w-px h-16 bg-white/10"></div>
                </div>

                <div className="absolute -right-24 -bottom-24 opacity-[0.03] select-none pointer-events-none transition-transform duration-700">
                   <span className="text-[22rem] font-black tracking-tighter text-white">NEST</span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
