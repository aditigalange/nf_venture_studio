import React from 'react';
import {
  Building,
  FileText,
  Users2,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

interface NFAboutIntroSectionProps {
  isDark?: boolean;
}

export const NFAboutIntroSection: React.FC<NFAboutIntroSectionProps> = () => {
  const roles = [
    {
      num: '01',
      title: 'Establish Incubation Centres',
      desc: 'Establish and strengthen startup incubation centres across academic institutions.',
      icon: Building,
    },
    {
      num: '02',
      title: 'Support Business Planning',
      desc: 'Support startup establishment and comprehensive business planning.',
      icon: FileText,
    },
    {
      num: '03',
      title: 'Connect with Resources',
      desc: 'Connect innovators with resources, mentorship, networks, and opportunities.',
      icon: Users2,
    },
    {
      num: '04',
      title: 'Encourage Sustainable Growth',
      desc: 'Encourage innovation, cross-sector collaboration, and sustainable growth.',
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="about"
      className="py-18 sm:py-24 lg:py-28 bg-white dark:bg-[#071A38] transition-colors duration-300"
    >
      <div className="section-shell space-y-16 sm:space-y-20">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#103B82]/40 dark:text-[#E8C85A] border border-[#103B82]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>About NF Venture Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A38] dark:text-white tracking-tight">
            A Platform for Ideas, Innovation and Impact
          </h2>
          <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
            NF Venture Studio is focused on building a strong startup ecosystem through academic incubation centres and corporate-level startup management. It connects innovators, entrepreneurs, educational institutions and industry to develop solutions that create real-world value and contribute to a sustainable future.
          </p>
        </div>

        {/* Our Role (4 Cards from brochure) */}
        <div className="space-y-6 pt-2">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-black text-[#071A38] dark:text-white">
              Our Core Role in the Ecosystem
            </h3>
            <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 mt-1">
              Serving as catalyst, incubator, and strategic advisor across four foundational roles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {roles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <div
                  key={idx}
                  className="interactive-card card-spotlight-border p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#071A38] border border-slate-200 dark:border-[#103B82] shadow-sm hover:border-[#1746A2] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#103B82] flex items-center justify-center text-[#1746A2] shadow-xs border border-slate-200/60 dark:border-[#2864C5]/40">
                        <Icon className="w-5 h-5 text-[#1746A2] dark:text-[#E8C85A]" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-[#071A38] dark:text-white leading-snug">
                      {role.title}
                    </h4>
                    <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed">
                      {role.desc}
                    </p>
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
