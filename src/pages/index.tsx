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

const YEARS = [2024, 2023, 2022]

function IndexPage({
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) {
  const nodes = edges.flatMap(({ node }) => node)

  const filterPostsByYear = (year: string) =>
    nodes.filter(({ frontmatter: { date } }) => date.includes(year))

  return (
    <Layout>
      <h1 className="sr-only">Posts</h1>
      <main style={{ maxWidth: '920px', margin: 'auto' }}>
        {YEARS.map(_ => {
          const posts = filterPostsByYear(_.toString())
          return <PostList posts={posts} year={_} />
        })}
      </main>
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
