import styled, { css } from 'styled-components'

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 400;
  `}
`

export const Amount = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: 300;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  `}
`

export const Date = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: #767676;
  `}
`

export const Wrapper = styled.main`
  ${({ theme }) => css`
    a {
      text-decoration: none;
      color: ${theme.colors.black};
    }
  `}
`
