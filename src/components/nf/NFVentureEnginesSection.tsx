import React from 'react';
import { Rocket, Zap, Building2 } from 'lucide-react';

interface NFVentureEnginesSectionProps {
  isDark?: boolean;
}

export const NFVentureEnginesSection: React.FC<NFVentureEnginesSectionProps> = ({
  isDark = false,
}) => {
  const engines = [
    {
      icon: Rocket,
      label: 'Incubate',
      sub: 'Pre-incubation & Prototypes',
      desc: 'Cohorts, hackathons, and PoC micro-grants for emerging innovators.',
      stage: 'Engine 01',
    },
    {
      icon: Zap,
      label: 'Build',
      sub: 'MVP & Venture Creation',
      desc: 'Venture studio engineering, validation, and investor readiness.',
      stage: 'Engine 02',
    },
    {
      icon: Building2,
      label: 'Embed',
      sub: 'Incubator-in-a-Box',
      desc: 'End-to-end campus center setup, NIRF & IIC policy alignment.',
      stage: 'Engine 03',
    },
  ];

  return (
    <section
      id="venture-engines"
      className={`py-12 sm:py-16 border-b transition-colors duration-200 ${
        isDark ? 'bg-[#08182D] border-slate-800 text-white' : 'bg-white border-[#DCE3EC] text-[#172334]'
      }`}
    >
      <div className="section-shell">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-3 border transition-colors ${
              isDark
                ? 'bg-slate-900 text-slate-200 border-slate-700'
                : 'bg-[#F7F9FC] text-[#1746A2] border-[#DCE3EC]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden="true" />
            <span>THREE VENTURE ENGINES</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight text-balance ${
              isDark ? 'text-white' : 'text-[#10264A]'
            }`}
          >
            Structured Acceleration for Every Stage of Innovation
          </h2>
          <p
            className={`text-sm sm:text-base max-w-2xl mt-2 text-pretty leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            From prototype grant discovery to turnkey campus centers aligned with national accreditation standards.
          </p>
        </div>

        {/* Three Equal-Width Cards: 3 in a row on Desktop, 2-col on Tablet, stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {engines.map((engine, idx) => {
            const Icon = engine.icon;
            const isLastOnTablet = idx === 2;
            return (
              <div
                key={idx}
                className={`group relative p-6 sm:p-7 rounded-2xl border transition-all duration-200 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-md ${
                  isLastOnTablet ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none lg:w-full' : ''
                } ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 hover:border-slate-700'
                    : 'bg-[#F7F9FC] border-[#DCE3EC] hover:border-slate-300 hover:bg-white'
                }`}
              >
                {/* Top Subtle Gold Indicator Line on hover */}
                <div
                  className="absolute top-0 left-6 right-6 h-0.5 bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full"
                  aria-hidden="true"
                />

                <div>
                  {/* Card Header with Icon and Stage Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200 shrink-0 ${
                        isDark
                          ? 'bg-slate-800 text-sky-400 group-hover:bg-[#1746A2] group-hover:text-white'
                          : 'bg-[#DCEEFF] text-[#1746A2] group-hover:bg-[#1746A2] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                      {engine.stage}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-1 tracking-tight">
                    {engine.label}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-[#D4AF37] mb-3">
                    {engine.sub}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {engine.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
