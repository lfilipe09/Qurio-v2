import * as S from './styles'
import { Container } from 'components/Container'
import Head from 'next/head'
import Menu from 'components/Menu'

type AuthProps = {
  children: React.ReactNode
  signType: 'sign-in' | 'sign-up'
}

const Auth = ({ children, signType }: AuthProps) => (
  <S.Wrapper>
    <Head>
      <title>Qurio - Login</title>
    </Head>
    <Container
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
      }}
    >
      <Menu colorDesktop="white" />
      <S.AuthContent>
        <S.FormWrapper>{children}</S.FormWrapper>
      </S.AuthContent>
    </Container>
    <S.Image
      src={signType === 'sign-in' ? '/img/signin-bg.png' : '/img/signup-bg.png'}
    />
  </S.Wrapper>
)

export default Auth
