import Home from 'templates/Home'
import bannerItems from '../../components/BannerSlider/mocks/transformacao-digital/mock-transformacao-digital-01'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Index() {
  const { data } = useSWR('/api/get-likes', fetcher)

  if (!data) return 'Loading...'

  const Pageprops = {
    HeaderTitle: 'Transformação digital',
    author: 'Qurio powered by HSM',
    publicationDate: '2022-04-24T15:27:03.044Z',
    backgroundUrl:
      '/img/packs/transformacao-digital/background-image-transformacao-digital-parte01.jpg',
    items: bannerItems,
    chaptersLikes: [
      data.chapterOneLikes,
      data.chapterTwoLikes,
      data.chapterThreeLikes
    ]
  }
  return <Home {...Pageprops} />
}
