/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-main": "#222222",
        "white-main": "#fff",
        "gray-main": "#f2f2f2",
        "blue-main": "#112a46",
        "green-light": "#cfd8dc",
        "green-dark": "#32677b",
        // "green-dark": "#224653",
      },
      fontFamily: {
        "main-font": ['"Roboto"', "sans-serif"],
      },
      boxShadow: {
        "box-shadow": "0 3px 5px #000000c0",
      },
    },
  },
  plugins: [],
};