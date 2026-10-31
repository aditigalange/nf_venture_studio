import React from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  Globe,
} from 'lucide-react';

interface NFFinalCTAProps {
  onOpenApplication?: (track?: string) => void;
  isDark?: boolean;
}

export const NFFinalCTA: React.FC<NFFinalCTAProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  return (
    <section className="relative py-18 sm:py-24 lg:py-28 bg-[#F0F5FD] dark:bg-[#103B82] text-[#071A38] dark:text-white border-y border-slate-200 dark:border-transparent overflow-hidden transition-colors duration-300">
      {/* Decorative Golden & Accent Blue Ambient Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1746A2]/10 dark:bg-[#2864C5]/25 rounded-full blur-2xl pointer-events-none" />

      <div className="section-shell relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          {/* Gold Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DCEEFF] dark:bg-white/10 backdrop-blur-md border border-[#1746A2]/20 dark:border-[#D4AF37]/40 text-xs font-bold uppercase tracking-wider text-[#1746A2] dark:text-[#E8C85A]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Ideas &bull; Incubation &bull; Impact</span>
          </div>

          {/* Strong Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-[#071A38] dark:text-white">
            Let's Build the Future Together
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#52627A] dark:text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
            We help incubate ideas, strengthen institutions and support impact-driven ventures.
          </p>

          {/* Tagline */}
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1746A2] dark:text-[#D4AF37]">
            Build Ideas &bull; Incubate Startups &bull; Enable Growth
          </div>

          {/* Quick Contact Bar */}
          <div className="pt-8 border-t border-slate-200 dark:border-white/15 flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-xs sm:text-sm text-[#52627A] dark:text-slate-200 text-center">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#1746A2] dark:text-[#D4AF37]" />
              <span className="font-semibold text-[#071A38] dark:text-white">www.nfvs.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#1746A2] dark:text-[#D4AF37]" />
              <span className="font-semibold text-[#071A38] dark:text-white">ncfventurestudio@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#1746A2] dark:text-[#D4AF37]" />
              <span className="font-semibold text-[#071A38] dark:text-white">+91 9209112577</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
