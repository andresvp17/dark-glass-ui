import { Meta, StoryObj } from '@storybook/react'
import { Input } from '../Input/input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'password', 'email', 'date', 'number'],
      control: { type: 'select' }
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Insert your text...'
  }
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: '*********'
  }
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'example@gmail.com'
  }
}

export const Date: Story = {
  args: {
    type: 'date',
    placeholder: 'Insert your date...'
  }
}

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Insert your Number...'
  }
}
