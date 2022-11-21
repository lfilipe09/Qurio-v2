import { Plus, X } from '@styled-icons/feather'
import { Search } from '@styled-icons/feather'
import Button from 'components/Button'
import MultipleAvatar from 'components/MultipleAvatar'
import TextField from 'components/TextField'
import * as S from './styles'
import { useState } from 'react'
import Spinner from 'components/Spinner'

export type MockWishlistProps = {
  id: number
  imgsUrl: string[]
  title: string
}

export type WishlistModalProps = {
  isOpen: boolean
  closeModal: () => void
  wishlistPacks: MockWishlistProps[]
  onCreateNewFolder?: (folderName: string) => void
  onAddWishlist?: () => Promise<void>
}

const WishlistModal = ({
  closeModal,
  isOpen,
  wishlistPacks,
  onCreateNewFolder,
  onAddWishlist
}: WishlistModalProps) => {
  const [wishlists, setWishlist] = useState<MockWishlistProps[]>(wishlistPacks)
  const [isSecondaryModalOpen, setIsSecondaryModalOpen] = useState(false)
  const [nameNewFolder, setNameNewFolder] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)

  const handleInput = (userType: string) => {
    console.log(wishlists)
    setWishlist(
      wishlistPacks.filter((item) =>
        item.title.toLowerCase().includes(userType.toLowerCase())
      )
    )
  }

  const toggleSecondaryModal = () => {
    setIsSecondaryModalOpen(!isSecondaryModalOpen)
  }

  const handleClick = async () => {
    setIsLoading(true)
    await onAddWishlist?.()
    setIsLoading(false)
  }
  return (
    <>
      <S.Wrapper isOpen={isOpen}>
        <S.Header>
          <S.Title>Lista de Pastas</S.Title>
          <Button
            icon={<X />}
            minimal={true}
            size={'small'}
            onClick={closeModal}
          />
        </S.Header>
        <S.SearchBar>
          <TextField
            inputHeight="small"
            minimal={true}
            icon={<Search />}
            placeholder={'Nome da pasta'}
            onInputChange={handleInput}
          />
        </S.SearchBar>
        <S.Body>
          {wishlists?.map((item: MockWishlistProps) => (
            <S.LineItem key={item.id} onClick={handleClick}>
              <MultipleAvatar
                imgsUrl={item.imgsUrl.filter((img, index) => index < 2)}
              />
              <S.Subtitle>{item.title}</S.Subtitle>
              <S.Button>
                {!isLoading ? <Plus /> : <Spinner color="black" />}
              </S.Button>
            </S.LineItem>
          ))}
        </S.Body>
        <S.Footer>
          <Button
            icon={<Plus />}
            size={'small'}
            color={'primary'}
            onClick={toggleSecondaryModal}
          >
            Criar pasta
          </Button>
        </S.Footer>
        {isSecondaryModalOpen && (
          <S.ModalSecondary>
            <S.Header>
              <S.Title>Nova Pasta</S.Title>
              <Button
                icon={<X />}
                minimal={true}
                size={'small'}
                onClick={toggleSecondaryModal}
              />
            </S.Header>
            <S.BodySecondary>
              <S.SearchBar>
                <TextField
                  inputHeight="small"
                  minimal={true}
                  placeholder={'Nome da pasta'}
                  onInputChange={setNameNewFolder}
                />
              </S.SearchBar>
              <Button
                color="primary"
                onClick={() => {
                  onCreateNewFolder?.(nameNewFolder ?? '')
                  setIsSecondaryModalOpen(false)
                }}
              >
                Criar pasta
              </Button>
            </S.BodySecondary>
          </S.ModalSecondary>
        )}
      </S.Wrapper>
      <S.CloseBG isOpen={isOpen} onClick={closeModal}></S.CloseBG>
    </>
  )
}

export default WishlistModal
