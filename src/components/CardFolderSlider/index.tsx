import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import CardFolder, { CardsFolderProps } from 'components/CardFolder'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type CardFolderSliderProps = {
  items: CardsFolderProps[]
}

const settings: SliderSettings = {
  slidesToShow: 2.8,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 1.3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 1.3
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.5
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next paste" />,
  prevArrow: <ArrowLeft aria-label="previous paste" />
}

const CardFolderSlider = ({ items }: CardFolderSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <CardFolder key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default CardFolderSlider
