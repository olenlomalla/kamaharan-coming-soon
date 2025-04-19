/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        heading: ["IvyPresto Display", "serif"],
        body: ["Obviously", "sans-serif"],
        queens: ["Queens Bold", "serif"],
        display: ["Montserrat", "sans-serif"], // Added for Umrah component
      },
      fontWeight: {
        560: "560",
        570: "570",
        540: "540",
      },
      lineHeight: {
        120: "1.2",
      },
      colors: {
        primary: {
          default: "#1A2B3C",
          dark: "#0E1822",
          darkmode: "#466D93",
          light: "#B7D6F5",
          bg: "#D8E9FA",
          "Grayscale-Title-Active": "#363537",
          "Grayscale-Body": "#4E4B66",
          "Success-Default": "#8B9B8B",
          "Grayscale-Label": "#424144",
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
        // Added Umrah-specific colors
        "umrah-darkPurple": "#3c1053",
        "umrah-purple": "#5d2082",
        "umrah-gold": "#d4af37",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        modalIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        modalIn: "modalIn 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
