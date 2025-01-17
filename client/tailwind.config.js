/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      colors:{
        lightBg:"#F9FAFB",
        lightBgPrimary :"#FFFFFF",
        lightBgSecondary :"#F3F4F6",
      }
    },
    plugins: [],
  }