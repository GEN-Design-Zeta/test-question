/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', '-apple-system', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
      colors: {
        navy: '#1A1625',
        'navy-dark': '#0F0B1E',
        purple: '#5B2FD4',
        'purple-mid': '#7B52E0',
        'purple-lt': '#EDE8FB',
        'purple-ft': '#F5F2FE',
        teal: '#0EA47A',
        gold: '#C49A10',
        coral: '#E85D3A',
      },
    },
  },
  plugins: [],
}
