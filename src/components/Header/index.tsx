import { ClockIcon } from 'components/Icons'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { msToTime } from 'utils/date'
import * as S from './styles'

export type HeaderProps = {
  title: string
  author: string
  publicationDate: Date
  timeReading: number
  backgroundUrl: string
}

const Header = ({
  author,
  publicationDate,
  backgroundUrl,
  timeReading,
  title
}: HeaderProps) => (
  <S.Wrapper backgroundUrl={backgroundUrl}>
    <S.InfoContainer>
      <S.TitleContainer>
        <h1>{title}</h1>
        <p>
          {author} &nbsp;&nbsp; | &nbsp;&nbsp;
          {format(publicationDate, 'dd MMM yyyy', {
            locale: ptBR
          })}
        </p>
      </S.TitleContainer>

      <S.TimeContainer>
        <S.Icon>
          <ClockIcon />
        </S.Icon>
        <p>{msToTime(timeReading)} de leitura</p>
      </S.TimeContainer>
      <S.ArrowWrapper>
        <S.ArrowButton />
      </S.ArrowWrapper>
      <S.ArrowWrapper isLeft={true}>
        <S.ArrowButton />
      </S.ArrowWrapper>
    </S.InfoContainer>
  </S.Wrapper>
)

export default Header
