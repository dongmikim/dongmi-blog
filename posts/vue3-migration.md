---
date: '2024-11-10'
title: 'Vue2에서 Vue3로 마이그레이션 가이드'
categories: ['Vue']
summary: 'Vue2 안녕...!'
---

이 글은 Vue2에서 Vue3(Options API)로의 전환한 내용에 대해 작성합니다.

---

## 마이그레이션의 필요성

Vue2의 공식 지원이 2023년 12월에 종료되어 Vue3 마이그레이션을 결정하게 되었습니다.

지원 종료 이후에는 보안 업데이트나 버그 수정이 제공되지 않습니다.
Vue2는 타입스크립트 적용이 제한적이고, 로직을 선언적으로 작성하기 어려운 구조적 한계도 있었습니다.

이러한 기술적 부채를 해소하고, 프로젝트의 안정성을 높이기 위해 마이그레이션을 진행했습니다. 

## 마이그레이션을 통한 기대 결과

Vue3에서 개선된 특징들로 다음 결과를 기대할 수 있습니다.

- 성능 향상
    - Virtual DOM 최적화
    - 트리 쉐이킹 지원으로 더 작은 번들 크기
- Composition API 도입
    - Composition 함수를 통한 로직 개선의 편리성
    - 로직과 상태를 기능별로 관리할 수 있어서, 가독성과 재사용성 향상
- 타입스크립트 도입을 통한 프로젝트 안정성 증가

> **Composition API**  
> React의 함수형 컴포넌트처럼 `setup` 함수에서 상태와 로직을 정의해 사용할 수 있습니다.   
> 기존 Options API와 달리, 로직과 상태를 기능별로 모아 관리하므로 코드의 가독성과 재사용성이 높아집니다.

## Vue3 마이그레이션

### 1. 작업 범위

마이그레이션에 앞서 Vue3와 의존성이 있는 레포지토리를 검토했습니다.

아래는 메인 프로젝트에 의존된 패키지들입니다. 

1. Design System
2. Renderer (3D)

위의 두 패키지는 메인 프로젝트에서 사용하고 있는 라이브러리로 동시에 마이그레이션이 필요했습니다.

### 2. 작업 계획

총 3개의 프로젝트를 동시에 진행하기 때문에 작업을 세분화하여 Task, Sub Task로 지라 티켓을 생성했습니다.  
그리고 작업 순서와 일정을 티켓에서 관리하여 팀원들에게 진행 상황을 공유했습니다.

### 3. 진행 단계별 가이드

그리고 다음 단계들을 순차적으로 진행했습니다.

1. 마이그레이션 빌드 설정 추가
2. 호환되지 않는 문법 수정 ([공식 마이그레이션 가이드](https://www.notion.so/Build-127b889b7f8980fabc77c5e30514ca0f?pvs=21) 기반)
3. 의존성 라이브러리 교체 및 업그레이드  
(디자인 시스템: 스토리북 버전 업그레이드 및 대응 작업 포함)
4. 개발 QA

#### 3.1. 마이그레이션을 위한 초기 설정

Vue팀은 점진적인 마이그레이션이 가능하도록 compat을 제공합니다. 

> **Compat**  
> Vue2와 Vue3 사이의 호환성을 제공하는 빌드 버전

compat을 설치하고 관련된 설정을 해줍니다.

```jsx
pnpm i @vue/compat
```

```jsx
// TODO: 마이그레이션 작업이 완료되면 compat 설정을 제거해야 합니다!

// vue-loader.conf.js
compilerOptions: {
  compatConfig: {
    MODE: 2,
  },
}

// webpack.config.js
resolve: {
  alias: {
    vue: '@vue/compat',
    //...
  }
  //...
}
```

#### 3.2. Vue3 문법 적용

공식적인 [마이그레이션 가이드](https://v3-migration.vuejs.org/)에 기반하여 변경이 필요한 문법들을 목록화한 후에 변경 범위와 사이드 이펙트가 작은 단위부터 적용했습니다.

변경된 문법들은 다음과 같습니다.

1. 라이프 사이클
    - `beforeDestroy` → `beforeUnmount`
    - `destroyed` → `unmounted`
2. Named Slot
    - `this.$scopedSlots.header` → `this.$slots.header()`
    - `slot="header"`  → `#header`
3. v-deep 속성
    
    `v-deep` 에서 `:deep`으로 변경되었습니다.  
    이전에는 deep selector를 최상위 요소에 감싸면 자식 요소에도 스타일이 변경되었지만, vue3에선 스타일을 변경할 자식 요소에 명시적으로 감싸줘야 합니다.
    
    ```jsx
    // Vue2
    .custom-modal::v-deep {
      .modal-dialog {
        // ...
      }
    }
    
    // Vue3
    .custom-modal {
      :deep(.modal-dialog) {
       // ...
      }
    }
    ```
    
4. scoped css 

    Vue3에서는 슬롯 콘텐츠를 명시적으로 타겟팅해줘야 합니다.
    
    ```jsx
    
    /* 자식 컴포넌트 Child.vue */
    <template>
     <div>
      <slot />
     </div>
    </template>
    
    <style scoped>
    /* Vue2 */
    input {
      border: 1px solid
    }
    
    /* Vue3 */
    ::slotted(input) {
      border: 1px solid
    }
    </style>
    
    /* 부모 컴포넌트 */
    <template>
      <Child>
        <input />
      </Child>
    </template>
    ```
    
5. template 태그에서 `v-for` 사용  

   key prop은 템플릿 태그에서 사용해야 합니다.
    
    ```jsx
    // Vue2
    <template v-for="todo in todos">
      <li :key="todo.id">{{ todo.name }}</li>
    </template>
    
    // Vue3
    <template v-for="todo in todos" :key="todo.id">
      <li>{{ todo.name }}</li>
    </template>
    ```
    
6. 전역 속성 설정 및 참조 방식
    
    ```jsx
    /* 전역 속성 설정 */
    // Vue3에서는 createApp 함수로 새로운 앱 인스턴스를 생성하고, 루트 컴포넌트를 전달해줘야 합니다.
    import { createApp } from 'vue'
    import App from './App.vue'
    
    const app = createApp(App)
    
    /* 전역 속성 참조 */
    // Vue2: Vue.prototype, Object.defineProperty를 사용하여 전역 속성 추가
    Vue.prototype.$auth.clearToken()
    
    // Vue3: app.config.globalProperties로 전역 속성 추가
    app.config.globalProperties.$auth.clearToken()
    ```
    
7. set
    
    ```jsx
    // Vue2
    Vue.set(obj, 'newProp', 123)
    
    // Vue3
    state.obj = { ...state.obj, newProp: 123 }
    ```
    
8. v-model
    
    value가 modelValue로, input이 update:modelValue로 변경되었습니다.  
    그리고 emits를 명시적으로 작성하도록 권장합니다.
    
    ```jsx
    /* 자식 컴포넌트에서 전달된 v-model 사용 */
    // Vue2
    export default {
      props: ['value'],
      emits: ['input']
    }

    // Vue3
    export default {
      props: ['modelValue'],
      emits: ['update:modelValue']
    }
    ```
    
9. .native modifier  
    `.native` 수정자가 제거되었습니다.
    ```jsx
    // Vue2
    <Component @click.native="sendToMessage" />
    
    // Vue3
    <Component @click="sendToMessage" />
    export default {
     emits: ['sendToMessage']
    }
    ```
    
10. eventBus
    
    vue2에서 제공하던 이벤트 버스가 제거되었습니다. 저희는 우선 이벤트 버스를 외부 라이브러리 mitt으로 교체하고, 점진적으로 걷어내기로 했습니다.
    
    ```jsx
    // Vue2
    const eventBus = new Vue()
    this.$eventBus.$off('toggleSidebar')
    
    // Vue3
    import mitt from 'mitt'
    export const eventBus = mitt()
    this.eventBus.off('toggleSidebar')
    ```
    
11. v-on keyCode
    
    숫자가 아니라 명시적인 네이밍으로 키 이벤트를 설정해야 합니다.
    
    ```jsx
    // Vue2
    <input v-on:keyup.13="submit" />

    // Vue3
    <input v-on:keyup.enter="submit" />
    ```
    
12. 반응성  
마이그레이션 과정에서 가장 주의해야하는 부분입니다. Vue3의 반응성 시스템은 **Proxy를 사용**하여 객체의 변경을 감지하고 추적합니다.   
Vuex에서 **깊은 복사로 생성한 객체를 재할당하면, 참조하는 메모리 주소가 변경되어 반응성을 잃어버리는 결과가 초래됩니다.**  
즉, 값은 변경되었으나 리렌더링이 발생하지 않습니다. 이는 리액트의 불변성 패러다임과는 정반대이므로 주의가 필요합니다.

```jsx
data() {
  return {
    user: { name: 'kaya' }
  } 
},
methods: {
  // ❌ 반응성 손실
  updateUserInfo() {
    this.user = structuredClone(this.user) // 깊은 복사로 참조가 달라짐
  },
  // ✅ 반응성 유지
  updateUserInfo(newUser) {
    this.user = {...this.user, newUser} // 얉은 복사로 동일한 참조 유지
  },
}
```

13. 객체 비교 toRaw

Vue3에서는 Proxy로 래핑된 반응형 객체를 원본 객체로 변경해 주는 `toRaw` 메서드를 제공합니다.
toRaw는 중첩 객체의 깊은 비교나 원본 데이터를 전달해야 하는 상황에서 사용합니다.

#### 3.3. 의존성 라이브러리 교체

package.json을 통해 Vue3 호환성 검토가 필요한 라이브러리들을 파악합니다.

일반적으로 UI 라이브러리 마이그레이션에 가장 많은 시간이 소요됩니다. 다행히 저희는 vue2용 ₩element-ui₩를 사전에 제거해두어 이 부분의 작업 시간을 단축할 수 있었습니다.

##### 각 라이브러리별 대응 방식
1. 공식 마이그레이션 가이드가 있는 경우, 가이드에 따라 구문 대응합니다.
2. Vue3 미지원 라이브러리라면 대체 라이브러리를 적용하거나 자체 구현했습니다.

##### 주요 변경 패키지
- vuex
- vue-router
- vue-i18n
- vue-multiselect
- hooper : carousel을 구현하는 라이브러리로 swiper로 교체
- vuedraggable
- vue2-touch-events: 제거하고 swiper로 교체
- floating-vue
- vue-qrcode

#### 3.4. 개발 QA

틀어진 UI와 기능별 정상 동작을 확인하기 위해, QA팀에 요청 전에 개발팀 내부에서 QA를 진행했습니다.

1. 1차 단위 테스트
    1. UI 및 동작 테스트 (+반응형) 
    2. 개발자 도구 Console Warning
    3. 웹뷰 페이지 확인
    4. 지원 브라우저 테스트
    5. 환경별 분기 처리된 로직 테스트
2. 2차 통합 테스트: QA팀에서 시나리오를 제공받아 진행했습니다.
    1. 베이직 시나리오
    2. 유저 플로우 시나리오

### 그 외 이슈 및 해결

#### v-for, v-show 디렉티브 우선순위 문제

Vue3 구문 대응을 완료했음에도 발생한 버그로,  
공식 문서에도 상세히 나와있지 않은 디렉티브 간의 우선순위 문제였습니다.

##### 문제 상황

`v-for`와 `v-show` 를 같이 사용할 때 index가 정상적으로 변경되지 않는 현상

##### 해결

디렉티브 간에는 실행 우선순위가 존재합니다. 공식 문서에는 `v-if`와 `v-for`의 우선순위만 언급되어 있지만, 실제로는 다음과 같은 우선순위가 적용되는 것으로 확인됐습니다.

`v-if` → `v-for` → `v-show`

```jsx
// Vue2
<template v-for="idx in 3" v-show="idx - 1 === currIdx" :key="idx">
 //...
</template>

// Vue3
<template v-for="idx in 3" :key="idx">
	<div v-show="idx - 1 === currIdx">
	//...	
	</div>
</template>
```

#### 이벤트가 중복 호출되는 문제

##### 문제 상황
Vue3에서 emits 옵션에 이벤트를 정의하는 것은 권장 사항입니다. 그러나 기본 이벤트는 `emits` 에 명시적으로 작성하지 않는다면 이벤트가 2번 호출되는 문제가 발생합니다.

1. 네이티브 이벤트 
2. 커스텀 이벤트

##### 해결
그렇기 때문에 이런 경우에는 커스텀 이벤트만 호출되도록 emits에 명시적으로 이벤트를 정의해줘야 합니다.  
(관련 문서: https://ko.vuejs.org/guide/components/events)

```jsx
<CustomButton @click="onCustomClick" />

<script>
exprot default {
  //...
  emits: ['click'],
  methods: {
    onCustomclick (e) {
      this.$emit('click', e)
       // emits에 명시적으로 추가했기 때문에, 
       // native DOM 요소의 클릭 이벤트가 아닌 
       // 커스텀 클릭 이벤트가 emit 된다.
    }
  }
}
</script>
```

## 추가 개선 작업

위 마이그레이션 작업 이후에 계획중이거나, 진행중인 개선 작업입니다.

1. 믹스인 제거  
Vue2에서 컴포넌트 로직 재사용을 위해 사용되던 믹스인은 초기 오버로드와 데이터 출처 추적의 어려움 등 여러 문제점을 가지고 있습니다. Vue3에서는 이러한 문제 해결을 위해 Composition API를 도입했습니다.
(참고: [Mixin의 한계와 Composition API 도입](https://haezzz.netlify.app/avoid-using-mixins/))

2. 타입스크립트 전환  
Vue3로 올리고 서비스 안정성이 확보된 이후에 시작했습니다!   
any 타입과 js 파일 형식을 허용한 뒤에 유틸 함수부터 점진적으로 적용중입니다.

3. Options API → Setup Script  
setup script는 더 간결한 컴포넌트 로직 작성을 가능하게 합니다. options api와 동시에 적용이 가능한 부분이므로 컴포지션 API 전에 변경해볼 수 있습니다.
    
    ```jsx
    <!-- Options API -->
    <script>
    export default {
     props: {
       title: String
     },
     data() {
       return { count: 0 }
     },
     methods: {
       increment() {
         this.count++
       }
     }
    }
    </script>
    
    <!-- Setup Script -->
    <script setup>
    const props = defineProps<{ title: string }>()
    const count = ref(0)
    const increment = () => count.value++
    </script>
    ```
    
4. Composition API 전환  

   Composition API를 사용하기 위해서는 믹스인 제거가 필수이기 때문에 동시에 진행 예정에 있습니다.

5. 상태 관리 라이브러리 Vuex → Pinia   

   Vue의 공식 권장사항에 따라, Vuex에서 Pinia로 전환도 계획하고 있습니다.


## 마치며

**아쉬웠던 점**

마이그레이션을 진행하면서 레거시 코드를 마주치게 되면, 레거시를 개선하고 싶은 마음이 생깁니다.

그러나 마이그레이션은 그 자체로 큰 규모의 작업이기 때문에 예상치 못한 버그가 발생할 수 있습니다. 동시에 코드 개선을 진행할 경우 버그 원인 파악이 복잡해지는 디버깅 이슈가 있습니다.

실제로 저희는 마이그레이션 중 일부 도메인의 코드 개선을 동시에 진행했습니다. 이 과정에서 버그 원인 파악에 시간이 소요되어서 아쉬웠습니다.

이런 부분은 팀원들과 논의하여 마이그레이션에만 집중하는게 좋을 거 같습니다.

**찐 마치며..**

이번 마이그레이션 과정에서 가장 인상깊었던 점은 Vue와 React의 서로 다른 반응성 패러다임을 이해하게 된 것입니다. 특히 상태가 반응성을 잃어버린 문제를 해결하면서 각 프레임워크의 상태 관리 철학에 대한 이해도를 높일 수 있었습니다.

작업 범위가 컸기 때문에 혼자했다면 꽤나 지난한 여정이었을 거 같습니다.
하지만 함께한 동료 덕분에 개발 QA 기간을 제외하고 약 2개월이라는 비교적 짧은 기간 내에 Vue3 마이그레이션을 성공적으로 완료할 수 있었습니다! 

## 참고 

- [운영 중인 Vue.js 웹 서비스를 타입스크립트로 다시 쓰기 | 인프콘 2022](https://www.youtube.com/watch?v=BiijrKYwWEA)
