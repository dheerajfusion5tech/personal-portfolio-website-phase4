export function Marquee() {
  return <div className="mt-(--space-20) border-y border-(--line) py-(--space-3) overflow-hidden">
    <div className="flex gap-(--space-8) animate-[marquee_20s_linear_infinite] whitespace-nowrap mono text-(--text-sm) tracking-[0.2em]">
      <span>• DESIGN ENGINEERING • TANSTACK START • MICRO-INTERACTIONS • CALI.SO INSPIRED • REACTBITS • PREMIUM BUILD •</span>
      <span>• DESIGN ENGINEERING • TANSTACK START • MICRO-INTERACTIONS • CALI.SO INSPIRED • REACTBITS • PREMIUM BUILD •</span>
    </div>
  </div>
}
