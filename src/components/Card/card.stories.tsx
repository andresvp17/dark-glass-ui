import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'

const meta: Meta = {
  title: 'Components/Card',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultCard: Story = {
  render: () => (
    <Card className='max-w-[400px]'>
      <CardHeader>
        <CardTitle>Appreciation Card!</CardTitle>
        <CardDescription>Get to see a great good guy here that brings joy and happiness.</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col items-center'>
        <h2>Look how he smiles ❤️</h2>
        <img
          className='w-[150px] aspect-square object-cover rounded-md'
          src='https://i.pinimg.com/736x/53/f2/c9/53f2c99bb164cf29ef031860fc038805.jpg'
          alt='Smiley Naruto'
        />
      </CardContent>
      <CardFooter>
        <Button variant='solid' size='md'>Click me!</Button>
      </CardFooter>
    </Card>
  )
}
