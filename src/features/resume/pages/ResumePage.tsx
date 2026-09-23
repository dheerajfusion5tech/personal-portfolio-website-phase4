import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProfileCard } from "@/features/resume/components/ProfileCard"
import { SkillOrbs } from "@/features/resume/components/SkillOrbs"
import { Timeline } from "@/features/resume/components/Timeline"

export function ResumePage() {
  return <div className="py-(--space-10)">
    <div className="flex justify-between items-start border-b border-(--line) pb-(--space-8)">
      <div><div className="mono text-(--text-xs) tracking-[0.2em] text-(--muted)">INDEX / 03 — TIMELINE LEDGER</div><h1 className="serif text-(--text-5xl) leading-none mt-(--space-2)">Resume</h1></div>
      <a href="/cv.pdf" download className="hidden md:inline-flex"><Button variant="accent" className="rounded-full"><Download className="mr-(--space-2) h-(--space-4) w-(--space-4)" /> Download CV</Button></a>
    </div>
    <div className="mt-(--space-10) grid md:grid-cols-12 gap-(--space-10)">
      <div className="md:col-span-4"><div className="sticky top-[88px] space-y-(--space-6)"><ProfileCard /><SkillOrbs /></div></div>
      <div className="md:col-span-8"><Timeline /><div className="mt-(--space-16) rounded-(--radius-lg) border border-(--line) bg-(--surface-2) p-(--space-8)"><div className="mono text-(--text-xs) tracking-widest">EDUCATION</div><div className="mt-(--space-4) flex justify-between"><div><div className="font-semibold">B.Tech — Computer Science</div><div className="text-(--text-base) text-(--muted)">JNTU Hyderabad — 2018-2022</div></div><div className="mono text-(--text-xs)">8.6 CGPA</div></div></div></div>
    </div>
  </div>
}
