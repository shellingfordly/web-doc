---
categories:
  - frame
  - vue
  - vue3
---

# 源码分析

## createApp

### 实例方法

- 所有方法都挂载到实例下

- 好处
  - 不会污染原型链
  - treeshaking
  - 语义更清晰
  - 多实例

### mount
