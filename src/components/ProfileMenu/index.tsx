import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'
import { signOut } from 'next-auth/client'
import Link from 'next/link'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/perfil/meus-dados" passHref>
      <S.Link isActive={activeLink === '/perfil/meus-dados'} title="Meu perfil">
        <AccountCircle size={24} />
        <span>Meu perfil</span>
      </S.Link>
    </Link>

    <Link href="/perfil/minhas-pastas" passHref>
      <S.Link
        isActive={activeLink === '/perfil/minhas-pastas'}
        title="Minhas Pastas"
      >
        <FormatListBulleted size={24} />
        <span>Minhas Pastas</span>
      </S.Link>
    </Link>

    <S.Link role="button" onClick={() => signOut()}>
      <ExitToApp size={24} />
      <span>Sign out</span>
    </S.Link>
  </S.Nav>
)

export default ProfileMenu
