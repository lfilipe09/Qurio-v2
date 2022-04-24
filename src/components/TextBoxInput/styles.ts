import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.main``

export const SumbitWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${theme.colors.black};
    border-radius: 1rem;
    p {
      padding: 3rem 0;
    }
  `}
`

type FocusedProps = {
  isFocused: boolean
}

const inputModifiers = {
  isFocused: (theme: DefaultTheme) => css`
    background: transparent;
    border-top: 1px solid ${theme.colors.primary};
    border-right: 1px solid ${theme.colors.primary};
    border-left: 1px solid ${theme.colors.primary};
  `
}

export const Input = styled.textarea<FocusedProps>`
  ${({ theme, isFocused }) => css`
    resize: none;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    padding: 2rem 4rem 7rem 2rem;
    margin-bottom: -10px;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border: 0;
    border-top: 1px solid ${theme.colors.black};
    border-right: 1px solid ${theme.colors.black};
    border-left: 1px solid ${theme.colors.black};
    outline: none;
    width: 100%;
    &::placeholder {
      font-weight: ${theme.font.light};
      opacity: 60%;
    }
    ${isFocused && inputModifiers.isFocused(theme)}
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

const ButtonWrapperModifiers = {
  isFocused: (theme: DefaultTheme) => css`
    background: transparent;
    border-bottom: 1px solid ${theme.colors.primary};
    border-right: 1px solid ${theme.colors.primary};
    border-left: 1px solid ${theme.colors.primary};
  `
}

export const ButtonWrapper = styled.div<FocusedProps>`
  ${({ theme, isFocused }) => css`
    width: 100%;
    padding: 2rem 2rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom: 1px solid ${theme.colors.black};
    border-right: 1px solid ${theme.colors.black};
    border-left: 1px solid ${theme.colors.black};
    ${isFocused && ButtonWrapperModifiers.isFocused(theme)}
  `}
`
export const Image = styled.img`
  width: 6rem;
  height: 6rem;
  margin-top: 2rem;
`
