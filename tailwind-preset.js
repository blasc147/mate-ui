const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  theme: {
    screens: {
      desktop: '1024px',
    },
    colors: {
      black: '#111111',
      white: '#FFFFFF',
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      neutral: {
        100: '#F8FAFC',
        200: '#F1F5F9',
        300: '#E2E8F0',
        400: '#CBD5E1',
        500: '#94A3B8',
        600: '#64748B',
        700: '#334155',
        800: '#1E293B',
        900: '#0A132C',
      },
      primary: {
        100: '#EBECF7',
        200: '#D7D8EF',
        300: '#B0B2DF',
        400: '#4D51B8',
        500: '#393EB0',
        600: '#343A98',
        700: '#2E3488',
        800: '#282D76',
        900: '#1D2055',
      },
      secondary: {
        100: '#ECF8FB',
        200: '#D2F3F8',
        300: '#8EE1ED',
        400: '#62D6E6',
        500: '#1FC4DB',
        600: '#00B2CA',
        700: '#019FB5',
        800: '#01899C',
        900: '#126A86',
      },
      info: {
        100: '#E0F2FE',
        200: '#BAE6FD',
        500: '#0EA5E9',
        700: '#0369A1',
        800: '#075985',
      },
      success: {
        100: '#DCFCE7',
        200: '#BBF7D0',
        500: '#22C55E',
        700: '#15803d',
        800: '#166534',
      },
      warning: {
        100: '#FEF3C7',
        200: '#FDE68A',
        500: '#EAB308',
        700: '#C17D23',
        800: '#9F6313',
      },
      error: {
        100: '#FEE2E2',
        200: '#FECACA',
        500: '#EF4444',
        700: '#CA3B3B',
        800: '#A82828',
      },
      focus: '#BAE6FD',
    },
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      '3xl': ['30px', '42px'],
      '2xl': ['24px', '33.6px'],
      xl: ['20px', '28px'],
      lg: ['18px', '25.2px'],
      m: ['16px', '22.4px'],
      sm: ['14px', '19.6px'],
      xs: ['12px', '16.8px'],
      xxs: ['10px', '14px'],
    },
    extend: {
      // keyframes: {
      //   slideIn: {
      //     'from': 'translateX(calc(100% + 25px))',
      //     'to':'translateX(0)'
      //   },
      //   hide: {
      //     'from': 'opacity: 1',
      //     'to':'opacity: 0'
      //   }
      // }
    }
  },
  plugins: [require('@tailwindcss/forms')],
};
