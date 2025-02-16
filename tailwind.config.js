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
        letsTalklinearGradient:
          "linear-gradient(90deg, rgba(119,85,255,1) 0%, rgba(144,85,255,1) 44%, rgba(255,195,16,1) 100%, rgba(234,227,255,1) 100%)",
        GraphBggradient:
          "radial-gradient(circle, rgba(0,0,0,0.14889705882352944) 0%, rgba(0,0,0,0.1) 19%, rgba(0,0,0,0) 60%)",

        heroBackgroundimage: "url('/assets/nav-and-hero-svg/hero-bg.svg')",
        letsTalkheroBackgroundimage:
          "url('/assets/lets-talk-section-imge/lets-talk-section-image.png')",
        consultaion:
          "url('/assets/nav-and-hero-svg/consultaion-section-bg.svg')",
        connectUs: "url('assets/nav-and-hero-svg/connect-us-bg.svg')",
        nextStepsectionBggraph:
          "url('/assets/lets-talk-section-imge/next-step-section-graph.svg')",
        nextStepsectionline:
          "url('/assets/lets-talk-section-imge/next-step-section.svg')",
      },
      fontFamily: {
        fontPrimary: ["Inter", "serif"],
        fontSecondery: ["Lexend Deca", "serif"],
        fontManrope: ["Manrope", "serif"],
      },
      borderColor: {
        btnBordercolor: "#7755FF",
      },
      colors: {
        navBtntextColor: "#7755FF",
      },
      boxShadow: {
        stepsShadow: "0px 35px 50px 0px rgba(0,159,98,0.05)",
      },
    },
  },
  plugins: [],
};
