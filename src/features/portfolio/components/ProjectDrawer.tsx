import { X } from "lucide-react"
import type { Project } from "@/features/portfolio/constants/projects"
export function ProjectDrawer({ project, onClose }: { project: Project; onClose: ()=>void }) {
  return <div className="fixed inset-0 z-50 bg-(--paper)/80 backdrop-blur-xl p-(--space-4) md:p-(--space-10) overflow-auto">
    <div className="mx-auto max-w-(--content-narrow) bg-(--surface) border border-(--line) rounded-(--radius-lg) overflow-hidden shadow-[var(--shadow-large)]">
      <div className="flex justify-between items-center p-(--space-6) border-b border-(--line)"><div className="mono text-(--text-xs)">{project.id} — {project.year} / {project.metric}</div><button onClick={onClose} className="h-(--space-8) w-(--space-8) rounded-full border border-(--line-2) grid place-items-center"><X className="h-(--space-4) w-(--space-4)" /></button></div>
      <div className="grid md:grid-cols-2">
        <img src={project.img} className="h-[420px] w-full object-cover" alt={project.title} />
        <div className="p-(--space-8)">
          <h2 className="serif text-(--text-3xl) leading-none">{project.title}</h2>
          <p className="mt-(--space-4) text-(--muted) text-(--text-base) leading-[1.6]">{project.desc}</p>
          <div className="mt-(--space-6) grid grid-cols-2 gap-(--space-4) text-(--text-base)">
            <div><div className="mono text-(--text-xs) text-(--muted)">ROLE</div><div className="font-medium">{project.role}</div></div>
            <div><div className="mono text-(--text-xs) text-(--muted)">YEAR</div><div className="font-medium">{project.year}</div></div>
            <div><div className="mono text-(--text-xs) text-(--muted)">STACK</div><div className="font-medium">{project.tags.join(", ")}</div></div>
            <div><div className="mono text-(--text-xs) text-(--muted)">OUTCOME</div><div className="font-medium">{project.metric}</div></div>
          </div>
          <div className="mt-(--space-8) grid grid-cols-3 gap-(--space-2)">{project.imgs.map((im) => <img key={im} src={im} className="h-(--space-24) w-full object-cover rounded-(--radius-sm) border border-(--line)" alt="detail" />)}</div>
        </div>
      </div>
    </div>
  </div>
}
