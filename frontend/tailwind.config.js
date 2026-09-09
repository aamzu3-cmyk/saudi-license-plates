/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        saudi: {
          dark: '#064E3B',
          light: '#10B981',
          gold: '#D4A017',
          cream: '#F5E6D3',
        }
      },
      fontFamily: {
        arabic: ['Segoe UI', 'Tahoma', 'sans-serif'],
      },
      direction: {
        rtl: 'rtl',
      }
    },
  },
  plugins: [],
}
