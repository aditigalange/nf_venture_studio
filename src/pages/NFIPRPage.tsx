import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFFooter } from '../components/nf/NFFooter';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { NFBrochureModal } from '../components/nf/NFBrochureModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNFTheme } from '../hooks/useNFTheme';
import {
  ShieldCheck,
  FileCheck2,
  Lock,
  Scale,
  Sparkles,
  ExternalLink,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Info,
  BookOpen,
  Layers,
  GraduationCap,
  FlaskConical,
  Rocket,
  Building2,
  Search,
  Key,
  Globe,
  FileText,
  Clock,
  Compass,
  Cpu,
} from 'lucide-react';

interface IPRCategory {
  id: string;
  name: string;
  type: string;
  badge: string;
  badgeColor: string;
  officialUrl: string;
  officialLabel: string;
  whatItProtects: string;
  whoNeedsIt: string;
  nfvsSupport: string;
  keyConsiderations: string[];
}

export const NFIPRPage: React.FC = () => {
  const { theme, isDark, toggleTheme } = useNFTheme();

  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('ipr');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFilter, setActiveFilter] = useState<'all' | 'statutory' | 'trade-secrets' | 'strategy'>('all');

  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenApplication = (track: string = 'ipr') => {
    setSelectedTrack(track);
    setIsAppModalOpen(true);
  };

  const handleOpenBrochure = () => {
    setIsBrochureOpen(true);
  };

  // 9 Required IPR Categories
  const iprCategories: IPRCategory[] = [
    {
      id: 'patent',
      name: 'Patent Protection',
      type: 'Statutory Registry',
      badge: 'Inventions & Technology',
      badgeColor: 'bg-blue-50 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      officialUrl: 'https://ipindia.gov.in/',
      officialLabel: 'Indian Patent Office (IP India)',
      whatItProtects:
        'Protects eligible novel, non-obvious, and industrially applicable inventions, products, formulations, hardware architectures, and technological processes meeting statutory criteria under the Patents Act, 1970.',
      whoNeedsIt:
        'Engineering innovators, university researchers, deep-tech startups, hardware inventors, and laboratory teams creating novel technical solutions.',
      nfvsSupport:
        'Supports structured invention disclosure documentation, preliminary patent search awareness, technical specification framing, and referral to registered patent agents/attorneys for formal statutory filings.',
      keyConsiderations: [
        'Must establish novelty, inventive step, and industrial applicability',
        'Requires rigorous pre-filing secrecy before publication or conference presentation',
        'Provisional patent filing establishes legal priority date for 12 months',
      ],
    },
    {
      id: 'copyright',
      name: 'Copyright Protection',
      type: 'Statutory Registry',
      badge: 'Literary & Software Works',
      badgeColor: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      officialUrl: 'https://ipindia.gov.in/',
      officialLabel: 'Copyright Office / IP India',
      whatItProtects:
        'Covers eligible original literary, artistic, dramatic, musical, cinematographic, and sound recording works, as well as computer software source code, object code, and digital documentation under the Copyright Act, 1957.',
      whoNeedsIt:
        'Software developers, digital platform creators, educators, authors, UI/UX designers, media startups, and algorithm creators.',
      nfvsSupport:
        'Provides software copyright awareness, source code deposit structuring, authorship vs. ownership documentation, licensing agreements, and official registration-process guidance.',
      keyConsiderations: [
        'Protects the specific expression of ideas, not the underlying idea itself',
        'Software code is protected as a literary work under Indian copyright law',
        'Documentation of employee/contractor intellectual property assignment is essential',
      ],
    },
    {
      id: 'trademark',
      name: 'Trademark & Brand Identity',
      type: 'Statutory Registry',
      badge: 'Brand Assets & Distinctiveness',
      badgeColor: 'bg-amber-50 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      officialUrl: 'https://ipindia.gov.in/',
      officialLabel: 'Trade Marks Registry (IP India)',
      whatItProtects:
        'Protects distinctive brand identifiers including brand names, product titles, logos, monograms, taglines, symbols, and packaging combinations used to distinguish goods or services under the Trade Marks Act, 1999.',
      whoNeedsIt:
        'Early-stage startups, consumer brands, academic spin-offs, software products, and service enterprises building customer recognition.',
      nfvsSupport:
        'Assists with preliminary trademark classification searches across Nice Classifications, brand distinctiveness evaluation, trademark application preparation guidance, and attorney referrals.',
      keyConsiderations: [
        'Distinctive and arbitrary marks offer stronger legal defensibility than descriptive terms',
        'Preliminary searches prevent inadvertent trademark infringement of registered brands',
        'Trademark registration can be renewed indefinitely every 10 years',
      ],
    },
    {
      id: 'industrial-design',
      name: 'Industrial Design Registration',
      type: 'Statutory Registry',
      badge: 'Aesthetic & Visual Form',
      badgeColor: 'bg-purple-50 text-purple-800 dark:bg-purple-950/70 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      officialUrl: 'https://ipindia.gov.in/',
      officialLabel: 'Designs Office (IP India)',
      whatItProtects:
        'Protects novel ornamental, geometric, or aesthetic visual features—including shape, configuration, surface pattern, or composition of lines/colors applied to an article under the Designs Act, 2000.',
      whoNeedsIt:
        'Industrial designers, IoT hardware creators, wearable tech startups, medical device innovators, consumer electronic manufacturers, and automotive prototypers.',
      nfvsSupport:
        'Guides design drawing standards, perspective view documentation, prior aesthetic disclosure checks, and application packaging for registration with the Designs Office.',
      keyConsiderations: [
        'Protects exclusively aesthetic and visual appearance, not underlying functional mechanisms',
        'Must be new or original and not previously published in India or abroad',
        'Provides initial 10-year protection extendable by an additional 5 years',
      ],
    },
    {
      id: 'geographical-indications',
      name: 'Geographical Indications (GI)',
      type: 'Statutory Registry',
      badge: 'Regional & Heritage Goods',
      badgeColor: 'bg-teal-50 text-teal-800 dark:bg-teal-950/70 dark:text-teal-300 border-teal-200 dark:border-teal-800',
      officialUrl: 'https://ipindia.gov.in/',
      officialLabel: 'GI Registry (IP India)',
      whatItProtects:
        'Protects qualifying agricultural, natural, manufactured, or handicraft goods whose quality, reputation, or specific characteristics are essentially linked to their defined geographical origin under the GI Act, 1999.',
      whoNeedsIt:
        'Agritech cooperatives, regional producer consortiums, artisanal collectives, rural innovation hubs, and community enterprises.',
      nfvsSupport:
        'Provides foundational awareness, GI eligibility assessment guidance, producer group structuring assistance, and referral to official GI facilitation centres.',
      keyConsiderations: [
        'Belongs to an association of persons or producers representing the region, not an individual',
        'Prevents unauthorized commercial use by products originating outside the designated territory',
        'Enhances export credibility, authentic origin certification, and regional rural livelihoods',
      ],
    },
    {
      id: 'sicld',
      name: 'Semiconductor Layout-Design (SICLD)',
      type: 'Statutory Registry',
      badge: 'Microelectronics & Chips',
      badgeColor: 'bg-indigo-50 text-indigo-800 dark:bg-indigo-950/70 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
      officialUrl: 'https://ipindia.gov.in/',
      officialLabel: 'SICLD Registry (IP India)',
      whatItProtects:
        'Protects original, three-dimensional layout configurations of semiconductor integrated circuits, microchips, and microelectronics topography under the SICLD Act, 2000.',
      whoNeedsIt:
        'VLSI design laboratories, semiconductor startups, microelectronics researchers, fabless chip designers, and embedded hardware innovators.',
      nfvsSupport:
        'Provides awareness regarding statutory layout protection requirements, design mask documentation preparation, and registry filing process navigation.',
      keyConsiderations: [
        'Must be original and not previously commercially exploited in India or WTO member territories',
        'Requires comprehensive semiconductor layout drawings and fabrication sample descriptions',
        'Grants 10-year statutory registration from the date of filing or commercial exploitation',
      ],
    },
    {
      id: 'trade-secrets',
      name: 'Trade Secrets & Know-How',
      type: 'Contractual & Operational',
      badge: 'Confidentiality Frameworks',
      badgeColor: 'bg-rose-50 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 border-rose-200 dark:border-rose-800',
      officialUrl: 'https://ipindia.gov.in/',
      officialLabel: 'IP India Policy & General Legal Framework',
      whatItProtects:
        'Protects valuable confidential business information, unpatented industrial know-how, proprietary algorithms, formulas, compiled client records, and manufacturing protocols maintained under active secrecy.',
      whoNeedsIt:
        'Early-stage tech startups, deep-tech research teams with unpatentable algorithms, specialized manufacturers, and ventures pre-dating patent disclosure.',
      nfvsSupport:
        'Assists with internal confidentiality policy formulation, Non-Disclosure Agreement (NDA) templates, role-based access protocols, and operational trade-secret hygiene awareness.',
      keyConsiderations: [
        'Trade secrets are NOT registered with a government office; protection relies on active secrecy and contracts',
        'Does not protect against independent invention, reverse engineering, or legitimate discovery',
        'NFVS provides educational awareness and operational templates, not formal legal representation',
      ],
    },
    {
      id: 'prior-art-search',
      name: 'IPR Search & Prior-Art Awareness',
      type: 'Pre-Filing Intelligence',
      badge: 'Search & Due Diligence',
      badgeColor: 'bg-cyan-50 text-cyan-800 dark:bg-cyan-950/70 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
      officialUrl: 'https://ipindia.gov.in/',
      officialLabel: 'InPASS (Indian Patent Advanced Search System)',
      whatItProtects:
        'Pre-filing search and due-diligence mechanism across public patent registries, published scientific literature, trademark databases, and industrial design gazettes to gauge innovation landscape.',
      whoNeedsIt:
        'Every student inventor, faculty researcher, incubator startup, and R&D laboratory before investing capital in prototyping or filing fees.',
      nfvsSupport:
        'Conducts guided search sessions across public repositories (InPASS, Google Patents, Espacenet), keyword structuring, and patent landscape reading clinics.',
      keyConsiderations: [
        'Preliminary searches significantly reduce the risk of filing already-known technological claims',
        'CRITICAL: A preliminary search does NOT guarantee patentability, registrability, or Freedom to Operate (FTO)',
        'Comprehensive patentability opinions must be performed by certified patent attorneys',
      ],
    },
    {
      id: 'ip-strategy',
      name: 'IP Strategy & Ownership Awareness',
      type: 'Strategic Governance',
      badge: 'Institutional Ownership & Licensing',
      badgeColor: 'bg-amber-50 text-amber-900 dark:bg-amber-950/70 dark:text-amber-200 border-amber-300 dark:border-amber-700',
      officialUrl: 'https://ipindia.gov.in/',
      officialLabel: 'National IPR Policy / IP India',
      whatItProtects:
        'Establishes transparent frameworks for inventor assignment, creator vs. institution equity rights, technology transfer licensing, university IP revenue sharing, and startup investor readiness.',
      whoNeedsIt:
        'Academic institutions, college principals, campus IIC coordinators, student-faculty co-founders, and seed-stage ventures.',
      nfvsSupport:
        'Guides institutional IP charter alignment with AICTE-NISP guidelines, faculty disclosure workflows, technology licensing templates, and startup equity-for-IP frameworks.',
      keyConsiderations: [
        'Ownership is governed by applicable legal statutes, institutional employment contracts, and sponsorship agreements',
        'Clean, unencumbered IP ownership documentation is a mandatory prerequisite for institutional and VC funding',
        'Clear inventor-institution revenue sharing models motivate continuous academic research productivity',
      ],
    },
  ];

  // 4-Step IPR Support Workflow
  const iprWorkflow = [
    {
      step: '01',
      title: 'Awareness & Education',
      subtitle: 'Understanding IP Rights',
      desc: 'Workshops and clinics to help inventors identify protectable assets, understand public disclosure risks, and differentiate between patents, copyrights, and trademarks.',
      icon: BookOpen,
    },
    {
      step: '02',
      title: 'Preliminary Assessment',
      subtitle: 'Landscape & Search',
      desc: 'Hands-on guidance conducting preliminary searches across public registries (InPASS) to evaluate prior published art and benchmark technology uniqueness.',
      icon: Search,
    },
    {
      step: '03',
      title: 'Documentation Structuring',
      subtitle: 'Invention Disclosures',
      desc: 'Assistance in drafting comprehensive Invention Disclosure Forms (IDFs), technical diagrams, functional claims, and creator assignment documentation.',
      icon: FileText,
    },
    {
      step: '04',
      title: 'Qualified Filing Process',
      subtitle: 'Official Registry Submission',
      desc: 'Connecting inventors with registered patent agents and trademark attorneys to execute statutory filings on the official government portal (ipindia.gov.in).',
      icon: Scale,
    },
  ];

  // Stakeholder Benefits Breakdown
  const stakeholderBenefits = [
    {
      group: 'Students & Innovators',
      icon: GraduationCap,
      points: [
        'Protect final-year projects and hardware prototypes before public exhibitions or competitions',
        'Establish recognized legal inventorship on novel technical solutions and software algorithms',
        'Gain entrepreneurial defensibility when pitching to prospective investors and accelerators',
      ],
    },
    {
      group: 'Faculty Members & Researchers',
      icon: FlaskConical,
      points: [
        'Balance publication timelines with patent priority dates to preserve statutory novelty',
        'Qualify institutional laboratory research for national technology transfer and commercialization',
        'Benefit from transparent institutional royalty and equity-sharing policies under NISP',
      ],
    },
    {
      group: 'Colleges & Universities',
      icon: Building2,
      points: [
        'Boost institutional scores in National Institutional Ranking Framework (NIRF) Innovation metrics',
        'Establish an active Technology Transfer Office (TTO) and campus IPR facilitation cell',
        'Fulfill mandatory accreditation guidelines under NAAC, AICTE, and Ministry of Education circulars',
      ],
    },
    {
      group: 'Startups & Entrepreneurs',
      icon: Rocket,
      points: [
        'Build defensible intangible asset valuation for seed funding, venture debt, and equity rounds',
        'Mitigate costly brand infringement disputes through registered trademarks across relevant Nice classes',
        'Safeguard core industrial know-how through enforceable confidentiality and contractor agreements',
      ],
    },
  ];

  // Official Resources
  const officialIPRLinks = [
    {
      name: 'Intellectual Property India (IP India / CGPDTM)',
      url: 'https://ipindia.gov.in/',
      domain: 'ipindia.gov.in',
      tag: 'Apex Government Registry',
      desc: 'Official statutory authority of the Government of India administering patents, designs, trademarks, and geographical indications.',
    },
    {
      name: 'InPASS — Indian Patent Advanced Search System',
      url: 'https://ipindia.gov.in/',
      domain: 'ipindia.gov.in/public-search',
      tag: 'Patent Intelligence',
      desc: 'Comprehensive public database for searching Indian patent applications, published specifications, and legal status.',
    },
    {
      name: 'Copyright Office of India',
      url: 'https://ipindia.gov.in/',
      domain: 'ipindia.gov.in / copyright',
      tag: 'Literary & Code Registry',
      desc: 'Statutory office administering copyright registration for literary works, software source code, artistic creations, and media.',
    },
    {
      name: 'World Intellectual Property Organization (WIPO)',
      url: 'https://www.wipo.int/',
      domain: 'wipo.int',
      tag: 'International IP Agency',
      desc: 'United Nations global forum for intellectual property services, policy, international patent filings (PCT), and information.',
    },
  ];

  const filteredCategories =
    activeFilter === 'all'
      ? iprCategories
      : activeFilter === 'statutory'
      ? iprCategories.filter((c) => c.type === 'Statutory Registry')
      : activeFilter === 'trade-secrets'
      ? iprCategories.filter((c) => c.id === 'trade-secrets' || c.id === 'prior-art-search')
      : iprCategories.filter((c) => c.id === 'ip-strategy');

  return (
    <div
      className={`min-h-screen ${
        isDark ? 'dark bg-[#071A38] text-white' : 'bg-white text-[#071A38]'
      } transition-colors duration-300 flex flex-col font-sans relative`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#1746A2] via-[#D4AF37] to-[#1746A2] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      {/* Global Navigation Header */}
      <NFNavbar
        onOpenApplication={handleOpenApplication}
        onOpenBrochure={handleOpenBrochure}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-grow pt-24 pb-20">
        {/* 1. Hero Section & IPR Introduction */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] to-white dark:from-[#0A1D3B] dark:to-[#071A38] border-b border-slate-200/80 dark:border-slate-800">
          <div className="section-shell space-y-8">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link to="/" className="hover:text-[#1746A2] dark:hover:text-[#D4AF37] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#071A38] dark:text-white font-semibold">Intellectual Property Rights (IPR)</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Intellectual Property Governance &amp; Safeguards</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A38] dark:text-white tracking-tight leading-tight">
                  Intellectual Property Rights (IPR) Services &amp; Frameworks
                </h1>

                <p className="text-base sm:text-lg text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                  Intellectual Property Rights protect creations of the human mind—including technical inventions, creative literary and artistic works, aesthetic product designs, distinctive brand identifiers, and confidential commercial know-how.
                </p>

                <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                  NF Venture Studio provides comprehensive awareness, preliminary landscape assessment, structured invention disclosure documentation, and facilitation through registered patent and trademark professionals to help student innovators, faculty researchers, academic institutions, and startup founders safeguard their intellectual capital.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl group">
                  <img
                    src="/assets/photos/ipr_research_innovation.jpg"
                    alt="Indian engineering students and researchers conducting technical laboratory testing for patentable inventions"
                    className="w-full h-[260px] sm:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A38]/90 via-[#071A38]/30 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[11px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                      Research &amp; Innovation Lab
                    </span>
                    <p className="text-xs text-white/95 font-medium mt-0.5">
                      Translating laboratory research, technical disclosures, and engineering prototypes into protected IP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* 2. Why Students, Researchers, Institutions, and Startups Need IPR */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#071A38]">
          <div className="section-shell space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-wider uppercase">
                Strategic Imperative
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
                Why Stakeholders Require Proactive IPR Protection
              </h2>
              <p className="text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                Transforming laboratory breakthroughs and digital concepts into defensible commercial assets across academic and venture ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stakeholderBenefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] dark:bg-[#0A1D3B]/80 border border-slate-200 dark:border-[#1A3D73] shadow-xs hover:shadow-lg hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#1746A2]/10 dark:bg-[#103B82]/50 text-[#1746A2] dark:text-[#E8C85A] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#071A38] dark:text-white">
                        {item.group}
                      </h3>
                      <ul className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                        {item.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-[#52627A] dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Individual IPR Service Categories (9 Cards) */}
        <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#0A1D3B]/40 border-t border-slate-200 dark:border-slate-800">
          <div className="section-shell space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-wider uppercase">
                  Service Portfolio
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
                  The 9 Core IPR Service Domains
                </h2>
                <p className="text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                  Detailed statutory protections, eligibility boundaries, stakeholder alignment, and NFVS support capabilities backed by official government registries.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-200/70 dark:bg-[#071A38] border border-slate-300/80 dark:border-[#1A3D73] text-xs font-semibold self-start md:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'all'
                      ? 'bg-[#1746A2] text-white shadow-xs'
                      : 'text-[#52627A] dark:text-slate-300 hover:text-[#071A38]'
                  }`}
                >
                  All 9 Domains
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('statutory')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'statutory'
                      ? 'bg-[#1746A2] text-white shadow-xs'
                      : 'text-[#52627A] dark:text-slate-300 hover:text-[#071A38]'
                  }`}
                >
                  Statutory Registries
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('trade-secrets')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'trade-secrets'
                      ? 'bg-[#1746A2] text-white shadow-xs'
                      : 'text-[#52627A] dark:text-slate-300 hover:text-[#071A38]'
                  }`}
                >
                  Confidentiality &amp; Search
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter('strategy')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeFilter === 'strategy'
                      ? 'bg-[#1746A2] text-white shadow-xs'
                      : 'text-[#52627A] dark:text-slate-300 hover:text-[#071A38]'
                  }`}
                >
                  Institutional Strategy
                </button>
              </div>
            </div>

            {/* Service Cards Grid: Clean grid on desktop, vertically stacked on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((service) => (
                <div
                  key={service.id}
                  className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#071A38] border border-slate-200 dark:border-[#1A3D73] shadow-xs hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border inline-block ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                      <a
                        href={service.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-lg text-slate-400 hover:text-[#1746A2] dark:hover:text-[#D4AF37] hover:bg-slate-100 dark:hover:bg-[#103B82]/50 transition-colors"
                        title={`Visit official ${service.officialLabel}`}
                        aria-label={`Visit official ${service.officialLabel} in a new tab`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-[#071A38] dark:text-white tracking-tight">
                        {service.name}
                      </h3>
                      <p className="text-[11px] font-mono text-[#1746A2] dark:text-[#E8C85A]">
                        {service.type}
                      </p>
                    </div>

                    {/* What It Protects */}
                    <div className="space-y-1 text-xs">
                      <span className="font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 text-[10px] block">
                        What It Protects:
                      </span>
                      <p className="text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                        {service.whatItProtects}
                      </p>
                    </div>

                    {/* Who Needs It */}
                    <div className="space-y-1 text-xs">
                      <span className="font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 text-[10px] block">
                        Who May Need It:
                      </span>
                      <p className="text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                        {service.whoNeedsIt}
                      </p>
                    </div>

                    {/* How NFVS Supports */}
                    <div className="space-y-1 text-xs p-3 rounded-xl bg-slate-50 dark:bg-[#0A1D3B]/70 border border-slate-100 dark:border-slate-800">
                      <span className="font-bold uppercase tracking-wider text-[#1746A2] dark:text-[#E8C85A] text-[10px] block">
                        How NFVS May Support:
                      </span>
                      <p className="text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                        {service.nfvsSupport}
                      </p>
                    </div>

                    {/* Key Considerations Bullet Points */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                        Essential Considerations:
                      </span>
                      <ul className="space-y-1">
                        {service.keyConsiderations.map((c, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-1.5 text-[11px] text-[#52627A] dark:text-slate-300 leading-relaxed">
                            <span className="text-[#D4AF37] font-bold mt-0.5">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Official Government Link */}
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href={service.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1746A2] dark:text-[#E8C85A] hover:text-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    >
                      <span>Official Registry: {service.officialLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How IPR Support Works: 4-Step Structured Pathway */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#071A38] border-t border-slate-200 dark:border-slate-800">
          <div className="section-shell space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-wider uppercase">
                Execution Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
                How IPR Support Works at NF Venture Studio
              </h2>
              <p className="text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                A disciplined four-phase pathway from technical ideation and prior-art discovery to structured invention disclosure and registered attorney submission.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {iprWorkflow.map((flow) => {
                const Icon = flow.icon;
                return (
                  <div
                    key={flow.step}
                    className="p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] dark:bg-[#0A1D3B]/80 border border-slate-200 dark:border-[#1A3D73] shadow-xs hover:border-[#D4AF37] transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black font-mono text-[#D4AF37]">
                          {flow.step}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-[#1746A2]/10 dark:bg-[#103B82]/50 text-[#1746A2] dark:text-[#E8C85A] flex items-center justify-center">
                          <Icon className="w-4 h-4 text-[#D4AF37]" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-base font-bold text-[#071A38] dark:text-white">
                          {flow.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#1746A2] dark:text-[#E8C85A]">
                          {flow.subtitle}
                        </p>
                      </div>

                      <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                        {flow.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Official IPR Resources & Application Portals */}
        <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#0A1D3B]/50 border-t border-slate-200 dark:border-slate-800">
          <div className="section-shell space-y-12">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#1746A2]/10 text-[#1746A2] dark:bg-[#103B82]/30 dark:text-[#E8C85A]">
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Statutory Resources Directory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
                Official Government IPR Portals &amp; Filing Gateways
              </h2>
              <p className="text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                Direct external links to authoritative statutory intellectual property portals in India and international treaty organizations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {officialIPRLinks.map((portal, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#071A38] border border-slate-200 dark:border-[#1A3D73] shadow-xs hover:shadow-lg hover:border-[#D4AF37] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider block">
                        {portal.tag}
                      </span>
                      <a
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-[#1746A2] dark:hover:text-[#D4AF37] transition-colors"
                        title={`Open official ${portal.name} in a new tab`}
                        aria-label={`Open official ${portal.name} in a new tab`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <h3 className="text-base font-bold text-[#071A38] dark:text-white">
                      {portal.name}
                    </h3>

                    <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                      {portal.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1746A2] dark:text-[#E8C85A] hover:text-[#D4AF37] transition-colors"
                    >
                      <span>Visit {portal.domain}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Link to IIC & Institutional Innovation Page */}
        <section className="py-12 bg-white dark:bg-[#071A38] border-t border-slate-200 dark:border-slate-800">
          <div className="section-shell">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#071A38] via-[#103B82] to-[#1746A2] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-white/10 text-[#E8C85A] border border-white/20">
                  <GraduationCap className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Academic Institutional Alignment</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Looking for Institution’s Innovation Council (IIC) Support?
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Discover how NF Venture Studio assists colleges and universities in fostering campus innovation ecosystems, aligning with Ministry of Education Innovation Cell (MIC) mandates, and supporting student ventures.
                </p>
              </div>
              <Link
                to="/iic"
                className="px-6 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#F3C641] text-[#071A38] font-bold text-sm inline-flex items-center gap-2 shrink-0 transition-all shadow-md hover:shadow-xl"
              >
                <span>Explore IIC Guidelines &amp; Portals</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>


      </main>

      {/* Global Footer */}
      <NFFooter onOpenApplication={() => handleOpenApplication('ipr')} />

      {/* Shared Modals */}
      <NFApplicationModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        initialTrack={selectedTrack}
      />
      <NFBrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#1746A2] text-white shadow-xl hover:bg-[#103B82] hover:scale-110 active:scale-95 transition-all duration-300 z-40 border border-[#D4AF37]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer"
          title="Scroll to top"
          aria-label="Scroll back to top of page"
        >
          <ArrowUpRight className="w-5 h-5 -rotate-45" />
        </button>
      )}
    </div>
  );
};
