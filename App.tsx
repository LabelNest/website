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
  const [path, setPath] = useState(window.location.pathname || '/');
  const [nestorAvatar, setNestorAvatar] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);

    const loadAvatar = async () => {
      const avatar = await generateNestorAvatar();
      setNestorAvatar(avatar);
    };
    loadAvatar();

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (newPath: string) => {
    if (newPath === path) return;
    window.history.pushState({}, '', newPath);
    setPath(newPath);
    window.scrollTo(0, 0);
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
        <h1 className="text-3xl font-bold mb-4 uppercase tracking-widest font-black">
          System Interrupt
        </h1>
        <p className="text-slate-600">
          The protocol '{path}' is not recognized by the current version.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-8 text-indigo-600 font-bold underline"
        >
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

      <footer className="bg-slate-900 text-white py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <div
              className="flex items-center space-x-3 mb-8 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <span className="text-2xl font-black tracking-tighter">LabelNest</span>
            </div>

            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed text-sm font-light">
              LabelNest builds the infrastructure of intelligence — combining expert
              human reasoning with deterministic automation.
            </p>

            <div className="flex space-x-6 text-xs font-black uppercase tracking-widest text-slate-500">
              <span className="text-indigo-500">Status: Nominal</span>
              <span>v2.5.4</span>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-8 text-[10px] uppercase tracking-[0.3em] text-slate-500">
              Company
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => navigate('/about')}>About</button></li>
              <li><button onClick={() => navigate('/team')}>Team</button></li>
              <li><button onClick={() => navigate('/careers')}>Careers</button></li>
              <li><button onClick={() => navigate('/partnerships')}>Partnerships</button></li>
              <li><button onClick={() => navigate('/contact')}>Contact</button></li>
            </ul>
          </div>
        </div>
      </footer>

      <NestorChat externalAvatar={nestorAvatar} />
    </div>
  );
};

export default App;
