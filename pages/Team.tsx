
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
      <div className="w-32 h-32 md:w-36 md:h-36 bg-slate-900 rounded-[2.5rem] flex-shrink-0 flex items-center justify-center overflow-hidden border border-slate-100 relative shadow-inner">
        
        {/* SKELETON / LOADING OVERLAY */}
        {(!imageLoaded && !imageError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 z-10">
             <div className="w-full h-[2px] bg-indigo-500/40 absolute top-0 animate-scan-v"></div>
             <span className="text-[7px] font-mono font-black text-indigo-400 uppercase tracking-[0.3em] animate-pulse">
               SYSTEM_SCAN
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
            className={`w-full h-full object-cover transition-all duration-1000 ease-out ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110 blur-sm'}`} 
          />
        ) : (
          /* INITIALS FALLBACK */
          <div className="flex flex-col items-center justify-center text-white select-none animate-materialize">
            <span className="text-4xl font-black tracking-widest opacity-80">{getInitials(member.name)}</span>
            <div className="mt-2 w-6 h-0.5 bg-indigo-500/50 rounded-full"></div>
          </div>
        )}
        
        {/* Aesthetic Scan Line (Constant but subtle) */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20 group-hover:opacity-40 transition-opacity"></div>
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-black tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">{member.name}</h3>
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-indigo-600 transition-all transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          )}
        </div>
        
        <ul className="space-y-4 mb-10 text-slate-600 text-[15px] leading-relaxed font-light">
          {member.bio.split(/(?<=[.!?])\s+/).filter((s: string) => s.trim().length > 0).map((sentence: string, idx: number) => (
            <li key={idx} className="flex items-start">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-4 flex-shrink-0 opacity-40"></span>
              <span>{sentence.trim()}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2.5">
          {member.expertise.map((exp: string) => (
            <span key={exp} className="px-4 py-2 bg-slate-50 text-slate-400 rounded-xl text-[9px] font-black uppercase tracking-widest border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300">
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
        <header className="mb-32 text-center">
          <div className="bg-slate-900 text-white inline-block px-5 py-2 rounded-xl text-[10px] font-black tracking-[0.4em] uppercase mb-10 animate-fade-in">
            OPERATIONAL_ASSETS v3.5
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter mb-10 leading-[0.82] animate-fade-in-up">
            The <span className="text-indigo-600">Architects.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
            A specialized collective of system architects, data researchers, and operational experts building the infrastructure of trust.
          </p>
        </header>

        {/* Active Core Team */}
        {Object.entries(TEAM_BY_DEPT).map(([dept, members]) => (
          <div key={dept} className="mb-32">
            <div className="flex items-center space-x-10 mb-20 px-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 uppercase">
                {dept}
              </h2>
              <div className="h-2 bg-indigo-600 flex-1 rounded-full opacity-5"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {members.map((member) => (
                <TeamMemberCard key={member.id} member={member} dept={dept} />
              ))}
            </div>
          </div>
        ))}

        {/* NestPioneers Fellowship */}
        <div className="mt-48 mb-24">
          <button 
            onClick={() => setIsFellowsOpen(!isFellowsOpen)}
            className="w-full flex items-center justify-between group text-left transition-all p-4 rounded-[3rem] hover:bg-slate-50"
          >
            <div className="flex items-center space-x-10 flex-1">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">
                The NestPioneers <span className="text-indigo-600">Batch 01</span>
              </h2>
              <div className="h-1.5 bg-slate-900 flex-1 rounded-full opacity-5 group-hover:opacity-10 transition-all"></div>
            </div>
            <div className={`ml-10 w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 transition-all duration-500 ${isFellowsOpen ? 'rotate-180 bg-slate-900 border-slate-900 text-white' : 'bg-white'}`}>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          
          {isFellowsOpen && (
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-top-8 duration-700">
              {FELLOWS.map((fellow, i) => (
                <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-center justify-between group hover:bg-white hover:border-indigo-200 transition-all shadow-sm">
                  <div className="flex items-center space-x-5">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-slate-900 font-bold tracking-tight text-lg">{fellow.name}</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-indigo-600">{fellow.department}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Operational Lineage */}
        <div className="mt-40 mb-24">
          <button 
            onClick={() => setIsAlumniOpen(!isAlumniOpen)}
            className="w-full flex items-center justify-between group text-left transition-all p-4 rounded-[3rem] hover:bg-slate-50"
          >
            <div className="flex items-center space-x-10 flex-1">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">
                Operational <span className="text-indigo-600">Lineage.</span>
              </h2>
              <div className="h-1.5 bg-slate-900 flex-1 rounded-full opacity-5 group-hover:opacity-10 transition-all"></div>
            </div>
            <div className={`ml-10 w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 transition-all duration-500 ${isAlumniOpen ? 'rotate-180 bg-slate-900 border-slate-900 text-white' : 'bg-white'}`}>
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {isAlumniOpen && (
            <div className="mt-20 bg-slate-50 rounded-[4rem] border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-8 duration-700 shadow-inner">
              <div className="p-12 md:p-16 space-y-6">
                <div className="grid grid-cols-2 gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 px-10 mb-10">
                  <div className="">Identity Asset</div>
                  <div className="">Impact Logic</div>
                </div>
                
                <div className="space-y-4">
                  {ALUMNI.map((alumnus, i) => (
                    <div key={i} className="grid grid-cols-2 gap-10 p-8 bg-white border border-slate-100 rounded-[2rem] items-center hover:border-indigo-200 hover:shadow-xl transition-all group">
                      <div className="text-slate-900 font-bold text-lg tracking-tight group-hover:text-indigo-600">{alumnus.name}</div>
                      <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed group-hover:text-slate-800 transition-colors">
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
