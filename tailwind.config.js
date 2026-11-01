/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          900: '#040914',
          800: '#071022',
          700: '#0b1830',
          600: '#112241',
          500: '#182d55',
          400: '#22396b',
          300: '#2f4a80',
        },
        frost: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        holly: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        crimson: {
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
        },
        gold: {
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Mountains of Christmas', 'Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(56, 189, 248, 0.35)',
        'glow-red': '0 0 20px rgba(239, 68, 68, 0.3)',
        'glow-gold': '0 0 20px rgba(250, 204, 21, 0.3)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        snowfall: {
          '0%': { transform: 'translate3d(0, -10vh, 0)' },
          '100%': { transform: 'translate3d(var(--drift, 0px), 110vh, 0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1.2)' },
          '50%': { opacity: '0.45', filter: 'brightness(0.8)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(56,189,248,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(56,189,248,0.55)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        snowfall: 'snowfall linear infinite',
        twinkle: 'twinkle 2.4s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'slide-in': 'slide-in 0.4s ease-out',
        sway: 'sway 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
