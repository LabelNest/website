import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Components
import Navbar from './components/Navbar.tsx';
import NestorChat from './components/NestorChat.tsx';

// Pages
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

// Ensures window scrolls to top on every navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [nestorAvatar, setNestorAvatar] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loadAvatar = async () => {
      const avatar = await generateNestorAvatar();
      setNestorAvatar(avatar);
    };
    loadAvatar();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      
      <Helmet>
        <title>LabelNest India | Intelligence Infrastructure</title>
        <meta name="description" content="LabelNest India Private Limited building deterministic automation and data systems for the AI era." />
        <meta name="keywords" content="Data Intelligence, AI Infrastructure, LabelNest India, Deterministic Automation" />
      </Helmet>

      <Navbar currentPath={location.pathname} onNavigate={(path) => navigate(path)} avatar={nestorAvatar} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onNavigate={(p) => navigate(p)} avatar={nestorAvatar} />} />
          <Route path="/about" element={<About avatar={nestorAvatar} />} />
          <Route path="/products" element={<Products onNavigate={(p) => navigate(p)} />} />
          <Route path="/products/:productId" element={<Products onNavigate={(p) => navigate(p)} />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/briefings" element={<Briefings />} />
          <Route path="/team" element={<Team avatar={nestorAvatar} />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={
            <div className="pt-32 pb-20 text-center">
              <h1 className="text-3xl font-black uppercase tracking-widest mb-4">System Interrupt</h1>
              <p className="text-slate-600 mb-6">The protocol is not recognized.</p>
              <button onClick={() => navigate('/')} className="text-indigo-600 underline">Return to Core</button>
            </div>
          } />
        </Routes>
      </main>

      {/* FOOTER - PRESERVING ALL ORIGINAL CONTENT */}
      <footer className="bg-slate-900 text-white py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16">
          
          {/* BRAND + CONTACT */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-8 cursor-pointer" onClick={() => navigate('/')}>
              <span className="text-2xl font-black tracking-tighter">LabelNest</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-10 text-sm">
              LabelNest building the infrastructure of intelligence through expert human reasoning and deterministic automation.
            </p>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Email Protocol</h4>
                  <p className="text-white font-semibold">contact@labelnest.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Global HQ</h4>
                  <p className="text-white font-semibold">Bangalore, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-indigo-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Digital Presence</h4>
                  <div className="flex items-center space-x-4">
                    <a href="https://www.linkedin.com/company/labelnest-india/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-indigo-600 transition-all shadow-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/labelnestindia?igsh=cHA0b2Y2djJheWRk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-pink-600 transition-all shadow-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/></svg>
                    </a>
                    <a href="https://x.com/LabelNestAI" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-slate-700 transition-all shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CAPABILITIES */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">Capabilities</h4>
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
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">Company</h4>
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
          <span>© 2026 LABELNEST INDIA PRIVATE LIMITED</span>
          <span>Privacy · Terms</span>
        </div>
      </footer>

      <NestorChat externalAvatar={nestorAvatar} />
    </div>
  );
};

// Root App Export with Providers
export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}