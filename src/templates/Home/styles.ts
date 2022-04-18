import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const Header = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`

export const HeaderTitle = styled.section`
  padding-bottom: 5rem;
`

export const BodyGrid = styled.section`
  display: grid;
  grid-template-columns: 30rem 1fr;
  margin-top: 5rem;
`

export const Summary = styled.section`
  position: sticky;
`
