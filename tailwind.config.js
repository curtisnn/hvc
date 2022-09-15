/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./*/*.html",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {},
    colors: {
      gray: colors.blueGray,
      blue: colors.blue,
      white: colors.white,
      orange: colors.orange,
      ghxGold: {
        DEFAULT: "#F5BC3D",
        50: "#FEF8EC",
        100: "#FDF2D8",
        200: "#FBE4B1",
        300: "#F9D78B",
        400: "#F7C964",
        500: "#F5BC3D",
        600: "#EEA80C",
        700: "#B88209",
        800: "#835C07",
        900: "#4E3704",
      },
    },
  },
  plugins: [],
};
