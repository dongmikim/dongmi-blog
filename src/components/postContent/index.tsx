import React from 'react'
import * as styles from './styles.css'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

interface PostContentProps {
  html: string
}

export default function PostContent({ html }: PostContentProps) {
  deckDeckGoHighlightElement()

  return (
    <div
      className={styles.postContent}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
