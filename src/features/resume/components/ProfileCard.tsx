import { CopyToast } from "@/components/shared/CopyToast"
export function ProfileCard() {
  return <div className="rounded-(--radius) border border-(--line) bg-(--surface) p-(--space-6)">
    <div className="mono text-(--text-xs) tracking-widest">PROFILE</div>
    <div className="mt-(--space-3) text-(--text-base) leading-[1.6] text-(--ink-2)">Design Engineer obsessed with typography, grids, and micro-interactions. TanStack Start specialist. No templates, only intentional systems.</div>
    <div className="mt-(--space-6) space-y-(--space-3)">
      {[{k:"Email", v:"hello@dheeraj.design"}, {k:"Location", v:"Hyderabad, IN"}, {k:"Availability", v:"Open for work"}].map((r) => <div key={r.k} className="flex justify-between text-(--text-sm) border-b border-(--line) py-(--space-2)"><span className="mono text-(--muted)">{r.k}</span><span className="font-medium">{r.v}</span></div>)}
    </div>
    <div className="mt-(--space-4)"><CopyToast text="hello@dheeraj.design" /></div>
  </div>
}
