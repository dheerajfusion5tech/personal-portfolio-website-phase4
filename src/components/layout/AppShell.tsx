import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
export function AppShell({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>
    <div className="min-h-screen bg-(--paper) text-(--ink)">
      <Header />
      <main className="mx-auto max-w-(--content-max) px-(--space-6) md:px-(--space-10)">{children}</main>
      <Footer />
    </div>
  </ThemeProvider>
}
