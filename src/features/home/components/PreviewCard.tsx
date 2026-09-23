import { projects } from "@/features/portfolio/constants/projects"
export function PreviewCard({ hovered }: { hovered: string }) {
  const p = projects.find((x) => x.id === hovered) || projects[0]
  return <div className="rounded-(--radius-lg) overflow-hidden border border-(--line) bg-(--surface) tilt-card">
    <img src={p.img} className="h-[260px] w-full object-cover" alt={p.title} />
    <div className="p-(--space-4)">
      <div className="flex justify-between mono text-(--text-xs) text-(--muted)"><span>{p.year}</span><span>{p.metric}</span></div>
      <div className="mt-(--space-2) font-semibold text-(--text-md) leading-tight">{p.title}</div>
      <div className="mt-(--space-1) text-(--text-sm) text-(--muted)">{p.role}</div>
      <div className="mt-(--space-3) flex flex-wrap gap-(--space-2)">{p.tags.map((t) => <span key={t} className="text-(--text-xs) mono border border-(--line) px-(--space-2) py-[2px] rounded-full">{t}</span>)}</div>
    </div>
  </div>
}
