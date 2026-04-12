import type { LabeledItem } from '../lib/siteCopy'

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
