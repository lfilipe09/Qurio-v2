import { Story, Meta } from '@storybook/react'
import TextBoxInput, { TextBoxInputProps } from '.'

export default {
  title: 'TextBoxInput',
  component: TextBoxInput
} as Meta

export const Default: Story<TextBoxInputProps> = (args) => (
  <div style={{ maxWidth: '500px', margin: '0 auto' }}>
    <TextBoxInput {...args} />
  </div>
)

Default.args = {
  label: 'Feedback',
  placeholder: 'Compartilhe aqui o que achou deste capitulo...'
}
