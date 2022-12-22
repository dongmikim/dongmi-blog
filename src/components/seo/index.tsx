import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type SeoProps = {
  title: string
  description?: string
  author?: string
}

function Seo({ description, title }: SeoProps) {
  const { site, featuredImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        featuredImage: file(
          absolutePath: { glob: "**/src/images/og-img.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 1200)
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const ogImage = featuredImage?.childImageSharp?.gatsbyImageData

  console.log(ogImage)

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage.images.fallback.src} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:creator"
        content={site.siteMetadata?.author || 'Dongmi Kim'}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  )
}

export default Seo
