import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'

// export type MenuProps = {
//   username?: string | null
//   loading?: boolean
// }

//dupla negação transforma em booleano para comparar de fato
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <S.LogoWrapper>
          <a>
            <S.Logo src="/img/logo.png" alt="hsm" />
          </a>
        </S.LogoWrapper>
        <div>
          <p>MENU</p>
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <MenuIcon aria-label="Open Menu" color="black" />
          </S.IconWrapper>
        </div>
      </S.MenuWrapper>
      <>
        <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
          <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
          <S.MenuNav>
            <S.MenuLink href="/">Liderança 4.0</S.MenuLink>
            <S.MenuLinkDisabled>Em breve mais conteúdo</S.MenuLinkDisabled>
          </S.MenuNav>

          <S.RegisterBox>
            <S.MenuGroup>
              <S.Image
                src="/img/logo-hsm-management.png"
                alt="hsm management"
              />
              <S.Image src="/img/logo-hsm.png" alt="hsm" />
            </S.MenuGroup>
          </S.RegisterBox>
        </S.MenuFull>
      </>
    </S.Wrapper>
  )
}
//aria hidden = true é para leitores de tela, para que não leiam o menu escondido
export default Menu
