import type { ReactNode } from 'react'

type PageShellProps = {
  children: ReactNode
}

function PageShell({ children }: PageShellProps) {
  // Main landmark wrapper used by page-level routes so the layout keeps a
  // single accessible content region.
  return <main className="app-shell">{children}</main>
}

export default PageShell
