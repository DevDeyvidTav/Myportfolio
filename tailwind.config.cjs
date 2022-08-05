/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    screens: {
      'mobile': '350px',
      // => @media (max-width: 640px) { ... }

      'tablet-p': '640px',
      // => @media (max-width: 1024px) { ... }
      'tablet-m': '924px',

      'pc': '1024px',
      // => @media (max-width: 1280px) { ... }
    },
  },
  plugins: [],
}