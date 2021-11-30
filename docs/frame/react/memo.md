---
title: memo
date: 2021-11-25 13:58:45
permalink: /pages/af13fc/
categories:
  - frame
  - react
tags:
  - 
---
# memo

## React.memo()

- PureComponent 是对 class 组件的性能优化，每次会对 props 进行浅比较，同时还可以在 shouldComponentUpdate 中进行深层次的控制
- React.memo 这个 HOC 是对 Function Component 提供的，areEqual 参数相当于 shouldComponentUpdate 的作用

1. 使用方式

- areEqual 判断两次 props 是否不同，不传 areEqual 则对 props 进行浅比较

```js
function MyComponent(props) {
  /* 使用 props 渲染 */
}
function areEqual(prevProps, nextProps) {
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
}
export default React.memo(MyComponent, areEqual);
```

2. 性能优化

- Parent Component

```js
// Parent Component
export default (props = {}) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button onClick={()=>{setCount1(count1+1)})}>count1: {count} </button>
      <button onClick={()=>{setCount2(count2+1)}}>count2: {number} </button>
      <Son  count1={count1} count2={count2} /> <hr />
      <MemoSon count1={count1} count2={count2} />
    </>
  );
}
```

- Son Component

```js
export default (props = {}) => {
  console.log(`Son Component`);
  return <div>count1: {props.count1}</div>;
};
```

- MemoSon Component

```js
const isEqual = (prevProps, nextProps) => {
  if (prevProps.count2 !== nextProps.count2) {
    return false;
  }
  return true;
};

export default memo((props = {}) => {
  console.log(`--- memo re-render ---`);
  return <div>count2: {props.count2}</div>;
}, isEqual);
```

总结：count1、count2 的变化都会导致 Son 组件的重新渲染，而 MemoSon 只有在 count2 发生变化时才会重新渲染

## useMemo()

React.memo 始终包装整个组件，并且需要手动比较具体的 props，而某些时候我们只想要 template 进行 re-render，而不是整个组件 re-render，useMemo 可以实现局部 Pure 功能

1. 基本用法

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

返回一个 memoized 值，只有当依赖项[a,b]发生变化时，才会重新计算这个 memoized 值，否则不会重新渲染。

传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。

如果没有提供依赖项[a,b]，则每次都会重新计算 memoized 值

2. 性能优化

- UseMemoSon Component

```js
export default (props = {}) => {
  console.log(`--- component re-render ---`);
  return useMemo(() => {
    console.log(`--- useMemo re-render ---`);
    return (
      <div>
        <p>count2: {props.count2}</p>
      </div>
    );
  }, [props.count2]);
};
```

总结：useMemo 包装的是 return 部分的渲染逻辑，当 count1 发生变化是，会触发函数组件的重新渲染，打印 component re-render，但不会触发 return 返回函数的 re-render，只有在 count2 发生变化时才会打印 useMemo re-render

- 感谢 [ai 哟](https://zhuanlan.zhihu.com/p/105940433)
