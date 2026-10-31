import { Link } from 'react-router-dom';
import React from 'react';
import {
  Coins,
  Sparkles,
  ExternalLink,
  ShieldAlert,
  ArrowUpRight,
  ArrowRight,
  GraduationCap,
  FlaskConical,
  Rocket,
  CheckCircle2,
  FileText,
  Building2,
} from 'lucide-react';

interface NFFundingGrantsSectionProps {
  onOpenApplication?: (track?: string) => void;
  isDark?: boolean;
}

export const NFFundingGrantsSection: React.FC<NFFundingGrantsSectionProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  // Verified Official Funding & Grant Schemes
  const fundingSchemes = [
    {
      id: 'inspire',
      title: 'DST INSPIRE Programme',
      fullName: 'Innovation in Science Pursuit for Inspired Research',
      agency: 'Department of Science & Technology (DST)',
      officialUrl: 'https://online-inspire.gov.in/',
      scope: 'Research Fellowships & Science Talent',
      icon: GraduationCap,
      description:
        'A flagship initiative by the DST to attract talent to science and foster scientific research from school students to doctoral researchers and faculty fellows.',
      eligibility: 'Science students, doctoral scholars, faculty researchers, and academic institutions.',
      keyOffering: 'Competitive scientific research fellowships and institutional research grant linkages.',
    },
    {
      id: 'prayas',
      title: 'NIDHI-PRAYAS Scheme',
      fullName: 'PRomoting and Accelerating Young and ASpiring innovators & startups',
      agency: 'National Initiative for Developing and Harnessing Innovations (DST)',
      officialUrl: 'https://nidhi-prayas.org/',
      scope: 'Proof-of-Concept & Hardware Prototyping',
      icon: FlaskConical,
      description:
        'Proof-of-concept prototyping support enabling young innovators to convert ideas into workable prototypes through recognized PRAYAS incubation centres.',
      eligibility: 'Individual innovators, student innovators, and early-stage prototype developers.',
      keyOffering: 'Up to ₹10 Lakhs prototyping grant support with fabrication lab access.',
    },
    {
      id: 'eir',
      title: 'NIDHI-EIR Support',
      fullName: 'Entrepreneurs-in-Residence Programme',
      agency: 'National Initiative for Developing and Harnessing Innovations (DST)',
      officialUrl: 'https://nidhi-eir.in/',
      scope: 'Founder Subsistence & Full-Time Incubation',
      icon: Rocket,
      description:
        'Provides grant-in-aid subsistence support to aspiring technology entrepreneurs willing to pursue promising ideas on a full-time commitment.',
      eligibility: 'Graduating engineers, researchers, and early-stage technology entrepreneurs.',
      keyOffering: 'Monthly fellowship grant (up to ₹30,000/month for up to 18 months).',
    },
    {
      id: 'sisfs',
      title: 'Startup India Seed Fund Scheme (SISFS)',
      fullName: 'DPIIT Startup India Seed Fund Scheme',
      agency: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
      officialUrl: 'https://seedfund.startupindia.gov.in/',
      scope: 'Early Capital, Proof of Concept & Market Entry',
      icon: Coins,
      description:
        'Financial assistance to early-stage DPIIT-recognized startups for proof of concept, prototype trials, product development, and commercial market launch.',
      eligibility: 'DPIIT-recognized startups incorporated within the last 2 years with a viable PoC.',
      keyOffering: 'Grants up to ₹20 Lakhs for validation/trials, and debt/convertible up to ₹50 Lakhs.',
    },
  ];

  return (
    <section
      id="funding-grants"
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#071A38] text-[#071A38] dark:text-white transition-colors duration-300 relative overflow-hidden"
    >
      <div className="section-shell space-y-14">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
            <Coins className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Capital &amp; Grant Navigation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
            Funding &amp; Grants
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
            Facilitating access to verified government funding programmes, competitive seed capital, and national prototyping fellowships for academic innovators.
          </p>
        </div>

        {/* Funding Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {fundingSchemes.map((scheme) => {
            const Icon = scheme.icon;
            return (
              <div
                key={scheme.id}
                className="p-7 sm:p-8 rounded-3xl bg-[#F8FAFC] dark:bg-[#0A1D3B]/90 border border-slate-200 dark:border-[#1A3D73] shadow-sm hover:shadow-xl hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Subtle Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1746A2]/20 to-transparent group-hover:via-[#D4AF37] transition-all duration-500" />

                <div className="space-y-4">
                  {/* Top Bar: Icon, Title & Scope */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#1746A2] text-white flex items-center justify-center shadow-md group-hover:rotate-3 transition-transform">
                        <Icon className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#D4AF37] tracking-wider uppercase block">
                          {scheme.scope}
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-[#071A38] dark:text-white tracking-tight">
                          {scheme.title}
                        </h3>
                      </div>
                    </div>

                    <a
                      href={scheme.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-400 hover:text-[#1746A2] dark:hover:text-[#D4AF37] hover:bg-slate-100 dark:hover:bg-[#103B82]/50 transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                      title="Open official scheme page"
                      aria-label={`Open official ${scheme.title} portal`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Administering Agency */}
                  <div className="text-xs font-mono font-semibold text-[#1746A2] dark:text-sky-300">
                    Administered by: {scheme.agency}
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                    {scheme.description}
                  </p>

                  {/* Key Offering & Eligibility */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/70 dark:border-slate-800 text-xs">
                    <div>
                      <strong className="text-[#071A38] dark:text-white font-semibold">Key Support: </strong>
                      <span className="text-[#52627A] dark:text-slate-300">{scheme.keyOffering}</span>
                    </div>
                    <div>
                      <strong className="text-[#071A38] dark:text-white font-semibold">Eligibility: </strong>
                      <span className="text-[#52627A] dark:text-slate-300">{scheme.eligibility}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Redirection */}
                <div className="pt-6 mt-6 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between gap-3">
                  <a
                    href={scheme.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1746A2] dark:text-[#E8C85A] hover:text-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md px-1 py-0.5"
                  >
                    <span>Visit Official Portal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Dedicated Canonical Funding & Grants Page */}
        <div className="pt-2 text-center">
          <Link
            to="/funding-and-grants"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0A1D3B] text-[#1746A2] dark:text-[#E8C85A] font-bold text-xs sm:text-sm border border-slate-200 dark:border-[#1A3D73] hover:border-[#D4AF37] hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>Explore Full Funding &amp; Grants Directory (All Schemes &amp; Capital Pathways)</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
