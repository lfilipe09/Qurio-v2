import { Plus, X } from '@styled-icons/feather'
import { Search } from '@styled-icons/feather'
import Button from 'components/Button'
import MultipleAvatar from 'components/MultipleAvatar'
import TextField from 'components/TextField'
import * as S from './styles'
import { mockWishlist, MockWishlistProps } from './mock'
import { useState } from 'react'
import Spinner from 'components/Spinner'
import MediaMatch from 'components/MediaMatch'

export type WishlistModalProps = {
  isOpen: boolean
  closeModal: () => void
}

const WishlistModal = ({ closeModal, isOpen }: WishlistModalProps) => {
  const [isLoading] = useState(false)
  return (
    <>
      <S.Wrapper isOpen={isOpen}>
        <S.Header>
          <S.Title>Salvar na pasta</S.Title>
          <MediaMatch greaterThan={'medium'}>
            <Button icon={<Plus />} color={'primary'} size={'small'}>
              Criar pasta
            </Button>
          </MediaMatch>
          <MediaMatch lessThan={'medium'}>
            <Button icon={<X />} />
          </MediaMatch>
        </S.Header>
        <S.SearchBar>
          <TextField icon={<Search />} placeholder={'Pesquisar'} />
        </S.SearchBar>
        <S.Body>
          {mockWishlist.map((item: MockWishlistProps) => (
            <S.LineItem key={item.id}>
              <MultipleAvatar
                imgsUrl={item.imgsUrl.filter((img, index) => index < 2)}
              />
              <S.Subtitle>{item.title}</S.Subtitle>
              <S.Button>
                {!isLoading ? <Plus /> : <Spinner color="black" />}
              </S.Button>
            </S.LineItem>
          ))}
          <MediaMatch lessThan={'medium'}>
            <Button icon={<Plus />} color={'primary'}>
              Criar pasta
            </Button>
          </MediaMatch>
        </S.Body>
      </S.Wrapper>
      <S.CloseBG isOpen={isOpen} onClick={closeModal}></S.CloseBG>
    </>
  )
}

export default WishlistModal
