import React, { useState, useEffect } from 'react';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFFooter } from '../components/nf/NFFooter';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { NFApplicationForm } from '../components/nf/NFApplicationForm';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  GraduationCap,
  Copy,
  Check,
  ShieldCheck,
  Rocket,
  Sparkles,
  Globe,
} from 'lucide-react';
import { useNFTheme } from '../hooks/useNFTheme';

export const NFContactPage: React.FC = () => {
  const { theme, isDark, toggleTheme } = useNFTheme();

  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('student');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91 9209112577');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ncfventurestudio@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        isDark ? 'bg-[#071A38] text-slate-100' : 'bg-[#FFFFFF] text-[#071A38]'
      }`}
    >
      <NFNavbar
        onOpenApplication={handleOpenApplication}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 w-full pt-20 sm:pt-28 pb-14 sm:pb-20">
        <div className="section-shell space-y-12 sm:space-y-16">

          {/* 1. Header */}
          <section className="text-center pt-4 sm:pt-8 max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#DCEEFF] text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Contact NF Venture Studio</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#071A38] dark:text-white leading-tight">
              Let's Build the <span className="text-[#1746A2] dark:text-[#60A5FA]">Future</span> <span className="text-[#D4AF37]">Together</span>
            </h1>

            <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We help incubate ideas, strengthen institutions and support impact-driven ventures. Connect with our incubation team today.
            </p>
          </section>

          {/* 2. Main Grid: Contact Info (Left) + Form (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Left Column: Direct Office Contact Details */}
            <div className="lg:col-span-5 space-y-6">

              {/* Primary Contact Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#071A38]/80 border border-[#DCEEFF] dark:border-[#103B82] shadow-sm">
                <div className="space-y-5">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] mb-1">
                      Official Communications
                    </div>
                    <h2 className="text-xl font-bold text-[#071A38] dark:text-white">
                      NF Venture Studio
                    </h2>
                    <p className="text-xs text-[#52627A] dark:text-slate-300 font-medium mt-0.5">
                      NF Venture Studio &bull; Ideas &bull; Innovation &bull; Growth
                    </p>
                  </div>

                  <div className="border-t border-[#DCEEFF] dark:border-[#103B82]" />

                  {/* Phone Helpline */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#DCEEFF] dark:bg-[#18386B] flex items-center justify-center text-[#1746A2] shrink-0">
                      <Phone className="w-5 h-5 text-[#1746A2] dark:text-[#E8C85A]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-[#52627A] dark:text-slate-300">
                        Direct Phone Number
                      </div>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <a
                          href="tel:+919209112577"
                          className="text-sm sm:text-base font-bold text-[#071A38] dark:text-white hover:text-[#1746A2]"
                        >
                          +91 9209112577
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyPhone}
                          title="Copy phone number"
                          className="px-1.5 py-0.5 rounded border border-[#DCEEFF] dark:border-[#103B82] text-[11px] text-[#52627A] hover:bg-[#DCEEFF]/40 cursor-pointer"
                        >
                          {copiedPhone ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#DCEEFF] dark:bg-[#18386B] flex items-center justify-center text-[#1746A2] shrink-0">
                      <Mail className="w-5 h-5 text-[#1746A2] dark:text-[#E8C85A]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-[#52627A] dark:text-slate-300">
                        Official Email
                      </div>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <a
                          href="mailto:ncfventurestudio@gmail.com"
                          className="text-xs sm:text-sm font-bold text-[#1746A2] dark:text-sky-400 hover:underline"
                        >
                          ncfventurestudio@gmail.com
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          title="Copy email address"
                          className="px-1.5 py-0.5 rounded border border-[#DCEEFF] dark:border-[#103B82] text-[11px] text-[#52627A] hover:bg-[#DCEEFF]/40 cursor-pointer"
                        >
                          {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#DCEEFF] dark:bg-[#18386B] flex items-center justify-center text-[#1746A2] shrink-0">
                      <MapPin className="w-5 h-5 text-[#1746A2] dark:text-[#E8C85A]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#52627A] dark:text-slate-300">
                        Studio Address
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-[#071A38] dark:text-white mt-0.5 leading-relaxed">
                        Parijatak, Sector No. 24, Plot No. 48, 1st Floor, Flat No. 101, Near Police Station, Nigdi – 411044
                      </p>
                    </div>
                  </div>

                  {/* Official Website */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#DCEEFF] dark:bg-[#18386B] flex items-center justify-center text-[#1746A2] shrink-0">
                      <Globe className="w-5 h-5 text-[#1746A2] dark:text-[#E8C85A]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#52627A] dark:text-slate-300">
                        Official Website
                      </div>
                      <a
                        href="https://www.nfvs.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-[#1746A2] dark:text-sky-300 hover:underline mt-0.5 block"
                      >
                        www.nfvs.in
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Incubation Process Quick Flow */}
              <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#071A38]/60 border border-[#DCEEFF] dark:border-[#103B82] space-y-3">
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#071A38] dark:text-white">
                    Application Process Flow
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs text-[#52627A] dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#1746A2] text-white flex items-center justify-center shrink-0 font-bold text-[10px]">
                      1
                    </span>
                    <span>Submit your application form with your startup or institutional details.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#1746A2] text-white flex items-center justify-center shrink-0 font-bold text-[10px]">
                      2
                    </span>
                    <span>Our incubation committee evaluates your submission for cohort fit.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#1746A2] text-white flex items-center justify-center shrink-0 font-bold text-[10px]">
                      3
                    </span>
                    <span>Direct discovery session scheduled for mentoring and roadmap planning.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Embedded Application Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#071A38]/80 border border-[#DCEEFF] dark:border-[#103B82] shadow-sm">
                <div className="mb-6 pb-4 border-b border-[#DCEEFF] dark:border-[#103B82]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] mb-1">
                    Direct Contact &amp; Application
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#071A38] dark:text-white">
                    Connect With <span className="text-[#1746A2] dark:text-[#60A5FA]">NF Venture Studio</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 mt-0.5">
                    Fill out the form below and our team will get back to you promptly.
                  </p>
                </div>

                <NFApplicationForm
                  initialTrack="student"
                  isDark={isDark}
                  isModal={false}
                />
              </div>
            </div>

          </div>

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
