import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    /* poppins-300 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/poppins-v15-latin-300.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/poppins-v15-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
  }
  /* poppins-regular - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/poppins-v15-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/poppins-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
  }
  /* poppins-600 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/poppins-v15-latin-600.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/poppins-v15-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
  }
  /* neuepowertrial - normal */
  @font-face {
    font-family: 'Neue Power';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/NeuePower-Heavy.otf');
    src: local(''),
        url('/fonts/NeuePower-Heavy.otf') format('truetype'); /* Super Modern Browsers */
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after{
      box-sizing: inherit;
    }
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}

`

export default GlobalStyles
