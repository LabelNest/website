
import React, { useState, useRef, useEffect } from 'react';
import { chatWithNestor } from '../services/geminiService';
import { ChatMessage } from '../types';
import { submitToIngest } from '../services/ingestionService';

interface NestorChatProps {
  externalAvatar: string | null;
}

const NestorChat: React.FC<NestorChatProps> = ({ externalAvatar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'assistant', 
      content: 'I’m Nestor — System intelligence shaped by real-world data practice. I can help explain our products, solutions, or how we approach data quality.' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showHandoff, setShowHandoff] = useState(false);
  const [isHandoffSubmitting, setIsHandoffSubmitting] = useState(false);
  const [handoffForm, setHandoffForm] = useState({ name: '', email: '', message: '' });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, showHandoff, isLoading]);

  const handleSend = async (customMsg?: string) => {
    const userMsg = (customMsg || inputValue).trim();
    if (!userMsg || isLoading) return;

    if (!customMsg) setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);
    setShowHandoff(false);

    try {
      const response = await chatWithNestor(userMsg, messages);
      setMessages(prev => [...prev, { role: 'assistant', content: response || 'I encountered a system interrupt.' }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Connection failure. Contact contact@labelnest.in.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: string) => {
    if (action === 'Talk to the Team') {
      setShowHandoff(true);
    } else {
      handleSend(action);
    }
  };

  const handleHandoffChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHandoffForm(prev => ({ ...prev, [name]: value }));
  };

  const handleHandoffSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsHandoffSubmitting(true);

    const success = await submitToIngest({
      source: 'CHAT_HANDOFF',
      timestamp: new Date().toISOString(),
      data: handoffForm
    });

    if (success) {
      setMessages(prev => [
        ...prev, 
        { role: 'assistant', content: 'Handshake complete. The team will follow up shortly at ' + handoffForm.email + '. I’ll stay here if you want to explore meanwhile.' }
      ]);
      setShowHandoff(false);
    }
    setIsHandoffSubmitting(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-6 w-96 md:w-[28rem] max-h-[85vh] bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-500 ease-out">
          {/* Header */}
          <div className="bg-slate-900 text-white p-6 flex items-center space-x-4 border-b border-slate-800 shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center font-bold text-sm shadow-xl overflow-hidden border border-white/10">
              {externalAvatar ? (
                <img src={externalAvatar} alt="Nestor System" className="w-full h-full object-cover animate-materialize" />
              ) : (
                <span className="animate-pulse">N</span>
              )}
            </div>
            <div>
              <h3 className="font-black text-sm tracking-tight uppercase">Nestor</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black">System Active · V2.5</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="ml-auto p-2 text-slate-500 hover:text-white transition-colors hover:bg-white/10 rounded-xl">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef} 
            className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50 overscroll-contain"
            style={{ scrollBehavior: 'smooth' }}
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                <div className={`max-w-[85%] p-5 rounded-2xl text-[14px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-white text-slate-700 border border-slate-200'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {showHandoff && (
              <div className="bg-white p-6 rounded-2xl border border-indigo-200 shadow-xl animate-in fade-in slide-in-from-bottom-4">
                <h4 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-6">Talk to the Team</h4>
                <form onSubmit={handleHandoffSubmit} className="space-y-4">
                  <input name="name" required disabled={isHandoffSubmitting} placeholder="Full Name" value={handoffForm.name} onChange={handleHandoffChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50" />
                  <input name="email" required disabled={isHandoffSubmitting} type="email" placeholder="Work Email" value={handoffForm.email} onChange={handleHandoffChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50" />
                  <textarea name="message" required disabled={isHandoffSubmitting} rows={3} placeholder="Describe your data challenge..." value={handoffForm.message} onChange={handleHandoffChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"></textarea>
                  <button 
                    type="submit" 
                    disabled={isHandoffSubmitting}
                    className="w-full bg-indigo-600 text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:bg-slate-400 flex items-center justify-center space-x-2"
                  >
                    {isHandoffSubmitting ? (
                      <>
                        <div className="w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        <span>Initializing...</span>
                      </>
                    ) : (
                      <span>Initialize Handoff</span>
                    )}
                  </button>
                </form>
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl shadow-sm border border-slate-200 flex space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Footer / Input Area */}
          <div className="p-6 border-t border-slate-200 bg-white shrink-0">
            <div className="flex flex-wrap gap-2 mb-6">
              {['Products', 'Solutions', 'Talk to the Team'].map(action => (
                <button
                  key={action}
                  onClick={() => handleQuickAction(action)}
                  className="px-4 py-2 bg-slate-100 hover:bg-indigo-600 hover:text-white border border-slate-200 hover:border-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                >
                  {action}
                </button>
              ))}
            </div>
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Nestor about systems..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-[14px] focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading}
                className="bg-slate-900 text-white p-4 rounded-xl hover:bg-indigo-600 transition-all disabled:opacity-50 shadow-xl shadow-slate-100"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 bg-slate-900 rounded-[2rem] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-indigo-600 transition-all transform hover:scale-110 active:scale-95 text-white border-4 border-white group overflow-hidden"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
             {externalAvatar ? (
               <img src={externalAvatar} alt="Nestor" className="w-full h-full object-cover transition-opacity animate-materialize" />
             ) : (
               <span className="font-black text-2xl relative z-10 tracking-tighter">LN</span>
             )}
             <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default NestorChat;
