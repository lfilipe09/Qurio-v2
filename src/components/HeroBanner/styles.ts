import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from '../Ribbon/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.softGray};
    border-radius: 10px;
    ${media.lessThan('large')`
    ${RibbonStyles.Wrapper} {
      bottom: 0;
      right: unset;
      top: unset;
      &::before {
        display: none;
      }
    }
  `}
  `}
`

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  ${media.lessThan('large')`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
      padding: ${theme.spacings.large};
      position: absolute;
      bottom: 0;
      left: 0;
    `}
  `}
`

export const Heading = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.black};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      line-height: 5rem;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    ${media.greaterThan('medium')`
      font-size: 5rem;
      line-height: 5rem;
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};
    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
export const Image = styled.img`
  height: 23rem;
  ${media.greaterThan('medium')`
    height: 40rem;
  `}
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 36rem;
  justify-content: space-between;
  padding-top: 3rem;
  ${media.greaterThan('medium')`
    display: grid;
    height: unset;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding-top: 0rem;
  `}
`

export const InfoWrapper = styled.div`
  padding-right: 4rem;
  ${media.lessThan('large')`
    padding-right: 0rem;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    grid-gap: 0.5rem;
  `}
`

export const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin: 2.5rem 0;
`

export const ContentPostWrapper = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.black};
    &:hover {
      text-decoration: underline;
    }
  `}
`

export const Format = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    text-transform: uppercase;
  `}
`

export const PostTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`
export const TimeContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    grid-gap: 1rem;
    color: ${theme.colors.black};
    max-width: 175px;
    padding: 10px;
    border-top-left-radius: ${theme.border.radius};
    border-top-right-radius: ${theme.border.radius};
    p {
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const Icon = styled.div`
  width: 20px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    padding: 0;
  }
`
