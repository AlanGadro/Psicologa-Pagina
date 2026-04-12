import type { ReactNode } from 'react'
import SectionHeading from './SectionHeading'

type SectionShellProps = {
  id?: string
  sectionClassName?: string
  containerClassName?: string
  eyebrow: string
  title: string
  description: string
  centered?: boolean
  children: ReactNode
}

function SectionShell({
  id,
  sectionClassName = 'section',
  containerClassName = 'container',
  eyebrow,
  title,
  description,
  centered,
  children,
}: SectionShellProps) {
  return (
    <section className={sectionClassName} id={id}>
      <div className={containerClassName}>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          centered={centered}
        />
        {children}
      </div>
    </section>
  )
}

export default SectionShell
