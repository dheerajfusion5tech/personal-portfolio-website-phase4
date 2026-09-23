import { timeline } from "@/features/resume/constants/timeline"
export function Timeline() {
  return <div className="relative border-l border-(--line) ml-(--space-3) pl-(--space-8)">
    {timeline.map((t) => <div key={t.year} className="relative pb-(--space-12) last:pb-0">
      <div className="absolute -left-[37px] top-(--space-1) h-(--space-3) w-(--space-3) rounded-full bg-(--paper) border-2 border-(--ink)" />
      <div className="flex items-center gap-(--space-3)"><span className="mono text-(--text-sm) bg-(--accent) text-(--accent-fg) px-(--space-2) py-[2px] rounded-full">{t.year}</span><div className="h-px flex-1 bg-(--line)" /></div>
      <h3 className="mt-(--space-3) text-(--text-xl) font-semibold">{t.title}</h3>
      <p className="mt-(--space-2) text-(--text-base) text-(--muted) leading-[1.6] max-w-[60ch]">{t.desc}</p>
      <div className="mt-(--space-3) flex gap-(--space-2)">{t.tags.map((tag) => <span key={tag} className="mono text-(--text-xs) border border-(--line) px-(--space-2) py-[2px] rounded-full">{tag}</span>)}</div>
    </div>)}
  </div>
}
