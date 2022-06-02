module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeNeutral: {
          100: "#FFFFFF",
          200: "#F7F8FC",
          300: "#F1F1F1",
          400: "#F1F3F5",
          500: "#E0E0E0",
          600:"#757575",
          700: "#495057",
          800: "#424242",
        },
        primary: {
          100: "#4263EB",
          200: "#244677",
        },
        delete: "#FC3333",
        success: "#9DF28F",
      },
    },
  },
  plugins: [],
}
