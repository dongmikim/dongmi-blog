import React from 'react'
import { Link } from 'gatsby'

import { PostFrontmatterType } from 'types/postItem'
import * as styles from './styles.css'

type PostItemProps = PostFrontmatterType & { link: string }

export default function PostItem({
  title,
  // categories,
  date,
  summary,
  link,
}: PostItemProps) {
  return (
    <article className={styles.postItem}>
      {/* 카테고리 주석 */}
      {/* <div className={styles.categoryWrapper}>
          {categories?.map(category => (
            <span className={styles.category} key={`${title}-${category}`}>
              {category}
            </span>
          ))}
        </div> */}
      <span className={styles.date}>{date}</span>
      <Link to={link}>
        <h3 className={styles.postTitle}>{title}</h3>
      </Link>
      <p className={styles.postSummary}>{summary}</p>
    </article>
  )
}
