/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#3F83F8",
        "color-secondary": "#9333EA",
        "color-accent": "#FACC15",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #3F83F8, #9333EA)",
        "gradient-luxury": "linear-gradient(135deg, #3F83F8, #9333EA, #FACC15)",
      },
    },
  },
  plugins: [],
}