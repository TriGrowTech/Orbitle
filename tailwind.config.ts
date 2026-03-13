import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        navy:  '#1a3a5c',
        navy2: '#0f2540',
        blue:  '#2563a8',
        blue2: '#1e4f8e',
        steel: '#3a7abf',
        sky:   '#e8f2fb',
        sky2:  '#d0e6f7',
        ink:   '#111827',
        ink2:  '#374151',
        muted: '#6b7280',
      },
      animation: {
        blink:  'blink 2s infinite',
        floatY: 'floatY 5s ease-in-out infinite',
      },
      keyframes: {
        blink:  { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.3' } },
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      maxWidth: { container: '1100px', sm: '780px' },
    },
  },
  plugins: [],
}
export default config
