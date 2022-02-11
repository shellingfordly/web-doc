# koa

- 切面编程
- 策略模式

##

- 同步阻塞

```js
const exp = Date.now();
while (Date.now() - exp < 1000) {}
```

## 洋葱圈

### 函数组合

```js
function compose(fn1, fn2) {
  return (...args) => fn2(fn1(...args));
}
```

```js
function compose(...[first, ...other]) {
  (...args) => {
    let ret = first(...args);
    other.forEach((fn) => {
      ret = fn(ret);
    });
    return ret;
  };
}
```

### koa 递归实现

```js
function compose(middlewares) {
  if (!Array.isArray(middlewares)) {
    middlewares = Array.from(arguments);
  }

  if (middlewares.some((fn) => typeof fn !== "function")) {
    throw new TypeError("Middleware must be composed of functions!");
  }

  return function () {
    return dispatch(0);
    function dispath(i) {
      let fn = middlewares[i];
      if (!fn) {
        return Promise.resolve();
      }
      return Promise.resolve(
        fn(function next() {
          return dispatch(i + 1);
        })
      );
    }
  };
}
```

### Reduce 实现

```js
function compose(middlewares) {
  if (!Array.isArray(middlewares)) {
    middlewares = Array.from(arguments);
  }

  if (middlewares.length === 0) {
    return (arg) => arg;
  }

  if (middlewares.some((fn) => typeof fn !== "function")) {
    throw new TypeError("Middleware must be composed of functions!");
  }

  return (next = async () => {}) => {
    const fn = middlewares.reduce((a, b) => {
      return (arg) => {
        return a(() => {
          return b(arg);
        });
      };
    });
    return fn(next);
  };
}
```

解析：compose 返回一个函数，执行时对 middlewares 使用 reduce 对函数数组进行套娃，第一次 a 为 fn1，b 为 fn2，返回函数 midFn，第二次 a 为上一次返回函数 midFn，为 fn3，返回 finallyFn。

```js
// 第一次返回函数
function midFn(arg) {
  return fn1(() => fn2(arg));
}

// 第二次返回函数
function finallyFn(arg) {
  function midFn(arg) {
    return fn1(() => fn2(arg));
  }
  return midFn(() => {
    fn3(arg);
  });
}
```

### 示例

```js
async function fn1(next) {
  console.log("fn1 start");
  await next();
  console.log("fn1 end");
}
async function fn2(next) {
  console.log("fn2 start");
  await next();
  console.log("fn2 end");
}
async function fn3(next) {
  console.log("fn3 start");
  await next();
  console.log("fn3 end");
}

const fn = compose([fn1, fn2, fn3]);
fn();

// 输出结果
// fn1 start
// fn2 start
// fn3 start
// fn3 end
// fn2 end
// fn1 end
```
