import { Story, Meta } from '@storybook/react'
import Mosaic, { MosaicProps } from '.'

export default {
  title: 'Mosaic',
  component: Mosaic
} as Meta

export const Default: Story<MosaicProps> = (args) => <Mosaic {...args} />

Default.args = {
  packs: [
    {
      id: '1',
      coverImage: {
        alternativeText: 'test',
        url: 'https://res.cloudinary.com/dte5oalky/image/upload/v1657244109/comunicaemptica_background_image_Copia_copiar_1f4f13a538.jpg'
      },
      slug: '#',
      title: 'Comunicação empática e assertiva'
    },
    {
      id: '2',
      coverImage: {
        alternativeText: 'test',
        url: 'https://res.cloudinary.com/dte5oalky/image/upload/v1657153651/background_image_gestao_emocional_7558914c4d.jpg'
      },
      slug: '#',
      title: 'Gestão emocional'
    },
    {
      id: '3',
      coverImage: {
        alternativeText: 'test',
        url: 'https://res.cloudinary.com/dte5oalky/image/upload/v1657151772/Lideranca_Parte_3_background_image_Copia_copiar_4cf37be20f.jpg'
      },
      slug: '#',
      title: 'Comunicação empática e assertiva'
    }
  ]
}
