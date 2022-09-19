# 前端优化

## 首屏优化

### 计算首屏加载时间

```js
// 方案一：
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('first contentful painting');
});
// 方案二：
performance.getEntriesByName("first-contentful-paint")[0].startTime
​
// performance.getEntriesByName("first-contentful-paint")[0]
// 会返回一个 PerformancePaintTiming的实例，结构如下：
PerformancePaintTiming = {
  name: "first-contentful-paint",
  entryType: "paint",
  startTime: 507.80000002123415,
  duration: 0,
};
```

#### performance.timing

1. DNS 解析耗时: domainLookupEnd - domainLookupStart
2. TCP 连接耗时: connectEnd - connectStart
3. SSL 安全连接耗时: connectEnd - secureConnectionStart
4. 网络请求耗时(TTFB): responseStart - requestStart
5. 数据传输耗时: responseEnd - responseStart
6. DOM 解析耗时: domInteractive - responseEnd
7. 资源加载耗时: loadEventStart - domContentLoadedEventEnd
8. 首包时间: responseStart - domainLookupStart
9. 首次渲染时间 / 白屏时间: responseEnd - fetchStart
10. 首次可交互时间: domInteractive - fetchStart
11. DOM Ready 时间: domContentLoadEventEnd - fetchStart
12. 页面完全加载时间: loadEventStart - fetchStart

#### 加载慢的原因

- 网络延时问题
- 资源文件体积是否过大
- 资源是否重复发送请求去加载了
- 加载脚本的时候，渲染内容堵塞了

#### 优化方法

1. 常见的几种 SPA 首屏优化方式

- 减小入口文件体积
  - 路由懒加载
    - Vue: 箭头函数 + import
    - React: React.Lazy
  - 静态资源引入 CDN
- 静态资源本地缓存
- UI 框架按需加载
- 图片资源的压缩
- 组件重复打包
- 开启 GZip 压缩
- 使用 SSR

2. 静态资源本地缓存

- 采用 HTTP 缓存，设置 Cache-Control，Last-Modified，Etag 等响应头
- 采用 Service Worker 离线缓存

3. UI 框架按需加载

4. 图片资源的压缩

5. 组件重复打包

6. 开启 GZip 压缩

7. 使用 SSR

8. 运行时优化

- 减少重绘与重排
- 避免页面卡顿
- 长列表优化
- 滚动事件性能优化
- 使用 Web Workers
- 写代码时的优化点
