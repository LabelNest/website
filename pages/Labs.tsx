
import React from 'react';
import { LABS, LAB_SERVICES } from '../constants';

const Labs: React.FC = () => {
  const experiments = LABS.filter(l => l.category === 'Experiments');
  const methodologies = LABS.filter(l => l.category === 'Methodologies');

  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 🚀 PAGE HEADER */}
        <header className="mb-32 text-center md:text-left border-b border-slate-100 pb-20">
          <div className="inline-block px-5 py-2 bg-slate-900 text-white text-[10px] font-black tracking-[0.3em] uppercase mb-12">
            HUMAN-IN-THE-LOOP OPERATIONS
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter mb-10 leading-none">
            LabelNest <br /><span className="text-indigo-600">Labs.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl font-light leading-relaxed">
            Where human expertise meets structured systems — across annotation, research, and intelligence workflows.
          </p>
        </header>

        {/* 🛠️ SECTION 1: HITL SERVICES */}
        <section className="mb-40">
          <div className="flex items-center justify-between mb-16 px-4">
            <div>
              <h2 className="text-[10px] font-black tracking-[0.4em] text-indigo-600 uppercase mb-4">01. Human-in-the-Loop Services</h2>
              <p className="text-slate-500 font-light text-lg max-w-2xl">
                LabelNest Labs is where human intelligence is applied directly to complex data problems — supported by systems that enforce quality, consistency, and traceability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LAB_SERVICES.map((service) => (
              <div key={service.id} className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:border-indigo-300 transition-all group h-full flex flex-col">
                <div className="mb-8">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 mb-8 group-hover:scale-110 transition-transform shadow-sm">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{service.title}</h3>
                   <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">
                     {service.description}
                   </p>
                </div>
                <div className="mt-auto space-y-3">
                   <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Includes</h4>
                   {service.includes.map((item, i) => (
                     <div key={i} className="flex items-center space-x-3">
                        <div className="w-1 h-1 bg-indigo-300 rounded-full"></div>
                        <span className="text-xs text-slate-600 font-medium">{item}</span>
                     </div>
                   ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center text-slate-400 text-sm font-light italic">
            Every service in Labs is designed to integrate directly with LabelNest systems — not exist as a one-off process.
          </p>
        </section>

        {/* ⚙️ SECTION 2: HOW IT WORKS */}
        <section className="mb-40 py-32 bg-slate-900 rounded-[5rem] text-white relative overflow-hidden">
           <div className="max-w-4xl mx-auto px-12 relative z-10 text-center">
              <h2 className="text-[10px] font-black tracking-[0.4em] text-indigo-400 uppercase mb-12">02. Operational Intelligence</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-16">How Human-in-the-Loop <br />Works at LabelNest</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                 <div className="space-y-10">
                    <div className="flex gap-6">
                       <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-[10px] flex-shrink-0">01</div>
                       <p className="text-slate-400 text-sm font-light leading-relaxed">Humans handle <span className="text-white font-medium">judgment, ambiguity, and edge cases</span> that machines cannot process reliably.</p>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-[10px] flex-shrink-0">02</div>
                       <p className="text-slate-400 text-sm font-light leading-relaxed">Systems enforce <span className="text-white font-medium">structure, validation, and repeatability</span> across every human action.</p>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-[10px] flex-shrink-0">03</div>
                       <p className="text-slate-400 text-sm font-light leading-relaxed"><span className="text-white font-medium">QA is embedded</span> directly into the workflow, not layered on later as a separate phase.</p>
                    </div>
                 </div>
                 <div className="space-y-10">
                    <div className="flex gap-6">
                       <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-[10px] flex-shrink-0">04</div>
                       <p className="text-slate-400 text-sm font-light leading-relaxed"><span className="text-white font-medium">Feedback loops</span> between annotators and engineers continuously improve protocol accuracy.</p>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-[10px] flex-shrink-0">05</div>
                       <p className="text-slate-400 text-sm font-light leading-relaxed">Outputs are <span className="text-white font-medium">versioned, auditable, and explainable</span> at the field level.</p>
                    </div>
                    <div className="pt-6 border-t border-white/5">
                       <p className="text-indigo-400 font-bold text-lg tracking-tight">This is how services evolve into scalable systems.</p>
                    </div>
                 </div>
              </div>
           </div>
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
              <div className="text-[25rem] font-black text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase tracking-tighter">ENGINE</div>
           </div>
        </section>

        {/* 🧪 SECTION 3: EXPERIMENTS */}
        <section className="mb-40">
          <div className="flex items-center justify-between mb-16 px-4">
            <div>
              <h2 className="text-[10px] font-black tracking-[0.4em] text-indigo-600 uppercase mb-4">03. Experiments</h2>
              <p className="text-slate-500 font-light text-lg max-w-2xl">
                Labs also hosts controlled experiments where we test new intelligence models, workflows, and validation logic before embedding them into production systems.
              </p>
            </div>
            <div className="h-px bg-slate-100 flex-1 mx-12 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiments.map((exp) => (
              <div key={exp.id} className="p-12 bg-white border border-slate-200 rounded-[3.5rem] hover:shadow-2xl hover:shadow-slate-100 transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-10">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase ${
                      exp.status === 'Alpha' ? 'bg-red-50 text-red-500 border border-red-100' : 
                      exp.status === 'Beta' ? 'bg-blue-50 text-blue-500 border border-blue-100' : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}>
                      {exp.status}
                    </span>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{exp.readTime} Read</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight leading-tight group-hover:text-indigo-600 transition-colors">{exp.title}</h3>
                  <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">
                    {exp.description || exp.excerpt}
                  </p>
                </div>
                <div className="space-y-4">
                   <div className="flex flex-wrap gap-2 mb-8">
                      {['Linkage', 'Neural', 'Graph'].map(t => (
                        <span key={t} className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">#{t}</span>
                      ))}
                   </div>
                   <button className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 border-b-2 border-indigo-600 self-start pb-2 hover:text-indigo-600 transition-colors">
                     Read Experiment &rarr;
                   </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 📚 SECTION 4: METHODOLOGIES */}
        <section className="mb-40">
          <div className="flex items-center justify-between mb-16 px-4">
            <div>
              <h2 className="text-[10px] font-black tracking-[0.4em] text-indigo-600 uppercase mb-4">04. Methodologies</h2>
              <p className="text-slate-500 font-light text-lg max-w-2xl">
                Open explanations of how we think about quality, verification, and human judgment in real data environments.
              </p>
            </div>
            <div className="h-px bg-slate-100 flex-1 mx-12 hidden md:block"></div>
          </div>

          <div className="space-y-12">
            {methodologies.map((meth) => (
              <div key={meth.id} className="bg-slate-50 border border-slate-100 rounded-[4rem] p-12 md:p-16 hover:border-indigo-200 transition-all overflow-hidden relative">
                <div className="max-w-4xl relative z-10">
                  <h3 className="text-4xl font-black text-slate-900 mb-12 tracking-tight">{meth.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                       <div className="space-y-4">
                          <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Problem Statement</h4>
                          <p className="text-slate-600 text-xl font-light leading-relaxed italic border-l-2 border-indigo-100 pl-8">"{meth.problemStatement}"</p>
                       </div>
                    </div>
                    <div className="space-y-8">
                       <div className="space-y-4">
                          <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Reasoning</h4>
                          <p className="text-slate-600 text-base font-light leading-relaxed">{meth.reasoning}</p>
                       </div>
                       <div className="pt-8 border-t border-slate-200">
                          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Practical Implications</h4>
                          <p className="text-slate-900 font-bold text-lg tracking-tight leading-snug">{meth.implications}</p>
                       </div>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 top-0 opacity-[0.03] text-[15rem] font-black text-indigo-600 pointer-events-none select-none translate-x-1/4 -translate-y-1/4">
                   TRUTH
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🤖 NESTOR IN LABS */}
        <section className="p-12 md:p-20 bg-indigo-50 rounded-[4rem] border border-indigo-100 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
           <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center border border-indigo-100 shadow-sm flex-shrink-0 relative z-10">
              <span className="text-2xl font-black text-indigo-600">N</span>
           </div>
           <div className="relative z-10">
              <p className="text-xl md:text-2xl text-slate-800 font-light italic leading-relaxed">
                "Labs reflects how human expertise is applied within LabelNest systems — not separate from them. We move from service to system as logic is proven."
              </p>
           </div>
           <div className="absolute right-0 bottom-0 opacity-[0.03] text-9xl font-black text-indigo-600 pointer-events-none select-none -mb-10 -mr-10">
             GUIDE
           </div>
        </section>

        {/* ⚓ FOOTER LINE */}
        <div className="mt-48 text-center">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
             LabelNest Labs is where human intelligence is structured, validated, and scaled.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Labs;
