import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { NFLogo } from './NFLogo';
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  FileText,
  Users,
  ChevronDown,
} from 'lucide-react';

interface NFNavbarProps {
  onOpenApplication: (track?: string) => void;
  onOpenBrochure?: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const NFNavbar: React.FC<NFNavbarProps> = ({
  onOpenApplication,
  onOpenBrochure,
  theme = 'light',
  onToggleTheme,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDark = theme === 'dark';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ecosystemDropdownOpen, setEcosystemDropdownOpen] = useState(false);
  const [mobileEcosystemOpen, setMobileEcosystemOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setEcosystemDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isHome =
    location.pathname === '/' ||
    location.pathname === '/home' ||
    location.pathname === '/nf-venture-studio';

  const isAbout = location.pathname === '/about' || location.pathname === '/about-us';
  const isTeam =
    location.pathname === '/team' ||
    location.pathname === '/our-team' ||
    location.pathname === '/from-presidents-desk' ||
    location.pathname === '/from-vice-presidents-desk' ||
    location.pathname === '/from-ceos-desk';
  const isEcosystem =
    location.pathname === '/ecosystem' ||
    location.pathname.startsWith('/ecosystem') ||
    location.pathname === '/iic' ||
    location.pathname === '/ipr' ||
    location.pathname === '/funding-and-grants' ||
    location.pathname === '/digital-cxo-suite' ||
    location.pathname === '/it-cell' ||
    location.pathname === '/itcell';
  const isContact = location.pathname === '/contact' || location.pathname === '/contact-us';

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setEcosystemDropdownOpen(false);

    if (href.startsWith('#')) {
      if (isHome) {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/' + href);
      }
      return;
    }

    if (href === '/' && isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate(href);
  };

  // Ecosystem menu items matching user specifications
  const ecosystemMenuItems = [
    { name: 'What We Offer', href: '/#services' },
    { name: 'Funding & Grants', href: '/funding-and-grants' },
    { name: 'IIC & Institutional Innovation', href: '/iic' },
    { name: 'IPR Services & Protection', href: '/ipr' },
    { name: 'Startup Journey', href: '/#journey' },
    { name: 'IIC Council & IPR', href: '/#initiatives' },
    { name: 'Digital CXO Suite', href: '/digital-cxo-suite' },
    { name: 'IT Cell', href: '/it-cell' },
  ];

  // Professional navigation items with Ecosystem between Our Team and Contact
  const navLinks = [
    { name: 'Home', href: '/', isActive: isHome, hasDropdown: false },
    { name: 'About Us', href: '/about', isActive: isAbout, hasDropdown: false },
    { name: 'Our Team', href: '/team', isActive: isTeam, hasDropdown: false },
    { name: 'Ecosystem', href: '/ecosystem', isActive: isEcosystem, hasDropdown: true },
    { name: 'Contact', href: '/contact', isActive: isContact, hasDropdown: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#071A38]/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-[#103B82]/60 py-2'
          : 'bg-white/90 dark:bg-[#071A38]/90 backdrop-blur-xs border-b border-slate-200/80 dark:border-[#103B82]/40 py-3'
      }`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between gap-4">
          
          {/* Official Logo on Left */}
          <Link
            to="/"
            onClick={() => {
              if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1746A2] rounded-lg"
          >
            <NFLogo size="md" variant={isDark ? 'light' : 'auto'} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setEcosystemDropdownOpen(true)}
                    onMouseLeave={() => setEcosystemDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      aria-current={item.isActive ? 'page' : undefined}
                      aria-expanded={ecosystemDropdownOpen}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none ${
                        item.isActive
                          ? 'text-[#1746A2] dark:text-[#E8C85A] font-extrabold bg-slate-100 dark:bg-[#103B82]/50 border border-[#2864C5]/30'
                          : 'text-[#071A38] hover:text-[#1746A2] hover:bg-slate-100/60 dark:text-slate-200 dark:hover:text-white dark:hover:bg-[#103B82]/30'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-200 ${
                          ecosystemDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu matching user's Image 1 */}
                    {ecosystemDropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 z-50 animate-fadeIn min-w-[260px]">
                        <div className="rounded-2xl bg-[#071A38] text-white border border-[#1746A2]/40 dark:border-[#D4AF37]/30 shadow-2xl p-4 space-y-3 backdrop-blur-xl">
                          <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#D4AF37] px-2.5 pb-2 border-b border-white/10">
                            ECOSYSTEM
                          </div>
                          <div className="space-y-1">
                            {ecosystemMenuItems.map((eco) => (
                              <button
                                key={eco.name}
                                type="button"
                                onClick={() => {
                                  setEcosystemDropdownOpen(false);
                                  handleNavClick(eco.href);
                                }}
                                className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-between group/item"
                              >
                                <span>{eco.name}</span>
                                <ArrowRight className="w-3 h-3 text-[#D4AF37] opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all" />
                              </button>
                            ))}
                          </div>
                          <div className="pt-2 border-t border-white/10">
                            <button
                              type="button"
                              onClick={() => {
                                setEcosystemDropdownOpen(false);
                                navigate('/ecosystem');
                              }}
                              className="w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-[#E8C85A] hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-between"
                            >
                              <span>Explore Full Ecosystem Directory</span>
                              <span>&rarr;</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  aria-current={item.isActive ? 'page' : undefined}
                  className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none ${
                    item.isActive
                      ? 'text-[#1746A2] dark:text-[#E8C85A] font-extrabold bg-slate-100 dark:bg-[#103B82]/50 border border-[#2864C5]/30'
                      : 'text-[#071A38] hover:text-[#1746A2] hover:bg-slate-100/60 dark:text-slate-200 dark:hover:text-white dark:hover:bg-[#103B82]/30'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* View Official Brochure Button */}
            {onOpenBrochure && (
              <button
                type="button"
                onClick={onOpenBrochure}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#071A38] dark:text-white bg-slate-100 dark:bg-[#103B82]/60 hover:bg-slate-200 dark:hover:bg-[#103B82] border border-[#2864C5]/30 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none"
              >
                <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Brochure</span>
              </button>
            )}

            {/* Theme Toggle */}
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-xl text-[#071A38] hover:text-[#1746A2] hover:bg-slate-100 dark:text-slate-200 dark:hover:text-white dark:hover:bg-[#103B82]/50 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none"
              >
                {isDark ? <Sun className="w-4 h-4 text-[#D4AF37]" /> : <Moon className="w-4 h-4 text-[#1746A2]" />}
              </button>
            )}

            {/* Prominent Royal Blue Call-to-Action Button */}
            <button
              type="button"
              onClick={() => onOpenApplication('student')}
              className="magnetic-btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#1746A2] hover:bg-[#2864C5] active:bg-[#103B82] shadow-royal hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group border border-[#D4AF37]/50 focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37] transition-transform group-hover:scale-110" />
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label="Toggle theme"
                className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-[#10264A] dark:text-slate-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none"
              >
                {isDark ? <Sun className="w-4 h-4 text-[#D4AF37]" /> : <Moon className="w-4 h-4 text-[#1746A2]" />}
              </button>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile menu"
              className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-[#10264A] hover:bg-[#DCEEFF]/50 dark:text-white dark:hover:bg-[#18386B] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-[#103B82] bg-white dark:bg-[#071A38] px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fadeIn max-h-[calc(100vh-68px)] overflow-y-auto overscroll-contain">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        aria-current={item.isActive ? 'page' : undefined}
                        className={`flex-1 text-left px-4 py-2.5 min-h-[44px] flex items-center rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                          item.isActive
                            ? 'text-[#1746A2] dark:text-sky-300 font-extrabold bg-[#DCEEFF]/60 dark:bg-[#18386B]'
                            : 'text-[#10264A] hover:bg-[#DCEEFF]/50 hover:text-[#1746A2] dark:text-slate-100 dark:hover:bg-[#18386B]'
                        }`}
                      >
                        {item.name}
                      </button>
                      <button
                        type="button"
                        onClick={() => setMobileEcosystemOpen(!mobileEcosystemOpen)}
                        aria-label="Toggle ecosystem submenu"
                        className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-500 hover:text-[#1746A2] dark:text-slate-300 cursor-pointer"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileEcosystemOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {mobileEcosystemOpen && (
                      <div className="pl-3 pr-2 py-2 space-y-1 rounded-xl bg-[#071A38] text-white border border-[#1746A2]/40 shadow-inner">
                        <div className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#D4AF37] px-2 py-1 border-b border-white/10">
                          ECOSYSTEM
                        </div>
                        {ecosystemMenuItems.map((eco) => (
                          <button
                            key={eco.name}
                            type="button"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              handleNavClick(eco.href);
                            }}
                            className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            {eco.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  aria-current={item.isActive ? 'page' : undefined}
                  className={`text-left px-4 py-2.5 min-h-[44px] flex items-center rounded-xl text-sm font-semibold transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none ${
                    item.isActive
                      ? 'text-[#1746A2] dark:text-sky-300 font-extrabold bg-[#DCEEFF]/60 dark:bg-[#18386B]'
                      : 'text-[#10264A] hover:bg-[#DCEEFF]/50 hover:text-[#1746A2] dark:text-slate-100 dark:hover:bg-[#18386B]'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-[#DCEEFF] dark:border-[#1E4176] space-y-2">
            {onOpenBrochure && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-[#10264A] dark:text-white bg-[#DCEEFF] dark:bg-[#18386B] border border-[#1746A2]/20 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none"
              >
                <FileText className="w-4 h-4 text-[#D4AF37]" />
                <span>View Official Brochure</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplication('student');
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm text-white bg-[#1746A2] hover:bg-[#123884] shadow-royal border border-[#D4AF37]/50 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:outline-none"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-[#52627A] dark:text-slate-400 pt-2">
              <a href="tel:+919209112577" className="flex items-center gap-1 hover:text-[#1746A2]">
                <Phone className="w-3.5 h-3.5 text-[#1746A2]" /> +91 9209112577
              </a>
              <a href="mailto:ncfventurestudio@gmail.com" className="flex items-center gap-1 hover:text-[#1746A2]">
                <Mail className="w-3.5 h-3.5 text-[#1746A2]" /> Email Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
