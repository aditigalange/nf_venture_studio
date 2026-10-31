import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Official Brand Color Theme - Rich Dark Blue System
        brand: {
          deepNavy: '#071A38',
          darkRoyal: '#103B82',
          royal: '#1746A2',
          accentBlue: '#2864C5',
          white: '#FFFFFF',
          gold: '#D4AF37',
          goldLight: '#E8C85A',
          goldDark: '#B39023',
          lightBlue: '#DCEEFF',
          navy: '#071A38',
          navyDark: '#040F21',
          navyLight: '#103B82',
          softBg: '#F8FAFC',
          cardBg: '#FFFFFF',
          border: '#103B82',
          textDark: '#071A38',
          textMuted: '#52627A',
        },
        royal: {
          50: '#F0F5FD',
          100: '#DCEEFF',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#1746A2',
          600: '#143C8C',
          700: '#103173',
          800: '#0C2556',
          900: '#08193A',
        },
        gold: {
          50: '#FBF8EE',
          100: '#F5EECB',
          200: '#ECDFA0',
          300: '#E2CE74',
          400: '#DABF53',
          500: '#D4AF37',
          600: '#B89324',
          700: '#917216',
          800: '#6E5510',
          900: '#4D3A0A',
        },
        navy: {
          50: '#F0F4FA',
          100: '#DEE7F3',
          200: '#BDCFE7',
          300: '#97B3D8',
          400: '#6A92C5',
          500: '#2A5594',
          600: '#1E4176',
          700: '#16315C',
          800: '#10264A',
          900: '#0A1830',
          950: '#050D1C',
        },
        sidebar: {
          bg: '#10264A',
        },
      },
      screens: {
        xs: '480px',
      },
      borderRadius: {
        card: '1rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Outfit', 'system-ui', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 10px 30px -10px rgba(23, 70, 162, 0.12), 0 4px 6px -2px rgba(16, 38, 74, 0.05)',
        'premium-hover': '0 20px 40px -15px rgba(23, 70, 162, 0.22), 0 8px 16px -4px rgba(212, 175, 55, 0.15)',
        gold: '0 8px 25px -5px rgba(212, 175, 55, 0.35)',
        royal: '0 8px 25px -5px rgba(23, 70, 162, 0.35)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out forwards',
        fadeUp: 'fadeUp 0.5s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        floatSlow: 'floatSlow 7s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
