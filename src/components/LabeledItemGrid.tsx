import type { LabeledItem } from '../lib/siteCopy.ts'

type LabeledItemGridProps = {
  items: LabeledItem[]
  listClassName?: string
  itemClassName?: string
  headingTag?: 'h3' | 'strong'
}

function LabeledItemGrid({
  items,
  listClassName = 'card-grid',
  itemClassName = 'info-card',
  headingTag = 'h3',
}: LabeledItemGridProps) {
  return (
    <div className={listClassName}>
      {items.map((item) => {
        // Some sections need a stronger semantic heading than others, so the
        // tag stays configurable without duplicating the card layout.
        const HeadingTag = headingTag

        return (
          <article className={itemClassName} key={item.title}>
            <HeadingTag>{item.title}</HeadingTag>
            <p>{item.description}</p>
          </article>
        )
      })}
    </div>
  )
}

export default LabeledItemGrid
