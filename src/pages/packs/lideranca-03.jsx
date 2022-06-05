import Home from 'templates/Home'
import bannerItems from '../../components/BannerSlider/mocks/lideranca/mock-lideranca-03'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Index() {
  const { data } = useSWR('/api/get-likes', fetcher)

  if (!data) return 'Loading...'

  const Pageprops = {
    HeaderTitle: 'Liderança 4.0',
    author: 'Qurio powered by HSM',
    publicationDate: '2022-04-24T15:27:03.044Z',
    backgroundUrl:
      '/img/packs/lideranca/03/background-image-lideranca-parte03.jpg',
    items: bannerItems,
    chaptersLikes: [
      data.chapterOneLikes,
      data.chapterTwoLikes,
      data.chapterThreeLikes
    ]
  }
  return <Home {...Pageprops} />
}
