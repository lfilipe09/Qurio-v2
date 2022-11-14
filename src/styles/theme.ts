export default {
  grid: {
    container: '110rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    familyPrincipal:
      "Neue Power, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      xxxlarge: '4.0rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#e9e955',
    secondary: '#B987FF',
    mainBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#FFFFFF',
    black: '#030517',
    softGray: '#F9F9F9',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    red: '#FF6347',
    green: '#e9e955'
  },
  gradient: {
    blackLarge: 'linear-gradient(259.24deg, #000000 21.75%, #5B5757 112.83%)',
    blackMedium: 'linear-gradient(252.47deg, #000000 6.48%, #5B5757 98.22%)'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
