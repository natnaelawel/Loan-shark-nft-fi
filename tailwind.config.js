const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif', ...defaultTheme.fontFamily.sans],
        Roboto: ['Roboto', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#7e5bd6',
        secondary: '#cb2b83',
        navy: '#16152d',
        navy_light: '#646d79',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
