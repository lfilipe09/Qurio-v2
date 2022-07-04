import { Story, Meta } from '@storybook/react'
import { SurveyProps } from 'types/api'
import Survey from '.'

export default {
  title: 'Survey',
  component: Survey
} as Meta

export const Default: Story<SurveyProps> = (args) => (
  <div style={{ maxWidth: '400px', margin: '0 auto' }}>
    <Survey {...args} />
  </div>
)

Default.args = {}
