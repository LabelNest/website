
import React from 'react';
import { BRIEFINGS } from '../constants';

const Briefings: React.FC = () => {
  const featured = BRIEFINGS.find(b => b.isFeatured) || BRIEFINGS[0];
  const others = BRIEFINGS.filter(b => b.id !== featured.id);

  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 🚀 PAGE HERO */}
        <header className="mb-32 text-center md:text-left">
          <div className="inline-flex items-center space-x-4 bg-indigo-600 text-white px-5 py-2 rounded-lg text-[10px] font-black tracking-[0.3em] uppercase mb-12">
             <span>INTELLIGENCE BRIEFINGS</span>
             <span className="opacity-30">/</span>
             <span className="opacity-70 font-bold">STRICTLY INFORMATIONAL</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter mb-10 leading-none">
            Briefings.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl font-light leading-relaxed">
            Structured intelligence notes, research summaries, and market observations from the LabelNest system stack.
          </p>
        </header>

        {/* 🏆 FEATURED BRIEFING */}
        <section className="mb-32">
           <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden group shadow-2xl">
             <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1">
                   <div className="flex items-center space-x-6 mb-8">
                      <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{featured.date}</span>
                      <span className="w-8 h-px bg-white/20"></span>
                      <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">Scope: {featured.scope}</span>
                   </div>
                   <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">{featured.title}</h2>
                   <p className="text-xl text-slate-400 font-light leading-relaxed mb-12 max-w-2xl">
                     {featured.summary}
                   </p>
                   <div className="flex flex-wrap gap-3 mb-12">
                      {featured.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-300">{tag}</span>
                      ))}
                   </div>
                   <button className="px-12 py-5 bg-white text-slate-900 font-black rounded-2xl text-[10px] uppercase tracking-[0.3em] hover:bg-indigo-400 hover:text-white transition-all transform hover:-translate-y-1">
                     Read Briefing &rarr;
                   </button>
                </div>
                <div className="hidden lg:block w-72 h-72 bg-indigo-600/10 border border-white/10 rounded-[3rem] p-12 flex items-center justify-center text-center">
                   <div className="space-y-4">
                      <div className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Analysis Duration</div>
                      <div className="text-5xl font-black">{featured.readTime}</div>
                   </div>
                </div>
             </div>
             <div className="absolute -right-20 -bottom-20 opacity-[0.03] text-[20rem] font-black text-white pointer-events-none select-none -rotate-6">
                FEATURED
             </div>
           </div>
        </section>

        {/* 📚 ALL BRIEFINGS LIST */}
        <section className="mb-32">
           <div className="flex items-center justify-between mb-16 px-4">
              <h3 className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">Archive Intelligence</h3>
              <div className="h-px bg-slate-100 flex-1 mx-12 hidden md:block"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map((brief) => (
                <div key={brief.id} className="p-10 bg-white border border-slate-200 rounded-[3rem] hover:shadow-2xl hover:shadow-slate-100 transition-all group flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                     <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-lg border border-indigo-100">{brief.scope}</span>
                     <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{brief.date}</span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-6 tracking-tight leading-tight group-hover:text-indigo-600 transition-colors">{brief.title}</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-10 flex-grow">
                    {brief.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                     {brief.tags.map(tag => (
                       <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-400 rounded-lg text-[8px] font-black uppercase tracking-widest border border-slate-100">{tag}</span>
                     ))}
                  </div>
                  <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{brief.readTime} Read</span>
                     <button className="text-indigo-600 font-black text-[10px] uppercase tracking-widest hover:translate-x-1 transition-transform">Details &rarr;</button>
                  </div>
                </div>
              ))}
           </div>
        </section>

        {/* 🦾 NESTOR CONTEXT */}
        <section className="max-w-4xl mx-auto text-center border-t border-slate-100 pt-32">
           <div className="w-16 h-1 w-24 bg-indigo-600 mx-auto mb-12"></div>
           <p className="text-2xl text-slate-500 font-light italic leading-relaxed mb-12">
             "These briefings summarize intelligence outputs produced using LabelNest systems. Every data point is traceable back to its source extraction protocol."
           </p>
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Nestor Core System Observer</p>
        </section>

        {/* 📧 SUBSCRIPTION (SOFT CTA) */}
        <section className="mt-48 py-32 bg-slate-50 rounded-[5rem] text-center border border-slate-200 px-4 relative overflow-hidden">
           <div className="max-w-2xl mx-auto relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">Intelligence Feed.</h3>
              <p className="text-xl text-slate-500 font-light leading-relaxed mb-16">
                Interested in ongoing intelligence updates? Subscribe to receive monthly briefings directly from the system.
              </p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
                <input required type="email" placeholder="work@entity.com" className="flex-grow bg-white border border-slate-200 rounded-2xl px-8 py-5 text-sm outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all shadow-sm" />
                <button type="submit" className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl text-[10px] uppercase tracking-[0.3em] hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200">
                  Subscribe to Briefings
                </button>
              </form>
           </div>
           <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
              <div className="text-[30rem] font-black text-indigo-600 -translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2">
                NEWS
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Briefings;
