import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<ButtonProps, 'minimal'>

const wrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: () => css`
    background: none;
    border: 0;
    &:hover {
      opacity: 40%;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon, minimal }) => css`
    cursor: pointer;
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    &:hover {
      background: ${minimal ? 'none' : `#EFE7FA`};
    }
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
  `}
`
