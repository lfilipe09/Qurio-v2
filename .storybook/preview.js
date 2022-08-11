import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'qurio-light',
    values: [
      {
        name: 'qurio-light',
        value: theme.colors.white
      },
      {
        name: 'qurio-dark',
        value: theme.colors.mainBg
      },
      {
        name: 'qurio-primary',
        value: theme.colors.primary
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
