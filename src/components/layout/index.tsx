import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from 'components/header'
import Footer from 'components/footer'

import * as styles from './styles.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  // if (typeof window !== 'undefined' && window.matchMedia) {
  //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     document.body.className = 'dark'
  //   } else {
  //     document.body.className = 'light'
  //   }
  // }

  const data: { site: { siteMetadata: { title: string } } } =
    useStaticQuery(graphql`
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
      <Header siteTitle={data.site.siteMetadata?.title || 'Dongmi Log'} />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}
