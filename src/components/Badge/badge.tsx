import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { cn } from '../../utils'

const badgeStyles = cva(
  'px-2.5 py-0.5 inline text-center text-xs font-semibold transition-colors rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-violet-400 text-white md:hover:bg-violet-800',
        secondary: 'bg-violet-900 text-white md:hover:bg-violet-950',
        outline: 'border-2 border-violet-600 text-violet-600'
      }
    }
  }
)

type BadgeProps = ComponentProps<'span'> & VariantProps<typeof badgeStyles>

export const Badge: React.FC = ({ className, variant, ...props }: BadgeProps) => (
  <span
    className={cn(badgeStyles({ className, variant }))}
    {...props}
  />
)
