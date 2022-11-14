import {
  AutoGraph,
  CollectionsBookmark,
  Forum,
  Group,
  PlayCircle,
  Podcasts
} from '@styled-icons/material-outlined'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import Head from 'next/head'

import * as S from './styles'

const SobreTemplate = () => {
  return (
    <>
      <Head>
        <title>Qurio - Sobre</title>
      </Head>
      <S.MainWrapper>
        <Container>
          <Menu colorDesktop="white" />
          <S.HeroWrapper>
            <S.HeaderContent>
              <S.Title>
                Transformar organizações é um processo que envolve ampliação de
                repertório.
              </S.Title>
              <S.Paragraph>
                Baseado nesses três pilares, o Qurio é uma plataforma voltada
                aos profissionais de treinamento de desenvolvimento que lideram
                jornadas de inovação e aprendizado dentro das empresas
                brasileiras.
              </S.Paragraph>
            </S.HeaderContent>
            <S.Image src="/img/circle-about.png" alt="Globe Plexus" />
          </S.HeroWrapper>
          <S.SideTextWrapper>
            <S.SideTextTitle>
              Desenvolvidos por uma equipe especializada de curadores,
              jornalistas e designers.
            </S.SideTextTitle>
            <S.SideTextParagraph>
              Os packs de conteúdo do Qurio reúnem as principais metodologias e
              tendências apresentadas nos eventos da HSM e publicadas nas
              páginas de HSM Management.
            </S.SideTextParagraph>
          </S.SideTextWrapper>
          <S.Quote>
            <h4>
              Os materiais são produzidos sob medida para workshops,
              consultorias e palestras, incluindo:
            </h4>
          </S.Quote>
        </Container>
      </S.MainWrapper>
      <Container>
        <S.CardsWrapper>
          <S.Card>
            <S.Icon>{<Group />}</S.Icon>
            <S.CardText>Workshops</S.CardText>
          </S.Card>
          <S.Card>
            <S.Icon>{<Forum />}</S.Icon>
            <S.CardText>Consultorias e palestras</S.CardText>
          </S.Card>
          <S.Card>
            <S.Icon>{<CollectionsBookmark />}</S.Icon>
            <S.CardText>Artigos</S.CardText>
          </S.Card>
          <S.Card>
            <S.Icon>{<PlayCircle />}</S.Icon>
            <S.CardText>Vídeos</S.CardText>
          </S.Card>
          <S.Card>
            <S.Icon>{<Podcasts />}</S.Icon>
            <S.CardText>Podcasts</S.CardText>
          </S.Card>
          <S.Card>
            <S.Icon>{<AutoGraph />}</S.Icon>
            <S.CardText>Infográficos</S.CardText>
          </S.Card>
        </S.CardsWrapper>
      </Container>
      <Container>
        <S.FinalBenefitsWrapper>
          <S.FinalBenefitsContent>
            <S.FinalBenefitsParagraph>
              A partir de uma experiência simples e interativa, o <b>Qurio</b> é
              o seu novo destino para encontrar o melhor do que vem sendo
              produzido e pensado sobre gestão e negócios ao longo das últimas
              décadas — e acompanhar os movimentos que irão orientar e inspirar
              lideranças nos próximos anos.
            </S.FinalBenefitsParagraph>
            <S.FinalBenefitsTitle>
              Participe, leia, assista, baixe e compartilhe esse conhecimento.
            </S.FinalBenefitsTitle>
          </S.FinalBenefitsContent>
          <S.ImageBenefits
            src="/img/home-page.png"
            alt="Home Page in Notebook"
          />
        </S.FinalBenefitsWrapper>
      </Container>
      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </>
  )
}

export default SobreTemplate
