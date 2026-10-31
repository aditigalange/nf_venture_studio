import { Link } from 'react-router-dom';
import React from 'react';
import {
  ExternalLink,
  Landmark,
  Building2,
  ShieldCheck,
  Award,
  Sparkles,
  Compass,
  FileCheck2,
  Layers,
  ArrowUpRight,
  ArrowRight,
  Info,
} from 'lucide-react';

interface NFGovernmentEcosystemSectionProps {
  isDark?: boolean;
}

export const NFGovernmentEcosystemSection: React.FC<NFGovernmentEcosystemSectionProps> = ({
  isDark = false,
}) => {
  // Official Government Innovation Ecosystem Links
  const governmentPortals = [
    {
      id: 'moe',
      acronym: 'MoE',
      name: 'Ministry of Education',
      ministry: 'Government of India',
      url: 'https://www.education.gov.in/',
      domain: 'education.gov.in',
      tag: 'Apex Policy Ministry',
      icon: Landmark,
      description:
        'National policies on higher education, institutional excellence, academic research grants, and university incubation frameworks.',
    },
    {
      id: 'iic',
      acronym: 'IIC',
      name: "Institution's Innovation Council",
      ministry: 'MoE Innovation Cell (MIC)',
      url: 'https://iic.mic.gov.in/',
      domain: 'iic.mic.gov.in',
      tag: 'Campus Innovation Network',
      icon: Award,
      description:
        'Official mandate establishing and ranking innovation councils in Higher Educational Institutions across India to foster student startups.',
    },
    {
      id: 'mca',
      acronym: 'MCA',
      name: 'Ministry of Corporate Affairs',
      ministry: 'Government of India',
      url: 'https://www.mca.gov.in/',
      domain: 'mca.gov.in',
      tag: 'Statutory Administration',
      icon: Building2,
      description:
        'Statutory administration of the Companies Act, Section 8 non-profit incubator incorporation, LLP registration, and corporate governance.',
    },
    {
      id: 'dst',
      acronym: 'DST',
      name: 'Department of Science and Technology',
      ministry: 'Ministry of Science & Technology',
      url: 'https://dst.gov.in/',
      domain: 'dst.gov.in',
      tag: 'National S&T Agency',
      icon: Compass,
      description:
        'Formulating science and technology policies, sponsoring institutional R&D, and promoting scientific innovation across national laboratories and universities.',
    },
    {
      id: 'dpiit',
      acronym: 'DPIIT',
      name: 'Department for Promotion of Industry and Internal Trade',
      ministry: 'Ministry of Commerce & Industry',
      url: 'https://dpiit.gov.in/',
      domain: 'dpiit.gov.in',
      tag: 'Startup India Custodian',
      icon: ShieldCheck,
      description:
        'Custodian of the Startup India initiative, providing official DPIIT recognition, tax exemptions (Section 80-IAC), and industrial development frameworks.',
    },
    {
      id: 'nidhi',
      acronym: 'NIDHI',
      name: 'National Initiative for Developing & Harnessing Innovations',
      ministry: 'DST Innovation Umbrella',
      url: 'https://nidhi.dst.gov.in/',
      domain: 'nidhi.dst.gov.in',
      tag: 'National Umbrella Scheme',
      icon: Layers,
      description:
        'Umbrella scheme nurturing knowledge-based and technology-driven startups, featuring dedicated programmes including NIDHI-PRAYAS and NIDHI-EIR.',
      sublinks: [
        { name: 'NIDHI-PRAYAS Prototyping Grant', url: 'https://nidhi-prayas.org/' },
        { name: 'NIDHI-EIR Fellowship', url: 'https://nidhi-eir.in/' },
      ],
    },
    {
      id: 'niti',
      acronym: 'NITI Aayog',
      name: 'National Institution for Transforming India',
      ministry: 'Apex Policy Think Tank',
      url: 'https://www.niti.gov.in/',
      domain: 'niti.gov.in',
      tag: 'Policy Think Tank',
      icon: FileCheck2,
      description:
        'Premier policy think tank of the Government of India driving national development agendas, Atal Innovation Mission (AIM), and frontier technology ecosystems.',
    },
    {
      id: 'nirf',
      acronym: 'NIRF',
      name: 'National Institutional Ranking Framework',
      ministry: 'Ministry of Education',
      url: 'https://www.nirfindia.org/',
      domain: 'nirfindia.org',
      tag: 'National Ranking Authority',
      icon: Award,
      description:
        'Methodology adopted by the Ministry of Education to rank institutions of higher education across India, including dedicated Innovation and research parameters.',
    },
  ];

  return (
    <section
      id="gov-ecosystem"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] dark:bg-[#071326] text-[#071A38] dark:text-white transition-colors duration-300 relative overflow-hidden border-y border-slate-200 dark:border-[#103B82]/50"
    >
      <div className="section-shell space-y-14">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#1746A2]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
            <Landmark className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>National Innovation Frameworks</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
            Government Innovation Ecosystem &amp; Official Resources
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
            Direct reference portals for official Indian government bodies, ministries, and schemes supporting higher education incubation, research commercialization, and venture development.
          </p>
        </div>

        {/* Official Portals Grid */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {governmentPortals.map((portal) => {
            const Icon = portal.icon;
            return (
              <div
                key={portal.id}
                className="w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] shrink-0 p-6 rounded-2xl bg-white dark:bg-[#0B1E3D] border border-slate-200 dark:border-[#1A3D73] shadow-sm hover:shadow-xl hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Subtle Gold Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1746A2]/20 to-transparent group-hover:via-[#D4AF37] transition-all duration-500" />

                <div className="space-y-4">
                  {/* Top Bar: Acronym Badge, Tag & External Link Icon */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#103B82]/50 text-[#1746A2] dark:text-[#E8C85A] flex items-center justify-center border border-slate-200 dark:border-[#103B82] group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-base font-black font-mono text-[#071A38] dark:text-white tracking-tight">
                          {portal.acronym}
                        </span>
                        <span className="text-[10px] font-mono text-[#52627A] dark:text-slate-400 block -mt-0.5">
                          {portal.ministry}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#103B82]/40 text-[#52627A] dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0">
                      {portal.tag}
                    </span>
                  </div>

                  {/* Institution Full Name */}
                  <h3 className="text-base sm:text-lg font-extrabold text-[#071A38] dark:text-white tracking-tight leading-snug">
                    {portal.name}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                    {portal.description}
                  </p>

                  {/* Sublinks if available (e.g., NIDHI-PRAYAS & EIR) */}
                  {portal.sublinks && (
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                      <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider block">
                        Featured Schemes:
                      </span>
                      {portal.sublinks.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-[#071A38]/70 hover:bg-[#DCEEFF]/50 dark:hover:bg-[#18386B]/60 text-xs font-semibold text-[#1746A2] dark:text-[#E8C85A] transition-colors"
                        >
                          <span className="truncate">{sub.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0 ml-1 text-[#D4AF37]" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Primary Official Redirection Button */}
                <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold bg-slate-50 dark:bg-[#071A38] text-[#1746A2] dark:text-white border border-slate-200 dark:border-[#1A3D73] hover:border-[#D4AF37] hover:bg-[#1746A2] hover:text-white transition-all shadow-xs group/btn cursor-pointer"
                  >
                    <span className="truncate">Visit {portal.domain}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 text-[#D4AF37] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
