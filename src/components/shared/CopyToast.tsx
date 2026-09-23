import React from "react"
export function CopyToast({ text }: { text: string }) {
  const [show, setShow] = React.useState(false)
  return <button onClick={() => { navigator.clipboard.writeText(text); setShow(true); setTimeout(() => setShow(false), 2000) }} className="relative mono text-(--text-xs) tracking-widest uppercase border border-(--line-2) px-(--space-3) py-(--space-2) rounded-full hover:bg-(--surface-2) transition-colors">
    {text}
    {show && <span className="absolute -top-(--space-8) left-1/2 -translate-x-1/2 bg-(--ink) text-(--paper) text-(--text-xs) px-(--space-2) py-(--space-1) rounded-full">Copied!</span>}
  </button>
}
