import { Story, Meta } from '@storybook/react/types-6-0'
import BannerSlider, { BannerSliderProps } from '.'

import items from './mocks/gestao-emocional/mock-gestao-emocional-01'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
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
