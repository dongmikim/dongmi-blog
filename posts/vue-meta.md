---
date: '2024-05-27'
title: 'Vue 메타태그 적용하기'
categories: ['Vue', 'SEO', 'UX']
summary: '브라우저 타이틀 변경해서 사용성 개선하기'
---

현재 작업 중인 프로덕트는 SEO가 필요 없는 상황이었습니다. 그래서 메타태그와 관련된 작업이 전혀 이루어지지 않은 상태였습니다.   
모든 페이지에서 동일한 메타 타이틀이 표시되고 있었는데, 이는 크롤러뿐만 아니라 사용자에게도 중요한 요소입니다. 페이지마다 동일한 타이틀이 있으면 브라우저에서 여러 탭을 열 때 각각의 페이지를 구분하기 어렵습니다. 이러한 불편함을 개선하고자 동적으로 페이지 타이틀을 추가하기로 했습니다.

1. `<title>...</title>`  
   앞서 언급했듯이, 이 프로덕트는 SEO가 필요하지 않습니다. 실제로 `robots.txt` 파일을 통해 크롤러의 접근을 차단하고 있기 때문에 사용성을 개선하기 위해 title 태그만 동적으로 변경했습니다.

2. 적용 방법  
   두 가지 방법을 고려했으며, 저는 라이브러리를 설치하지 않고 route 속성을 이용하는 방식을 선택했습니다.

## Vue-meta로 메타 설정하기

[vue-meta](https://github.com/nuxt/vue-meta) 라이브러리를 이용하면 동적으로 메타태그를 설정할 수 있습니다. 타이틀 뿐만 아니라 캐노니컬 태그 등 다양한 메타태그 설정이 가능해 SEO에 도움이 됩니다.

또한 vue2, vue3를 모두 지원하기 때문에 vue2 기반의 저희 프로덕트에서도 사용할 수 있었습니다.
(아래 vue-meta 설정은 vue2 기반으로 작성되어 있습니다.)

```js
// main.js 
import Meta from 'vue-meta'; 

Vue.use(Meta);
```

<br />
여러 브랜드를 판매하는 카야 쇼핑몰을 예시로 들겠습니다.  
페이지 별 메타 태그들을 `meta`라는 상수 객체에 설정하여 하나의 파일에서 관리하겠습니다.

```js
// constants/meta.js
export const meta = {
  default: {
    title: '감도 깊은 취향 셀렉트샵', // output: 감도 깊은 취향 셀렉트샵 | 카야 쇼핑몰
    titleTemplate: '%s | 카야 쇼핑몰',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content:
          '패션, 라이프스타일, 컬처까지 카야 쇼핑몰만의 감도 깊은 셀렉션을 만나보세요',
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
          content: `카야 쇼핑몰에에서 제공하는 ${productName}의 혜택을 확인하세요.`,
        },
      ],
    }
  },
}
```

- `titleTemplate`: 고정되는 타이틀 값을 설정할 수 있습니다.
- `vmid`: 각 페이지 별로 설정한 메타태그들의 고유한 식별자입니다. vmid를 설정하지 않으면 페이지에서 동일한 메타 태그가 중복되어, 크롤러에게 혼선을 야기할 수 있습니다.

<br />

```js
// pages/productDetail.vue
<script>
import { meta } from '@/shared/constants/meta'

export default {
  name: 'productDetail',
  metaInfo () {
    const { name, brand } = this.productDetail
    return meta.productDetail(name, brand) // output: 
  },
  // ...
}
</script>
```

상품 상세 페이지에 `vue-meta` 라이브러리에서 제공하는 `metaInfo()` API를 사용했습니다. 이 API를 통해 이전에 작성한 `meta` 상수 객체를 활용하여 동적인 메타 데이터를 추가할 수 있었습니다.  
`vue-meta`를 사용하면 손쉽게 다이나믹 메타태그를 적용할 수 있지만, 라이브러리 추가에 대해 신중해야 합니다. 프로젝트에 외부 의존성을 추가하면 유지보수와 관리의 복잡성이 증가할 수 있습니다.   
참고로 의존성 관리의 중요성에 대해 다룬 좋은 글이 있어 함께 첨부합니다. ([라이브러리를 쓰지 않아야 할 이유](https://velog.io/@woohm402/when-not-to-use-library))

`vue-meta` 는 Nuxt팀이 만들어 신뢰성이 높고 안정성이 보장된 라이브러리입니다. 하지만 메인테이너가 10개월 전에 더 이상 관리하지 않겠다고 발표했으므로, 추후 발생할 수 있는 에러 수정에 대해 보장받을 수 없음을 고려해야 합니다.


## router로 메타 설정하기
별도의 패키지 추가 없이도 메타 태그를 설정할 수 있습니다. 라우터의 `meta` 속성에 title을 적용하고, 라우터 인스턴스의 `afterEach()` 메서드를 통해 타이틀을 동적으로 설정하는 방법입니다.

```js
const homePage = {
  path: '/home',
  name: 'home',
  component: HomePage,
  meta: { title: '메인' }, // output: 메인 | 카야 쇼핑몰

router.afterEach((to, from) => {
  const defaultTitle = '카야 쇼핑몰'
  if (to.meta?.title) {
    document.title = `${to.meta.title} | ${defaultTile}` || defaultTile
  }
})
```

<br />
대부분의 페이지는 위와 같이 적용할 수 있습니다. 하지만 API에서 응답받은 데이터로 타이틀을 설정해야 하는 페이지도 있습니다.
Router에서는 어떤 데이터를 넣을지 알 수가 없기 때문에, 개별적으로 페이지 컴포넌트의 `created` 훅에서 설정합니다.

```js
// productDetail.vue
created () { 
  const { name, brand } = this.productDetail
  document.title = `${name} - ${brand} | 카야 쇼핑몰`
}
```

<br />
이렇게 하면 동적으로 타이틀을 적용할 수 있습니다. 러나 타이틀 관리가 파편화될 수 있으므로 유틸리티 함수를 추가해 이를 해결했습니다. 
유틸리티 함수를 통해 타이틀 설정 방식을 일관되게 유지하고, 기본 타이틀 값을 보장할 수 있습니다. 또한, 타이틀이 설정되지 않은 페이지나 에러가 발생할 경우 방어적으로 기본 타이틀이 보여집니다.
이 방법은 의존성 추가 없이 메타 태그를 동적으로 설정할 수 있지만, 타이틀 외의 다른 메타 태그를 설정할 때는 코드가 더 복잡해질 수 있는 단점이 있습니다.

```js
// utils/meta.js
export const setMetaTitle = (title) => {
  const defaultTitle = 'Medit Link'
  document.title = title ? `${title} | ${defaultTitle}` : defaultTitle
}

// productDetail.vue
import { setMetaTitle } from '@/utils/meta'

created () { 
  const { name, brand } = this.productDetail
  setMetaTitle(`${name} - ${brand}`)
}
```

## 결론

저는 SEO를 고려할 필요가 없는 프로덕트였기 때문에, 메타 태그 중 title 태그만 동적으로 적용하는 데 집중했습니다. 이에 따라 별도의 패키지 설치 없이 router를 활용한 방식을 채택했습니다.

만약 SEO 최적화가 중요한 프로젝트였다면, `vue-meta` 라이브러리를 선택했을 것입니다. 비록 메인테이너의 지원이 중단되었지만, 안정적이고 신뢰할 수 있는 라이브러리이며, 직접 코드를 추가하는 비용보다 효율적이기 때문입니다.

B2B, B2C, 어드민 페이지를 막론하고 모든 웹 애플리케이션에는 사용자가 있습니다. 페이지 타이틀을 적절히 설정하는 작업은 단순히 SEO뿐만 아니라 사용성을 크게 향상시킬 수 있는 효율적인 방법입니다. 여러 브라우저 탭에서 각 페이지를 쉽게 구분할 수 있게 함으로써, 사용자 경험을 향상시키고, 결과적으로 더 나은 제품을 제공할 수 있습니다.

## 참고
- [vue-meta와 Meta tag](https://pozafly.github.io/html/meta-tag-and-vue-meta/)
- [Vue.js로 웹페이지 타이틀 동적으로 변경하는 방법](https://artdeveloper.tistory.com/21)
