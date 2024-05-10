import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Linkedin, Github, Sun, Moon } from 'lucide-react'

import * as styles from './styles.css'

type HeaderProps = {
  siteTitle: string
}

export default function Header({ siteTitle }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <StaticImage src="../../images/logo.png" alt={siteTitle} width={80} />
      </Link>

      <nav className={styles.nav}>
        <Link
          to="/posts"
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Posts
        </Link>
        <Link
          to="/projects"
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Projects
        </Link>
      </nav>
      <div className={styles.socialLinkGroup}>
        <Link
          to="https://www.linkedin.com/in/dongmi-kim-99a546226/"
          className={styles.socialLink}
        >
          <Linkedin size={20} />
        </Link>
        <Link to="https://github.com/dongmikim" className={styles.socialLink}>
          <Github size={20} />
        </Link>
      </div>
      <button className={styles.themeToggle}>
        <Sun size={20} />
      </button>
    </header>
  )
}
