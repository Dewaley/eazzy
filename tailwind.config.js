/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackish: "#343538",
        greenish: "#3D7E47",
        greyish: "rgba(52, 53, 56, 0.52)",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
