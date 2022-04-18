import Button from 'components/Button'
import ChapterHeader from 'components/ChapterHeader'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { HeartOutlineIcon, SlideIcon } from 'components/Icons'
import Menu from 'components/Menu'
import Summary from 'components/Summary'
import TextBoxInput from 'components/TextBoxInput'
import TextContent from 'components/TextContent'
import TextContentMock from 'components/TextContent/mock'
// import useSticky from 'hooks/useSticky'
import { useEffect, useRef, useState } from 'react'
import * as S from './styles'

export type HomeTemplateProps = {
  numberOfChapters?: number
}

const Home = ({ numberOfChapters }: HomeTemplateProps) => {
  const [isSticky, setIsSticky] = useState(false)
  const [stickyHeight, setStickyHeight] = useState(0)
  const [focusedIndex, setFocusedIndex] = useState(0)
  const headerRef = useRef<HTMLBodyElement>(null)
  const summaryRef = useRef<HTMLBodyElement>(null)

  const chaptersRef = useRef<HTMLElement[] | null>(null)
  chaptersRef.current = Array(numberOfChapters)

  // const handleScroll = (e) => {
  //   const bottom =
  //     e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
  //   console.log('olha o target.scrollHeight', e.target.scrollHeight)
  //   console.log('olha o e.target.scrollTop', e.target.scrollTop)
  //   if (bottom) {
  //     console.log('cheguei no fim')
  //     setIsSticky(false)
  //   }
  // }

  useEffect(() => {
    window.onscroll = () => {
      console.log(focusedIndex)
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
      } else {
        if (chaptersRef?.current) {
          console.log('Olha o chaptersRef: ', chaptersRef?.current)
          for (let i = 0; i < chaptersRef.current.length; i++) {
            if (chaptersRef.current[i]) {
              console.log(
                `esse eh o index ${i}`,
                chaptersRef.current[i].clientHeight
              )
              if (
                chaptersRef.current[i + 1] &&
                window.pageYOffset > chaptersRef.current[i].clientHeight &&
                window.pageYOffset < chaptersRef.current[i + 1].clientHeight
              ) {
                console.log('considção 1', chaptersRef.current[i].clientHeight)
                setFocusedIndex(i)
              } else if (
                i === chaptersRef.current.length - 1 &&
                window.pageYOffset > chaptersRef.current[i].clientHeight
              ) {
                console.log('considção 2', chaptersRef.current[i].clientHeight)
                setFocusedIndex(i)
              }
            }
          }
        }
      }
    }
  })

  return (
    <>
      <S.Header ref={headerRef}>
        <Container>
          <Menu />
          <S.HeaderTitle>
            <Header
              title={'Liderança 4.0'}
              category={'Liderança'}
              author={'Thomaz Lira Gomes'}
              publicationDate={new Date()}
              timeReading={10000000}
              imageUrl={'/img/header.png'}
            />
          </S.HeaderTitle>
        </Container>
      </S.Header>
      <Container>
        <S.BodyGrid>
          <S.Summary ref={summaryRef}>
            <Summary
              topics={[
                'Liderança inspiradora',
                'Liderança remota: 3 fatores para o sucesso de equipes à distância',
                'O futuro do anywhere office',
                'Metaverso: por onde começar',
                'Mindset de crescimento: como identificar agentes da mudança ',
                'Profissionais T-shaped'
              ]}
              focusedIndex={0}
              sticky={isSticky}
              stickyHeight={stickyHeight}
            />
          </S.Summary>
          <div>
            <TextContent
              title={TextContentMock.title}
              content={TextContentMock.content}
            />

            <S.ButtonGrid>
              <Button icon={<HeartOutlineIcon />} outline={true}>
                curtir capítulo
              </Button>
              <div></div>
              <Button
                icon={<SlideIcon />}
                minimal={true}
                // style={{ justifyContent: 'right' }}
              >
                adicionar capítulo ao meu slide
              </Button>
            </S.ButtonGrid>
            <div style={{ padding: '3.2rem' }}>
              <TextBoxInput
                label={'Feedback'}
                placeholder={'Compartilhe aqui o que achou deste capítulo...'}
              />
            </div>
            <S.ChapterContainer ref={(e) => e && chaptersRef.current?.push(e)}>
              <ChapterHeader
                title={'Liderança remota:'}
                numberOfChapter={2}
                imageUrl={'/img/chapter01.png'}
                subtitle={'3 fatores para o sucesso de equipes à distância'}
              />
            </S.ChapterContainer>
            <TextContent
              title={TextContentMock.title}
              content={TextContentMock.content}
            />
          </div>
        </S.BodyGrid>
      </Container>
      <Container>
        <div style={{ marginTop: '10rem' }}>
          <Footer />
        </div>
      </Container>
    </>
  )
}

export default Home
