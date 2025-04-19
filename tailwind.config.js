/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        syne: ["Syne", "sans-serif"],
        heading: ["IvyPresto Display", "serif"],
        body: ["Obviously", "sans-serif"],
        queens: ["Queens Bold", "serif"],
        display: ["Montserrat", "sans-serif"], // For Umrah component
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
        // System colors
        border: "hsl(var(--border, 0 0% 89.8%))",
        input: "hsl(var(--input, 0 0% 89.8%))",
        ring: "hsl(var(--ring, 0 0% 3.9%))",
        background: "hsl(var(--background, 0 0% 100%))",
        foreground: "hsl(var(--foreground, 0 0% 3.9%))",

        primary: {
          DEFAULT: "hsl(var(--primary, 0 0% 9%))",
          foreground: "hsl(var(--primary-foreground, 0 0% 98%))",
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
          DEFAULT: "hsl(var(--secondary, 0 0% 96.1%))",
          foreground: "hsl(var(--secondary-foreground, 0 0% 9%))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive, 0 84.2% 60.2%))",
          foreground: "hsl(var(--destructive-foreground, 0 0% 98%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 0 0% 96.1%))",
          foreground: "hsl(var(--muted-foreground, 0 0% 45.1%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 0 0% 96.1%))",
          foreground: "hsl(var(--accent-foreground, 0 0% 9%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, 0 0% 100%))",
          foreground: "hsl(var(--popover-foreground, 0 0% 3.9%))",
        },
        card: {
          DEFAULT: "hsl(var(--card, 0 0% 100%))",
          foreground: "hsl(var(--card-foreground, 0 0% 3.9%))",
        },

        // Gray colors
        gray: {
          title: "#1A2B3C",
          body: "#4A5567",
          placeholder: "#8E8C91",
          line: "#E5E7EB",
          input: {
            bg: "#EFEFEF",
          },
        },

        // Umrah colors - both styles for flexibility
        "umrah-darkPurple": "#3c1053",
        "umrah-purple": "#5d2082",
        "umrah-gold": "#d4af37",
        "umrah-cream": "#f9f5e7",

        // Additional umrah colors from the first config
        umrah: {
          gold: "#D4AF37",
          purple: "#7E69AB",
          darkPurple: "#4A3F6A",
          teal: "#4A8F9F",
          sand: "#EADECA",
          cream: "#FEF8EC",
        },

        // Chart colors
        chart: {
          1: "hsl(var(--chart-1, 12 76% 61%))",
          2: "hsl(var(--chart-2, 173 58% 39%))",
          3: "hsl(var(--chart-3, 197 37% 24%))",
          4: "hsl(var(--chart-4, 43 74% 66%))",
          5: "hsl(var(--chart-5, 27 87% 67%))",
        },
      },
      borderRadius: {
        lg: "var(--radius, 0.5rem)",
        md: "calc(var(--radius, 0.5rem) - 2px)",
        sm: "calc(var(--radius, 0.5rem) - 4px)",
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
        bounce: "bounce 1s infinite", // For Hero component
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
    // Only include this plugin if it's installed in your project
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
