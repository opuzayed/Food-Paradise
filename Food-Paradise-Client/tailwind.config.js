/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-color': '#059DF4',
        'primary-color':"#18403F",
        'primary-dark-color':"#102A29",
      },
      boxShadow: {
        'small-img': '3px 4px 6px rgba(0,0,0,.45)',
        'card-shadow': '4px 5px 14px rgba(0,0,0,.24)',
        'border': '0 0 3px rgba(0,0,0,.4)',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}

