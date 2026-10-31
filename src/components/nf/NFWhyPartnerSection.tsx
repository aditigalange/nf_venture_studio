import React from 'react';
import {
  GraduationCap,
  Building2,
  Coins,
  Landmark,
  Share2,
  Network,
  TrendingUp,
  Users2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface NFPartnershipSectionProps {
  onOpenApplication?: (track?: string) => void;
  isDark?: boolean;
}

export const NFPartnershipSection: React.FC<NFPartnershipSectionProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  const partners = [
    {
      title: 'Academic Institutions',
      icon: GraduationCap,
      points: [
        'Incubation centre establishment',
        'Research and innovation collaboration',
        'Student and faculty engagement',
      ],
    },
    {
      title: 'Industry & Corporates',
      icon: Building2,
      points: [
        'Mentorship and expertise',
        'Technology and infrastructure support',
        'Industry connect and market access',
      ],
    },
    {
      title: 'Investors & Funding Partners',
      icon: Coins,
      points: [
        'Funding opportunities',
        'Investor networking',
        'Pitching and showcase platforms',
      ],
    },
    {
      title: 'Government & Policy Bodies',
      icon: Landmark,
      points: [
        'Policy support and guidance',
        'Access to government schemes',
        'Ecosystem development initiatives',
      ],
    },
  ];

  const benefits = [
    {
      title: 'Shared Innovation',
      desc: 'Co-create solutions for real-world challenges.',
      icon: Share2,
    },
    {
      title: 'Expanded Opportunities',
      desc: 'Access to wider networks and resources.',
      icon: Network,
    },
    {
      title: 'Sustainable Growth',
      desc: 'Enable long-term impact and scale.',
      icon: TrendingUp,
    },
    {
      title: 'A Stronger Ecosystem',
      desc: 'Build collaborative and inclusive innovation communities.',
      icon: Users2,
    },
  ];

  return (
    <section
      id="partnerships"
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#071A38] transition-colors duration-300"
    >
      <div className="section-shell space-y-16">
        
        {/* Section Heading with Authentic Handshake Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-slate-100 dark:bg-[#103B82] text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Partnerships &amp; Engagement</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
              Stronger Together for a Bigger Impact
            </h2>
            <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
              NF Venture Studio collaborates with academic institutions, industry partners, investors and government bodies to build a robust and inclusive startup ecosystem.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-xl max-w-xs group">
              <img
                src="/assets/photos/handshake.jpg"
                alt="Indian startup founders and enterprise partners collaborating at innovation workshop"
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10264A]/90 to-transparent flex items-end p-3">
                <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                  Collaboration Today &bull; A Brighter Tomorrow
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F8FAFC] dark:bg-[#071A38] border border-slate-200 dark:border-[#103B82] shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#1746A2] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-[#103B82] dark:bg-[#18386B] flex items-center justify-center text-[#1746A2]">
                    <Icon className="w-6 h-6 text-[#1746A2] dark:text-[#E8C85A]" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#071A38] dark:text-white leading-snug">
                    {partner.title}
                  </h3>
                  <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-[#103B82]">
                    {partner.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1746A2] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Benefits of Partnership */}
        <div className="space-y-6 pt-2">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-[#071A38] dark:text-white">
              Benefits of Partnership
            </h3>
            <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 mt-1">
              "Collaboration today, a brighter tomorrow."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#071A38]/60 border border-slate-200 dark:border-[#103B82] shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-[#103B82] dark:bg-[#18386B] flex items-center justify-center text-[#1746A2] mx-auto">
                      <Icon className="w-5 h-5 text-[#1746A2] dark:text-[#E8C85A]" />
                    </div>
                    <h4 className="text-sm font-extrabold text-[#071A38] dark:text-white">
                      {b.title}
                    </h4>
                    <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-medium">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partner CTA Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#DCEEFF]/50 via-white to-[#DCEEFF]/40 dark:from-[#10264A] dark:to-[#0A1A33] border-2 border-[#1746A2]/25 text-center shadow-md">
          <div className="space-y-1 max-w-2xl mx-auto">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
              Ecosystem Invitation
            </span>
            <h4 className="text-lg sm:text-xl font-black text-[#071A38] dark:text-white">
              Join Our Innovation &amp; Incubation Network
            </h4>
            <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 max-w-xl font-normal">
              Partner with NF Venture Studio to co-create scalable opportunities for founders, students, and institutional stakeholders.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export const NFWhyPartnerSection = NFPartnershipSection;
