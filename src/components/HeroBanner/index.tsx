import Ribbon from '../Ribbon'
import Button from '../../components/Button'
import * as S from './styles'
import { HeroBannerProps } from 'types/api'
import MediaMatch from 'components/MediaMatch'
import { ClockIcon } from 'components/Icons'
import { ChevronRight } from '@styled-icons/material-outlined'

const HeroBanner = ({
  coverImage,
  pack,
  ribbon,
  posts,
  readingHours,
  readingMinutes
}: HeroBannerProps) => (
  <>
    <S.Wrapper>
      {!!ribbon && <Ribbon>{ribbon}</Ribbon>}
      <S.ContentWrapper>
        <S.ImageWrapper>
          <S.Image src={coverImage.url} alt={coverImage.alternativeText} />
        </S.ImageWrapper>
        <S.InfoWrapper>
          <S.Heading>PACK</S.Heading>
          <S.Title>{pack.title}</S.Title>
          <MediaMatch greaterThan="medium">
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
          <S.Footer>
            <MediaMatch greaterThan="medium">
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
            </MediaMatch>
            <Button
              as="a"
              minimal={true}
              side={'right'}
              icon={<ChevronRight />}
              href={`/pack/${pack.slug}`}
              target={'_blank'}
            >
              Acessar o pack
            </Button>
          </S.Footer>
        </S.InfoWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  </>
)

export default HeroBanner
