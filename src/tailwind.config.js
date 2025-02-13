/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        heading: ["IvyPresto Display", "serif"],
        body: ["Obviously", "sans-serif"],
        queens: ["Queens Bold", "serif"],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDownSlow: {
          '0%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUpSlow: {
          '0%': { transform: 'translateY(5%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in',
        slideDownSlow: 'slideDownSlow 30s linear infinite',
        slideUpSlow: 'slideUpSlow 30s linear infinite',
      }
    },
  },
  plugins: [],
}