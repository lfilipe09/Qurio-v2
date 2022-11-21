import styled, { css } from 'styled-components'
import { WishlistModalProps } from '.'

export type WrapperProps = Pick<WishlistModalProps, 'isOpen'>

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    clip: rect(auto, 50rem, 0, auto);
    transition: clip 0.75s ease-out, margin 0.25s ease;
    margin: -20px 0;
    background-color: #fbfbfb;
    padding: 0.5rem 2rem;
    box-shadow: -2px 3px 11px 0px rgba(226, 226, 211, 0.5);
    display: flex;
    flex-direction: column;
    grid-gap: 0.5rem;
    z-index: ${theme.layers.base};
    ${isOpen &&
    `
      margin: 0;
      opacity: 1;
      clip: rect(auto,100rem,50rem,auto);
    `}
  `}
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 2rem;
  }
  button {
    padding-right: 0;
  }
`

export const Title = styled.h4``

export const SearchBar = styled.div`
  ${({ theme }) => css`
    input {
      color: ${theme.colors.black};
      font-size: 1.4rem;
    }
  `}
`

export const Body = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-height: 23rem;
    overflow: auto;
    padding-right: 0.5rem;
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
      background: ${theme.colors.gray};
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.gray};
    }
  `}
`

export const Subtitle = styled.p``

export const LineItem = styled.button`
  ${({ theme }) => css`
    display: grid;
    border: 0;
    background: transparent;
    font-family: ${theme.font.family};
    grid-template-columns: 1fr 3.5fr 31px;
    grid-gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 1rem;
    border-radius: ${theme.border.radius};
    cursor: pointer;
    :hover {
      > div {
        display: block;
      }
      background-color: rgba(241, 241, 241, 1);
    }
  `}
`

export const Button = styled.div`
  display: none;
  ${({ theme }) => css`
    > svg {
      width: 31px;
      padding: 8px;
      border-radius: 25px;
      background-color: ${theme.colors.primary};
    }
  `}
`

export type CloseBGProps = Pick<WishlistModalProps, 'isOpen'>

export const CloseBG = styled.button<CloseBGProps>`
  ${({ isOpen }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    background: transparent;
    border: 0;
  `}
`
export const ButtonCreate = styled.div`
  position: absolute;
  bottom: 18px;
  right: 9px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
`

export const ModalSecondary = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fbfbfb;
    z-index: ${theme.layers.menu};
    padding: 2rem;
  `}
`

export const BodySecondary = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 2rem;
`
