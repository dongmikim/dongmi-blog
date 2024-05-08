import React from 'react'

import Layout from 'components/layout'
import Seo from 'components/seo'

import * as styles from '../styles/styles.css'

export function Head() {
  return <Seo title={'About'} description={'소개'} />
}

export default function AboutPage() {
  return (
    <Layout>
      <main className={styles.container}>
        <div className={styles.intro}>
          안녕하세요. <br />
          <h1>프론트엔드 엔지니어 김동미</h1>입니다. <br />
        </div>

        <div className={styles.desc}>
          <p>학습한 내용을 복습하고, 누군가에게 도움이 되고자 글을 씁니다.</p>
          <p>요즘 협업하는 방식에 대해 관심이 많습니다.</p>
        </div>

        <section className={styles.section}>
          <h2>Contact</h2>
          <p className={styles.email}>📪 dongmi.public@gmail.com</p>

          <span className={styles.contactItem}>
            <a
              href="https://www.linkedin.com/in/dongmi-kim-99a546226/"
              target="_blank"
            >
              📄 LinkedIn
            </a>
          </span>
          <span className={styles.contactItem}>
            <a href="https://github.com/dongmikim" target="_blank">
              ⚙️ Github
            </a>
          </span>
        </section>
      </main>
    </Layout>
  )
}
