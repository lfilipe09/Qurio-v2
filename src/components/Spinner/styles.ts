import styled, { css } from 'styled-components'

export type WrapperProps = {
  color?: 'primary' | 'secondary' | 'black'
}

export const Wrapper = styled.svg<WrapperProps>`
  ${({ theme, color }) => css`
    stroke: ${color ? theme.colors[color] : theme.colors.primary};
    padding: 0.1rem;
    margin: 0.2rem;
  `}
`
