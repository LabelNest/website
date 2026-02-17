import React, { useState } from 'react';
import { submitToIngest } from '../services/ingestionService';

/* ---------------- PARTNERS DATA (v1 static) ---------------- */
const partners = [
  {
    name: "KG Genius Labs",
    role: "Data Partner – Research & Annotation",
    description:
      "KG Genius Labs supports LabelNest across data collection, structured research, and annotation workflows as part of our extended execution ecosystem.",
    website: "https://kggeniuslabs.com"
	logo: "/partners/kggeniuslabs_logo.png"
  }
];

const Partnerships: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formState, setFormState] = useState({
    entityName: '',
    leadContact: '',
    email: '',
    track: 'System R&D Partner',
    objective: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const success = await submitToIngest({
      name: formState.leadContact,
      email: formState.email,
      message: `Entity: ${formState.entityName} | Track: ${formState.track} | Objective: ${formState.objective}`,
      type: 'partnership'
    });

    setIsSubmitting(false);
    success ? setSubmitted(true) : setError("Handshake Protocol Failed. Please retry.");
  };

  const scrollToForm = (track?: string) => {
    document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' });
    if (track) setFormState(prev => ({ ...prev, track }));
  };

  return (
    <div className="pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <header className="mb-24 text-center">
          <div className="bg-indigo-600 text-white inline-block px-5 py-2 rounded-lg text-[10px] font-black tracking-[0.3em] uppercase mb-10">
            STRATEGIC ALLIANCE v1.2
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">
            Strategic <br /><span className="text-indigo-600">Alliance.</span>
          </h1>
        </header>

        {/* TRACKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: 'System R&D Partner',
              desc: 'Execution, research, annotation, and system-layer collaboration.',
            },
            {
              title: 'Intelligence Resale Partner',
              desc: 'Resell or embed LabelNest datasets via DaaS or APIs.',
            },
            {
              title: 'Channel Partner',
              desc: 'Consulting, agencies, or firms bringing distribution.',
            }
          ].map((t, i) => (
            <div key={i} className="p-10 bg-slate-50 rounded-[3rem]">
              <h3 className="text-2xl font-black mb-4">{t.title}</h3>
              <p className="text-slate-500 text-sm mb-6">{t.desc}</p>
              <button
                onClick={() => scrollToForm(t.title)}
                className="text-xs font-black uppercase tracking-widest text-indigo-600"
              >
                Inquire →
              </button>
            </div>
          ))}
        </div>

        {/* PARTNERS */}
        <section id="partners" className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tight">
              Trusted <span className="text-indigo-600">Partners</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {partners.map((p, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[3rem]">
                <h3 className="text-2xl font-black mb-2">{p.name}</h3>
                <div className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-4">
                  {p.role}
                </div>
                <p className="text-slate-500 text-sm mb-6">{p.description}</p>
                <a
                  href={p.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FORM */}
        <div id="partnership-form" className="max-w-4xl mx-auto">
          {/* form unchanged except select */}
          <select
            name="track"
            value={formState.track}
            onChange={handleInputChange}
            className="w-full border rounded-2xl px-6 py-4"
          >
            <option>System R&D Partner</option>
            <option>Intelligence Resale Partner</option>
            <option>Channel Partner</option>
            <option>Referral Partner (Lifecycle Rewards)</option>
            <option>Operational Alliance (Other)</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default Partnerships;
