import { Story, Meta } from '@storybook/react'
import { CopyIcon, HeartOutlineIcon, SlideIcon } from 'components/Icons'
import TextSideColumn, { TextSideColumnProps } from '.'

export default {
  title: 'TextSideColumn',
  component: TextSideColumn
} as Meta

export const Default: Story<TextSideColumnProps> = (args) => (
  <div style={{ maxWidth: '300px', margin: '0 auto' }}>
    <TextSideColumn {...args} />
  </div>
)

Default.args = {
  label: 'Feedback',
  placeholder: 'Compartilhe aqui o que achou deste capitulo...',
  onInput: () => console.log('Enviado!'),
  leftButtonLabel: 'curtir',
  rightButtonLabel: 'copiar referência',
  handleOnLeftButtonClick: () => console.log('Clicou na esquerda!'),
  leftButtonIcon: <HeartOutlineIcon />,
  rightButtonIcon: <CopyIcon />,
  handleOnRightButtonClick: () => console.log('Clicou na direita!'),
  isLeftButtonOutline: true,
  isRightButtonOutline: true,
  bottomButtonLabel: 'adicionar conteúdo ao meu slide',
  bottomButtonIcon: <SlideIcon />,
  urlLinkBottomButtonClick: '/'
}
