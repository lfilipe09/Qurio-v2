import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    text-decoration: none;
    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.familyPrincipal};
    font-size: 65px;
    color: ${theme.colors.white};
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    a {
      color: ${theme.colors.primary};
    }
  `}
`
