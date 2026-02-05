
import React, { useState } from 'react';
import { TEAM_BY_DEPT, ALUMNI, FELLOWS } from '../constants';
import { getTeamMemberAvatar } from '../services/imageService';

interface TeamMemberCardProps {
  member: any;
  dept: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, dept }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const avatarUrl = getTeamMemberAvatar(member.id, dept);

  // Get initials for the fallback view
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  };

  return (
    <div className="bg-white rounded-[3.5rem] border border-slate-200 p-10 flex flex-col md:flex-row gap-10 hover:shadow-2xl hover:shadow-indigo-100 transition-all group overflow-hidden relative">
      {/* 📸 AVATAR CONTAINER */}
      <div className="w-32 h-32 md:w-36 md:h-36 bg-slate-900 rounded-[2rem] flex-shrink-0 flex items-center justify-center overflow-hidden border border-slate-100 relative shadow-sm">
        
        {/* SKELETON / LOADING OVERLAY */}
        {(!imageLoaded && !imageError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 z-10">
             <div className="w-full h-1 bg-indigo-500/50 absolute top-0 animate-scan-v"></div>
             <span className="text-[8px] font-mono font-black text-indigo-400 uppercase tracking-widest animate-pulse">
               SCANNING_ID...
             </span>
          </div>
        )}

        {/* IMAGE RENDERER */}
        {avatarUrl && !imageError ? (
          <img 
            src={avatarUrl} 
            alt={member.name} 
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} 
          />
        ) : (
          /* INITIALS FALLBACK (No Robot) */
          <div className="flex flex-col items-center justify-center text-white select-none">
            <span className="text-4xl font-black tracking-widest opacity-80">{getInitials(member.name)}</span>
            <div className="mt-2 w-4 h-0.5 bg-indigo-500/50"></div>
          </div>
        )}
        
        {/* Subtle decorative overlay */}
        <div className="absolute inset-0 pointer-events-none border-[12px] border-slate-900/10"></div>
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-black tracking-tight text-slate-900">{member.name}</h3>
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          )}
        </div>
        
        <ul className="space-y-3 mb-8 text-slate-800 text-sm leading-relaxed font-light">
          {member.bio.split(/(?<=[.!?])\s+/).filter((s: string) => s.trim().length > 0).map((sentence: string, idx: number) => (
            <li key={idx} className="flex items-start">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>{sentence.trim()}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {member.expertise.map((exp: string) => (
            <span key={exp} className="px-3 py-1.5 bg-slate-50 text-slate-400 rounded-lg text-[8px] font-black uppercase tracking-widest border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              {exp}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team: React.FC<{ avatar: string | null }> = () => {
  const [isFellowsOpen, setIsFellowsOpen] = useState(false);
  const [isAlumniOpen, setIsAlumniOpen] = useState(false);

  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-24 text-center">
          <div className="bg-slate-900 text-white inline-block px-4 py-1.5 rounded-lg text-[10px] font-black tracking-[0.3em] uppercase mb-8">
            PROTOCOL ASSETS v3.2
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.85]">
            The <span className="text-indigo-600">Architects.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            A specialized collective of system architects and operations experts.
          </p>
        </header>

        {/* Active Core Team */}
        {Object.entries(TEAM_BY_DEPT).map(([dept, members]) => (
          <div key={dept} className="mb-24">
            <div className="flex items-center space-x-8 mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">
                {dept}
              </h2>
              <div className="h-2 bg-indigo-600 flex-1 rounded-full opacity-10"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {members.map((member) => (
                <TeamMemberCard key={member.id} member={member} dept={dept} />
              ))}
            </div>
          </div>
        ))}

        {/* NestPioneers Fellowship - EXPANDABLE */}
        <div className="mt-40 mb-24">
          <button 
            onClick={() => setIsFellowsOpen(!isFellowsOpen)}
            className="w-full flex items-center justify-between group text-left transition-all"
          >
            <div className="flex items-center space-x-8 flex-1">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">
                The NestPioneers <span className="text-indigo-600">Batch 01</span>
              </h2>
              <div className="h-2 bg-slate-900 flex-1 rounded-full opacity-10 group-hover:opacity-20 transition-all"></div>
            </div>
            <div className={`ml-8 w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 transition-transform duration-500 ${isFellowsOpen ? 'rotate-180 bg-indigo-600 border-indigo-600 text-white' : 'bg-white'}`}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          
          {isFellowsOpen && (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
              {FELLOWS.map((fellow, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between group hover:bg-white hover:border-indigo-200 transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                    <span className="text-slate-900 font-bold tracking-tight">{fellow.name}</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-indigo-600">{fellow.department}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Operational Lineage (Alumni) - EXPANDABLE */}
        <div className="mt-40 mb-24">
          <button 
            onClick={() => setIsAlumniOpen(!isAlumniOpen)}
            className="w-full flex items-center justify-between group text-left transition-all"
          >
            <div className="flex items-center space-x-8 flex-1">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">
                Operational <span className="text-indigo-600">Lineage.</span>
              </h2>
              <div className="h-2 bg-slate-900 flex-1 rounded-full opacity-10 group-hover:opacity-20 transition-all"></div>
            </div>
            <div className={`ml-8 w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 transition-transform duration-500 ${isAlumniOpen ? 'rotate-180 bg-indigo-600 border-indigo-600 text-white' : 'bg-white'}`}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {isAlumniOpen && (
            <div className="mt-16 bg-slate-50 rounded-[4rem] border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="p-12 space-y-4">
                <div className="grid grid-cols-2 gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400 px-8 mb-8">
                  <div className="">Legacy Asset</div>
                  <div className="">Impact Vector</div>
                </div>
                
                <div className="space-y-2">
                  {ALUMNI.map((alumnus, i) => (
                    <div key={i} className="grid grid-cols-2 gap-8 p-6 bg-white border border-slate-100 rounded-2xl items-center hover:border-indigo-200 transition-colors">
                      <div className="text-slate-900 font-bold tracking-tight">{alumnus.name}</div>
                      <div className="text-indigo-600 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                        {alumnus.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
