# Vue3

## setup

- setup 加上 async 时组件无法渲染出来
- 要给 setup 添加 async 就需要使用 Suspense 包裹此组件

```html
<Suspense>
  <template #default>
    <kol-table />
  </template>
  <template #fallback> 数据加载中 ... </template>
</Suspense>
```

### Suspense

- Suspense 的 template 下只能一个子元素 DOM，多了显示不出来
- 不过 antd 给的提示说 api 可能会变

```html
<!-- 错误写法 -->
<!-- <Suspense> is an experimental feature and its API will likely change. -->
<Suspense>
  <template #default>
    <div></div>
    <div></div>
  </template>
</Suspense>
```

```html
<!-- 正确写法 -->
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

- setup 的 props 参数需要在 props 属性接收了才有

```ts
export default defineComponent({
  // 接收
  props: ["data"],
  async setup(props) {
    console.log(props.data);
    return {};
  },
});
```

## data

### ref

- 取值的时候需要加 value

## 配置

- 无法配置多级默认路由

```c
'/api':'https://w1.cosmeapp.com/api/xxx'
```

## 插槽

```vue
<!-- Son.vue -->
<template>
  <slot name="left"></slot>
</template>

<!-- Parent.vue -->
<template>
  <Son>
    <template #left> </template>
  </Son>
</template>
```

## 自定义组件

- ~~不需要对自组件进行绑定也可以触发事件~~
- ~~给 Select 组件绑定的 v-model:value 和@change 都不要代理~~
- 当 Select 组件的根组件直接是 a-select 时，可以不需要代理，属性将默认传入 a-select 组件

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
- 可以绑定多个 v-model

```vue
<!-- Son.vue -->
<template>
  <!-- 接受对应的变量 -->
  <input type="text" :value="value" />
  <input type="text" :value="msg" />
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

- 给 input 绑定的值必须是 reactive 创建响应式对象的属性，ref 创建字符串将无法输入

### 双向数据绑定

- 对象直接重新赋值页面不响应

```js
const data = reactive({
  a: 1,
});
data = {
  b: 2,
};
```

### img src

- protocol should added in img src, otherwise an error occurred, maybe it's a bug of vite

```html
<!-- correct -->
<img src="http://xxx" />
<!-- An error occurred while img src without protocol (http or https)  -->
<img src="//xxx" />
```

## TS

### 类型推导

- 获取某个变量的推导类型

```ts
const obj = {
  a: 1,
  b: 2,
};
const obj1: typeof obj = {}; // 类型检测会报错
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

- Object 通过变量获取

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

## key

- 用于强制替换元素/组件而不是重复使用它
  - 完整地触发组件的生命周期钩子
  - 触发过渡
- 当 text 发生改变时，\<span> 总是会被替换而不是被修改，因此会触发过渡

```html
<transition>
  <span :key="text">{{ text }}</span>
</transition>
```

## 一些特性

### Attribute 继承

props 和 emits property 中未包含的所有属性将会自动绑定到自组件的根节点上

- 可以使用 inheritAttrs: false 禁用
- 多个根节点组件不会自动绑定，将会发出警告，使用 v-bind 绑定后则清楚警告

### teleport

将一个 DOM 挂载到另一个 DOM 上，多个 \<teleport\> 组件可以将其内容挂载到同一个目标元素

```html
<teleport to="#modals">
  <div>A</div>
</teleport>
<teleport to="#modals">
  <div>B</div>
</teleport>
<!-- result-->
<div id="modals">
  <div>A</div>
  <div>B</div>
</div>
```
