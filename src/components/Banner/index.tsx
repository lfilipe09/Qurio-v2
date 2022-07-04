import { PostThumbProps } from 'types/api'
import * as S from './styles'

export type BannerProps = {
  handleOnClick?: () => void
} & PostThumbProps

const Banner = ({ imageUrl, title, formats, handleOnClick }: BannerProps) => (
  <>
    <S.Wrapper onClick={handleOnClick}>
      <S.RibbonWrapper>
        {formats.map((format, index) => (
          <S.Ribbon key={format + index}>{format.toUpperCase()}</S.Ribbon>
        ))}
      </S.RibbonWrapper>
      <S.ImageWrapper>
        <S.Image src={imageUrl} alt={title} />
      </S.ImageWrapper>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
      </S.TitleWrapper>
    </S.Wrapper>
  </>
)

export default Banner
