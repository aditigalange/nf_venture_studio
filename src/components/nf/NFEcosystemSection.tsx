import React from 'react';
import {
  GraduationCap,
  Building2,
  Users,
  Lightbulb,
  Handshake,
  Landmark,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  BookOpen,
  Rocket,
  Briefcase,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';

interface NFEcosystemSectionProps {
  onOpenApplication?: (track?: string) => void;
  isDark?: boolean;
}

export const NFEcosystemSection: React.FC<NFEcosystemSectionProps> = ({
  isDark = false,
}) => {
  const academicPoints = [
    'Establishing incubation centres across academic institutions.',
    'Enabling students, researchers and innovators to develop startup ideas.',
    'Supporting institutional incubation infrastructure and programmes.',
    'Encouraging innovation and entrepreneurship within academic environments.',
  ];

  const corporatePoints = [
    'Startup establishment and implementation.',
    'Business planning and strategy development.',
    'Growth planning for early-stage ventures.',
    'Long-term startup development and support.',
  ];

  const ecosystemStakeholders = [
    {
      name: 'Academic Institutions',
      value: 'Knowledge & Talent',
      icon: GraduationCap,
      badgeIcon: BookOpen,
      theme: 'navy',
      desc: 'Partnering on campus incubation centres and enabling student and faculty innovation.',
    },
    {
      name: 'Innovators & Researchers',
      value: 'Ideas & Research',
      icon: Users,
      badgeIcon: Sparkles,
      theme: 'gold',
      desc: 'Enabling students, researchers, and innovators to transform creative ideas and research into viable ventures.',
    },
    {
      name: 'Entrepreneurs & Startups',
      value: 'Innovation & Execution',
      icon: Lightbulb,
      badgeIcon: Rocket,
      theme: 'navy',
      desc: 'Providing structured incubation support, business planning, and startup execution pathways.',
    },
    {
      name: 'Industry & Corporates',
      value: 'Expertise & Collaboration',
      icon: Building2,
      badgeIcon: Briefcase,
      theme: 'gold',
      desc: 'Connecting domain mentorship, industry problem statements, and corporate market collaboration.',
    },
    {
      name: 'Investors & Funding Partners',
      value: 'Capital & Opportunities',
      icon: Handshake,
      badgeIcon: TrendingUp,
      theme: 'navy',
      desc: 'Facilitating investor networking, pitch platforms, and venture funding opportunities.',
    },
    {
      name: 'Government & Support Organizations',
      value: 'Policy & Ecosystem Support',
      icon: Landmark,
      badgeIcon: ShieldCheck,
      theme: 'gold',
      desc: 'Facilitating policy guidance, access to government schemes, and regional innovation initiatives.',
    },
  ];

  return (
    <section
      id="ecosystem"
      className="pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-22 lg:pb-26 bg-white dark:bg-[#071A38] text-[#071A38] dark:text-white transition-colors duration-300"
    >
      <div className="section-shell space-y-14 sm:space-y-18">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#103B82]/80 dark:text-[#E8C85A] border border-[#103B82]/20 dark:border-[#D4AF37]/40 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Incubator &amp; Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A38] dark:text-white tracking-tight">
            Building a Connected Startup Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
            Operating as a startup incubator and ecosystem enabler, helping institutions develop incubation capabilities and supporting startups through structured guidance.
          </p>
        </div>

        {/* Two Core Pillars with Professional Commercial Photos & Micro-Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Pillar 1: Academic Startup Ecosystem Building */}
          <div className="interactive-card card-spotlight-border rounded-3xl bg-[#F8FAFC] dark:bg-[#071A38]/90 border border-slate-200 dark:border-[#103B82] shadow-sm hover:shadow-2xl overflow-hidden flex flex-col justify-between group transition-all duration-500">
            
            {/* Cinematic Academic Photo Banner with Micro-Animations */}
            <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900 group/image">
              <img
                src="/assets/photos/academic_campus.jpg"
                alt="Indian engineering students collaborating at electronics and practical innovation workbench"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                loading="eager"
              />
              {/* Vignette Gradients for High Contrast & Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A38] via-[#071A38]/30 to-black/30" />
              
              {/* Sweeping Shimmer Gleam on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              {/* Floating Top-Left Micro-Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl backdrop-blur-md bg-[#071A38]/75 border border-white/25 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <GraduationCap className="w-5 h-5 text-[#E8C85A]" />
                </div>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md bg-black/50 text-white border border-white/20 shadow-xs">
                  CAMPUS INCUBATOR
                </span>
              </div>

              {/* Floating Bottom Metadata & Live Pulse */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#1746A2] text-white border border-[#D4AF37]/50 shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8C85A] animate-pulse" />
                  Pillar 01
                </span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-black/50 text-sky-200 border border-sky-400/30 shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
                  </span>
                  <span>Institutional Incubation</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#071A38] dark:text-white group-hover:text-[#1746A2] dark:group-hover:text-[#60A5FA] transition-colors duration-300">
                  Academic Startup Ecosystem Building
                </h3>
                <div className="space-y-2 pt-4">
                  {academicPoints.map((pt, i) => (
                    <div
                      key={i}
                      className="group/item flex items-start gap-3 p-2 -mx-2 rounded-xl transition-all duration-200 hover:bg-[#DCEEFF]/50 dark:hover:bg-[#103B82]/30"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1746A2] dark:text-[#2864C5] shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-200" />
                      <span className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed font-medium">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom expanding accent line on card hover */}
              <div className="pt-2">
                <div className="h-1 w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full bg-gradient-to-r from-[#1746A2] via-[#2864C5] to-[#D4AF37]" />
              </div>
            </div>

          </div>

          {/* Pillar 2: Corporate-Level Startup Management */}
          <div className="interactive-card card-spotlight-border rounded-3xl bg-[#F8FAFC] dark:bg-[#071A38]/90 border border-slate-200 dark:border-[#103B82] shadow-sm hover:shadow-2xl overflow-hidden flex flex-col justify-between group transition-all duration-500">
            
            {/* Cinematic Corporate Management Photo Banner with Micro-Animations */}
            <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900 group/image">
              <img
                src="/assets/photos/corporate_management.jpg"
                alt="Indian startup founders and enterprise mentors in business strategy and product roadmap session"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                loading="eager"
              />
              {/* Vignette Gradients for High Contrast & Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A38] via-[#071A38]/30 to-black/30" />
              
              {/* Sweeping Shimmer Gleam on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

              {/* Floating Top-Left Micro-Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl backdrop-blur-md bg-amber-500/20 border border-amber-300/40 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Building2 className="w-5 h-5 text-[#E8C85A]" />
                </div>
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md bg-black/50 text-amber-200 border border-amber-300/30 shadow-xs">
                  VENTURE STUDIO
                </span>
              </div>

              {/* Floating Bottom Metadata & Live Pulse */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#D4AF37] text-[#071A38] shadow-md flex items-center gap-1.5 font-extrabold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#071A38] animate-pulse" />
                  Pillar 02
                </span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-black/50 text-amber-200 border border-amber-400/30 shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                  </span>
                  <span>Enterprise Strategy</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#071A38] dark:text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                  Corporate-Level Startup Management
                </h3>
                <div className="space-y-2 pt-4">
                  {corporatePoints.map((pt, i) => (
                    <div
                      key={i}
                      className="group/item flex items-start gap-3 p-2 -mx-2 rounded-xl transition-all duration-200 hover:bg-[#DCEEFF]/50 dark:hover:bg-[#103B82]/30"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform duration-200" />
                      <span className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed font-medium">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom expanding accent line on card hover */}
              <div className="pt-2">
                <div className="h-1 w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full bg-gradient-to-r from-[#D4AF37] via-amber-400 to-[#1746A2]" />
              </div>
            </div>

          </div>

        </div>

        {/* The 6 Connected Ecosystem Stakeholders with Elevated Icons & Rich Animations */}
        <div className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#1746A2]/10 text-[#1746A2] dark:bg-[#103B82] dark:text-sky-300 border border-[#1746A2]/20 dark:border-sky-400/30">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Multi-Stakeholder Synergies</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071A38] dark:text-white tracking-tight">
              Our Connected Ecosystem Network
            </h3>
            <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 max-w-xl mx-auto">
              Hub &amp; Spoke integration centered around NF Venture Studio Startup Incubator.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {ecosystemStakeholders.map((item, idx) => {
              const Icon = item.icon;
              const BadgeIcon = item.badgeIcon;
              const isGold = item.theme === 'gold';
              return (
                <div
                  key={idx}
                  className={`relative overflow-hidden rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl cursor-default ${
                    isGold
                      ? 'bg-gradient-to-br from-white via-[#FFFDF5] to-[#FCF8EC] dark:from-[#071A38] dark:via-[#092042] dark:to-[#0C2B5B] border-amber-200/70 dark:border-[#D4AF37]/30 hover:border-[#D4AF37] dark:hover:border-[#E8C85A] shadow-sm hover:shadow-amber-500/10'
                      : 'bg-gradient-to-br from-white via-[#F7FAFD] to-[#EDF4FC] dark:from-[#071A38] dark:via-[#081F42] dark:to-[#0A2754] border-slate-200 dark:border-[#103B82] hover:border-[#1746A2] dark:hover:border-sky-400 shadow-sm hover:shadow-[#1746A2]/10'
                  }`}
                >
                  {/* Subtle Background Watermark Icon for Rich Depth */}
                  <div className="absolute -right-3 -bottom-3 pointer-events-none opacity-[0.04] dark:opacity-[0.07] group-hover:opacity-[0.09] dark:group-hover:opacity-[0.14] transition-all duration-500 transform group-hover:scale-125 group-hover:-rotate-12 text-[#071A38] dark:text-white">
                    <Icon className="w-36 h-36" />
                  </div>

                  <div className="relative z-10 space-y-4">
                    {/* Top Row: Dual-Tone Animated Icon Box + Number & Shift Arrow */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110 group-hover:rotate-3 ${
                          isGold
                            ? 'bg-gradient-to-br from-[#E5C158] to-[#B38F24] text-[#071A38] shadow-[#D4AF37]/30 ring-4 ring-amber-500/15 group-hover:ring-amber-500/35'
                            : 'bg-gradient-to-br from-[#1746A2] to-[#0A2660] text-white shadow-[#1746A2]/30 ring-4 ring-[#1746A2]/15 group-hover:ring-[#1746A2]/35'
                        }`}
                      >
                        <Icon className="w-7 h-7 transition-transform duration-300" />
                      </div>

                      {/* Number Badge & Micro-Action Arrow */}
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold tracking-wider text-slate-400 dark:text-slate-500 group-hover:text-[#071A38] dark:group-hover:text-white transition-colors duration-300">
                          0{idx + 1}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isGold
                              ? 'bg-amber-500/10 text-[#B38F24] dark:text-[#E8C85A] group-hover:bg-[#D4AF37] group-hover:text-[#071A38]'
                              : 'bg-[#103B82]/10 text-[#1746A2] dark:text-sky-300 group-hover:bg-[#1746A2] group-hover:text-white'
                          }`}
                        >
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Stakeholder Name & Value Pill */}
                    <div className="space-y-1.5 pt-1">
                      <h4 className="text-lg font-black text-[#071A38] dark:text-white tracking-tight leading-snug group-hover:text-[#1746A2] dark:group-hover:text-[#E8C85A] transition-colors duration-300">
                        {item.name}
                      </h4>

                      {/* Value Pill Badge with Micro-Icon */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide transition-colors ${
                          isGold
                            ? 'bg-amber-500/15 text-[#8F7015] dark:bg-[#D4AF37]/20 dark:text-[#E8C85A] border border-[#D4AF37]/30'
                            : 'bg-[#103B82]/10 text-[#1746A2] dark:bg-[#103B82]/70 dark:text-sky-300 border border-[#1746A2]/20 dark:border-sky-400/30'
                        }`}
                      >
                        <BadgeIcon className="w-3.5 h-3.5" />
                        <span>{item.value}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Expanding Bottom Brand Accent Line */}
                  <div className="relative z-10 pt-4 mt-2">
                    <div
                      className={`h-1 w-8 group-hover:w-full transition-all duration-500 ease-out rounded-full ${
                        isGold
                          ? 'bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#D4AF37]'
                          : 'bg-gradient-to-r from-[#1746A2] via-sky-400 to-[#1746A2]'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
