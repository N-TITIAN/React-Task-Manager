/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: "#FF2473",
        customLightBlue: "#18B0FF",
        customGreen: "#40A737",
        customOrange: "#FEA946",
        customDarkGreen: "#00569E",
        customTextGrey: "6A6A6A",
      },
    },
  },

  plugins: [],
};

