
import React, { useState } from 'react';

interface NavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  avatar: string | null;
}

const FullLogo = () => (
  <div className="flex items-center space-x-4 group cursor-pointer select-none">
    {/* Refined Brand Mark - Precision matched to reference image */}
    <svg width="60" height="54" viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[58px] h-auto overflow-visible transform group-hover:scale-105 transition-all duration-500 ease-out">
      {/* Black L - High weight with signature sweep */}
      <path d="M40 25 V68 C40 82 50 85 70 85 H85 V74 H70 C58 74 52 70 52 60 V25 H40Z" fill="black" />
      
      {/* Navy N - Sharp diagonal strike */}
      <path d="M58 25 L102 85 H118 V25 H102 V65 L58 25Z" fill="#000050" />
      
      {/* Pixel Burst - Strategic positions from reference */}
      <rect x="104" y="8" width="11" height="11" fill="#000050" />
      <rect x="118" y="11" width="9" height="9" fill="black" />
      <rect x="108" y="22" width="6" height="6" fill="#000050" />
      <rect x="122" y="24" width="7" height="7" fill="black" opacity="0.6" />
      <rect x="114" y="32" width="5" height="5" fill="#000050" opacity="0.4" />
      <rect x="105" y="0" width="7" height="7" fill="black" opacity="0.8" />
      <rect x="126" y="16" width="5" height="5" fill="#000050" opacity="0.3" />
    </svg>
    
    <div className="flex flex-col -space-y-1.5">
      <span className="text-[34px] font-black tracking-tighter text-[#000040] leading-none">LabelNest</span>
      <span className="text-[7.5px] font-black text-slate-900 tracking-[0.22em] mt-2 uppercase whitespace-nowrap">Data that teaches machines right</span>
    </div>
  </div>
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div onClick={() => onNavigate('/')}>
            <FullLogo />
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`text-[10px] uppercase tracking-[0.25em] font-black transition-all hover:text-indigo-600 ${
                  currentPath.startsWith(link.path) ? 'text-indigo-600' : 'text-slate-500'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="h-4 w-px bg-slate-200"></div>
            
            <div className="flex items-center space-x-4 bg-slate-50 p-1.5 pr-4 rounded-full border border-slate-200 group cursor-pointer" onClick={() => onNavigate('/about')}>
              <div className="w-8 h-8 rounded-full bg-slate-900 overflow-hidden relative border border-white flex items-center justify-center">
                {avatar ? (
                  <img src={avatar} alt="Nestor" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-[8px] font-black text-white">LN</div>
                )}
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-slate-50 group-hover:scale-125 transition-transform"></div>
              </div>
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-tighter group-hover:text-indigo-600">Nestor Core</span>
            </div>

            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.25em] rounded-xl hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 transform hover:-translate-y-1"
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

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-8 px-6 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="space-y-6">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;