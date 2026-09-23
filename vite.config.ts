import fs from "fs"
import { defineConfig, type Plugin } from "vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import tsconfigPaths from "vite-tsconfig-paths"
import netlify from "@netlify/vite-plugin-tanstack-start"

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf8")) as { name: string }
const appName = packageJson.name

function customDomainLoggerPlugin(): Plugin {
  return {
    name: "custom-domain-logger",
    configureServer(server) {
      server.httpServer?.on("listening", () => {
        const addr = server.httpServer?.address()
        const port = typeof addr === "object" && addr ? (addr as any).port : 5173
        setTimeout(() => {
          console.log(`\n  ➜  App: http://${appName}.localhost:${port}/`)
          console.log(`  ➜  Local: http://localhost:${port}/\n`)
        }, 100)
      })
    },
  }
}

export default defineConfig({
  plugins: [
    tanstackStart(),
    tailwindcss(),
    tsconfigPaths(),
    react(),
    netlify(),
    customDomainLoggerPlugin(),
  ],
  server: {
    port: 5173,
    host: true,
    allowedHosts: [`${appName}.localhost`, "localhost"],
  },
})
