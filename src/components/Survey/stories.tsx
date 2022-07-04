import { Story, Meta } from '@storybook/react'
import QuizPoint, { QuizPointProps } from '.'
import QuizItems from './mock'

export default {
  title: 'QuizPoint',
  component: QuizPoint
} as Meta

export const Default: Story<QuizPointProps> = (args) => (
  <div style={{ maxWidth: '400px', margin: '0 auto' }}>
    <QuizPoint {...args} />
  </div>
)

Default.args = {
  items: QuizItems
}
