/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "375px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        "draw-svg": "dash 5s linear forwards",
      },
      keyframes: {
        dash: {
          "0%": { strokeDashoffset: 1283.63671875 },
          "100%": { strokeDashoffset: 0 },
        },
      },
    },
  },
  plugins: [],
};
export default config;
