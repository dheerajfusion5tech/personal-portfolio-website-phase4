import { useState, useRef } from "react"
import { projects } from "@/features/portfolio/constants/projects"
import { ProjectCard } from "@/features/portfolio/components/ProjectCard"
import { ProjectDrawer } from "@/features/portfolio/components/ProjectDrawer"

export function PortfolioPage() {
  const [active, setActive] = useState<string | null>(null)
  const scroller = useRef<HTMLDivElement>(null)
  const act = projects.find((p) => p.id === active)
  return <div className="py-(--space-10)">
    <div className="flex justify-between items-end border-b border-(--line) pb-(--space-8)">
      <div><div className="mono text-(--text-xs) tracking-[0.2em] text-(--muted)">INDEX / 02 — EVIDENCE WALL</div><h1 className="serif text-(--text-5xl) leading-none tracking-tight mt-(--space-2)">Work</h1></div>
      <div className="hidden md:block text-right"><div className="mono text-(--text-xs)">DRAG TO EXPLORE →</div><div className="text-(--text-base) text-(--muted)">{projects.length} projects / 2023—2025</div></div>
    </div>
    <div ref={scroller} className="mt-(--space-10) flex gap-(--space-6) overflow-x-auto scrollbar-hide pb-(--space-6) snap-x">
      {projects.map((p) => <ProjectCard key={p.id} project={p} onSelect={setActive} />)}
    </div>
    {act && <ProjectDrawer project={act} onClose={() => setActive(null)} />}
  </div>
}
