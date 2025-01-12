/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },
      colors: {
        kamaharan: {
          primary: '#2563eb', // Blue from the original design
          secondary: '#1E40AF', // Slightly darker blue
          accent: '#3B82F6', // Lighter blue
        },
      },
    },
  },
  plugins: [],
};
