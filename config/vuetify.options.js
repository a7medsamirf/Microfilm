import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('MedHouseDarkMode') || false
}

const palette = {
  smart: {
    primary: colors.cyan.base, // primary main
    primarylight: colors.cyan.lighten4, // primary light
    primarydark: colors.cyan.darken3, // primary dark
    secondary: colors.amber.darken2, // secondary main
    secondarylight: colors.amber.lighten4, // secondary light
    secondarydark: colors.amber.darken4, // secondary dark
    anchor: colors.blue.base // link
  }
}

export const theme = {
  ...palette.smart
}

export default {
  rtl: true,
  theme: {
    dark: 'true',
    themes: {
      dark: {
        background: '#fff',
        bg: "#292e3a", // body bg
        surface: "#1b182b", // card and all box
        footercolor: '#1b182b',
        bggrey: '#001e26',
        primary: '#07AEAF',
        secondary: '#ff8e28',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        default: '#3271E6',
      },
      light: {
        background: '#fff',
        bg: "#ffffff",
        surface: "#ffffff",
        footercolor: '#fff',
        bggrey: '#faf7f2',
        primary: '#07AEAF',
        secondary: '#ff8e28',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        default: '#3271E6',
      },

    },
    options: {
      customProperties: false
    }
  }
}
