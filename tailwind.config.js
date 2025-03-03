/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gamer-black': '#0A0A0A',
        'gamer-dark': '#121212',
        'gamer-gray': '#1A1A1A',
        'gamer-light': '#2A2A2A',
        'neon-blue': '#00FFFF',
        'neon-purple': '#9D00FF',
        'neon-pink': '#FF00FF',
        'neon-green': '#39FF14',
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.neon-blue), 0 0 20px theme(colors.neon-blue.500)',
        'neon-purple': '0 0 5px theme(colors.neon-purple), 0 0 20px theme(colors.neon-purple)',
        'neon-green': '0 0 5px theme(colors.neon-green), 0 0 20px theme(colors.neon-green)',
      },
    },
  },
  plugins: [],
};