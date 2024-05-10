import React, { useEffect } from 'react';
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { createIcons, Linkedin, Github, Sun, Moon } from 'lucide';

import * as styles from './styles.css'

type HeaderProps = {
  siteTitle: string
}


export default function Header({ siteTitle }: HeaderProps) {
  useEffect(() => {
    createIcons({
      icons: {
        Github,
        Linkedin,
        Sun,
        Moon,
      },
    })
  }, [])

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
      <Link
        to="https://www.linkedin.com/in/dongmi-kim-99a546226/"
        className={styles.socialLink}
      >
        <i data-lucide="linkedin" />
      </Link>
      <Link to="https://github.com/dongmikim">
        <i data-lucide="github" />
      </Link>
      {/* <button className={styles.themeToggle}>
        <i data-lucide="sun" />
        <i data-lucide="moon" />
      </button> */}
    </header>
  )
}
