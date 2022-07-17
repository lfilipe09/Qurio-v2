import client from 'graphql/client'
import {
  GET_GROUP_PACK_BY_SLUG,
  GET_PACK_BY_SLUG,
  GET_PACK_SLUGS
} from 'graphql/queries/getPack'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Pack from 'templates/Pack'
import {
  Formats,
  PackInsideGroup,
  PackProps,
  PostInsideGroup,
  PostSlugAPI
} from 'types/api'

export default function PackPage(props: PackProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null
  return <Pack {...props} />
}

// gerar em build time (/game/bla, /bame/foo ...)
export async function getStaticPaths() {
  const { packs } = await client.request(GET_PACK_SLUGS, {
    limit: 100
  })

  const paths = packs.data.map((pack: PostSlugAPI) => {
    return {
      params: { slug: pack.attributes.slug }
    }
  })

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const packData = await client.request(GET_PACK_BY_SLUG, {
    filter: `${params?.slug}`
  })

  const pack = packData.packs.data[0].attributes

  const groupPackData = await client.request(GET_GROUP_PACK_BY_SLUG, {
    filter: `${pack?.group_pack.data?.attributes.slug}`
  })

  const groupPack = groupPackData.groupPacks.data[0]?.attributes.packs.data

  const groupPackSlugs = groupPack?.map(
    (pack: PackInsideGroup) => pack.attributes.slug
  )

  const posts = pack?.posts.data.map((post: PostInsideGroup) => ({
    id: post.id,
    slug: post.attributes.slug,
    title: post.attributes.title,
    imageUrl: post.attributes.cover.data.attributes.url,
    imageAlt: post.attributes.cover.data.attributes.alternativeText,
    formats: post.attributes.formats.data.map(
      (format) => format.attributes.name
    )
  }))

  return {
    revalidate: 60,
    props: {
      title: pack.title,
      slug: pack.slug,
      chaptersSlug: groupPackSlugs?.length > 0 ? groupPackSlugs : null,
      description: pack.description,
      release: new Date(pack.release).toString(),
      authors:
        pack.authors.data?.map((author: Formats) => author.attributes.name) ??
        null,
      readingHours: pack.reading_hours,
      readingMinutes: pack.reading_minutes,
      backgroundUrl: pack.cover.data.attributes.url,
      posts: posts
    }
  }
}
