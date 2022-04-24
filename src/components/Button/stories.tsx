import { Story, Meta } from '@storybook/react'
import { HeartOutlineIcon } from 'components/Icons'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <div style={{ maxWidth: '100px' }}>
    <Button {...args}>{args.children}</Button>
  </div>
)

export const Outline: Story<ButtonProps> = (args) => (
  <div style={{ maxWidth: '180px' }}>
    <Button {...args}>{args.children}</Button>
  </div>
)

export const Minimal: Story<ButtonProps> = (args) => (
  <div style={{ maxWidth: '150px' }}>
    <Button {...args}>{args.children}</Button>
  </div>
)

Default.args = {
  minimal: false,
  children: 'Enviar'
}

Outline.args = {
  icon: <HeartOutlineIcon />,
  outline: true,
  children: 'curtir capitulo'
}

Minimal.args = {
  icon: <HeartOutlineIcon />,
  minimal: true,
  children: 'curtir capitulo'
}
