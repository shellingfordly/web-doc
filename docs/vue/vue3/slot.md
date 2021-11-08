### 插槽

父组件

- v-slot 简写 #
- 在 slot 上传递的属性可以被 v-slot 接收
  -  可以使用:修改命名
  - 可以使用扩展运算符取值

```vue
<template>
  <div>
    <Son>
      <template #less="data">
        {{ data.data }}
      </template>
      <template #more="{ data, other: otherMsg}">
        {{data}} --- {{otherMsg}}
      </template>
    </Son>
  </div>
</template>
<script>
import Son from "./Son.vue";
export default {
  name: "Parent",
  components: {
    Son,
  },
};
</script>
```

自组件

- 传递多属性时可以使用 v-bind

```vue
<template>
  <div class="son">
    <slot name="less" :data="data">
      {{ msg }}
    </slot>
    <slot name="more" v-bind="{ ...state }">
      {{ msg }}
    </slot>
  </div>
</template>
<script>
export default {
  name: "Son",
  data() {
    return {
      state: {
        data: "我是子组件的数据",
        other: "其他数据",
        test: "测试数据",
      },
      msg: "我是子组件的默认数据",
    };
  },
};
</script>
```
