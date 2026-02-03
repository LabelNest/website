
import React, { useState } from 'react';

interface NavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  avatar: string | null;
}

const LogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <path d="M110 130 V260 H210 Q190 260 170 240 Q150 220 150 200 H110" fill="black"/>
    <path d="M180 130 L270 260 V150 H310 V300 L220 170 V280 H180 V130Z" fill="#000080"/>
    <rect x="270" y="110" width="25" height="25" fill="#000080" />
    <rect x="300" y="110" width="20" height="20" fill="black" />
    <rect x="285" y="130" width="15" height="15" fill="black" />
    <rect x="325" y="125" width="20" height="20" fill="#000080" />
    <rect x="305" y="145" width="15" height="15" fill="#000080" />
  </svg>
);

const Navbar: React.FC<NavProps> = ({ currentPath, onNavigate, avatar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Dossier', path: '/about' },
    { label: 'Systems', path: '/products' },
    { label: 'Intelligence', path: '/solutions' },
    { label: 'Briefings', path: '/briefings' },
    { label: 'Labs', path: '/labs' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => onNavigate('/')}>
            <div className="group-hover:scale-110 transition-transform">
              <LogoIcon />
            </div>
            <span className="text-2xl font-black tracking-tighter text-[#000040] leading-none">LabelNest</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`text-[10px] uppercase tracking-[0.2em] font-black transition-all hover:text-indigo-600 ${
                  currentPath.startsWith(link.path) ? 'text-indigo-600' : 'text-slate-500'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="h-4 w-px bg-slate-200"></div>
            
            <div className="flex items-center space-x-4 bg-slate-50 p-1.5 pr-4 rounded-full border border-slate-200 group cursor-pointer" onClick={() => onNavigate('/about')}>
              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden relative border border-white">
                {avatar ? (
                  <img src={avatar} alt="Nestor" className="w-full h-full object-cover animate-materialize" />
                ) : (
                  <div className="w-full h-full bg-slate-300 animate-pulse"></div>
                )}
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-slate-50 group-hover:scale-125 transition-transform"></div>
              </div>
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-tighter group-hover:text-indigo-600">Nestor Core</span>
            </div>

            <button
              onClick={() => onNavigate('/contact')}
              className="px-7 py-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 transform hover:-translate-y-1"
            >
              Initialize
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-8 px-6 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => {
                onNavigate(link.path);
                setIsOpen(false);
              }}
              className="block w-full text-left text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-indigo-600"
            >
              {link.label}
            </button>
          ))}
          <div className="h-px w-full bg-slate-100"></div>
          <button
            onClick={() => {
              onNavigate('/contact');
              setIsOpen(false);
            }}
            className="block w-full text-center py-5 bg-slate-900 text-white font-black rounded-xl uppercase tracking-[0.2em] text-[10px]"
          >
            Initialize Connection
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
