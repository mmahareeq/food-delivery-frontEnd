/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'red': '#b91c1c',
      'yallow': '#F9A826',
      'gray': '#ced4da',
      'white': '#f8fafc'
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
