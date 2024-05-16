import React from 'react'
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

export function Head() {
  return <Seo />
}

function IndexPage({
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) {
  const t = edges.flatMap(({ node }) => node)

  const a = t.filter(_ => _.frontmatter.date.includes('2022'))
  const b = t.filter(_ => _.frontmatter.date.includes('2023'))

  console.log('a', a)
  console.log('b', b)
  return (
    <Layout>
      <h1 style={{ display: 'none' }}>Posts</h1>
      <PostList posts={a} />
      <PostList posts={b} />
    </Layout>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: ASC } }]
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
