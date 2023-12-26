import { cn } from '@/lib/utils'
import { ReactNode } from 'react'


// The className prop allows for additional classes to be passed for custom styling.
// The cn utility function combines default responsive styles with any additional classes provided.
// This ensures the default styles ('mx-auto w-full max-w-screen-xl px-2.5 md:px-20') are maintained
// while also allowing developers to add their own custom styles by passing a className.
const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper