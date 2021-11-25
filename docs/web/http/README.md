---
sidebar: auto
---

# HTTP 相关学习

## URL 通信过程

TCP 三次握手：客户端向服务器发送一个请求，服务器返回接受到客户端请求的回应，客户端再发送请求告诉服务器接受到服务器回应的请求；
四次分手：客户端向服务器发送分手请求，服务器回应客户端接受到客户端的请求；服务器向客户端回应分手请求，客户端发生请求告诉服务器收到了分手回应

### 密钥

- 对称密钥：客户端和服务器需要有相同的密钥才能解密信息
- 非对称密钥：
  - 公钥加密，私钥解密；私钥加密，公钥解密
  - 非对称密钥只能保证单向传输的安全

网络传输安全：
系统内置有证书，是通过官方平台对域名的认证，在服务器中写入（第三方私钥等？）特定的文件，第三方的公钥客户端都有，第三方的公钥对服务器的公钥以及其他信息进行加密。

客户端发送的使用服务器公钥加密的信息传个服务器，中间的代理也有公钥，但是无法解密信息，服务器使用私钥解密信息，向客户端返回结果，此时中间的代理可以通过公钥看到返回结果，但是不能修改。

客户端第一次使用公钥加密自己随机生成的一串密钥，发送给服务器，此时中间代理拥有的公钥无法查看，服务器使用私钥解密客户端的密钥，使用客户端的密钥加密返回结果，此时中间代理也无法查看到返回结果。

### HTTPS 四次握手

- 第一次握手
  - 客户端向服务器发送一个随机数 clientKey
  - 客户端发送 SSL 协议版本
  - 客户端发送 可选的加密算法
  - 客户端发送 可选的压缩算法
- 第二次握手
  - 服务端向客户端发送 随机数 server key
  - 服务端向客户端发送 选择的压缩算法
  - 服务端向客户端发送 选择的加密算法
  - 服务端发送数字证书(包含公钥)
- 第三次握手（前置操作：判断服务端的证书是否合法）
  - 客户端发送第三个随机数 premaster key
  - 使用 3 个 key 来生成会话用的对称密钥。
  - 客户端通知编码变更：接下来会话都会加密。
  - 客户端发送握手结束通知（一条前面所有内容的 hash 值，供服务端校验）
- 第四次握手
  - 服务端接收到加密后的 premaster key, 用私钥解密，用三个 key 计算出会话用的对称密钥
  - 通知编码变更
  - 通知握手结束
  - 发送 hash 值

---

## 请求状态码

### 100

- 100 Continue 继续。客户端应继续其请求
- 101 Switching Protocols 切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到 HTTP 的新版本协议

### 200

- 200 OK 请求成功。一般用于 GET 与 POST 请求
- 201 Created 已创建。成功请求并创建了新的资源
- 202 Accepted 已接受。已经接受请求，但未处理完成
- 203 Non-Authoritative Information 非授权信息。请求成功。但返回的 meta 信息不在原始的服务器，而是一个副本
- 204 No Content 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
- 205 Reset Content 重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域
- 206 Partial Content 部分内容。服务器成功处理了部分 GET 请求

### 300

- 300 Multiple Choices 多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择
- 301 Moved Permanently 永久移动。请求的资源已被永久的移动到新 URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。今后任何新的请求都应使用新的 URI 代替
- 302 Found 临时移动。与 301 类似。但资源只是临时被移动。客户端应继续使用原有 URI
- 303 See Other 查看其它地址。与 301 类似。使用 GET 和 POST 请求查看
- 304 Not Modified 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
- 305 Use Proxy 使用代理。所请求的资源必须通过代理访问
- 306 Unused 已经被废弃的 HTTP 状态码
- 307 Temporary Redirect 临时重定向。与 302 类似。使用 GET 请求重定向

### 400

- 400 Bad Request 客户端请求的语法错误，服务器无法理解
- 401 Unauthorized 请求要求用户的身份认证
- 402 Payment Required 保留，将来使用
- 403 Forbidden 服务器理解请求客户端的请求，但是拒绝执行此请求
- 404 Not Found 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面
- 405 Method Not Allowed 客户端请求中的方法被禁止
- 406 Not Acceptable 服务器无法根据客户端请求的内容特性完成请求
- 407 Proxy Authentication Required 请求要求代理的身份认证，与 401 类似，但请求者应当使用代理进行授权
- 408 Request Time-out 服务器等待客户端发送的请求时间过长，超时
- 409 Conflict 服务器完成客户端的 PUT 请求是可能返回此代码，服务器处理请求时发生了冲突
- 410 Gone 客户端请求的资源已经不存在。410 不同于 404，如果资源以前有现在被永久删除了可使用 410 代码，网站设计人员可通过 301 代码指定资源的新位置
- 411 Length Required 服务器无法处理客户端发送的不带 Content-Length 的请求信息
- 412 Precondition Failed 客户端请求信息的先决条件错误
- 413 Request Entity Too Large 由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个 Retry-After 的响应信息
- 414 Request-URI Too Large 请求的 URI 过长（URI 通常为网址），服务器无法处理
- 415 Unsupported Media Type 服务器无法处理请求附带的媒体格式
- 416 Requested range not satisfiable 客户端请求的范围无效
- 417 Expectation Failed 服务器无法满足 Expect 的请求头信息

### 500

- 500 Internal Server Error 服务器内部错误，无法完成请求
- 501 Not Implemented 服务器不支持请求的功能，无法完成请求
- 502 Bad Gateway 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
- 503 Service Unavailable 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的 Retry-After 头信息中
- 504 Gateway Time-out 充当网关或代理的服务器，未及时从远端服务器获取请求
- 505 HTTP Version not supported 服务器不支持请求的 HTTP 协议的版本，无法完成处理

---

## 中断请求

原文章[掘金 - 紫圣](https://juejin.cn/post/7033906910583586829?utm_source=gold_browser_extension#heading-2)

### AbortController 中断请求

[AbortController](https://developer.mozilla.org/zh-CN/docs/Web/API/AbortController) 接口表示一个控制器对象，允许你根据需要中止一个或多个 Web 请求。

#### 构造函数

可以使用 AbortController() 构造函数创建一个新的 AbortController 。使用 AbortSignal 对象可以完成与与 DOM 请求的通信

#### 属性

AbortController.signal 返回一个 AbortSignal 对象实例，它可以用来 with/abort 一个 Web(网络)请求。

#### AbortController.abort()

中止一个尚未完成的 Web(网络)请求。这能够中止 fetch 请求，任何响应 Body 的消费者和流。

### 中断 Fetch 请求

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

### 中断 axios 请求

axios 中提供的 axios.CancelToken 可以很简单的中断请求

#### 方式一

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

#### 方式二

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

### 中断 umi-request 请求

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
