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

export const MainWrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.gradient.blackMedium};
    padding-bottom: 20rem;
  `}
`

export const HeroTextImage = styled.div`
  display: flex;
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  ::after {
    content: '';
    height: 30%;
    position: absolute;
    background: radial-gradient(
        157.47% 125.93% at 49.9% 59.29%,
        rgba(221, 221, 221, 0.24) 0%,
        #b7b7b7 80.17%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    border-radius: 43px;
    width: 90%;
    bottom: 0px;
  }
  ${media.greaterThan('medium')`
      ::after {
        content: '';
        height: 115%;
        position: absolute;
        width: 495px;
        right: -64px;
        top: -176px;
      }
  `}
`

export const HeroTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 40px;
    font-family: ${theme.font.familyPrincipal};
    color: ${theme.colors.white};
    span {
      color: ${theme.colors.primary};
    }
    width: 100%;
    ${media.greaterThan('medium')`
      font-size: 65px;
    `}
  `}
`

export const Image = styled.img`
  z-index: 1;
  width: 100%;
  ${media.greaterThan('medium')`
      width: 560px;
  `}
`

export const HeroBannerWrapper = styled.div`
  background: #f5f5f5;
`
export const PopularWrapper = styled.div`
  background-color: #f5f5f5;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const HighlightWrapper = styled.div`
  grid-gap: 2rem;
  display: flex;
  flex-direction: column;
  ${media.lessThan('medium')`
      grid-gap: 2rem;
    `}
`

export const LastPacksWrapper = styled.div`
  background-color: #f5f5f5;
  padding-bottom: 10rem;
  ${media.lessThan('medium')`
      grid-gap: 2rem;
    `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.black};
    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.small} * 2);
    `}
  `}
`
