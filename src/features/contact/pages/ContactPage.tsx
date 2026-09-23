import { ConsoleForm } from "@/features/contact/components/ConsoleForm"
import { ContactCard } from "@/features/contact/components/ContactCard"
export function ContactPage() {
  return <div className="py-(--space-10)">
    <div className="border-b border-(--line) pb-(--space-8)"><div className="mono text-(--text-xs) tracking-[0.2em] text-(--muted)">INDEX / 05 — SIGNAL CONSOLE</div><h1 className="serif text-(--text-5xl) leading-none mt-(--space-2)">Contact</h1></div>
    <div className="mt-(--space-10) grid md:grid-cols-12 gap-(--space-10)">
      <div className="md:col-span-7"><ConsoleForm /></div>
      <div className="md:col-span-5"><ContactCard /></div>
    </div>
  </div>
}
