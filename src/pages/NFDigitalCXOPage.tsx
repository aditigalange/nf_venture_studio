import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFFooter } from '../components/nf/NFFooter';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { NFBrochureModal } from '../components/nf/NFBrochureModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNFTheme } from '../hooks/useNFTheme';
import {
  Cpu,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  Target,
  Briefcase,
  Layers,
  Lock,
  DollarSign,
  Megaphone,
  Server,
  Compass,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Activity,
  FileText,
  Building2,
} from 'lucide-react';

export const NFDigitalCXOPage: React.FC = () => {
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

  // The 11 Approved Digital CXO Services
  const cxoServices = [
    {
      num: '01',
      acronym: 'CEO',
      title: 'Chief Executive Officer',
      domain: 'Executive Leadership & Governance',
      icon: Briefcase,
      description:
        'Business leadership, strategic goals, major decisions, and overall business growth.',
      deliverables: [
        'Venture vision articulation & organizational structuring',
        'Stakeholder alignment & board advisory',
        'Strategic growth milestones & milestone governance',
      ],
    },
    {
      num: '02',
      acronym: 'CFO',
      title: 'Chief Financial Officer',
      domain: 'Fiscal Strategy & Risk Management',
      icon: DollarSign,
      description:
        'Financial planning, budgeting, cash flow, financial reporting, and financial risk assessment.',
      deliverables: [
        'Runway modeling & capital allocation planning',
        'Unit economics & cash burn optimization',
        'Financial reporting & compliance hygiene',
      ],
    },
    {
      num: '03',
      acronym: 'CTO',
      title: 'Chief Technology Officer',
      domain: 'Technology Strategy & Systems',
      icon: Cpu,
      description:
        'Technology strategy, software development, technical architecture, and technology adoption.',
      deliverables: [
        'Software architecture & cloud infrastructure planning',
        'Scalable MVP engineering & tech stack selection',
        'Technical roadmap & developer workflow standards',
      ],
    },
    {
      num: '04',
      acronym: 'CMO',
      title: 'Chief Marketing Officer',
      domain: 'Brand Positioning & Growth',
      icon: Megaphone,
      description:
        'Marketing strategy, brand positioning, customer acquisition, and promotional campaigns.',
      deliverables: [
        'Brand identity guidelines & narrative framing',
        'Target audience definition & go-to-market rollout',
        'Customer acquisition channel evaluation',
      ],
    },
    {
      num: '05',
      acronym: 'COO',
      title: 'Chief Operating Officer',
      domain: 'Operations & Process Execution',
      icon: Activity,
      description:
        'Daily operations, business processes, operational efficiency, and execution.',
      deliverables: [
        'Operating rhythm & sprint planning governance',
        'Resource coordination & cross-functional workflows',
        'Process optimization & efficiency metrics',
      ],
    },
    {
      num: '06',
      acronym: 'CHRO',
      title: 'Chief Human Resources Officer',
      domain: 'Talent & Organizational Culture',
      icon: Users,
      description:
        'Recruitment strategy, workforce planning, employee policies, talent development, and HR systems.',
      deliverables: [
        'Founding team hiring & role structuring',
        'Workplace policies & institutional talent governance',
        'Performance frameworks & advisory network alignment',
      ],
    },
    {
      num: '07',
      acronym: 'CIO',
      title: 'Chief Information Officer',
      domain: 'Enterprise Information Systems',
      icon: Server,
      description:
        'Information systems, IT infrastructure, enterprise software, and digital information management.',
      deliverables: [
        'Enterprise IT infrastructure & SaaS tooling setup',
        'Database architecture & internal knowledge systems',
        'Information lifecycle & digital asset management',
      ],
    },
    {
      num: '08',
      acronym: 'CSO',
      title: 'Chief Strategy Officer',
      domain: 'Market Analysis & Strategic Alliances',
      icon: Compass,
      description:
        'Business strategy, market analysis, growth planning, competitive positioning, and strategic partnerships.',
      deliverables: [
        'Market landscape analysis & competitive moats',
        'Strategic partnership evaluation & joint ventures',
        'Long-term expansion roadmaps & risk hedging',
      ],
    },
    {
      num: '09',
      acronym: 'CPO',
      title: 'Chief Product Officer',
      domain: 'Product Strategy & Market Fit',
      icon: Layers,
      description:
        'Product strategy, product development, market fit, feature prioritization, and roadmaps.',
      deliverables: [
        'Product-market fit (PMF) hypothesis testing',
        'Feature backlog prioritization & sprint scoping',
        'User experience feedback loops & prototype validation',
      ],
    },
    {
      num: '10',
      acronym: 'CISO',
      title: 'Chief Information Security Officer',
      domain: 'Cybersecurity & Data Governance',
      icon: Lock,
      description:
        'Cybersecurity strategy, information security policies, risk management, and data protection.',
      deliverables: [
        'Security hygiene & vulnerability risk assessment',
        'Access control protocols & data protection policies',
        'Safe development lifecycles & compliance readiness',
      ],
    },
    {
      num: '11',
      acronym: 'CCO',
      title: 'Chief Commercial Officer',
      domain: 'Commercial Sales & Revenue Growth',
      icon: TrendingUp,
      description:
        'Revenue growth, sales strategy, commercial partnerships, customer relationships, and business development.',
      deliverables: [
        'Commercial pricing frameworks & contract structures',
        'B2B sales pipelines & client relationship models',
        'Revenue channel diversification & pilot agreements',
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col font-sans selection:bg-[#1746A2] selection:text-white relative overflow-x-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#071A38] text-slate-100' : 'bg-[#FFFFFF] text-[#071A38]'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Sticky Global Navigation */}
      <NFNavbar
        onOpenApplication={handleOpenApplication}
        onOpenBrochure={handleOpenBrochure}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {/* Spacer below fixed navbar */}
        <div className="h-[68px] sm:h-[80px]" aria-hidden="true" />

        {/* 1. Page Hero / Introduction */}
        <section className="relative py-14 sm:py-18 lg:py-22 bg-gradient-to-b from-[#F0F5FD] via-white to-[#F0F5FD] dark:from-[#071A38] dark:via-[#0A2552] dark:to-[#071A38] text-[#071A38] dark:text-white border-b border-slate-200 dark:border-[#103B82]/50 overflow-hidden transition-colors duration-300">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1746A2]/10 dark:bg-[#2864C5]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="section-shell relative z-10 max-w-4xl mx-auto text-center space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DCEEFF]/80 dark:bg-[#103B82]/85 text-[#1746A2] dark:text-[#E8C85A] border border-[#1746A2]/20 dark:border-[#D4AF37]/45 text-xs font-bold tracking-wider uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Executive Digital Advisory &bull; Leadership on Demand</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-[#071A38] dark:text-white font-display">
              Digital CXO{' '}
              <span className="text-[#D4AF37] drop-shadow-xs dark:drop-shadow-sm">Suite</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl font-semibold text-[#1746A2] dark:text-sky-300 max-w-2xl mx-auto">
              Fractional &amp; On-Demand Executive Advisory for Scaling Ventures &amp; Academic Incubators
            </p>

            {/* Approved Verbatim Introduction */}
            <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
              An on-demand digital services offering designed specifically to empower academic incubation centres and campus ventures with corporate-grade digital leadership, software architecture, and systems strategy.
            </p>

            {/* Action Group */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#cxo-directory"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-[#071A38]/90 text-[#071A38] dark:text-white hover:text-[#1746A2] dark:hover:text-[#D4AF37] border border-slate-200 dark:border-[#103B82] font-semibold text-sm transition-all duration-200 hover:border-[#1746A2] dark:hover:border-[#D4AF37] shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1746A2] dark:focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>View All 11 Roles</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </a>
            </div>

            {/* Authentic Strategy & Executive Advisory Showcase */}
            <div className="pt-6 max-w-2xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl group">
                <img
                  src="/assets/photos/cxo_strategy_session.jpg"
                  alt="Indian business professionals and executive mentors in venture strategy and operational roadmap meeting"
                  className="w-full h-[220px] sm:h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A38]/90 via-[#071A38]/30 to-transparent flex flex-col justify-end p-4 text-left">
                  <span className="text-[11px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                    Executive Strategy &bull; Fractional Leadership
                  </span>
                  <p className="text-xs text-white/95 font-medium mt-0.5">
                    Bridging strategic planning, software architecture, and venture operations for collegiate startups
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* 3. The 11 Digital CXO Services Directory */}
        <section id="cxo-directory" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#071A38] text-[#071A38] dark:text-white transition-colors duration-300">
          <div className="section-shell space-y-12">
            {/* Section Heading */}
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
                <Target className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Executive Roles Directory</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
                The 11 Digital CXO Advisory Functions
              </h2>

              <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                Comprehensive C-suite leadership designed to bridge domain expertise gaps across technology, governance, product, finance, and commercial growth.
              </p>
            </div>

            {/* 11 Services Responsive Centered Grid (1-col mobile, 2-col tablet, 3-col desktop with last 2 cards centered) */}
            <div className="flex flex-wrap justify-center gap-6 lg:gap-7">
              {cxoServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.acronym}
                    id={`cxo-${service.acronym.toLowerCase()}`}
                    className="w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3.5rem)/3)] shrink-0 p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] dark:bg-[#0A1D3B]/90 border border-slate-200 dark:border-[#1A3D73] shadow-sm hover:shadow-xl hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden scroll-mt-24"
                  >
                    {/* Top Subtle Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1746A2]/20 to-transparent group-hover:via-[#D4AF37] transition-all duration-500" />

                    <div className="space-y-4">
                      {/* Top Bar: Icon & Acronym Badge */}
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-[#1746A2] text-white flex items-center justify-center shadow-md group-hover:rotate-3 transition-transform duration-300 shrink-0">
                          <Icon className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <span className="text-base sm:text-lg font-black font-mono text-[#071A38] dark:text-white tracking-tight">
                          {service.acronym}
                        </span>
                      </div>

                      {/* Full Role Title */}
                      <h3 className="text-lg sm:text-xl font-black text-[#071A38] dark:text-white tracking-tight leading-snug">
                        {service.title}
                      </h3>

                      {/* Approved Verbatim Description */}
                      <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                        {service.description}
                      </p>

                      {/* Key Deliverables */}
                      <div className="space-y-2 pt-2 border-t border-slate-200/80 dark:border-slate-800">
                        <span className="text-[11px] font-mono font-bold text-[#52627A] dark:text-slate-400 uppercase tracking-wider block">
                          Core Advisory Focus:
                        </span>
                        {service.deliverables.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs text-[#52627A] dark:text-slate-300 font-normal leading-relaxed"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1746A2] dark:text-[#60A5FA] mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Operational Value for Academic Institutions & Startups */}
        <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#0A1D3B] text-[#071A38] dark:text-white border-y border-slate-200 dark:border-[#1A3D73] transition-colors duration-300">
          <div className="section-shell space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
                <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Institutional &amp; Founder Impact</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
                Why Engage Fractional Executive Advisory?
              </h2>

              <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                Empowering academic incubation cells and early-stage ventures with corporate-grade governance without full-time executive payroll.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: 'Cost-Effective Scale',
                  desc: 'Access senior enterprise guidance calibrated to specific sprint cycles and milestone goals, avoiding high permanent hiring costs.',
                  icon: TrendingUp,
                },
                {
                  title: 'Institutional Capability',
                  desc: 'Equip campus incubation centres and faculty labs with CTO and CIO expertise for software architecture, compliance, and cloud systems.',
                  icon: Building2,
                },
                {
                  title: 'Venture Acceleration',
                  desc: 'Provide early-stage founders with CPO and CMO product validation and go-to-market strategies to improve investor readiness.',
                  icon: Target,
                },
              ].map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-[#071A38] border border-slate-200 dark:border-[#103B82] shadow-sm hover:shadow-md transition-all space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#DCEEFF] dark:bg-[#103B82] flex items-center justify-center text-[#1746A2] dark:text-[#E8C85A]">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-base font-bold text-[#071A38] dark:text-white">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Call-to-Action Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-[#F0F5FD] dark:bg-[#103B82] text-[#071A38] dark:text-white overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1746A2]/10 dark:bg-[#2864C5]/25 rounded-full blur-2xl pointer-events-none" />

          <div className="section-shell relative z-10 max-w-4xl mx-auto text-center space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DCEEFF] dark:bg-white/10 backdrop-blur-md border border-[#1746A2]/20 dark:border-[#D4AF37]/40 text-xs font-bold uppercase tracking-wider text-[#1746A2] dark:text-[#E8C85A]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Engage Fractional Leadership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-[#071A38] dark:text-white">
              Ready to Accelerate with Digital CXO Guidance?
            </h2>

            <p className="text-base sm:text-lg text-[#52627A] dark:text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
              Connect with NF Venture Studio to assess your venture or institution's strategic leadership and technical advisory requirements.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">


              <Link
                to="/#academic-incubation"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#071A38]/90 text-[#071A38] dark:text-white hover:text-[#1746A2] dark:hover:text-[#D4AF37] border border-slate-200 dark:border-[#103B82] font-semibold text-sm transition-all duration-200 hover:border-[#1746A2] dark:hover:border-[#D4AF37] shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1746A2] dark:focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>Academic Incubation Pathway</span>
              </Link>

              <Link
                to="/#individual-incubation"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#071A38]/90 text-[#071A38] dark:text-white hover:text-[#1746A2] dark:hover:text-[#D4AF37] border border-slate-200 dark:border-[#103B82] font-semibold text-sm transition-all duration-200 hover:border-[#1746A2] dark:hover:border-[#D4AF37] shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1746A2] dark:focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>Startup Services Pathway</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <NFFooter
        onOpenApplication={handleOpenApplication}
        isDark={isDark}
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
      />

      {/* Interactive Application Modal */}
      <NFApplicationModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        initialTrack={selectedTrack}
        isDark={isDark}
      />

      {/* Interactive 12-Page Official Brochure Modal */}
      <NFBrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </div>
  );
};
