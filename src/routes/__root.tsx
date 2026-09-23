import { createRootRoute, Outlet } from "@tanstack/react-router"
import { AppShell } from "@/components/layout/AppShell"
import appCss from "../styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: () => <AppShell><Outlet /></AppShell>,
})

// Also export default for compatibility with older manual routeTree
export default function Root() {
  return <AppShell><Outlet /></AppShell>
}
