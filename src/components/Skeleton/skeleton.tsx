import { ComponentProps } from 'react'
import { cn } from '../../utils'

type SkeletonProps = ComponentProps<'div'>

export const Skeleton = ({ className, ...props }: SkeletonProps): React.ReactElement => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-force-violet-400/50', className)}
      {...props}
    />
  )
}
