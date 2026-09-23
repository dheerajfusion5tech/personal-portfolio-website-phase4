import { posts } from "@/features/blog/constants/posts"
export function ArticleRow({ post }: { post: typeof posts[number] }) {
  return <article className="grid md:grid-cols-12 gap-(--space-6) group">
    <div className="md:col-span-2"><div className="mono text-[48px] leading-none text-(--line-2) group-hover:text-(--ink) transition-colors">{post.id}</div><div className="mt-(--space-2) mono text-(--text-xs) text-(--muted)">{post.date} • {post.read}</div></div>
    <div className="md:col-span-6">
      <h2 className="serif text-(--text-3xl) leading-[1.1] tracking-tight group-hover:underline decoration-(--accent) decoration-4 underline-offset-4">{post.title}</h2>
      <p className="mt-(--space-3) text-(--text-md) leading-[1.6] text-(--muted)">{post.excerpt}</p>
      <div className="mt-(--space-4) inline-flex text-(--text-sm) mono tracking-widest border-b border-(--ink) pb-[2px]">READ ESSAY →</div>
    </div>
    <div className="md:col-span-4"><div className="rounded-(--radius) overflow-hidden border border-(--line) h-[200px]"><img src={post.img} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-700" alt={post.title} /></div><div className="mt-(--space-2) mono text-(--text-xs) text-(--muted)">MARGINALIA: Drafted at 2am, inspired by Linear's editorial.</div></div>
  </article>
}
