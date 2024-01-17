/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f38e82',
        grad1: '#fbdb89',
        grad2: '#f48982',
        'grey-light-1': '#f9f5f3',
        'grey-light-2': '#f2efee',
        'grey-light-3': '#d3c7c3',
        'grey-dark-1': '#615551',
        'grey-dark-2': '#918581',
        'header-bg': 'rgb(41, 27, 21)',
      },
    },
  },
  plugins: [],
};
