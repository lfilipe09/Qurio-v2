import { Story, Meta } from '@storybook/react/types-6-0'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    backgrounds: {
      default: 'qurio-dark'
    }
  }
} as Meta

export const Basic: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
)
