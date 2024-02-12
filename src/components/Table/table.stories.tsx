import { Meta, StoryObj } from '@storybook/react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './table'

const meta: Meta = {
  title: 'Components/Table',
  args: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const TableComponent: Story = {
  storyName: 'Table',
  render: () => (
    <Table>
      <TableCaption>Recently Played Songs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Artist</TableHead>
          <TableHead>Song</TableHead>
          <TableHead>Album</TableHead>
          <TableHead>Release Year</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Lana del Rey</TableCell>
          <TableCell>Honeymoon</TableCell>
          <TableCell>Honeymoon</TableCell>
          <TableCell>2015</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>EXO</TableCell>
          <TableCell>Cream Soda</TableCell>
          <TableCell>EXIST</TableCell>
          <TableCell>2023</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mitski</TableCell>
          <TableCell>My Love Mine All Mine</TableCell>
          <TableCell>The Land Is Inhospitable and So Are We</TableCell>
          <TableCell>2023</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
