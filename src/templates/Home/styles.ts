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

export const ButtonGrid = styled.div`
  padding-left: 3.2rem;
  display: grid;
  grid-template-columns: 14rem 1fr 25rem;
`

export const ChapterContainer = styled.section`
  ${({ theme }) => css`
    /* display: grid;
    padding-left: calc(${theme.grid.gutter} / 2);
    margin-left: auto; */
    /* grid-template-columns: 30rem 1fr; */
    margin: 3.2rem;
    padding: 3rem;
    background-color: ${theme.colors.primary};
    border-radius: 1rem;
  `}
`

export const ChapterHeaderContainer = styled.div`
  ${({ theme }) => css`
    grid-area: 2 / 2;
    background-color: ${theme.colors.primary};
  `}
`
