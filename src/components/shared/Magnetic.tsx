import React, { useRef } from "react"
export function Magnetic({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width/2
    const y = e.clientY - rect.top - rect.height/2
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.3}px)`
  }
  const onLeave = () => { if (ref.current) ref.current.style.transform = "translate(0,0)" }
  return <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`magnetic inline-flex ${className ?? ""}`}>{children}</div>
}
