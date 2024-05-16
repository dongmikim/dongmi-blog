import React from 'react'

import { PostItemType } from 'types/postItem'
import PostItem from 'components/postItem'
import * as styles from './styles.css'

type PostListProps = {
  posts: PostItemType[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <main className={styles.container}>
      <span className={styles.year}>2023</span>
      <ul className={styles.wrapper}>
        {posts.map(({ id, fields: { slug }, frontmatter }: PostItemType) => (
          <li key={id}>
            <PostItem {...frontmatter} link={slug} />
          </li>
        ))}
      </ul>
    </main>
  )
}
