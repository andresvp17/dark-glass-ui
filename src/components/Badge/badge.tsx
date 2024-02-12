import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { cn } from '../../utils'

const badgeStyles = cva(
  'px-2.5 py-0.5 inline text-center text-xs font-semibold transition-colors rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-force-violet-400 text-white md:hover:bg-force-violet-800',
        secondary: 'bg-force-violet-900 text-white md:hover:bg-force-violet-950',
        outline: 'border-2 border-force-violet-600 text-force-violet-600'
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
