import { Story, Meta } from '@storybook/react/types-6-0'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  layout: 'fullscreen',
  parameters: {
    backgrounds: {
      default: 'qurio-primary'
    }
  }
} as Meta

export const Default: Story = () => <Menu />
