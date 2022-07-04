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
  authors: ['Thomaz Lira Gomes'],
  publicationDate: new Date(),
  backgroundUrl: '/img/background-image.png',
  handleOnClick: () => console.log('em breve mais novidades')
}
