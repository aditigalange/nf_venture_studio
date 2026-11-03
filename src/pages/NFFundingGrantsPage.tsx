import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFFooter } from '../components/nf/NFFooter';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { NFBrochureModal } from '../components/nf/NFBrochureModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNFTheme } from '../hooks/useNFTheme';
import {
  Coins,
  Landmark,
  ShieldAlert,
  ShieldCheck,
  ExternalLink,
  ArrowUpRight,
  ArrowRight,
  GraduationCap,
  FlaskConical,
  Rocket,
  Building2,
  Users,
  Briefcase,
  FileText,
  CheckCircle2,
  Info,
  TrendingUp,
  Sparkles,
  Search,
  Scale,
  Award,
} from 'lucide-react';

export const NFFundingGrantsPage: React.FC = () => {
  const { theme, isDark, toggleTheme } = useNFTheme();

  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('external');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const handleOpenApplication = (track: string = 'external') => {
    setSelectedTrack(track);
    setIsAppModalOpen(true);
  };

  const handleOpenBrochure = () => {
    setIsBrochureOpen(true);
  };

  // Verified Official Government Grant Programmes
  const verifiedSchemes = [
    {
      id: 'prayas',
      name: 'NIDHI-PRAYAS Scheme',
      fullName: 'PRomoting and Accelerating Young and ASpiring innovators & startups',
      agency: 'National Initiative for Developing and Harnessing Innovations (DST)',
      portalUrl: 'https://nidhi-prayas.org/',
      scope: 'Proof-of-Concept & Hardware Prototyping',
      icon: FlaskConical,
      grantQuantum: 'Up to ₹10 Lakhs (Standard) / Up to ₹20L–₹40L (Advance Deep-Tech PCs)',
      eligibility: 'Individual Indian innovators (age 18+), student innovators, and early-stage prototype developers (< 5 yrs incorporation).',
      exclusions: 'Pure software development, e-commerce, or commercial service platforms without proprietary hardware/IP.',
      description:
        'Proof-of-concept prototyping grant enabling aspiring innovators to translate verified scientific ideas into physical, testable prototypes through designated PRAYAS incubation centres.',
      highlights: [
        'Fabrication lab and prototyping equipment access',
        'Milestone-linked non-dilutive grant tranches',
        'Direct technical mentorship through partner incubators',
      ],
    },
    {
      id: 'eir',
      name: 'NIDHI-EIR Support',
      fullName: 'Entrepreneurs-in-Residence Programme',
      agency: 'National Initiative for Developing and Harnessing Innovations (DST)',
      portalUrl: 'https://nidhi-eir.in/',
      scope: 'Founder Subsistence & Full-Time Commitment',
      icon: Rocket,
      grantQuantum: 'Monthly fellowship grant of ₹10,000 to ₹30,000 / month for 12 months (extendable up to 18 months)',
      eligibility: 'Indian citizens, graduating engineers, scholars, and early-stage innovators pursuing a tech business idea full-time.',
      exclusions: 'Innovators already employed full-time elsewhere or startups that have already raised commercial venture funding.',
      description:
        'Provides grant-in-aid subsistence support to aspiring technology entrepreneurs, minimizing individual financial risk while they develop and validate early-stage ventures.',
      highlights: [
        'Dedicated monthly living fellowship to reduce opportunity costs',
        'Co-working desk, laboratory access, and administrative support',
        'Discontinued upon receipt of external commercial equity investment',
      ],
    },
    {
      id: 'sisfs',
      name: 'Startup India Seed Fund Scheme (SISFS)',
      fullName: 'DPIIT Startup India Seed Fund Scheme',
      agency: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
      portalUrl: 'https://seedfund.startupindia.gov.in/',
      scope: 'Proof of Concept, Trials & Market Entry',
      icon: Coins,
      grantQuantum: 'Up to ₹20 Lakhs grant (PoC/Trials) + Up to ₹50 Lakhs (Debt/Convertibles)',
      eligibility: 'DPIIT-recognized startups incorporated within the last 2 years with at least 51% Indian promoter holding.',
      exclusions: 'Startups that have received more than ₹10 Lakhs of monetary assistance under other government schemes.',
      description:
        'Financial assistance to early-stage DPIIT-recognized startups for proof of concept, prototype trials, product development, and market entry, channeled through selected incubators.',
      highlights: [
        'Grant funding up to ₹20L for validation of Proof of Concept',
        'Debt/convertible debenture facility up to ₹50L for market launch',
        'Evaluated and disbursed through authorized incubator committees (iSMC)',
      ],
    },
    {
      id: 'inspire',
      name: 'DST INSPIRE Programme',
      fullName: 'Innovation in Science Pursuit for Inspired Research',
      agency: 'Department of Science & Technology (DST)',
      portalUrl: 'https://online-inspire.gov.in/',
      scope: 'Scientific Research & Innovation Fellowships',
      icon: GraduationCap,
      grantQuantum: 'Competitive scientific research fellowships & project contingency grants',
      eligibility: 'Science students, doctoral scholars, faculty researchers, and university academic institutions.',
      exclusions: 'Commercial retail entities and non-research ventures.',
      description:
        'Flagship DST initiative to attract talent to science and foster scientific research from school students to doctoral researchers and university faculty fellows.',
      highlights: [
        'Scholarships for Higher Education (SHE)',
        'INSPIRE Fellowships for doctoral and postdoctoral pursuits',
        'Institutional research grant linkages and academic IP development',
      ],
    },
    {
      id: 'birac-big',
      name: 'BIRAC BIG (Biotechnology Ignition Grant)',
      fullName: 'Biotechnology Ignition Grant Scheme',
      agency: 'Biotechnology Industry Research Assistance Council (DBT)',
      portalUrl: 'https://birac.nic.in/',
      scope: 'Biotech, Healthcare & Life Sciences PoC',
      icon: FlaskConical,
      grantQuantum: 'Up to ₹50 Lakhs grant-in-aid for project duration up to 18 months',
      eligibility: 'Individual biotech entrepreneurs, researchers, and early-stage biotech/healthtech startups (< 5 yrs incorporation).',
      exclusions: 'Non-biotech ventures and commercial entities without proprietary biological or healthcare innovation.',
      description:
        'Supports individual entrepreneurs and early-stage startups in translating innovative biotechnology and healthcare ideas into commercially viable proofs-of-concept.',
      highlights: [
        'High-impact grant-in-aid up to ₹50 Lakhs',
        'Wet lab access and specialized biosafety incubation infrastructure',
        'Technical due diligence and commercial translation pathways',
      ],
    },
  ];

  // The 4 Verified Funding Pathways
  const fundingPathways = [
    {
      id: 'gov-grants',
      title: 'Government Grants & National Schemes',
      subtitle: 'Non-Dilutive Capital & Prototyping Fellowships',
      icon: Landmark,
      badge: 'Non-Dilutive Capital',
      badgeColor: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700',
      description:
        'Facilitating access to official central and state government schemes (DST, DPIIT, BIRAC, MSME). Designed to finance early-stage research, hardware fabrication, and Proof-of-Concept validation without equity dilution.',
      nfvsRole:
        'Eligibility alignment, technical proposal drafting, compliance dossier preparation, and nodal incubator application guidance.',
      keyAttribute: 'Equity Free • Milestone-Linked • Rigorous Technical Evaluation',
    },
    {
      id: 'angel-hni',
      title: 'Angel Networks & High-Net-Worth Individuals (HNIs)',
      subtitle: 'Early-Stage Equity & Strategic Mentorship',
      icon: Users,
      badge: 'Seed & Pre-Series A',
      badgeColor: 'bg-blue-50 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300 dark:border-blue-700',
      description:
        'Connecting investor-ready founders with verified angel syndicates, industry leaders, and accredited individual investors seeking technology-driven commercial ventures with scalable business models.',
      nfvsRole:
        'Pitch deck structuring, unit economics validation, capitalization table design, and presentation readiness coaching.',
      keyAttribute: 'Equity Investment • Strategic Market Access • Industry Advisory',
    },
    {
      id: 'family-offices',
      title: 'Family Offices & Private Investment Groups',
      subtitle: 'Patient Capital for Scaling Enterprises',
      icon: Briefcase,
      badge: 'Growth Capital',
      badgeColor: 'bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300 dark:border-amber-700',
      description:
        'Engaging private family investment offices for growth-stage startups requiring long-term patient capital, corporate synergies, and operational scaling expertise.',
      nfvsRole:
        'Institutional due diligence preparation, governance compliance hygiene, commercial viability assessments, and growth roadmap articulation.',
      keyAttribute: 'Patient Capital • Long-Term Horizon • Strategic Synergy',
    },
    {
      id: 'csr-funding',
      title: 'Corporate Social Responsibility (CSR) Innovation',
      subtitle: 'Social Impact & Academic Incubation Alliances',
      icon: Building2,
      badge: 'Section 135 / Schedule VII',
      badgeColor: 'bg-purple-50 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300 dark:border-purple-700',
      description:
        'Navigating corporate CSR funding frameworks under Schedule VII of the Companies Act, 2013 for eligible institutional technology incubators, healthcare solutions, rural tech, and sustainability initiatives.',
      nfvsRole:
        'CSR project proposal structuring, statutory eligibility mapping, impact measurement framework design, and institutional reporting alignment.',
      keyAttribute: 'Impact-Driven • Statutory Compliance • Institutional Focus',
    },
  ];

  // Structured 4-Step Support Process
  const supportSteps = [
    {
      step: '01',
      title: 'Eligibility & Scheme Alignment',
      description:
        'We evaluate your technology readiness level (TRL), venture incorporation age, ownership structure, and funding objectives against verified national scheme criteria.',
      deliverables: 'Scheme Suitability Matrix & Compliance Gap Assessment',
    },
    {
      step: '02',
      title: 'Proposal Structuring & Technical Dossier',
      description:
        'Translating product engineering and commercial milestones into formal grant proposals, executive summaries, budget line-items, and IP declarations required by funding bodies.',
      deliverables: 'Investor-Ready Pitch Deck, Detailed Project Report (DPR) & Budget Model',
    },
    {
      step: '03',
      title: 'Due Diligence & Mock Presentation Review',
      description:
        'Conducting rigorous mock evaluation panels to refine presentation defense, technical feasibility justification, commercialization timelines, and team capability articulation.',
      deliverables: 'Mock Pitch Feedback, Q&A Rebuttal Dossier & Cap Table Hygiene Review',
    },
    {
      step: '04',
      title: 'Application Navigation & Follow-Up Guidance',
      description:
        'Assisting in the navigation of official government PMU portals, nodal incubator submission channels, or secure data rooms for private investor syndicates.',
      deliverables: 'Portal Submission Checklist, Milestone Tracking & Compliance Support',
    },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-[#071A38] text-white' : 'bg-white text-[#071A38]'} transition-colors duration-300 flex flex-col font-sans relative`}>
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
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] to-white dark:from-[#0A1D3B] dark:to-[#071A38] border-b border-slate-200/80 dark:border-slate-800">
          <div className="section-shell space-y-8">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link to="/" className="hover:text-[#1746A2] dark:hover:text-[#D4AF37] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#071A38] dark:text-white font-semibold">Funding &amp; Grants</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
                  <Coins className="w-4 h-4 text-[#D4AF37]" />
                  <span>Capital &amp; Grant Navigation Desk</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A38] dark:text-white tracking-tight leading-tight">
                  Funding &amp; Grant Facilitation
                </h1>

                <p className="text-base sm:text-lg text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                  Guiding academic innovators, student founders, and early-stage technology startups through verified government grant opportunities, prototyping fellowships, and strategic investor readiness.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl group">
                  <img
                    src="/assets/photos/funding_pitch_clinic.jpg"
                    alt="Indian startup founders presenting business proposal during grant readiness and investor pitch session"
                    className="w-full h-[260px] sm:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A38]/90 via-[#071A38]/30 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[11px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                      Pitch Readiness &amp; Due Diligence
                    </span>
                    <p className="text-xs text-white/95 font-medium mt-0.5">
                      Founders refining business plans, grant applications, and investor proposals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mandatory Statutory Notice & Expectation Management */}
        <section className="py-8 bg-amber-50/60 dark:bg-[#132215]/80 border-y border-amber-200 dark:border-amber-600/30">
          <div className="section-shell">
            <div className="flex flex-col md:flex-row items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#071A38]/90 border border-amber-200/80 dark:border-amber-500/30 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center shrink-0 text-amber-700 dark:text-amber-300">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed">
                <h2 className="font-bold text-sm sm:text-base text-amber-900 dark:text-amber-300 flex items-center gap-2">
                  <span>Mandatory Statutory &amp; Governance Notice</span>
                </h2>
                <p>
                  <strong>Role of NF Venture Studio: </strong>
                  NF Venture Studio operates strictly as an <strong>ecosystem facilitator, mentor, and proposal drafting advisor</strong>. NFVS does not directly disburse government grant funds, does not underwrite investments, and does not promise, represent, or guarantee grant approvals, investor capital commitments, or commercial funding outcomes.
                </p>
                <p className="text-amber-900/80 dark:text-amber-300/80 text-xs">
                  All grant sanctions, fellowship disbursements, and awards are administered and decided independently by respective government ministries (DST, DPIIT, BIRAC), designated Project Management Units (PMUs), and authorized institutional incubator committees according to statutory evaluation criteria. Private investor meetings and equity investments remain entirely at the sole discretion of independent, accredited investors and family offices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 1. The 4 Verified Funding Pathways */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#071A38]">
          <div className="section-shell space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-wider uppercase">
                Funding Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
                Verified Funding &amp; Capital Pathways
              </h2>
              <p className="text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                A structured breakdown of capital channels available to ventures incubated within or partnered with the NF Venture Studio ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {fundingPathways.map((pathway) => {
                const Icon = pathway.icon;
                return (
                  <div
                    key={pathway.id}
                    className="p-7 sm:p-8 rounded-3xl bg-[#F8FAFC] dark:bg-[#0A1D3B]/80 border border-slate-200 dark:border-[#1A3D73] shadow-xs hover:shadow-lg hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#1746A2] text-white flex items-center justify-center shadow-md group-hover:rotate-3 transition-transform">
                          <Icon className="w-6 h-6 text-[#D4AF37]" />
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold border ${pathway.badgeColor}`}>
                          {pathway.badge}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-lg sm:text-xl font-black text-[#071A38] dark:text-white tracking-tight">
                          {pathway.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#1746A2] dark:text-[#E8C85A]">
                          {pathway.subtitle}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                        {pathway.description}
                      </p>

                      <div className="p-3.5 rounded-xl bg-white dark:bg-[#071A38] border border-slate-200/80 dark:border-slate-800 text-xs space-y-1">
                        <span className="font-bold text-[#071A38] dark:text-white block">
                          NFVS Advisory Scope:
                        </span>
                        <span className="text-[#52627A] dark:text-slate-300">
                          {pathway.nfvsRole}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <span>{pathway.keyAttribute}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2. Verified Government Grant Programmes Directory */}
        <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#0A1D3B]/50 border-t border-slate-200 dark:border-slate-800">
          <div className="section-shell space-y-12">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#1746A2]/10 text-[#1746A2] dark:bg-[#103B82]/30 dark:text-[#E8C85A]">
                <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Verified Schemes Directory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
                National Government Grant Programmes
              </h2>
              <p className="text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                Authoritative central and nodal department programmes verified for innovator eligibility and prototyping funding. Direct external links point directly to official government PMU portals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {verifiedSchemes.map((scheme, index) => {
                const Icon = scheme.icon;
                const isLast = index === verifiedSchemes.length - 1 && verifiedSchemes.length % 2 !== 0;
                return (
                  <div
                    key={scheme.id}
                    className={`p-7 sm:p-8 rounded-3xl bg-white dark:bg-[#071A38] border border-slate-200 dark:border-[#1A3D73] shadow-xs hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                      isLast ? 'lg:col-span-2 lg:max-w-[calc(50%_-_1rem)] lg:mx-auto w-full' : ''
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Top Header */}
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
                              {scheme.name}
                            </h3>
                          </div>
                        </div>

                        <a
                          href={scheme.portalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl text-slate-400 hover:text-[#1746A2] dark:hover:text-[#D4AF37] hover:bg-slate-100 dark:hover:bg-[#103B82]/50 transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                          title={`Open official ${scheme.name} portal`}
                          aria-label={`Open official ${scheme.name} portal in a new tab`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Administering Agency */}
                      <div className="text-xs font-mono font-semibold text-[#1746A2] dark:text-sky-300">
                        Administered by: {scheme.agency}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                        {scheme.description}
                      </p>

                      {/* Grant Quantum Badge */}
                      <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs">
                        <strong className="text-emerald-900 dark:text-emerald-200 font-bold block mb-0.5">
                          Financial Quantum:
                        </strong>
                        <span className="text-emerald-800 dark:text-emerald-300 font-medium">
                          {scheme.grantQuantum}
                        </span>
                      </div>

                      {/* Eligibility & Exclusions */}
                      <div className="space-y-2 text-xs border-t border-slate-100 dark:border-slate-800/80 pt-3">
                        <div>
                          <strong className="text-[#071A38] dark:text-white font-semibold">Eligibility: </strong>
                          <span className="text-[#52627A] dark:text-slate-300">{scheme.eligibility}</span>
                        </div>
                        <div>
                          <strong className="text-rose-900 dark:text-rose-300 font-semibold">Exclusions: </strong>
                          <span className="text-rose-800 dark:text-rose-400">{scheme.exclusions}</span>
                        </div>
                      </div>

                      {/* Key Highlights */}
                      <div className="space-y-1.5 pt-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                          Key Features
                        </span>
                        <ul className="space-y-1">
                          {scheme.highlights.map((hl, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-[#52627A] dark:text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Redirection */}
                    <div className="pt-6 mt-6 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between gap-3">
                      <a
                        href={scheme.portalUrl}
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
          </div>
        </section>

        {/* 3. How the Support Process Works */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#071A38] border-t border-slate-200 dark:border-slate-800">
          <div className="section-shell space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-wider uppercase">
                Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
                How Our Funding Readiness Support Works
              </h2>
              <p className="text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                A disciplined four-stage advisory cadence designed to elevate your proposal quality and compliance rigor before official portal submission.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0A1D3B]/70 border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-2xl font-black text-[#D4AF37] font-mono block">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-[#071A38] dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] font-mono text-[#1746A2] dark:text-sky-300">
                    <span className="font-bold block text-slate-400 dark:text-slate-500 text-[10px] uppercase">
                      Deliverable:
                    </span>
                    {step.deliverables}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Expectation Matrix: What We Provide vs. What Grant Bodies Decide */}
        <section className="py-14 bg-slate-50 dark:bg-[#0A1D3B]/40 border-t border-slate-200 dark:border-slate-800">
          <div className="section-shell space-y-8">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#071A38] dark:text-white tracking-tight flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#D4AF37]" />
                <span>Expectation Transparency Framework</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300">
                To maintain institutional ethics and clear expectations, we transparently delineate the studio advisory boundary.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#071A38] border border-emerald-200 dark:border-emerald-800/60 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>What NF Venture Studio Provides</span>
                </div>
                <ul className="space-y-2 text-xs text-[#52627A] dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Rigorous proposal documentation, technical validation &amp; DPR drafting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Scheme suitability mapping (TRL matching, applicant eligibility audits).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Financial model auditing, budget allocation spreadsheets &amp; milestone design.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Mock presentation defenses and Q&amp;A preparation with veteran entrepreneurs.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#071A38] border border-amber-200 dark:border-amber-800/60 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  <span>What Remains External &amp; Independent</span>
                </div>
                <ul className="space-y-2 text-xs text-[#52627A] dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Direct grant disbursements (funds are strictly released by government nodal PMUs).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Grant approval or sanction guarantees (solely judged by external committees).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Guaranteed investor commitments or fixed capital valuation amounts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>Alterations to statutory government application deadlines or eligibility rules.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Cross-Link to Digital CXO Suite (CFO / CSO Advisory) */}
        <section className="py-12 bg-white dark:bg-[#071A38] border-t border-slate-200 dark:border-slate-800">
          <div className="section-shell">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#071A38] via-[#103B82] to-[#071A38] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-white/10 text-[#E8C85A] border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Fractional Executive Leadership</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Need Financial Modeling &amp; Strategy Advisory?
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Our Digital CXO Suite pairs founders with fractional <strong>CFO</strong> (runway modeling &amp; unit economics) and <strong>CSO</strong> (strategic positioning &amp; growth architecture) executive advisors.
                </p>
              </div>

              <Link
                to="/digital-cxo-suite"
                className="px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#F3C641] text-[#071A38] font-bold text-sm shadow-md transition-all shrink-0 inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explore Digital CXO Suite</span>
                <ArrowRight className="w-4 h-4 text-[#071A38]" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Global Footer */}
      <NFFooter onOpenApplication={() => handleOpenApplication('external')} />

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
