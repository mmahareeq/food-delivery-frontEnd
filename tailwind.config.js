/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'red': '#b91c1c',
      'softorange': "#e1b168",
      'darkgray': "#292e36",
      'gray': "#555555",
      'darkblue': "#343942",
      'lightpink': "#fff8f5",
      'white': "#ffffff",
      'black': '#000',
      'lightgray': '#C4C4C4',
    },
    screens: {
      'md': {'min': '776px'},
      'sm': {'min':'664px'},
      'xs': {'min':'360px'},
      'lg': {'min':'800px'}
    }
  },
  plugins: [],
}
