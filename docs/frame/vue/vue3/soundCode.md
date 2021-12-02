---
title: 源码
date: 2021-11-30 13:15:19
permalink: /pages/b9169d/
categories:
  - frame
  - vue
  - vue3
tags:
  - 
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
