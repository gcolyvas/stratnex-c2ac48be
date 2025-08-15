import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-xs sm:text-sm md:text-sm",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-brand-navy text-brand-white hover:bg-brand-dark-gray transform hover:scale-105 transition-all duration-300 shadow-elegant",
        services: "bg-brand-white text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-brand-white transition-all duration-300",
      },
      size: {
        default: "h-8 px-3 py-1.5 sm:h-10 sm:px-4 sm:py-2 [&_svg]:size-3 sm:[&_svg]:size-4",
        sm: "h-7 px-2 py-1 sm:h-9 sm:px-3 sm:py-2 [&_svg]:size-3",
        lg: "h-10 px-4 py-2 sm:h-11 sm:px-6 md:px-8 [&_svg]:size-4 sm:[&_svg]:size-5",
        icon: "h-8 w-8 sm:h-10 sm:w-10 [&_svg]:size-3 sm:[&_svg]:size-4",
        responsive: "h-8 px-3 py-1.5 text-xs sm:h-10 sm:px-6 sm:py-2 sm:text-sm md:h-12 md:px-8 md:text-base [&_svg]:size-3 sm:[&_svg]:size-4 md:[&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
