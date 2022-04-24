import Banner, { BannerProps } from 'components/Banner'
import SliderMock, { SliderSettings } from 'components/Slider'
import * as S from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
  handleOnClick?: (index: number) => void
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  slidesToShow: 1.9,
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

const BannerSlider = ({ items, handleOnClick }: BannerSliderProps) => (
  <S.Wrapper>
    <SliderMock settings={settings}>
      {items.map((item, index) => (
        <Banner
          key={item.title}
          {...item}
          handleOnClick={() => handleOnClick?.(index)}
        />
      ))}
    </SliderMock>
  </S.Wrapper>
)

export default BannerSlider
