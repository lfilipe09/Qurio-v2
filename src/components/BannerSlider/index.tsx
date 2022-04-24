import Banner, { BannerProps } from 'components/Banner'
import SliderMock, { SliderSettings } from 'components/Slider'
import * as S from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  slidesToShow: 2.2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 1.2
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <SliderMock settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </SliderMock>
  </S.Wrapper>
)

export default BannerSlider
