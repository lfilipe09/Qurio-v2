import TextContentMock01 from 'components/TextContent/mock01'
import TextContentMock02 from 'components/TextContent/mock02'
import TextContentMock03 from 'components/TextContent/mock03'

export default [
  {
    img: '/img/thumb01.png',
    title: 'Liderança para a nova economia',
    format: 'Video',
    content: TextContentMock01.content,
    publicationDate: '2022-04-24T15:27:03.044Z',
    reference:
      'SOBREMONE, Nome. Tema da revista. Assunto da revista, Local, v. 40, n. 1, p. 85-98, jan./abr. ano. Disponível em: http:www.example.com. Acesso em: 20 jan. 2016.',
    link: 'Barreto Diego. HSM Experience - Os fundamentos da inovação. Fevereiro, 2022. Disponível em: https://experience.hsm.com.br/posts/hsm-expo-21-diego-barreto',
    imgDesktop: ['/img/content-01-desktop.png'],
    imgMobile: ['/img/content-01-mobile.png'],
    quiz: false,
    buttonUrl: 'https://bit.ly/3MHlr4u'
  },
  {
    img: '/img/thumb02.png',
    title: 'Mindset de crescimento: como identificar agentes da mudança',
    format: 'quiz',
    content: TextContentMock02.content,
    publicationDate: '2022-04-24T15:27:03.044Z',
    reference:
      'Salles Gomes, Adriana. HSM Management#151 - Zeitgeist: o segredo mais bem guardado das empresas de sucesso. Abril, 2022. Seção TBT - Encontre o mindset de crescimento em sua empresa - Páginas 94 e 95',
    link: 'https://docs.google.com/presentation/d/1BQ07SKZMt7CbiHgeiu2PvFmQVs753Or4bFG35Bex-Go/edit?usp=sharing',
    imgDesktop: ['/img/content-02-desktop.png'],
    imgMobile: ['/img/content-02-mobile.png'],
    quiz: true,
    buttonUrl: 'https://bit.ly/3s1jXdv'
  },
  {
    img: '/img/thumb03.png',
    title: 'O futuro do anywhere office',
    format: 'infográfico',
    content: TextContentMock03.content,
    publicationDate: '2022-04-24T15:27:03.044Z',
    reference:
      'HSM e WeWork. Pesquisa Redefinindo Modelos de Trabalho na América Latina - Março, 2022. Páginas 4-8.',
    link: 'https://docs.google.com/presentation/d/1uNJZDXV09lyGH2ow2GvFmC6u-jjORwpaA8EQcycHDfU/edit?usp=sharing',
    imgDesktop: [
      '/img/content-03.1-desktop.png',
      '/img/content-03.2-desktop.png',
      '/img/content-03.3-desktop.png'
    ],
    imgMobile: [
      '/img/content-03.1-mobile.png',
      '/img/content-03.2-mobile.png',
      '/img/content-03.3-mobile.png'
    ],
    quiz: false,
    buttonUrl: 'https://bit.ly/3s2NELw'
  }
]
