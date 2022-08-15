import Link from 'next/link'

import Ribbon from 'components/Ribbon'

import * as S from './styles'
import { CardProps } from 'types/api'

const Card = ({
  slug,
  title,
  coverImage,
  ribbon,
  isExternalCard = false,
  format
}: CardProps) => (
  <S.Wrapper data-cy="game-card">
    {!!ribbon && <Ribbon>{ribbon}</Ribbon>}
    <Link
      href={
        slug && !isExternalCard
          ? `/pack/${slug}`
          : slug && isExternalCard
          ? slug
          : ''
      }
      passHref
    >
      <S.ImageBox
        isSlug={!!slug}
        backgroundUrl={coverImage.url}
        isExternalCard={isExternalCard}
      >
        {!isExternalCard && (
          <S.Content>
            <S.Info>
              <S.Title>{title}</S.Title>
            </S.Info>
          </S.Content>
        )}
      </S.ImageBox>
    </Link>
    {isExternalCard && (
      <Link
        href={
          slug && !isExternalCard
            ? `/pack/${slug}`
            : slug && isExternalCard
            ? slug
            : ''
        }
        passHref
      >
        <a style={{ textDecoration: 'none' }}>
          <S.InfoCard>
            {!!format && <S.Format>{format}</S.Format>}
            <S.TitleExternal>{title}</S.TitleExternal>
          </S.InfoCard>
        </a>
      </Link>
    )}
  </S.Wrapper>
)

export default Card
