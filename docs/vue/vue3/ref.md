# ref

- ref返回一个Ref类型的数据

```ts
let headData: Ref<DataType[]> = ref([]);
let data = ref({});
headData.value = [
  {
    data: '121w',
    note: '总播放量',
  },
];
data.value = { a: 2 };
return { headData, data };
```

## 直接赋值问题

### 数组

- 使用ref创建的数据直接进行=赋值是可以响应视图的
- 而使用reactive不可以
- 数组不设定类型的话，添加数据会报类型错误
  - 并且要是一个Ref类型

### 对象

- 对象使用data.value赋值时ts不会报类型错误
- 直接对data使用=赋值则会报类型错误

## 与reactive的区别

- 使用ref创建对象无法被watch监控到
- 想要被watch监控需要获取value
- 想要监控到具体的值时需要使用函数返回值

```ts
const objRef = ref({id: 0})
const objReactive = reactive({id: 0})

// 无法监控到
watch(objRef, (newVal)=>{
  console.log(newVal)
})
// 可以监控到
watch(objRef.value, (newVal)=>{
  console.log(newVal)
})
// 可以监控到
watch(objReactive, (newVal)=>{
  console.log(newVal)
})
// 监控具体到值
watch(()=> objReactive.id, (newVal)=>{
  console.log(newVal)
})
```
