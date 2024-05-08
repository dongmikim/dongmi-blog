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
      </Link>

      <nav className={styles.nav}>
        <Link
          to="/posts"
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Posts
        </Link>
      </nav>
      <Link to="https://www.linkedin.com/in/dongmi-kim-99a546226/">
        LinkedIn
      </Link>
      <Link to="https://github.com/dongmikim">Github</Link>
      <button>dark</button>
    </header>
  )
}
