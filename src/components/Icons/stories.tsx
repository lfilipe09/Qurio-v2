import { createElement } from 'react'
import { Story, Meta } from '@storybook/react'
import * as Icons from './'

const meta: Meta = {
  title: 'Components/Icons',
  parameters: {
    backgrounds: {
      default: 'qurio-dark'
    }
  }
}

export default meta

// ## Testing

// eslint-disable-next-line @typescript-eslint/require-array-sort-compare
const icons = Object.keys(Icons).sort()

export const Template: Story = () => {
  return (
    <div style={{ gridColumn: 2, gridGap: 2 }}>
      {icons.map((iconName) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const icon = Icons[iconName]

        return (
          <li
            key={iconName}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '150px',
              height: '80px',
              borderRadius: '10px',
              padding: 4
            }}
          >
            {icon &&
              createElement(icon, {
                w: '24px',
                h: '24px'
              })}
          </li>
        )
      })}
    </div>
  )
}
