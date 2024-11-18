/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pisca: {
          "0%": { opacity: 1 },
          "50%": { opacity: .2 },
          "100%": { opacity: 1 },
        }
      },
      animation: {
        pisca: "pisca 2s infinite"
      }
    },
  },
  plugins: [],
}