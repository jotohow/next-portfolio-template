/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#272932",
        "custom-hover": "#4D7EA8",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: [
          "source-code-pro",
          "Menlo",
          "Monaco",
          "Consolas",
          "Courier New",
          "monospace",
        ],
      },
      height: {
        "93vh": "93vh",
        "7vh": "7vh",
        "73vh": "73vh",
        "50vh": "50vh",
      },
      width: {
        "66%": "66%",
        "33%": "33%",
        "35vw": "35vw",
        "75vw": "75vw",
      },
      fontSize: {
        "4vh": "4vh",
        "5vh": "5vh",
        "2vh": "2vh",
        "3.5vh": "3.5vh",
      },
      gap: {
        "6rem": "6rem",
        "10vw": "10vw",
        "1vw": "1vw",
        "0.5vw": "0.5vw",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-none": {
          "scrollbar-width": "none !important",
          "-ms-overflow-style": "none !important",
        },
        ".scrollbar-none::-webkit-scrollbar": {
          display: "none !important",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
