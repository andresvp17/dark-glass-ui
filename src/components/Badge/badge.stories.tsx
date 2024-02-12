import { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../Badge/badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Bagde',
  component: Badge,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'outline'],
      control: { type: 'radio' }
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Badge',
    variant: 'secondary'
  }
}

export const Outline: Story = {
  args: {
    children: 'Badge',
    variant: 'outline'
  }
}
