/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        purple: {
          1000: '#2A2141',
        },
        white: {
          10: '#E1E1E6',
        }
      }
    },
  },
  plugins: [],
}