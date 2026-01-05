/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#31e9e9',
          blue: '#52e3fe',
          dark: '#2d2d2d',
        }
      }
    },
  },
  plugins: [],
}