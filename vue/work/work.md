# 实际问题

- 当在给某组件循环需要在外层套 div/template ，但同时 div/template 会影响结构时，可以直接循环组件

```html
<Parent>
  <Son v-for="item in list" :data="item" />
</Parent>
```

## axios

### CancelToken

- 执行 axios.CancelToken 的回调函数的参数 cancel 即可取消请求

```ts
const cancelFn = () => {};
new axios.CancelToken((cancel) => {
  cancelFn = cancel;
});

cancelFn();
```
