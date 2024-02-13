/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#09090A",
        secondary: "#FB2558",
        main: "#F4F4F5"
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        denver: ['Denver Serial Black', 'sans-serif']
      },
      fontSize: {
        'custom-title-big': '140px',
        'custom-title-mid': '90px',
        'custom-title': '35px',
        'custom-title-small': '25px',
        'custom-body-big': '22px',
        'custom-body': '16px',
        'custom-body-small': '12px'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: []
}

