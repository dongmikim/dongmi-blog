import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from 'components/header'
import Footer from 'components/footer'

import * as styles from './styles.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.wrapper}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}
