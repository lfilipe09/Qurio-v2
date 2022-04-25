import { Story, Meta } from '@storybook/react'
import QuizBox, { QuizBoxProps } from '.'
import QuizItems from './mock'

export default {
  title: 'QuizBox',
  component: QuizBox
} as Meta

export const Default: Story<QuizBoxProps> = (args) => (
  <div style={{ maxWidth: '400px', margin: '0 auto' }}>
    <QuizBox {...args} />
  </div>
)

Default.args = {
  items: QuizItems
}
