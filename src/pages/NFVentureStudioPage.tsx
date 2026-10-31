import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NFNavbar } from '../components/nf/NFNavbar';
import { NFHeroSection } from '../components/nf/NFHeroSection';
import { NFCoreServicesSection } from '../components/nf/NFCoreServicesSection';
import { NFEcosystemSection } from '../components/nf/NFEcosystemSection';
import { NFStartupJourneySection } from '../components/nf/NFStartupJourneySection';
import { NFInitiativesSection } from '../components/nf/NFInitiativesSection';
import { NFFundingGrantsSection } from '../components/nf/NFFundingGrantsSection';
import { NFPartnershipSection } from '../components/nf/NFWhyPartnerSection';
import { NFFinalCTA } from '../components/nf/NFFinalCTA';
import { NFFooter } from '../components/nf/NFFooter';
import { NFApplicationModal } from '../components/nf/NFApplicationModal';
import { NFBrochureModal } from '../components/nf/NFBrochureModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useNFTheme } from '../hooks/useNFTheme';

export const NFVentureStudioPage: React.FC = () => {
  const { theme, isDark, toggleTheme } = useNFTheme();

  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('student');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const location = useLocation();

  useScrollReveal();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.pathname]);

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

  const handleOpenApplication = (track: string = 'student') => {
    setSelectedTrack(track);
    setIsAppModalOpen(true);
  };

  const handleOpenBrochure = () => {
    setIsBrochureOpen(true);
  };

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

      {/* Top sticky Navbar with Brochure trigger */}
      <NFNavbar
        onOpenApplication={handleOpenApplication}
        onOpenBrochure={handleOpenBrochure}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section with Authentic Brochure Photo */}
        <NFHeroSection
          onOpenApplication={handleOpenApplication}
          onOpenBrochure={handleOpenBrochure}
          isDark={isDark}
        />

        {/* 2. What We Offer: Four Core Services (Pre-Incubation, Incubation, IPR, IIC) + Digital CXO Suite */}
        <NFCoreServicesSection onOpenApplication={handleOpenApplication} isDark={isDark} />

        {/* 3. The Incubator & Ecosystem: Two Pillars & 6 Connected Stakeholders */}
        <NFEcosystemSection onOpenApplication={handleOpenApplication} isDark={isDark} />

        {/* 4. The Startup Journey: 5 Stages & Key Support Streams */}
        <NFStartupJourneySection onOpenApplication={handleOpenApplication} isDark={isDark} />

        {/* 5. Research Commercialization & Enterprise IT Infrastructure (Research to Impact & IT Cell) */}
        <NFInitiativesSection onOpenApplication={handleOpenApplication} isDark={isDark} />

        {/* 6. Funding & Grants: National Schemes (DST INSPIRE, NIDHI-PRAYAS, NIDHI-EIR, Startup India) */}
        <NFFundingGrantsSection onOpenApplication={handleOpenApplication} isDark={isDark} />

        {/* 8. Partnerships & Engagement: Stronger Together for a Bigger Impact */}
        <NFPartnershipSection onOpenApplication={handleOpenApplication} isDark={isDark} />

        {/* 9. Call-to-Action Section: Let's Build the Future Together */}
        <NFFinalCTA onOpenApplication={handleOpenApplication} isDark={isDark} />
      </main>

      {/* Footer */}
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
