import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'
import Button from 'components/Button'
import Link from 'next/link'

export type MenuProps = {
  description?: string
  title?: string
  isPack?: boolean
}

//dupla negação transforma em booleano para comparar de fato
const Menu = ({ description, title, isPack = false }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.MenuWrapper>
        <S.LogoWrapper>
          <Link href="/" passHref>
            <a>
              <S.Logo src="/img/logo.png" alt="qurio" />
            </a>
          </Link>
          {!isPack && (
            <>
              <Link href="/" passHref>
                <S.MenuLink>Home</S.MenuLink>
              </Link>
              <S.MenuLink>Sobre</S.MenuLink>
            </>
          )}
        </S.LogoWrapper>
        <div>
          {isPack ? (
            <>
              <Button minimal={true} onClick={() => setIsAboutOpen(true)}>
                SOBRE O PACK
              </Button>
              <Button minimal={true} onClick={() => setIsOpen(true)}>
                MENU
              </Button>
              <S.IconWrapper onClick={() => setIsOpen(true)}>
                <MenuIcon aria-label="Open Menu" color="black" />
              </S.IconWrapper>
            </>
          ) : (
            <>
              <S.Login>
                <Button as={'button'} minimal={true} disabled>
                  Login
                </Button>
              </S.Login>
              <S.MenuIcon>
                <S.IconWrapper onClick={() => setIsOpen(true)}>
                  <MenuIcon aria-label="Open Menu" color="black" />
                </S.IconWrapper>
              </S.MenuIcon>
            </>
          )}
        </div>
      </S.MenuWrapper>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="/">Liderança 4.0</S.MenuLink>
          <S.MenuLinkDisabled>Em breve mais conteúdo</S.MenuLinkDisabled>
        </S.MenuNav>

        <S.RegisterBox>
          <S.MenuGroup>
            <S.Image src="/img/logo-hsm-management.png" alt="hsm management" />
            <S.Image src="/img/logo-hsm.png" alt="hsm" />
          </S.MenuGroup>
        </S.RegisterBox>
      </S.MenuFull>

      <S.MenuFull aria-hidden={!isAboutOpen} isOpen={isAboutOpen}>
        <CloseIcon
          aria-label="Close Menu"
          onClick={() => setIsAboutOpen(false)}
        />
        <S.MenuNav>
          <S.Title>{title}</S.Title>
          {description && (
            <S.Text dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}
//aria hidden = true é para leitores de tela, para que não leiam o menu escondido
export default Menu
