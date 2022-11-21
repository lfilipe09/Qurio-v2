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
    `}
    display: flex;
    align-items: center;
    position: relative;
  `}
`

export const Image = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  right: 0;
  bottom: 0;
`

export const FormWrapper = styled.div`
  max-width: 40rem;
  margin: 2rem 0;
`
