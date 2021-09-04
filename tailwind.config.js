// Settings
const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    extend: {
      fontFamily: {
        'mono': ["'Space Mono'", 'monospace']
      },
      colors: {
        'blue': 'hsl(212, 100%, 50%)',
        'lightBlue': 'hsl(212, 100%, 69%)',
        'gray': 'hsl(217, 20%, 51%)',
        'blueGray': 'hsl(217, 35%, 45%)',
        'darkBlueGray': 'hsl(222, 41%, 20%)',
        'darkGray': '#1E2A47',
        'darkGrayTwo': '#141D2F',
        'lightGray': 'hsl(227, 100%, 98%)',
        'offWhite': 'hsl(0, 0%, 100%)',
        'lightBlack': 'hsl(220, 40%, 13%)',
        'red': 'hsl(0, 91%, 62%)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
