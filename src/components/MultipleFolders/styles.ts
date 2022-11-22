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
  height: 215px;
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
    height: 215px;
    width: 165px;
    z-index: 11;
    border-radius: 20px;
  `}
`

export const ImageHalf = styled.div<ImageHalfProps>`
  ${({ bg, index }) => css`
    background: url(${bg});
    position: absolute;
    left: 173px;
    top: 16px;
    z-index: ${10 - index};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 190px;
    width: 44px;
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 44 190'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.009 189.408H24c11.046 0 20-8.955 20-20V20.065c0-11.046-8.954-20-20-20H2.182C2.436 1.337 2.57 2.653 2.57 4v175.61c0 3.559-.93 6.902-2.56 9.798Z' fill='%23D9D9D9'/%3E%3C/svg%3E");
  `}
`

export const ImageEmpty = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    border-radius: 20px;
    display: flex;
    height: 215px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 165px;
    & > svg {
      width: 35px;
    }
  `}
`
