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
        <div>
          <span>Avatar</span>
          <h1>Kaya</h1>
        </div>
        <div>
          <p>
            안녕하세요. 프론트엔드 개발자 카야입니다. (닉네임을 고민할 때,
            카야토스트가 먹고 싶었습니다.)
          </p>
          <p>
            현재는 글로벌 덴탈 회사에서 플랫폼과 어드민을 개발하고 있습니다.
            Vue와 React를 사용하고 있습니다.
          </p>

          <p>
            블로그에서 기술적으로 고민하고 해결했던 경험, 학습했던 내용들을
            기록합니다.
          </p>
        </div>
        {/* <div className={styles.intro}>
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
        </section> */}
      </main>
    </Layout>
  )
}
