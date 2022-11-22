import { Story, Meta } from '@storybook/react'
import { CardFolderSliderProps } from 'components/CardFolderSlider'
import FolderSliderProfile from '.'
import { mockFolderCard } from './mock'

export default {
  title: 'FolderSliderProfile',
  component: FolderSliderProfile
} as Meta

export const Default: Story<CardFolderSliderProps> = (args) => (
  <FolderSliderProfile {...args} />
)

Default.args = {
  items: mockFolderCard
}
