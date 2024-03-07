/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        "light-cyan-primary": "hsl(193, 38%, 86%)",
        "neon-green-primary": "hsl(150, 100%, 66%)",
        "grayish-blue-neutral": "hsl(217, 19%, 38%)",
        "dark-grayish-blue-neutral": "hsl(217, 19%, 24%)",
        "dark-blue-neutral": "hsl(218, 23%, 16%)",
      },
      boxShadow: {
        "3xl": "0px 0px 40px",
      },
    },
  },
  plugins: [],
};
