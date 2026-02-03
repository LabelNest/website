
import React from 'react';
import { JOBS } from '../constants';

const Careers: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-24 text-center">
          <div className="bg-indigo-600 text-white inline-block px-5 py-2 rounded-lg text-[10px] font-black tracking-[0.3em] uppercase mb-10">
            TALENT INGESTION v1.4
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter mb-10 leading-[0.85]">
            Join the <br /><span className="text-indigo-600">Nest.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            We are building the future of data intelligence. If you value precision, logic, and systems thinking, we want to hear from you.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-8">
              <h2 className="text-3xl font-black tracking-tight text-slate-900">Active Protocols</h2>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{JOBS.length} Positions Open</span>
            </div>
            
            {JOBS.map((role) => (
              <div key={role.id} className="group p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-indigo-600 hover:shadow-2xl hover:shadow-indigo-100 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex-1">
                  <h3 className="font-black text-2xl text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">{role.title}</h3>
                  <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span className="flex items-center space-x-2">
                       <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                       <span>{role.department}</span>
                    </span>
                    <span>&bull;</span>
                    <span>{role.type} ({role.location})</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-12 w-full md:w-auto justify-between md:justify-end">
                  <div className="text-right hidden sm:block">
                     <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Complexity</div>
                     <div className={`text-xs font-bold ${role.complexity === 'Critical' ? 'text-red-500' : 'text-slate-900'}`}>{role.complexity}</div>
                  </div>
                  
                  {role.applyUrl && (
                    <a 
                      href={role.applyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-4 px-8 py-4 bg-slate-900 text-white rounded-2xl group/btn hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200"
                    >
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">Apply Now</span>
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            ))}

            <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-black tracking-tight mb-6">Open Application Protocol</h3>
                <p className="text-slate-400 mb-10 text-lg font-light leading-relaxed max-w-xl">
                  Don't see a specific role? We're always looking for exceptional talent in data science, engineering, and domain-specific research.
                </p>
                <button className="text-indigo-400 font-black text-xs uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center space-x-3">
                   <span>careers@labelnest.in</span>
                   <span className="text-lg">&rarr;</span>
                </button>
              </div>
              <div className="absolute right-0 bottom-0 opacity-[0.03] select-none pointer-events-none transform translate-x-1/4 translate-y-1/4">
                 <span className="text-[20rem] font-black tracking-tighter">JOIN</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="sticky top-32">
              <div className="bg-white border border-slate-200 p-10 rounded-[3rem] shadow-sm">
                <h3 className="text-xs font-black tracking-[0.3em] text-indigo-600 uppercase mb-10">System Culture</h3>
                <ul className="space-y-12">
                  <li className="flex flex-col space-y-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <div>
                      <span className="font-black text-slate-900 uppercase text-xs tracking-widest block mb-2">Deep Focus</span>
                      <span className="text-slate-500 text-sm font-light leading-relaxed">We prioritize deep, concentrated work over constant meetings.</span>
                    </div>
                  </li>
                  <li className="flex flex-col space-y-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    </div>
                    <div>
                      <span className="font-black text-slate-900 uppercase text-xs tracking-widest block mb-2">R&D Ethos</span>
                      <span className="text-slate-500 text-sm font-light leading-relaxed">Everyone contributes to LabelNest Labs experiments and methodology papers.</span>
                    </div>
                  </li>
                  <li className="flex flex-col space-y-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <span className="font-black text-slate-900 uppercase text-xs tracking-widest block mb-2">Remote First</span>
                      <span className="text-slate-500 text-sm font-light leading-relaxed">Asynchronous operations with HQ syncs based in Bangalore.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
