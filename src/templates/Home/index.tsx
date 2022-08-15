import CardSlider from 'components/CardSlider'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import HeroBannerSlider from 'components/HeroBannerSlider'
import HighlightBanner from 'components/HighlightBanner'
import MediaMatch from 'components/MediaMatch'
import Mosaic, { PackMosaic } from 'components/Mosaic'
import Base from 'templates/Base'
import {
  ExternalCarouselProps,
  HeroCarouselProps,
  HighlightProps,
  SimpleCarouselProps,
  UpcomingCarouselProps
} from 'types/api'

import * as S from './styles'

export type HomePageProps = {
  heroCarousel: HeroCarouselProps
  simpleCarousel: SimpleCarouselProps
  highlight: HighlightProps
  upcomingCarousel: UpcomingCarouselProps
  lastPacksMosaic: PackMosaic[]
  externalCarousel: ExternalCarouselProps
}

const Home = ({
  heroCarousel,
  simpleCarousel,
  highlight,
  upcomingCarousel,
  lastPacksMosaic,
  externalCarousel
}: HomePageProps) => {
  return (
    <Base>
      <S.Wrapper>
        <S.HeroBannerWrapper>
          <Container>
            <HeroBannerSlider banners={heroCarousel.banners} />
          </Container>
        </S.HeroBannerWrapper>

        <S.PopularWrapper>
          <Container>
            <S.Title>
              <MediaMatch greaterThan="medium">
                <Heading size="medium">{simpleCarousel.title}</Heading>
              </MediaMatch>
              <MediaMatch lessThan="medium">
                <Heading color="white" size="medium">
                  {simpleCarousel.title}
                </Heading>
              </MediaMatch>
            </S.Title>
            <div style={{ marginBottom: '10rem' }}>
              <CardSlider items={simpleCarousel.packCard} />
            </div>
          </Container>
        </S.PopularWrapper>

        <Container>
          <S.HighlightWrapper>
            <S.Title style={{ marginBottom: '5rem' }}>
              <Heading size="medium">{highlight.title}</Heading>
            </S.Title>
            <HighlightBanner
              coverImage={highlight.coverImage}
              pack={highlight.pack}
              posts={highlight.posts}
              readingHours={highlight.readingHours}
              readingMinutes={highlight.readingMinutes}
            />
          </S.HighlightWrapper>
        </Container>

        <Container>
          <S.Title>
            <Heading size="medium">{upcomingCarousel.title}</Heading>
          </S.Title>
          <div style={{ marginBottom: '10rem' }}>
            <CardSlider items={upcomingCarousel.packCard} />
          </div>
        </Container>

        <S.LastPacksWrapper>
          <Container>
            <S.Title>
              <Heading size="medium">Mais recentes</Heading>
            </S.Title>
            <Mosaic packs={lastPacksMosaic} />
          </Container>
        </S.LastPacksWrapper>

        <Container>
          <S.Title>
            <Heading size="medium">{externalCarousel.title}</Heading>
          </S.Title>
          <div style={{ marginBottom: '10rem' }}>
            <CardSlider
              items={externalCarousel.packCard}
              isExternalCard={true}
            />
          </div>
        </Container>
      </S.Wrapper>
    </Base>
  )
}

export default Home
