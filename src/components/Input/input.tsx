import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { cn } from '../../utils'

const inputStyles = cva([
  'w-full',
  'border-2',
  'border-violet-300',
  'focus:border-violet-800',
  'transition-colors',
  'placeholder:text-slate-500',
  'py-1.5',
  'px-3',
  'rounded-md',
  'outline-none'
])

interface InputProps extends ComponentProps<'input'>, VariantProps<typeof inputStyles> {}

export const Input: React.FC = ({ type, className, ...props }: InputProps) => {
  return (
    <input
      className={cn(inputStyles({ className }))}
      type={type ?? 'text'}
      {...props}
    />
  )
}
