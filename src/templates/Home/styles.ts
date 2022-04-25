import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 2rem;
    height: 100vh;
  `}

  /* height: 100%; */
  ${media.lessThan('medium')`
    display: block;
    padding: 1rem;
  `}
`
export const HeaderWrapper = styled.div`
  ${media.greaterThan('medium')`
    width: 100%;
    padding: 2rem;
  `}
  ${media.lessThan('medium')`
    height: 50rem;
    margin-bottom: 1rem;
  `}
`

export const BannerSliderWrapper = styled.div`
  ${media.greaterThan('medium')`
  display: flex;
  align-items: end;
  `}
`
export const MenuBannerWrapper = styled.div`
  ${media.greaterThan('medium')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-right: 2rem;
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow-y: scroll;
    ${media.greaterThan('medium')`
      overflow: hidden;
    `}
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    visibility: ${isOpen ? 'visible' : 'hidden'};
  `}
`

export const WrapperMenuFull = styled.div`
  max-height: 100vh;
  ${media.greaterThan('medium')`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 6rem;
  margin-right: 6rem;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    padding: 9rem;
    ${media.lessThan('medium')`
  padding: 2rem;
  `}
    margin-bottom: 5rem;
    overflow-y: scroll;
    /* width */
    ::-webkit-scrollbar {
      width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${theme.colors.lightGray};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #000;
      border-radius: 20px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `}
`

export const TextColumnWrapper = styled.div`
  ${media.lessThan('medium')`
  padding: 4rem;
  `}
`

export const MenuFullClose = styled.div`
  position: relative;
  margin-bottom: 10rem;
  ${media.lessThan('medium')`
    background-color: white;
  `}
`

export const Icon = styled.button`
  position: absolute;
  ${media.lessThan('medium')`
    position: fixed;
  `}
  cursor: pointer;
  border: 0;
  background-color: transparent;
  right: 0;
  width: 40px;
`
