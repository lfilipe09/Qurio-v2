import { Container } from 'components/Container'
import Header from 'components/Header'
import Menu from 'components/Menu'
import Summary from 'components/Summary'
import TextContent from 'components/TextContent'
import TextContentMock from 'components/TextContent/mock'
// import useSticky from 'hooks/useSticky'
import { useEffect, useRef, useState } from 'react'
import * as S from './styles'

export type HomeTemplateProps = {
  banners?: string
}

const Home = ({ banners }: HomeTemplateProps) => {
  const [isSticky, setIsSticky] = useState(false)
  const [stickyHeight, setStickyHeight] = useState(0)
  const headerRef = useRef<HTMLBodyElement>(null)
  const summaryRef = useRef<HTMLBodyElement>(null)

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
      console.log(window.pageYOffset)
      console.log(headerRef.current?.clientHeight)
      console.log(banners)
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
      } else if (
        headerRef.current &&
        window.pageYOffset < headerRef.current?.clientHeight * 0.7
      ) {
        console.log('settei de volta')
        setIsSticky(false)
      }
    }
    // window.onscroll = () =>
    //   console.log(
    //     'olha o window.pageYOffset',
    //     window.pageYOffset,
    //     'olha o headerRef.current?.clientHeight',
    //     headerRef.current?.clientHeight
    //   )
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
                'O futuro do anywhere office',
                'Liderança remota: 3 fatores para o sucesso de equipes à distância',
                'Metaverso: por onde começar',
                'Mindset de crescimento: como identificar agentes da mudança ',
                'Profissionais T-shaped'
              ]}
              focusedIndex={0}
              sticky={isSticky}
              stickyHeight={stickyHeight}
            />
          </S.Summary>

          <TextContent
            title={TextContentMock.title}
            content={TextContentMock.content}
          />
        </S.BodyGrid>
      </Container>
    </>
  )
}

export default Home
