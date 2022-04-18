import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'
import { darken } from 'polished'

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'minimal' | 'outline'
>

const wrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    border: 0;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.light};
    &:hover {
      background: none;
      opacity: 40%;
    }
  `,
  outline: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    font-weight: ${theme.font.light};
    background: none;
    &:hover {
      background: #efe7fa;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon, minimal, outline }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall} 1.5rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    border: 0;
    &:hover {
      background: ${darken(0.1, theme.colors.primary)};
    }
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${!!outline && wrapperModifiers.outline(theme)}
  `}
`
