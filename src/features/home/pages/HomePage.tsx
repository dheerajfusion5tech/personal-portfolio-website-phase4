import { useState } from "react"
import { Link } from "@tanstack/react-router"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Magnetic } from "@/components/shared/Magnetic"
import { Hero } from "@/features/home/components/Hero"
import { IndexRail } from "@/features/home/components/IndexRail"
import { CapabilityGrid } from "@/features/home/components/CapabilityGrid"
import { PreviewCard } from "@/features/home/components/PreviewCard"
import { Marquee } from "@/features/home/components/Marquee"
import { projects } from "@/features/portfolio/constants/projects"

export function HomePage() {
  const [hovered, setHovered] = useState<string>(projects[0].id)
  return <div className="py-(--space-10) md:py-(--space-16)">
    <div className="flex justify-between items-start border-b border-(--line) pb-(--space-8) mb-(--space-10)">
      <div className="mono text-(--text-xs) tracking-[0.2em] text-(--muted)">INDEX / 01 — MANIFEST</div>
      <div className="hidden md:flex gap-(--space-6) mono text-(--text-xs) text-(--muted)">
        <span>HYDERABAD, IN — {new Date().toLocaleTimeString()}</span>
        <span className="text-(--ink)">● OPEN FOR WORK</span>
      </div>
    </div>
    <div className="grid grid-cols-12 gap-(--space-6)">
      <div className="col-span-12 md:col-span-3"><IndexRail hovered={hovered} setHovered={setHovered} /></div>
      <div className="col-span-12 md:col-span-6 space-y-(--space-8)">
        <Hero />
        <div className="flex gap-(--space-3)">
          <Magnetic><Link to="/portfolio"><Button variant="accent" size="lg" className="rounded-full">View Work <ArrowUpRight className="ml-(--space-2) h-(--space-4) w-(--space-4)" /></Button></Link></Magnetic>
          <Magnetic><Link to="/resume"><Button variant="outline" size="lg" className="rounded-full">Resume</Button></Link></Magnetic>
        </div>
        <CapabilityGrid />
      </div>
      <div className="col-span-12 md:col-span-3"><div className="sticky top-[88px]"><PreviewCard hovered={hovered} /><div className="mt-(--space-6) rounded-(--radius) border border-dashed border-(--line-2) p-(--space-4)"><div className="mono text-(--text-xs) tracking-widest text-(--muted)">NOW</div><div className="mt-(--space-2) text-(--text-base)">Building radical portfolios that don't look like templates. Available for freelance + full-time.</div></div></div></div>
    </div>
    <Marquee />
  </div>
}
