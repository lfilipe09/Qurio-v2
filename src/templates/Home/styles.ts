import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.div`
  ${media.greaterThan('medium')`
    margin: 5rem 0;
  `}
  ${media.lessThan('medium')`
    margin: 4rem 0 2rem 1.3rem;
  `}
`

export const HeroBannerWrapper = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(transparent 40%, #f5f5f5 40%) no-repeat;
    ${media.lessThan('medium')`
      background: linear-gradient(transparent 40%, ${theme.colors.black} 40%) no-repeat;
    `}
  `}
`

export const PopularWrapper = styled.div`
  ${({ theme }) => css`
    background-color: #f5f5f5;
    ${media.lessThan('medium')`
    background-color: ${theme.colors.black}
    `}
  `}
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
