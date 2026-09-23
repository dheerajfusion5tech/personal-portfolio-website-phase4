import { createFileRoute } from '@tanstack/react-router'
import { PortfolioPage } from '@/features/portfolio/pages/PortfolioPage'

export const Route = createFileRoute('/portfolio')({
  component: PortfolioPage,
})