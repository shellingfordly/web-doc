# 需要学习

## css

- grid

## React

### hooks 规则

#### 问题

- hooks 执行顺序错误

hooks 只能在组件顶层执行，当在 dom 里面嵌入调用了 hooks 函数则可能这个报错

```
React has detected a change in the order of Hooks called
```

[类似问题 1](https://namepluto.com/react-native-%E8%A7%A3%E6%B1%BA-react-has-detected-a-change-in-the-order-of-hooks-called-%E7%9A%84%E5%9D%91/)
[类似问题 2](https://stackoverflow.com/questions/57397395/react-has-detected-a-change-in-the-order-of-hooks-but-hooks-seem-to-be-invoked)

- 对卸载的组件执行 React 状态更新

无法对卸载的组件执行 React 状态更新。这是一个无操作，但它表示应用程序中存在内存泄漏。要修复这个问题，请在 useEffect 清理函数中取消所有订阅和异步任务。

```
Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
```
