/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../images/ocean.jpg')",
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      underline: ['hover', 'active'],
    },
  },
  plugins: [],
}
