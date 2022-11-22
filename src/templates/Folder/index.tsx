import { ArrowBack } from '@styled-icons/material-outlined'
import Card from 'components/Card'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'
import { CardProps } from 'types/api'
import * as S from './styles'

export type FolderTemplateProps = {
  packs: CardProps[]
  posts?: CardProps[]
  title: string
  amount: number
  creationDate: Date
}

const FolderTemplate = ({
  packs,
  posts,
  title,
  amount,
  creationDate
}: FolderTemplateProps) => {
  const [mode, setMode] = useState<'packs' | 'posts'>('packs')
  const [currentData, setCurrentData] = useState<CardProps[]>(packs)

  function handleFolderClick(currentMode: 'packs' | 'posts') {
    setMode(currentMode)
    posts && setCurrentData(currentMode === 'packs' ? packs : posts)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Container>
          <Menu colorDesktop="white" />
          <S.FolderHeaderContent>
            <S.TitleRow>
              <S.Link href={'/perfil/minhas-pastas'}>
                <ArrowBack width={30} />
              </S.Link>
              <S.Title>{title}</S.Title>
            </S.TitleRow>
            <S.FolderDescription>
              <p>
                {amount} Itens{' '}
                <span>
                  | criado em{' '}
                  {format(creationDate, 'dd/MMM/yyyy', {
                    locale: ptBR
                  })}
                </span>
              </p>
            </S.FolderDescription>
            {!!posts && (
              <S.SubmenuWrapper>
                <S.Submenu
                  isHighlighted={mode === 'packs'}
                  onClick={() => handleFolderClick('packs')}
                >
                  Packs
                </S.Submenu>
                <S.Submenu
                  isHighlighted={mode === 'posts'}
                  onClick={() => handleFolderClick('posts')}
                >
                  Posts
                </S.Submenu>
              </S.SubmenuWrapper>
            )}
          </S.FolderHeaderContent>
        </Container>
      </S.Header>
      <Container>
        <S.CardsWrapper>
          {currentData.map((pack) => (
            <Card {...pack} key={pack.id} />
          ))}
        </S.CardsWrapper>
      </Container>
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default FolderTemplate
