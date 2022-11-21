import * as S from './styles'
import { Container } from 'components/Container'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ children }: AuthProps) => (
  <S.Wrapper>
    <Container>
      <S.LogoWrapper>
        <S.Logo src={'/img/qurio-white.png'} />
      </S.LogoWrapper>
      <S.FormWrapper>{children}</S.FormWrapper>
    </Container>
    <S.Image src={'/img/qurio-white.png'} />
  </S.Wrapper>
)

export default Auth
