import { Story, Meta } from '@storybook/react'
import CardFolder, { CardsFolderProps } from '.'

export default {
  title: 'CardFolder',
  component: CardFolder
} as Meta

export const Default: Story<CardsFolderProps> = (args) => (
  <CardFolder {...args} />
)

Default.args = {
  amount: 31,
  creationDate: new Date(),
  imgsUrl: [
    'https://res.cloudinary.com/dte5oalky/image/upload/v1657151772/Lideranca_Parte_3_background_image_Copia_copiar_4cf37be20f.jpg',
    'https://res.cloudinary.com/dte5oalky/image/upload/v1657151772/Lideranca_Parte_3_background_image_Copia_copiar_4cf37be20f.jpg'
  ],
  title: 'Workshop 31/11',
  url: 'https://example.com/'
}
