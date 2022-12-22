import React from 'react'

import Layout from 'components/layout'
import Seo from 'components/seo'

import * as styles from '../../styles/styles.css'

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
          <p>
            공부하고 생각한 것을 평소에 노션으로 작성하고 있습니다. <br />그
            중에서 정제된 내용을 이 블로그에 남기고 있습니다.
          </p>
          <p>
            최대한 정확한 내용을 담으려고 노력합니다.
            <br />
            그럼에도 불구하고 잘못된 내용이 보인다면 말씀해 주세요.
            <br />
            피드백 좋아요 👍
          </p>
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
