import Button from '../../components/Button'
import * as S from './styles'
import { HeroPostsProps } from 'types/api'
import MediaMatch from 'components/MediaMatch'
import { ClockIcon } from 'components/Icons'

export type HighlightBannerProps = {
  id?: string
  coverImage: {
    url: string
    alternativeText: string
  }
  pack: {
    title: string
    slug: string
  }
  posts: HeroPostsProps[]
  readingHours: number
  readingMinutes: number
}

const HighlightBanner = ({
  coverImage,
  pack,
  posts,
  readingHours,
  readingMinutes
}: HighlightBannerProps) => (
  <>
    <S.Wrapper>
      <S.ContentWrapper>
        <S.ImageWrapper>
          <S.Image src={coverImage.url} alt={coverImage.alternativeText} />
        </S.ImageWrapper>
        <S.InfoWrapper>
          <MediaMatch greaterThan="medium">
            <S.Title>{pack.title}</S.Title>
            <S.PostWrapper>
              {posts.map(
                (post, index) =>
                  index <= 2 && (
                    <S.ContentPostWrapper
                      href={`pack/post/${post.slug}`}
                      target={'_blank'}
                      key={post.id}
                    >
                      <S.Format>{post.formats[0]}</S.Format>
                      <S.PostTitle>{post.title}</S.PostTitle>
                    </S.ContentPostWrapper>
                  )
              )}
            </S.PostWrapper>
          </MediaMatch>
          <MediaMatch greaterThan="medium">
            <S.Footer>
              <S.TimeContainer>
                <S.Icon>
                  <ClockIcon />
                </S.Icon>
                <p>
                  {`${readingHours.toString().padStart(2, '0')}:${readingMinutes
                    .toString()
                    .padStart(2, '0')}`}{' '}
                  de leitura
                </p>
              </S.TimeContainer>
              <Button
                as="a"
                side={'right'}
                href={`/pack/${pack.slug}`}
                target={'_blank'}
              >
                Acessar o pack
              </Button>
            </S.Footer>
          </MediaMatch>
        </S.InfoWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
    <MediaMatch lessThan="medium">
      <S.WrapperContentBelow>
        <S.Title>{pack.title}</S.Title>
        <S.TimeContainer>
          <S.Icon>
            <ClockIcon />
          </S.Icon>
          <p>
            {`${readingHours.toString().padStart(2, '0')}:${readingMinutes
              .toString()
              .padStart(2, '0')}`}{' '}
            de leitura
          </p>
        </S.TimeContainer>
        <Button
          as="a"
          side={'right'}
          href={`/pack/${pack.slug}`}
          target={'_blank'}
        >
          Acessar o pack
        </Button>
      </S.WrapperContentBelow>
    </MediaMatch>
  </>
)

export default HighlightBanner
