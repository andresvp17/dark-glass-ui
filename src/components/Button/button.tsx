import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { cn } from '../../utils'

const buttonStyles = cva([
  'font-semibold',
  'transition-colors',
  'rounded-md',
  'w-full'
], {
  variants: {
    variant: {
      solid: 'bg-violet-500 text-white border-transparent md:hover:bg-violet-700',
      ghost: 'md:hover:bg-violet-100 text-violet-950',
      outline: 'border-2 border-violet-500 text-violet-700 md:hover:bg-violet-50',
      disabled: 'bg-violet-950 text-violet-200 cursor-not-allowed'
    },
    size: {
      sm: 'text-sm py-1 px-4',
      md: 'text-base py-2 px-5',
      lg: 'text-lg py-2.5 px-7'
    }
  },
  compoundVariants: [
    {
      variant: 'solid',
      size: 'md'
    },
    {
      variant: 'ghost',
      size: 'md'
    },
    {
      variant: 'outline',
      size: 'md'
    },
    {
      variant: 'disabled',
      size: 'md'
    }
  ],
  defaultVariants: {
    variant: 'solid',
    size: 'md'
  }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonStyles> {
  size?: 'sm' | 'md' | 'lg'
}

export const Button = ({ className, variant, size, ...props }: ButtonProps): React.ReactElement => {
  return (
    <button
      className={cn(buttonStyles({ className, variant, size }))}
      {...props}
    />
  )
}
