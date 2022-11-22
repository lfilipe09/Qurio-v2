import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    height: 100vh;
    background: ${theme.gradient.blackMedium};
    position: relative;
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    ${media.between('medium', 'large')`
      display: grid;
      grid-template-columns: 32rem 505px;
      gap: calc(${theme.grid.gutter} * 2)
    `}
    ${media.greaterThan('large')`
      display: grid;
      grid-template-columns: 32rem 1fr;
      gap: calc(${theme.grid.gutter} * 2)
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.gradient.whiteBackground};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    max-width: 850px;
    padding: 5rem;
    padding-right: 8rem;
  `}
`

export const ProfileMainWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const Image = styled.img`
  position: absolute;
  height: 100%;
  right: 0;
  bottom: 0;
`
