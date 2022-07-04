import { Story, Meta } from '@storybook/react'
import TextChapterOpener, { TextChapterOpenerProps } from '.'

export default {
  title: 'TextChapterOpener',
  component: TextChapterOpener
} as Meta

export const Default: Story<TextChapterOpenerProps> = (args) => (
  <div style={{ maxWidth: '700px', margin: '0 auto' }}>
    <TextChapterOpener {...args} />
  </div>
)

Default.args = {
  title: 'Liderança inspiradora: as novas regras da gestão de pessoas',
  authors: ['Thomaz Lira Gomes'],
  publicationDate: new Date(),
  urlImage: '/img/thumb01.png'
}
