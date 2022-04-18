import { Story, Meta } from '@storybook/react'
import Summary, { SummaryProps } from '.'

export default {
  title: 'Summary',
  component: Summary
} as Meta

export const Default: Story<SummaryProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Summary {...args} />
  </div>
)

Default.args = {
  topics: [
    'Liderança inspiradora',
    'O futuro do anywhere office',
    'Liderança remota: 3 fatores para o sucesso de equipes à distância',
    'Metaverso: por onde começar',
    'Mindset de crescimento: como identificar agentes da mudança ',
    'Profissionais T-shaped'
  ],
  focusedIndex: 0,
  isManySections: true,
  numberOfSection: '1'
}
