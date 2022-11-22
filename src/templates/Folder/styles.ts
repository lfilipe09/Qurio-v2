import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Header = styled.header`
  ${({ theme }) => css`
    background: ${theme.gradient.blackMedium};
  `}
`

export const Link = styled.a``

export const TitleRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    > button {
      position: absolute;
      left: 0;
    }
    svg {
      color: ${theme.colors.white};
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 600;
    margin: 0 auto;
  `}
`

export const FolderDescription = styled.div`
  ${({ theme }) => css`
    display: flex;
    font-size: ${theme.font.sizes.small};
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    text-transform: uppercase;
    letter-spacing: 0.15em;
    span {
      letter-spacing: 0;
      text-transform: none;
      color: #b6b3b3;
    }
  `}
`

export const SubmenuWrapper = styled.nav`
  display: flex;
  grid-gap: 11rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`

export type SubmenuProps = {
  isHighlighted: boolean
}

const subMenuModifiers = {
  active: (theme: DefaultTheme) => css`
    border-bottom: 2px solid ${theme.colors.primary};
  `
}

export const Submenu = styled.button<SubmenuProps>`
  ${({ theme, isHighlighted }) => css`
    border: 0;
    background: transparent;
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    cursor: pointer;
    ${isHighlighted && subMenuModifiers.active(theme)}
  `}
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 3rem;
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

export const FolderHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
`
