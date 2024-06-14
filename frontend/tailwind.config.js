/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "760px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1568px",
    },
    extend: {},
    fontFamily: {
      oswald: ["Oswald"],
      Roboto: ["Roboto"],
      monster: ["Montserrat"],
    },
  },
  plugins: [],
};
