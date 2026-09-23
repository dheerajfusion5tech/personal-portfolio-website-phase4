
# Project Notes — Personal Portfolio Website

## Overview
Design System: Mono-Chrome Dossier / Kinetic Archive
- Monochrome paper/ink base + single acid lime kinetic accent
- Typography-first, grid-obsessed, editorial archive, not template
- Inspired by Linear, cali.so micro-interactions, ReactBits motion

## Tech Stack
- TanStack Start (Vite), TanStack Router, TanStack Query
- React 18, TypeScript, Tailwind CSS v4 (@tailwindcss/vite), shadcn/ui
- Bun, Vite, vite-tsconfig-paths, Netlify adapter @netlify/vite-plugin-tanstack-start@^1.3.19

## Architecture — Feature-Based (Mandatory)
src/features/[home|portfolio|resume|blog|contact|project-notes] owns pages, components, hooks, services, types, constants, utils.
src/components/layout (Header, Footer, ThemeProvider, AppShell), ui (button), shared (Magnetic, StaggerText, CopyToast, TiltCard)
src/lib/utils, src/styles.css + src/index.css
Route files are THIN — only import feature page and render.

## Tokens — Centralized in :root of index.css
All CSS variables exclusively in :root of src/index.css:
--paper, --ink, --muted, --line, --surface, --accent, --space-*, --header-h, --content-max, --radius-*, --font-*, --shadow-*

Tailwind v4 native syntax: bg-(--paper), text-(--ink), border-(--line), rounded-(--radius-lg), p-(--space-6) etc.
No bg-[var(--token)] arbitrary brackets, no hardcoded colors.

## Routes
/ → Index Manifest (vertical index + staggered serif hero + preview)
/portfolio → Evidence Wall (horizontal drag filmstrip + drawer)
/resume → Timeline Ledger (magnetic rail + ledger)
/blog → Marginalia Reader (newspaper columns + marginalia)
/contact → Signal Console (console form + copy toasts)
/project-notes → This doc rendered + footer link

## TanStack Start Standards
- appCss?url imported in __root.tsx as URL + head link for CSS injection
- shellComponent via AppShell
- routeTree.gen.ts is build artifact — never manually edited
- createRouter using installed TanStack Router API

## Vite Config Quality
- appName derived from package.json
- customDomainLoggerPlugin logs http://personal-portfolio-website.localhost:5173/
- allowedHosts: [appName.localhost, localhost], port 5173, host true
- plugins: tailwindcss(), tsconfigPaths(), react(), netlify(), customDomainLogger

## Quality Gate
bun install, tsc --noEmit, vite dev serves, CSS verified, build dist/client, all routes work.

## Deployment
bun add -D @netlify/vite-plugin-tanstack-start@^1.3.19
netlify init creates netlify.toml
