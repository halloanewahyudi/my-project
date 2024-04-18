/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors:{
        brand:{
          1:'#335e5e',
          2:'#4e8686',
          3:'#84cccc',
          4:'#dbe8ec',
          5:'#f0cc57',
          6:'#f8cf48'
        }
      }
    },
  },
  plugins: [],
}

