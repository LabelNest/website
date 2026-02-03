
import React from 'react';
import { TEAM, ALUMNI, ALUMNI_PDF_URL } from '../constants';

interface TeamProps {
  avatar: string | null;
}

const Team: React.FC<TeamProps> = ({ avatar }) => {
  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-24 text-center">
          <div className="bg-slate-900 text-white inline-block px-4 py-1.5 rounded-lg text-[10px] font-black tracking-[0.3em] uppercase mb-8">
            CORE ASSETS v2.0
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.85]">
            The <span className="text-indigo-600">Architects.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            LabelNest is powered by domain experts, systems architects, and research analysts who value precision over noise.
          </p>
        </header>

        {/* Core Philosophy Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { title: "Precision First", desc: "We don't settle for probabilities. Our team is trained to hunt for edge cases and structural anomalies." },
            { title: "Systems Thinkers", desc: "We build the pipelines and methodologies that ensure data remains auditable for its entire lifecycle." },
            { title: "Public R&D", desc: "Our experts regularly contribute to LabelNest Labs, sharing findings with the broader community." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 transition-all group">
               <div className="w-10 h-1 bg-indigo-600 mb-8 group-hover:w-16 transition-all"></div>
               <h3 className="text-xl font-black uppercase tracking-tight mb-4">{item.title}</h3>
               <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Active Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {TEAM.map((member) => (
            <div key={member.id} className="bg-white rounded-[3rem] border border-slate-200 p-10 flex flex-col md:flex-row gap-12 hover:shadow-2xl hover:shadow-indigo-100 transition-all group">
              <div className="w-48 h-48 bg-slate-900 rounded-[2.5rem] flex-shrink-0 flex items-center justify-center overflow-hidden border border-white/10 relative">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                ) : (
                  member.id === 'ankit-suman' ? (
                     <div className="text-white text-5xl font-black tracking-tighter">AS</div>
                  ) : (
                     <div className="text-indigo-500 text-5xl font-black tracking-tighter">IO</div>
                  )
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-black tracking-tight text-slate-900">{member.name}</h3>
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                </div>
                <p className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-6">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed font-light mb-10">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map(exp => (
                    <span key={exp} className="px-4 py-2 bg-slate-50 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {/* Nestor Asset Card */}
          <div className="bg-slate-900 rounded-[3rem] p-10 flex flex-col md:flex-row gap-12 text-white relative overflow-hidden group">
            <div className="w-48 h-48 bg-slate-800 rounded-[2.5rem] flex-shrink-0 flex items-center justify-center overflow-hidden border border-white/10 relative z-10">
              {avatar ? <img src={avatar} alt="Nestor" className="w-full h-full object-cover animate-materialize" /> : <span className="text-5xl font-black">N</span>}
            </div>
            <div className="flex-1 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-black tracking-tight">Nestor Core</h3>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-indigo-400 font-black text-xs uppercase tracking-widest mb-6">System Observer</p>
              <p className="text-slate-400 text-sm leading-relaxed font-light mb-10">
                The synthetic intelligence layer that powers LabelNest analysis and methodology explanations.
              </p>
              <div className="flex flex-wrap gap-2">
                 <span className="px-4 py-2 bg-white/10 text-white rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/5">System Analysis</span>
                 <span className="px-4 py-2 bg-white/10 text-white rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/5">DaaS Reasoning</span>
              </div>
            </div>
            <div className="absolute -right-16 -bottom-16 text-[10rem] font-black text-white/5 pointer-events-none select-none">SYSTEM</div>
          </div>
        </div>

        {/* --- SYSTEM HERITAGE (ALUMNI) SECTION --- */}
        <div className="mt-40 pt-24 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-px bg-slate-300"></div>
                <h2 className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">System Heritage</h2>
              </div>
              <h3 className="text-5xl font-black text-slate-900 tracking-tighter mb-6 leading-none">Previous Cohorts</h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Acknowledging the intelligence specialists and engineers who helped build the early protocols of LabelNest.
              </p>
            </div>
            
            <a 
              href={ALUMNI_PDF_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-6 px-10 py-6 bg-slate-50 border border-slate-200 rounded-3xl hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-sm"
            >
              <div className="text-right">
                <div className="text-[10px] font-black uppercase tracking-widest mb-1">Legacy Dossier</div>
                <div className="text-xs font-medium opacity-60 group-hover:opacity-80">Full Personnel Record (PDF)</div>
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-900 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALUMNI.map((alumnus) => (
              <div key={alumnus.id} className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-slate-300 transition-all group grayscale hover:grayscale-0">
                <div className="flex items-center justify-between mb-6">
                   <h4 className="text-xl font-black tracking-tight text-slate-900">{alumnus.name}</h4>
                   <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-indigo-400 rounded-full transition-colors"></div>
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{alumnus.role}</p>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">
                  {alumnus.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {alumnus.expertise.map(exp => (
                    <span key={exp} className="px-3 py-1 bg-slate-50 text-slate-400 rounded-lg text-[9px] font-bold uppercase tracking-widest border border-slate-100">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Historical Gap Filler */}
            <div className="p-8 bg-slate-50 border border-dashed border-slate-200 rounded-[2rem] flex flex-col justify-center items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 text-slate-300 border border-slate-100">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Extended Network</p>
              <p className="text-[10px] text-slate-400 font-light max-w-[12rem]">Includes 15+ specialists across domain research and data architecture.</p>
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <section className="mt-32 bg-slate-50 rounded-[4rem] p-20 text-center border border-slate-100 overflow-hidden relative">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-5xl font-black tracking-tighter text-slate-900 mb-6">The Next Protocol.</h2>
            <p className="text-slate-500 mb-12 text-lg font-light leading-relaxed">
              We are always looking for precise minds in engineering, domain research, and operations.
            </p>
            <button className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100 transform hover:-translate-y-1">
              Initialize Application
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-slate-900 h-full"></div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
