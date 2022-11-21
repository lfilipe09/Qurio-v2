import React from 'react'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Spinner from 'components/Spinner'
import { useState } from 'react'
import WishlistModal from 'components/WishlistModal'
import { mockWishlist } from './mock'
import * as S from './styles'

type WishlistButtonProps = {
  hasText?: boolean
}

const WishlistButton = ({ hasText }: WishlistButtonProps) => {
  const [loading, setLoading] = useState(false)
  const [isInWishlist] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    setIsModalOpen(true)
    setLoading(false)
  }

  return (
    <S.Wrapper>
      <Button
        style={{ position: 'absolute', top: '0', right: '0' }}
        animated={true}
        icon={
          loading ? (
            <Spinner />
          ) : !isInWishlist ? (
            <FavoriteBorder
              aria-label={
                isInWishlist ? 'Add to Wishlist' : 'Remove from Wishlist'
              }
            />
          ) : (
            <Favorite
              aria-label={
                isInWishlist ? 'Add to Wishlist' : 'Remove from Wishlist'
              }
            />
          )
        }
        color={!isInWishlist ? 'black' : 'primary'}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault()
          handleClick()
        }}
      >
        {hasText && !isInWishlist
          ? 'Add to Wishlist'
          : hasText && isInWishlist && 'Remove from Wishlist'}
      </Button>
      <WishlistModal
        isOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false)
        }}
        wishlistPacks={mockWishlist}
      />
    </S.Wrapper>
  )
}
export default WishlistButton
