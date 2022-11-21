import styled, { css } from 'styled-components'

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

export const TextFieldSideBySide = styled.div`
  display: flex;
  grid-gap: 2rem;
`
