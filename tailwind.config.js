/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackish: "#343538",
        greenish: "#3D7E47",
        lightGreenish: "#7FE18E",
        greyish: "rgba(52, 53, 56, 0.52)",
        fruits: "rgba(109, 131, 73, 0.42)",
        spices: "rgba(231, 230, 227, 0.42)",
        tubers: "rgba(242, 196, 135, 0.42)",
        poultry: "rgba(123, 82, 82, 0.42)",
        grains: "rgba(244, 216, 102, 0.42)",
        meat: "rgba(157, 47, 50, 0.42)",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
