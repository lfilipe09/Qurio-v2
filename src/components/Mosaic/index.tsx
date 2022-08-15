import Link from 'next/link'
import * as S from './styles'

export type PackMosaic = {
  id: string
  title: string
  slug: string
  coverImage: {
    url: string
    alternativeText: string
  }
}

export type MosaicProps = {
  packs: PackMosaic[]
}

const Mosaic = ({ packs }: MosaicProps) => (
  <S.Wrapper>
    <S.MosaicWrapper>
      {packs.map((pack, index) => {
        return (
          index === 0 && (
            <Link href={`/pack/${pack.slug}`} passHref>
              <a style={{ textDecoration: 'none' }}>
                <S.HeroImageCard backgroundUrl={pack.coverImage.url}>
                  <S.Subheading>PACK</S.Subheading>
                  <S.HeroTitle>{pack.title}</S.HeroTitle>
                </S.HeroImageCard>
              </a>
            </Link>
          )
        )
      })}
      <S.SideCardsWrapper>
        {packs.map((pack, index) => {
          return (
            index < 3 &&
            index !== 0 && (
              <S.SideCardWrapper>
                <Link href={`/pack/${pack.slug}`} passHref>
                  <a>
                    <S.ImageContainer backgroundUrl={pack.coverImage.url} />
                  </a>
                </Link>
                <S.ContentSideWrapper>
                  <S.Subheading>PACK</S.Subheading>
                  <Link href={`/pack/${pack.slug}`} passHref>
                    <S.Title>{pack.title}</S.Title>
                  </Link>
                </S.ContentSideWrapper>
              </S.SideCardWrapper>
            )
          )
        })}
      </S.SideCardsWrapper>
    </S.MosaicWrapper>
  </S.Wrapper>
)

export default Mosaic
