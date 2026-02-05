
import React, { useEffect, useState } from 'react';
import { getTeamMemberAvatar } from '../services/imageService';

interface DossierSectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  bg?: string;
  className?: string;
  icon?: React.ReactNode;
}

const DossierSection: React.FC<DossierSectionProps> = ({ title, children, id, bg = "bg-white", className = "", icon }) => (
  <section id={id} className={`py-32 px-4 ${bg} border-b border-slate-100 relative overflow-hidden ${className}`}>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
      <div className="lg:w-1/3">
        <div className="sticky top-32">
          <div className="flex flex-col space-y-6 mb-8">
            <div className="relative inline-block w-20 h-20 mb-4">
              <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl animate-pulse-ring"></div>
              <div className="relative z-10 w-full h-full bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm">
                {icon}
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 leading-none group transition-all">
              {title.split(' ').map((word, i) => (
                <span key={i} className="block">
                  {word}
                  {i === title.split(' ').length - 1 && <span className="text-indigo-600">.</span>}
                </span>
              ))}
            </h2>
            <div className="h-1.5 w-12 bg-indigo-600 rounded-full"></div>
          </div>
          <div className="hidden lg:block h-px w-full bg-slate-100"></div>
        </div>
      </div>
      <div className="lg:w-2/3">
        {children}
      </div>
    </div>
  </section>
);

const WhoWeAreIcon = () => (
  <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path className="animate-pulse" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const WhyWeExistIcon = () => (
  <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle className="animate-pulse-ring" cx="12" cy="12" r="10" strokeWidth={1.5} />
    <path className="animate-materialize" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HowWeWorkIcon = () => (
  <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path className="animate-rotate-slow origin-center" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const FounderIcon = () => (
  <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path className="animate-fade-in" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const VisionIcon = () => (
  <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path className="animate-rotate-reverse-slow origin-center" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const RoboticChipIcon = () => (
  <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="32" rx="6" stroke="currentColor" strokeWidth="2.5" />
    <rect x="18" y="18" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="24" cy="24" r="3" fill="currentColor" />
    <path d="M24 8V4M24 44V40M8 24H4M44 24H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const About: React.FC<{ avatar: string | null }> = ({ avatar }) => {
  const [founderImgError, setFounderImgError] = useState(false);
  const founderAvatar = getTeamMemberAvatar('ankit-kumar-suman', 'Leadership & Strategy');

  useEffect(() => {
    document.title = "About LabelNest | Data Systems & Intelligence";
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* 1️⃣ PAGE HERO */}
      <section className="relative pt-64 pb-48 px-4 bg-white overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black tracking-widest uppercase mb-12 animate-fade-in">
            System Dossier v2.5
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter mb-10 animate-fade-in-up leading-none">
            About <br /><span className="text-indigo-600">LabelNest</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Building data systems that organizations can trust.
          </p>
        </div>
      </section>

      {/* 2️⃣ WHO WE ARE */}
      <DossierSection title="Who We Are" icon={<WhoWeAreIcon />}>
        <div className="text-xl md:text-3xl text-slate-800 font-light leading-relaxed space-y-12 animate-fade-in-up delay-300">
          <p>
            LabelNest is a data systems and intelligence company focused on helping organizations work with information at scale — accurately, transparently, and responsibly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:border-indigo-200 transition-colors">
              <p className="text-lg text-slate-600 leading-relaxed">
                We build platforms and datasets that sit behind critical decisions, where data quality, traceability, and structure matter more than speed or surface-level insights.
              </p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:border-indigo-200 transition-colors">
              <p className="text-lg text-slate-600 leading-relaxed">
                Our work spans data labeling and QA, intelligence datasets, monitoring and resolution systems, and applied research — all designed to function reliably in real-world environments.
              </p>
            </div>
          </div>
        </div>
      </DossierSection>

      {/* 3️⃣ WHY WE EXIST */}
      <DossierSection title="Why We Exist" bg="bg-slate-50" icon={<WhyWeExistIcon />}>
        <div className="space-y-16">
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Solving the structural problems of <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">fragmented data.</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
              <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Problem 01</div>
              <p className="text-slate-600 text-sm leading-relaxed">Most real-world data is fragmented, inconsistent, and difficult to trust over time.</p>
            </div>
            <div className="space-y-6 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
              <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Problem 02</div>
              <p className="text-slate-600 text-sm leading-relaxed">Off-the-shelf datasets rarely fit actual business or research needs. Black-box automation hides errors instead of resolving them.</p>
            </div>
            <div className="space-y-6 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
              <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Problem 03</div>
              <p className="text-slate-600 text-sm leading-relaxed">Quality breaks down when systems are built without accountability or auditability.</p>
            </div>
          </div>
        </div>
      </DossierSection>

      {/* 4️⃣ HOW WE WORK */}
      <DossierSection title="How We Work" icon={<HowWeWorkIcon />}>
        <div className="space-y-16">
          <div className="max-w-2xl">
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-8">Our approach is built around systems, not shortcuts.</h3>
          </div>
          <div className="space-y-4">
            {[
              "Human + automation workflows — never automation alone",
              "Quality-first design, not speed-first delivery",
              "Modular systems that adapt to real use cases",
              "Transparent methodologies and clear audit trails",
              "Continuous monitoring, issue detection, and resolution"
            ].map((bullet, i) => (
              <div key={i} className="group flex items-center justify-between p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all cursor-default">
                <span className="text-lg md:text-xl font-medium tracking-tight">{bullet}</span>
                <div className="w-8 h-8 rounded-full bg-white/20 hidden group-hover:flex items-center justify-center font-black text-[10px]">0{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </DossierSection>

      {/* 5️⃣ FOUNDER */}
      <DossierSection title="Founder" bg="bg-slate-50" icon={<FounderIcon />}>
         <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-900 rounded-[2rem] flex-shrink-0 flex items-center justify-center overflow-hidden border border-white/10 relative">
               {founderAvatar && !founderImgError ? (
                 <img 
                  src={founderAvatar} 
                  alt="Ankit Suman" 
                  onError={() => setFounderImgError(true)}
                  className="w-full h-full object-cover" 
                 />
               ) : (
                 <span className="text-4xl font-black text-white tracking-widest opacity-80">AS</span>
               )}
            </div>
            <div className="space-y-10">
               <h3 className="text-5xl font-black text-slate-900 tracking-tighter">Ankit Suman</h3>
               <div className="text-xl text-slate-600 font-light leading-relaxed space-y-8 max-w-2xl">
                 <p>
                   LabelNest was founded by Ankit Suman, who has worked extensively in large-scale data operations and private market research environments.
                 </p>
                 <p className="text-slate-900 font-medium">
                   LabelNest was created to address the gaps in how data is collected, labeled, and trusted over time—not with one-off services, but with durable systems that reflect real-world data behavior.
                 </p>
               </div>
            </div>
         </div>
      </DossierSection>

      {/* 6️⃣ VISION */}
      <DossierSection title="Vision" icon={<VisionIcon />}>
        <div className="bg-slate-900 rounded-[4rem] p-16 md:p-24 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/10 transition-shadow">
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-12 text-white">Building a long-term ecosystem.</h3>
            <div className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed space-y-10">
              <p>
                LabelNest is building a long-term ecosystem of data systems and intelligence platforms that organizations can rely on as their data complexity grows.
              </p>
              <p>
                Our focus is on scalable infrastructure, responsible experimentation, and creating opportunities for skilled data work beyond traditional hubs.
              </p>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 opacity-10 select-none pointer-events-none transition-transform duration-1000 group-hover:scale-110">
             <span className="text-[20rem] font-black tracking-tighter text-white">CORE</span>
          </div>
        </div>
      </DossierSection>

      {/* 7️⃣ NESTOR - HIGH FIDELITY REDESIGN */}
      <section className="bg-slate-950 py-40 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Left: Robotic Chip Icon in White Square */}
          <div className="lg:w-1/4 flex justify-start lg:justify-center">
             <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-[2.5rem] flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.3)] animate-materialize">
                <RoboticChipIcon />
             </div>
          </div>

          {/* Center: Brand Content */}
          <div className="lg:w-2/4 text-white space-y-12 relative z-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white animate-fade-in-up">
                <span className="text-white">Nestor</span> is the system intelligence layer behind LabelNest.
              </h2>
              <div className="h-1.5 w-16 bg-indigo-500 rounded-full"></div>
            </div>
            
            <div className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed space-y-8 animate-fade-in-up delay-200">
              <p>
                It represents how we think about data — structured, traceable, and grounded in real-world practice. 
              </p>
              <p>
                <span className="text-white font-bold">Nestor</span> is not a chatbot or a sales assistant, but a guide designed to explain our systems, methodologies, and approach to intelligence.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 animate-fade-in-up delay-400">
              <span className="text-[10px] font-black tracking-[0.4em] text-indigo-400 uppercase">
                System Intelligence Protocol v2.5
              </span>
            </div>
          </div>

          {/* Right: High Fidelity Robotic Avatar */}
          <div className="lg:w-1/4 flex justify-center lg:justify-end">
             <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="w-full h-full rounded-[4.5rem] bg-slate-900 border-4 border-white/5 shadow-2xl overflow-hidden relative group">
                   {avatar && <img src={avatar} alt="Nestor Core" className="w-full h-full object-cover animate-materialize" />}
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                   {/* Scan bar effect */}
                   <div className="absolute top-0 left-0 w-full h-px bg-cyan-400/30 animate-scan-v"></div>
                </div>
             </div>
          </div>
        </div>

        {/* Backdrop branding */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[25rem] font-black text-white pointer-events-none select-none">
           NESTOR
        </div>
      </section>

      {/* 8️⃣ CTA */}
      <section className="py-48 px-4 bg-white text-center border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-12 tracking-tighter">Work With Us</h2>
          <p className="text-2xl md:text-3xl text-slate-500 mb-16 font-light leading-relaxed max-w-3xl mx-auto">
            If you’re exploring complex data problems and need systems that scale with integrity, we’d be glad to talk.
          </p>
          <button 
            onClick={() => window.location.hash = '/contact'}
            className="inline-flex items-center px-16 py-8 bg-indigo-600 text-white font-black rounded-3xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-100 transform hover:-translate-y-2 uppercase tracking-widest text-xs"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
