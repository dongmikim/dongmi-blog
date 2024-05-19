import React from 'react'

import { PostItemType } from 'types/postItem'
import PostItem from 'components/postItem'
import * as styles from './styles.css'

type PostListProps = {
  posts: PostItemType[]
  year: number
}

export default function PostList({ posts, year }: PostListProps) {
  return (
    <section className={styles.container}>
      <h3 className={styles.year}>{year}</h3>
      <ul className={styles.wrapper}>
        {posts.map(({ id, fields: { slug }, frontmatter }: PostItemType) => (
          <li key={id}>
            <PostItem {...frontmatter} link={slug} />
          </li>
        ))}
      </ul>
    </section>
  )
}
