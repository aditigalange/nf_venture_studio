import React, { useState, useEffect } from 'react';
import {
  Lightbulb,
  Rocket,
  ShieldCheck,
  Award,
  Sparkles,
  ExternalLink,
  Cpu,
  CheckCircle2,
  Layers,
  GraduationCap,
  Landmark,
  Building2,
  Compass,
  FileCheck2,
  ArrowUpRight,
  ArrowRight,
  Info,
  TrendingUp,
  User,
} from 'lucide-react';

interface NFCoreServicesSectionProps {
  onOpenApplication?: (track?: string) => void;
  isDark?: boolean;
}

export const NFCoreServicesSection: React.FC<NFCoreServicesSectionProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  const [activeTab, setActiveTab] = useState<'academic' | 'individual'>('academic');

  // Synchronize active tab with URL hash for seamless direct linking
  useEffect(() => {
    const handleHash = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash.toLowerCase();
      if (
        hash === '#academic-incubation' ||
        hash === '#academic' ||
        hash === '#pre-incubation' ||
        hash === '#incubation' ||
        hash === '#ipr' ||
        hash === '#iic' ||
        hash === '#digital-cxo-suite' ||
        hash === '#digital-cxo'
      ) {
        setActiveTab('academic');
      } else if (
        hash === '#individual-incubation' ||
        hash === '#individual' ||
        hash === '#individual-startups' ||
        hash === '#startup-services' ||
        hash === '#government-resources' ||
        hash === '#moe' ||
        hash === '#mca' ||
        hash === '#dst' ||
        hash === '#dpiit' ||
        hash === '#nidhi' ||
        hash === '#niti'
      ) {
        setActiveTab('individual');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Option 1: Academic Incubation — Four Core Services
  const academicServices = [
    {
      id: 'pre-incubation',
      num: '01',
      title: 'Pre-Incubation',
      subtitle: 'Early-Stage Ideation & Nurturing',
      icon: Lightbulb,
      tag: 'Stage: Idea to Concept',
      description:
        'Nurture early-stage ideas and prepare them for potential startup development through structured initial guidance, problem discovery, and ideation frameworks.',
      deliverables: [
        'Idea identification and problem-space discovery',
        'Customer persona definition and early validation',
        'Design-thinking bootcamps and feasibility assessment',
        'Refining raw concepts into startup-ready proposals',
      ],
      actionTrack: 'student',
    },
    {
      id: 'incubation',
      num: '02',
      title: 'Incubation',
      subtitle: 'Comprehensive Venture Ecosystem',
      icon: Rocket,
      tag: 'Stage: Concept to Launch',
      description:
        'Provide an ecosystem for research, validation, mentorship, and startup development, supporting ventures through business planning, testing, and market entry.',
      deliverables: [
        'Business model canvas (BMC) and financial planning',
        'Statutory company formation and registration support',
        'Dedicated 1-on-1 industry mentoring and advisory',
        'Investor readiness, pitch clinics, and showcase platforms',
      ],
      actionTrack: 'external',
    },
    {
      id: 'ipr',
      num: '03',
      title: 'IPR (Intellectual Property Rights)',
      subtitle: 'Ownership, Protection & Governance',
      icon: ShieldCheck,
      tag: 'Legal & Asset Protection',
      description:
        'Support innovators in understanding and protecting their intellectual property through appropriate legal mechanisms such as patents, trademarks, and copyrights.',
      deliverables: [
        'Patent drafting clinics, prior-art search, and filing guidance',
        'Trademark, copyright, and industrial design registrations',
        'AICTE-NISP compliant institutional IP governance policies',
        'Technology transfer and commercial licensing advisory',
      ],
      actionTrack: 'faculty',
    },
    {
      id: 'iic',
      num: '04',
      title: "IIC (Institution's Innovation Council)",
      subtitle: 'Campus Innovation Culture',
      icon: Award,
      tag: 'Institutional Mandate',
      description:
        'Support institutional innovation and entrepreneurship activities, fostering a structured campus innovation ecosystem aligned with national ranking standards.',
      deliverables: [
        'Execution of the MoE-IIC annual four-quarter calendar',
        'Organizing campus hackathons, workshops, and idea competitions',
        'Fostering a vibrant innovation and entrepreneurship culture',
        'Maximizing institutional star ratings and accreditation value',
      ],
      actionTrack: 'institutional',
    },
  ];

  // Option 2: Individual Incubation — Official Government and Institutional Resources
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
        'National policies on higher education, institutional excellence, student innovation guidelines, and academic research frameworks.',
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
      tag: 'Corporate Registration',
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
      tag: 'Science & Technology',
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
        'Official custodian of Startup India recognition, tax exemption certifications under Section 80-IAC, and ease of doing business frameworks for ventures.',
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
        'Umbrella scheme nurturing technology-driven startups, featuring dedicated schemes including NIDHI-PRAYAS (prototyping grants) and NIDHI-EIR (fellowships).',
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
      tag: 'National Policy Think Tank',
      icon: FileCheck2,
      description:
        'Premier policy think tank of the Government of India driving national development agendas, Atal Innovation Mission (AIM), and frontier technology ecosystems.',
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#071A38] text-[#071A38] dark:text-white transition-colors duration-300 relative overflow-hidden"
    >
      <div className="section-shell space-y-12">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Incubation Services &amp; Resources</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A38] dark:text-white tracking-tight">
            What We Offer
          </h2>

          <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
            Choose between specialized incubation services for academic institutions or official national innovation ecosystem portals for individual innovators.
          </p>
        </div>

        {/* Segmented Option Selector: Academic Incubation vs Individual Incubation */}
        <div className="flex justify-center">
          <div
            role="tablist"
            aria-label="Incubation service options"
            className="inline-flex max-w-full p-1.5 rounded-2xl bg-slate-100 dark:bg-[#0A1D3B] border border-slate-200 dark:border-[#1A3D73] shadow-inner gap-1 sm:gap-1.5 flex-wrap sm:flex-nowrap justify-center"
          >
            <button
              id="tab-academic"
              role="tab"
              aria-selected={activeTab === 'academic'}
              aria-controls="tabpanel-academic"
              type="button"
              onClick={() => setActiveTab('academic')}
              className={`inline-flex items-center justify-center gap-2 px-3.5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 flex-1 sm:flex-none ${
                activeTab === 'academic'
                  ? 'bg-[#1746A2] text-white shadow-md border border-[#D4AF37]/60 scale-[1.01]'
                  : 'text-[#52627A] dark:text-slate-300 hover:text-[#071A38] dark:hover:text-white'
              }`}
            >
              <GraduationCap className={`w-4 h-4 ${activeTab === 'academic' ? 'text-[#D4AF37]' : ''}`} />
              <span>Academic Incubation</span>
            </button>

            <button
              id="tab-individual"
              role="tab"
              aria-selected={activeTab === 'individual'}
              aria-controls="tabpanel-individual"
              type="button"
              onClick={() => setActiveTab('individual')}
              className={`inline-flex items-center justify-center gap-2 px-3.5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 flex-1 sm:flex-none ${
                activeTab === 'individual'
                  ? 'bg-[#1746A2] text-white shadow-md border border-[#D4AF37]/60 scale-[1.01]'
                  : 'text-[#52627A] dark:text-slate-300 hover:text-[#071A38] dark:hover:text-white'
              }`}
            >
              <User className={`w-4 h-4 ${activeTab === 'individual' ? 'text-[#D4AF37]' : ''}`} />
              <span>Individual Incubation</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            OPTION 1: ACADEMIC INCUBATION CONTENT
            (Contains ONLY: Pre-Incubation, Incubation, IPR, IIC + Digital CXO Suite)
           ========================================================================= */}
        {activeTab === 'academic' && (
          <div id="academic-incubation" role="tabpanel" aria-labelledby="tab-academic" className="space-y-12 animate-fadeIn scroll-mt-24">
            {/* Four Core Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {academicServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="rounded-3xl bg-[#F8FAFC] dark:bg-[#0A1D3B]/90 border border-slate-200 dark:border-[#1A3D73] p-7 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden scroll-mt-24"
                  >
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1746A2]/20 to-transparent group-hover:via-[#D4AF37] transition-all duration-500" />

                    <div className="space-y-4">
                      {/* Service Header: Icon & Title */}
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#1746A2] text-white flex items-center justify-center shadow-md group-hover:rotate-3 transition-transform duration-300 shrink-0">
                          <Icon className="w-6 h-6 text-[#D4AF37]" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-[#071A38] dark:text-white tracking-tight">
                          {service.title}
                        </h3>
                      </div>

                      {/* Subtitle */}
                      <p className="text-xs font-semibold text-[#1746A2] dark:text-sky-300 uppercase tracking-wide">
                        {service.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                        {service.description}
                      </p>


                      {/* Deliverables Checklist */}
                      <div className="space-y-2 pt-2 border-t border-slate-200/80 dark:border-slate-800">
                        <span className="text-[11px] font-mono font-bold text-[#52627A] dark:text-slate-400 uppercase tracking-wider block">
                          Core Focus Areas:
                        </span>
                        {service.deliverables.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#52627A] dark:text-slate-300 font-normal leading-relaxed"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1746A2] dark:text-[#60A5FA] mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Link */}
                    {(service.id === 'iic' || service.id === 'ipr') && (
                      <div className="pt-5 mt-5 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-start">
                        {service.id === 'iic' ? (
                          <a
                            href="/iic"
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#1746A2] dark:text-[#E8C85A] hover:text-[#D4AF37] transition-colors"
                          >
                            <span>IIC Guide &amp; Portals</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <a
                            href="/ipr"
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#1746A2] dark:text-[#E8C85A] hover:text-[#D4AF37] transition-colors"
                          >
                            <span>IPR Services &amp; Directory</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Additional Service under Academic Incubation: Digital CXO Suite */}
            <div id="digital-cxo-suite" className="rounded-3xl p-7 sm:p-9 lg:p-11 bg-gradient-to-br from-[#071A38] via-[#0C244D] to-[#103B82] text-white border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden scroll-mt-24">
              <div className="relative z-10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#E8C85A] border border-[#D4AF37]/40">
                      <Cpu className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Additional Service &bull; Academic Incubation</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      Digital CXO Suite
                    </h3>
                  </div>

                  <span className="text-[11px] font-mono text-sky-200 px-3 py-1 rounded-lg bg-white/10 border border-white/20 self-start sm:self-auto">
                    Executive Digital Advisory
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal">
                  An on-demand digital services offering designed specifically to empower academic incubation centres and campus ventures with corporate-grade digital leadership, software architecture, and systems strategy.
                </p>

                {/* 4 Capabilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      title: 'Fractional CTO Advisory',
                      desc: 'Technology stack evaluation, software architecture planning, and scalable MVP engineering.',
                    },
                    {
                      title: 'Digital Systems & Cloud',
                      desc: 'Cloud environment management, database security, server architecture, and automation.',
                    },
                    {
                      title: 'Product & Workflow Strategy',
                      desc: 'Agile development guidance, sprint structuring, technical roadmaps, and digital portals.',
                    },
                    {
                      title: 'Cybersecurity & Compliance',
                      desc: 'Data security hygiene, system access control, digital asset records, and safe development.',
                    },
                  ].map((cxo, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/60 hover:bg-white/10 transition-all duration-300 space-y-2"
                    >
                      <h4 className="text-sm font-bold text-white tracking-tight">{cxo.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">{cxo.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
                  <a
                    href="/digital-cxo-suite"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white hover:text-[#D4AF37] border border-white/20 hover:border-[#D4AF37] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <span>View All 11 CXO Roles</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {onOpenApplication && (
                    <button
                      type="button"
                      onClick={() => onOpenApplication('institutional')}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-[#071A38] hover:bg-[#D4AF37] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
                    >
                      Consult Digital CXO Suite
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            OPTION 2: INDIVIDUAL INCUBATION CONTENT
            (Contains ONLY: Official Government & Institutional Resource Links)
           ========================================================================= */}
        {activeTab === 'individual' && (
          <div id="individual-incubation" role="tabpanel" aria-labelledby="tab-individual" className="space-y-8 animate-fadeIn scroll-mt-24">
            {/* Canonical Pathway Bridges for Individual Founders & Startups */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {/* Canonical Digital CXO Suite Link Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0B1E3D] border border-slate-200 dark:border-[#1A3D73] flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-md transition-all group">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#103B82]/50 text-[#1746A2] dark:text-[#E8C85A] flex items-center justify-center border border-slate-200 dark:border-[#103B82] group-hover:scale-105 transition-transform">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider block">
                        Canonical Service
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#071A38] dark:text-white tracking-tight">
                        Digital CXO Suite for Startups
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                    On-demand fractional digital leadership and systems advisory for scaling ventures. Access technology architecture, cloud management, workflow strategy, and cybersecurity guidance.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
                  <a
                    href="/digital-cxo-suite"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1746A2] dark:text-[#E8C85A] hover:text-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md px-1 py-0.5"
                  >
                    <span>Explore Canonical Digital CXO Suite</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Canonical Funding & Grants Link Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0B1E3D] border border-slate-200 dark:border-[#1A3D73] flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-md transition-all group">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#103B82]/50 text-[#1746A2] dark:text-[#E8C85A] flex items-center justify-center border border-slate-200 dark:border-[#103B82] group-hover:scale-105 transition-transform">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider block">
                        Canonical Desk
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#071A38] dark:text-white tracking-tight">
                        Funding &amp; Grants Facilitation
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                    Facilitation and proposal readiness for national grant programmes (DST INSPIRE, NIDHI-PRAYAS, NIDHI-EIR, SISFS). Advisory support without direct fund disbursal or funding guarantees.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between">
                  <a
                    href="/funding-and-grants"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1746A2] dark:text-[#E8C85A] hover:text-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md px-1 py-0.5"
                  >
                    <span>View Funding &amp; Grants Desk</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Official Portals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {governmentPortals.map((portal) => {
                const Icon = portal.icon;
                return (
                  <div
                    key={portal.id}
                    id={portal.id}
                    className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0B1E3D] border border-slate-200 dark:border-[#1A3D73] shadow-sm hover:shadow-xl hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden scroll-mt-24"
                  >
                    <div className="space-y-4">
                      {/* Top Bar: Icon, Acronym & Tag */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#103B82]/50 text-[#1746A2] dark:text-[#E8C85A] flex items-center justify-center border border-slate-200 dark:border-[#103B82] group-hover:scale-105 transition-transform">
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

                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-[#103B82]/40 text-[#52627A] dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0">
                          {portal.tag}
                        </span>
                      </div>

                      {/* Full Name */}
                      <h3 className="text-base sm:text-lg font-extrabold text-[#071A38] dark:text-white tracking-tight leading-snug">
                        {portal.name}
                      </h3>

                      {/* Summary */}
                      <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                        {portal.description}
                      </p>

                      {/* Sublinks if available (e.g. NIDHI-PRAYAS & EIR) */}
                      {portal.sublinks && (
                        <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800 space-y-1.5">
                          <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider block">
                            Key Schemes:
                          </span>
                          {portal.sublinks.map((sub, sIdx) => (
                            <a
                              key={sIdx}
                              href={sub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-[#071A38]/70 hover:bg-[#DCEEFF]/50 dark:hover:bg-[#18386B]/60 text-xs font-semibold text-[#1746A2] dark:text-[#E8C85A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                            >
                              <span className="truncate">{sub.name}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 ml-1 text-[#D4AF37]" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Redirection Button */}
                    <div className="pt-5 mt-5 border-t border-slate-200/70 dark:border-slate-800">
                      <a
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold bg-white dark:bg-[#071A38] text-[#1746A2] dark:text-white border border-slate-200 dark:border-[#1A3D73] hover:border-[#D4AF37] hover:bg-[#1746A2] hover:text-white transition-all shadow-xs group/btn cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2"
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
        )}
      </div>
    </section>
  );
};
