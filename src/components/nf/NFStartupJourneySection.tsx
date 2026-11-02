import React, { useState } from 'react';

import {

  Lightbulb,

  FileCheck,

  Cpu,

  Rocket,

  TrendingUp,

  Compass,

  Users,

  Database,

  Coins,

  Network,

  GraduationCap,

  Sparkles,

  ArrowRight,

  CheckCircle2,

} from 'lucide-react';

import stage01IdeaImg from '../../assets/journey_cards/stage_01_idea.jpg';

import stage02ConceptImg from '../../assets/journey_cards/stage_02_concept.jpg';

import stage03DevelopImg from '../../assets/journey_cards/stage_03_develop.jpg';

import stage04LaunchImg from '../../assets/journey_cards/stage_04_launch.jpg';

import stage05GrowImg from '../../assets/journey_cards/stage_05_grow.jpg';

interface NFStartupJourneySectionProps {

  onOpenApplication?: (track?: string) => void;

  isDark?: boolean;

}

export const NFStartupJourneySection: React.FC<NFStartupJourneySectionProps> = ({

  onOpenApplication,

  isDark = false,

}) => {

  const [selectedStage, setSelectedStage] = useState<number>(0);

  const fiveStages = [

    {

      num: '01',

      title: 'IDEA',

      desc: 'Identify a real problem or opportunity.',

      fullDesc: 'Discovering high-value challenges, exploring initial curiosity, and framing the opportunity space.',

      icon: Lightbulb,

      image: stage01IdeaImg,

      badgeText: 'Problem Discovery',

    },

    {

      num: '02',

      title: 'CONCEPT',

      desc: 'Refine and validate the solution.',

      fullDesc: 'Validating feasibility, testing assumptions with target users, and building a conceptual framework.',

      icon: FileCheck,

      image: stage02ConceptImg,

      badgeText: 'Solution Validation',

    },

    {

      num: '03',

      title: 'DEVELOP',

      desc: 'Build the business model and plan.',

      fullDesc: 'Engineering functional prototypes, establishing unit economics, and formalizing the business plan.',

      icon: Cpu,

      image: stage03DevelopImg,

      badgeText: 'Prototyping & Tech',

    },

    {

      num: '04',

      title: 'LAUNCH',

      desc: 'Move toward startup establishment and market entry.',

      fullDesc: 'Statutory registration, pilot deployments, brand assets, and structured market entry.',

      icon: Rocket,

      image: stage04LaunchImg,

      badgeText: 'Market Debut',

    },

    {

      num: '05',

      title: 'GROW',

      desc: 'Scale with support and opportunities.',

      fullDesc: 'Capital syndication, grant linkages, enterprise partnerships, and continuous venture expansion.',

      icon: TrendingUp,

      image: stage05GrowImg,

      badgeText: 'Scaling & Syndication',

    },

  ];



  const supportStreams = [

    {

      title: 'Mentorship',

      desc: 'Guidance from experts and industry professionals',

      icon: Users,

    },

    {

      title: 'Resources',

      desc: 'Access to tools, infrastructure and networks',

      icon: Database,

    },

    {

      title: 'Funding Support',

      desc: 'Guidance on grants, schemes and investment',

      icon: Coins,

    },

    {

      title: 'Industry Connect',

      desc: 'Collaboration with industry and potential partners',

      icon: Network,

    },

    {

      title: 'Capacity Building',

      desc: 'Training, workshops and continuous support',

      icon: GraduationCap,

    },

  ];

  return (

    <section

      id="journey"

      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#071A38] transition-colors duration-300"

    >

      <div className="section-shell space-y-16">



        {/* Section Heading */}

        <div className="max-w-3xl mx-auto text-center space-y-3">

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#103B82]/10 text-[#1746A2] dark:bg-[#18386B] dark:text-[#E8C85A] border border-[#1746A2]/20 shadow-xs">

            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />

            <span>The Startup Journey</span>

          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071A38] dark:text-white tracking-tight">

            A Clear Path from Idea to Growth

          </h2>

          <p className="text-sm sm:text-base text-[#52627A] dark:text-slate-300 leading-relaxed font-normal">

            NF Venture Studio helps innovators move through a structured journey from identifying an opportunity to building a sustainable and impactful venture.

          </p>

        </div>

        {/* 5-Step Process Timeline Cards (With High-Resolution Professional Stage Photos) */}

        <div className="space-y-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">

            {fiveStages.map((stage, idx) => {

              const Icon = stage.icon;

              const isSelected = selectedStage === idx;

              return (

                <div

                  key={idx}

                  role="button"

                  tabIndex={0}

                  onClick={() => setSelectedStage(idx)}

                  onKeyDown={(e) => {

                    if (e.key === 'Enter' || e.key === ' ') {

                      e.preventDefault();

                      setSelectedStage(idx);

                    }

                  }}

                  className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 ${isSelected

                    ? 'bg-gradient-to-b from-[#DCEEFF]/60 to-white dark:from-[#18386B] dark:to-[#10264A] border-[#1746A2] shadow-xl -translate-y-1.5 ring-2 ring-[#1746A2]/40'

                    : 'bg-[#F8FAFC] dark:bg-[#071A38]/70 border-slate-200 dark:border-[#103B82] shadow-sm hover:shadow-lg hover:-translate-y-1'

                    }`}

                >

                  {/* Stage Visual Container */}

                  <div className="w-full aspect-[16/10] overflow-hidden relative bg-slate-100 dark:bg-slate-800">

                    <img

                      src={stage.image}

                      alt={`${stage.title} - ${stage.desc}`}

                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"

                      loading="eager"

                    />

                    {/* Sweeping Shimmer Gleam on Hover */}

                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />



                    {/* Stage Number Badge */}

                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-mono font-black tracking-wider bg-[#10264A]/90 text-[#D4AF37] backdrop-blur-xs border border-[#D4AF37]/40 shadow-xs">

                      STAGE {stage.num}

                    </span>

                    {/* Floating Stage Icon */}

                    <div

                      className={`absolute bottom-2.5 right-2.5 w-8 h-8 rounded-lg flex items-center justify-center shadow-md backdrop-blur-xs transition-colors ${isSelected

                        ? 'bg-[#1746A2] text-white ring-2 ring-white/50'

                        : 'bg-white/95 dark:bg-[#18386B]/95 text-[#1746A2] dark:text-[#E8C85A]'

                        }`}

                    >

                      <Icon className="w-4 h-4" />

                    </div>

                  </div>

                  {/* Stage Details (Explore Details removed per request) */}

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">

                    <div>

                      <div className="flex items-center justify-between gap-1">

                        <h3 className="text-base font-black text-[#071A38] dark:text-white tracking-tight">

                          {stage.title}

                        </h3>

                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#D4AF37] opacity-90 truncate">

                          {stage.badgeText}

                        </span>

                      </div>

                      <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-medium mt-1.5">

                        {stage.desc}

                      </p>

                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[10px] font-bold text-[#1746A2] dark:text-sky-300">

                      <span>Phase {stage.num} of 05</span>

                      {isSelected ? (

                        <span className="w-2 h-2 rounded-full bg-[#1746A2] dark:bg-sky-400 animate-pulse" />

                      ) : (

                        <span className="text-slate-400 font-normal">Click to view</span>

                      )}

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

        {/* 5 Key Support Streams at Every Stage */}

        <div className="space-y-6 pt-4">

          <div className="text-center">

            <h3 className="text-xl sm:text-2xl font-bold text-[#071A38] dark:text-white">

              Key Support at Every Stage

            </h3>

            <p className="text-xs sm:text-sm text-[#52627A] dark:text-slate-300 mt-1">

              End-to-end guidance and ecosystem backing tailored to founder needs.

            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

            {supportStreams.map((item, idx) => {

              const Icon = item.icon;

              return (

                <div

                  key={idx}

                  className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#071A38]/70 border border-slate-200 dark:border-[#103B82] shadow-sm hover:shadow-xl hover:border-[#1746A2] hover:-translate-y-1 transition-all text-center flex flex-col items-center justify-between"

                >

                  <div className="space-y-3">

                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#18386B] shadow-sm flex items-center justify-center text-[#1746A2] mx-auto">

                      <Icon className="w-5 h-5 text-[#1746A2] dark:text-[#E8C85A]" />

                    </div>

                    <h4 className="text-sm font-bold text-[#071A38] dark:text-white">

                      {item.title}

                    </h4>

                    <p className="text-xs text-[#52627A] dark:text-slate-300 leading-relaxed font-medium">

                      {item.desc}

                    </p>

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

