import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Card from 'components/Card'
import Slider, { SliderSettings } from 'components/Slider'
import { CardProps } from 'types/api'

import * as S from './styles'

export type CardSliderProps = {
  items: CardProps[]
  color?: 'white' | 'black'
  isExternalCard?: boolean
}

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previous games" />
}

const CardSlider = ({
  items,
  color = 'black',
  isExternalCard = false
}: CardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <Card key={index} {...item} isExternalCard={isExternalCard} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default CardSlider
