import Home, { HomeTemplateProps } from 'templates/Home'
import bannerItems from '../components/BannerSlider/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    revalidate: 10,
    props: {
      HeaderTitle: 'Liderança 4.0',
      author: 'Thomaz Lira Gomes',
      publicationDate: '2022-04-24T15:27:03.044Z',
      backgroundUrl: '/img/background-image.png',
      items: bannerItems
    }
  }
}
