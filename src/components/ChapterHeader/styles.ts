import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${media.greaterThan('medium')`
    display: grid;        
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'ImageContainer InfoContainer';
    grid-gap: 2rem;
    align-items: center;
    `};
  ${media.lessThan('medium')`
    display: grid;
    grid-template-areas: 'InfoContainer InfoContainer' 'ImageContainer ImageContainer';
    grid-template-columns: 1fr;
    `};
`

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    grid-area: InfoContainer;
    h2 {
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xxxlarge};
        /* margin: 1rem auto; */
        /* line-height: 7rem; */
      `}
      ${media.lessThan('medium')`
        margin-top: 2rem;
        font-size: ${theme.font.sizes.xxlarge};
      `}
    }

    h3 {
      color: ${theme.colors.white};
      font-weight: ${theme.font.normal};
      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.large};
        margin: 1rem auto;
      `}
      ${media.lessThan('medium')`
        margin-top: 2rem;
        font-size: ${theme.font.sizes.medium};
      `}
    }

    p {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.light};
      color: ${theme.colors.white};
    }
  `}
`

export const ImageContainer = styled.div`
  grid-area: ImageContainer;
  display: flex;
  justify-content: end;
`

export const Icon = styled.div`
  width: 20px;
`
export const Image = styled.img`
  width: 25rem;
  margin: 0 auto;
  ${media.lessThan('medium')`
    margin-top: 2rem;
    width: 30rem;
  `}
`
