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
    color: ${theme.colors.black};
    font-weight: ${theme.font.light};
    &:hover {
      background: none;
      opacity: 40%;
    }
  `,
  outline: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.black};
    font-weight: ${theme.font.light};
    background: none;
    &:hover {
      background: #f0f0f0;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon, minimal, outline }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall} 1.5rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.black};
    border: 0;
    width: 100%;
    &:hover {
      background: ${darken(0.1, theme.colors.black)};
    }

    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${!!outline && wrapperModifiers.outline(theme)}
  `}
`
