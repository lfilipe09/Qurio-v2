import styled, { css } from 'styled-components'

import * as RibbonStyles from '../Ribbon/styles'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 20rem;
    background-color: ${theme.colors.white};
    ${RibbonStyles.Wrapper} {
      bottom: 0;
      right: unset;
      top: unset;
      &::before {
        display: none;
      }
    }
  `}
`

export type ImageBoxProps = {
  backgroundUrl: string
}

export const ImageBox = styled.div<ImageBoxProps>`
  ${({ backgroundUrl }) => css`
    min-height: 14rem;
    cursor: pointer;
    position: relative;
    border-radius: 2rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
    width: 100%;
    background-image: url(${backgroundUrl});
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

export const Image = styled.img`
  width: 100%;
`
