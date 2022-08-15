import { Story, Meta } from '@storybook/react'
import { CardProps } from 'types/api'
import Card from '.'

export default {
  title: 'Card',
  component: Card
} as Meta

export const Default: Story<CardProps> = (args) => (
  <div style={{ maxWidth: '300px' }}>
    <Card {...args} />
  </div>
)

Default.args = {
  title: 'Liderança 4.0',
  ribbon: 'EM BREVE',
  slug: '#',
  coverImage: {
    alternativeText: 'example',
    url: 'https://res.cloudinary.com/dte5oalky/image/upload/v1657151772/Lideranca_Parte_3_background_image_Copia_copiar_4cf37be20f.jpg'
  }
}

export const ExternalCard: Story<CardProps> = (args) => (
  <div style={{ maxWidth: '300px' }}>
    <Card {...args} />
  </div>
)

ExternalCard.args = {
  title: 'Comunicação empatica e assertiva Comunicação',
  isExternalCard: true,
  format: 'video',
  slug: '#',
  coverImage: {
    alternativeText: 'example',
    url: 'https://res.cloudinary.com/dte5oalky/image/upload/v1657151772/Lideranca_Parte_3_background_image_Copia_copiar_4cf37be20f.jpg'
  }
}
