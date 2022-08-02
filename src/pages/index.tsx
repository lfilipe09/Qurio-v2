import client from 'graphql/client'
import { GET_HOMEPAGE } from 'graphql/queries/Homepage/getHome'
import { GetStaticProps } from 'next'
import Home, { HomePageProps } from 'templates/Home'
import { HeroBannerAPIProps, PackCardAPIProps } from 'types/api'

export default function HomePage(props: HomePageProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const homeData = await client.request(GET_HOMEPAGE)

  const home = homeData.homePage.data.attributes

  const banners = home.hero_carousel.banner.map(
    (heroBanner: HeroBannerAPIProps) => ({
      id: heroBanner.id,
      ribbon: heroBanner.ribbon,
      coverImage: {
        url: heroBanner.image.data.attributes.url,
        alternativeText: heroBanner.image.data.attributes.alternativeText
      },
      pack: {
        title: heroBanner.pack.data.attributes.title,
        slug: heroBanner.pack.data.attributes.slug
      },
      posts: heroBanner.pack.data.attributes.posts.data.map((post) => ({
        id: post.id,
        title: post.attributes.title,
        slug: post.attributes.slug,
        formats: post.attributes.formats.data.map(
          (format) => format.attributes.name
        )
      })),
      readingHours: heroBanner.pack.data.attributes.reading_hours,
      readingMinutes: heroBanner.pack.data.attributes.reading_minutes
    })
  )

  const packCard = home.simple_carousel[0].pack_card.map(
    (packCard: PackCardAPIProps) => ({
      id: packCard.pack.data.id,
      slug: packCard.pack.data.attributes.slug,
      title: packCard.pack.data.attributes.title,
      coverImage: {
        url: packCard.pack.data.attributes.cover.data.attributes.url,
        alternativeText:
          packCard.pack.data.attributes.cover.data.attributes.alternativeText
      },
      ribbon: packCard.ribbon
    })
  )

  return {
    revalidate: 60,
    props: {
      heroCarousel: {
        banners
      },
      simpleCarousel: {
        title: home.simple_carousel[0].title,
        id: home.simple_carousel[0].id,
        packCard
      }
    }
  }
}
