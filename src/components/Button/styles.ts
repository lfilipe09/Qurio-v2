import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'minimal' | 'outline' | 'animated' | 'color' | 'size'
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
  size: (theme: DefaultTheme, size: string) => css`
    ${size === 'small' && `font-size:${theme.font.sizes.xsmall};`}
    ${size === 'small' && `padding: 0.5rem 1rem;`}
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
  `,
  animated: (theme: DefaultTheme) => css`
    background-color: transparent;
    box-shadow: -2px 3px 11px 0px rgba(226, 226, 211, 0.5);
    color: ${theme.colors.black};
    svg {
      width: 2rem;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.white};
      border-radius: ${theme.border.radius};
      z-index: -2;
    }
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: ${theme.colors.primary};
      border-radius: ${theme.border.radius};
      transition: all 0.3s;
      z-index: -1;
    }
    &:hover {
      color: ${theme.colors.white};
      &:before {
        width: 100%;
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon, minimal, outline, animated, color, size }) => css`
    cursor: pointer;
    color: ${color === 'primary' ? theme.colors.black : theme.colors.white};
    font-weight: ${theme.font.bold};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall} 1.5rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors[color ?? 'black']};
    border: 0;
    width: max-content;
    position: relative;
    transition: all 0.3s;

    &:hover {
      ${!animated && 'background: ${darken(0.1, theme.colors.black)};'}
    }

    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${!!outline && wrapperModifiers.outline(theme)}
    ${!!animated && wrapperModifiers.animated(theme)}
    ${!!size && wrapperModifiers.size(theme, size)}
  `}
`
