import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const MenuFullClose = styled.div`
  position: relative;
  margin-bottom: 10rem;
  ${media.lessThan('medium')`
    background-color: white;
  `}
`
export const Icon = styled.button`
  position: absolute;
  ${media.lessThan('medium')`
    position: fixed;
  `}
  cursor: pointer;
  border: 0;
  background-color: transparent;
  right: 0;
  width: 40px;
`

export const ChapterOpenerWrapper = styled.div`
  max-width: 125rem;
  margin: 0 auto;
`

export const WrapperMenuFull = styled.div`
  max-height: 100vh;
  ${media.greaterThan('medium')`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 6rem;
  margin-right: 6rem;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    padding: 9rem;
    ${media.lessThan('medium')`
  padding: 2rem;
  `}
    margin-bottom: 5rem;
    /* width */
    ::-webkit-scrollbar {
      width: 4px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: ${theme.colors.lightGray};
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #000;
      border-radius: 20px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `}
`
export const TextColumnWrapper = styled.div`
  ${media.lessThan('medium')`
  padding: 4rem;
  `}
`
