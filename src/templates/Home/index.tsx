import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import Header from 'components/Header'
import {
  CloseIcon,
  CopyIcon,
  HeartOutlineIcon,
  SlideIcon
} from 'components/Icons'
import MediaMatch from 'components/MediaMatch'
import Menu from 'components/Menu'
import TextChapterOpener from 'components/TextChapterOpener'
import TextContent from 'components/TextContent'
import TextSideColumn from 'components/TextSideColumn'
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
  const [contentIndexOpened, setContentIndexOpened] = useState(-1)
  const headerRef = useRef<HTMLBodyElement>(null)
  const summaryRef = useRef<HTMLBodyElement>(null)

  const chaptersRef = useRef<HTMLElement[] | null>(null)
  chaptersRef.current = Array(numberOfChapters)

  useEffect(() => {
    console.log(stickyHeight)
    window.onscroll = () => {
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
          <BannerSlider
            items={items}
            handleOnClick={(index) => {
              console.log('clicou!!')
              console.log('olha o index:', index)
              setContentIndexOpened(index)
            }}
          />
        </S.MenuBannerWrapper>
      </S.BannerSliderWrapper>
      {items.map((item, index) => (
        <S.MenuFull
          key={item.title}
          aria-hidden={contentIndexOpened !== index}
          isOpen={contentIndexOpened === index}
        >
          <S.MenuFullClose>
            <S.Icon onClick={() => setContentIndexOpened(-1)}>
              <CloseIcon />
            </S.Icon>
          </S.MenuFullClose>
          <S.WrapperMenuFull>
            <S.ContentWrapper>
              <TextChapterOpener
                author={author}
                numberOfChapter={index + 1}
                publicationDate={new Date(item.publicationDate ?? '')}
                title={item.title}
                urlImage={item.img}
              />
              <TextContent content={item.content ?? ''} />
            </S.ContentWrapper>
            <TextSideColumn
              label={'Feedback'}
              placeholder={'Compartilhe aqui o que achou deste capitulo...'}
              onInput={() => console.log('Enviado!')}
              leftButtonLabel={'curtir'}
              rightButtonLabel={'copiar referência'}
              handleOnLeftButtonClick={() => console.log('Clicou na esquerda!')}
              leftButtonIcon={<HeartOutlineIcon />}
              rightButtonIcon={<CopyIcon />}
              handleOnRightButtonClick={() => console.log('Clicou na direita!')}
              isLeftButtonOutline={true}
              isRightButtonOutline={true}
              bottomButtonLabel={'adicionar conteúdo ao meu slide'}
              bottomButtonIcon={<SlideIcon />}
              urlLinkBottomButtonClick={'/'}
            />
          </S.WrapperMenuFull>
        </S.MenuFull>
      ))}
    </S.Wrapper>
  )
}

export default Home
