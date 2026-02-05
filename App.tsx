
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import NestorChat from './components/NestorChat.tsx';
import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';
import Solutions from './pages/Solutions.tsx';
import Labs from './pages/Labs.tsx';
import Briefings from './pages/Briefings.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Team from './pages/Team.tsx';
import Careers from './pages/Careers.tsx';
import Partnerships from './pages/Partnerships.tsx';
import Pricing from './pages/Pricing.tsx';
import { generateNestorAvatar } from './services/imageService.ts';

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.hash.replace('#', '') || '/');
  const [nestorAvatar, setNestorAvatar] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash.replace('#', '') || '/';
      setPath(newPath);
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
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
            
            <div className="flex items-center space-x-5 mb-10">
              <a href="https://www.linkedin.com/company/labelnest-india/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all group/icon">
                <svg className="w-5 h-5 text-slate-400 group-hover/icon:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.instagram.com/labelnestindia?igsh=cHA0b2Y2djJheWRk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all group/icon">
                <svg className="w-5 h-5 text-slate-400 group-hover/icon:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/></svg>
              </a>
              <a href="https://x.com/LabelNestAI" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-slate-700 hover:border-slate-700 transition-all group/icon">
                <svg className="w-4 h-4 text-slate-400 group-hover/icon:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>

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
