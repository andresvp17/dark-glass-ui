import { ComponentProps } from 'react'
import { cn } from '../../utils'

type SkeletonProps = ComponentProps<'div'>

export const Skeleton = ({ className, ...props }: SkeletonProps): React.ReactElement => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-violet-300', className)}
      {...props}
    />
  )
}
