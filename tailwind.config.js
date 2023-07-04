/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "hsl(300, 43%, 22%)", // Very Dark Magenta
          soft: "hsl(333, 80%, 67%)", // Soft Pink
        },
        neutral: {
          dark: "hsl(303, 10%, 53%)", // Dark Grayish Magenta
          light: "hsl(300, 24%, 96%)", // Light Grayish Magenta
          white: "hsl(0, 0%, 100%)", // White
        },
      },
      fontFamily: {
        primary: ["'League Spartan'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
