import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    ${media.greaterThan('medium')`
      background: ${theme.colors.white};
      padding: ${theme.spacings.medium};
      color: ${theme.colors.black};
    `}
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.black};
      margin: ${theme.spacings.xsmall} 0;
      ${HeadingStyles.wrapperModifiers.lineLeft(theme, 'primary')};
      ${media.greaterThan('medium')`
        color: ${theme.colors.black};
      `}
    }
    p {
      margin-bottom: ${theme.spacings.xsmall};
    }
    a {
      color: ${theme.colors.white};
      border-radius: ${theme.border.radius};
      padding: ${theme.spacings.xxsmall} 1.5rem;
      background-color: ${theme.colors.black};
    }
    /* img {
      max-width: min(70rem, 100%);
      margin-bottom: ${theme.spacings.xsmall};
    } */
    ul,
    ol {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }
    hr {
      margin: ${theme.spacings.small} 0;
    }
  `}
`

export const Image = styled.img`
  max-width: none;
  width: 100%;
`

export const QuizWrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
`
