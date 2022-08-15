import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const MosaicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 5rem;
  `}
`

export type HeroImageCardProps = {
  backgroundUrl: string
}

export const HeroImageCard = styled.div<HeroImageCardProps>`
  ${({ backgroundUrl, theme }) => css`
    border-radius: ${theme.border.radius};
    padding: 4rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 40rem;
    width: 100%;
    background-image: url(${backgroundUrl});
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  `}
`

export const Subheading = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.black};
  `}
`

export const HeroTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 2.8rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const SideCardsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem;
`

export const SideCardWrapper = styled.div`
  display: flex;
  grid-gap: 2rem;
`
export type ImageContainerProps = {
  backgroundUrl: string
}
export const ImageContainer = styled.div<ImageContainerProps>`
  ${({ backgroundUrl, theme }) => css`
    border-radius: ${theme.border.radius};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 100%;
    width: 12rem;
    background-image: url(${backgroundUrl});
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    ${media.greaterThan('medium')`
      width: 22rem;
    `}
  `}
`

export const ContentSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `}
`
