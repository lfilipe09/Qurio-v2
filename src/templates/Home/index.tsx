import CardSlider from 'components/CardSlider'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import HeroBannerSlider from 'components/HeroBannerSlider'
import MediaMatch from 'components/MediaMatch'
import Base from 'templates/Base'
import { HeroCarouselProps, SimpleCarouselProps } from 'types/api'

import * as S from './styles'

export type HomePageProps = {
  heroCarousel: HeroCarouselProps
  simpleCarousel: SimpleCarouselProps
}

const Home = ({ heroCarousel, simpleCarousel }: HomePageProps) => {
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
      </S.Wrapper>
    </Base>
  )
}

export default Home
