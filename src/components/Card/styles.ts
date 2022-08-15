import styled, { css } from 'styled-components'

import * as RibbonStyles from '../Ribbon/styles'

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 25rem;
  margin: 1rem 0;
  ${RibbonStyles.Wrapper} {
    bottom: 0;
    right: unset;
    top: unset;
    &::before {
      display: none;
    }
  }
`

export type ImageBoxProps = {
  backgroundUrl: string
  isExternalCard: boolean
  isSlug: boolean
}

export const ImageBox = styled.div<ImageBoxProps>`
  ${({ backgroundUrl, theme, isExternalCard, isSlug }) => css`
    min-height: 14rem;
    ${isSlug && 'cursor: pointer;'}
    position: relative;
    border-radius: ${theme.border.radius};
    ${isExternalCard && 'border-bottom-left-radius: 0rem;'}
    ${isExternalCard && 'border-bottom-right-radius: 0rem;'}
    ${!isExternalCard && 'box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);'}
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
    width: 100%;
    background-image: url(${backgroundUrl});
  `}
`
export const InfoCard = styled.div`
  ${({ theme }) => css`
    background-color: #f5f5f5;
    border-bottom-left-radius: ${theme.border.radius};
    border-bottom-right-radius: ${theme.border.radius};
    padding: 1rem;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 1rem;
  `}
`

export const Format = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    letter-spacing: 0.2rem;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    margin: ${theme.spacings.xsmall};
  `}
`
export const Info = styled.a`
  max-width: calc(100% - 2.5rem);
  text-decoration: none;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const TitleExternal = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.black};
  `}
`

export const Image = styled.img`
  width: 100%;
`
