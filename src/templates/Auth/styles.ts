import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Logo = styled.img`
  width: 11rem;
  margin-bottom: 5rem;
  ${media.lessThan('medium')`
      margin-top: 4rem;
      margin-bottom: 1rem;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    display:flex ;
    align-items: center;
    justify-content: center
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    background: ${theme.gradient.blackMedium};
    ${media.lessThan('medium')`
      background: ${theme.gradient.blackMobileGradient};
      flex-direction: column;
    `}
    display: flex;
    position: relative;
  `}
`

export const FormWrapper = styled.div`
  max-width: 47rem;
  margin: 2rem 0;
`

export const AuthContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  ${media.greaterThan('medium')`
    height: 100vh;
  `}
`

export const Image = styled.img`
  margin-top: -6rem;
  ${media.greaterThan('medium')`
    position: absolute;
    right: 0;
    bottom: 0;
    margin-top: 0;
  `}
`
