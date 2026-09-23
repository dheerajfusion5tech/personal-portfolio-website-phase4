import { capabilities } from "@/features/home/constants"
export function CapabilityGrid() {
  return <div>
    <div className="flex items-center gap-(--space-3) mb-(--space-6)"><div className="h-px flex-1 bg-(--line)" /><span className="mono text-(--text-xs) tracking-widest">CAPABILITIES</span></div>
    <div className="grid grid-cols-2 gap-(--space-3)">
      {capabilities.map((c) => <div key={c.t} className="rounded-(--radius) border border-(--line) bg-(--surface) p-(--space-4) hover:shadow-[var(--shadow-soft)] transition-shadow"><div className="text-(--text-sm) font-semibold">{c.t}</div><div className="mt-(--space-1) text-(--text-sm) text-(--muted)">{c.d}</div></div>)}
    </div>
  </div>
}
