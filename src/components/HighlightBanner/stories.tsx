import { Story, Meta } from '@storybook/react/types-6-0'
import HighlightBanner from '.'
import { HighlightBannerProps } from '.'

export default {
  title: 'Highlight Banner',
  component: HighlightBanner,
  args: {
    coverImage: {
      url: 'https://res.cloudinary.com/dte5oalky/image/upload/v1660506421/highlight_cover_metodologia_agil_copiar_b3de99355a.png',
      alternativeText: 'example'
    },
    pack: {
      title: `Lideranca 4.0`,
      slug: '#'
    },
    posts: [
      {
        id: '1',
        title: 'Como montar um canvas de modelo de negócios',
        slug: '#',
        formats: ['video']
      },
      {
        id: '1',
        title: 'Os 12 princípios do sistema de geração de valor',
        slug: '#',
        formats: ['video']
      },
      {
        id: '1',
        title: 'Ágil ou tradicional: com que roupa eu vou?',
        slug: '#',
        formats: ['video']
      }
    ],
    readingHours: 1,
    readingMinutes: 40
  }
} as Meta

export const Default: Story<HighlightBannerProps> = (args) => (
  <div style={{ maxWidth: '900px', paddingTop: '5rem', margin: '0 auto' }}>
    <HighlightBanner {...args} />
  </div>
)
