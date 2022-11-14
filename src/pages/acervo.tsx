import client from 'graphql/client'
import { GET_ALL_PACK_CARDS } from 'graphql/queries/getPack'
import { GetStaticProps } from 'next'
import AcervoTemplate, { AcervoTemplateProps } from 'templates/Acervo'
import { PostCardSlugAPI } from 'types/api'

export default function Acervo(props: AcervoTemplateProps) {
  return <AcervoTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { packs } = await client.request(GET_ALL_PACK_CARDS, {
    limit: 100
  })

  const cards = packs.data.map((pack: PostCardSlugAPI) => {
    return {
      id: pack.id,
      slug: pack.attributes.slug,
      title: pack.attributes.title,
      coverImage: {
        url: pack.attributes.cover.data.attributes.url,
        alternativeText: pack.attributes.cover.data.attributes.alternativeText
      }
    }
  })

  return {
    revalidate: 60,
    props: {
      cards
    }
  }
}
