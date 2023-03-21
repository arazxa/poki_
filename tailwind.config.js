/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: { min: "400px" },

      xs: { min: "540px" },

      sm: { min: "639px" },
      // => @media (min-width: 639px) { ... }

      md: { min: "767px" },
      // => @media (min-width: 767px) { ... }

      lg: { min: "1023px" },
      // => @media (min-width: 1023px) { ... }

      xl: { min: "1279px" },
      // => @media (min-width: 1279px) { ... }

      "2xl": { min: "1535px" },
      // => @media (min-width: 1535px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
