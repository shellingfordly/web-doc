## 函数组件请求数据

问题：在函数组件中请求数据，API.UserListAll 被一直不停的调用

```js
export default function UserPower() {
  const [tableData, setTableData] = useState([]);
  window.API.UserListAll({
    offset: 0,
    count: 100,
  }).then((users) => {
    setTableData(users);
  });

  return <>{tableData}</>;
}
```

自我猜测：setTableData 改变了渲染用到的数据，因此再次触发 UserPower render，无限循环。
思考: 怎么在函数组件中只请求第一次，函数组件没有生命周期，难道只能用 class 组件来写吗

解决方法：

方案一：使用 useEffect

```js
useEffect(() => {
  setLoading(true);
  (async () => {
    const res = await window.API.UserListAll<API.RequestData, API.UserInfo[]>({
      offset: 0,
      count: 100,
    });
    setTableData(data);
    setLoading(false);
  })();
}, []);
```

## 自定义 hook 函数一直被执行问题

1. 场景

自定义 hook 中获取数据，到父组件中初始化数据，在子孙组件中使用

2. 问题

自定义 hook 函数会被循环执行

- 自定义 useContext

```ts
import { useState } from "react";
import { createContext } from "react";
import { API } from "/src/api";
export const Context = createContext(0);
export function useContext(): [number, (id: number) => Promise<void>] {
  const [state, setState] = useState<StateModel>(0);
  const setData = async (id: number) => {
    const res = await API({
      id,
    });
    setState(res);
  };
  return [state, setData];
}
```

- 父组件 Parent 中使用自定义 hook 创建初始数据

```tsx
import { Context } from "./hooks/useContext";
import { useEffect } from "react";
export function Parent() {
  // useContext会被循环执行，导致接口一直被请求
  const [state, setState] = useContext(0);
  useEffect(() => {
    setState(0);
  }, []);
  return (
    <Context.Provider value={state}>
      <Son1 />
      <Son2 />
    </Context.Provider>
  );
}
```

- 子组件 Son1 中使用 context

```tsx
import { Context } from "./hooks/useContext";
import { useEffect, useContext } from "react";
export function Son1() {
  const context = useContext(Context);
  useEffect(() => {
    setState(0);
  }, []);
  return <div>Son1 context: {context}</div>;
}
```

- 子组件 Son2 中使用 context

```tsx
import { Context } from "./hooks/useContext";
import { useEffect, useContext } from "react";
export function Son2() {
  const context = useContext(Context);
  useEffect(() => {
    setState(0);
  }, []);
  return <div>Son2 context: {context}</div>;
}
```
