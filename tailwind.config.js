/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      extrasm: "390px",
      middlesm: "515px",
      sm: "640px",
      md: "800px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1536px",
    },
    extend: {
      colors: {
        key: "#7BF7FF",
        string: "#FFAA7A",
        number: "#D5FFAB",
        squareBrackets: "#B67DFE",
        mygray: "D3D8E8",
        darkgray: "#273036",
        blue: "#0288d1",
        purple: "#6A64F1",
        offwhite: "#F3F4F6",
        yellow: "#ffe95c",
      },
      fontFamily: {
        fira: ["Fira Code", "ui-sans-serif", "system-ui"],
        kumbh: ["Kumbh Sans", "ui-sans-serif", "system-ui"],
        geologica: ["Geologica", "ui-sans-serif", "system-ui"],
        inter: ["Inter", "ui-sans-serif", "system-ui"],
        monstserrat: ["Montserrat", "ui-sans-serif", "system-ui"],
        noto: ["Noto Sans", "ui-sans-serif", "system-ui"],
        nunito: ["Nunito Sans", "ui-sans-serif", "system-ui"],
        open: ["Open Sans", "ui-sans-serif", "system-ui"],
        poppins: ["Poppins", "ui-sans-serif", "system-ui"],
        mona: ["Mona Sans", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
