import styled, { css } from 'styled-components'

import * as HeadingStyles from '../../components/Heading/styles'
import media from 'styled-media-query'
import { darken } from 'polished'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      text-transform: uppercase;
      color: ${theme.colors.white};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
    ${media.greaterThan('medium')`
    grid-template-columns: repeat(4, 1fr);
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${darken(0.2, theme.colors.white)};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.medium};
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`
export const Logo = styled.img`
  width: 70px;
  margin-right: 2rem;
`

export const LogosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
`
