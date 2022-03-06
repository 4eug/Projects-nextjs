const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxxsm: "200px",
      xxsm: "340px",
      xsm: "480px",
      ...screens,
    },

    extend: {
      colors: {
        "ijikod-dark": "#2A2E43",
        "ijikod-gray-dark": "#0000000F",
        "ijikod-gray": "#7A7A7A",
        "ijikod-dark-blue": "#2A2E43",
        "ijikod-red": "#F40E41",
        "ijikod-blue-deep": "#1438C9",
        "ijikod-form-color": "#414557",
        "ijikod-blue-dark": "#011F3D",
        "ijikod-blue-light": "#1AA1DC",
        "ijikod-wine": "#8F1742",
        "ijikod-wine-dark-primary": "#62112E",
        "ijikod-wine-dark": "#7D0032",
      },

      fontSize: {
        "ijikod-xxxlg": "72px",
        "ijikod-xxlg": "62px",
        "ijikod-xlg": "52px",
        "ijikod-lg": "44px",

        "ijikod-xxmd": "38px",
        "ijikod-xmd": "32px",
        "ijikod-md": "28px",

        "ijikod-sm-md": "24px",

        "ijikod-sm": "16px",
        "ijikod-xsm": "14px",
        "ijikod-xxsm": "10px",
      },

      minHeight: (theme) => ({
        "h-min-screen": "100vh",
        "ijikod-px-450": "450px",
        ...theme("spacing"),
      }),

      minWidth: (theme) => ({
        ...theme("spacing"),
      }),

      height: {
        "ijikod-h-nav": "15%",
        "ijikod-h-hero": "85%",
        "5/2": "40%",
        "ijikod-px-80": "80px",
        "ijikod-px-100": "100px",
        "ijikod-px-120": "120px",
        "ijikod-px-150": "150px",
        "ijikod-px-40": "40px",
        "ijikod-px-50": "50px",
        "ijikod-px-450": "450px",
      },

      inset: {
        "ijikod-hero-offset-t": "15%",
      },

      backgroundImage: {
        "ijikod-hero-gradient":
          "linear-gradient(0deg, #8F1742 10.84%, #2A2E43 93.27%)",
      },

      width: {
        "ijikod-px-270": "270px",
        "ijikod-px-400": "400px",
        "ijikod-px-124": "124px",
      },

      borderRadius: {
        "ijikod-px-20": "20px",
      },

      fontFamily: {
        "ijikod-open-sans": "Open Sans",
      },
    },
  },
  plugins: [],
};
