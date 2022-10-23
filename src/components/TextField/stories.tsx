import { Story, Meta } from '@storybook/react'
import { Search } from '@styled-icons/feather'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField
} as Meta

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />

Default.args = {
  icon: <Search />,
  placeholder: 'Pesquisar'
}

export const Minimal: Story<TextFieldProps> = (args) => <TextField {...args} />

Minimal.args = {
  minimal: true,
  placeholder: 'Nome'
}
