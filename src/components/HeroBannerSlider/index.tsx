import HeroBanner from 'components/HeroBanner'
import Slider, { SliderSettings } from 'components/Slider'
import { HeroBannerProps, HeroCarouselProps } from 'types/api'
import * as S from './styles'

export type HeroBannerSliderProps = {
  items: HeroBannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: false,
  verticalSwiping: false,
  infinite: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const HeroBannerSlider = ({ banners }: HeroCarouselProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {banners.map((banner) => (
        <HeroBanner key={banner.id} {...banner} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default HeroBannerSlider
