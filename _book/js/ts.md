# TypeScript

标签（空格分隔）： ts

---

## 快速入门

### public

在构造函数中使用 public 是一种简写形式，它将会自动为类的实例创建该名称的属性

### null 和 undefined

- 在严格空检查模式中，除了 undefined 之外的所有类型的局部变量在使用之前都必须先赋值

```ts
let x: number; // 错误，使用前未赋值
let y: number | null; // 错误，使用前未赋值
let z: number | undefined; // 正确
```

## 基础类型

### 元组 Tuple

元组类型允许表示一个已知元素数量和类型的数组

```ts
let x: [string, number];
```

当访问一个已知索引的元素，会得到正确的类型：

```ts
console.log(x[1].substr(1)); // Error
```

当访问一个越界的元素，会使用联合类型替代：

```ts
x[6] = true; // Error, 布尔不是(string | number)类型
```

### 枚举

默认情况下，从 0 开始为元素编号

```ts
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
Color.Red; // 0
Color[1]; // Green
```

手动的指定成员的数值

```ts
enum Color {
  Red = 1,
  Green,
  Blue,
}
Color.Red; // 1
Color[1]; // red
```

### 空值

viod 与 any 相反，表示没有任何类型。当函数没有返回值时，void 类型的变量值只能为 undefined 和 null

```ts
function warnUser(): void {}
let unusable1: void = undefined;
let unusable2: void = null;
```

### Never

表示永不存在的值的类型。比如总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型

- never 类型是任何类型的子类型，也可以赋值给任何类型
- 没有类型是 never 的子类型或可以赋值给 never 类型
- 除了 never 本身之外，any 也不可以赋值给 never

### 类型断言

在 TypeScript 里使用 JSX 时，只有 as 语法断言是被允许的

```ts
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
```

## 接口

### 可选属性

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}
```

### 只读属性

```ts
interface Point {
  readonly x: number;
  readonly y: number;
}
// 赋值后， x和y再也不能被改变了
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```

#### ReadonlyArray\<T\>类型

确保数组创建后再也不能被修改

```ts
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro.push(5); // error!
a = ro; // error!
```

可以使用断言重写

```ts
a = ro as number[];
```

作为常量使用的话用 const
作为对象的不可变属性则使用 readonly

### 额外的属性检查

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  // ...
}
let mySquare = createSquare({ colour: "red", width: 100 });
```

## 类型推导

当有 sheq 确定值的时候不需要设置类型，ts 会根据值自动推导类型

```ts
const person = {
  name: "",
  age: "",
};
```

## 一些属性

- keyof 使用 interface 的 key 做类型

```ts
interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[]; // "length" | "push" | "pop" | "concat" | ...
type K3 = keyof { [x: string]: Person }; // string
```

## 问题

### declare

```ts
declare function f(x: number): string;
```

## 函数类型定义

```ts
type Func = () => void;
type Func = (xx: any) => void;
type Func = (xx: any) => any;

type Func = {
  (): any;
};

type XXX = {
  a(): string;
  b: () => string;
};
```

## Utility Types

- Partial\<Type>
- Requi0red\<Type>
- Readonly\<Type>
- Record\<Keys,Type> 记录
- Pick\<Type, Keys> 挑选
- Omit\<Type, Keys> 忽略
- Exclude\<Type, ExcludedUnion> 排除
- Extract\<Type, Union> 提取
- NonNullable\<Type> 排除 null 和 undefined
- Parameters\<Type> 参数面板
- ConstructorParameters\<Type> 构造器参数
- ReturnType\<Type> 返回值类型
- InstanceType\<Type> 实例类型
- ThisParameterType\<Type>
- OmitThisParameter\<Type>
- ThisType\<Type>

### Record\<Keys,Type>

构建一个对象类型，键名为 keys，键值为 Type

### Pick\<Type,Keys>

从 Type 中选一组属性键构成一个类型

## & |

- &
- |

## 几个关键字

1. infer
2. typeof
3. keyof
   - 获取某对象的键名
4. in

## 不理解

### readonly

```ts
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};
// 可以理解为
type Mutable<Obj> = {
  -readonly [Obj in keyof Key]: Obj[Key];
};

type Readonly<T> = { readonly [P in keyof T]: T[P] };
```

### ReturnType

1. 得到一个函数的返回值类型

```ts
type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;
```

2. 用 ReturnType 获取到 Func 的返回值类型

```ts
type Func = (value: number) => string;

// 拿到某个函数返回指的类型
const foo: ReturnType<Func> = "1";
```

- 例子

```ts
function fn() {
  return {
    name: "",
  };
}

const obj: ReturnType<typeof fn> = {
  name: "",
};
```

### 接口定义

```ts
interface Seal {
  name: string;
  url: string;
}
interface API {
  "/user": { name: string; age: number; phone: string };
  "/seals": { seal: Seal[] };
}
const api = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
  return fetch(url).then((res) => res.json());
};
```
