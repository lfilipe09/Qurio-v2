import { Story, Meta } from '@storybook/react'
import ChapterHeader, { ChapterHeaderProps } from '.'

export default {
  title: 'ChapterHeader',
  component: ChapterHeader
} as Meta

export const Default: Story<ChapterHeaderProps> = (args) => (
  <div
    style={{
      maxWidth: '725px',
      justifyContent: 'right',
      margin: '0 auto',
      borderRadius: '30px',
      backgroundColor: '#7616FA',
      padding: '20px'
    }}
  >
    <ChapterHeader {...args} />
  </div>
)

Default.args = {
  title: 'Liderança remota:',
  numberOfChapter: '1',
  subtitle: '3 fatores para o sucesso de equipes à distância',
  imageUrl: '/img/chapter01.png'
}
