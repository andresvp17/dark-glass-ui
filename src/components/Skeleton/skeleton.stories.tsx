import { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const SkeletonComment: Story = {
  render: () => (
    <div className='flex items-center gap-3'>
      <Skeleton className='h-12 w-12 rounded-full' />
      <div className='space-y-2'>
        <Skeleton className='h-5 w-[200px]' />
        <Skeleton className='h-5 w-[180px]' />
      </div>
    </div>
  )
}

export const SkeletonCard: Story = {
  render: () => (
    <div className='flex flex-col gap-3'>
      <Skeleton className='h-32 w-64' />
      <div className='space-y-2'>
        <Skeleton className='h-5 w-[200px]' />
        <Skeleton className='h-5 w-[180px]' />
      </div>
    </div>
  )
}
