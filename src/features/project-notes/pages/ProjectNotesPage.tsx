import { useState } from "react"
import { mdContent } from "@/features/project-notes/constants/content"
export function ProjectNotesPage() {
  const [tab, setTab] = useState<"rendered"|"raw">("rendered")
  return <div className="py-(--space-10)">
    <div className="border-b border-(--line) pb-(--space-8) flex justify-between items-end">
      <div><div className="mono text-(--text-xs) tracking-[0.2em] text-(--muted)">SYSTEM / DOCS — PROJECT NOTES</div><h1 className="serif text-(--text-5xl) leading-none mt-(--space-2)">Project Notes</h1></div>
      <div className="flex gap-(--space-2)"><button onClick={() => setTab("rendered")} className={`h-(--space-8) px-(--space-3) rounded-full text-(--text-sm) border ${tab==="rendered"?"bg-(--ink) text-(--paper)":"border-(--line)"}`}>Rendered</button><button onClick={() => setTab("raw")} className={`h-(--space-8) px-(--space-3) rounded-full text-(--text-sm) border ${tab==="raw"?"bg-(--ink) text-(--paper)":"border-(--line)"}`}>Raw MD</button></div>
    </div>
    <div className="mt-(--space-10) grid md:grid-cols-12 gap-(--space-10)">
      <div className="md:col-span-3 hidden md:block"><div className="sticky top-[88px] mono text-(--text-xs) space-y-(--space-2) text-(--muted)"><div>CONTENTS</div><div className="text-(--ink)">— Overview</div><div>— Stack</div><div>— Architecture</div><div>— Tokens</div><div>— Routes</div></div></div>
      <div className="md:col-span-9">{tab==="rendered"?<div className="rounded-(--radius-lg) border border-(--line) bg-(--surface) p-(--space-8) leading-[1.7] whitespace-pre-wrap text-(--text-base)">{mdContent}</div>:<pre className="rounded-(--radius) border border-(--line) bg-(--surface-2) p-(--space-6) overflow-auto text-(--text-sm) leading-[1.6] whitespace-pre-wrap">{mdContent}</pre>}</div>
    </div>
  </div>
}
