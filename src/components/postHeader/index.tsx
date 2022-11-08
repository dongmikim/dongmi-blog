import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

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
      <div className={styles.categoryWrapper}>
        {categories?.map(category => {
          return (
            <span className={styles.category} key={`category-${category}`}>
              {category}
            </span>
          )
        })}
      </div>
      <h1 className={styles.postTitle}>{title}</h1>
      <div className={styles.desc}>
        <span className={styles.avatar}>
          <StaticImage src="../../images/avatar.png" alt="A dinosaur" />
        </span>
        <span>덩미(Dongmi Kim)</span>
        <span className={styles.date}>Last Updated {date}</span>
      </div>

      <hr className={styles.divider} />
    </>
  )
}
