/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fdf5f6',
          100: '#fbe8eb',
          200: '#f6d1d9',
          300: '#eeaeb9',
          400: '#e3859a',
          500: '#d0617e',
          600: '#b04564',
          700: '#8f3652',
          800: '#772f47',
          900: '#652a3f',
        },
        cream: {
          50: '#fffdf8',
          100: '#fdf7ea',
          200: '#faedd0',
          300: '#f4dda9',
          400: '#ecc87b',
          500: '#e0af52',
        },
        lavender: {
          50: '#f7f6fc',
          100: '#ede9f8',
          200: '#dcd4f1',
          300: '#c1b2e4',
          400: '#a68cd3',
          500: '#8c6ec0',
          600: '#7154a3',
          700: '#5c4485',
          800: '#4b3a6b',
          900: '#3f3159',
        },
        rose: {
          50: '#fbf3f4',
          100: '#f6e2e5',
          200: '#eec2c9',
          300: '#e09aa6',
          400: '#cd6c7e',
          500: '#b04c60',
          600: '#8e3a4c',
          700: '#722f3f',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(112, 66, 90, 0.25)',
        paper: '0 2px 10px rgba(112, 66, 90, 0.12), 0 1px 2px rgba(112, 66, 90, 0.08)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        unfold: {
          '0%': { transform: 'scaleY(0.05)', opacity: '0' },
          '60%': { opacity: '1' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        unfold: 'unfold 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
