import React from "react"
export function StaggerText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return <span className={className}>
    {text.split(" ").map((w, i) => <span key={i} className="reveal-line inline-block mr-[0.25em]"><span style={{ animationDelay: `${delay + i * 0.06}s` } as React.CSSProperties}>{w}</span></span>)}
  </span>
}
