import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.SectionMenu>
          <Menu />
        </S.SectionMenu>
      </Container>

      <S.Content>{children}</S.Content>

      <Container>
        <Footer />
      </Container>
    </S.Wrapper>
  )
}

export default Base
