import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import Header from 'components/Header'
import MediaMatch from 'components/MediaMatch'
import Menu from 'components/Menu'
import { useEffect, useRef, useState } from 'react'
import * as S from './styles'

export type HomeTemplateProps = {
  author: string
  numberOfChapters?: number
  backgroundUrl: string
  publicationDate: Date
  HeaderTitle: string
  items: BannerProps[]
}

const Home = ({
  numberOfChapters,
  author,
  backgroundUrl,
  publicationDate,
  HeaderTitle,
  items
}: HomeTemplateProps) => {
  const [isSticky, setIsSticky] = useState(false)
  const [stickyHeight, setStickyHeight] = useState(0)
  const headerRef = useRef<HTMLBodyElement>(null)
  const summaryRef = useRef<HTMLBodyElement>(null)

  const chaptersRef = useRef<HTMLElement[] | null>(null)
  chaptersRef.current = Array(numberOfChapters)

  useEffect(() => {
    window.onscroll = () => {
      console.log(stickyHeight)
      if (
        headerRef.current &&
        window.pageYOffset > headerRef.current?.clientHeight * 0.7 &&
        isSticky === false
      ) {
        setIsSticky(true)
        setStickyHeight(
          summaryRef.current
            ? summaryRef?.current?.offsetTop - window.pageYOffset
            : 170
        )
        // chaptersRef?.current?.map(
        //   (chapter) => window.pageYOffset > chapter.clientHeight
        // )
      } else if (
        headerRef.current &&
        window.pageYOffset < headerRef.current?.clientHeight * 0.7
      ) {
        setIsSticky(false)
      }
    }
  })

  return (
    <S.Wrapper>
      <MediaMatch lessThan={'medium'}>
        <Menu />
      </MediaMatch>
      <S.HeaderWrapper>
        <Header
          author={author}
          backgroundUrl={backgroundUrl}
          handleOnClick={() => console.log('pass')}
          publicationDate={new Date(publicationDate)}
          timeReading={30000}
          title={HeaderTitle}
        />
      </S.HeaderWrapper>
      <S.BannerSliderWrapper>
        <S.MenuBannerWrapper>
          <MediaMatch greaterThan={'medium'}>
            <Menu />
          </MediaMatch>
          <BannerSlider items={items} />
        </S.MenuBannerWrapper>
      </S.BannerSliderWrapper>
    </S.Wrapper>
  )
}

export default Home
