/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'card-color' : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(158, 254, 191, 0.15) 50%, rgba(21, 165, 70, 0.15) 100%'
      }
    },
  },
  plugins: [],
}

