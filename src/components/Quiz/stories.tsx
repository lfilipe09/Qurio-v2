import { Story, Meta } from '@storybook/react'
import { QuizProps } from 'types/api'
import Quiz from '.'

export default {
  title: 'QuizBox',
  component: Quiz
} as Meta

export const Default: Story<QuizProps> = (args) => (
  <div style={{ maxWidth: '400px', margin: '0 auto' }}>
    <Quiz {...args} />
  </div>
)

Default.args = {}
