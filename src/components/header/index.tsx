import React, { useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Linkedin, Github, Sun, Moon } from 'lucide-react'

import * as styles from './styles.css'

type HeaderProps = {
  siteTitle: string
}

type Theme = 'light' | 'dark'

export default function Header({ siteTitle }: HeaderProps) {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.body.className = newTheme
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link to="/" className={styles.logo}>
          <StaticImage src="../../images/avatar.png" alt={siteTitle} height={40} />
          <strong className={styles.logoText}>Kaya Devlog</strong>
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink} activeClassName={styles.navLinkActive}>
            Posts
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
        {/* <button className={styles.themeToggle} onClick={toggleTheme}>
        {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
      </button> */}
      </div>
    </header>
  )
}
