const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      backgroundImage: {
        'cityscape': "url('images/cityscape.png')",
      },

      fontSize: {
        '3xl': '3rem',
        // '4xl': '10rem',
      },
  
      fontFamily: {
        
      },
  
      blue: {
        100: '#E6F0FD',
        200: '#CCE2FC',
        300: '#99C5FA',
        400: '#66A9F7',
        500: '#338CF5',
        600: '#0070F4',
        700: '#0064DA',
        800: '#0059C2',
        900: '#004391',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
