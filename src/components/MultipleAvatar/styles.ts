import styled, { css } from 'styled-components'

export type ImageFullProps = {
  bg: string
}

export type ImageHalfProps = {
  bg: string
  index: number
}

export const Wrapper = styled.main`
  position: relative;
  height: 31px;
`

export const ImageFull = styled.div<ImageFullProps>`
  ${({ bg }) => css`
    background: url(${bg});
    position: absolute;
    left: 0;
    top: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 31px;
    width: 31px;
    z-index: 11;
    border-radius: 25px;
  `}
`

export const ImageHalf = styled.div<ImageHalfProps>`
  ${({ bg, index }) => css`
    background: url(${bg});
    position: absolute;
    left: ${index === 1 ? '26px' : `${26 + 9 * (index - 1)}px`};
    top: 0;
    z-index: ${10 - index};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 29px;
    width: 14.7px;
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 15 29'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 29h.199c8.008 0 14.5-6.492 14.5-14.5S8.207 0 .199 0h-.2c4.647 3.146 7.7 8.467 7.7 14.5 0 6.033-3.053 11.354-7.7 14.5Z' fill='%23000'/%3E%3C/svg%3E");
  `}
`

export const ImageEmpty = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: fit-content;
    & > svg {
      width: 11px;
    }
  `}
`
