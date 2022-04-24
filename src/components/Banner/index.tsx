import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  format: string
}

const Banner = ({ img, title, format }: BannerProps) => (
  <>
    <S.Wrapper>
      <S.Ribbon>{format.toUpperCase()}</S.Ribbon>
      <S.ImageWrapper>
        <S.Image src={img} alt={title} />
      </S.ImageWrapper>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
      </S.TitleWrapper>
    </S.Wrapper>
  </>
)

export default Banner
