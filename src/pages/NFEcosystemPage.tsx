import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFFinalCTA } from '../components/nf/NFFinalCTA';
import { NFFooter } from '../components/nf/NFFooter';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { NFBrochureModal } from '../components/nf/NFBrochureModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNFTheme } from '../hooks/useNFTheme';
import {
  Sparkles,
  Coins,
  Award,
  ShieldCheck,
  Compass,
  FlaskConical,
  Rocket,
  ArrowRight,
  GraduationCap,
  Building2,
  Users,
  Handshake,
  Landmark,
  CheckCircle2,
  ChevronDown,
  Layers,
  ArrowUpRight,
  Server,
  Terminal,
  Lock,
  Database,
  Activity,
  Globe2,
  Cpu,
} from 'lucide-react';

export const NFEcosystemPage: React.FC = () => {
  const { theme, isDark, toggleTheme } = useNFTheme();
  const navigate = useNavigate();

  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('student');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenApplication = (track: string = 'student') => {
    setSelectedTrack(track);
    setIsAppModalOpen(true);
  };

  const ecosystemPillars = [
    {
      id: 'services',
      title: 'What We Offer',
      badge: 'Core Services',
      icon: Sparkles,
      color: '#D4AF37',
      desc: 'Complete incubation infrastructure, college incubation centres, maker labs, and startup governance models for academia and founders.',
      route: '/#services',
      features: [
        'Academic Incubation Centre Setup',
        'Corporate-Level Business Planning',
        'State-of-the-Art Prototyping Labs',
        'Continuous Mentorship & Governance',
      ],
    },
    {
      id: 'funding',
      title: 'Funding & Grants',
      badge: 'Capital Ecosystem',
      icon: Coins,
      color: '#1746A2',
      desc: 'Facilitating access to official central government funding schemes, seed capital, prototyping fellowships, and private investor syndicates.',
      route: '/funding-and-grants',
      features: [
        'NIDHI-PRAYAS (Up to ₹10L–₹40L Prototyping Grants)',
        'NIDHI-EIR (Monthly Fellowship of ₹10k–₹30k)',
        'Startup India Seed Fund Scheme (SISFS)',
        'Private Angel & Venture Syndicate Connects',
      ],
    },
    {
      id: 'iic',
      title: 'IIC & Institutional Innovation',
      badge: 'MoE Innovation Cell',
      icon: Award,
      color: '#2864C5',
      desc: 'Institution’s Innovation Council enablement aligning higher education institutions with National Innovation and Startup Policy (NISP).',
      route: '/iic',
      features: [
        'IIC Calendar Activity Framework & Reporting',
        'Smart India Hackathon (SIH) Guidance',
        'Yukti National Innovation Repository Submissions',
        'NAAC, NBA & NIRF Ranking Optimization',
      ],
    },
    {
      id: 'ipr',
      title: 'IPR Services & Protection',
      badge: 'Intellectual Property',
      icon: ShieldCheck,
      color: '#D4AF37',
      desc: 'Comprehensive intellectual property support from patentability searches to provisional filings, trademarks, design registrations, and technology transfer.',
      route: '/ipr',
      features: [
        'Prior Art & InPASS Patentability Searches',
        'Provisional & Complete Patent Drafting',
        'Trademark & Industrial Design Registrations',
        'Commercial Licensing & Tech Transfer Agreements',
      ],
    },
    {
      id: 'journey',
      title: 'Startup Journey',
      badge: '5-Stage Progression',
      icon: Compass,
      color: '#1746A2',
      desc: 'A structured, milestone-driven pathway helping student innovators and entrepreneurs transition from raw idea to market scale.',
      route: '/#journey',
      features: [
        'Stage 01: Discover & Ideation Sprints',
        'Stage 02: Concept Evaluation & Feasibility',
        'Stage 03: Prototype Testing & Validation',
        'Stage 04: Market Launch & Incorporation',
        'Stage 05: Scale, Funding & Commercial Growth',
      ],
    },
    {
      id: 'initiatives',
      title: 'IIC Council & IPR',
      badge: 'Translational Research',
      icon: FlaskConical,
      color: '#2864C5',
      desc: 'Translating academic R&D into commercially viable products through technology scouting and the institutional IT Cell digital backbone.',
      route: '/#initiatives',
      features: [
        'Academic Technology Scouting',
        'Testing Benches & Real-World Validation',
        'IT Cell Digital Backbone Support',
        'Cybersecurity & Cloud Infrastructure Mgmt',
      ],
    },
    {
      id: 'cxo',
      title: 'Digital CXO Suite',
      badge: 'Executive Advisory',
      icon: Rocket,
      color: '#D4AF37',
      desc: 'Executive advisory and strategic leadership modules enabling startups and institutions to scale with enterprise governance and market execution.',
      route: '/digital-cxo-suite',
      features: [
        'Fractional Chief Technology Officer (CTO)',
        'Fractional Chief Financial Officer (CFO)',
        'Strategic Governance & Compliance Roadmaps',
        'Enterprise Go-To-Market & Growth Architecture',
      ],
    },
  ];

  const stakeholders = [
    {
      name: 'Academic Institutions',
      value: 'Knowledge & Talent',
      icon: GraduationCap,
      desc: 'Establishing institutional incubation centres, lab ecosystems, and enabling faculty-student innovation.',
    },
    {
      name: 'Innovators & Researchers',
      value: 'Ideas & Research',
      icon: Users,
      desc: 'Empowering early-stage problem solvers to transform scientific research into viable enterprises.',
    },
    {
      name: 'Entrepreneurs & Startups',
      value: 'Innovation & Execution',
      icon: Rocket,
      desc: 'Providing hands-on incubation, market validation, and business enablement to reach commercial scale.',
    },
    {
      name: 'Industry & Corporates',
      value: 'Expertise & Collaboration',
      icon: Building2,
      desc: 'Connecting corporate problem statements, pilot opportunities, and domain-specific mentorship.',
    },
    {
      name: 'Investors & Funding Partners',
      value: 'Capital & Growth',
      icon: Handshake,
      desc: 'Facilitating investor networking, pitch clinics, non-dilutive grants, and seed venture rounds.',
    },
    {
      name: 'Government & Support Bodies',
      value: 'Policy & Grants',
      icon: Landmark,
      desc: 'Aligning with national schemes (DST, MoE, DPIIT, MSME) to maximize institutional startup funding.',
    },
  ];

  // 8 Core Technical Functions of NFVS IT Cell (Official Brochure Page 10)
  const itCellFunctions = [
    {
      num: '01',
      title: 'Technical Support',
      desc: 'Day-to-day IT assistance, developer workstations setup, troubleshooting, and continuous technical advisory for students, faculty & startup founders.',
      icon: Terminal,
    },
    {
      num: '02',
      title: 'Infrastructure Management',
      desc: 'Managing dedicated servers, enterprise cloud environments (AWS, Azure, GCP), high-availability hosting, compute clusters, and network architecture.',
      icon: Server,
    },
    {
      num: '03',
      title: 'Software & Development Support',
      desc: 'Full-stack software engineering, scalable web & mobile application architectures, MVP rapid prototyping, and API integration frameworks.',
      icon: Cpu,
    },
    {
      num: '04',
      title: 'Cybersecurity & Protection',
      desc: 'Institutional data protection, automated vulnerability auditing, SSL/TLS protocols, access logging, and secure digital hygiene best practices.',
      icon: ShieldCheck,
    },
    {
      num: '05',
      title: 'Data Management & Repositories',
      desc: 'Organizing digital innovation records, institutional compliance audit archives, NIRF/NAAC/NBA innovation metrics, and knowledge repositories.',
      icon: Database,
    },
    {
      num: '06',
      title: 'Access Control & Permissions',
      desc: 'Identity and access management (IAM), multi-factor secure authentication, user privilege levels, and institutional digital licenses administration.',
      icon: Lock,
    },
    {
      num: '07',
      title: 'Digital Innovation & Automation',
      desc: 'Implementing automated CI/CD pipelines, workflow orchestration bots, digital form portals, and campus enterprise systems for high operational efficiency.',
      icon: Activity,
    },
    {
      num: '08',
      title: 'Event & Hackathon Backing',
      desc: 'Providing high-bandwidth technical infrastructure, sandboxes, and cloud dev environments for Smart India Hackathon (SIH), webinars, and live demo days.',
      icon: Globe2,
    },
  ];

  const itCellCapabilities = [
    'Cloud Architecture (AWS, Azure, GCP)',
    'Enterprise CI/CD Deployment Pipelines',
    'Automated Security & Vulnerability Audits',
    'High-Availability Server Clusters',
    'Institutional Innovation Data Warehousing',
    'Scalable API & Microservices Gateways',
    'Digital CXO Suite Integration',
    'SIH & Hackathon Sandboxes',
  ];

  const filteredPillars =
    activeFilter === 'all'
      ? ecosystemPillars
      : ecosystemPillars.filter((p) => p.id === activeFilter);

  const selectedPillar = ecosystemPillars.find((p) => p.id === activeFilter);

  return (
    <div
      className={`min-h-screen ${
        isDark ? 'dark bg-[#071A38] text-white' : 'bg-white text-[#071A38]'
      } transition-colors duration-300 flex flex-col font-sans relative`}
    >
      {/* Global Navigation Header */}
      <NFNavbar
        onOpenApplication={handleOpenApplication}
        onOpenBrochure={() => setIsBrochureOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-grow pt-24 pb-20">
        {/* =========================================================================
            1. HERO SECTION: CENTERED HEADINGS & BREADCRUMB
           ========================================================================= */}
        <section className="relative py-14 sm:py-18 lg:py-22 bg-gradient-to-b from-[#F8FAFC] to-white dark:from-[#0A1D3B] dark:to-[#071A38] border-b border-slate-200/80 dark:border-slate-800">
          <div className="section-shell space-y-6 text-center max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400"
            >
              <Link to="/" className="hover:text-[#1746A2] dark:hover:text-[#D4AF37] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#071A38] dark:text-white font-semibold">Ecosystem</span>
            </nav>

            {/* Gold Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
              <Layers className="w-4 h-4 text-[#D4AF37]" />
              <span>Innovation Ecosystem Directory</span>
            </div>

            {/* Centered Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#071A38] dark:text-white tracking-tight leading-tight">
              Building a Connected{' '}
              <span className="text-[#1746A2] dark:text-[#60A5FA]">Startup</span>{' '}
              <span className="text-[#D4AF37]">Ecosystem</span>
            </h1>

            {/* Centered Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-[#52627A] dark:text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
              Operating as a startup incubator and institutional catalyst, NF Venture Studio bridges academic research, student innovation, government grants, and industry execution into a cohesive growth engine.
            </p>

            {/* =====================================================================
                2. INTERACTIVE ECOSYSTEM DROPDOWN SELECTOR (MATCHING NAVIGATION MENU)
               ===================================================================== */}
            <div className="pt-6 relative max-w-md mx-auto">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2 text-center">
                Select an Ecosystem Component
              </div>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                  className="w-full flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-[#071A38] text-white border-2 border-[#1746A2]/50 dark:border-[#D4AF37]/50 shadow-xl text-left text-sm font-bold hover:border-[#D4AF37] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span>
                      {selectedPillar ? selectedPillar.title : 'All Ecosystem Pillars (7)'}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D4AF37] transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 z-40 rounded-2xl bg-[#071A38] text-white border border-[#1746A2]/50 dark:border-[#D4AF37]/40 shadow-2xl p-3.5 space-y-1.5 animate-fadeIn max-h-96 overflow-y-auto backdrop-blur-xl">
                    <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#D4AF37] px-3 py-2 border-b border-white/10 flex items-center justify-between">
                      <span>ECOSYSTEM</span>
                      <span className="text-[10px] text-slate-400 font-normal">7 Core Pillars</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveFilter('all');
                        setDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                        activeFilter === 'all'
                          ? 'bg-[#1746A2] text-white font-bold'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>All Ecosystem Pillars (7)</span>
                      <span className="text-[10px] font-mono text-[#D4AF37]">View All</span>
                    </button>

                    {ecosystemPillars.map((pillar) => {
                      const Icon = pillar.icon;
                      return (
                        <button
                          key={pillar.id}
                          type="button"
                          onClick={() => {
                            setActiveFilter(pillar.id);
                            setDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                            activeFilter === pillar.id
                              ? 'bg-[#1746A2] text-white font-bold'
                              : 'text-slate-200 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <Icon className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <span className="truncate">{pillar.title}</span>
                        </button>
                      );
                    })}

                    <div className="pt-2 border-t border-white/10">
                      <Link
                        to="/it-cell"
                        onClick={() => setDropdownOpen(false)}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#E8C85A] hover:bg-white/10 transition-colors"
                      >
                        <Server className="w-4 h-4 text-[#D4AF37]" />
                        <span>NFVS IT Cell &bull; Tech Services &amp; Agency</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. ECOSYSTEM PILLARS GRID: 7 FOUNDATIONAL PILLARS
           ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="section-shell space-y-12">
            {/* Centered Heading */}
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Foundational Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071A38] dark:text-white tracking-tight">
                7 Pillars of the NF Venture Studio Ecosystem
              </h2>
              <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                Discover each pillar designed to provide end-to-end support for academic institutions, inventors, and deep-tech enterprises.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.id}
                    className="p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] dark:bg-[#0A1D3B] border border-slate-200 dark:border-[#1A3D73] hover:border-[#D4AF37] dark:hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      {/* Top Header */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#103B82] flex items-center justify-center text-[#1746A2] shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-[#1746A2] dark:text-[#E8C85A]" />
                        </div>
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white dark:bg-[#071A38] text-[#1746A2] dark:text-[#E8C85A] border border-slate-200 dark:border-slate-700">
                          {p.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-black text-[#071A38] dark:text-white tracking-tight group-hover:text-[#1746A2] dark:group-hover:text-[#60A5FA] transition-colors">
                        {p.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                        {p.desc}
                      </p>

                      {/* Features List */}
                      <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800 space-y-2">
                        {p.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span className="text-xs text-[#071A38] dark:text-slate-200 font-medium">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-6">
                      {p.route.startsWith('#') ? (
                        <button
                          type="button"
                          onClick={() => {
                            navigate('/' + p.route);
                          }}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white dark:bg-[#071A38] text-[#1746A2] dark:text-[#E8C85A] border border-[#1746A2]/30 dark:border-[#D4AF37]/40 hover:bg-[#1746A2] hover:text-white dark:hover:bg-[#D4AF37] dark:hover:text-[#071A38] transition-all cursor-pointer shadow-xs group/btn"
                        >
                          <span>Explore {p.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      ) : (
                        <Link
                          to={p.route}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white dark:bg-[#071A38] text-[#1746A2] dark:text-[#E8C85A] border border-[#1746A2]/30 dark:border-[#D4AF37]/40 hover:bg-[#1746A2] hover:text-white dark:hover:bg-[#D4AF37] dark:hover:text-[#071A38] transition-all cursor-pointer shadow-xs group/btn"
                        >
                          <span>Explore {p.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. NFVS IT CELL: THE DIGITAL BACKBONE FOR A STRONGER ECOSYSTEM
           ========================================================================= */}
        <section
          id="it-cell"
          className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#071A38] via-[#0A224D] to-[#071A38] text-white relative overflow-hidden border-y border-[#D4AF37]/30 scroll-mt-20"
        >
          {/* Subtle Ambient Lights */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1746A2]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="section-shell space-y-14 relative z-10">
            {/* Centered Heading */}
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#D4AF37]/20 text-[#E8C85A] border border-[#D4AF37]/40 shadow-xs">
                <Server className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>NFVS IT Cell &bull; Digital Infrastructure Backbone</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Digital Backbone for a Stronger Ecosystem
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
                The IT Cell at NF Venture Studio supports digital transformation, provides enterprise-grade technical architecture, and equips students, startups, and academic institutions with robust infrastructure.
              </p>

              <blockquote className="pt-2 text-sm sm:text-base font-bold text-[#E8C85A] italic">
                &ldquo;Technology enables people, people build impact.&rdquo;
              </blockquote>
            </div>

            {/* 8 Core Technical Functions Grid (from Official Brochure Page 10) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {itCellFunctions.map((fn) => {
                const Icon = fn.icon;
                return (
                  <div
                    key={fn.num}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/60 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold text-[#D4AF37] px-2 py-0.5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                          FUNCTION {fn.num}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#1746A2]/60 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                      </div>

                      <h3 className="text-base font-black text-white tracking-tight group-hover:text-[#E8C85A] transition-colors">
                        {fn.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {fn.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[10px] font-mono text-sky-300">
                      <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                      <span>Brochure Verified Service</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* IT Infrastructure & Technical Capabilities Showcase */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider block">
                    Enterprise Capabilities
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    IT Infrastructure &amp; Technical Services Provided
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    to="/it-cell"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#1746A2] text-white hover:bg-[#2864C5] border border-[#D4AF37]/50 shadow-md transition-all cursor-pointer"
                  >
                    <span>Explore IT Cell &amp; Services</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </Link>
                  <Link
                    to="/digital-cxo-suite"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white hover:text-[#D4AF37] border border-white/20 hover:border-[#D4AF37] transition-all"
                  >
                    <span>Digital CXO Suite</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {itCellCapabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-black/20 border border-white/10 flex items-center gap-2.5 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span className="font-medium leading-tight">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. 6 CONNECTED STAKEHOLDERS: CENTERED HEADING
           ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] dark:bg-[#0A1D3B]/50 border-t border-slate-200 dark:border-slate-800">
          <div className="section-shell space-y-12">
            {/* Centered Heading */}
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
                <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Multi-Stakeholder Collaboration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071A38] dark:text-white tracking-tight">
                Our Connected Ecosystem Network
              </h2>
              <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                Connecting higher educational institutions, corporate enterprises, regulatory authorities, and funding bodies under a single operational ecosystem.
              </p>
            </div>

            {/* Stakeholders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {stakeholders.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-[#071A38] border border-slate-200 dark:border-[#103B82] shadow-sm hover:shadow-md transition-all space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#103B82] flex items-center justify-center text-[#1746A2]">
                        <Icon className="w-5 h-5 text-[#1746A2] dark:text-[#E8C85A]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-[#071A38] dark:text-white">
                          {s.name}
                        </h4>
                        <span className="text-[10px] font-mono text-[#D4AF37] font-bold block uppercase tracking-wider">
                          {s.value}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <NFFinalCTA onOpenApplication={handleOpenApplication} isDark={isDark} />
      </main>

      <NFFooter onOpenApplication={handleOpenApplication} isDark={isDark} />

      {/* Interactive Application Modal */}
      <NFApplicationModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        initialTrack={selectedTrack}
        isDark={isDark}
      />

      {/* Brochure Modal */}
      <NFBrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </div>
  );
};
