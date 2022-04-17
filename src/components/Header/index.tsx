import { ClockIcon } from 'components/Icons'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { msToTime } from 'utils/date'
import * as S from './styles'

export type HeaderProps = {
  title: string
  category: string
  author: string
  publicationDate: Date
  timeReading: number
  imageUrl: string
}

const Header = ({
  author,
  category,
  publicationDate,
  imageUrl,
  timeReading,
  title
}: HeaderProps) => (
  <S.Wrapper>
    <S.InfoContainer>
      <h2>{category}</h2>
      <h1>{title}</h1>
      <p>
        {author} &nbsp;&nbsp; | &nbsp;&nbsp;
        {format(publicationDate, 'dd MMM yyyy', {
          locale: ptBR
        })}
      </p>
      <span>
        <S.Icon>
          <ClockIcon />
        </S.Icon>
        <p>{msToTime(timeReading)} de leitura</p>
      </span>
    </S.InfoContainer>
    <S.ImageContainer>
      <S.Image src={imageUrl} />
    </S.ImageContainer>
  </S.Wrapper>
)

export default Header
