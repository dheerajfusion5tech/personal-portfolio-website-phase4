# personal-portfolio-website-phase4
personal-portfolio-website-phase4

# Personal Portfolio Website — Mono-Chrome Dossier / Kinetic Archive

Premium, radical, production-quality frontend-only portfolio built with TanStack Start, React, TypeScript, Tailwind v4, shadcn/ui.

## Design System
- Name: Mono-Chrome Dossier / Kinetic Archive
- Tokens: ALL in :root of src/index.css — no hardcoded colors/values in TSX
- Syntax: Tailwind v4 native bg-(--token), text-(--token), border-(--line), rounded-(--radius-lg), p-(--space-6)
- Palette: Paper #FFFEFB / Ink #0A0A0A + Acid Lime #D6FF5C accent

## Architecture — Feature-Based (Mandatory)
- src/features/[home|portfolio|resume|blog|contact|project-notes] owns pages, components, constants, hooks
- src/components/layout (Header, Footer, AppShell, ThemeProvider), ui (button), shared (Magnetic, StaggerText, CopyToast, TiltCard)
- src/lib/utils, src/index.css (tokens), src/styles.css (imports index.css + tailwindcss)
- Route files THIN — only import feature page and render

## Routes
/ — Index Manifest
/portfolio — Evidence Wall (drag filmstrip + drawer)
/resume — Timeline Ledger
/blog — Marginalia Reader
/contact — Signal Console
/project-notes — Docs rendered + footer link

## Setup
```bash
bun install
# tsc --noEmit
bun run typecheck 
# http://personal-portfolio-website.localhost:5173/
bun run dev 
bun run build
```

## Vite Config Quality
- appName from package.json
- customDomainLoggerPlugin logs http://personal-portfolio-website.localhost:5173/
- allowedHosts: [appName.localhost, localhost], port 5173
- plugins: tailwindcss(), tsconfigPaths(), react(), netlify(), customDomainLogger

## Deployment (Netlify CLI)
```bash
netlify init # creates netlify.toml
netlify deploy --prod
```

## Quality Gate
- bun install ✓
- tsc --noEmit ✓
- vite dev serves http://personal-portfolio-website.localhost:5173/ ✓
- CSS verified via document.styleSheets, tokens via getComputedStyle ✓
- build dist/client ✓
- All routes work, responsive, accessible, no hardcoded colors, no cursor gimmick
