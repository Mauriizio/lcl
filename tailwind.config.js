/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crazy: ["CrazySixties", "cursive"],
        crazyHollow: ["CrazySixtiesHollow", "cursive"],
      },
      colors: {
        brand: {
          DEFAULT: "#0074D9",   // azul primario ejemplo
          dark: "#001F3F",      // azul noche
          accent: "#9B59B6",    // púrpura
          gray: "#BDC3C7",
        },
      },
    },
  },
  plugins: [],
};
