import { useRouter } from 'next/router'

import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'
import * as S from './styles'
import Menu from 'components/Menu'
import MediaMatch from 'components/MediaMatch'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileTemplateProps) => {
  const { asPath } = useRouter()

  return (
    <S.Wrapper>
      <Container>
        <Menu colorDesktop="white" />
      </Container>
      <Container
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 10,
          width: '100%'
        }}
      >
        <S.ProfileMainWrapper>
          <MediaMatch greaterThan="medium">
            <Heading color="white">Meu perfil</Heading>
          </MediaMatch>
          <S.Main>
            <ProfileMenu activeLink={asPath} />
            <S.Content>{children}</S.Content>
          </S.Main>
        </S.ProfileMainWrapper>
      </Container>
      <S.Image src={'/img/profile-bg.png'} />
    </S.Wrapper>
  )
}

export default Profile
