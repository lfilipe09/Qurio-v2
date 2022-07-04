import { ClockIcon } from 'components/Icons'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import * as S from './styles'
import { useRouter } from 'next/router'

export type HeaderProps = {
  title: string
  authors: string[]
  publicationDate: Date
  previousPack?: string
  nextPack?: string
  timeReading: string
  backgroundUrl: string
  handleOnClick: () => void
}

const Header = ({
  authors,
  publicationDate,
  previousPack,
  nextPack,
  backgroundUrl,
  timeReading,
  title
}: // handleOnClick
HeaderProps) => {
  const routes = useRouter()
  const { push } = routes
  return (
    <S.Wrapper backgroundUrl={backgroundUrl}>
      <S.InfoContainer>
        <S.TitleContainer>
          <h1>{title}</h1>
          <p>
            Powered by{' '}
            {authors.map((author, index) =>
              index !== authors.length - 1 ? `${author} • ` : author
            )}{' '}
            &nbsp;&nbsp; | &nbsp;&nbsp;
            {format(publicationDate, 'dd MMM yyyy', {
              locale: ptBR
            })}
          </p>
        </S.TitleContainer>

        <S.TimeContainer>
          <S.Icon>
            <ClockIcon />
          </S.Icon>
          <p>{timeReading} de leitura</p>
        </S.TimeContainer>
        {!!previousPack && (
          <S.ArrowWrapperLeft onClick={() => push(`/pack/${previousPack}`)}>
            <S.ArrowButton />
          </S.ArrowWrapperLeft>
        )}
        {!!nextPack && (
          <S.ArrowWrapperRight onClick={() => push(`/pack/${nextPack}`)}>
            <S.ArrowButton />
          </S.ArrowWrapperRight>
        )}
      </S.InfoContainer>
    </S.Wrapper>
  )
}

export default Header
