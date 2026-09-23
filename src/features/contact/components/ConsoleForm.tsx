import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Magnetic } from "@/components/shared/Magnetic"
export function ConsoleForm() {
  const [sent, setSent] = useState(false)
  return <div className="rounded-(--radius-lg) border border-(--line) bg-(--surface) p-(--space-8)">
    <div className="mono text-(--text-xs) tracking-widest mb-(--space-6)">SEND A SIGNAL</div>
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000) }} className="space-y-(--space-6)">
      {[{label:"Your name", placeholder:"Dheeraj", type:"text"}, {label:"Email address", placeholder:"you@studio.com", type:"email"}, {label:"Project type", placeholder:"Design System / Portfolio / Product", type:"text"}].map((f) => <div key={f.label} className="group">
        <label className="mono text-(--text-xs) tracking-widest text-(--muted) group-focus-within:text-(--ink) transition-colors">{f.label}</label>
        <input required type={f.type} placeholder={f.placeholder} className="mt-(--space-2) w-full border-b border-(--line-2) bg-transparent py-(--space-3) text-(--text-md) outline-none focus:border-(--ink) transition-colors placeholder:text-(--muted-2)" />
      </div>)}
      <div>
        <label className="mono text-(--text-xs) tracking-widest text-(--muted)">Message</label>
        <textarea required placeholder="Tell me about your project, timeline, and what 'premium' means to you..." className="mt-(--space-2) w-full min-h-[120px] rounded-(--radius) border border-(--line-2) bg-(--paper-2) p-(--space-4) text-(--text-base) outline-none focus:border-(--ink) transition-colors" />
      </div>
      <Magnetic><Button type="submit" variant="accent" size="lg" className="rounded-full w-full">{sent ? "Signal sent ✓" : "Send signal →"}</Button></Magnetic>
      {sent && <div className="text-(--text-sm) mono text-(--success) bg-(--success-bg) border border-(--line) p-(--space-3) rounded-(--radius-sm)">Thanks — I typically reply within 6 hours.</div>}
    </form>
  </div>
}
