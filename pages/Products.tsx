
import React from 'react';
import { PRODUCTS } from '../constants';

interface ProductsProps {
  productId?: string;
  onNavigate: (path: string) => void;
}

const Products: React.FC<ProductsProps> = ({ productId, onNavigate }) => {
  // --- DETAIL VIEW ---
  if (productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) {
      return (
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-black mb-4 uppercase tracking-widest">System Interrupt</h1>
          <p className="text-slate-600">Protocol '{productId}' not found.</p>
          <button onClick={() => onNavigate('/products')} className="mt-8 text-indigo-600 font-bold underline">Return to Systems</button>
        </div>
      );
    }

    return (
      <div className="bg-white min-h-screen">
        {/* System Hero */}
        <section className="pt-48 pb-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <button 
              onClick={() => onNavigate('/products')}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 mb-12 flex items-center space-x-2 transition-colors"
            >
              <span>&larr; Back to Systems</span>
            </button>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-4xl">
                <div className="flex items-center space-x-4 mb-8">
                   <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl">
                      {product.name[0]}
                   </div>
                   <div className="bg-slate-100 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest text-slate-500">
                      System Module
                   </div>
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-6">
                  {product.name}
                </h1>
                <p className="text-xl md:text-2xl text-indigo-600 font-light tracking-tight max-w-2xl">
                  {product.tagline}
                </p>
              </div>
              <div className="hidden lg:block text-right">
                <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">Integrity Level</div>
                <div className="text-4xl font-black text-slate-900">100.00%</div>
              </div>
            </div>
          </div>
        </section>

        {/* System Overview */}
        <section className="py-24 border-b border-slate-50">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">System Overview</h2>
              <div className="h-px w-20 bg-indigo-600"></div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-2xl md:text-3xl text-slate-800 font-light leading-relaxed mb-12">
                {product.longDescription}
              </p>
              
              <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
                 <h3 className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-6">Structural Problem</h3>
                 <p className="text-slate-600 text-lg font-light leading-relaxed italic">
                   "{product.whyItExists}"
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-16 text-center">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.capabilities.map((cap, i) => (
                <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                   <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center mb-8 font-black text-xs">
                     0{i+1}
                   </div>
                   <h3 className="text-xl font-black mb-4 tracking-tight">{cap.title}</h3>
                   <p className="text-slate-400 text-sm font-light leading-relaxed">
                     {cap.desc}
                   </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 opacity-[0.02] text-[20rem] font-black pointer-events-none select-none -translate-y-1/2 translate-x-1/2">
            PROTOCOL
          </div>
        </section>

        {/* Use Cases & Connections */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h3 className="text-3xl font-black tracking-tighter mb-12 text-slate-900">Operational Deployment</h3>
              <div className="space-y-4">
                {product.useCases.map((useCase, i) => (
                  <div key={i} className="flex items-center space-x-6 p-6 bg-slate-50 border border-slate-100 rounded-2xl group hover:border-indigo-200 transition-all">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-slate-700 font-medium tracking-tight">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-black tracking-tighter mb-12 text-slate-900">System Integration</h3>
              <div className="space-y-8">
                {product.connections.map((conn, i) => (
                  <div key={i} className="flex gap-8">
                    <div className="flex flex-col items-center">
                       <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-400 bg-white">
                         INT
                       </div>
                       <div className="flex-1 w-px bg-slate-100 my-2"></div>
                    </div>
                    <div>
                       <h4 className="font-black text-xs uppercase tracking-widest text-indigo-600 mb-2">{conn.system}</h4>
                       <p className="text-slate-500 text-sm font-light leading-relaxed">{conn.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* System Outputs */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-16 text-center">System Artifacts & Outputs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {product.outputs.map((output, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
                   <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-4">Asset 0{i+1}</div>
                   <p className="text-slate-900 font-bold tracking-tight leading-tight">{output}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft CTA */}
        <section className="py-48 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-slate-500 mb-12 text-lg font-light italic">
              "{product.name} is available as part of LabelNest’s system ecosystem."
            </p>
            <button 
              onClick={() => onNavigate('/contact')}
              className="px-12 py-6 bg-slate-900 text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 transform hover:-translate-y-2"
            >
              Request Access Protocol
            </button>
          </div>
        </section>
      </div>
    );
  }

  // --- LANDING VIEW ---
  return (
    <div className="bg-white">
      {/* 🚀 PAGE HERO */}
      <section className="pt-48 pb-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block px-4 py-1.5 bg-indigo-600 text-white text-[10px] font-black tracking-[0.4em] uppercase mb-12">
             System Inventory v2.5
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-12">
            Systems.
          </h1>
          <p className="text-2xl md:text-3xl text-slate-500 font-light max-w-2xl leading-relaxed">
            Foundational platforms for data quality, intelligence, operations, and resolution.
          </p>
        </div>
      </section>

      {/* 🧩 DEFINITION SECTION */}
      <section className="py-32 px-4 border-b border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Definition</h2>
            <div className="h-px w-20 bg-indigo-600"></div>
          </div>
          <div className="lg:col-span-8">
            <h3 className="text-4xl font-black tracking-tight text-slate-900 mb-10">What We Mean by Systems</h3>
            <div className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed space-y-8">
              <p>
                At LabelNest, systems are long-running platforms — not tools or features.
              </p>
              <p className="text-slate-900 font-normal">
                They are designed to handle scale, change, error, and accountability across real-world data operations, where quality, traceability, and trust are essential.
              </p>
              <p>
                Each system is built to integrate with real workflows, real teams, and real-world data complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏗️ SYSTEM STACK GRID */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-8">System Stack</h2>
              <h3 className="text-5xl font-black text-white tracking-tighter">The Infrastructure.</h3>
            </div>
            <p className="text-slate-400 max-w-xs mt-8 md:mt-0 text-sm font-light">
              Each system works independently — or together as a unified LabelNest ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS.map((product) => (
              <div 
                key={product.id}
                onClick={() => onNavigate(`/products/${product.id}`)}
                className="group bg-white/5 border border-white/10 rounded-[3rem] p-12 hover:bg-white transition-all duration-700 cursor-pointer relative overflow-hidden"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-white font-black text-2xl mb-12 group-hover:scale-110 transition-transform">
                    {product.name[0]}
                  </div>
                  <h4 className="text-4xl font-black text-white group-hover:text-slate-900 mb-6 transition-colors tracking-tighter">
                    {product.name}
                  </h4>
                  <p className="text-slate-400 group-hover:text-slate-600 transition-colors text-lg font-light leading-relaxed mb-12">
                    {product.tagline}
                  </p>
                  <div className="mt-auto flex items-center space-x-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 group-hover:text-indigo-600">View Protocol</span>
                    <div className="w-8 h-px bg-indigo-400 group-hover:bg-indigo-600 group-hover:w-16 transition-all"></div>
                  </div>
                </div>
                <div className="absolute -right-12 -bottom-12 opacity-[0.03] group-hover:opacity-[0.05] text-[15rem] font-black text-white group-hover:text-slate-900 pointer-events-none select-none transition-colors">
                  0{product.id === 'annonest' ? '1' : product.id === 'nestlens' ? '2' : product.id === 'nesthr' ? '3' : '4'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔄 ARCHITECTURE FLOW */}
      <section className="py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6">System Interconnectivity</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">How the Systems Work Together</h3>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-slate-900 p-12 md:p-20 rounded-[4rem] text-indigo-400 font-mono text-xs md:text-sm leading-relaxed shadow-2xl relative overflow-hidden">
              <pre className="whitespace-pre overflow-x-auto text-center">
{`Raw Data / Requests / Work
        ↓
     Annonest
(Data CRM, Annotation, Extraction, QA)
        ↓
  ┌──────────────┐
  │              │
NestLens     NestResolve
(Intelligence  (Issues, QA,
 & Marketplace)  Service Desk,
                Governance)
  │              │
  └──────┬───────┘
         ↓
       NestHR
(People & Operations Intelligence)
         ↓
 Leadership, Clients, Systems`}
              </pre>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-600 text-sm font-light leading-relaxed">
            <div className="space-y-4">
              <p><strong className="text-slate-900 font-bold">Annonest</strong> creates and validates data through multi-modal extraction and human-in-the-loop workflows.</p>
              <p><strong className="text-slate-900 font-bold">NestLens</strong> delivers the resulting intelligence and curated datasets to downstream users.</p>
            </div>
            <div className="space-y-4">
              <p><strong className="text-slate-900 font-bold">NestResolve</strong> tracks and resolves issues across the entire system lifecycle, ensuring auditable governance.</p>
              <p><strong className="text-slate-900 font-bold">NestHR</strong> provides people and operations visibility, linking work outcomes to organizational health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ BUILT-FOR MATRIX */}
      <section className="py-32 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6">User Alignment</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">Built For Real Organizations</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-900 text-white text-left">
                  <th className="p-8 text-xs font-black uppercase tracking-widest border-r border-white/10">Organization Type</th>
                  <th className="p-8 text-xs font-black uppercase tracking-widest text-center border-r border-white/10">Annonest</th>
                  <th className="p-8 text-xs font-black uppercase tracking-widest text-center border-r border-white/10">NestLens</th>
                  <th className="p-8 text-xs font-black uppercase tracking-widest text-center border-r border-white/10">NestResolve</th>
                  <th className="p-8 text-xs font-black uppercase tracking-widest text-center">NestHR</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  ["Research Teams", "✓", "✓", "✓", "–"],
                  ["Data & AI Teams", "✓", "✓", "✓", "–"],
                  ["Sales & GTM Teams", "✓", "✓", "–", "–"],
                  ["Operations Teams", "✓", "–", "✓", "✓"],
                  ["HR & People Ops", "–", "–", "✓", "✓"],
                  ["Compliance & Governance", "✓", "✓", "✓", "–"],
                  ["Service Providers", "✓", "✓", "✓", "✓"],
                  ["Enterprises", "✓", "✓", "✓", "✓"],
                  ["Startups (Data-heavy)", "✓", "✓", "✓", "✓"]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                    <td className="p-8 text-sm font-bold text-slate-900 border-r border-slate-100">{row[0]}</td>
                    <td className="p-8 text-center text-indigo-600 font-black border-r border-slate-100">{row[1]}</td>
                    <td className="p-8 text-center text-indigo-600 font-black border-r border-slate-100">{row[2]}</td>
                    <td className="p-8 text-center text-indigo-600 font-black border-r border-slate-100">{row[3]}</td>
                    <td className="p-8 text-center text-indigo-600 font-black">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Systems can be adopted individually or combined based on organizational needs.
          </p>
        </div>
      </section>

      {/* 🌐 INDUSTRY COVERAGE */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6">Market Reach</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">The LabelNest Ecosystem</h3>
            <p className="mt-6 text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              LabelNest systems are designed to support data-intensive work across multiple industries — wherever accuracy, structure, and trust matter.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Private Markets & Investments",
              "ESG & Sustainability",
              "Climate & Energy",
              "Healthcare & Life Sciences",
              "Legal & Compliance",
              "Sales & Revenue Operations",
              "Research & Analytics",
              "Enterprise Operations"
            ].map((industry, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-center group hover:bg-indigo-600 transition-all cursor-default">
                <span className="text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-white transition-colors">{industry}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center text-sm italic text-slate-400">
            The systems remain the same — only the intelligence and workflows adapt.
          </div>
        </div>
      </section>

      {/* 🎯 PRINCIPLES RECAP */}
      <section className="py-32 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-24 text-center">System Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {[
              "Built for real production data environments",
              "Human-in-the-loop by design",
              "Auditability and traceability by default",
              "Modular, extensible, integration-friendly",
              "Flat pricing philosophy — no vendor games"
            ].map((principle, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-indigo-600 transition-all">
                   <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full group-hover:bg-white"></div>
                </div>
                <p className="text-slate-800 font-bold text-sm tracking-tight leading-tight px-4">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 FINAL CTA */}
      <section className="py-48 bg-slate-900 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 px-4">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tighter leading-none">
            Build your data stack with systems that scale with integrity.
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-16 font-light max-w-2xl mx-auto">
            Explore how our system stack can integrate with your operational requirements.
          </p>
          <button 
            onClick={() => onNavigate('/contact')}
            className="px-16 py-8 bg-indigo-600 text-white font-black rounded-[2rem] hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100 transform hover:-translate-y-2 uppercase tracking-[0.3em] text-xs"
          >
            Talk to Us
          </button>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden">
          <div className="text-[30rem] font-black text-white -translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2">
            DEPLOY
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
