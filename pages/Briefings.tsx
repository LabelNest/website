
import React, { useState } from 'react';
import { BRIEFINGS } from '../constants';
import { submitToIngest } from '../services/ingestionService';
import { Briefing } from '../types';
import { getTeamMemberAvatar } from '../services/imageService';

export default function Briefings() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedBriefing, setSelectedBriefing] = useState<Briefing | null>(null);

  const featured = BRIEFINGS.find(b => b.isFeatured) || BRIEFINGS[0];
  const others = BRIEFINGS.filter(b => b.id !== featured.id);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const success = await submitToIngest({
      name: 'Briefing Subscriber',
      email: email,
      message: `Newsletter Subscription Request for ${email}`,
      type: 'subscription'
    });

    if (success) {
      setIsSubscribed(true);
    } else {
      setError("Subscription link failure. Please retry.");
    }
    setIsSubmitting(false);
  };

  const handleShareLinkedIn = (brief: Briefing) => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=600');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('System: URL copied to clipboard.');
  };

  return (
    <div className="pt-48 pb-32 bg-white font-sans">
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
                   <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-none">{featured.title}</h2>
                   
                   {/* Author Signature (Departmental Avatar) */}
                   {featured.author && (
                     <div className="flex items-center space-x-6 mb-12">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 overflow-hidden border border-white/20 p-1">
                           <img 
                            src={getTeamMemberAvatar(featured.author.name.toLowerCase().replace(/ /g, '-'), featured.author.department)} 
                            alt={featured.author.name} 
                            className="w-full h-full object-cover" 
                           />
                        </div>
                        <div className="text-left">
                           <div className="text-[10px] text-indigo-400 font-black uppercase tracking-widest mb-1">Lead Architect</div>
                           <div className="text-lg font-black tracking-tight">{featured.author.name}</div>
                           <div className="text-[9px] text-white/40 font-bold uppercase tracking-widest">{featured.author.role}</div>
                        </div>
                     </div>
                   )}

                   <p className="text-xl text-slate-400 font-light leading-relaxed mb-12 max-w-2xl">
                     {featured.summary}
                   </p>
                   <div className="flex flex-wrap gap-3 mb-12">
                      {featured.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-300">{tag}</span>
                      ))}
                   </div>
                   <div className="flex flex-wrap gap-4">
                      <button 
                        onClick={() => setSelectedBriefing(featured)}
                        className="px-12 py-5 bg-white text-slate-900 font-black rounded-2xl text-[10px] uppercase tracking-[0.3em] hover:bg-indigo-400 hover:text-white transition-all transform hover:-translate-y-1"
                      >
                        Read Briefing &rarr;
                      </button>
                      <button 
                        onClick={() => handleShareLinkedIn(featured)}
                        className="p-5 bg-white/10 text-white rounded-2xl hover:bg-[#0077B5] transition-all flex items-center space-x-3"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        <span className="text-[10px] font-black uppercase tracking-widest">Share</span>
                      </button>
                   </div>
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
                  
                  {/* Author Line (Synchronized Avatar) */}
                  {brief.author && (
                    <div className="flex items-center space-x-3 mb-8 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                       <div className="w-10 h-10 rounded-xl bg-white overflow-hidden border border-slate-200 p-0.5">
                          <img 
                            src={getTeamMemberAvatar(brief.author.name.toLowerCase().replace(/ /g, '-'), brief.author.department)} 
                            alt={brief.author.name} 
                            className="w-full h-full object-cover" 
                          />
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-900 uppercase tracking-tight">{brief.author.name}</span>
                          <span className="text-[8px] font-bold text-indigo-600 uppercase tracking-widest">{brief.author.role}</span>
                       </div>
                    </div>
                  )}

                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-10 flex-grow">
                    {brief.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                     {brief.tags.map(tag => (
                       <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-400 rounded-lg text-[8px] font-black uppercase tracking-widest border border-slate-100">{tag}</span>
                     ))}
                  </div>
                  <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                     <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => setSelectedBriefing(brief)}
                          className="text-indigo-600 font-black text-[10px] uppercase tracking-widest hover:translate-x-1 transition-transform"
                        >
                          Details &rarr;
                        </button>
                        <button 
                          onClick={() => handleShareLinkedIn(brief)}
                          className="text-slate-300 hover:text-[#0077B5] transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </button>
                     </div>
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{brief.readTime}</span>
                  </div>
                </div>
              ))}
           </div>
        </section>

        {/* 📧 SUBSCRIPTION (SOFT CTA) */}
        <section className="mt-48 py-32 bg-slate-50 rounded-[5rem] text-center border border-slate-200 px-4 relative overflow-hidden">
           <div className="max-w-2xl mx-auto relative z-10">
              {isSubscribed ? (
                <div className="animate-fade-in">
                  <h3 className="text-4xl md:text-5xl font-black text-indigo-600 tracking-tighter mb-8">System Subscribed.</h3>
                  <p className="text-xl text-slate-500 font-light leading-relaxed">You will receive monthly briefings at {email}.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">Intelligence Feed.</h3>
                  <p className="text-xl text-slate-500 font-light leading-relaxed mb-16">
                    Interested in ongoing intelligence updates? Subscribe to receive monthly briefings directly from the system.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubscribe}>
                    <input 
                      required 
                      disabled={isSubmitting}
                      type="email" 
                      placeholder="work@entity.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-grow bg-white border border-slate-200 rounded-2xl px-8 py-5 text-sm outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all shadow-sm disabled:opacity-50" 
                    />
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="px-10 py-5 bg-slate-900 text-white font-black rounded-2xl text-[10px] uppercase tracking-[0.3em] hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 disabled:bg-slate-400 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                           <div className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                           <span>Linking...</span>
                        </>
                      ) : (
                        <span>Subscribe</span>
                      )}
                    </button>
                  </form>
                  {error && <p className="mt-4 text-xs font-black text-red-500 uppercase tracking-widest">{error}</p>}
                </>
              )}
           </div>
        </section>
      </div>

      {/* FULL CONTENT VIEW MODAL */}
      {selectedBriefing && (
        <div className="fixed inset-0 z-[100] bg-slate-950/90 flex items-center justify-center p-4 md:p-12 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-5xl rounded-[3rem] shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]">
            <div className="p-8 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-20">
              <div className="flex items-center space-x-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">{selectedBriefing.scope}</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{selectedBriefing.date}</span>
              </div>
              <button 
                onClick={() => setSelectedBriefing(null)}
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-indigo-600 hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-12 md:p-20 overflow-y-auto flex-1">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-12 leading-none">
                {selectedBriefing.title}
              </h2>

              {/* Modal Author Block (High Fidelity) */}
              {selectedBriefing.author && (
                <div className="flex items-center space-x-8 mb-16 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative group overflow-hidden">
                   <div className="w-20 h-20 rounded-2xl bg-white overflow-hidden border border-slate-200 p-1 relative z-10">
                      <img 
                        src={getTeamMemberAvatar(selectedBriefing.author.name.toLowerCase().replace(/ /g, '-'), selectedBriefing.author.department)} 
                        alt={selectedBriefing.author.name} 
                        className="w-full h-full object-cover" 
                      />
                   </div>
                   <div className="text-left relative z-10">
                      <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1">Lead Analysis Protocol</div>
                      <div className="text-3xl font-black tracking-tight text-slate-900">{selectedBriefing.author.name}</div>
                      <div className="text-sm font-medium text-slate-500">{selectedBriefing.author.role}</div>
                   </div>
                   <div className="absolute right-0 top-0 opacity-[0.05] text-8xl font-black text-slate-900 pointer-events-none select-none translate-x-1/4 -translate-y-1/4">
                      ARCHITECT
                   </div>
                </div>
              )}
              
              <div className="prose prose-slate max-w-none">
                {selectedBriefing.content ? (
                  <div className="text-slate-600 text-lg leading-relaxed font-light whitespace-pre-wrap">
                    {selectedBriefing.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-6">
                        {paragraph.startsWith('###') ? (
                          <span className="block text-2xl font-black text-slate-900 tracking-tight mt-12 mb-4">
                            {paragraph.replace('### ', '')}
                          </span>
                        ) : paragraph.match(/^\d\./) ? (
                          <span className="block bg-slate-50 p-6 rounded-2xl border border-slate-100 my-4 italic">
                            {paragraph}
                          </span>
                        ) : paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 italic">Content restricted or currently undergoing peer-review.</p>
                )}
              </div>
            </div>

            <div className="p-10 bg-slate-50 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 sticky bottom-0 z-20">
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => handleShareLinkedIn(selectedBriefing)}
                  className="px-8 py-4 bg-[#0077B5] text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:brightness-110 transition-all flex items-center space-x-3"
                >
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                   <span>Share on LinkedIn</span>
                </button>
                <button 
                  onClick={handleCopyLink}
                  className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors"
                >
                  Copy Internal Link
                </button>
              </div>
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">© 2026 LabelNest Intelligence</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
