const { getActiveResourcesInfo } = require("process");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#10B982",
        "dark-green": "#0d8f65",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/peakpxe.jpg')",
      },
    },
  },
  plugins: [],
};
