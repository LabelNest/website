
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
        source: 'CONTACT',
        timestamp: new Date().toISOString(),
        data: formState
      },
      (newStage) => setStage(newStage)
    );

    if (success) {
      setTimeout(() => setSubmitted(true), 1500);
    } else {
      setError("Protocol Interrupted. Please check connection and retry.");
      setStage('IDLE');
    }
  };

  const getStageLabel = () => {
    switch (stage) {
      case 'INGESTING': return 'Initializing Ingestion Protocol...';
      case 'STREAMING_BIGQUERY': return 'Streaming to GCP BigQuery (Telemetry Hub)...';
      case 'RELAYING_EMAIL': return 'Relaying Notification to contact@labelnest.in...';
      case 'COMPLETE': return 'Protocol Handshake Complete.';
      default: return 'Initializing...';
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold mb-6">Talk to the Experts</h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Whether you need complex data labeling systems, custom intelligence outputs, or want to discuss an R&D partnership, our team is ready to assist.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-slate-600">contact@labelnest.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold">Global HQ</h4>
                  <p className="text-slate-600">Bangalore, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold">N</div>
                <span className="font-bold">Nestor Prompt</span>
              </div>
              <p className="text-sm text-slate-400 italic">
                "Short on time? You can also message me via the chat widget below, and I'll route your query to the right desk."
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-20 animate-in fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                <p className="text-slate-600">One of our intelligence specialists will reach out within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setStage('IDLE'); }} className="mt-8 text-indigo-600 font-bold">Send another message</button>
              </div>
            ) : stage !== 'IDLE' ? (
              <div className="py-24 text-center">
                 <div className="mb-12 flex justify-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${stage === 'INGESTING' ? 'bg-indigo-600 animate-pulse' : 'bg-slate-200'}`}></div>
                    <div className={`w-3 h-3 rounded-full ${stage === 'STREAMING_BIGQUERY' ? 'bg-indigo-600 animate-pulse' : 'bg-slate-200'}`}></div>
                    <div className={`w-3 h-3 rounded-full ${stage === 'RELAYING_EMAIL' ? 'bg-indigo-600 animate-pulse' : 'bg-slate-200'}`}></div>
                 </div>
                 <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 mb-4">{getStageLabel()}</h3>
                 <p className="text-xs text-slate-400 font-mono">GCP_REGION: asia-south1 | TYPE: FORM_DATA</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Name</label>
                    <input 
                      name="name"
                      required 
                      type="text" 
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email</label>
                    <input 
                      name="email"
                      required 
                      type="email" 
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <select 
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                  >
                    <option>Product Inquiry (Annonest, NestResolve, etc.)</option>
                    <option>Intelligence Solutions</option>
                    <option>Labs & Research Partnership</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    name="message"
                    required 
                    rows={4} 
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                  ></textarea>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-xs font-bold border border-red-100">
                    {error}
                  </div>
                )}

                <button 
                  className="w-full bg-indigo-600 text-white font-black py-4 rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center space-x-3"
                >
                  <span>Send Message</span>
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
