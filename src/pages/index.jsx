import Home from 'templates/Home'
import bannerItems from '../components/BannerSlider/mocks/lideranca/mock-lideranca-01'
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
      '/img/packs/lideranca/01/background-image-lideranca-parte01.jpg',
    items: bannerItems,
    chaptersLikes: [
      data.chapterOneLikes,
      data.chapterTwoLikes,
      data.chapterThreeLikes
    ]
  }
  return <Home {...Pageprops} />
}

// export async function getStaticProps() {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/get-likes`,
//     {
//       method: 'GET'
//     }
//   )
//   const data = await response.json()

//   return {
//     revalidate: 10,
//     props: {
//       HeaderTitle: 'Liderança 4.0',
//       author: 'Thomaz Lira Gomes',
//       publicationDate: '2022-04-24T15:27:03.044Z',
//       backgroundUrl: '/img/background-image.png',
//       items: bannerItems,
//       chaptersLikes: [
//         data.chapterOneLikes,
//         data.chapterTwoLikes,
//         data.chapterThreeLikes
//       ]
//     }
//   }
// }
