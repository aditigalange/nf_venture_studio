import React, { useState } from 'react';
import {
  FlaskConical,
  Server,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Cpu,
  Database,
  Terminal,
  Activity,
  Compass,
  TrendingUp,
  ShieldCheck,
  Lock,
  Globe2,
} from 'lucide-react';

interface NFInitiativesSectionProps {
  onOpenApplication?: (track?: string) => void;
  isDark?: boolean;
}

interface CardSliderProps<T> {
  items: T[];
  title: string;
  renderCard: (item: T, index: number, isPrimary: boolean) => React.ReactNode;
  desktopItems?: number;
  autoPlayInterval?: number;
}

function CardSlider<T>({
  items,
  title,
  renderCard,
  desktopItems = 2,
  autoPlayInterval = 4000,
}: CardSliderProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const maxIndex = Math.max(0, items.length - desktopItems);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div
      className="space-y-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Top Controls */}
      <div className="flex items-center justify-between px-1">
        <span className="text-xs sm:text-sm font-bold text-[#071A38] dark:text-white uppercase tracking-wider">
          {title}
        </span>

        <div className="flex items-center gap-2">
          {/* Progress Indicator Dots */}
          <div className="flex items-center gap-1.5 mr-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-6 bg-[#1746A2] dark:bg-[#D4AF37]'
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0A1D3B] text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-[#1746A2] hover:text-white dark:hover:bg-[#D4AF37] dark:hover:text-[#071A38] transition-colors shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0A1D3B] text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-[#1746A2] hover:text-white dark:hover:bg-[#D4AF37] dark:hover:text-[#071A38] transition-colors shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Slider Track Container */}
      <div className="overflow-hidden rounded-2xl py-2 -my-2">
        <div
          className="flex transition-transform duration-500 ease-out gap-4 sm:gap-5"
          style={{
            transform: `translateX(-${currentIndex * (100 / desktopItems + 1.2)}%)`,
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
            >
              {renderCard(item, idx, idx === currentIndex)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const NFInitiativesSection: React.FC<NFInitiativesSectionProps> = ({
  onOpenApplication,
  isDark = false,
}) => {
  const [activeTab, setActiveTab] = useState<'research' | 'it'>('research');

  const tabs = [
    {
      id: 'research' as const,
      name: 'Research to Impact',
      icon: FlaskConical,
      badge: 'Commercialization',
    },
    {
      id: 'it' as const,
      name: 'IT Cell Backbone',
      icon: Server,
      badge: 'Digital Infrastructure',
    },
  ];

  // Research Commercialization Data from Brochure Page 11
  const researchSteps = [
    { step: '01', name: 'DISCOVER', desc: 'Identify promising research and technologies.', icon: Compass },
    { step: '02', name: 'EVALUATE', desc: 'Assess feasibility, market potential and IP.', icon: Activity },
    { step: '03', name: 'DEVELOP', desc: 'Prototype and validate with expert support.', icon: Cpu },
    { step: '04', name: 'COMMERCIALIZE', desc: 'Build business models and enable market entry.', icon: TrendingUp },
    { step: '05', name: 'IMPACT', desc: 'Create sustainable businesses with real-world value.', icon: Sparkles },
  ];

  // IT Cell Data from Brochure Page 10
  const itFunctions = [
    { num: '01', title: 'Technical Support', desc: 'Day-to-day IT assistance for students, faculty & startups.', icon: Terminal },
    { num: '02', title: 'Infrastructure Mgmt', desc: 'Manage systems, servers, software and cloud resources.', icon: Server },
    { num: '03', title: 'Development Support', desc: 'Support website, application and software development.', icon: Cpu },
    { num: '04', title: 'Cybersecurity', desc: 'Promote data security, access control and safe digital practices.', icon: Lock },
    { num: '05', title: 'Data Management', desc: 'Organize digital records, reports and knowledge resources.', icon: Database },
    { num: '06', title: 'Access Control', desc: 'Manage user accounts, permissions and system access.', icon: ShieldCheck },
    { num: '07', title: 'Digital Innovation', desc: 'Implement automation and digital solutions for efficiency.', icon: Activity },
    { num: '08', title: 'Event Support', desc: 'Provide technical support for webinars, hackathons & events.', icon: Globe2 },
  ];

  return (
    <section
      id="initiatives"
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#071A38] text-[#071A38] dark:text-white transition-colors duration-300"
    >
      <div className="section-shell space-y-14">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Research &amp; Digital Infrastructure</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A38] dark:text-white tracking-tight">
            Research to Impact &amp; IT Cell Backbone
          </h2>

          <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
            Accelerating translational academic research into commercial reality while empowering institutional ecosystems with robust digital IT infrastructure.
          </p>
        </div>

        {/* Tab Navigation Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 ${
                  isCurrent
                    ? 'bg-[#1746A2] text-white shadow-royal scale-102 border-2 border-[#D4AF37]'
                    : 'bg-[#F8FAFC] dark:bg-[#071A38]/80 text-[#071A38] dark:text-slate-200 border border-slate-200 dark:border-[#103B82]/50 hover:bg-slate-100 dark:hover:bg-[#103B82]/60'
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isCurrent ? 'text-[#D4AF37]' : 'text-[#1746A2] dark:text-[#E8C85A]'
                  }`}
                />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Container */}
        <div className="rounded-3xl bg-[#F8FAFC] dark:bg-[#071A38]/90 border border-slate-200 dark:border-[#103B82] shadow-xl overflow-hidden transition-all">
          {/* TAB 1: Research to Real Impact */}
          {activeTab === 'research' && (
            <div className="p-6 sm:p-8 lg:p-10 space-y-8 animate-fadeIn">
              {/* Centered Header */}
              <div className="max-w-3xl mx-auto text-center space-y-3 pb-8 border-b border-slate-200 dark:border-[#103B82]/50">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>Research to Real-World Solutions</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071A38] dark:text-white tracking-tight">
                  From Research to Real Impact
                </h3>

                <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                  NF Venture Studio bridges the gap between academic research and real-world applications by supporting technology commercialization and deep-tech innovation.
                </p>

                <blockquote className="pt-2 text-xs sm:text-sm font-bold text-[#1746A2] dark:text-sky-300 italic">
                  &ldquo;Turning knowledge into opportunities for a better tomorrow.&rdquo;
                </blockquote>
              </div>

              {/* 5-Step Process with Animated Slider */}
              <CardSlider
                items={researchSteps}
                title="Research Commercialization Process"
                desktopItems={3}
                autoPlayInterval={4000}
                renderCard={(s, idx, isPrimary) => {
                  const Icon = s.icon;
                  return (
                    <div
                      className={`h-full p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between group ${
                        isPrimary
                          ? 'bg-white dark:bg-[#0B1E3D] border-2 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/15 scale-[1.01]'
                          : 'bg-white dark:bg-[#0A1D3B]/90 border border-slate-200 dark:border-[#1A3D73] hover:border-[#D4AF37]/60 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h5 className="text-base font-extrabold text-[#071A38] dark:text-white tracking-tight">
                            {s.name}
                          </h5>
                          <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  );
                }}
              />

              {/* 4 Support Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: 'Technology Scouting',
                    desc: 'Identify and nurture high-potential innovations and patents from academia.',
                  },
                  {
                    title: 'Prototype Development',
                    desc: 'Support in product development, testing benches, and real-world validation.',
                  },
                  {
                    title: 'IP Management',
                    desc: 'Guidance on patents, trademarks, licensing, and corporate structuring.',
                  },
                  {
                    title: 'Business Enablement',
                    desc: 'Mentorship, market connect, industry pilots, and investor readiness.',
                  },
                ].map((sup, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-[#071A38]/80 border border-slate-200 dark:border-[#103B82]/50 shadow-sm"
                  >
                    <h5 className="text-xs font-black text-[#1746A2] dark:text-sky-300 uppercase tracking-wider">
                      {sup.title}
                    </h5>
                    <p className="text-xs text-[#52627A] dark:text-slate-300 mt-1.5 leading-relaxed font-medium">
                      {sup.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: IT Cell */}
          {activeTab === 'it' && (
            <div className="p-6 sm:p-8 lg:p-10 space-y-8 animate-fadeIn">
              {/* Centered Header */}
              <div className="max-w-3xl mx-auto text-center space-y-3 pb-8 border-b border-slate-200 dark:border-[#103B82]/50">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                  <Server className="w-3.5 h-3.5" />
                  <span>IT Cell</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071A38] dark:text-white tracking-tight">
                  Digital Backbone for a Stronger Ecosystem
                </h3>

                <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                  The IT Cell at NF Venture Studio supports digital transformation and provides technical services for students, startups and institutional stakeholders.
                </p>

                <blockquote className="pt-2 text-xs sm:text-sm font-bold text-[#1746A2] dark:text-sky-300 italic">
                  &ldquo;Technology enables people, people build impact.&rdquo;
                </blockquote>
              </div>

              {/* 8 Core Functions with Animated Slider */}
              <CardSlider
                items={itFunctions}
                title="8 Core Technical Functions"
                desktopItems={4}
                autoPlayInterval={4000}
                renderCard={(fn, idx, isPrimary) => {
                  const Icon = fn.icon;
                  return (
                    <div
                      className={`h-full p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between group ${
                        isPrimary
                          ? 'bg-white dark:bg-[#0B1E3D] border-2 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/15 scale-[1.01]'
                          : 'bg-white dark:bg-[#0A1D3B]/90 border border-slate-200 dark:border-[#1A3D73] hover:border-[#D4AF37]/60 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h5 className="text-base font-extrabold text-[#071A38] dark:text-white tracking-tight">
                            {fn.title}
                          </h5>
                          <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">
                          {fn.desc}
                        </p>
                      </div>
                    </div>
                  );
                }}
              />

              {/* Infrastructure & Tools */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#071A38]/80 border border-slate-200 dark:border-[#103B82]/50 space-y-2.5">
                <span className="text-xs font-black text-[#1746A2] dark:text-sky-300 uppercase tracking-wider">
                  IT Infrastructure &amp; Technical Services Provided
                </span>

                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    'Cloud Services',
                    'Servers & Networking',
                    'Development Environments',
                    'Databases & Data Storage',
                    'Cybersecurity Tools',
                    'Collaboration & Productivity Tools',
                    'Website & Portal Development',
                    'Automation & Integration',
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-3.5 py-1.5 rounded-xl bg-[#DCEEFF]/70 dark:bg-[#18386B] text-[#1746A2] dark:text-slate-200 border border-[#DCEEFF] dark:border-[#1E4176] font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
