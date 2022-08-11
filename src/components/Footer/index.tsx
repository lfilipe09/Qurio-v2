import Link from 'next/link'

import Heading from '../../components/Heading'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <S.Column>
        <S.Logo src="/img/qurio-white.png" alt="qurio" />
      </S.Column>
      <S.Column id="social-media" aria-labelledby="social media">
        <Heading color="black" lineBottom size="small">
          Contato
        </Heading>

        <nav id="social-media">
          <a
            href="mailto:carol@qura.com.br"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            carol@qura.com.br
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511995555604"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            +55 11 9 9555-5604
          </a>
        </nav>
      </S.Column>
      <S.Column aria-labelledby="resources">
        <Heading color="black" lineBottom size="small">
          Links
        </Heading>

        <nav id="resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Sobre</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-label="contact">
        <S.LogosWrapper>
          <S.Logo src="/img/logo-hsm-management-white.png" alt="qurio" />
          <S.Logo src="/img/logo-hsm-white.png" alt="qurio" />
        </S.LogosWrapper>
      </S.Column>
    </S.Content>
    <S.Copyright>Qurio © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
