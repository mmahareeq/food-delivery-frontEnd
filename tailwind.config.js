/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'red': '#b91c1c',
      'softorange': "#e1b168",
      'darkgray': "#292e36",
    'gray': "#555555",
    'darkblue': "#343942",
    'lightpink': "#fff8f5",
    'white': "#ffffff",
    'black': '#000'
    },
    screens: {
      'md': '776px',
      'sm':'664px',
      'xs':'360px',
      'lg': '800px'
    }
  },
  plugins: [],
}
