import React from 'react';

const stats = [
  { highlight: '14+', label: 'Years of Experience' },
  { highlight: 'Advanced', label: 'Diagnostic Technology' },
  { highlight: 'Minimally', label: 'Invasive Treatment Approach' },
  { highlight: 'NABH', label: 'Accredited Hospital' },
];

function StatItem({ stat, isDesktop }) {
  return (
    <div className="px-2 flex flex-col items-center text-center">
      <div className={`${isDesktop ? 'text-[1.7rem]' : 'text-xl'} font-bold text-white mb-1`}>
        {stat.highlight}
      </div>
      <div className={`${isDesktop ? 'text-base text-teal-100 font-medium' : 'text-xs text-white/80 font-bold uppercase tracking-wide'}`}>
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <>
      {/* Desktop: teal strip inside hero */}
      <div className="hidden lg:block bg-[#00829b]/95 backdrop-blur-md w-full relative z-20 border-t border-white/10">
        <div className="px-6 sm:px-10 lg:px-16 py-8">
          <div className="grid grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <StatItem key={idx} stat={stat} isDesktop />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile & Tablet: Brand Teal Stats Card */}
      <div className="lg:hidden bg-[#00829b] rounded-2xl w-full relative z-20 overflow-hidden shadow-lg border border-white/10">
        <div className="px-5 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 text-center">
            {stats.map((stat, idx) => (
              <StatItem key={idx} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
