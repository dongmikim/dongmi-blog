import React from 'react'

import { PostListItemType } from 'types/postItem'
import PostItem from 'components/postItem'
import * as styles from './styles.css'

type PostListProps = {
  posts: PostListItemType[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <main className={styles.container}>
      <ul className={styles.wrapper}>
        {posts.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }: PostListItemType) => (
            <li key={id}>
              <PostItem {...frontmatter} link={slug} />
            </li>
          ),
        )}
      </ul>
    </main>
  )
}
