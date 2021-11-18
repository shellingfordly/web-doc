# axois

## axois 和 Axios 的关系

1. 从语法上来说 axios 不是 Axios 的实例

axios 是通过 createInstance 函数返回的对象，createInstance 内部将 Axios.prototype.request 对象复制给了 axios，并将一个 Axios 创建的实例 context 也复制给了 axios

2. 从功能上来说，axios 是 Axios 的实例

因为 axios 拥有 Axios 实例的所有 属性和方法

3. axios 是 Axios.prototype.request 函数通过执行 bind()返回的函数

## axois 和 instance 的区别

1. 相同点

   - 都是通过 createInstance 函数返回的
   - 都有 Axios 实例的所有 属性和方法

2. 不同点
   - 默认配置能不一样
   - instance 没有后续为 axios 上添加的属性和方法
     - 比如 create、CancelToken、all
