
import React from 'react';

const SystemControl: React.FC = () => {
  return (
    <div className="pt-48 pb-32 text-center bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-6">Protocol Offline</h1>
        <p className="text-slate-500 text-lg font-light">The control module has been decommissioned. No active external tracking is permitted.</p>
        <button 
          onClick={() => window.location.hash = '/'} 
          className="mt-12 text-indigo-600 font-black text-xs uppercase tracking-widest border-b-2 border-indigo-600 pb-1"
        >
          Return to Core
        </button>
      </div>
    </div>
  );
};

export default SystemControl;
