import { forwardRef, useRef } from 'react'
import SlickSlider, { Settings } from 'react-slick'

import * as S from './styles'
import Slider from 'react-slick'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const SliderMock: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => {
  const divRef = useRef<Slider>(null)
  console.log(ref)
  /*
  const onWheelSlider = debounce((e, ref) => {
    if (!ref?.current) return

    if (e.deltaY > 0) {
      ref?.current.slickNext()
    } else if (e.deltaY < 0) {
      ref?.current.slickPrev()
    }
  }, 20)
  */
  return (
    <S.Wrapper>
      <SlickSlider ref={divRef} {...settings}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  )
}

export default forwardRef(SliderMock)
