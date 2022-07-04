import { Story, Meta } from '@storybook/react/types-6-0'
import BannerSlider, { BannerSliderProps } from '.'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: {},
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '345px', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
