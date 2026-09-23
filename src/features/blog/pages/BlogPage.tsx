import { posts } from "@/features/blog/constants/posts"
import { ArticleRow } from "@/features/blog/components/ArticleRow"
export function BlogPage() {
  return <div className="py-(--space-10)">
    <div className="border-b border-(--line) pb-(--space-8) flex justify-between items-end">
      <div><div className="mono text-(--text-xs) tracking-[0.2em] text-(--muted)">INDEX / 04 — MARGINALIA READER</div><h1 className="serif text-(--text-5xl) leading-none mt-(--space-2)">Writing</h1></div>
      <div className="mono text-(--text-xs) text-(--muted)">3 essays / 2026</div>
    </div>
    <div className="mt-(--space-10) space-y-(--space-12)">
      {posts.map((p) => <ArticleRow key={p.id} post={p} />)}
    </div>
  </div>
}
