import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 2rem;
    height: 100vh;
  `}

  /* height: 100%; */
  ${media.lessThan('medium')`
    display: block;
    padding: 1rem;
  `}
`
export const HeaderWrapper = styled.div`
  ${media.greaterThan('medium')`
    width: 100%;
    padding: 2rem;
  `}
  ${media.lessThan('medium')`
    height: 50rem;
    margin-bottom: 1rem;
  `}
`

export const BannerSliderWrapper = styled.div`
  ${media.greaterThan('medium')`
  display: flex;
  align-items: end;
  `}
`
export const MenuBannerWrapper = styled.div`
  ${media.greaterThan('medium')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-right: 2rem;
  `}
`
