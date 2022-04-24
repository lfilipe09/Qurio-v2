import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export type WrapperProps = {
  backgroundUrl: string
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ backgroundUrl }) => css`
    background-image: url(${backgroundUrl});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  `}
`

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};

    h1 {
      font-weight: ${theme.font.bold};
      ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.huge};
        margin: 1rem auto;
        line-height: 7rem;
      `}
      ${media.lessThan('medium')`
        margin-top: 2rem;
        font-size: ${theme.font.sizes.xxxlarge};
        line-height: 4rem;
      `}
    }

    p {
      padding-top: 10px;
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.light};
      ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
  `}
    }
    ${media.lessThan('medium')`
    padding-left: 2rem;
  `}
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

export const TimeContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    grid-gap: 1rem;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    max-width: 175px;
    padding: 10px;
    border-top-left-radius: ${theme.border.radius};
    border-top-right-radius: ${theme.border.radius};
  `}
`

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: ${theme.spacings.large} ${theme.spacings.large} 0
      ${theme.spacings.large};
    ${media.lessThan('medium')`
    padding: ${theme.spacings.large} ${theme.spacings.large} 0
      0 ;
  `}
  `}
`

export const ArrowButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top: 0;
    border-bottom: 9px solid ${theme.colors.black};
    background-color: transparent;
  `}
`

export type ArrowWrapperProps = {
  isLeft?: boolean
}

export const ArrowWrapper = styled.div<ArrowWrapperProps>`
  ${({ theme, isLeft = false }) => css`
    cursor: pointer;
    position: absolute;
    display: flex;
    transform: ${isLeft ? 'rotate(270deg)' : 'rotate(90deg)'};
    right: ${isLeft ? '85px' : '35px'};
    bottom: 30px;
    background-color: ${theme.colors.white};
    padding: 14px 14px 18px 14px;
    border-radius: 100%;
    ${media.lessThan('medium')`
    bottom: 5px;
    right: ${isLeft ? '60px' : '13px'};
  `}
  `}
`
