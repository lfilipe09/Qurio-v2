import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
    z-index: ${theme.layers.menu};
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    grid-gap: 2rem;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const LogoWrapper = styled.div``

export type IconWrapperProps = { color?: 'white' | 'black' }

export const IconWrapper = styled.div<IconWrapperProps>`
  ${({ color = 'black' }) => css`
    svg {
      color: ${color};
    }
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
      padding: 20rem;
		`}
  `}
`
export type MenuLinkProps = { color?: 'white' | 'black' }

export const MenuLink = styled.a<MenuLinkProps>`
  ${({ theme, color = 'black' }) => css`
    display: none;
    position: relative;
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    font-weight: ${theme.font.bold};
    margin-left: ${theme.spacings.small};
    text-decoration: none;
    text-align: center;
    ${media.greaterThan('medium')`display: block;`}
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.2rem;
        background-color: ${theme.colors.primary};

        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const MenuLinkDisabled = styled.a`
  ${({ theme }) => css`
    position: relative;
    color:${theme.colors.black}
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    cursor: not-allowed;
    opacity: 50%;
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

//position absolute para ficar em cima de tudo
//os tops, bottom, left right e height 100vh são para garantir
//que ele terá aquela altura toda e preencherá tudo
//overflow tá hidden para evitar qualquer scroll no menu
// ele usa o > antes do svg pq fala "quero somente o primeiro filho e não todos os svg"
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
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }
    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`
export const MenuWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    div {
      display: flex;
      align-items: center;
      button {
        display: none;
        &:first-child {
          margin-right: 2rem;
          display: block;
        }
        ${media.greaterThan('medium')`display: block;`}
        padding: 0;
        width: unset;
        margin-right: 10px;
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.bold};
      }
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};
    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`

export const Logo = styled.img`
  width: 70px;
  margin-right: 2rem;
`

export const Image = styled.img`
  width: 6rem;
  height: 6rem;
`
export const Title = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    width: 100%;
    ${media.greaterThan('medium')`
        font-size: 8rem;
        line-height: 7rem;
        margin-bottom: 4rem;
    `}
    ${media.lessThan('medium')`
        margin-bottom: 2rem;
        margin-left: 1rem ;
        font-size: ${theme.font.sizes.xxxlarge};
        line-height: 4rem;
      `}
  `}
`

export const Text = styled.div`
  ${media.lessThan('medium')`
    margin-left: 1rem;
  `}
  width: 100%;
  p {
    max-width: 85rem;
  }
`

export const Login = styled.div`
  display: block;
  ${media.lessThan('medium')`
    display: none !important;
  `}
`

export const MenuIcon = styled.div`
  display: none !important;
  ${media.lessThan('medium')`
    display: block !important;
  `}
`

export const Username = styled.a`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
    text-decoration: none;
    color: ${theme.colors.black};
  `}
`
