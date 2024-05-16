export type PostFrontmatterType = {
  title: string
  date: string
  categories: string[]
  summary: string
}

export type PostItemType = {
  id: string
  html: string
  tableOfContents: string
  fields: {
    slug: string
  }
  frontmatter: PostFrontmatterType
}

export type PostListItemType = {
  node: {
    id: string
    html: string
    tableOfContents: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
  }
}

export type PostTemplateType = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}
