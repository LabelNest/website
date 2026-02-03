
import React from 'react';
import { SOLUTIONS } from '../constants';

const Solutions: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 🚀 PAGE HEADER */}
        <div className="mb-24 text-center md:text-left">
          <div className="bg-indigo-600 text-white inline-block px-4 py-1.5 rounded-lg text-[10px] font-black tracking-[0.4em] uppercase mb-10">
            Intelligence v2.2
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-none">
            Intelligence <br /><span className="text-indigo-600">Solutions.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl font-light leading-relaxed">
            Purpose-built intelligence workflows designed for real operational and research decisions — not generic data exports.
          </p>
        </div>

        {/* 🧩 SOLUTIONS STACK */}
        <div className="space-y-16">
          {SOLUTIONS.map((sol) => (
            <div key={sol.id} className="bg-white rounded-[3rem] border border-slate-200 overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-xl transition-shadow duration-700">
              
              {/* Left Card: Identity & Context */}
              <div className="lg:w-[40%] bg-slate-900 p-12 text-white flex flex-col justify-between border-r border-white/5">
                <div>
                  <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center font-black text-xl mb-12 shadow-lg">
                    {sol.title[0]}
                  </div>
                  <h3 className="text-4xl font-black mb-6 tracking-tight leading-tight">{sol.title}</h3>
                  <p className="text-lg text-slate-300 leading-relaxed font-light mb-8 italic">
                    "{sol.description}"
                  </p>
                  {sol.supportingLine && (
                    <p className="text-sm text-indigo-400 font-bold tracking-tight mb-12 border-l-2 border-indigo-600 pl-6 py-2">
                      {sol.supportingLine}
                    </p>
                  )}
                </div>
                
                <div className="pt-8 border-t border-white/10">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Built With Protocol Stack</p>
                  <div className="flex flex-wrap gap-3">
                    {sol.builtWith.map(tool => (
                      <span key={tool} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black tracking-widest uppercase text-slate-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Capabilities & Actions */}
              <div className="flex-1 p-12 bg-white">
                <div className="mb-12">
                  <h4 className="font-black text-slate-900 mb-8 uppercase text-xs tracking-[0.3em] flex items-center">
                    <span className="w-8 h-px bg-indigo-600 mr-4"></span>
                    Core Capabilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sol.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start space-x-4 group">
                        <div className="w-5 h-5 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-indigo-600 mt-1 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700 font-medium leading-tight">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="max-w-md">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Intelligence Deployment</p>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">{sol.useCaseText}</p>
                  </div>
                  <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-indigo-600 transition-all shadow-xl shadow-slate-100 transform hover:-translate-y-1">
                    Request a Sample Dataset &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🛠️ LABS CONNECTION SECTION */}
        <section className="mt-40 bg-indigo-50 rounded-[4rem] p-16 md:p-24 border border-indigo-100 relative overflow-hidden">
           <div className="max-w-4xl relative z-10">
              <div className="inline-block px-4 py-1.5 bg-white border border-indigo-200 text-indigo-600 text-[10px] font-black tracking-widest uppercase mb-10 rounded-lg">
                 POWERED BY LABS
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-10">Human-in-the-Loop <br />Execution Layer.</h3>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">
                Every LabelNest intelligence solution is supported by <span className="text-indigo-600 font-medium">Labs Services</span>. 
                This ensures that high-variance data—like role mandates, relationship linkages, and private market activity—is verified by domain experts before it enters your intelligence feed.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                 <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-500">Expert Verification</span>
                 </div>
                 <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-500">Traceable Extraction</span>
                 </div>
                 <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-500">Continuous Monitoring</span>
                 </div>
              </div>
              <div className="mt-16">
                 <button 
                  onClick={() => window.location.hash = '/labs'}
                  className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 border-b-2 border-indigo-600 pb-2 hover:text-indigo-800 transition-colors"
                 >
                   Explore Labs Operations &rarr;
                 </button>
              </div>
           </div>
           <div className="absolute right-0 bottom-0 opacity-[0.03] text-[20rem] font-black text-indigo-600 pointer-events-none select-none translate-x-1/4 translate-y-1/4">
             LABS
           </div>
        </section>

        {/* 🎯 FINAL FOOTER CTA */}
        <section className="mt-48 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">Ready for deployment?</h2>
          <p className="text-xl text-slate-500 mb-12 font-light max-w-xl mx-auto leading-relaxed">
            Our intelligence solutions integrate directly into your operational systems via API or structured export.
          </p>
          <button 
            onClick={() => window.location.hash = '/contact'}
            className="px-16 py-8 bg-indigo-600 text-white font-black rounded-[2rem] hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100 transform hover:-translate-y-2 uppercase tracking-[0.3em] text-xs"
          >
            Start Protocol Handshake
          </button>
        </section>
      </div>
    </div>
  );
};

export default Solutions;
