import Banner from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import Header from 'components/Header'
import MediaMatch from 'components/MediaMatch'
import Menu from 'components/Menu'
import * as S from './styles'
import { PackProps } from 'types/api'
import { useRouter } from 'next/router'

const Pack = ({
  authors,
  backgroundUrl,
  chaptersSlug,
  description,
  slug,
  posts,
  readingHours,
  readingMinutes,
  release,
  title
}: PackProps) => {
  const routes = useRouter()
  const { push } = routes

  return (
    <S.Wrapper>
      <MediaMatch lessThan={'medium'}>
        <Menu title={title} description={description} />
      </MediaMatch>
      <S.HeaderWrapper>
        <Header
          authors={authors}
          backgroundUrl={backgroundUrl}
          previousPack={
            chaptersSlug && chaptersSlug.indexOf(slug) > 0
              ? chaptersSlug.indexOf(slug) !== 0 && chaptersSlug.length > 1
                ? chaptersSlug[chaptersSlug.indexOf(slug) - 1]
                : undefined
              : undefined
          }
          nextPack={
            chaptersSlug && chaptersSlug.indexOf(slug) < chaptersSlug.length - 1
              ? chaptersSlug.indexOf(slug) !== chaptersSlug.length - 1
                ? chaptersSlug[chaptersSlug.indexOf(slug) + 1]
                : undefined
              : undefined
          }
          handleOnClick={() => console.log('pass')}
          publicationDate={new Date(release)}
          timeReading={`${readingHours
            .toString()
            .padStart(2, '0')}:${readingMinutes.toString().padStart(2, '0')}`}
          title={title}
        />
      </S.HeaderWrapper>
      <S.BannerSliderWrapper>
        <S.MenuBannerWrapper>
          <MediaMatch greaterThan={'medium'}>
            <Menu title={title} description={description} />
          </MediaMatch>
          <MediaMatch lessThan={'medium'}>
            <BannerSlider posts={posts} />
          </MediaMatch>

          <S.BannersWrapper>
            {posts.map((post) => (
              <Banner
                key={post.id}
                {...post}
                handleOnClick={() => {
                  push(`/pack/post/${post.slug}`)
                }}
              />
            ))}
          </S.BannersWrapper>
        </S.MenuBannerWrapper>
      </S.BannerSliderWrapper>
    </S.Wrapper>
  )
}

export default Pack
