import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/layout'
import Seo from 'components/seo'
import PostList from 'components/postList'
import { PostListItemType } from 'types/postItem'

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

function IndexPage({
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) {
  return (
    <Layout>
      {/* <Seo title="Dongmi Blog" description={''} /> */}
      <h1 style={{ display: 'none' }}>Posts</h1>
      <PostList posts={edges} />
    </Layout>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
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
