import { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['solid', 'ghost', 'outline', 'disabled'],
      control: { type: 'radio' }
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Solid: Story = {
  args: {
    children: 'Solid',
    variant: 'solid',
    size: 'md'
  }
}

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
    size: 'md'
  }
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
    size: 'md'
  }
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'disabled',
    size: 'md'
  }
}
