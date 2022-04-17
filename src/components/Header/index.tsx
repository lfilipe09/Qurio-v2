import { ClockIcon } from 'components/Icons'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import * as S from './styles'

export type HeaderProps = {
  title: string
  category: string
  author: string
  publicationDate: Date
  timeReading: number
}

const Header = ({
  author,
  category,
  publicationDate,
  // timeReading,
  title
}: HeaderProps) => (
  <S.Wrapper>
    <h2>{category}</h2>
    <h1>{title}</h1>
    <p>
      {author} |{' '}
      {format(publicationDate, 'dd MMM yyyy', {
        locale: ptBR
      })}
    </p>
    <span>
      <S.Icon>
        <ClockIcon />
      </S.Icon>
      <p>1h20 de leitura</p>
    </span>
  </S.Wrapper>
)

export default Header
