import Link from 'next/link'

import Ribbon from 'components/Ribbon'

import * as S from './styles'
import { CardProps } from 'types/api'

const Card = ({ slug, title, coverImage, ribbon }: CardProps) => (
  <S.Wrapper data-cy="game-card">
    {!!ribbon && <Ribbon>{ribbon}</Ribbon>}
    <Link href={`/pack/${slug}`} passHref>
      <S.ImageBox backgroundUrl={coverImage.url}>
        <S.Content>
          <S.Info>
            <S.Title>{title}</S.Title>
          </S.Info>
        </S.Content>
      </S.ImageBox>
    </Link>
  </S.Wrapper>
)

export default Card
