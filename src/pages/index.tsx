import client from 'graphql/client'
import { GET_HOMEPAGE, GET_LAST_PACKS } from 'graphql/queries/Homepage/getHome'
import { GetStaticProps } from 'next'
import Home, { HomePageProps } from 'templates/Home'
import {
  BannerPostAPIProps,
  ExternalPackAPIProps,
  HeroBannerAPIProps,
  LastPackAPIProps,
  PackCardAPIProps,
  UpcomingPackAPIProps
} from 'types/api'

export default function HomePage(props: HomePageProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const homeData = await client.request(GET_HOMEPAGE)

  const lastPacksData = await client.request(GET_LAST_PACKS)

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

  const highlightPostCard =
    home.highlight[0].pack.data.attributes.posts.data.map(
      (packCard: BannerPostAPIProps) => ({
        id: packCard.id,
        title: packCard.attributes.title,
        slug: packCard.attributes.slug,
        formats: packCard.attributes.formats.data.map(
          (format) => format.attributes.name
        )
      })
    )

  const upcomingPackCard = home.upcoming_carousel[0].upcoming_pack.map(
    (packCard: UpcomingPackAPIProps) => ({
      id: packCard.id,
      title: packCard.title,
      coverImage: {
        url: packCard.cover.data.attributes.url,
        alternativeText: packCard.cover.data.attributes.alternativeText
      },
      ribbon: packCard.ribbon
    })
  )

  const lastPacksMosaicData = lastPacksData.packs.data.map(
    (lastPack: LastPackAPIProps) => ({
      id: lastPack.id,
      title: lastPack.attributes.title,
      slug: lastPack.attributes.slug,
      coverImage: {
        url: lastPack.attributes.cover.data.attributes.url,
        alternativeText:
          lastPack.attributes.cover.data.attributes.alternativeText
      }
    })
  )

  const externalPackCard = home.card_carousel[0].external_pack_card.map(
    (packCard: ExternalPackAPIProps) => ({
      id: packCard.id,
      title: packCard.title,
      format: packCard.format,
      slug: packCard.link,
      coverImage: {
        url: packCard.cover.data.attributes.url,
        alternativeText: packCard.cover.data.attributes.alternativeText
      }
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
      },
      highlight: {
        title: home.highlight[0].title,
        coverImage: {
          url: home.highlight[0].cover.data.attributes.url,
          alternativeText:
            home.highlight[0].cover.data.attributes.alternativeText
        },
        pack: {
          title: home.highlight[0].pack.data.attributes.title,
          slug: home.highlight[0].pack.data.attributes.slug
        },
        posts: highlightPostCard,
        readingHours: home.highlight[0].pack.data.attributes.reading_hours,
        readingMinutes: home.highlight[0].pack.data.attributes.reading_minutes
      },
      upcomingCarousel: {
        title: home.upcoming_carousel[0].title,
        id: home.upcoming_carousel[0].id,
        packCard: upcomingPackCard
      },
      lastPacksMosaic: lastPacksMosaicData,
      externalCarousel: {
        title: home.card_carousel[0].title,
        id: home.card_carousel[0].id,
        packCard: externalPackCard
      }
    }
  }
}
