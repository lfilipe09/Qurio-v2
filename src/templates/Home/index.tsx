import CardSlider from 'components/CardSlider'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import HeroBannerSlider from 'components/HeroBannerSlider'
import Menu from 'components/Menu'
import { HeroCarouselProps, SimpleCarouselProps } from 'types/api'

import * as S from './styles'

export type HomePageProps = {
  heroCarousel: HeroCarouselProps
  simpleCarousel: SimpleCarouselProps
}

const Home = ({ heroCarousel, simpleCarousel }: HomePageProps) => {
  return (
    <Container>
      <Menu />
      <HeroBannerSlider banners={heroCarousel.banners} />
      <S.Title>
        <Heading size="medium">Packs já lançados</Heading>
      </S.Title>
      <div style={{ marginBottom: '10rem' }}>
        <CardSlider items={simpleCarousel.packCard} />
      </div>
    </Container>
  )
}

export default Home
