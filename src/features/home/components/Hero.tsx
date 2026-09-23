import { StaggerText } from "@/components/shared/StaggerText"
export function Hero() {
  return <div>
    <h1 className="serif text-(--text-4xl) md:text-(--text-6xl) leading-[0.9] tracking-[-0.03em]">
      <StaggerText text="Designer — Developer — Systems Thinker." delay={0.1} />
    </h1>
    <p className="mt-(--space-6) text-(--text-lg) md:text-(--text-xl) leading-[1.5] text-(--ink-2) max-w-[48ch]">I build premium, intentional interfaces where typography, motion, and engineering meet. Focused on TanStack Start, design systems, and micro-interactions that feel like <span className="bg-(--accent) px-(--space-1)">cali.so</span>.</p>
  </div>
}
