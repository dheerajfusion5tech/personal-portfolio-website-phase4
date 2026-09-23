import { CopyToast } from "@/components/shared/CopyToast"
import { projects } from "@/features/portfolio/constants/projects"
import { meta } from "@/features/home/constants"
export function IndexRail({ hovered, setHovered }: { hovered: string; setHovered: (id:string)=>void }) {
  return <div className="sticky top-[88px] space-y-(--space-10)">
    <div>
      <div className="h-(--space-14) w-(--space-14) rounded-full overflow-hidden border border-(--line)"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" className="h-full w-full object-cover" alt="Avatar" /></div>
      <div className="mt-(--space-4) text-(--text-md) font-semibold">Dheeraj</div>
      <div className="mono text-(--text-xs) text-(--muted)">Frontend Engineer / Design Engineer</div>
      <div className="mt-(--space-4) flex gap-(--space-2)"><CopyToast text="hello@dheeraj.design" /></div>
    </div>
    <div className="space-y-(--space-3)">
      {meta.map((i) => <div key={i.k} className="flex justify-between text-(--text-sm) border-b border-(--line) py-(--space-2)"><span className="mono text-(--muted)">{i.k}</span><span>{i.v}</span></div>)}
    </div>
    <div className="hidden md:block">
      <div className="mono text-(--text-xs) tracking-widest mb-(--space-3)">SELECTED EVIDENCE</div>
      <div className="space-y-(--space-2)">
        {projects.map((p) => <button key={p.id} onMouseEnter={() => setHovered(p.id)} className={`text-left w-full flex gap-(--space-3) py-(--space-2) border-b border-(--line) transition-colors ${hovered===p.id?"text-(--ink)":"text-(--muted)"}`}>
          <span className="mono text-(--text-xs)">{p.id}</span><span className="text-(--text-base)">{p.title.split("—")[0]}</span>
        </button>)}
      </div>
    </div>
  </div>
}
