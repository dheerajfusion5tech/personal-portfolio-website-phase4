import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-(--radius-sm) text-(--text-base) font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-(--ink) text-(--paper) hover:bg-(--ink-2) shiny-btn",
        accent: "bg-(--accent) text-(--accent-fg) hover:bg-(--accent-2) shiny-btn",
        outline: "border border-(--line-2) bg-transparent hover:bg-(--surface-2)",
        ghost: "hover:bg-(--surface-2)",
      },
      size: { default: "h-(--space-10) px-(--space-6)", sm: "h-(--space-8) px-(--space-4)", lg: "h-(--space-12) px-(--space-8)", icon: "h-(--space-10) w-(--space-10)" }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
)
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = "Button"
export { Button, buttonVariants }
