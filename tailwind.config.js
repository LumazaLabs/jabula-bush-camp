/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        jabula: "#505337",
        "jabula-light": "#CCCEB6",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta sans", "sans-serif"],
        sans: ["Noto Serif", "Serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
