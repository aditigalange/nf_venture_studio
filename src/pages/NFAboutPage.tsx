import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFFooter } from '../components/nf/NFFooter';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNFTheme } from '../hooks/useNFTheme';
import {
  Lightbulb,
  Sparkles,
  Target,
  ArrowRight,
  TrendingUp,
  Eye,
  Building,
  FileText,
  Users2,
  CheckCircle2,
  Quote,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Award,
  ChevronRight,
  Compass,
  Rocket,
  Layers,
  ArrowUpRight,
  Cpu,
  Network,
  Activity,
} from 'lucide-react';
import officialLogoFull from '../assets/nfvs_official_logo_full.png';
import officialLogoFullDark from '../assets/nfvs_official_logo_full_darkmode.png';
import officialEmblem from '../assets/nfvs_official_emblem.png';

export const NFAboutPage: React.FC = () => {
  const { theme, isDark, toggleTheme } = useNFTheme();

  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('student');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenApplication = (track: string = 'student') => {
    setSelectedTrack(track);
    setIsAppModalOpen(true);
  };

  // Four Foundational Pillars from Brochure
  const roles = [
    {
      title: 'Establish Incubation Centres',
      desc: 'Establish and strengthen startup incubation centres across academic institutions.',
      icon: Building,
      image: '/assets/photos/academic_campus.jpg',
      badge: 'Pillar 01',
      highlights: [
        'Turnkey campus incubator deployment',
        'IIC activation & institutional ranking',
        'Co-working & maker-lab enablement',
      ],
    },
    {
      title: 'Startup Planning & Strategy',
      desc: 'Support startup establishment and corporate-level business planning.',
      icon: FileText,
      image: '/assets/photos/corporate_management.jpg',
      badge: 'Pillar 02',
      highlights: [
        'Business Model Canvas validation',
        'Financial modeling & investor decks',
        'Structured corporate governance',
      ],
    },
    {
      title: 'Connect Innovators with Resources',
      desc: 'Connect innovators with resources, mentors, and opportunities.',
      icon: Users2,
      image: '/assets/photos/handshake.jpg',
      badge: 'Pillar 03',
      highlights: [
        'Direct 1-on-1 industry mentorship',
        'Investor networks & seed syndication',
        'Corporate pilots & market access',
      ],
    },
    {
      title: 'Encourage Sustainable Growth',
      desc: 'Encourage innovation, collaboration and sustainable growth.',
      icon: TrendingUp,
      image: '/assets/photos/research_lab.jpg',
      badge: 'Pillar 04',
      highlights: [
        'IP hygiene & patent drafting guidance',
        'Scalable commercialization roadmaps',
        'Cross-sector institutional synergy',
      ],
    },
  ];

  // The 4-Stage Incubation Lifecycle
  const lifecycleSteps = [
    {
      step: '01',
      title: 'Discover & Onboard',
      phase: 'Awareness & Intake',
      desc: 'Scout high-potential student, faculty and institutional ideas through hackathons, IIC workshops and campus innovation cells.',
      icon: Lightbulb,
      deliverables: ['Idea screening & scouting', 'IIC workshop series', 'Founder onboarding'],
    },
    {
      step: '02',
      title: 'Validate & Prototype',
      phase: 'Design & Engineering',
      desc: 'Transform raw concepts into functional proof-of-concepts (PoC) using structured design-thinking and engineering lab access.',
      icon: Cpu,
      deliverables: ['Design thinking workshops', 'Minimum Viable Product (MVP)', 'Lab & hardware access'],
    },
    {
      step: '03',
      title: 'Protect IP & Structure',
      phase: 'Legal & Strategy',
      desc: 'Secure intellectual property through patents, trademarks and copyrights, while drafting robust business plans and corporate governance.',
      icon: ShieldCheck,
      deliverables: ['Patent & IPR documentation', 'Business Model Canvas (BMC)', 'Corporate compliance'],
    },
    {
      step: '04',
      title: 'Launch, Fund & Scale',
      phase: 'Venture Acceleration',
      desc: 'Connect founders with angel investors, seed capital, corporate pilot partners, and dedicated acceleration for market entry.',
      icon: Rocket,
      deliverables: ['Investor pitch showcases', 'Pilot customer introductions', 'Scale acceleration'],
    },
  ];

  // Ecosystem Stakeholders
  const stakeholders = [
    {
      title: 'Academic Institutions',
      badge: 'Universities & Colleges',
      icon: GraduationCap,
      desc: 'Elevate NIRF and NAAC rankings by establishing recognized incubation centres, activating IIC mandates, and cultivating high-impact research commercialization.',
      benefits: [
        'Turnkey institutional incubation setup',
        'Official IIC calendar execution',
        'Enhanced institutional prestige & placement value',
      ],
    },
    {
      title: 'Student & Faculty Founders',
      badge: 'Innovators & Entrepreneurs',
      icon: Rocket,
      desc: 'Turn classroom projects and doctoral research into legal, incorporated, revenue-generating businesses with comprehensive mentor backing.',
      benefits: [
        'Pre-incubation & incubation roadmaps',
        'Zero-friction IPR filing guidance',
        'Direct access to angel investors & capital',
      ],
    },
    {
      title: 'Industry & Corporate Partners',
      badge: 'Enterprises & Investors',
      icon: Briefcase,
      desc: 'Access a vetted, high-velocity pipeline of emerging intellectual property, deep-tech solutions, and collaborative co-innovation initiatives.',
      benefits: [
        'Curated deal-flow of patent-ready ventures',
        'Corporate innovation problem-statement syndication',
        'Strategic ESG & academic ecosystem alignment',
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-300 relative overflow-hidden ${
        isDark ? 'bg-[#071A38] text-slate-100' : 'bg-[#FFFFFF] text-[#071A38]'
      }`}
    >
      {/* Ambient Animated Mesh Background Gradients */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#1746A2]/15 via-[#2563EB]/10 to-transparent blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-48 right-0 w-[450px] h-[450px] rounded-full bg-gradient-to-bl from-[#D4AF37]/12 via-[#E8C85A]/8 to-transparent blur-3xl pointer-events-none animate-pulse" />

      <NFNavbar
        onOpenApplication={handleOpenApplication}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 w-full pt-24 sm:pt-32 pb-20 sm:pb-28 relative z-10">
        <div className="section-shell space-y-20 sm:space-y-28">

          {/* =========================================================================
              SECTION 1: HERO SECTION WITH FLOATING EMBLEM & MICRO-ANIMATIONS
             ========================================================================= */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-2">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Animated Subtitle Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20 shadow-xs hover:border-[#D4AF37] transition-all duration-300">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
                <span>About NF Venture Studio</span>
              </div>

              {/* Headline with Gradient Text */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-[#071A38] dark:text-white leading-[1.12]">
                A Platform for{' '}
                <span className="bg-gradient-to-r from-[#1746A2] via-[#2864C5] to-[#3B82F6] dark:from-[#60A5FA] dark:to-[#93C5FD] bg-clip-text text-transparent">
                  Ideas, Innovation
                </span>{' '}
                &amp;{' '}
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#E8C85A] to-[#F59E0B] bg-clip-text text-transparent">
                  Impact
                </span>
              </h1>

              {/* Exact Narrative Description */}
              <p className="text-sm sm:text-base lg:text-lg text-[#52627A] dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                NF Venture Studio is focused on building a strong startup ecosystem through academic
                incubation centres and corporate-level startup management. It connects innovators,
                entrepreneurs, educational institutions and industry to develop solutions that
                create real-world value and contribute to a sustainable future.
              </p>

              {/* Action Buttons with Micro-Animations */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#pillars"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#1746A2] text-white shadow-md hover:bg-[#103B82] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer"
                >
                  <span>Explore 4 Core Pillars</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform duration-200" />
                </a>

                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 dark:bg-[#0A1D3B] text-[#071A38] dark:text-white border border-slate-200 dark:border-[#1A3D73] hover:border-[#D4AF37] hover:bg-white dark:hover:bg-[#103B82]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group cursor-pointer"
                >
                  <Users2 className="w-4 h-4 text-[#1746A2] dark:text-[#E8C85A]" />
                  <span>Meet Our Leadership &amp; Team</span>
                </Link>
              </div>
            </div>

            {/* Right Emblem Showcase: Pure Logo Display */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md flex items-center justify-center py-4">
                <img
                  src={isDark ? officialLogoFullDark : officialLogoFull}
                  alt="NF Venture Studio Official Logo"
                  className="w-full max-h-60 sm:max-h-72 object-contain drop-shadow-xl dark:drop-shadow-none hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </section>

          {/* =========================================================================
              SECTION 3: VISION & MISSION WITH DYNAMIC SYNERGY ANIMATION
             ========================================================================= */}
          <section className="space-y-6">
            <div className="max-w-2xl mx-auto text-center space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
                Guiding Principles
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#071A38] dark:text-white tracking-tight">
                Direction and Commitment
              </h2>
              <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300">
                The institutional foundation driving every incubation initiative.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {/* Vision Card */}
              <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#DCEEFF]/40 via-white to-white dark:from-[#0B1E3D] dark:via-[#091830] dark:to-[#071326] border border-slate-200 dark:border-[#1A3D73] shadow-md hover:shadow-xl hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <Quote className="absolute top-4 right-4 w-24 h-24 text-slate-200/50 dark:text-slate-800/20 -z-0 pointer-events-none group-hover:scale-105 transition-transform" />

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#1746A2] flex items-center justify-center text-white shadow-royal group-hover:rotate-6 transition-transform duration-300">
                      <Eye className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-black text-[#D4AF37] uppercase tracking-wider">
                        Direction
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#071A38] dark:text-white tracking-tight leading-tight">
                        Our Vision
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                    To build an accessible, collaborative and sustainable startup ecosystem that
                    enables innovators and entrepreneurs to transform ideas into impactful ventures.
                  </p>

                  <div className="pt-2 space-y-2 border-t border-slate-200/60 dark:border-slate-800">
                    {[
                      'Accessible innovation infrastructure across academic hubs',
                      'Collaborative cross-sector mentorship and resource sharing',
                      'Long-term sustainable ventures creating real societal value',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#52627A] dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1746A2] dark:text-[#60A5FA] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 relative z-10 flex items-center justify-between text-xs font-mono font-bold text-[#1746A2] dark:text-[#E8C85A]">
                  <span>STRATEGIC VISION</span>
                  <span className="text-[#D4AF37]">&bull; NFVS HORIZON</span>
                </div>
              </div>

              {/* Mission Card */}
              <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#DCEEFF]/40 via-white to-white dark:from-[#0B1E3D] dark:via-[#091830] dark:to-[#071326] border border-slate-200 dark:border-[#1A3D73] shadow-md hover:shadow-xl hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <Quote className="absolute top-4 right-4 w-24 h-24 text-slate-200/50 dark:text-slate-800/20 -z-0 pointer-events-none group-hover:scale-105 transition-transform" />

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#1746A2] flex items-center justify-center text-white shadow-royal group-hover:-rotate-6 transition-transform duration-300">
                      <Target className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-black text-[#D4AF37] uppercase tracking-wider">
                        Commitment
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#071A38] dark:text-white tracking-tight leading-tight">
                        Our Mission
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                    To connect academic innovation, entrepreneurial talent, industry expertise and
                    business resources through structured incubation and startup support.
                  </p>

                  <div className="pt-2 space-y-2 border-t border-slate-200/60 dark:border-slate-800">
                    {[
                      'Structured pre-incubation and incubation frameworks',
                      'Seamless integration of academic talent with industry leaders',
                      'Corporate-grade startup execution, IPR and funding readiness',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#52627A] dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1746A2] dark:text-[#60A5FA] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 relative z-10 flex items-center justify-between text-xs font-mono font-bold text-[#1746A2] dark:text-[#E8C85A]">
                  <span>ACTIONABLE MISSION</span>
                  <span className="text-[#D4AF37]">&bull; NFVS EXECUTION</span>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              SECTION 4: OUR CORE ROLE (THE 4 FOUNDATIONAL PILLARS)
             ========================================================================= */}
          <section id="pillars" className="space-y-8 scroll-mt-28">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                <Layers className="w-3.5 h-3.5" />
                <span>Four Essential Pillars</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071A38] dark:text-white tracking-tight">
                Our Core Role in the Ecosystem
              </h2>
              <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300">
                Serving as an incubator, catalyst, and corporate accelerator across four foundational roles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {roles.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl bg-white dark:bg-[#0A1D3B]/90 border border-slate-200 dark:border-[#1A3D73] shadow-sm hover:shadow-xl hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden group"
                  >
                    {/* Authentic Ultra-HD Image Banner */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-900 shrink-0">
                      <img
                        src={r.image}
                        alt={`${r.title} - ${r.desc}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                      {/* Top Left Pillar Tag */}
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-black tracking-wider bg-[#071A38]/90 text-[#D4AF37] border border-[#D4AF37]/40 shadow-xs backdrop-blur-xs">
                        {r.badge}
                      </span>

                      {/* Floating Theme Icon Badge */}
                      <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/95 dark:bg-[#10264A]/95 text-[#1746A2] dark:text-[#E8C85A] shadow-md flex items-center justify-center border border-white/40 dark:border-[#D4AF37]/30 backdrop-blur-xs group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <h3 className="text-base sm:text-lg font-black text-[#071A38] dark:text-white tracking-tight leading-snug">
                          {r.title}
                        </h3>
                        <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                          {r.desc}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="pt-2 space-y-1.5 border-t border-slate-100 dark:border-slate-800">
                          {r.highlights.map((hl, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-1.5 text-[11px] text-[#52627A] dark:text-slate-300">
                              <span className="text-[#D4AF37] font-bold mt-0.5">&bull;</span>
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Expanding Bottom Accent Line */}
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full overflow-hidden">
                        <div className="w-0 group-hover:w-full h-full bg-gradient-to-r from-[#1746A2] via-[#D4AF37] to-[#E8C85A] transition-all duration-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =========================================================================
              SECTION 5: THE 4-STAGE INCUBATION LIFECYCLE (INTERACTIVE TIMELINE)
             ========================================================================= */}
          <section className="space-y-8">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#1746A2]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
                <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Structured Journey</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071A38] dark:text-white tracking-tight">
                The Incubation Lifecycle
              </h2>
              <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300">
                How NF Venture Studio methodically transforms concepts into market-ready commercial enterprises.
              </p>
            </div>

            {/* Incubation Lifecycle 4-Stage Cards (Static Light Blue) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {lifecycleSteps.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl text-left border flex flex-col justify-between transition-all duration-300 bg-gradient-to-b from-[#EBF4FE] to-[#DBEEFD] dark:from-[#17437F] dark:to-[#10305C] text-[#071A38] dark:text-white border-[#B8D7FA] dark:border-[#387ACB]/60 shadow-sm hover:shadow-md"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-mono font-black text-[#1746A2] dark:text-[#E8C85A]">
                          {s.step}
                        </span>
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/95 dark:bg-[#1D4F94] text-[#1746A2] dark:text-[#E8C85A] shadow-xs border border-[#BFDBFE] dark:border-[#387ACB]/50">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider block text-[#1746A2] dark:text-sky-300">
                          {s.phase}
                        </span>
                        <h4 className="text-base font-extrabold tracking-tight mt-0.5 text-[#071A38] dark:text-white">
                          {s.title}
                        </h4>
                      </div>

                      <p className="text-xs leading-relaxed font-normal text-[#334155] dark:text-slate-200">
                        {s.desc}
                      </p>
                    </div>

                    <div className="pt-3.5 mt-3.5 border-t border-[#C3DCF7] dark:border-[#1E4D8A] space-y-1.5">
                      {s.deliverables.map((del, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-1.5 text-[11px] text-[#1E293B] dark:text-slate-200"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1746A2] dark:text-sky-300 shrink-0" />
                          <span className="font-medium">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =========================================================================
              SECTION 6: VALUE FOR ECOSYSTEM STAKEHOLDERS
             ========================================================================= */}
          <section className="space-y-8">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                <Network className="w-3.5 h-3.5" />
                <span>Collaborative Ecosystem</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071A38] dark:text-white tracking-tight">
                Value for Every Stakeholder
              </h2>
              <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300">
                How NF Venture Studio generates tangible advantages across the quadruple helix.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stakeholders.map((sh, idx) => {
                const Icon = sh.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-white dark:bg-[#0A1D3B]/90 border border-slate-200 dark:border-[#1A3D73] shadow-sm hover:shadow-xl hover:border-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold text-[#1746A2] dark:text-[#E8C85A] px-2.5 py-0.5 rounded-md bg-[#DCEEFF]/60 dark:bg-[#18386B] border border-[#1746A2]/20">
                          {sh.badge}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#103B82]/50 text-[#1746A2] dark:text-[#E8C85A] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-xl font-black text-[#071A38] dark:text-white tracking-tight">
                        {sh.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                        {sh.desc}
                      </p>

                      <div className="pt-3 space-y-2 border-t border-slate-100 dark:border-slate-800">
                        {sh.benefits.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 text-xs text-[#52627A] dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>


                  </div>
                );
              })}
            </div>
          </section>

          {/* =========================================================================
              SECTION 7: FINAL MAGNETIC CTA SECTION
             ========================================================================= */}
          <section className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-[#071A38] via-[#103B82] to-[#071A38] text-white border-2 border-[#D4AF37]/40 shadow-2xl relative overflow-hidden text-center space-y-6">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#1746A2]/30 blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-[#E8C85A] border border-[#D4AF37]/40">
                <Rocket className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Join the Venture Studio Movement</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                Ready to Build, Incubate &amp; Scale with Us?
              </h2>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl mx-auto font-normal">
                Whether you are a student founder, faculty researcher, academic institution, or industry
                leader, NF Venture Studio provides the infrastructure, guidance, and network to succeed.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xs transition-all duration-200 cursor-pointer"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <NFFooter
        onOpenApplication={handleOpenApplication}
        isDark={isDark}
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
      />

      <NFApplicationModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        initialTrack={selectedTrack}
        isDark={isDark}
      />
    </div>
  );
};
