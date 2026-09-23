import React, { createContext, useContext, useEffect, useState } from "react"
type Theme = "light" | "dark"
const Ctx = createContext<{ theme: Theme; toggle: () => void }>({ theme: "light", toggle: () => {} })
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null
    const sys = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const t = saved || sys
    setTheme(t)
    document.documentElement.classList.toggle("dark", t === "dark")
  }, [])
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"))
  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>
}
export const useTheme = () => useContext(Ctx)
