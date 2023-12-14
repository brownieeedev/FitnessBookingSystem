/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      extrasm: "390px",
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
      },
    },
  },
  plugins: [],
};
