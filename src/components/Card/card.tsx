import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils'

export const Card = forwardRef<
HTMLDivElement,
HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <article
      ref={ref}
      className={cn('rounded-lg border-2 border-violet-300 text-slate-950 shadow-lg', className)}
      {...props}
    />
  )
})

export const CardHeader = forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))

export const CardTitle = forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-lg font-semibold tracking-tight', className)}
    {...props}
  />
))

export const CardDescription = forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-slate-950 leading-tight', className)}
    {...props}
  />
))

export const CardContent = forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))

export const CardFooter = forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
