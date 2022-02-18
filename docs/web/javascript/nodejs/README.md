# Node.js

## Buffer

### 特性

- 全局变量
- 二进制数据操作
- 不占据 V8 堆内存大小的内存空间
- node 控制，V8 的 GC 回收
- 配置 Stream 流使用，充当数据缓冲区

### 创建 Buffer

- alloc 创建指定字节大小的 buffer
- allocUnsafe 创建指定大小的 buffer（不安全）
- from 接受数据，创建 buffer

### 方法

- fill 使用数据填充 buffer
- write 向 buffer 中写入数据
- toString 从 buffer 中提取数据
- slice 截取 buffer
- indexOf 在 buffer 中查找数据
- copy 拷贝 buffer 中的数据

## 常用属性

### fs.read

> fs.read(rfd, buf, offset, length, position)

- rfd 定位当前被打开的文件
- buf 表示当前缓冲区 buffer
- offset 表示当前从 buf 的哪个位置开始执行写入
- length 表示当前次写入的长度
- position 表示当前从文件的哪个位置开始读取

### fs.write

> fs.write(wfd, buf, offset, length, position)

- 属性同 read

### vm

> vm.runInThisContext('let a = 1') 运行一串 js 代码字符串
