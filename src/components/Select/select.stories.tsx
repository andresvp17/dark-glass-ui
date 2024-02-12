import { Meta, StoryObj } from '@storybook/react'
import { Select } from '../Select/select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select>
      <Select.Item value='naruto'>
        Naruto
      </Select.Item>
      <Select.Item value='Kakashi'>
        kakashi
      </Select.Item>
      <Select.Item value='itachi'>
        Itachi
      </Select.Item>
      <Select.Item value='sasuke'>
        Sasuke
      </Select.Item>
      <Select.Item value='madara'>
        Madara
      </Select.Item>
    </Select>
  )
}
