import Banner from 'components/Banner'
import SliderMock, { SliderSettings } from 'components/Slider'
import { useRouter } from 'next/router'
import { PostThumbProps } from 'types/api'
import * as S from './styles'

export type BannerSliderProps = {
  posts: PostThumbProps[]
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

const BannerSlider = ({ posts }: BannerSliderProps) => {
  const routes = useRouter()
  const { push } = routes
  return (
    <S.Wrapper>
      <SliderMock settings={settings}>
        {posts.map((post) => (
          <Banner
            key={post.id}
            {...post}
            handleOnClick={() => {
              push(`/pack/post/${post.slug}`)
            }}
          />
        ))}
      </SliderMock>
    </S.Wrapper>
  )
}

export default BannerSlider
