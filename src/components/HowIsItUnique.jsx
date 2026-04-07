import React from 'react';
import { Eye, Activity, Globe, Sparkles, Award } from 'lucide-react';

const FEATURES = [
  { icon: <Eye className="w-6 h-6 text-white" />, title: 'Advanced Eye Evaluation', description: 'Your eyes are assessed in detail using advanced diagnostic equipment including DRS+ Retinal Imaging to detect issues early and plan treatment with precision.' },
  { icon: <Activity className="w-6 h-6 text-white" />, title: 'Minimally Invasive Care', description: 'Modern phacoemulsification techniques make cataract surgery safer, more precise, and more comfortable with faster recovery for every patient.' },
  { icon: <Globe className="w-6 h-6 text-white" />, title: 'Globally Recognized Equipment', description: 'Our facility is equipped with advanced ophthalmic systems for diagnosis, surgical planning, patient safety, and post-operative comfort.' },
  { icon: <Sparkles className="w-6 h-6 text-white" />, title: 'Patient-First Experience', description: 'Every patient is attended to with clear communication and hospitality-trained staff focused on comfort, safety, and confidence at every step of the journey.' },
  { icon: <Award className="w-6 h-6 text-white" />, title: 'Expert-led surgical care', description: 'Dr. Anuja Pasham, Phaco Refractive Surgeon with 14+ years of experience, leads all surgical cases bringing clinical precision and a strong commitment to eye safety to every procedure.' },
];

export default function HowIsItUnique() {
  return (
    <section className="relative rounded-2xl overflow-hidden shadow-xl">
      <div className="absolute inset-0">
        <img src="./assets/how_its_unique.png" alt="Eye examination" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#002d5c]/85 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 p-6 md:p-12 lg:p-18">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8 md:mb-14">Why choose Advanced Focus for cataract care?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {FEATURES.map((f, idx) => (
            <div key={idx} className="flex gap-4 md:gap-5 bg-white/10 backdrop-blur-sm border border-white/20 p-4 md:p-6 rounded-xl md:rounded-2xl hover:bg-white/20 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#00829b] shadow-inner flex items-center justify-center">
                {f.icon}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2 leading-tight">{f.title}</h3>
                <p className="text-xs md:text-[15px] text-gray-200 leading-relaxed font-light">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

