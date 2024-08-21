/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-main": "#222222",
        "white-main": "#fff",
        "gray-main": "#f2f2f2",
        "gray-dark": "#2F2F2F",
        "blue-main": "#112a46",
        "blue-light": "#e7f2fe",
        "green-light": "#cfd8dc",
        "green-dark": "#32677b",
        "red-main": "#AE0000",
        // "green-dark": "#224653",
      },
      fontFamily: {
        "main-font": ['"Roboto"', "sans-serif"],
        "jp-font": ['"H Hachimaki"', "sans-serif"],
      },
      boxShadow: {
        "box-shadow": "0 3px 5px #000000c0",
        "box-shadow-dark": "0 3px 5px #4D4D4D",
      },
    },
  },
  plugins: [],
};
