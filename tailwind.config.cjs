/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      darkText: "var(--color-text-dark)",
      lightText: "var(--color-text-light)",
     darkTextInput: "var(--color-text-dark)",
    },
    backgroundColor: {
      bgLight: "var(--color-bg-light)",
      bgDark: 'var(--color-bg-dark)',
      bgDarkHeader: 'var(--color-element-dark)'
    },
    extend: {
      boxShadow: {
        '3xl': '0px 1px 5px 0px hsl(0, 0%, 52%)',
        '2xl': '0px 1px 5px 0px hsl(207, 26%, 17%)',
        'xl': '-1px 0px 5px 0px rgba(0,0,0,0.75)'
      }
    },
  },
  plugins: [],
}
