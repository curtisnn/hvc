/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
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
      gray: colors.gray,
      white: colors.white,
      blue: colors.blue,
      red: colors.red,
      orange: colors.orange,
      green: colors.green,
      "ghx-gold": {
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
      "ghx-blue": {
        DEFAULT: "#90ABC9",
        50: "#FFFFFF",
        100: "#FEFEFE",
        200: "#E2E9F1",
        300: "#C7D5E4",
        400: "#ABC0D6",
        500: "#90ABC9",
        600: "#6A8EB7",
        700: "#4C729D",
        800: "#3A5777",
        900: "#273B51",
      },
    },
  },
  plugins: [],
};
