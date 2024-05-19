import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

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
        <div className={styles.profile}>
          <span className={styles.avatar}>
            <StaticImage
              src="../images/avatar.png"
              alt="아바타 이미지"
              width={48}
              height={48}
            />
          </span>
          <h1>Kaya</h1>
        </div>
        <div className={styles.greeting}>
          <p>안녕하세요. 프론트엔드 개발자 카야입니다.</p>
          <p>
            현재는 글로벌 덴탈 플랫폼과 사내 어드민을 개발하고 있으며, Vue와
            React를 사용하고 있습니다. <br /> 요즘은 성능 최적화에 관심이
            있습니다.
          </p>
        </div>
        <ul className={styles.introDesc}>
          <li>개발 외, 평양냉면과 러닝, 독서를 좋아합니다.</li>
          <li>Email: dongmi.public@gmail.com</li>
        </ul>
      </main>
    </Layout>
  )
}
