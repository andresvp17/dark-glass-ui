import { Meta, StoryObj } from '@storybook/react'
import { Switch } from '../Switch/switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const SwitchElement: Story = {}
