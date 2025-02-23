/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',"./src/**/*.{jsx,ts,tsx,js}"],
  theme: {
    extend: {
      fontFamily:{
        title: ['"cursive"']
      }
    },
  },
  plugins: [],
}

