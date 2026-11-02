import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NFLogo } from './NFLogo';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowUp,
  Sparkles,
} from 'lucide-react';

interface NFFooterProps {
  onOpenApplication?: (track?: string) => void;
  isDark?: boolean;
  showScrollTop?: boolean;
  scrollToTop?: () => void;
}

export const NFFooter: React.FC<NFFooterProps> = ({
  onOpenApplication,
  isDark = false,
  showScrollTop = false,
  scrollToTop,
}) => {
  const navigate = useNavigate();

  const handleNav = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/' + href);
      }
      return;
    }
    navigate(href);
  };

  return (
    <footer className="bg-[#F8FAFC] dark:bg-[#071A38] text-[#071A38] dark:text-white border-t border-slate-200 dark:border-[#103B82]/50 relative transition-colors duration-300">
      {/* Scroll to Top floating button */}
      {showScrollTop && scrollToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#1746A2] hover:bg-[#2864C5] dark:bg-[#1746A2] dark:hover:bg-[#2864C5] text-white dark:text-[#D4AF37] shadow-xl border border-[#1746A2]/30 dark:border-[#D4AF37]/40 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Main Footer Container */}
      <div className="section-shell pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Logo & Brand Description (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" onClick={scrollToTop} className="inline-block">
              <NFLogo size="md" variant={isDark ? 'light' : 'dark'} tagline="growth" />
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
              NF Venture Studio operates as a startup incubator and ecosystem enabler, empowering innovators to create impactful and sustainable ventures.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#DCEEFF]/60 dark:bg-white/5 border border-[#DCEEFF] dark:border-white/10 text-xs text-[#1746A2] dark:text-[#D4AF37] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Ideas &bull; Innovation &bull; Growth</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#1746A2] dark:text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/')}
                  className="hover:text-[#1746A2] dark:hover:text-white hover:underline transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none rounded-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/about')}
                  className="hover:text-[#1746A2] dark:hover:text-white hover:underline transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none rounded-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/team')}
                  className="hover:text-[#1746A2] dark:hover:text-white hover:underline transition-colors font-semibold text-[#1746A2] dark:text-sky-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none rounded-sm"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/ecosystem')}
                  className="hover:text-[#1746A2] dark:hover:text-white hover:underline transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none rounded-sm"
                >
                  Ecosystem
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/contact')}
                  className="hover:text-[#1746A2] dark:hover:text-white hover:underline transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none rounded-sm"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Initiatives & Services (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#1746A2] dark:text-[#D4AF37]">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#services')}
                  className="hover:text-[#1746A2] dark:hover:text-white hover:underline transition-colors text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none rounded-sm"
                >
                  What We Offer
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/funding-and-grants')}
                  className="hover:text-[#1746A2] dark:hover:text-white hover:underline transition-colors text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none rounded-sm"
                >
                  Funding &amp; Grants
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/iic')}
                  className="hover:text-[#1746A2] dark:hover:text-white hover:underline transition-colors text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none rounded-sm"
                >
                  IIC &amp; Institutional Innovation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/ipr')}
                  className="hover:text-[#1746A2] dark:hover:text-white hover:underline transition-colors text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none rounded-sm"
                >
                  IPR Services &amp; Protection
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#journey')}
                  className="hover:text-[#1746A2] dark:hover:text-white hover:underline transition-colors text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none rounded-sm"
                >
                  Startup Journey
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('#initiatives')}
                  className="hover:text-[#1746A2] dark:hover:text-white hover:underline transition-colors text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none rounded-sm"
                >
                  IIC Council &amp; IPR
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/digital-cxo-suite')}
                  className="hover:text-[#1746A2] dark:hover:text-white hover:underline transition-colors text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none rounded-sm"
                >
                  Digital CXO Suite
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('/it-cell')}
                  className="hover:text-[#1746A2] dark:hover:text-white hover:underline transition-colors text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none rounded-sm"
                >
                  IT Cell &amp; Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact Details (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#1746A2] dark:text-[#D4AF37]">
              Official Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1746A2] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Parijatak, Sector No. 24, Plot No. 48, 1st Floor, Flat No. 101, Near Police Station, Nigdi &ndash; 411044
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#1746A2] dark:text-[#D4AF37] shrink-0" />
                <div>
                  <a href="tel:+919209112577" className="hover:text-[#1746A2] dark:hover:text-white transition-colors">
                    +91 9209112577
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#1746A2] dark:text-[#D4AF37] shrink-0" />
                <a
                  href="mailto:ncfventurestudio@gmail.com"
                  className="hover:text-[#1746A2] dark:hover:text-white transition-colors truncate"
                >
                  ncfventurestudio@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#1746A2] dark:text-[#D4AF37] shrink-0" />
                <a
                  href="https://www.nfvs.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#103B82] dark:hover:text-white transition-colors font-medium text-[#1746A2] dark:text-sky-300"
                >
                  www.nfvs.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-[#103B82]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} NF Venture Studio. All rights reserved.
          </div>
          <div className="text-slate-500 dark:text-slate-400">
            Build Ideas &bull; Incubate Startups &bull; Enable Growth
          </div>
        </div>
      </div>
    </footer>
  );
};
