import React from 'react'

import { graphql } from 'gatsby'

import Layout from 'components/layout'
import PostContent from 'components/postContent'
import TableOfContents from 'components/toc'
import PostHeader from 'components/postHeader'
import Seo from 'components/seo'
import { PostTemplateType } from 'types/postItem'

import * as styles from './post.css'

export function Head({
  data: {
    allMarkdownRemark: { edges },
  },
}: PostTemplateType) {
  const { node } = edges[0]

  return (
    <Seo
      title={node.frontmatter.title}
      description={node.frontmatter.summary}
    />
  )
}

export default function PostTemplate({
  data: {
    allMarkdownRemark: { edges },
  },
}: PostTemplateType) {
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
        <div className={styles.postInner}>
          <PostHeader categories={categories} title={title} date={date} />
          <PostContent html={html} />
        </div>

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
