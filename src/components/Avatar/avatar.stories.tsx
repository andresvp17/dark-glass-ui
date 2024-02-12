import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarFallback, AvatarImage } from '../Avatar/avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Small: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src='https://i.pinimg.com/564x/1c/a5/d6/1ca5d6cede414702a3fd2eeb12bb68b8.jpg'
        size='sm'
        alt='Guts'
      />
      <AvatarFallback>DG</AvatarFallback>
    </Avatar>
  )
}

export const Medium: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src='https://i.pinimg.com/564x/1c/a5/d6/1ca5d6cede414702a3fd2eeb12bb68b8.jpg'
        size='md'
        alt='Guts'
      />
      <AvatarFallback>DG</AvatarFallback>
    </Avatar>
  )
}

export const Large: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src='https://i.pinimg.com/564x/1c/a5/d6/1ca5d6cede414702a3fd2eeb12bb68b8.jpg'
        size='lg'
        alt='Guts'
      />
      <AvatarFallback>DG</AvatarFallback>
    </Avatar>
  )
}
