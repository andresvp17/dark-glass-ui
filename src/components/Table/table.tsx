import { forwardRef } from 'react'
import { cn } from '../../utils'

export const Table = forwardRef<
HTMLTableElement,
React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref): React.ReactElement => {
  return (
    <table
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
      ref={ref}
    />
  )
})

export const TableHeader = forwardRef<
HTMLTableSectionElement,
React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  return (
    <thead
      ref={ref}
      className={cn('[&_tr]:border-b [&_tr]:border-violet-900', className)}
      {...props}
    />
  )
})

export const TableBody = forwardRef<
HTMLTableSectionElement,
React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  return (
    <tbody
      ref={ref}
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  )
})

export const TableFooter = forwardRef<
HTMLTableSectionElement,
React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-violet-200 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
))

export const TableRow = forwardRef<
HTMLTableRowElement,
React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b border-violet-900 transition-colors hover:bg-violet-50 data-[state=selected]:bg-muted',
      className
    )}
    {...props}
  />
))

export const TableHead = forwardRef<
HTMLTableCellElement,
React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-10 px-2 text-left align-middle font-medium text-violet-900 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
      className
    )}
    {...props}
  />
))

export const TableCell = forwardRef<
HTMLTableCellElement,
React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
      className
    )}
    {...props}
  />
))

export const TableCaption = forwardRef<
HTMLTableCaptionElement,
React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm font-semibold text-violet-950', className)}
    {...props}
  />
))
