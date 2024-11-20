import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

interface ImageDataType {
  images: {
    fallback: {
      src: string
    }
  }
}
interface SiteMetaProps {
  site: {
    siteMetadata: {
      title?: string
      description?: string
      author?: string
      siteUrl?: string
    }
  }
  featuredImage?: ImageDataType
}

interface SeoProps {
  title?: string
  description?: string
}

function Seo({ description, title }: SeoProps) {
  const { site, featuredImage } = useStaticQuery<SiteMetaProps>(
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

  const { siteMetadata: meta } = site

  const metaDescription = description || meta?.description
  const defaultTitle = meta?.title as string
  const ogImage = featuredImage?.childImageSharp?.gatsbyImageData.images
    .fallback.src as string

  return (
    <>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${meta.siteUrl}${ogImage}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={meta?.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:twitter:image"
        content={`${meta.siteUrl}${ogImage}`}
      />
      <meta
        name="google-site-verification"
        content="iTY7mkmlSlt3iy_mmLsi6ZcuMvHKzKlcig-Kmcfeazs"
      />
    </>
  )
}

export default Seo
