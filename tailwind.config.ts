/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss'

export default <Partial<Config>>{
  mode: 'jit',
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '1536px',
        },
      },
      colors: {
        red: '#F5382C',
        yellow: {
          DEFAULT: '#F1B14A',
        },
        blue: {
          DEFAULT: '#0067FF',
          100: '#5F9FFF',
          200: '#C5D1DE',
        },
        white: {
          DEFAULT: '#ffffff',
          100: '#D9E0E7',
          200: '#F7F9FA',
          300: '#EAEFF5',
        },
        gray: {
          DEFAULT: '#A0ABB8',
          50: '#E1ECFA',
          100: '#B1BECC',
          200: '#E1E8F0',
          300: '#9FAFC2',
        },
        dark: {
          DEFAULT: '#181818',
          100: '#001B43',
        },
        green: {
          DEFAULT: '#1AD939',
          100: '#39AE41',
        },
        pink: {
          DEFAULT: '#FB28FF',
        },
      },
      fontSize: {
        '2xs': '0.8125rem', // 13px
        '4.5xl': '2.5rem', // 40px
        '3.5xl': '2rem', // 32px
        '2.5xl': '1.75rem', // 28px
      },
      lineHeight: {
        112: '112%',
        120: '120%',
        128: '128%',
        130: '130%',
        132: '132%',
        140: '140%',
      },
    }
  },
  plugins: [],
}
