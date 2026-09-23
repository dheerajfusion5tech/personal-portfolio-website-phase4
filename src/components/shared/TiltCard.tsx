import { cn } from "@/lib/utils"
export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("tilt-card rounded-(--radius-lg) border border-(--line) bg-(--surface) overflow-hidden", className)}>{children}</div>
}
