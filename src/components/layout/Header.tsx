import { Link, useRouterState } from "@tanstack/react-router"
import { useTheme } from "@/components/layout/ThemeProvider"
import { Moon, Sun } from "lucide-react"
const nav = [
  { n: "01", label: "Index", to: "/" },
  { n: "02", label: "Work", to: "/portfolio" },
  { n: "03", label: "Resume", to: "/resume" },
  { n: "04", label: "Writing", to: "/blog" },
  { n: "05", label: "Signal", to: "/contact" },
]
export function Header() {
  const { theme, toggle } = useTheme()
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  return <header className="sticky top-0 z-40 backdrop-blur-xl bg-(--paper)/80 border-b border-(--line)">
    <div className="mx-auto max-w-(--content-max) px-(--space-6) md:px-(--space-10) h-(--header-h) flex items-center justify-between">
      <Link to="/" className="flex items-center gap-(--space-3) group">
        <div className="h-(--space-8) w-(--space-8) rounded-full bg-(--ink) text-(--paper) grid place-items-center text-(--text-sm) font-bold group-hover:bg-(--accent) group-hover:text-(--accent-fg) transition-colors">D</div>
        <div className="leading-none">
          <div className="text-(--text-base) font-semibold tracking-tight">DHEERAJ</div>
          <div className="text-(--text-xs) mono tracking-[0.18em] text-(--muted) flex items-center gap-(--space-2)"><span className="h-(--space-2) w-(--space-2) rounded-full bg-(--success) animate-[pulseDot_1.6s_infinite]" /> AVAILABLE</div>
        </div>
      </Link>
      <nav className="hidden md:flex items-center gap-(--space-8)">
        {nav.map((i) => {
          const active = pathname === i.to
          return <Link key={i.to} to={i.to} className={`group flex items-center gap-(--space-2) text-(--text-base) ${active ? "font-semibold" : "text-(--muted) hover:text-(--ink)"}`}>
            <span className="mono text-(--text-xs) opacity-60">{i.n}</span> {i.label}
            {active && <span className="h-px w-(--space-6) bg-(--ink) ml-(--space-1)" />}
          </Link>
        })}
      </nav>
      <div className="flex items-center gap-(--space-2)">
        <button onClick={toggle} aria-label="Toggle theme" className="h-(--space-10) w-(--space-10) grid place-items-center rounded-full border border-(--line) hover:bg-(--surface-2) transition-colors">
          {theme === "light" ? <Moon className="h-(--space-4) w-(--space-4)" /> : <Sun className="h-(--space-4) w-(--space-4)" />}
        </button>
        <Link to="/contact" className="hidden md:inline-flex h-(--space-10) px-(--space-5) rounded-full bg-(--accent) text-(--accent-fg) text-(--text-base) font-medium items-center hover:bg-(--accent-2) transition-colors">Let's talk</Link>
      </div>
    </div>
  </header>
}
