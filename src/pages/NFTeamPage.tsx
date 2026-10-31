import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFFooter } from '../components/nf/NFFooter';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNFTheme } from '../hooks/useNFTheme';
import {
  User,
  Users,
  Building2,
  Rocket,
  ArrowRight,
  ShieldCheck,
  Lightbulb,
  Award,
  Compass,
  FileText,
  Mail,
  Phone,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  MapPin,
} from 'lucide-react';
import ashokPatilImg from '../../assets/ashok_patil_desk.png';
import nileshSirImg from '../../assets/nilesh_sir.jpeg';
import presidentSignatureImg from '../../assets/president_signature.png';
import vicePresidentImg from '../../assets/voice_president.jpeg';
import vicePresidentSignatureImg from '../../assets/vice_president_signature.png';
import ceoSignatureImg from '../../assets/ashok_patil_signature_official.png';
import pallaviShirkeImg from '../../assets/pallavi shrike.png';
import mohammadAshparazImg from '../../assets/Mohammed Ashparaz.png';
import sayaliKaleImg from '../../assets/sayali kale.jpeg';
import officialEmblem from '../../assets/nfvs_official_emblem.png';

export interface PillarMember {
  id: string;
  name: string;
  designation: string;
  shortRole: string;
  imageSrc: string;
  initials: string;
  focus: string;
  responsibilities: string[];
}

export const NFTeamPage: React.FC = () => {
  const { theme, isDark, toggleTheme } = useNFTheme();

  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('student');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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

  // Dedicated CEO Profile
  const ceoMember: PillarMember = {
    id: 'ashok-patil',
    name: 'Mr. Ashok K. Patil',
    designation: 'Chief Executive Officer (CEO)',
    shortRole: 'CEO',
    imageSrc: ashokPatilImg,
    initials: 'AP',
    focus:
      'Executive venture leadership, strategic institutional partnerships, turnkey incubation deployment, and startup venture syndication.',
    responsibilities: ['Venture Creation Strategy', 'Institutional Governance', 'Investor Syndication'],
  };

  // 3 Core Team Members for "Our Team"
  const teamMembers: PillarMember[] = [
    {
      id: 'pallavi-shirke',
      name: 'Mrs. Pallavi Shirke',
      designation: 'Chief Financial Officer (CFO)',
      shortRole: 'CFO',
      imageSrc: pallaviShirkeImg,
      initials: 'PS',
      focus:
        'Financial governance, fiscal strategy, venture grant allocation, statutory compliance, and capital structuring for student & faculty startups.',
      responsibilities: ['Fiscal Strategy & Audits', 'Venture Grant Allocation', 'Capital Structuring'],
    },
    {
      id: 'mohammad-ashparaz',
      name: 'Mr. Mohammad Ashparaz',
      designation: 'Chief Marketing Officer (CMO)',
      shortRole: 'CMO',
      imageSrc: mohammadAshparazImg,
      initials: 'MA',
      focus:
        'Ecosystem positioning, institutional partner outreach, student innovator recruitment, commercialization funnels, and corporate alliances.',
      responsibilities: ['Ecosystem Marketing', 'Institutional Alliances', 'Founder Acquisition'],
    },
    {
      id: 'sayali-kale',
      name: 'Ms. Sayali Kale',
      designation: 'HR A. Executive',
      shortRole: 'HR',
      imageSrc: sayaliKaleImg,
      initials: 'SK',
      focus:
        'Venture talent sourcing, human resource administration, founder-team formation, internship fellowship programs, and organizational culture.',
      responsibilities: ['Talent Sourcing & Culture', 'Team Formation Support', 'Fellowship Cohorts'],
    },
  ];

  // Sidebar navigation items list in approved order (President first)
  const sidebarNavItems = [
    { id: 'from-presidents-desk', label: "President's Message", path: '/from-presidents-desk', icon: Award },
    { id: 'from-vice-presidents-desk', label: "Vice-President's Message", path: '/from-vice-presidents-desk', icon: Compass },
    { id: 'from-ceos-desk', label: "CEO's Desk", path: '/from-ceos-desk', icon: User },
    { id: 'our-team', label: 'Our Team', path: '/team', icon: Users },
  ];

  // Active tab state management: Default for /team is Desk of President
  const getInitialTab = (): string => {
    if (location.pathname === '/from-ceos-desk') return 'from-ceos-desk';
    if (location.pathname === '/from-vice-presidents-desk') return 'from-vice-presidents-desk';
    if (location.pathname === '/from-presidents-desk') return 'from-presidents-desk';
    if (location.search.includes('view=team')) return 'our-team';
    return 'from-presidents-desk';
  };

  const [activeTab, setActiveTab] = useState<string>(getInitialTab);

  useEffect(() => {
    if (location.pathname === '/from-presidents-desk') setActiveTab('from-presidents-desk');
    else if (location.pathname === '/from-vice-presidents-desk') setActiveTab('from-vice-presidents-desk');
    else if (location.pathname === '/from-ceos-desk') setActiveTab('from-ceos-desk');
    else if (location.search.includes('view=team')) setActiveTab('our-team');
    else setActiveTab('from-presidents-desk');
  }, [location.pathname, location.search]);

  const handleTabClick = (tabId: string, path: string) => {
    setActiveTab(tabId);
    if (tabId === 'our-team') {
      navigate('/team?view=team');
    } else {
      navigate(path);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        isDark ? 'bg-[#081528] text-slate-100' : 'bg-[#F7F9FC] text-[#172334]'
      }`}
    >
      {/* 1. Global Navigation Header */}
      <NFNavbar
        onOpenApplication={handleOpenApplication}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* 2. Main Page Layout - Left Navigation with Right Content Display */}
      <main className="flex-1 w-full pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-24">
        <div className="section-shell px-3.5 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 lg:space-y-12">
          
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-12 lg:items-stretch">

            {/* LEFT SIDEBAR NAVIGATION */}
            <aside className="w-full lg:w-72 xl:w-80 shrink-0 flex flex-col">

              {/* CARD 1: NFVS BRANDING + 4-ITEM LEFT NAVIGATION */}
              <div
                className={`p-5 sm:p-6 rounded-2xl border transition-colors shadow-xs flex flex-col justify-between h-full gap-5 ${
                  isDark
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-[#DCE3EC]'
                }`}
              >
                {/* 1. Brand Header with Official Logo */}
                <div className="flex flex-col items-center justify-center text-center space-y-2.5 pt-1">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-xs border border-[#DCE3EC] dark:border-slate-700 bg-white p-2.5 sm:p-3 flex items-center justify-center shrink-0">
                    <img
                      src={officialEmblem}
                      alt="NF Venture Studio - Official Logo"
                      decoding="async"
                      className="w-full h-full object-contain filter drop-shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-base sm:text-lg font-black tracking-tight text-[#1746A2] dark:text-white leading-tight">
                      NF Venture Studio
                    </h2>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-[#D4AF37]">
                      Ideas &bull; Innovation &bull; Growth
                    </p>
                    <div className="w-10 sm:w-12 h-0.5 bg-[#D4AF37] mx-auto rounded-full mt-1.5" />
                  </div>
                </div>

                {/* 2. Left Navigation Items List: President, VP, CEO, Our Team (Moved Up) */}
                <div className="space-y-2 pt-1 w-full">
                  <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 pb-1">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Leadership Desks
                    </span>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                  </div>

                  <nav
                    aria-label="Leadership & Team Navigation"
                    className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2"
                  >
                  {sidebarNavItems.map((item) => {
                    const ItemIcon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleTabClick(item.id, item.path)}
                        className={`w-full group flex items-center justify-between px-3.5 sm:px-4 py-3 rounded-xl border text-xs sm:text-sm transition-all duration-200 select-none text-left cursor-pointer min-h-[44px] ${
                          isActive
                            ? 'bg-[#1746A2] text-white border-[#1746A2] shadow-sm font-bold ring-2 ring-[#D4AF37]/50'
                            : isDark
                            ? 'bg-slate-900/90 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600 font-medium'
                            : 'bg-white border-slate-300 text-slate-800 hover:bg-[#F0F5FA] hover:border-[#1746A2]/40 font-medium shadow-2xs'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <ItemIcon
                            className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                              isActive
                                ? 'text-[#D4AF37]'
                                : isDark
                                ? 'text-slate-400 group-hover:text-white'
                                : 'text-slate-500 group-hover:text-[#1746A2]'
                            }`}
                          />
                          <span className="truncate">{item.label}</span>
                        </div>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                  </nav>
                </div>

                {/* 3. Incubation Mandate & Institutional Frameworks Callout (Moved Down) */}
                <div className="w-full p-3.5 sm:p-4 rounded-xl bg-[#F0F5FD] dark:bg-[#071A38]/90 border border-[#DCE3EC] dark:border-[#103B82] text-left space-y-2.5 shadow-2xs mt-auto">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1746A2] dark:text-[#E8C85A] flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      Incubation Mandate
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#1746A2]/10 dark:bg-[#103B82] text-[#1746A2] dark:text-sky-300 border border-[#1746A2]/20">
                      HQ &bull; Pune
                    </span>
                  </div>

                  <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                    Empowering academic institutions, student innovators, and faculty researchers with structured startup incubation, IIC activation, and IP commercialization.
                  </p>

                  {/* Policy & Accreditation Badges */}
                  <div className="pt-2 border-t border-slate-200/80 dark:border-slate-700/80 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-[#1746A2] dark:text-[#D4AF37]" />
                      AICTE-NISP Policy
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      <Award className="w-3 h-3 text-[#1746A2] dark:text-[#D4AF37]" />
                      MoE-IIC Aligned
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      <ShieldCheck className="w-3 h-3 text-[#1746A2] dark:text-[#D4AF37]" />
                      IPR Governance
                    </span>
                  </div>
                </div>
              </div>

              

            </aside>

            {/* RIGHT MAIN CONTENT DISPLAY AREA */}
            <div className="flex-1 min-w-0 w-full flex flex-col">

              <section className="reveal flex-1 flex flex-col h-full">
                <div
                  className={`rounded-2xl border p-5 sm:p-8 lg:p-10 shadow-sm transition-colors h-full flex flex-col justify-between ${
                    isDark
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-white border-[#DCE3EC]'
                  }`}
                >

                  {/* TAB 1: PRESIDENT'S MESSAGE (DEFAULT WHEN PAGE IS OPENED) */}
                  {activeTab === 'from-presidents-desk' && (
                    <div className="space-y-6 sm:space-y-8 animate-fade-in flex flex-col justify-between">
                      {/* Leader Portrait & Header Info */}
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left">
                        {/* Small Photograph */}
                        <div className="w-24 sm:w-28 md:w-32 aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-xs shrink-0 mx-auto sm:mx-0">
                          <img
                            src={nileshSirImg}
                            alt="Dr. Nilesh Gaikwad - President, NF Venture Studio"
                            className="w-full h-full object-cover object-[center_20%] block select-none"
                            loading="eager"
                            decoding="async"
                          />
                        </div>

                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#DCEEFF] dark:bg-slate-800 text-[#1746A2] dark:text-sky-300 border border-[#DCE3EC] dark:border-slate-700">
                            <Award className="w-3 h-3 text-[#D4AF37]" />
                            <span>Office of the President</span>
                          </div>
                          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1746A2] dark:text-white tracking-tight leading-tight">
                            Dr. Nilesh Gaikwad
                          </h1>
                          <p className="text-xs sm:text-sm font-bold text-[#D4AF37]">
                            President, NF Venture Studio
                          </p>

                          {/* Relevant Address & Official Contact */}
                          <div className="pt-1.5 flex flex-col gap-1 text-xs text-slate-600 dark:text-slate-300">
                            <div className="flex items-start gap-1.5 justify-center sm:justify-start">
                              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                              <span>Parijatak, Near Nigdi Police Station, Nigdi, Pune – 411044, Maharashtra</span>
                            </div>
                            <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                              <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                              <a
                                href="mailto:ncfventurestudio@gmail.com"
                                className="hover:underline text-[#1746A2] dark:text-sky-300 font-medium"
                              >
                                ncfventurestudio@gmail.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Message Heading */}
                      <div className="pt-4 sm:pt-5 border-t border-slate-200 dark:border-slate-800 space-y-1 text-center sm:text-left">
                        <h2 className="text-base sm:text-lg lg:text-xl font-extrabold text-[#1746A2] dark:text-white tracking-tight uppercase">
                          Message from the President
                        </h2>
                        <p className="text-xs sm:text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
                          NF Venture Studio · Ecosystem Foundation
                        </p>
                      </div>

                      {/* Detailed Message Narrative */}
                      <div className="space-y-4 text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-700 dark:text-slate-200 font-normal">
                        <p>
                          At NF Venture Studio, our vision is to build a strong startup ecosystem that transforms innovative ideas into sustainable businesses. We aim to establish and strengthen Startup Incubation Centres within academic institutions, empowering students, researchers, and entrepreneurs to turn their ideas into reality.
                        </p>

                        <p>
                          Through mentorship, infrastructure, funding opportunities, intellectual property support, and industry collaboration, we strive to connect education with entrepreneurship and innovation with impact.
                        </p>

                        <div className="p-4 rounded-xl border border-[#DCE3EC] dark:border-slate-800 bg-[#DCEEFF]/50 dark:bg-slate-800/40 text-[#1746A2] dark:text-sky-300 font-bold text-xs sm:text-sm">
                          Together, let us build institutions that inspire innovation and an ecosystem that enables every promising idea to grow.
                        </div>
                      </div>

                      {/* Sign-off */}
                      <div className="flex justify-center sm:justify-end pt-5 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex flex-col items-center sm:items-end space-y-1">
                          {/* President Signature */}
                          <div className="h-14 sm:h-16 flex items-center justify-center sm:justify-end">
                            <img
                              src={presidentSignatureImg}
                              alt="Dr. Nilesh Gaikwad - President Signature"
                              className="h-full w-auto object-contain dark:brightness-0 dark:invert opacity-95 transition-all select-none"
                              loading="eager"
                            />
                          </div>

                          <div className="text-center sm:text-right space-y-0.5">
                            <div className="text-sm font-bold text-[#1746A2] dark:text-white tracking-tight">
                              Dr. Nilesh Gaikwad
                            </div>
                            <div className="text-xs font-semibold text-[#D4AF37]">
                              President
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                              NF Venture Studio
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: VICE-PRESIDENT'S MESSAGE */}
                  {activeTab === 'from-vice-presidents-desk' && (
                    <div className="space-y-6 sm:space-y-8 animate-fade-in flex flex-col justify-between">
                      {/* Leader Portrait & Header Info */}
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left">
                        {/* Small Photograph */}
                        <div className="w-24 sm:w-28 md:w-32 aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-xs shrink-0 mx-auto sm:mx-0">
                          <img
                            src={vicePresidentImg}
                            alt="Prof. Nisha Gaikwad - Vice President, NF Venture Studio"
                            className="w-full h-full object-cover object-[center_20%] block select-none"
                            loading="eager"
                            decoding="async"
                          />
                        </div>

                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#DCEEFF] dark:bg-slate-800 text-[#1746A2] dark:text-sky-300 border border-[#DCE3EC] dark:border-slate-700">
                            <Compass className="w-3 h-3 text-[#D4AF37]" />
                            <span>Office of the Vice President</span>
                          </div>
                          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1746A2] dark:text-white tracking-tight leading-tight">
                            Prof. Nisha Gaikwad
                          </h1>
                          <p className="text-xs sm:text-sm font-bold text-[#D4AF37]">
                            Vice President, NF Venture Studio
                          </p>

                          {/* Relevant Address & Official Contact */}
                          <div className="pt-1.5 flex flex-col gap-1 text-xs text-slate-600 dark:text-slate-300">
                            <div className="flex items-start gap-1.5 justify-center sm:justify-start">
                              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                              <span>Parijatak, Near Nigdi Police Station, Nigdi, Pune – 411044, Maharashtra</span>
                            </div>
                            <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                              <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                              <a
                                href="mailto:ncfventurestudio@gmail.com"
                                className="hover:underline text-[#1746A2] dark:text-sky-300 font-medium"
                              >
                                ncfventurestudio@gmail.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Message Heading */}
                      <div className="pt-4 sm:pt-5 border-t border-slate-200 dark:border-slate-800 space-y-1 text-center sm:text-left">
                        <h2 className="text-base sm:text-lg lg:text-xl font-extrabold text-[#1746A2] dark:text-white tracking-tight uppercase">
                          Message from the Vice President
                        </h2>
                        <p className="text-xs sm:text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
                          NF Venture Studio · Incubation Growth
                        </p>
                      </div>

                      {/* Detailed Message Narrative */}
                      <div className="space-y-4 text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-700 dark:text-slate-200 font-normal">
                        <p>
                          At NF Venture Studio, we are committed to creating an environment where innovation, collaboration, and entrepreneurship thrive. Our focus is on strengthening institutional incubation centres and building a connected ecosystem that supports startups at every stage of their journey.
                        </p>

                        <p>
                          Through structured guidance, mentorship, intellectual property support, funding facilitation, and industry partnerships, we aim to empower aspiring entrepreneurs to transform ideas into impactful ventures.
                        </p>

                        <div className="p-4 rounded-xl border border-[#DCE3EC] dark:border-slate-800 bg-[#DCEEFF]/50 dark:bg-slate-800/40 text-[#1746A2] dark:text-sky-300 font-bold text-xs sm:text-sm">
                          Together, let us foster a culture of innovation, strengthen institutional capabilities, and create sustainable opportunities for future entrepreneurs.
                        </div>
                      </div>

                      {/* Sign-off */}
                      <div className="flex justify-center sm:justify-end pt-5 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex flex-col items-center sm:items-end space-y-1">
                          {/* Vice President Signature */}
                          <div className="h-14 sm:h-16 flex items-center justify-center sm:justify-end">
                            <img
                              src={vicePresidentSignatureImg}
                              alt="Prof. Nisha Gaikwad - Vice President Signature"
                              className="h-full w-auto object-contain dark:brightness-0 dark:invert opacity-95 transition-all select-none"
                              loading="eager"
                            />
                          </div>

                          <div className="text-center sm:text-right space-y-0.5">
                            <div className="text-sm font-bold text-[#1746A2] dark:text-white tracking-tight">
                              Prof. Nisha Gaikwad
                            </div>
                            <div className="text-xs font-semibold text-[#D4AF37]">
                              Vice President
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                              NF Venture Studio
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: CEO'S DESK */}
                  {activeTab === 'from-ceos-desk' && (
                    <div className="space-y-6 sm:space-y-8 animate-fade-in flex flex-col justify-between">
                      {/* Leader Portrait & Header Info */}
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left">
                        {/* Small Photograph */}
                        <div className="w-24 sm:w-28 md:w-32 aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-xs shrink-0 mx-auto sm:mx-0">
                          <img
                            src={ceoMember.imageSrc}
                            alt="Mr. Ashok K. Patil - Chief Executive Officer, NF Venture Studio"
                            className="w-full h-full object-cover object-[center_15%] block select-none"
                            loading="eager"
                            decoding="async"
                          />
                        </div>

                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#DCEEFF] dark:bg-slate-800 text-[#1746A2] dark:text-sky-300 border border-[#DCE3EC] dark:border-slate-700">
                            <User className="w-3 h-3 text-[#D4AF37]" />
                            <span>Office of the Chief Executive Officer</span>
                          </div>
                          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1746A2] dark:text-white tracking-tight leading-tight">
                            Mr. Ashok K. Patil
                          </h1>
                          <p className="text-xs sm:text-sm font-bold text-[#D4AF37]">
                            Chief Executive Officer (CEO), NF Venture Studio
                          </p>

                          {/* Relevant Address & Official Contact */}
                          <div className="pt-1.5 flex flex-col gap-1 text-xs text-slate-600 dark:text-slate-300">
                            <div className="flex items-start gap-1.5 justify-center sm:justify-start">
                              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                              <span>Parijatak, Near Nigdi Police Station, Nigdi, Pune – 411044, Maharashtra</span>
                            </div>
                            <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                              <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                              <a
                                href="mailto:ceo@nfvs.in"
                                className="hover:underline text-[#1746A2] dark:text-sky-300 font-medium"
                              >
                                ceo@nfvs.in
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Message Heading */}
                      <div className="pt-4 sm:pt-5 border-t border-slate-200 dark:border-slate-800 space-y-1 text-center sm:text-left">
                        <h2 className="text-base sm:text-lg lg:text-xl font-extrabold text-[#1746A2] dark:text-white tracking-tight uppercase">
                          Message from the CEO
                        </h2>
                        <p className="text-xs sm:text-sm font-semibold text-[#D4AF37] uppercase tracking-wider">
                          NF Venture Studio · Operational Strategy
                        </p>
                      </div>

                      {/* Detailed Message Narrative */}
                      <div className="space-y-4 text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-700 dark:text-slate-200 font-normal">
                        <p>
                          At NF Venture Studio, our goal is to transform innovative ideas into successful startups by building a strong, connected incubation ecosystem. We focus on supporting academic institutions in establishing incubation centres and empowering entrepreneurs through business planning, mentorship, intellectual property support, and funding opportunities.
                        </p>

                        <p>
                          Through collaboration, technology, and strategic guidance, we aim to bridge the gap between ideas and implementation, helping startups grow into sustainable and impactful businesses.
                        </p>

                        <div className="p-4 rounded-xl border border-[#DCE3EC] dark:border-slate-800 bg-[#DCEEFF]/50 dark:bg-slate-800/40 text-[#1746A2] dark:text-sky-300 font-bold text-xs sm:text-sm">
                          Together, let us build an ecosystem where innovation creates opportunities and every promising idea has the potential to succeed.
                        </div>
                      </div>

                      {/* Sign-off */}
                      <div className="flex justify-center sm:justify-end pt-5 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex flex-col items-center sm:items-end space-y-1">
                          {/* CEO Signature */}
                          <div className="h-14 sm:h-16 flex items-center justify-center sm:justify-end">
                            <img
                              src={ceoSignatureImg}
                              alt="Mr. Ashok K. Patil - CEO Signature"
                              className="h-full w-auto object-contain dark:brightness-0 dark:invert opacity-95 transition-all select-none"
                              loading="eager"
                            />
                          </div>

                          <div className="text-center sm:text-right space-y-0.5">
                            <div className="text-sm font-bold text-[#1746A2] dark:text-white tracking-tight">
                              Mr. Ashok K. Patil
                            </div>
                            <div className="text-xs font-semibold text-[#D4AF37]">
                              Chief Executive Officer (CEO)
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                              NF Venture Studio
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: OUR TEAM */}
                  {activeTab === 'our-team' && (
                    <div className="space-y-6 sm:space-y-8 animate-fade-in flex flex-col justify-between">
                      <div className="border-b pb-4 border-slate-200 dark:border-slate-800 text-center sm:text-left">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1746A2] dark:text-sky-300 mb-1">
                          <Users className="w-4 h-4 text-[#D4AF37]" />
                          <span>Core Operating Pillars</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1746A2] dark:text-white tracking-tight">
                          Our Team &amp; Leadership Structure
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                          Executive working pillars driving incubation operations, fiscal governance, and founder acquisition.
                        </p>
                      </div>

                      {/* Team Grid: Consistent Professional Portrait Sizes */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 items-stretch">
                        {teamMembers.map((member) => (
                          <div
                            key={member.id}
                            className={`group p-4 sm:p-5 rounded-2xl border flex flex-col justify-between transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-1 h-full ${
                              isDark
                                ? 'bg-slate-900 border-slate-700 hover:border-slate-600'
                                : 'bg-[#FAFCFE] border-[#DCE3EC] hover:border-[#1746A2]/40'
                            }`}
                          >
                            <div className="space-y-3.5">
                              {/* Standardized Professional Portrait Container */}
                              <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-2xs relative">
                                <img
                                  src={member.imageSrc}
                                  alt={`${member.name} - ${member.designation}, NF Venture Studio`}
                                  className="w-full h-full object-cover object-[center_15%] block"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <div className="absolute top-2 right-2">
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-[#1746A2]/90 text-white backdrop-blur-xs border border-white/20">
                                    {member.shortRole}
                                  </span>
                                </div>
                              </div>

                              <div>
                                <h3 className="text-base sm:text-lg font-bold text-[#1746A2] dark:text-white leading-tight">
                                  {member.name}
                                </h3>
                                <p className="text-xs font-bold text-[#D4AF37] mt-0.5">
                                  {member.designation}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </section>

            </div>

          </div>



        </div>
      </main>

      {/* 3. Global Footer */}
      <NFFooter
        onOpenApplication={handleOpenApplication}
        isDark={isDark}
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
      />

      {/* 4. Interactive Application Modal */}
      <NFApplicationModal
        isOpen={isAppModalOpen}
        onClose={() => setIsAppModalOpen(false)}
        initialTrack={selectedTrack}
        isDark={isDark}
      />
    </div>
  );
};
