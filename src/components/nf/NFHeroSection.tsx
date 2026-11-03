import React, { useState, useRef, useCallback, useEffect } from 'react';
import heroVideo from '../../assets/videologo.mp4';
import {
  Lightbulb,
  Cog,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { useCardSpotlight } from '../../hooks/useInteractiveCursor';
import officialEmblem from '../../assets/nfvs_official_emblem.png';

interface NFHeroSectionProps {
  onOpenApplication?: (track?: string) => void;
  onOpenBrochure?: () => void;
  isDark?: boolean;
}

export const NFHeroSection: React.FC<NFHeroSectionProps> = ({
  isDark = false,
}) => {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn('Hero video autoplay notice:', err);
      });
    }
  }, []);

  // Card spotlights for 3 pillars
  const pillar0 = useCardSpotlight<HTMLDivElement>();
  const pillar1 = useCardSpotlight<HTMLDivElement>();
  const pillar2 = useCardSpotlight<HTMLDivElement>();
  const pillarHooks = [pillar0, pillar1, pillar2];

  const handleHeroMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const hero = heroRef.current;
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normalizedX = (x / rect.width - 0.5) * 2; // -1 to +1
    const normalizedY = (y / rect.height - 0.5) * 2;

    setMousePos({ x, y, normalizedX, normalizedY });
    if (!isMouseInside) setIsMouseInside(true);
  }, [isMouseInside]);

  const handleHeroMouseLeave = useCallback(() => {
    setIsMouseInside(false);
    setMousePos({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });
  }, []);

  const pillars = [
    {
      num: '01',
      title: 'IDEAS',
      desc: 'Problem discovery & validation',
      icon: Lightbulb,
    },
    {
      num: '02',
      title: 'INNOVATION',
      desc: 'Prototype & tech acceleration',
      icon: Cog,
    },
    {
      num: '03',
      title: 'GROWTH',
      desc: 'Venture establishment & scale',
      icon: TrendingUp,
    },
  ];

  // Parallax offsets for background elements
  const parallaxX = mousePos.normalizedX * 18;
  const parallaxY = mousePos.normalizedY * 18;

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-center pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden bg-[#F0F5FD] dark:bg-[#071A38] text-[#071A38] dark:text-white transition-colors duration-500"
    >
      {/* =========================================================================
          BACKGROUND VIDEO & CINEMATIC READABILITY OVERLAYS
          - Background video loop (videologo.mp4) prominently visible & playing
          - Balanced multi-theme scrim so text remains 100% sharp and readable
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        
        {/* The Looping Hero Video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              isDark
                ? 'opacity-70 brightness-[0.95] contrast-[1.05]'
                : 'opacity-65 brightness-[0.98] contrast-[1.05]'
            }`}
          >
            <source src={heroVideo} type="video/mp4" />
            <source src="/videologo.mp4" type="video/mp4" />
            <source src="/assets/videologo.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dynamic Multi-Theme Readability Scrim (Ensures 100% text legibility without obscuring the video) */}
        <div
          className={`absolute inset-0 transition-colors duration-500 pointer-events-none ${
            isDark
              ? 'bg-gradient-to-b from-[#071A38]/75 via-[#071A38]/50 to-[#071A38]/85'
              : 'bg-gradient-to-b from-white/80 via-white/60 to-white/85'
          }`}
        />

        {/* Soft Radial Center Focus Scrim for Text Contrast */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
            isDark
              ? 'bg-[radial-gradient(ellipse_at_center,rgba(7,26,56,0.35)_0%,rgba(7,26,56,0.75)_80%)]'
              : 'bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.75)_80%)]'
          }`}
        />

        {/* Dynamic Interactive Cursor Spotlight Effect */}
        <div
          className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
          style={{
            opacity: isMouseInside ? 1 : 0.45,
            background: isDark
              ? isMouseInside
                ? `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 59, 130, 0.35) 0%, rgba(40, 100, 197, 0.12) 35%, rgba(212, 175, 55, 0.05) 55%, transparent 75%)`
                : 'radial-gradient(750px circle at 50% 40%, rgba(16, 59, 130, 0.25) 0%, rgba(40, 100, 197, 0.08) 40%, transparent 80%)'
              : isMouseInside
                ? `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(23, 70, 162, 0.08) 0%, rgba(40, 100, 197, 0.04) 35%, rgba(212, 175, 55, 0.03) 55%, transparent 75%)`
                : 'radial-gradient(750px circle at 50% 40%, rgba(23, 70, 162, 0.05) 0%, rgba(40, 100, 197, 0.03) 40%, transparent 80%)',
          }}
        />

        {/* Diagonal Soft Light Sweep */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[50%] -bottom-[50%] w-[160px] bg-gradient-to-r from-transparent via-[#1746A2]/[0.05] dark:via-white/[0.07] to-transparent blur-md animate-hero-sweep pointer-events-none" />
        </div>

        {/* Twinkling Diamond Star Accents (✦) with subtle Parallax */}
        <div
          className="absolute inset-0 pointer-events-none transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${parallaxX * -0.6}px, ${parallaxY * -0.6}px, 0)`,
          }}
        >
          {/* Spark 1 - Top Left Gold */}
          <div className="absolute top-[20%] left-[14%] text-[#D4AF37] animate-hero-twinkle">
            <svg className="w-5 h-5 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          {/* Spark 2 - Top Right Accent Blue */}
          <div
            className="absolute top-[24%] right-[14%] text-[#1746A2] dark:text-[#2864C5] animate-hero-twinkle"
            style={{ animationDelay: '1.6s' }}
          >
            <svg className="w-4 h-4 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          {/* Spark 3 - Mid Left Accent Blue */}
          <div
            className="absolute top-[56%] left-[8%] text-[#1746A2]/80 dark:text-[#2864C5]/80 animate-hero-twinkle"
            style={{ animationDelay: '3s' }}
          >
            <svg className="w-3.5 h-3.5 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
          {/* Spark 4 - Mid Right Gold */}
          <div
            className="absolute top-[50%] right-[10%] text-[#D4AF37] animate-hero-twinkle"
            style={{ animationDelay: '2.2s' }}
          >
            <svg className="w-4 h-4 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* =========================================================================
          CENTERED HERO CONTENT (Full-height centered display)
          ========================================================================= */}
      <div className="section-shell relative z-10 flex-1 flex flex-col items-center justify-center text-center my-auto w-full py-4 sm:py-6">
        
        {/* Official HD Brand Logo Lockup */}
        <div className="flex flex-col items-center justify-center mb-5 sm:mb-7 animate-fadeUp select-none">
          <div className="relative group">
            {/* Ambient Brand Halo Glow behind the 3D Shield */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#1746A2]/40 via-[#D4AF37]/30 to-[#2864C5]/40 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* 3D Shield Emblem */}
            <div className="relative w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img
                src={officialEmblem}
                alt="NF Venture Studio Official 3D Shield Emblem"
                className="w-full h-full object-contain"
                decoding="async"
              />
            </div>
          </div>

          {/* Official HD Brand Name Typography */}
          <div className="mt-2.5 sm:mt-3 flex flex-col items-center text-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-[0.16em] font-display drop-shadow-xs dark:drop-shadow-sm">
              <span className="text-[#071A38] dark:text-white">NF </span>
              <span className="text-[#D4AF37]">VENTURE STUDIO</span>
            </span>
          </div>
        </div>

        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/90 dark:bg-[#103B82]/90 text-[#1746A2] dark:text-[#E8C85A] border border-[#1746A2]/25 dark:border-[#D4AF37]/45 text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-md dark:shadow-premium backdrop-blur-md mb-5 sm:mb-7 animate-fadeIn max-w-full text-center">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Startup Incubator Ecosystem &bull; Ideas &bull; Innovation &bull; Growth</span>
        </div>

        {/* Bold Impactful Headline (High-Contrast Legibility) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-black tracking-tight leading-[1.14] sm:leading-[1.12] text-[#071A38] dark:text-white font-display max-w-4xl mx-auto animate-fadeUp drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)] dark:drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Empowering Innovators to Create{' '}
          <span className="bg-gradient-to-r from-[#1746A2] via-[#2864C5] to-[#103173] dark:from-[#2864C5] dark:via-sky-300 dark:to-[#60A5FA] bg-clip-text text-transparent">
            Impactful &amp; Sustainable
          </span>{' '}
          <span className="text-[#D4AF37] drop-shadow-xs dark:drop-shadow-sm">Ventures.</span>
        </h1>

        {/* Concise Supporting Description (High-Contrast Legibility) */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#0F172A] dark:text-slate-100 font-semibold dark:font-medium leading-relaxed max-w-2xl mx-auto animate-fadeUp [animation-delay:150ms] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] dark:drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
          A startup incubator ecosystem connecting academia, industry, and entrepreneurs to turn bold ideas into real-world solutions.
        </p>

        {/* 3 Core Verified Pillars with 3D Tilt & Card Spotlight */}
        <div className="mt-6 sm:mt-8 w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              const hook = pillarHooks[idx];
              return (
                <div
                  key={idx}
                  ref={hook.ref}
                  onMouseMove={hook.onMouseMove}
                  onMouseLeave={hook.onMouseLeave}
                  className="interactive-card card-spotlight-border p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-[#071A38]/85 backdrop-blur-md border border-slate-200/90 dark:border-[#103B82] shadow-md dark:shadow-premium flex items-center sm:flex-col sm:items-center text-left sm:text-center gap-3 sm:gap-3.5 transition-all duration-300 hover:border-[#1746A2] dark:hover:border-[#2864C5]/70 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#DCEEFF] dark:bg-[#103B82] flex items-center justify-center text-[#1746A2] dark:text-[#D4AF37] shrink-0 border border-[#1746A2]/20 dark:border-[#2864C5]/40 group-hover:border-[#D4AF37]/60 group-hover:bg-[#1746A2] group-hover:text-white dark:group-hover:bg-[#1746A2] dark:group-hover:text-[#D4AF37] transition-colors duration-300 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center sm:justify-center gap-1.5">
                      <span className="text-[11px] font-mono font-bold text-[#1746A2] dark:text-[#D4AF37]">{item.num}</span>
                      <span className="text-xs font-black tracking-wider text-[#071A38] dark:text-white uppercase">
                        {item.title}
                      </span>
                    </div>
                    <div className="text-xs text-[#52627A] dark:text-slate-300 leading-snug mt-0.5 sm:mt-1">
                      {item.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>



    </section>
  );
};
