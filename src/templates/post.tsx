import React, { useEffect, useMemo, useState } from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/layout'
import PostContent from 'components/postContent'
import * as styles from './post.css'
import TableOfContents from 'components/toc'
import PostHeader from 'components/postHeader'
import { PostListItemType } from 'types/postItem'

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

export default function PostTemplate({
  data: {
    allMarkdownRemark: { edges },
  },
}: PostTemplateProps) {
  const {
    node: {
      html,
      tableOfContents,
      frontmatter: { title, summary, date, categories },
    },
  } = edges[0]

  return (
    <Layout>
      <article className={styles.postWrapper}>
        <PostHeader categories={categories} title={title} date={date} />
        <PostContent html={html} />
        <TableOfContents content={tableOfContents} />
      </article>
    </Layout>
  )
}

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          tableOfContents
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
          }
        }
      }
    }
  }
`
