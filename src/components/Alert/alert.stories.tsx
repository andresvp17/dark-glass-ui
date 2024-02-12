import { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertDescription, AlertTitle } from './alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default'
  },
  render: () => (
    <Alert>
      <AlertTitle>Be Careful!</AlertTitle>
      <AlertDescription>
        You're using right now a really cool and awesome alert component.
      </AlertDescription>
    </Alert>
  )
}
