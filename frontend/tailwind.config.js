const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000',
      },
      fontFamily: {
        roboto: [ "Roboto", "serif"],
        openSans: ["Open Sans", "serif"],
      },
      container: {
        center: true,
        screens:{
          xl:"1170px",

        }
      },
    },
  },
  plugins: [],
});

