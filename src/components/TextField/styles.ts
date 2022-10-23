import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

type WrapperProps = Pick<TextFieldProps, 'disabled'> & {
  error?: boolean
  minimal?: boolean
}

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.white};
    border-radius: 20px;
    padding: 0 ${theme.spacings.xsmall};
    grid-gap: 1rem;
    box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.05);
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`
export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    ::placeholder{
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray};
    }
    //remover aquele autofill do google que deixa azulzinho
    //o filter none é pra remover do firefox que tem filtro só lá
    &:-webkit-autofill{
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.lightGray} inset;
      filter: none
    }
  `}
`
export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`
export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    order: ${iconPosition === 'right' ? 1 : 0};
    color: ${theme.colors.gray};
    & > svg {
      width: 90%;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      background: transparent;
      box-shadow: unset;
      border: 1px solid ${theme.colors.gray};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled, minimal }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
    ${minimal && wrapperModifiers.minimal(theme)}
  `}
`
