import { createFileRoute } from '@tanstack/react-router'
import { BlogPage } from '@/features/blog/pages/BlogPage'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})