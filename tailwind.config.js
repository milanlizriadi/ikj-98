/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },

    extend: {
      colors: {
        ikj: "#F98110",
        secondary: "#cbd5e1",
        dark: "#0f172a",
        blue: "#172554",
        light: "#4338ca",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
