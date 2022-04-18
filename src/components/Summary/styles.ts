import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

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
    background: ${theme.colors.white};
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
