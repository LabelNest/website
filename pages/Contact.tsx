
import React, { useState } from 'react';
import { submitToIngest, IngestStage } from '../services/ingestionService';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [stage, setStage] = useState<IngestStage>('IDLE');
  const [error, setError] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Product Inquiry',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const success = await submitToIngest(
      {
        name: formState.name,
        email: formState.email,
        message: `[${formState.subject}] ${formState.message}`,
        type: 'contact'
      },
      (newStage) => setStage(newStage)
    );

    if (success) {
      setSubmitted(true);
    } else {
      setError("Protocol Interrupted. Please check connection and retry.");
      setStage('IDLE');
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-none">Talk to the <span className="text-indigo-600">Experts.</span></h1>
            <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed">
              Whether you need complex data labeling systems, custom intelligence outputs, or want to discuss an R&D partnership, our team is ready to assist.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Protocol</h4>
                  <p className="text-xl font-black text-slate-900">contact@labelnest.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Global HQ</h4>
                  <p className="text-xl font-black text-slate-900">Bangalore, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Digital Presence</h4>
                  <div className="flex items-center space-x-4">
                    <a href="https://www.linkedin.com/company/labelnest-india/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors shadow-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/labelnestindia?igsh=cHA0b2Y2djJheWRk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-pink-600 transition-colors shadow-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/></svg>
                    </a>
                    <a href="https://x.com/LabelNestAI" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-slate-700 transition-colors shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-slate-950 rounded-[2.5rem] text-white relative overflow-hidden group">
              <div className="flex items-center space-x-4 mb-4 relative z-10">
                <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center font-black shadow-lg">N</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">System Assistant</span>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed relative z-10">
                "Short on time? You can also message me via the chat widget below, and I'll route your query to the right desk."
              </p>
              <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none text-9xl font-black group-hover:scale-110 transition-transform">NEST</div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[4rem] border border-slate-200 shadow-2xl relative overflow-hidden animate-fade-in-up delay-200">
            {submitted ? (
              <div className="text-center py-20 animate-in fade-in scale-in duration-500">
                <div className="w-24 h-24 bg-green-50 text-green-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-lg border border-green-100">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-4 uppercase">Protocol Complete.</h3>
                <p className="text-slate-500 font-light max-w-sm mx-auto leading-relaxed">One of our intelligence specialists will reach out within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setStage('IDLE'); }} className="mt-12 text-indigo-600 font-black text-xs uppercase tracking-[0.3em] border-b-2 border-indigo-600 pb-1 hover:text-indigo-800 transition-colors">Start New Handshake</button>
              </div>
            ) : stage === 'SUBMITTING' ? (
              <div className="py-24 text-center">
                 <div className="mb-12 flex justify-center space-x-4">
                    <div className="w-4 h-4 rounded-full bg-indigo-600 animate-pulse"></div>
                    <div className="w-4 h-4 rounded-full bg-indigo-600 animate-pulse delay-100"></div>
                    <div className="w-4 h-4 rounded-full bg-indigo-600 animate-pulse delay-200"></div>
                 </div>
                 <h3 className="text-sm font-black uppercase tracking-[0.4em] text-slate-900 mb-6">Establishing Connection...</h3>
                 <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">ENCRYPTING_PAYLOAD | TARGET: contact@labelnest.in</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Identity Name</label>
                    <input 
                      name="name"
                      required 
                      type="text" 
                      placeholder="Full Name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 font-medium text-slate-900 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Protocol Email</label>
                    <input 
                      name="email"
                      required 
                      type="email" 
                      placeholder="work@entity.com"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 font-medium text-slate-900 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Service Track</label>
                  <select 
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 font-medium text-slate-900 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all appearance-none"
                  >
                    <option>Product Inquiry (Annonest, NestResolve, etc.)</option>
                    <option>Intelligence Solutions</option>
                    <option>Labs & Research Partnership</option>
                    <option>Careers</option>
                    <option>Other Operational Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Challenge Overview</label>
                  <textarea 
                    name="message"
                    required 
                    rows={4} 
                    placeholder="Describe your data or system requirements..."
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 font-medium text-slate-900 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-600 transition-all resize-none"
                  ></textarea>
                </div>

                {error && (
                  <div className="p-5 bg-red-50 text-red-600 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-red-100 animate-pulse">
                    {error}
                  </div>
                )}

                <button 
                  className="w-full bg-slate-900 text-white font-black py-6 rounded-2xl hover:bg-indigo-600 transition-all shadow-2xl shadow-indigo-100 flex items-center justify-center space-x-4 group transform hover:-translate-y-1 active:scale-95"
                >
                  <span className="text-[11px] uppercase tracking-[0.4em]">Initialize Transmission</span>
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
