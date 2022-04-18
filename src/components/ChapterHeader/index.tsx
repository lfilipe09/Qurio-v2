import * as S from './styles'

export type ChapterHeaderProps = {
  title: string
  numberOfChapter: number
  subtitle?: string
  imageUrl: string
}

const ChapterHeader = ({
  subtitle,
  numberOfChapter,
  title,
  imageUrl
}: ChapterHeaderProps) => (
  <S.Wrapper>
    <S.ImageContainer>
      <S.Image src={imageUrl} />
    </S.ImageContainer>
    <S.InfoContainer>
      <p>Capítulo {numberOfChapter.toString().padStart(2, '0')}</p>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </S.InfoContainer>
  </S.Wrapper>
)

export default ChapterHeader
