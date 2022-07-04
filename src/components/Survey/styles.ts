import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export type WrapperProps = { surveySubmited: boolean }

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, surveySubmited }) => css`
    padding: ${surveySubmited ? '0rem' : '4rem'};
    border: 1px solid ${theme.colors.black};
    h3 {
      margin: 1rem 0;
      margin-bottom: 2rem;
    }
    div {
      margin: 1rem 0;
    }
    button {
      margin-top: 2rem;
    }
    ${media.greaterThan('medium')`
      h3 {
        margin-bottom: 3rem;
      }
      div {
      margin: 2rem 0;
    }
		`}
  `}
`

export const ItemWrapper = styled.form`
  margin-top: 4rem;
`

export const Header = styled.div`
  margin: 2rem;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  grid-gap: 0.5rem;
`
