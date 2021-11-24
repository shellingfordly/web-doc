# 中断请求

原文章[掘金 - 紫圣](https://juejin.cn/post/7033906910583586829?utm_source=gold_browser_extension#heading-2)

## AbortController 中断请求

[AbortController](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController) 接口表示一个控制器对象，允许你根据需要中止一个或多个 Web 请求。

### 构造函数

可以使用 AbortController() 构造函数创建一个新的 AbortController 。使用 AbortSignal 对象可以完成与与 DOM 请求的通信

### 属性

AbortController.signal 返回一个 AbortSignal 对象实例，它可以用来 with/abort 一个 Web(网络)请求。

### AbortController.abort()

中止一个尚未完成的 Web(网络)请求。这能够中止 fetch 请求，任何响应 Body 的消费者和流。

## 中断 Fetch 请求

使用 AbortController 函数 new 一个控制器(controller)，将信号(controller.signal)传递到请求中，控制器与请求通过信号建立链接，便可以通过 controller.abort 方法给请求发送终止请求的信号

```js
const controller = new AbortController();
let signal = controller.signal;
// 初始状态
// AbortSignal {aborted: false, onabort: null

fetch(url, { signal })
  .then(function (res) {
    console.log(res);
  })
  .catch(function (e) {
    console.log(e);
  });

function cancel() {
  controller.abort();
  // 中止状态
  // AbortSignal {aborted: true, onabort: null}
}
```

## 中断 axios 请求

axios 中提供的 axios.CancelToken 可以很简单的中断请求

### 方式一

使用 axios.CancelToken 创建一个 cancel token，将其传递给请求的 cancelToken 参数

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios
  .get(url, {
    cancelToken: source.token,
  })
  .then((result) => {
    console.log("result", result);
  })
  .catch((err) => {
    console.log("err", err);
  });

source.cancel("中断请求");
```

### 方式二

通过传递一个 executor 函数到 CancelToken 的构造函数来创建一个 cancel token

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get(url, {
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;
  }),
});

cancel && cancel("中断请求");
```

## 中断 umi-request 请求

与 axios 差不多， 传递一个 executor 函数到 request.CancelToken 构造函数中创建一个 cancel token

```js
import request from "@/utils/request";
const CancelToken = request.CancelToken;
let cancel: any;

request(url, {
  cancelToken: new CancelToken((c) => {
    cancel = c;
  }),
});

// 取消请求
cancel && cancel();
```
