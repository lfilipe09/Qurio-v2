import Card from 'components/Card'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import Head from 'next/head'

import * as S from './styles'

export type AcervoCardProps = {
  id: string
  slug: string
  title: string
  coverImage: {
    url: string
    alternativeText: string
  }
}

export type AcervoTemplateProps = {
  cards: AcervoCardProps[]
}

const AcervoTemplate = ({ cards }: AcervoTemplateProps) => {
  return (
    <>
      <Head>
        <title>Qurio - Acervo</title>
      </Head>
      <S.MainWrapper>
        <Container>
          <Menu colorDesktop="white" />
        </Container>
        <Container>
          <S.Title>Acervo</S.Title>
        </Container>
      </S.MainWrapper>
      <Container>
        <S.CardsWrapper>
          {cards.map((card) => (
            <Card
              coverImage={card.coverImage}
              title={card.title}
              slug={card.slug}
              key={card.id}
            />
          ))}
        </S.CardsWrapper>
      </Container>
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </>
  )
}

export default AcervoTemplate
