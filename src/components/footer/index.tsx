import { style } from '@vanilla-extract/css'
import React from 'react'
import * as styles from './styles.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <small>© 2022 Dongmi Kim, Powered by Gatsby</small>
      </div>
    </footer>
  )
}
