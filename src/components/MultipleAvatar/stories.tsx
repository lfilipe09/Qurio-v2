import { Story, Meta } from '@storybook/react'
import MultipleAvatar, { MultipleAvatarProps } from '.'

export default {
  title: 'MultipleAvatar',
  component: MultipleAvatar,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'qurio-dark'
    }
  }
} as Meta

export const Default: Story<MultipleAvatarProps> = (args) => (
  <MultipleAvatar {...args} />
)

Default.args = {
  imgsUrl: [
    'https://res.cloudinary.com/dte5oalky/image/upload/v1659887942/Motivacao_copiar_ba102b30ad.jpg',
    'https://res.cloudinary.com/dte5oalky/image/upload/v1656897700/Lideranca_Parte_1_background_image_Copia_copiar_9cb71d85ac.jpg',
    'https://res.cloudinary.com/dte5oalky/image/upload/v1656894695/Lideranca_Parte_2_background_image_copiar_9a5064cf60.jpg',
    'https://res.cloudinary.com/dte5oalky/image/upload/v1658686028/Marketing_69b82f9cfc.jpg'
  ]
}

export const Empty: Story = () => <MultipleAvatar />
