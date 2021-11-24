# Vue3

## setup

- if setup attribute is an async function, components could't render in page.
- need to use Suspense wrap around this component.
- But Suspense is an experimental feature and its API will likely change.

```html
<Suspense>
  <template #default>
    <kol-table />
  </template>
  <template #fallback> loading... </template>
</Suspense>
```

### Suspense

- must have only a child element in template of Suspence, otherwise could't display in page.

```html
<!-- error -->
<Suspense>
  <template #default>
    <div></div>
    <div></div>
  </template>
</Suspense>
```

```html
<!-- correct -->
<Suspense>
  <template #default>
    <div>
      <div></div>
      <div></div>
    </div>
  </template>
</Suspense>
```

### props

- if you would use attributes of props, must receive parameter in setup function

```ts
export default defineComponent({
  // receive attributes from parent
  props: ['data'],
  async setup(props) {
    console.log(props.data);
    return {};
  },
});
```

## data

### ref

- must use 'xxx.value' while get value of variable.

## slot

```vue
<!-- Son.vue -->
<template>
  <slot name="left"></slot>
</template>

<!-- Parent.vue -->
<template>
  <Son>
    <template #left>
    </template>
  </Son>
</template>
```

## customize component

- ~~can trigger event what should not need proxy event or attribute in customized component~~
- 
- 当Select组件的根组件直接是a-select时，可以不需要代理，属性将默认传入a-select组件

```vue
<!-- Parent.vue -->
<template>
  <Select
    v-model:value="state.value"
    :options="state.options"
    @change="changeValue"
  ></Select>
</template>

<!-- Select.vue -->
<template>
  <a-select ref="select">
    <a-select-option v-for="(item, i) in options" :key="i" :value="item.value">
      {{ item.label }}
    </a-select-option>
  </a-select>
</template>
```

## v-model

- 可以指定接受的变量名
- 可以绑定多个v-model

```vue
<!-- Son.vue -->
<template>
  <!-- 接受对应的变量 -->
  <input type="text" :value="value">
  <input type="text" :value="msg">
</template>

<!-- Parent.vue -->
<template>
  <Son v-model:value="value" v-model:msg="msg" />
</template>
```

- 自组件给父组件传值

```js
setup(props, ctx){
  ctx.emit('update:msg',e.target.value)
  ctx.emit('update:value',e.target.value)
}
```

## 踩坑

### input

- 给input绑定的值必须是reactive创建响应式对象的属性，ref创建字符串将无法输入

### 双向数据绑定

- 对象直接重新赋值页面不响应

```js
const data = reactive({
  a: 1
})
data = {
  b: 2
}
```

### img src

- protocol should added in img src, otherwise an error occurred, maybe it's a bug of vite

```html
<!-- correct -->
<img src="http://xxx">
<!-- An error occurred while img src without protocol (http or https)  -->
<img src="//xxx">
```

## TS

### 类型推导

- 获取某个变量的推导类型

```ts
const obj = {
  a: 1,
  b: 2
}
const obj1: typeof obj = {} // 类型检测会报错
```

- 获取没个函数返回的类型

```ts
function fn() {
  return {
    a: 1,
  };
}
const obj: ReturnType<typeof fn> = {
  a: 1,
  b: 2, // 类型检测会报错
};
```

- Object通过变量获取

```ts
interface {
  [key: string]: any
}
```

### 全局类型

```ts
declare namesepace API {
  interface Common {
    [key: string]: any
  }
}
```
