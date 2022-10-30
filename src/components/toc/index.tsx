import React from 'react'

import * as styles from './styles.css'

type TableOfContentsProps = {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  return (
    <div className={styles.tocWrapper}>
      <div
        className={styles.toc}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
