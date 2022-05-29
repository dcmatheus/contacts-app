module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "#FFFFFF",
          200: "#F7F8FC",
          300: "#F1F1F1",
          300: "#F1F3F5",
          400: "#E0E0E0",
          500:"#757575",
          600: "#495057",
          700: "#424242",
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
