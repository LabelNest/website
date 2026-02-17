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
  const [path, setPath] = useState(
    window.location.hash.replace('#', '') || '/'
  );
  const [nestorAvatar, setNestorAvatar] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash.replace('#', '') || '/');
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
        <h1 className="text-3xl font-black uppercase tracking-widest mb-4">
          System Interrupt
        </h1>
        <p className="text-slate-600 mb-6">
          The protocol '{path}' is not recognized.
        </p>
        <button onClick={() => navigate('/')} className="text-indigo-600 underline">
          Return to Core
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar currentPath={path} onNavigate={navigate} avatar={nestorAvatar} />

      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* BRAND + CONTACT */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-8 cursor-pointer" onClick={() => navigate('/')}>
              <span className="text-2xl font-black tracking-tighter">LabelNest</span>
            </div>

            <p className="text-slate-400 max-w-sm mb-10 text-sm">
              LabelNest building the infrastructure of intelligence through expert human
              reasoning and deterministic automation.
            </p>

            {/* CONTACT BLOCK */}
            <div className="space-y-6 mb-10">

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  📧
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Email Protocol
                  </div>
                  <a href="mailto:contact@labelnest.in" className="text-white font-semibold">
                    contact@labelnest.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  📍
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Global HQ
                  </div>
                  <div className="text-white font-semibold">Bangalore, India</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  🔗
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                    Digital Presence
                  </div>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/company/labelnest-india/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com/labelnestindia" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://x.com/LabelNestAI" target="_blank" rel="noreferrer">X</a>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex space-x-6 text-xs font-black uppercase tracking-widest text-slate-500">
              <span className="text-indigo-500">Status: Nominal</span>
              <span>v2.5.4</span>
            </div>
          </div>

          {/* CAPABILITIES */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">
              Capabilities
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => navigate('/products')}>Data Systems</button></li>
              <li><button onClick={() => navigate('/solutions')}>Intelligence Flows</button></li>
              <li><button onClick={() => navigate('/briefings')}>Briefings</button></li>
              <li><button onClick={() => navigate('/labs')}>Labs & R&D</button></li>
              <li><button onClick={() => navigate('/pricing')}>Pricing Philosophy</button></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">
              Company
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => navigate('/about')}>Our Dossier</button></li>
              <li><button onClick={() => navigate('/team')}>The Team</button></li>
              <li><button onClick={() => navigate('/careers')}>Careers</button></li>
              <li><button onClick={() => navigate('/partnerships')}>Partnerships</button></li>
              <li><button onClick={() => navigate('/contact')}>Contact</button></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 mt-24 pt-8 border-t border-white/5 flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
          <span>© 2025 LABELNEST INDIA PRIVATE LIMITED</span>
          <span>Privacy · Terms</span>
        </div>
      </footer>

      {/* NESTOR */}
      <NestorChat externalAvatar={nestorAvatar} />
    </div>
  );
};

export default App;
