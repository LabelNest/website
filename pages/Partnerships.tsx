
import React, { useState } from 'react';

const Partnerships: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollToForm = (track?: string) => {
    const form = document.getElementById('partnership-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
      if (track) {
        const select = form.querySelector('select');
        if (select) select.value = track;
      }
    }
  };

  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 🚀 PAGE HEADER */}
        <header className="mb-24 text-center">
          <div className="bg-indigo-600 text-white inline-block px-5 py-2 rounded-lg text-[10px] font-black tracking-[0.3em] uppercase mb-10">
            STRATEGIC ALLIANCE v1.2
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter mb-10 leading-[0.85]">
            Strategic <br /><span className="text-indigo-600">Alliance.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            Collaborate with LabelNest on custom intelligence datasets, proprietary system development, or our lifetime-yield referral program.
          </p>
        </header>

        {/* 🤝 PARTNERSHIP TRACKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              id: 'Track 01', 
              title: 'System R&D', 
              desc: 'Partner with us to build custom system layers (Annonest extensions or NestLens pipelines) for your specific industry niche.' 
            },
            { 
              id: 'Track 02', 
              title: 'Intelligence Resale', 
              desc: 'Integrate LabelNest high-fidelity datasets into your own products via our DaaS (Data-as-a-Service) APIs.' 
            },
            { 
              id: 'Track 03', 
              title: 'Strategic Channel', 
              desc: 'Designated partnerships for consulting firms and agency partners who require top-tier data operations for their clients.' 
            }
          ].map((track) => (
            <div key={track.id} className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:border-indigo-200 transition-all group">
              <h2 className="text-[10px] font-black tracking-[0.4em] text-indigo-600 uppercase mb-6">{track.id}</h2>
              <h3 className="text-2xl font-black tracking-tight mb-4 text-slate-900">{track.title}</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">
                {track.desc}
              </p>
              <button 
                onClick={() => scrollToForm(track.id)}
                className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-indigo-600 transition-colors"
              >
                Inquire Protocol &rarr;
              </button>
            </div>
          ))}
        </div>

        {/* 💰 FEATURED: REFERRAL ENGINE */}
        <div className="mb-32">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden group shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center space-x-3 bg-indigo-600 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                   <span>Track 04</span>
                   <span className="opacity-40">/</span>
                   <span>The Referral Protocol</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
                  Lifetime Recurring <br /><span className="text-indigo-400">Yield.</span>
                </h3>
                <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
                  Refer a firm that requires our systems, intelligence, or labs services. 
                  <span className="text-white font-medium"> Earn rewards for as long as they remain a LabelNest partner.</span> No expiration, no capping.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={() => scrollToForm("Referral Protocol (Lifecycle Rewards)")}
                    className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl text-[10px] uppercase tracking-[0.3em] hover:bg-indigo-400 hover:text-white transition-all transform hover:-translate-y-1"
                  >
                    Refer a Firm Now
                  </button>
                  <div className="flex items-center space-x-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-500 border-l border-white/10">
                    <span>Recurring Rewards</span>
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-[100px]"></div>
                <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-sm relative">
                  <h4 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-8">Yield Mechanism</h4>
                  <ul className="space-y-8">
                    {[
                      { t: "Referral Intake", d: "Introduce a qualified firm to the LabelNest stack." },
                      { t: "System Deployment", d: "We deploy Annonest, NestLens, or NestResolve for the firm." },
                      { t: "Lifecycle Yield", d: "You receive recurring rewards as long as their subscription is active." }
                    ].map((step, i) => (
                      <li key={i} className="flex gap-6">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-[10px] flex-shrink-0">0{i+1}</div>
                        <div>
                          <div className="font-bold text-sm mb-1">{step.t}</div>
                          <div className="text-slate-500 text-xs font-light">{step.d}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-20 -bottom-20 opacity-[0.05] text-[25rem] font-black text-white pointer-events-none select-none -rotate-12 group-hover:rotate-0 transition-transform duration-1000">
              YIELD
            </div>
          </div>
        </div>

        {/* 📝 ALLIANCE REQUEST FORM */}
        <div id="partnership-form" className="max-w-4xl mx-auto">
          <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-4">Initialize Handshake</h2>
              <p className="text-slate-500 font-light text-sm">Specify your track or referral details to start the protocol.</p>
            </div>

            {submitted ? (
              <div className="text-center py-24 animate-in fade-in">
                <div className="w-20 h-20 bg-indigo-600 text-white rounded-[1.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl">
                   <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-4xl font-black tracking-tight text-slate-900 mb-6">Protocol Initiated.</h3>
                <p className="text-slate-500 font-light text-lg">Our partnership desk will review your alliance request and respond within 48 system hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-12 text-indigo-600 font-black text-xs uppercase tracking-widest border-b-2 border-indigo-600 pb-1">Reset Form</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Entity Name</label>
                   <input required placeholder="Organization Name" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Lead Contact</label>
                      <input required placeholder="Full Name" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Email Protocol</label>
                      <input required type="email" placeholder="work@entity.com" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Partnership Track</label>
                   <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-medium outline-none appearance-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all">
                      <option>System R&D (Track 01)</option>
                      <option>Intelligence Resale (Track 02)</option>
                      <option>Strategic Channel Partner (Track 03)</option>
                      <option value="Referral Protocol (Lifecycle Rewards)">Referral Protocol (Track 04 - Lifecycle Rewards)</option>
                      <option>Other Operational Alliance</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Alliance Objective / Referral Details</label>
                   <textarea rows={4} placeholder="Describe the proposed collaboration or details of the firm you are referring (industry, needs, contact context)..." className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all"></textarea>
                </div>

                <button type="submit" className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl text-[10px] uppercase tracking-[0.3em] hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-100 transform hover:-translate-y-1">
                  Initialize Alliance Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
