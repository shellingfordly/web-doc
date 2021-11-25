---
sidebar: auto
---

# JavaScript

## 对象

- Object.defineProperty(obj, obj) 设置对象的默认特性
- Object.defineProperties(obj, obj) 设置多个属性的特性

- Object.getOwnPropertyDescriptor(obj, key) 获取对象指定属性的特性
- Object.getOwnPropertyDescriptors(obj, key) 获取对象所有属性的特性

### 结构

- 嵌套结构
- 部分解构
- 参数上下文匹配

### 创建对象

- 工厂模式
- 构造函数模式

### 构造函数模式

- person1.\_\_proto\_\_ 就是 Person.prototype
- person1.constructor 就是 Person

```js
function Person(name) {
  this.name = name;
}
const person1 = new Person("sss");
console.log(person1.__proto__ === Person.prototype); // true
console.log(person1.constructor === Person); // true
```

## 问题

- 对象的 set 属性需要返回值吗
- \_isAMomentObject?
