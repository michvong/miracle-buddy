const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      'animation': {
        'text':'text 5s ease infinite',
      },
      
      'keyframes': {
          'text': {
              '0%, 100%': {
                'background-size':'200% 200%',
                  'background-position': 'left center'
              },
              '50%': {
                'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
      },

      backgroundImage: {
        'cityscape': "url('images/cityscape.png')",
        'cityscape1': "url('images/cityscape1.png')",
        'cityscape2': "url('images/cityscape2.png')",
      },

      padding: {
        'p-80': '80%',
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
