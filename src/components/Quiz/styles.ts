import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    padding: 4rem;
    border: 1px solid ${theme.colors.black};
    h3 {
      margin: 1rem 0;
      margin-bottom: 2rem;
    }
    div {
      margin: 1rem 0;
    }
    button {
      margin-top: 2rem;
    }
    ${media.greaterThan('medium')`
      h3 {
        margin-bottom: 3rem;
      }
      div {
      margin: 2rem 0;
    }
		`}
  `}
`

export type ItemWrapperProps = {
  isHidden: boolean
}

export const ItemWrapper = styled.form<ItemWrapperProps>`
  ${({ isHidden }) => css`
    display: ${isHidden ? 'none' : 'block'};
  `}
`

export const Header = styled.div`
  margin: 2rem;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  grid-gap: 0.5rem;
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    background: transparent;
    transition: background ${theme.transition.fast};
    outline: none;
    cursor: pointer;
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      transition: opacity ${theme.transition.fast};
      opacity: 0;
      position: absolute;
    }
    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors.black};
    line-height: 1;
    cursor: pointer;
  `}
`
export const TitleResult = styled.h4``

export const DescriptionResult = styled.p``
