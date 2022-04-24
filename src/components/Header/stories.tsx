import { Story, Meta } from '@storybook/react'
import Header, { HeaderProps } from '.'

export default {
  title: 'Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'qurio-light'
    }
  }
} as Meta

export const Default: Story<HeaderProps> = (args) => (
  <div style={{ maxWidth: '685px', height: '691px', margin: '0 auto' }}>
    <Header {...args} />
  </div>
)

Default.args = {
  title: 'Liderança 4.0',
  author: 'Thomaz Lira Gomes',
  publicationDate: new Date(),
  timeReading: 10000000,
  backgroundUrl: '/img/background-image.png'
}
