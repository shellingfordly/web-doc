---
title: introduce
date: 2021-11-30 13:36:48
permalink: /pages/97f1cc/
categories:
  - frame
  - vue
  - vite
tags:
  - 
---
# Vite

## vite.config.ts

### 路径别名

- replacement 后面得手动拼接上 “/”

```js
// /@/views/ 默认转成 ./srcviews
export default {
  resolve: {
    alias: [
      {
        find: /^\/@\//,
        replacement: `${resolve(__dirname, "./src")}/`,
      },
    ],
  },
};
```

- tsconfig.json 配置 paths 时 必须加上 baseUrl

```json
{
  "baseUrl": ".",
  "paths": {
    "/@/*": ["src/*"]
  }
}
```

### 环境变量

想在文件中使用 import.meta.env 读取一些环境变量，需要在 tsconfig.json 中加入

```json
{
  "types": ["vite/client"]
}
```
