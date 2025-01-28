/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        heading: ["Syne", "sans-serif"],
      },
      colors: {
        primary: {
          default: "#1A2B3C",
          dark: "#0E1822",
          darkmode: "#466D93",
          light: "#B7D6F5",
          bg: "#D8E9FA",
        },
        gray: {
          title: "#1A2B3C",
          body: "#4A5567",
          placeholder: "#8E8C91",
          line: "#E5E7EB",
          input: {
            bg: "#EFEFEF",
          },
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
