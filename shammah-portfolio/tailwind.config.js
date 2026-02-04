/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors') // <--- Import this

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Explicitly adding colors to use
        stone: colors.stone,
        amber: colors.amber,
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
  darkMode: 'class', 
}