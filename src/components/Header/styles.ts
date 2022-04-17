import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    `}
`

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    h2 {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.light};
      color: ${theme.colors.white};
      background-color: ${theme.colors.secondary};
      width: fit-content;
      padding: 5px 10px 5px 10px;
      border-radius: ${theme.border.radius};
    }

    h1 {
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.huge};
        margin: 1rem auto;
        line-height: 7rem;
      `}
      ${media.lessThan('medium')`
        margin-top: 2rem;
        font-size: ${theme.font.sizes.xxxlarge};
      `}
    }

    p {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.light};
      color: ${theme.colors.white};
    }

    span {
      display: flex;
      margin-top: 2rem;
      grid-gap: 1rem;
    }
  `}
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: end;
`

export const Icon = styled.div`
  width: 20px;
`
export const Image = styled.img`
  width: 40rem;
  ${media.lessThan('medium')`
    margin: 0 auto;
    margin-top: 2rem;
    width: 30rem;
  `}
`
