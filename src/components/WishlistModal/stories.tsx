import { Story, Meta } from '@storybook/react'
import WishlistModal, { WishlistModalProps } from '.'

export default {
  title: 'WishlistModal',
  component: WishlistModal
} as Meta

export const Default: Story<WishlistModalProps> = (args) => (
  <WishlistModal {...args} />
)

Default.args = {
  closeModal: () => {
    console.log('test')
  },
  isOpen: false
}
