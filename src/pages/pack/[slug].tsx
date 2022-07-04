import client from 'graphql/client'
import {
  GET_GROUP_PACK_BY_SLUG,
  GET_PACK_BY_SLUG
} from 'graphql/queries/getPack'
import { GetServerSideProps } from 'next'
import Pack from 'templates/Pack'
import { Formats, PackInsideGroup, PackProps, PostInsideGroup } from 'types/api'

export default function PackPage(props: PackProps) {
  return <Pack {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
    imageUrl: `${process.env.NEXT_PUBLIC_API_URL}${post.attributes.cover.data.attributes.url}`,
    imageAlt: post.attributes.cover.data.attributes.alternativeText,
    formats: post.attributes.formats.data.map(
      (format) => format.attributes.name
    )
  }))

  return {
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
      backgroundUrl: `${process.env.NEXT_PUBLIC_API_URL}${pack.cover.data.attributes.url}`,
      posts: posts
    }
  }
}
