/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'romantic': {
          '50': '#fff4ed',
          '100': '#fee7d6',
          '200': '#fdd6bd',
          '300': '#fba776',
          '400': '#f8773f',
          '500': '#f5541a',
          '600': '#e63a10',
          '700': '#bf280f',
          '800': '#982214',
          '900': '#7a1f14',
          '950': '#420d08',
        }, 
        'pink-salmon': {
          '50': '#fef2f3',
          '100': '#fee5e8',
          '200': '#fccfd7',
          '300': '#f794a4',
          '400': '#f4788f',
          '500': '#eb486a',
          '600': '#d72755',
          '700': '#b51b46',
          '800': '#981941',
          '900': '#82193d',
          '950': '#48091d',
        },
      }
    },
  },
  plugins: [],
}

