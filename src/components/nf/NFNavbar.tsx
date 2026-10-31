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
  const isContact = location.pathname === '/contact' || location.pathname === '/contact-us';

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

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

  // Minimal, professional navigation items: Home, About Us, Our Team, Contact
  const navLinks = [
    { name: 'Home', href: '/', isActive: isHome },
    { name: 'About Us', href: '/about', isActive: isAbout },
    { name: 'Our Team', href: '/team', isActive: isTeam },
    { name: 'Contact', href: '/contact', isActive: isContact },
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
            {navLinks.map((item) => (
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
            ))}
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
            {navLinks.map((item) => (
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
            ))}
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
