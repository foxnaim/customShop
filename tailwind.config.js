/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},

    img:{
      wam:["clamp: 30px, 10vw, 30px"],
      ham:["clamp: 30px, 10vw, 30px"],
    },
  },
  plugins: [],
}