export function SkillOrbs() {
  const skills = ["React","TypeScript","TanStack Start","Tailwind v4","Motion","Design Systems","shadcn","Vite"]
  return <div className="rounded-(--radius) border border-(--line) bg-(--surface) p-(--space-6)">
    <div className="mono text-(--text-xs) tracking-widest">SKILLS — ORBS</div>
    <div className="mt-(--space-4) grid grid-cols-2 gap-(--space-3)">
      {skills.map((s) => <div key={s} className="group flex items-center gap-(--space-2) text-(--text-sm)"><div className="h-(--space-2) w-(--space-2) rounded-full bg-(--accent) group-hover:scale-[1.8] transition-transform" /><span>{s}</span></div>)}
    </div>
  </div>
}
