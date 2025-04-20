/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        syne: ["Syne", "sans-serif"],
        heading: ["IvyPresto Display", "serif"],
        body: ["Obviously", "sans-serif"],
        queens: ["Queens Bold", "serif"],
        display: ["Playfair Display", "serif"],
      },
      fontWeight: {
        540: "540",
        560: "560",
        570: "570",
      },
      lineHeight: {
        120: "1.2",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
        umrah: {
          gold: "#D4AF37",
          purple: "#7E69AB",
          darkPurple: "#4A3F6A",
          teal: "#4A8F9F",
          sand: "#EADECA",
          cream: "#FEF8EC",
        },
        "umrah-darkPurple": "#4A3F6A",
        "umrah-purple": "#7E69AB",
        "umrah-gold": "#D4AF37",
        "umrah-cream": "#f9f5e7",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-up": "fade-up 0.7s ease-out forwards",
        fadeIn: "fadeIn 0.5s ease-in-out",
        modalIn: "modalIn 0.5s ease-out",
      },
      backgroundImage: {
        "gradient-gold":
          "linear-gradient(90deg, #D4AF37 0%, #F5E7A3 50%, #D4AF37 100%)",
        "gradient-purple":
          "linear-gradient(90deg, #7E69AB 0%, #9B87F5 50%, #7E69AB 100%)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addComponents }) {
      addComponents({
        ".container-custom": {
          width: "100%",
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
          "@screen 2xl": {
            maxWidth: "1536px",
          },
        },
      });
    },
  ],
};
