import MultipleFolders from 'components/MultipleFolders'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Link from 'next/link'
import * as S from './styles'

export type CardsFolderProps = {
  imgsUrl?: string[]
  title: string
  amount: number
  creationDate: Date
  url: string
}

const CardFolder = ({
  imgsUrl,
  title,
  amount,
  creationDate,
  url
}: CardsFolderProps) => (
  <S.Wrapper>
    <Link href={url} passHref>
      <a>
        <div style={{ marginBottom: '2rem' }}>
          <MultipleFolders imgsUrl={imgsUrl} />
        </div>
        <S.Title>{title}</S.Title>
        <S.Amount>{amount} Itens</S.Amount>
        <S.Date>
          Criado em{' '}
          {format(creationDate, 'dd/MMM/yyyy', {
            locale: ptBR
          })}
        </S.Date>
      </a>
    </Link>
  </S.Wrapper>
)

export default CardFolder
