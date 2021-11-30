---
title: useEffect
date: 2021-11-25 13:58:45
permalink: /pages/31ecae/
categories:
  - frame
  - react
tags:
  - 
---
## useEffect

在 useEffect 中进行异步获取数据，并使用 useState 设置数据时会导致内存泄露

```
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
```

- 原因：由于异步的 setState，如果此时此组件已经被销毁，但当异步结束时会去执行回调中 setState，改变数据的状态，因此造成了内存泄漏的风险。
- 解决方法：需要在组件销毁时去清楚组件内部一些还在等待执行的回调
  - useEffect 的返回参数是一个函数，此函数会在组件被销毁时执行，因此可以提前定义一个变量 unmounted，当组件销毁时改变 unmounted 的状态，异步回调内部根据 unmounted 的状态来确定是否要操作数据

```js
useEffect(() => {
  let unmounted = false;
  update(unmounted);
  return () => {
    unmounted = true;
  };
}, []);
```
