import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import * as S from './styles'

export type TextChapterOpenerProps = {
  title: string
  numberOfChapter: number
  author: string
  publicationDate: Date
  urlImage: string
}

const TextChapterOpener = ({
  title,
  numberOfChapter,
  publicationDate,
  author,
  urlImage
}: TextChapterOpenerProps) => (
  <S.Wrapper>
    <S.InfoWrapper>
      <p>Capítulo {numberOfChapter.toString().padStart(2, '0')}</p>
      <h1>{title}</h1>
      <div>
        {author} &nbsp;&nbsp; | &nbsp;&nbsp;
        {format(publicationDate, 'dd MMM yyyy', {
          locale: ptBR
        })}
      </div>
    </S.InfoWrapper>
    <S.Image src={urlImage} />
  </S.Wrapper>
)

export default TextChapterOpener
