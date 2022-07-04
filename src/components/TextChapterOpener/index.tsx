import { Share } from '@styled-icons/remix-fill'
import Button from 'components/Button'
import { CopyIcon, SlideIcon } from 'components/Icons'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'
import * as S from './styles'

export type TextChapterOpenerProps = {
  title: string
  category: string
  authors: string[]
  publicationDate: Date
  urlImage: string
  originUrl: string
  reference: string
  slideUrl: string
}

const TextChapterOpener = ({
  title,
  category,
  publicationDate,
  authors,
  urlImage,
  reference,
  originUrl,
  slideUrl
}: TextChapterOpenerProps) => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false)
  return (
    <S.Wrapper>
      <S.HeaderContentButtonWrapper>
        <S.InfoWrapper>
          <p>{category}</p>
          <h1>{title}</h1>
          <div>
            {authors.map((author, index) =>
              index !== authors.length - 1 ? `${author} • ` : author
            )}{' '}
            &nbsp;&nbsp; | &nbsp;&nbsp;
            {format(publicationDate, 'dd MMM yyyy', {
              locale: ptBR
            })}
          </div>
        </S.InfoWrapper>
        <S.ButtonWrapper>
          <Button
            icon={copiedToClipboard ? null : <CopyIcon />}
            minimal={true}
            onClick={() => {
              navigator.clipboard.writeText(reference ?? '')
              setCopiedToClipboard(true)
              setTimeout(() => {
                setCopiedToClipboard(false)
              }, 3000)
            }}
          >
            {copiedToClipboard ? 'link copiado!' : 'copiar referência'}
          </Button>
          <Button
            icon={<SlideIcon />}
            minimal={true}
            as={'a'}
            href={slideUrl}
            target={'_blank'}
          >
            {'adicionar conteúdo ao meu slide'}
          </Button>
          <Button
            icon={<Share />}
            minimal={true}
            as={'a'}
            href={originUrl}
            target={'_blank'}
          >
            {'Acesse o conteúdo da íntegra'}
          </Button>
        </S.ButtonWrapper>
      </S.HeaderContentButtonWrapper>
      <S.Image src={urlImage} />
    </S.Wrapper>
  )
}

export default TextChapterOpener
