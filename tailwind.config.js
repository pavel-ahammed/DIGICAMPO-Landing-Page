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
        heroLineargradient:
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
        heroSecondlinearGradient:
          "linear-gradient(90deg, rgba(231,234,253,1) 0%, rgba(235,233,253,1) 100%)",
      },
      fontFamily: {
        fontPrimary: ["Inter", "serif"],
        fontSecondery: ["Lexend Deca", "serif"],
      },
      borderColor: {
        btnBordercolor: "#7755FF",
      },
      colors: {
        navBtntextColor: "#7755FF",
      },
    },
  },
  plugins: [],
};
