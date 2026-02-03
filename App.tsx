
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NestorChat from './components/NestorChat';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Labs from './pages/Labs';
import Briefings from './pages/Briefings';
import Contact from './pages/Contact';
import About from './pages/About';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Partnerships from './pages/Partnerships';
import Pricing from './pages/Pricing';
import Status from './pages/Status';
import { generateNestorAvatar } from './services/imageService';
import { analyticsProtocol } from './services/analyticsService';
import { submitToGCP } from './services/ingestionService';

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.hash.replace('#', '') || '/');
  const [nestorAvatar, setNestorAvatar] = useState<string | null>(null);

  // --- GCP ANALYTICS TRACKING ---
  const trackVisit = async (currentPath: string) => {
    const identity = analyticsProtocol.getIdentity();
    const context = await analyticsProtocol.getContext();
    
    await submitToGCP({
      type: 'SYSTEM_TELEMETRY',
      source: 'PAGE_VISIT',
      timestamp: new Date().toISOString(),
      identity: {
        uid: identity.uid,
        isUnique: identity.isNew
      },
      context: {
        ...context,
        path: currentPath
      }
    });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash.replace('#', '') || '/';
      setPath(newPath);
      window.scrollTo(0, 0);
      trackVisit(newPath); 
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    trackVisit(path);

    const loadAvatar = async () => {
      const avatar = await generateNestorAvatar();
      setNestorAvatar(avatar);
    };
    loadAvatar();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (newPath: string) => {
    window.location.hash = newPath;
  };

  const renderContent = () => {
    if (path === '/' || path === '') return <Home onNavigate={navigate} avatar={nestorAvatar} />;
    if (path === '/about') return <About avatar={nestorAvatar} />;
    if (path === '/products') return <Products onNavigate={navigate} />;
    if (path.startsWith('/products/')) {
      const id = path.split('/').pop();
      return <Products productId={id} onNavigate={navigate} />;
    }
    if (path === '/solutions') return <Solutions />;
    if (path === '/labs') return <Labs />;
    if (path === '/briefings') return <Briefings />;
    if (path === '/team') return <Team avatar={nestorAvatar} />;
    if (path === '/careers') return <Careers />;
    if (path === '/partnerships') return <Partnerships />;
    if (path === '/pricing') return <Pricing />;
    if (path === '/contact') return <Contact />;
    if (path === '/status') return <Status />;
    
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-3xl font-bold mb-4 uppercase tracking-widest font-black">System Interrupt</h1>
        <p className="text-slate-600">The protocol '{path}' is not recognized by the current version.</p>
        <button onClick={() => navigate('/')} className="mt-8 text-indigo-600 font-bold underline">Return to Core</button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar currentPath={path} onNavigate={navigate} avatar={nestorAvatar} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-slate-900 text-white py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-8 cursor-pointer group" onClick={() => navigate('/')}>
              <svg width="40" height="34" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-auto">
                <path d="M42 22 V60 C42 75 55 78 75 78 H88 V66 H75 C60 66 54 62 54 50 V22 H42Z" fill="white" />
                <path d="M58 22 L98 78 H112 V22 H98 V62 L58 22Z" fill="#4F46E5" />
                <rect x="100" y="8" width="10" height="10" fill="#4F46E5" />
                <rect x="112" y="12" width="8" height="8" fill="white" />
              </svg>
              <span className="text-2xl font-black tracking-tighter">LabelNest</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed text-sm font-light">
              LabelNest building the infrastructure of intelligence. We combine expert human reasoning with deterministic automation to solve the world's hardest data problems.
            </p>
            <div className="flex space-x-6 text-xs font-black uppercase tracking-widest text-slate-500">
              <span className="text-indigo-500">Status: Nominal</span>
              <span>v2.5.4</span>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-black mb-8 text-[10px] uppercase tracking-[0.3em] text-slate-500">Capabilities</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => navigate('/products')} className="hover:text-indigo-400 transition-colors">Data Systems</button></li>
              <li><button onClick={() => navigate('/solutions')} className="hover:text-indigo-400 transition-colors">Intelligence Flows</button></li>
              <li><button onClick={() => navigate('/briefings')} className="hover:text-indigo-400 transition-colors">Briefings</button></li>
              <li><button onClick={() => navigate('/labs')} className="hover:text-indigo-400 transition-colors">Labs & R&D</button></li>
              <li><button onClick={() => navigate('/pricing')} className="hover:text-indigo-400 transition-colors">Pricing Philosophy</button></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-black mb-8 text-[10px] uppercase tracking-[0.3em] text-slate-500">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => navigate('/about')} className="hover:text-indigo-400 transition-colors">Our Dossier</button></li>
              <li><button onClick={() => navigate('/team')} className="hover:text-indigo-400 transition-colors">The Team</button></li>
              <li><button onClick={() => navigate('/careers')} className="hover:text-indigo-400 transition-colors">Careers</button></li>
              <li><button onClick={() => navigate('/partnerships')} className="hover:text-indigo-400 transition-colors font-bold text-white">Partnerships</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-indigo-400 transition-colors font-bold text-indigo-400">Contact</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
           <span>© 2025 LABELNEST INDIA PRIVATE LIMITED</span>
           <div className="flex space-x-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Protocol</a>
             <a href="#" className="hover:text-white">System Terms</a>
           </div>
        </div>
      </footer>

      <NestorChat externalAvatar={nestorAvatar} />
    </div>
  );
};

export default App;