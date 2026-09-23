import { Link } from "@tanstack/react-router"
export function Footer() {
  return <footer className="mt-(--space-24) border-t border-(--line)">
    <div className="mx-auto max-w-(--content-max) px-(--space-6) md:px-(--space-10) py-(--space-10) flex flex-col md:flex-row justify-between gap-(--space-8)">
      <div>
        <div className="text-(--text-sm) mono tracking-widest">© 2026 DHEERAJ — BUILT WITH TANSTACK START</div>
        <div className="mt-(--space-2) text-(--text-base) text-(--muted) max-w-[36ch]">Mono-Chrome Dossier / Kinetic Archive — radical portfolio system, not a template.</div>
      </div>
      <div className="flex flex-wrap gap-(--space-2)">
        <Link to="/project-notes" className="h-(--space-10) px-(--space-5) rounded-full border border-(--line-2) text-(--text-base) grid place-items-center hover:bg-(--surface-2) transition-colors">Project Notes</Link>
        <a href="https://github.com" className="h-(--space-10) px-(--space-5) rounded-full border border-(--line-2) text-(--text-base) grid place-items-center hover:bg-(--surface-2)">GitHub</a>
        <a href="mailto:hello@dheeraj.design" className="h-(--space-10) px-(--space-5) rounded-full bg-(--ink) text-(--paper) text-(--text-base) grid place-items-center">hello@dheeraj.design</a>
      </div>
    </div>
  </footer>
}
