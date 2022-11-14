import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const MainWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.gradient.blackLarge};
    padding-bottom: 10rem;
  `}
`

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 10rem 0;
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
  `}
`

export const HeaderContent = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  grid-gap: 4rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 40px;
    font-family: ${theme.font.familyPrincipal};
    color: ${theme.colors.white};
    font-weight: 400;
    ${media.greaterThan('medium')`
      font-size: 65px;
    `};
  `}
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: 20px;
    color: #ffffff;
    max-width: 42rem;
    font-weight: 300;
    color: ${theme.colors.white};
  `}
`

export const Image = styled.img`
  width: 100%;
  position: absolute;
  top: -132px;
  right: -15px;
  ${media.greaterThan('medium')`
    right: 0;
    top: -70px;
    width: 600px;
  `};
`

export const SideTextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  grid-gap: 7rem;
  ${media.greaterThan('medium')`
    flex-direction: row;
  `};
`

export const SideTextTitle = styled.h4`
  ${({ theme }) => css`
    font-family: ${theme.font.familyPrincipal};
    font-size: 40px;
    color: ${theme.colors.white};
    ${media.greaterThan('medium')`
      font-size: 45px;
    `};
  `}
`

export const SideTextParagraph = styled.p`
  ${({ theme }) => css`
    font-size: 20px;
    font-weight: 300;
    color: ${theme.colors.white};
  `}
`

export const Quote = styled.section`
  ${({ theme }) => css`
    font-family: ${theme.font.familyPrincipal};
    color: ${theme.colors.white};
    text-align: center;
    padding: 3rem 0;
    margin-top: 2rem;
    border-top: 1px solid ${theme.colors.white};
    font-size: 25px;
    ${media.greaterThan('medium')`
      padding: 10rem;
      margin-top: 0;
      border-top: 0;
      font-size: 45px;
    `};
  `}
`

export const CardsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: -65px;
  grid-gap: 3rem;
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: 0px 4px 41px rgba(0, 0, 0, 0.15);
    border-radius: ${theme.border.radius};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 2rem;
    max-width: 28rem;
    padding: 4rem 0;
    width: 100%;
    margin: 0 auto;
    ${media.greaterThan('medium')`
      max-width: unset;
      padding: 2rem;
      margin: 0;
    `}
  `}
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 40px;
  }
`

export const CardText = styled.p`
  text-align: center;
`

export const FinalBenefitsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10rem 0;
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`

export const FinalBenefitsContent = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 4rem;
`

export const FinalBenefitsParagraph = styled.p`
  ${({ theme }) => css`
    font-size: 20px;
    line-height: 24.2px;
    font-weight: 300;
    color: ${theme.colors.black};
  `}
`

export const FinalBenefitsTitle = styled.h4`
  ${({ theme }) => css`
    font-size: 35px;
    font-weight: 300;
    font-family: ${theme.font.familyPrincipal};
    color: ${theme.colors.black};
  `}
`

export const ImageBenefits = styled.img`
  width: 100%;
  ${media.greaterThan('medium')`
    width: 688px;
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
