import { createFileRoute } from '@tanstack/react-router'
import { ResumePage } from '@/features/resume/pages/ResumePage'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})