/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'manmade1': '#416C00',
        'manmade2': '#FFCDB6',
        'manmade3': '#EC692C',
        'manmade4': '#FFE3D6',
        'manmade5': '#1C1C1C',
        'manmade6': '#2B2A2A',
        'manmade7': '#6F4B3A'
      },
    },
  },
  variants: {
    extend: {
      img: ['dark'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
