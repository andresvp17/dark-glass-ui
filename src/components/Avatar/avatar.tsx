import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { cn } from '../../utils'

const avatarStyles = cva(
  'rounded-full text-center relative shadow-md',
  {
    variants: {
      size: {
        sm: 'w-12 h-12',
        md: 'w-16 h-16',
        lg: 'w-20 h-20'
      }
    }
  }
)

type AvatarProps = ComponentProps<'div'> & VariantProps<typeof avatarStyles>
type FallbackProps = ComponentProps<'span'>
type ImageProps = ComponentProps<'img'> & VariantProps<typeof avatarStyles>

export const Avatar = ({ className, size, ...props }: AvatarProps): React.ReactElement => {
  return (
    <div
      className={cn(avatarStyles({ className, size }))}
      {...props}
    />
  )
}

export const AvatarFallback = ({ className, ...props }: FallbackProps): React.ReactElement => {
  return (
    <span
      className={cn('top-0 left-0 font-semibold uppercase rounded-full absolute w-full h-full bg-violet-600 text-white flex items-center justify-center', className)}
      {...props}
    />
  )
}

export const AvatarImage = ({ className, src, size, alt, ...props }: ImageProps): React.ReactElement => {
  return (
    <img
      className={cn('object-cover aspect-square z-10 rounded-full absolute top-0 left-0', avatarStyles({ className, size }))}
      src={src}
      alt={alt}
      {...props}
    />
  )
}
