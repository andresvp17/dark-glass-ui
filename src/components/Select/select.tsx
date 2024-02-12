import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { cn } from '../../utils'

const selectStyles = cva(
  'w-[200px] h-10 inline-flex items-center justify-center rounded-md focus:outline-none border-2 bg-force-violet-100 border-force-violet-300 focus:border-force-violet-800 font-semibold shadow-sm transition-colors'
)

type SelectProps = ComponentProps<'select'> & VariantProps<typeof selectStyles>
type SelectItemProps = ComponentProps<'option'>

export const Select = ({ className, ...props }: SelectProps): React.ReactElement => {
  return (
    <select className={cn(selectStyles({ className }))} {...props} />
  )
}

Select.Item = ({ className, ...props }: SelectItemProps) => {
  return (
    <option className={cn('bg-force-violet-950 text-white transition-colors hover:bg-force-violet-700', className)} {...props} />
  )
}
