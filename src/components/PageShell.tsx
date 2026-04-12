import type { ReactNode } from 'react'

type PageShellProps = {
  children: ReactNode
}

function PageShell({ children }: PageShellProps) {
  return <main className="app-shell">{children}</main>
}

export default PageShell
