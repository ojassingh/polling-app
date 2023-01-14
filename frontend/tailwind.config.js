/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ...
          chalk: "#F2F2F2",
          primary: "#4218D9",
          secondary: "#4B1DF2",
          third: "#7D6BF2",
          fourth: "#C4BDF2"
        },
    },
  },
  plugins: [],
}
