/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      backgroundImage: {
        linear_gradiant:
          " linear-gradient(90deg, rgba(165,134,255,1) 22%, rgba(255,166,138,1) 100%);",
        navTop_btnGradiant:
          "linear-gradient(90deg, rgba(119,85,255,0.61) 0%, rgba(70,49,152,1) 100%);",
      },
      fontFamily: {
        fontPrimary: ["Inter", "serif"],
        fontSecondery: ["Lexend Deca", "serif"],
      },
    },
  },
  plugins: [],
};
