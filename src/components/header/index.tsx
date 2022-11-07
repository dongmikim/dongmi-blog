import React from 'react'
import { Link } from 'gatsby'

import * as styles from './styles.css'

type HeaderProps = {
  siteTitle: string
}

export default function Header({ siteTitle }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <strong>{siteTitle}</strong>
        <span className={styles.textGray}>:</span>{' '}
        <span className={styles.textBlue}>&lt;👩🏻‍💻&gt;</span>
      </Link>

      <nav className={styles.nav}>
        <Link
          to="/"
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Posts
        </Link>
        <Link
          to="/about"
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          About
        </Link>
      </nav>
    </header>
  )
}
