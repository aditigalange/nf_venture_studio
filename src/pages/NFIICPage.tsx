import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFFooter } from '../components/nf/NFFooter';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { NFBrochureModal } from '../components/nf/NFBrochureModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNFTheme } from '../hooks/useNFTheme';
import {
  Award,
  Landmark,
  Building2,
  Calendar,
  Compass,
  FileCheck2,
  ShieldCheck,
  ExternalLink,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Layers,
  GraduationCap,
  FlaskConical,
  Rocket,
  CheckCircle2,
  Info,
  Scale,
  Users,
  FileText,
  HelpCircle,
  Clock,
  BookOpen,
  Lightbulb,
  Target,
  Presentation,
  AlertCircle,
} from 'lucide-react';

export const NFIICPage: React.FC = () => {
  const { theme, isDark, toggleTheme } = useNFTheme();

  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('institutional');
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

  const handleOpenApplication = (track: string = 'institutional') => {
    setSelectedTrack(track);
    setIsAppModalOpen(true);
  };

  const handleOpenBrochure = () => {
    setIsBrochureOpen(true);
  };

  // Section 1: Who Benefits Breakdown (7 Groups)
  const iicBeneficiaries = [
    {
      group: 'Students',
      icon: GraduationCap,
      desc: 'Gain practical exposure to problem solving, hackathons, prototyping, and startup fundamentals, preparing them for technology entrepreneurship or high-impact careers.',
    },
    {
      group: 'Faculty Members',
      icon: Users,
      desc: 'Acquire mentor-training, IP commercialization guidance, and frameworks to guide student projects into patent disclosures and institutional spin-offs.',
    },
    {
      group: 'Researchers',
      icon: FlaskConical,
      desc: 'Bridge laboratory R&D and market adoption through structured Technology Readiness Level (TRL) progression and prior-art search awareness.',
    },
    {
      group: 'Student Innovators',
      icon: Lightbulb,
      desc: 'Access campus fab-labs, prototyping support, proof-of-concept testing, and peer brainstorming to turn novel ideas into working demonstrators.',
    },
    {
      group: 'Student Clubs & Teams',
      icon: Target,
      desc: 'Coordinate campus hackathons, robotics challenges, coding sprints, and innovation exhibitions under a recognized institutional umbrella.',
    },
    {
      group: 'Startups & Aspiring Founders',
      icon: Rocket,
      desc: 'Receive validation on Business Model Canvases (BMC), legal entity incorporation, pre-incubation mentorship, and angel/grant pitching preparation.',
    },
    {
      group: 'Colleges & Universities',
      icon: Building2,
      desc: 'Strengthen campus innovation ecosystem, meet NAAC/NIRF innovation and IPR parameters, and align with National Innovation and Startup Policy (NISP).',
    },
  ];

  // Section 2: What an IIC Does (14 Core Functions)
  const iicFunctions = [
    {
      title: 'Innovation & Entrepreneurship Awareness',
      desc: 'Conducting campus-wide orientation sessions to demystify startup journeys and build an active culture of creative problem-solving.',
      icon: Sparkles,
    },
    {
      title: 'Idea Generation & Ideation Workshops',
      desc: 'Organizing structured problem-identification clinics and design sprints to formulate actionable venture concepts.',
      icon: Lightbulb,
    },
    {
      title: 'Design Thinking & Problem Solving',
      desc: 'Hosting practical workshops teaching human-centered design, user empathy mapping, and rapid iterative prototyping.',
      icon: Compass,
    },
    {
      title: 'Innovation Challenges & Competitions',
      desc: 'Executing intra-collegiate hackathons, ideathons, and technical design challenges with merit evaluation rubrics.',
      icon: Award,
    },
    {
      title: 'Prototype Development & PoC Awareness',
      desc: 'Guiding student engineers through proof-of-concept (PoC) validation, bill-of-materials (BOM) estimation, and hardware fabrication.',
      icon: Layers,
    },
    {
      title: 'Intellectual Property Rights (IPR) Sessions',
      desc: 'Delivering foundational workshops on patent prior-art searching, copyright in software, and invention disclosure filing.',
      icon: ShieldCheck,
    },
    {
      title: 'Entrepreneurship & Startup Orientation',
      desc: 'Educating prospective founders on venture fundamentals, founder agreements, and compliance requirements under Startup India.',
      icon: Rocket,
    },
    {
      title: 'Business-Model & Canvas Workshops',
      desc: 'Guiding teams through the Business Model Canvas (BMC), customer discovery, unit economics, and value proposition testing.',
      icon: FileCheck2,
    },
    {
      title: 'Expert Talks & Industry Interactions',
      desc: 'Inviting seasoned founders, corporate executives, and industry domain leaders to share real-world execution insights.',
      icon: Presentation,
    },
    {
      title: 'Mentorship & Guidance Sessions',
      desc: 'Matching emerging student startup teams with domain-specialist alumni, technical mentors, and legal advisors.',
      icon: Users,
    },
    {
      title: 'Innovation Showcases & Demonstrations',
      desc: 'Creating campus demo days, product exhibitions, and annual innovation festivals to display working student hardware and software.',
      icon: Sparkles,
    },
    {
      title: 'Startup Ecosystem & Incubation Awareness',
      desc: 'Connecting campus innovators with regional incubators, prototyping labs, DST-supported centres, and funding gateways.',
      icon: Landmark,
    },
    {
      title: 'Stakeholder Collaboration',
      desc: 'Facilitating active bridges between academic departments, student innovation cells, industry sponsors, and research councils.',
      icon: Building2,
    },
    {
      title: 'Documentation, Reporting & Monitoring',
      desc: 'Maintaining meticulous activity logs, student attendance records, feedback summaries, and submission on official reporting portals.',
      icon: FileText,
    },
  ];

  // Section 4: 4 Activity Streams recognized by MoE-IIC
  const activityStreams = [
    {
      id: 'calendar',
      title: 'IIC Calendar Activities',
      badge: 'Core Mandate',
      badgeColor: 'bg-blue-50 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300 dark:border-blue-700',
      description:
        'Standard theme-based activities proposed or prescribed quarterly by the Ministry of Education Innovation Cell, addressing core pillars of innovation, entrepreneurship, and intellectual property.',
    },
    {
      id: 'mic-driven',
      title: 'MIC-Driven Initiatives',
      badge: 'National Programmes',
      badgeColor: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700',
      description:
        'National central initiatives, Smart India Hackathon (SIH) participation, Yukti National Innovation Repository submissions, and Ministry leadership broadcasts.',
    },
    {
      id: 'self-driven',
      title: 'Self-Driven Activities',
      badge: 'Autonomous Campus Initiatives',
      badgeColor: 'bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300 dark:border-amber-700',
      description:
        'Autonomous campus-level events, local industry roundtables, university hackathons, and technology bootcamps customized to the institution’s specific engineering disciplines.',
    },
    {
      id: 'celebration-days',
      title: 'Celebration Days',
      badge: 'National Observances',
      badgeColor: 'bg-purple-50 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300 dark:border-purple-700',
      description:
        'Nationally designated commemorative observances promoting scientific inquiry and entrepreneurship (World IP Day, National Science Day, National Innovation Day, National Entrepreneurship Day).',
    },
  ];

  // Section 7: Official Resources Directory (All 10 required resources)
  const official10Resources = [
    {
      id: 'iic',
      acronym: 'IIC',
      name: "Institution's Innovation Council",
      sponsoringBody: "Ministry of Education's Innovation Cell (MIC)",
      url: 'https://iic.mic.gov.in/',
      domain: 'iic.mic.gov.in',
      tag: 'Campus Innovation Network',
      icon: Award,
      description:
        'Official statutory portal established by the Ministry of Education to establish, monitor, and compute annual performance ratings of campus innovation councils across Indian Higher Educational Institutions (HEIs).',
    },
    {
      id: 'moe',
      acronym: 'MoE',
      name: 'Ministry of Education',
      sponsoringBody: 'Government of India',
      url: 'https://www.education.gov.in/',
      domain: 'education.gov.in',
      tag: 'Apex Policy Ministry',
      icon: Landmark,
      description:
        'Apex central ministry formulating national higher education policies, academic standards, research promotion schemes, and the National Innovation and Startup Policy (NISP) for HEIs.',
    },
    {
      id: 'mic',
      acronym: 'MIC',
      name: "Ministry of Education's Innovation Cell",
      sponsoringBody: 'Special Innovation Directorate / AICTE',
      url: 'https://iic.mic.gov.in/',
      domain: 'iic.mic.gov.in',
      tag: 'National Innovation Cell',
      icon: Lightbulb,
      description:
        'Dedicated innovation wing driving national initiatives including Smart India Hackathon (SIH), Yukti National Innovation Repository, and institutional innovation rankings.',
    },
    {
      id: 'nidhi',
      acronym: 'NIDHI',
      name: 'National Initiative for Developing & Harnessing Innovations',
      sponsoringBody: 'Department of Science & Technology (DST)',
      url: 'https://nidhi.dst.gov.in/',
      domain: 'nidhi.dst.gov.in',
      tag: 'National Umbrella Scheme',
      icon: Layers,
      description:
        'DST umbrella programme nurturing knowledge-based technology startups through dedicated non-dilutive grant schemes including NIDHI-PRAYAS (prototyping) and NIDHI-EIR (fellowships).',
    },
    {
      id: 'dst',
      acronym: 'DST',
      name: 'Department of Science and Technology',
      sponsoringBody: 'Ministry of Science & Technology',
      url: 'https://dst.gov.in/',
      domain: 'dst.gov.in',
      tag: 'National S&T Agency',
      icon: Compass,
      description:
        'Premier central department funding scientific R&D, establishing Technology Business Incubators (TBIs), and advancing national science and technology infrastructure.',
    },
    {
      id: 'dpiit',
      acronym: 'DPIIT',
      name: 'Department for Promotion of Industry and Internal Trade',
      sponsoringBody: 'Ministry of Commerce & Industry',
      url: 'https://dpiit.gov.in/',
      domain: 'dpiit.gov.in',
      tag: 'Startup India Custodian',
      icon: ShieldCheck,
      description:
        'Statutory custodian of the Startup India initiative, granting official DPIIT startup recognition, tax exemptions (Section 80-IAC), and intellectual property facilitation.',
    },
    {
      id: 'mca',
      acronym: 'MCA',
      name: 'Ministry of Corporate Affairs',
      sponsoringBody: 'Government of India',
      url: 'https://www.mca.gov.in/',
      domain: 'mca.gov.in',
      tag: 'Statutory Administration',
      icon: Building2,
      description:
        'Regulatory ministry administering company registrations, Section 8 non-profit incubator incorporation, Limited Liability Partnerships (LLPs), and corporate compliance.',
    },
    {
      id: 'niti',
      acronym: 'NITI Aayog',
      name: 'National Institution for Transforming India',
      sponsoringBody: 'Apex Policy Think Tank, GoI',
      url: 'https://www.niti.gov.in/',
      domain: 'niti.gov.in',
      tag: 'Policy Think Tank',
      icon: FileCheck2,
      description:
        'Apex government think tank driving strategic development agendas, frontier innovation frameworks, and the Atal Innovation Mission (AIM) supporting nationwide incubators.',
    },
    {
      id: 'nirf',
      acronym: 'NIRF',
      name: 'National Institutional Ranking Framework',
      sponsoringBody: 'Ministry of Education',
      url: 'https://www.nirfindia.org/',
      domain: 'nirfindia.org',
      tag: 'National Ranking Authority',
      icon: Award,
      description:
        'National ranking methodology evaluating Higher Educational Institutions in India, featuring dedicated parameters for research, professional practice, and innovation.',
    },
    {
      id: 'ipindia',
      acronym: 'IP India',
      name: 'Intellectual Property India (CGPDTM)',
      sponsoringBody: 'DPIIT / Ministry of Commerce & Industry',
      url: 'https://ipindia.gov.in/',
      domain: 'ipindia.gov.in',
      tag: 'Statutory IP Office',
      icon: Scale,
      description:
        'Office of the Controller General of Patents, Designs and Trade Marks administering statutory registration, public searches (InPASS), and protection of intellectual property in India.',
    },
  ];

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
        {/* 1. Hero Section & IIC Overview */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] to-white dark:from-[#0A1D3B] dark:to-[#071A38] border-b border-slate-200/80 dark:border-slate-800">
          <div className="section-shell space-y-8">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Link to="/" className="hover:text-[#1746A2] dark:hover:text-[#D4AF37] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#071A38] dark:text-white font-semibold">IIC &amp; Institutional Innovation</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>Ministry of Education Innovation Cell (MIC) Context</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A38] dark:text-white tracking-tight leading-tight">
                  Institution’s Innovation Council (IIC) &amp; Academic Innovation
                </h1>

                <p className="text-base sm:text-lg text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                  The Institution’s Innovation Council (IIC) is an initiative established under the Ministry of Education’s Innovation Cell (MIC) to foster a vibrant culture of innovation, creative problem-solving, and entrepreneurship across Higher Educational Institutions (HEIs) throughout India.
                </p>

                <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                  Through planned calendar activities, ideation sprints, design-thinking workshops, prototype development, intellectual property awareness, and startup incubation, an IIC activates the potential of students, faculty, and research scholars within academic institutions.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl group">
                  <img
                    src="/assets/photos/iic_sih_showcase.jpg"
                    alt="Indian university engineering students participating in Smart India Hackathon under MoE Innovation Cell"
                    className="w-full h-[260px] sm:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A38]/90 via-[#071A38]/30 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[11px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                      Campus Innovation Showcase
                    </span>
                    <p className="text-xs text-white/95 font-medium mt-0.5">
                      Indian student innovators demonstrating prototypes under the Smart India Hackathon &amp; IIC framework
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* 2. What an IIC Does (14 Typical Functions) */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#071A38]">
          <div className="section-shell space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-wider uppercase">
                Functional Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
                What an Institution’s Innovation Council (IIC) Does
              </h2>
              <p className="text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                A structured overview of typical IIC functions designed to foster innovation, entrepreneurship, and research commercialization across collegiate campuses.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {iicFunctions.map((func, idx) => {
                const Icon = func.icon;
                return (
                  <div
                    key={idx}
                    className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-4.5rem)/4)] shrink-0 p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0A1D3B]/70 border border-slate-200 dark:border-[#1A3D73] shadow-xs hover:border-[#D4AF37] hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-[#1746A2]/10 dark:bg-[#103B82]/50 text-[#1746A2] dark:text-[#E8C85A] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#071A38] dark:text-white tracking-tight">
                        {func.title}
                      </h3>
                      <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                        {func.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Who Benefits from IIC Activities (7 Groups) */}
        <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#0A1D3B]/40 border-t border-slate-200 dark:border-slate-800">
          <div className="section-shell space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-wider uppercase">
                Stakeholder Impact
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
                Who Benefits from IIC Activities
              </h2>
              <p className="text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                Clear value propositions across all levels of the collegiate academic hierarchy and startup ecosystem.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {iicBeneficiaries.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div
                    key={idx}
                    className="w-full sm:w-[calc(50%_-_0.75rem)] lg:w-[calc(25%_-_1.125rem)] p-6 rounded-2xl bg-white dark:bg-[#071A38] border border-slate-200 dark:border-[#1A3D73] shadow-xs hover:border-[#D4AF37] transition-all space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1746A2]/10 dark:bg-[#103B82]/50 text-[#1746A2] dark:text-[#E8C85A] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-base font-bold text-[#071A38] dark:text-white">
                      {b.group}
                    </h3>
                    <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                      {b.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Innovation & Entrepreneurship Activity Categories (4 Streams) */}
        <section className="py-16 sm:py-20 bg-white dark:bg-[#071A38] border-t border-slate-200 dark:border-slate-800">
          <div className="section-shell space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-wider uppercase">
                Mandated Streams
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
                The 4 Innovation Activity Categories
              </h2>
              <p className="text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                Understanding the 4 activity streams recognized by the Ministry of Education’s Innovation Cell for institutional engagement and score computation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activityStreams.map((stream) => (
                <div
                  key={stream.id}
                  className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0A1D3B]/70 border border-slate-200 dark:border-[#1A3D73] space-y-3 shadow-xs hover:border-[#D4AF37] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border inline-block ${stream.badgeColor}`}>
                      {stream.badge}
                    </span>
                    <h3 className="text-base font-bold text-[#071A38] dark:text-white">
                      {stream.title}
                    </h3>
                    <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed">
                      {stream.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Official IIC Resources and Government Portals (All 10 Resources) */}
        <section id="official-portals" className="py-16 sm:py-20 bg-white dark:bg-[#071A38] border-t border-slate-200 dark:border-slate-800">
          <div className="section-shell space-y-12">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#1746A2]/10 text-[#1746A2] dark:bg-[#103B82]/30 dark:text-[#E8C85A]">
                <Landmark className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Statutory Resources Directory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
                Official IIC Resources and Government Portals
              </h2>
              <p className="text-sm text-[#52627A] dark:text-slate-300 leading-relaxed">
                Direct external references to authoritative central ministries, regulatory departments, and national programmes supporting higher education incubation, ranking, and student venture creation.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {official10Resources.map((portal) => {
                const Icon = portal.icon;
                return (
                  <div
                    key={portal.id}
                    className="w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-4.5rem)/4)] shrink-0 p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#0A1D3B]/80 border border-slate-200 dark:border-[#1A3D73] shadow-xs hover:shadow-lg hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="w-10 h-10 rounded-xl bg-[#1746A2] text-white flex items-center justify-center shadow-xs">
                          <Icon className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <a
                          href={portal.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-[#1746A2] dark:hover:text-[#D4AF37] hover:bg-slate-200/60 dark:hover:bg-[#103B82]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                          title={`Open ${portal.name} portal`}
                          aria-label={`Open official ${portal.name} portal in a new tab`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider block">
                          {portal.acronym} • {portal.tag}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-[#071A38] dark:text-white tracking-tight">
                          {portal.name}
                        </h3>
                        <p className="text-[11px] font-mono text-[#1746A2] dark:text-sky-300">
                          {portal.sponsoringBody}
                        </p>
                      </div>

                      <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                        {portal.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-200/70 dark:border-slate-800">
                      <a
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1746A2] dark:text-[#E8C85A] hover:text-[#D4AF37] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                      >
                        <span>Visit {portal.domain}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cross-Link to Intellectual Property Rights (IPR) Page */}
        <section className="py-12 bg-slate-50 dark:bg-[#0A1D3B]/50 border-t border-slate-200 dark:border-slate-800">
          <div className="section-shell">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#071A38] via-[#103B82] to-[#1746A2] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-white/10 text-[#E8C85A] border border-white/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Patent &amp; IPR Protection</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Protect Campus Inventions with Dedicated IPR Services
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Explore our comprehensive 9-category IPR directory covering Patents, Copyrights, Trademarks, Industrial Designs, Trade Secrets, and guided prior-art search across official IP India portals.
                </p>
              </div>
              <Link
                to="/ipr"
                className="px-6 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#F3C641] text-[#071A38] font-bold text-sm inline-flex items-center gap-2 shrink-0 transition-all shadow-md hover:shadow-xl"
              >
                <span>View IPR Services &amp; Portals</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>


      </main>

      {/* Global Footer */}
      <NFFooter onOpenApplication={() => handleOpenApplication('institutional')} />

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
