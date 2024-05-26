---
date: '2024-05-25'
title: 'Vue 메타태그 적용하기'
categories: ['Vue', 'SEO', 'UX']
summary: '브라우저 타이틀 변경해서 사용성 개선하기'
---

현재 작업 중인 프로덕트는 SEO가 필요 없는 상황이었습니다. 그래서 메타태그와 관련된 작업이 전혀 이루어지지 않은 상태였습니다. 모든 페이지에서 동일한 메타 타이틀이 표시되고 있었는데, 이는 크롤러뿐만 아니라 사용자에게도 중요한 요소입니다. 페이지마다 동일한 타이틀이 있으면 브라우저에서 여러 탭을 열 때 각각의 페이지를 구분하기 어렵습니다. 이러한 불편함을 개선하고자 동적으로 페이지 타이틀을 추가하기로 했습니다.

1. `<title>...</title>`  
   앞서 언급했듯이, 이 프로덕트는 SEO가 필요하지 않습니다. 실제로 `robots.txt` 파일을 통해 크롤러의 접근을 차단하고 있습니다. 따라서 사용성을 개선하기 위해 title 태그만 동적으로 변경했습니다.

2. 적용 방법  
   두 가지 방법을 고려했으며, 저는 패키지를 설치하지 않고 route 속성을 이용하는 방식을 선택했습니다.

## Vue-meta로 메타 설정하기

`vue-meta` 패키지를 설치하면 간편하게 동적으로 메타태그를 설정할 수 있습니다. 타이틀 뿐만 아니라 캐노니컬 태그 등 다양한 메타태그 설정이 가능합니다.
또한 메타 설정 파일을 만들면 메타 태그들을 중앙 집중화하여 관리할 수 있습니다.

https://artdeveloper.tistory.com/21
방법

```vue
// main.js import Meta from 'vue-meta'; Vue.use(Meta);
```

```js
export const meta = {
  default: {
    title: '기업전용 모바일쿠폰, 기프티콘 대량발송, 판촉물제작, 기념품제작 1위',
    titleTemplate: '%s | 기프티쇼 비즈',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content:
          '기업용 기프티콘 대량발송부터 기업판촉물까지, 기프티쇼 비즈에서 제공하는 모바일쿠폰, 사업자기프티콘, 판촉물제작, 기념품제작을 만나보세요!',
      },
    ],
  },

  productDetail: (productName = '', brandName = '') => {
    return {
      title: `${productName} - ${brandName}`,
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: `기프티쇼 비즈에서 제공하는 ${productName}의 혜택을 확인하세요. 최신 제품 정보와 특별 프로모션을 놓치지 마세요!`,
        },
      ],
    }
  },
}
```

```vue
// productDetail.vue
<script>
import { meta } from '@/lib/seo/meta'

export default {
  name: 'productDetail',
  metaInfo() {
    const { goodsName, brandName } = this.ggoodsDetailData
    return meta.productDetail(goodsName, brandName)
  },
  // ...
}
</script>
```

이 패키지는 Vue2와 Vue3 모두 지원하고 있지만 고려해야 되는 이유들이 있습니다.
프로젝트에 vue-meta 패키지에 대한 의존성이 추가됩니다.
또한 메인테이너가 관리하지 않겠다고 했습니다.

## router로 메타 설정하기

라우트의 meta 속성에 title을 적용하고, 라우터 인스턴스에 `afterEach()` 메서드에서 타이틀을 적용합니다.

```js
router.afterEach((to, from) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }
})
```

대부분의 페이지는 위와 같이 적용할 수 있습니다.
하지만 API에서 응답받은 데이터로 타이틀을 설정해야 하는 페이지도 있습니다.
Router에서는 어떤 데이터를 넣을지 알 수가 없습니다.
이런 경우 개별적으로 페이지 컴포넌트의 `created` 사이클에서 설정합니다.

```vue
created () { document.title = this.pageDetail }
```

이렇게 되면 동적으로 타이틀을 적용할 수 있습니다. 그렇지만 타이틀에 대한 관리가 파편화됩니다.
그래서 관련된 유틸리티 함수를 추가했습니다.
유틸리티 함수를 이용하면서 타이틀 설정에 대한 방식, default Title 값이 하나로 보장됩니다.
또한 title이 설정되지 않은 페이지나 에러가 발생할 경우(title이 null, undefined)에는 방어적으로 default title이 보여집니다.

3. 선택
   SEO를 고려해 메타태그를 동적으로 적용해야 했다면 vue-meta를 선택했을 것입니다.
   하지만 타이틀 설정 만을 위해 의존성을 하나 더 늘리는 비용이 더 비싸다고 생각되어, 직접 dom의 타이틀을 조작하는 방식으로 했습니다.

B2B, B2C, 어드민이어도 사용자가 있습니다. 이런 타이틀 작업으로도 사용성을 개선할 수 있다고 생각합니다.
