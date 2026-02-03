
import React, { useState, useEffect } from 'react';
import { analyticsProtocol } from '../services/analyticsService';

const SystemControl: React.FC = () => {
  const [identity, setIdentity] = useState(analyticsProtocol.getIdentity());
  const [context, setContext] = useState<any>(null);
  const [events, setEvents] = useState<{id: string, type: string, time: string, status: string}[]>([]);
  const [stats, setStats] = useState({ total: 12402, unique: 4891, rate: '42.1 events/s' });

  useEffect(() => {
    const loadContext = async () => {
      const ctx = await analyticsProtocol.getContext();
      setContext(ctx);
    };
    loadContext();

    // Simulate live event stream from GCP telemetry pipeline
    const interval = setInterval(() => {
      const newEvent = {
        id: Math.random().toString(36).substr(2, 6).toUpperCase(),
        type: ['TELEMETRY', 'BIGQUERY_STREAM', 'EMAIL_RELAY', 'INGEST'][Math.floor(Math.random() * 4)],
        time: new Date().toLocaleTimeString(),
        status: 'COMPLETE'
      };
      setEvents(prev => [newEvent, ...prev].slice(0, 8));
      setStats(prev => ({
        ...prev,
        total: prev.total + 1,
        unique: prev.unique + (Math.random() > 0.95 ? 1 : 0)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-48 pb-32 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16">
          <div className="inline-flex items-center space-x-3 bg-slate-900 text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.3em] mb-8">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span>System Status: Operational</span>
          </div>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-4">Control Center.</h1>
          <p className="text-slate-500 text-xl font-light">Real-time visualization of the GCP Ingestion & Telemetry pipeline.</p>
        </header>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Total System Hits</span>
            <div className="text-5xl font-black text-slate-900 tabular-nums">{stats.total.toLocaleString()}</div>
            <div className="mt-4 text-xs font-bold text-green-600">↑ 12% vs last 24h</div>
          </div>
          <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Unique Visitors</span>
            <div className="text-5xl font-black text-indigo-600 tabular-nums">{stats.unique.toLocaleString()}</div>
            <div className="mt-4 text-xs font-bold text-slate-400">Identity Persistence Active</div>
          </div>
          <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Ingestion Rate</span>
            <div className="text-5xl font-black text-slate-900 tabular-nums">{stats.rate}</div>
            <div className="mt-4 text-xs font-bold text-indigo-500 animate-pulse">Live from asia-south1</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Visitor Identity & Context */}
          <div className="space-y-8">
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
              <h3 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-10">Your Identity Token</h3>
              <div className="font-mono text-3xl mb-8 break-all">{identity.uid}</div>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                   <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Status</span>
                   <span className="text-sm font-bold">{identity.isNew ? 'New Session' : 'Returning User'}</span>
                </div>
                <div>
                   <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">First Seen</span>
                   <span className="text-sm font-bold">{new Date(identity.firstSeen).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-[0.05] text-[15rem] font-black select-none pointer-events-none">ID</div>
            </div>

            <div className="bg-white rounded-[3rem] p-12 border border-slate-200">
               <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-10">Environmental Context</h3>
               {context ? (
                 <div className="grid grid-cols-2 gap-8 font-mono text-[10px]">
                    <div className="space-y-4">
                       <div><span className="text-slate-400 uppercase">Screen:</span> <span className="text-slate-900">{context.screen}</span></div>
                       <div><span className="text-slate-400 uppercase">Lang:</span> <span className="text-slate-900">{context.language}</span></div>
                    </div>
                    <div className="space-y-4">
                       <div><span className="text-slate-400 uppercase">Lat:</span> <span className="text-indigo-600">{context.latitude || 'REDACTED'}</span></div>
                       <div><span className="text-slate-400 uppercase">Long:</span> <span className="text-indigo-600">{context.longitude || 'REDACTED'}</span></div>
                    </div>
                 </div>
               ) : (
                 <div className="animate-pulse text-slate-300">Resolving context protocol...</div>
               )}
            </div>
          </div>

          {/* Real-time Event Log */}
          <div className="bg-white rounded-[4rem] border border-slate-200 overflow-hidden flex flex-col h-full shadow-2xl">
            <div className="p-10 border-b border-slate-100 flex items-center justify-between bg-slate-50">
               <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">GCP Processing Stream</h3>
               <div className="flex space-x-1">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce"></div>
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
               </div>
            </div>
            <div className="flex-1 p-10 font-mono text-[11px] space-y-4">
               <div className="flex text-slate-400 font-black uppercase tracking-widest pb-4 border-b border-slate-50">
                  <div className="w-20">Time</div>
                  <div className="flex-1 px-4">Event Logic</div>
                  <div className="w-24 text-right">State</div>
               </div>
               {events.map((ev, i) => (
                 <div key={i} className={`flex items-center py-2 animate-in slide-in-from-right-4 duration-500 ${i === 0 ? 'text-indigo-600 font-bold' : 'text-slate-500'}`}>
                    <div className="w-20">{ev.time}</div>
                    <div className="flex-1 px-4 truncate">GCP_FUNC::{ev.type}_[ID:{ev.id}]</div>
                    <div className="w-24 text-right">
                       <span className="bg-slate-100 px-2 py-0.5 rounded text-[9px]">{ev.status}</span>
                    </div>
                 </div>
               ))}
            </div>
            <div className="p-8 bg-slate-900 text-white/40 text-[9px] font-mono">
               SYS_LOG: Protocol initialized. Data redundancy active. Streaming to BigQuery enabled.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemControl;