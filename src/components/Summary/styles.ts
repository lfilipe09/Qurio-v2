import styled, { css } from 'styled-components'

export type WrapperProps = {
  sticky: boolean
  stickyHeight: number
}

const wrapperModifiers = {
  sticky: (stickyHeight: number) => css`
    position: fixed;
    top: ${`${stickyHeight}px`};
  `
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ sticky, stickyHeight }) => css`
    ${!!sticky && wrapperModifiers.sticky(stickyHeight)}
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
  `}
`

export type SummaryListProps = {
  isFocused: boolean
}

export const SummaryList = styled.li<SummaryListProps>`
  ${({ theme, isFocused }) => css`
    /* background: ${theme.colors.white}; */
    max-width: 30rem;
    border-radius: 100%;
    display: flex;
    margin: 2rem 0;
    font-size: ${theme.font.sizes.small};
    color: ${isFocused ? `${theme.colors.primary};` : `${theme.colors.gray};`}
    cursor: pointer;
    &.slick-active {
      background: ${theme.colors.primary};
    }
  `}
`
