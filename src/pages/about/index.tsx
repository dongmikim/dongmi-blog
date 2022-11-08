import React from 'react'

import Layout from 'components/layout'
import Seo from 'components/seo'

import * as styles from '../../styles/styles.css'

export function Head() {
  return <Seo title={'About'} description={'김동미 소개와 경력'} />
}

export default function AboutPage() {
  return (
    <Layout>
      <main className={styles.container}>
        <div className={styles.intro}>
          안녕하세요. <br />
          <h1>프론트엔드 엔지니어 김동미</h1>입니다. <br />
          내가 만드는 서비스에 기여하고, <br />
          누군가에게 도움이 될 수 있는 개발자가 되고 싶어요.
          <small className={styles.tmi}>
            그리고 평양냉면과 러닝을 좋아해요!
          </small>
        </div>
        <section className={styles.section}>
          <h2>Experience</h2>
          <ul>
            <li className={styles.experienceItem}>
              <strong className={styles.company}>FRIP</strong>
              <span className={styles.experienceDesc}>
                Frontend Engineer | 2022.07 ~{' '}
              </span>
            </li>
            <li className={styles.experienceItem}>
              <strong className={styles.company}>Igloo Security</strong>
              <span className={styles.experienceDesc}>
                Frontend Engineer / Publisher | 2018.08 ~ 2022.06
              </span>
            </li>
            <li className={styles.experienceItem}>
              <strong className={styles.company}>Megazone</strong>
              <span className={styles.experienceDesc}>
                Publisher | 2017.04 ~ 2018.06
              </span>
            </li>
            <li className={styles.experienceItem}>
              <strong className={styles.company}>T SCIENTIFIC</strong>
              <span className={styles.experienceDesc}>
                Publisher | 2015.09 ~ 2017.02
              </span>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h2>Contact</h2>
          <p className={styles.email}>dongmi.public@gmail.com</p>
          <span className={styles.contactItem}>
            <a
              href="https://www.linkedin.com/in/dongmi-kim-99a546226/"
              target="_blank"
            >
              LinkedIn
            </a>
          </span>
          <span className={styles.contactItem}>
            <a href="https://github.com/dongmikim" target="_blank">
              Github
            </a>
          </span>
        </section>
      </main>
    </Layout>
  )
}
