import styled from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.div`
  ${media.greaterThan('medium')`
    margin: 5rem 0;
  `}
  ${media.lessThan('medium')`
    margin: 4rem 0 2rem 1.3rem;
  `}
`
