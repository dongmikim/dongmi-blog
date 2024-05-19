import React from 'react'
import * as styles from './styles.css'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

interface PostContentProps {
  html: string
}

export default function PostContent({ html }: PostContentProps) {
  deckDeckGoHighlightElement().catch(error => {
    console.error('Error occurred from deckDeckGoHighlightElement: ', error)
  })

  return (
    <div
      className={styles.postContent}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
