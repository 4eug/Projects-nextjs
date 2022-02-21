const {
  screens
} = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxxsm': '200px',
      'xxsm': '340px',
      'xsm': '480px',
      ...screens
    },

    extend: {

      colors: {
        'ijikod-dark': '#2A2E43',
        'ijikod-red': '#F40E41',
        'ijikod-wine': '##8F1742',
      },

      fontSize: {
        'ijikod-xlg': '72px',
        'ijikod-sm': '16px',
        'ijikod-xsm': '14px',
      },


      height: {
        'ijikod-px-80': '80px',
        'ijikod-px-40': '40px',
        'ijikod-px-50': '50px',
      },

      backgroundImage: {
        'ijikod-hero-gradient': "linear-gradient(0deg, #8F1742 10.84%, #2A2E43 93.27%)",
      },

      width: {
        'ijikod-px-270': '270px',
        'ijikod-px-124': '124px',
      },

      borderRadius: {
        'ijikod-px-20': '20px',
      },

      fontFamily: {
        'ijikod-open-sans': 'Open Sans'
      }
    },
  },
  plugins: [],
}