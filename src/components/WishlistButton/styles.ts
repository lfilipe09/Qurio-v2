import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    z-index: ${theme.layers.base};
    width: 100%;
  `}
`
