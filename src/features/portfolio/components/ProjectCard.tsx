import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/features/portfolio/constants/projects"
export function ProjectCard({ project, onSelect }: { project: Project; onSelect: (id:string)=>void }) {
  return <div className="group min-w-[360px] md:min-w-[440px] snap-start rounded-(--radius-lg) border border-(--line) bg-(--surface) overflow-hidden tilt-card cursor-pointer" onClick={() => onSelect(project.id)}>
    <div className="relative h-[300px] overflow-hidden">
      <img src={project.img} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-700" alt={project.title} />
      <div className="absolute top-(--space-3) left-(--space-3) flex gap-(--space-2)"><span className="mono text-(--text-xs) bg-(--paper) border border-(--line) px-(--space-2) py-(--space-1) rounded-full">{project.id}</span><span className="mono text-(--text-xs) bg-(--accent) text-(--accent-fg) px-(--space-2) py-(--space-1) rounded-full">{project.year}</span></div>
      <div className="absolute bottom-(--space-3) right-(--space-3) h-(--space-10) w-(--space-10) rounded-full bg-(--ink) text-(--paper) grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity"><ArrowUpRight className="h-(--space-4) w-(--space-4)" /></div>
    </div>
    <div className="p-(--space-5)">
      <div className="flex justify-between"><span className="mono text-(--text-xs) text-(--muted)">{project.role}</span><span className="mono text-(--text-xs) text-(--muted)">{project.metric}</span></div>
      <div className="mt-(--space-2) text-(--text-xl) font-semibold leading-tight">{project.title}</div>
      <div className="mt-(--space-3) flex gap-(--space-2)">{project.tags.map((t) => <span key={t} className="text-(--text-xs) mono border border-(--line) px-(--space-2) py-[2px] rounded-full">{t}</span>)}</div>
    </div>
  </div>
}
