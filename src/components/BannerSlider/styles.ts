import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as BannerStyles from 'components/Banner/styles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};
      li {
        background: ${theme.colors.white};
        border: 1px solid ${theme.colors.black};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        cursor: pointer;
        &.slick-active {
          border: 0;
          background: ${theme.colors.lightGray};
        }
      }
      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }
    .slick-list {
      margin: 0 -4px;
    }
    .slick-slide > div {
      margin: 0 4px;
    }
    ${media.greaterThan('medium')`
      ${BannerStyles.Wrapper} {
        max-width: 104rem;
        margin: 0 auto;
      }
      .slick-dots {
        position: absolute;
        right: 0;
        flex-direction: column;
        height: 100%;
        top: 0;
        margin: 0;
        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }
      .slick-list {
        margin-right: 30px;
        /* margin-bottom: 30px; */
      }
      .slick-slide > div {
        margin-bottom: 30px;
      }
    `}
  `}
`
