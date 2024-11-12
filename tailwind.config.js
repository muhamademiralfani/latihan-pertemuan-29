/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E1F51",
        secondary: "#F7F7F7",
        accent: "#FF3E54",
      },
    },
  },
  plugins: [],
}