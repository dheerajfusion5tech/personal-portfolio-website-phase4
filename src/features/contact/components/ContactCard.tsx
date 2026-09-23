import { CopyToast } from "@/components/shared/CopyToast"
export function ContactCard() {
  return <div className="sticky top-[88px] space-y-(--space-6)">
    <div className="rounded-(--radius-lg) border border-(--line) bg-(--surface) p-(--space-6)">
      <div className="h-(--space-12) w-(--space-12) rounded-full overflow-hidden"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" className="h-full w-full object-cover" alt="avatar" /></div>
      <div className="mt-(--space-4) font-semibold">Dheeraj — Frontend Engineer</div>
      <div className="mono text-(--text-xs) text-(--muted)">Hyderabad, IN • Remote worldwide</div>
      <div className="mt-(--space-6) space-y-(--space-3)">
        <div className="flex justify-between items-center"><span className="mono text-(--text-xs) text-(--muted)">EMAIL</span><CopyToast text="hello@dheeraj.design" /></div>
        <div className="flex justify-between items-center"><span className="mono text-(--text-xs) text-(--muted)">CAL</span><CopyToast text="cal.com/dheeraj" /></div>
        <div className="flex justify-between items-center"><span className="mono text-(--text-xs) text-(--muted)">X / TWITTER</span><CopyToast text="@dheerajbuilds" /></div>
      </div>
      <div className="mt-(--space-6) pt-(--space-6) border-t border-(--line) flex gap-(--space-2)">
        <a href="https://github.com" className="flex-1 h-(--space-10) rounded-full border border-(--line-2) grid place-items-center text-(--text-sm) hover:bg-(--surface-2)">GitHub</a>
        <a href="https://linkedin.com" className="flex-1 h-(--space-10) rounded-full border border-(--line-2) grid place-items-center text-(--text-sm) hover:bg-(--surface-2)">LinkedIn</a>
      </div>
    </div>
    <div className="rounded-(--radius) border border-dashed border-(--line-2) p-(--space-5)"><div className="mono text-(--text-xs) tracking-widest">RESPONSE TIME</div><div className="mt-(--space-2) text-(--text-base)">Average 4.2h during IST daytime. For urgent: DM on X.</div></div>
  </div>
}
