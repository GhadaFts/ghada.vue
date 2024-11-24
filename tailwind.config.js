const { getActiveResourcesInfo } = require('process');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#10B982',
      },
    },
  },
  plugins: [],
}

