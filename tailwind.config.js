/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      sm: "12px",
      14: "14px",
      13: "13px",
      base: "16px",
      xl: "18px",
      xxl: "20px",
      hadding: "32px",
    },
    colors: {
      primary: "#0156FF",
      secondary: "#f1c40f",
      secondary_2: "#FFB800",
      green: "#78A962",
      red: "#C94D3F",
      white: "#fff",
      black: "#000",
      gray: "#F5F7FF",
      gray_2: "#A2A6B0",
    },
    extend: {},
  },
  plugins: [],
};
