import React, { useState } from 'react';
import officialEmblem from '../../assets/nfvs_official_emblem.png';
import officialLogoFull from '../../assets/nfvs_official_logo_full.png';
import fallbackLogo from '../../assets/nf-logo-transparent.png';

interface NFLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
  showText?: boolean;
  tagline?: 'growth' | 'impact' | 'short';
  className?: string;
  useFullImage?: boolean;
  layout?: 'horizontal' | 'vertical';
}

export const NFLogo: React.FC<NFLogoProps> = ({
  size = 'md',
  variant = 'auto',
  showSubtitle = true,
  showText = true,
  tagline = 'growth',
  className = '',
  useFullImage = false,
  layout = 'horizontal',
}) => {
  const [imgSrc, setImgSrc] = useState(officialEmblem);

  if (useFullImage) {
    const fullSizeMap = {
      sm: 'h-8 sm:h-9',
      md: 'h-10 sm:h-12',
      lg: 'h-14 sm:h-16',
      xl: 'h-20 sm:h-24',
      '2xl': 'h-28 sm:h-32',
    };
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={officialLogoFull}
          alt="NF Venture Studio Official Logo"
          className={`w-auto ${fullSizeMap[size]} object-contain filter drop-shadow-sm dark:drop-shadow-none`}
        />
      </div>
    );
  }

  const sizeMap = {
    sm: {
      imgSize: 'w-8 h-8 sm:w-9 sm:h-9',
      titleSize: 'text-xs sm:text-sm',
      subTitleSize: 'text-[10px] sm:text-xs',
      subText: 'text-[7px] sm:text-[8px]',
      gap: 'gap-2',
    },
    md: {
      imgSize: 'w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12',
      titleSize: 'text-xs sm:text-sm md:text-base font-extrabold',
      subTitleSize: 'text-[11px] sm:text-xs md:text-sm font-black',
      subText: 'text-[8px] sm:text-[9px]',
      gap: 'gap-2.5 sm:gap-3',
    },
    lg: {
      imgSize: 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20',
      titleSize: 'text-base sm:text-lg md:text-xl font-extrabold',
      subTitleSize: 'text-sm sm:text-base md:text-lg font-black',
      subText: 'text-[10px] sm:text-xs',
      gap: 'gap-3 sm:gap-3.5',
    },
    xl: {
      imgSize: 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28',
      titleSize: 'text-xl sm:text-2xl md:text-3xl font-extrabold',
      subTitleSize: 'text-lg sm:text-xl md:text-2xl font-black',
      subText: 'text-xs sm:text-sm',
      gap: 'gap-4 sm:gap-5',
    },
    '2xl': {
      imgSize: 'w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36',
      titleSize: 'text-2xl sm:text-3xl md:text-4xl font-extrabold',
      subTitleSize: 'text-xl sm:text-2xl md:text-3xl font-black',
      subText: 'text-sm sm:text-base',
      gap: 'gap-5 sm:gap-6',
    },
  };

  const current = sizeMap[size];

  const taglineText =
    tagline === 'impact'
      ? 'IDEAS • INCUBATION • IMPACT'
      : tagline === 'short'
      ? 'STARTUP INCUBATOR'
      : 'IDEAS • INNOVATION • GROWTH';

  const isLightText = variant === 'light';

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {/* Official HD 3D Shield Emblem */}
        <div className={`relative shrink-0 ${current.imgSize} flex items-center justify-center filter drop-shadow-md dark:drop-shadow-none mb-2`}>
          <img
            src={imgSrc}
            alt="NF Venture Studio Official HD Logo"
            className="w-full h-full object-contain"
            decoding="async"
            onError={() => setImgSrc(fallbackLogo)}
          />
        </div>

        {/* Official Typography from HD Logo */}
        {showText && (
          <div className="flex flex-col items-center leading-none">
            <span
              className={`font-black tracking-[0.16em] uppercase font-display ${current.titleSize}`}
            >
              <span className={isLightText ? 'text-white' : 'text-[#071A38] dark:text-white'}>
                NF{' '}
              </span>
              <span className="text-[#D4AF37]">VENTURE STUDIO</span>
            </span>

            {showSubtitle && (
              <span
                className={`font-bold tracking-widest uppercase font-mono mt-1.5 ${current.subText} ${
                  isLightText ? 'text-sky-200' : 'text-[#1746A2] dark:text-[#60A5FA]'
                }`}
              >
                {taglineText}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${current.gap} select-none ${className}`}>
      {/* Official HD 3D Shield Emblem */}
      <div className={`relative shrink-0 ${current.imgSize} flex items-center justify-center filter drop-shadow-sm dark:drop-shadow-none`}>
        <img
          src={imgSrc}
          alt="NF Venture Studio Official HD Logo"
          className="w-full h-full object-contain"
          decoding="async"
          onError={() => setImgSrc(fallbackLogo)}
        />
      </div>

      {/* Official Typography from HD Logo: NF VENTURE STUDIO */}
      {showText && (
        <div className="flex flex-col justify-center leading-tight min-w-0 text-left">
          <span
            className={`font-black tracking-tight font-display whitespace-nowrap uppercase ${current.titleSize}`}
          >
            <span className={isLightText ? 'text-white' : 'text-[#071A38] dark:text-white'}>
              NF{' '}
            </span>
            <span className="text-[#D4AF37]">VENTURE STUDIO</span>
          </span>

          {showSubtitle && (
            <span
              className={`font-bold tracking-widest uppercase font-mono mt-0.5 truncate ${current.subText} ${
                isLightText
                  ? 'text-sky-200'
                  : 'text-[#1746A2] dark:text-[#60A5FA]'
              }`}
            >
              {taglineText}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
