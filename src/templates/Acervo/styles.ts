import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const MainWrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.gradient.blackMedium};
    padding-bottom: 10rem;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 40px;
    font-family: ${theme.font.familyPrincipal};
    color: ${theme.colors.white};
    margin-top: 3rem;
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

export const CardsWrapper = styled.div`
  margin-top: -6rem;
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  `}
`
