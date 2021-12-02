---
categories:
  - frame
  - vue
  - vue3
---

# vue-router

## useRoute

- 只能在路由组件中使用
- 在普通 js 文件中引入无法获取 route

```js
import { useRoute } from "vue-router";
const route = useRoute();
```

### 作用域问题

- 在 setup 中调用 go 没问题
- 点击时 route 和 router 就是 undefined
- 所以无法在 js 中获取到 route/router，只能在组件到 setup 中可以访问到

```vue
<template>
  <button @click="go">点击跳转</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "",
  setup() {
    go();
    function go() {
      const route = useRoute();
      const router = useRouter();
      console.log(route, router);
    }
    return {
      go,
    };
  },
});
</script>
```

- 在 setup 中声明 route 和 router 就没问题

```js
setup(){
  const route = useRoute();
  const router = useRouter();
  go()
  function go(){
    console.log(route, router);
  }
  return {
    go,
  }
}
```
