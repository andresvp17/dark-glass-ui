import { VariantProps, cva } from 'class-variance-authority'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils'

const alertStyles = cva(
  'w-full relative rounded-lg border-2 border-violet-800 px-4 py-3 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: ''
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export const Alert = forwardRef<
HTMLDivElement,
HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertStyles>
>(({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(alertStyles({ className, variant }))}
      {...props}
    />
  )
})

export const AlertTitle = forwardRef<
HTMLParagraphElement,
HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h5
      ref={ref}
      className={cn('font-semibold text-lg tracking-tight', className)}
      {...props}
    />
  )
})

export const AlertDescription = forwardRef<
HTMLParagraphElement,
HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('tracking-tight', className)}
      {...props}
    />
  )
})
