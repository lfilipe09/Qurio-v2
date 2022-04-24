import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import Header from 'components/Header'
import {
  CloseIcon,
  CopyIcon,
  HeartOutlineIcon,
  SlideIcon
} from '../../components/Icons'
import MediaMatch from 'components/MediaMatch'
import Menu from 'components/Menu'
import TextChapterOpener from 'components/TextChapterOpener'
import TextContent from 'components/TextContent'
import TextSideColumn from 'components/TextSideColumn'
import { useState } from 'react'
import * as S from './styles'

export type HomeTemplateProps = {
  author: string
  backgroundUrl: string
  publicationDate: Date
  HeaderTitle: string
  items: BannerProps[]
}

const Home = ({
  author,
  backgroundUrl,
  publicationDate,
  HeaderTitle,
  items
}: HomeTemplateProps) => {
  const [contentIndexOpened, setContentIndexOpened] = useState(-1)
  const [copiedToClipboard, setCopiedToClipboard] = useState(false)

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
          timeReading={5000000}
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
            <S.TextColumnWrapper>
              <TextSideColumn
                key={item.title}
                label={'Feedback'}
                placeholder={'Compartilhe aqui o que achou deste capitulo...'}
                onInput={() => console.log('Enviado!')}
                leftButtonLabel={'curtir'}
                rightButtonLabel={
                  copiedToClipboard ? 'link copiado!' : 'copiar referência'
                }
                handleOnLeftButtonClick={() =>
                  console.log('Clicou na esquerda!')
                }
                leftButtonIcon={<HeartOutlineIcon />}
                rightButtonIcon={copiedToClipboard ? null : <CopyIcon />}
                handleOnRightButtonClick={() => {
                  navigator.clipboard.writeText(item.reference ?? '')
                  setCopiedToClipboard(true)
                  setTimeout(() => {
                    setCopiedToClipboard(false)
                  }, 3000)
                }}
                isLeftButtonOutline={true}
                isRightButtonOutline={true}
                bottomButtonLabel={'adicionar conteúdo ao meu slide'}
                bottomButtonIcon={<SlideIcon />}
                urlLinkBottomButtonClick={'/'}
              />
            </S.TextColumnWrapper>
          </S.WrapperMenuFull>
        </S.MenuFull>
      ))}
    </S.Wrapper>
  )
}

export default Home
