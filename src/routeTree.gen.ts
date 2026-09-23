import { createRootRoute, createRoute } from "@tanstack/react-router"
import Root from "./routes/__root"
import Index from "./routes/index"
import Portfolio from "./routes/portfolio"
import Resume from "./routes/resume"
import Blog from "./routes/blog"
import Contact from "./routes/contact"
import ProjectNotes from "./routes/project-notes"

const rootRoute = createRootRoute({ component: Root })
export const routeTree = rootRoute.addChildren([
  createRoute({ getParentRoute: () => rootRoute, path: "/", component: Index }),
  createRoute({ getParentRoute: () => rootRoute, path: "/portfolio", component: Portfolio }),
  createRoute({ getParentRoute: () => rootRoute, path: "/resume", component: Resume }),
  createRoute({ getParentRoute: () => rootRoute, path: "/blog", component: Blog }),
  createRoute({ getParentRoute: () => rootRoute, path: "/contact", component: Contact }),
  createRoute({ getParentRoute: () => rootRoute, path: "/project-notes", component: ProjectNotes }),
])
