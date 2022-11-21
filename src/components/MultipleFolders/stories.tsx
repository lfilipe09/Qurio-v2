import { Story, Meta } from '@storybook/react'
import MultipleFolders, { MultipleFoldersProps } from '.'

export default {
  title: 'MultipleFolders',
  component: MultipleFolders,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'qurio-dark'
    }
  }
} as Meta

export const Default: Story<MultipleFoldersProps> = (args) => (
  <MultipleFolders {...args} />
)

Default.args = {
  imgsUrl: [
    'https://res.cloudinary.com/dte5oalky/image/upload/v1659887942/Motivacao_copiar_ba102b30ad.jpg',
    'https://res.cloudinary.com/dte5oalky/image/upload/v1656897700/Lideranca_Parte_1_background_image_Copia_copiar_9cb71d85ac.jpg'
  ]
}

export const Empty: Story = () => <MultipleFolders />
