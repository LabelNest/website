
import React, { useEffect } from 'react';

const Pricing: React.FC = () => {
  useEffect(() => {
    document.title = "Pricing Philosophy | LabelNest";
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* 🚀 PAGE HERO */}
      <section className="pt-48 pb-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black tracking-[0.4em] uppercase mb-12">
             Pricing Doctrine v1.0
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-12">
            Pricing <br /><span className="text-indigo-600">Philosophy.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-500 font-light max-w-2xl leading-relaxed">
            Designed for teams who value data — not vendor leverage.
          </p>
        </div>
      </section>

      {/* 🧠 CORE PRINCIPLE */}
      <section className="py-32 px-4 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Core Principle</h2>
            <div className="h-px w-20 bg-indigo-600"></div>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-4xl font-black tracking-tight text-slate-900 mb-10 leading-tight">LabelNest follows a flat, transparent pricing philosophy.</h3>
            <div className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed space-y-8">
              <p>
                We believe pricing should reflect the value of the data and systems — not the size of your company, the number of logins, or your ability to negotiate.
              </p>
              <div className="p-12 bg-slate-900 rounded-[3rem] text-white">
                <p className="text-3xl md:text-4xl font-black tracking-tighter">
                  "You pay for systems and intelligence — not logos, contracts, or lock-in."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⚖️ WHAT FLAT PRICING MEANS */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Definition</h2>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter">What Flat Pricing Means.</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Same Price for All", desc: "No secret tiers. Small teams and global enterprises pay the same base price for the same system scope." },
              { title: "No Per-Seat Penalties", desc: "We don't punish growth. Adding team members to a system should be encouraged, not billed." },
              { title: "No Hidden Tiers", desc: "All core system features are included. We don't gate functionality behind negotiation-only 'Enterprise' labels." },
              { title: "No Feature Gating", desc: "If a system capability exists, it's available to you. We don't up-sell integrity." },
              { title: "Value-Based", desc: "Pricing is based on the complexity and scope of the intelligence, not your company's brand leverage." }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 p-10 rounded-[2.5rem] shadow-sm group hover:border-indigo-600 transition-all">
                <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-6">Module 0{i+1}</div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💎 WHY WE DO THIS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           <div className="lg:col-span-6">
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter mb-10">Data quality should not be a luxury.</h3>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-10">
                Flat pricing allows teams of all sizes to access the same systems, the same intelligence, and the same standards — without artificial barriers.
              </p>
              <p className="text-slate-900 font-bold italic">
                By removing negotiation friction, we focus entirely on delivery integrity.
              </p>
           </div>
           <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-indigo-500/5 rounded-full blur-[100px]"></div>
              <div className="bg-slate-900 rounded-[3rem] p-16 text-white relative shadow-2xl border border-white/5">
                <h4 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-10">What's Included</h4>
                <ul className="space-y-8">
                  {[
                    "Full Access to LabelNest Systems",
                    "Continuous Feature Improvements",
                    "Quality & Resolution Frameworks",
                    "Transparent Methodologies",
                    "Optional Managed Deployments"
                  ].map((inc, i) => (
                    <li key={i} className="flex items-center space-x-6 group">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-xl font-light text-slate-300 group-hover:text-white transition-colors">{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
           </div>
        </div>
      </section>

      {/* 🎯 FINAL CTA */}
      <section className="py-48 bg-slate-50 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 px-4">
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-12 tracking-tighter leading-none">
            Transparency <br />by design.
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 mb-16 font-light max-w-2xl mx-auto">
            If pricing clarity matters to you, we should talk.
          </p>
          <button 
            onClick={() => window.location.hash = '/contact'}
            className="px-16 py-8 bg-indigo-600 text-white font-black rounded-[2rem] hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100 transform hover:-translate-y-2 uppercase tracking-[0.3em] text-xs"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
