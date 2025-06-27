import React from 'react'

import * as styles from './styles.css'

type PostHeaderProps = {
  categories: string[]
  title: string
  date: string
}

export default function PostHeader({
  categories,
  title,
  date,
}: PostHeaderProps) {
  return (
    <>
      {/* <div className={styles.categoryWrapper}>
        {categories?.map(category => {
          return (
            <span className={styles.category} key={`category-${category}`}>
              {category}
            </span>
          )
        })}
      </div> */}
      <h1 className={styles.postTitle}>{title}</h1>
      <div className={styles.desc}>
        <span>카야</span>
        <span className={styles.date}>Last Updated {date}</span>
      </div>

      <hr className={styles.divider} />
    </>
  )
}
