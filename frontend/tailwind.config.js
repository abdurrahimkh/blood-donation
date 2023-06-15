const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
    fontFamily:{
      'brooklyn': ['Brooklyn', 'sans-serif']
    },  
    colors: {
      'primary':'#4382FF',
      'secondary' : '#FB000A'
    },
    },
  },
  plugins: [],
});

