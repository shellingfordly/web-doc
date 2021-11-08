# webpack

- 可以解析

## 命令

- npx webpack -v 查看 webpack 版本
- npx webpack xxx.js 打包某文件

## 配置

- mode 配置打包模式
  - development 开发环境
- entry 入口文件
- output 打包输出地址
  - filename 打包后文件名
  - path 必须为绝对路径
- module 处理非 js 的其他文件
  - rules 配置规则
    - test 匹配文件
    - use 使用插件
      - loader 插件名
        - loader 从右向左，从下往上的顺序使用
      - options 对 loader 的配置
        - limit 限制大小
        - name 打包文件的 name

webpack.config.js

```js
module.exports = {
  mode: "development",
  entry: './src/index.js'
  output: {
    filename: 'js/index.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpg)$/, // 匹配gif
        use: [
          // 第三方处理插件
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 小雨8k
              name: '[name][hash:8].[ext]' // 文件名+8位hash值
            }
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        // loader从右向左的顺序使用
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader'
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};
```

- loader
  - MiniCssExtractPlugin.loader 生成 css 文件，与 style-loader 冲突
  - style-loader 生成 style 文件，插入 css
  - css-loader 处理 css 文件
  - postcss-loader 处理 css3 兼容前缀
    - autoprefixer 自动添加 css3 兼容前缀插件

// postcss.config.js

```js
module.exports = {
  plugins: [require("autoprefixer")],
};
```

- 插件
  - mini-css-extract-plugin 打包 css 为一个文件
    - new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      }) 配置插件
    - MiniCssExtractPlugin.loader 使用 loader
  - optimize-css-assets-webpack-plugin 优化打包后的 css 代码
  - html-webpack-plugin

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  rules: [
    {
      test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
        ],
    }
  ],
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new OptimizeCssAssetsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 打包后的名字(路径)
      templace: 'templace/index.html', // 打包生成的模版文件(路径)
      inject: false, // 是否注入打包后js,css文件到index.html中
      minify: {
        collapseWhitespace: true // 是否压缩打包后的index.html
         removeComments: true, // 是否去除注释
  removeScriptTypeAttributes: true, // 去除多余script属性
  removeStyleLinkTypeAttributes: true, // 去除多余style属性
      }
    })
  ]
}
```

### 多文件

```js
module.exports = {
  mode: "development",
  entry: {
    one: './src/one.js',
    two: './src/two.js',
  },
  output: {
    filename: 'js/[name].js', // 使用占位符，多文件打包到不同的文件出楼
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // 同理
    }),
    // 生成多个html文件
    new HtmlWebpackPlugin({
      filename: 'one.html',
      chunks: ['one'] // 注入指定js,css文件
    }),
    new HtmlWebpackPlugin({
      filename: 'two.html',
      chunks: ['two']
    })
  ]
```

### webpack-dev-server

想要配置 proxy 代理需要安装 webpack-dev-server

- 命令 npxw webpack-dev-server

  - 开启端口可以自动访问同级目录下的资源

- 配置

```js
module.exports = {
  devServer: {
    open: true, // 是否打开浏览器
    port: 5000, // 端口
    contentBase: "./dist", // 修改可访问的文件路径
    proxy: {
      // 代理所有当前路径向/api的请求，将其转发到另一个路径
      "/api": {
        target: "https://xxx.xxx.xxx:0000", // 转发地址
        pathRewrite: { "/api": "" }, // 路径重写
      },
      "/api1": "https://xxx.xxx.xxx:1111",
    },
  },
};
```

- before 前端 mock 假数据

```js
module.exports = {
  devServer: {
    open: true,
    port: 5000,
    contentBase: './dist',
    before(app){
      app.get('/api/user', (req,res)=>{
        res.send({name: 'user'})
      })
    }
}
```

- webpack-dev-server 运行遇到的问题

```cmd
Cannot find module 'webpack-cli/bin/config-yargs'
可能是webpack和webpack-dev-server版本不兼容
webpack@3.8.0 和 webpack-dev-server@2.9.7可以兼容
```

### webpack-dev-middleware

- 在 node 中启动 webpack 打包

```js
const express = require("express");
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");

// 导入webpack配置
const config = require("./webpack.config.js");
const compiler = webpack(config);

const app = express();

// 使用webpack编译器配置
app.use(middleware(compiler));

app.get("/api/user", (req, res) => {
  res.send({ name: "user" });
});

app.listen(3000, () => {
  console.log("3000 port opened");
});
```

### clean-webpack-plugin

- 每次打包前清空打包文件

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  plugins: [new CleanWebpackPlugin()],
};
```

### webpack.DefinePlugin

- 给入口文件注入变量

```js
const DEV = "development";
const NEV = { data: "webpack data" };

const webpack = require("webpack");
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      DEV: "DEV", // "" 中引用的是变量
      NEV: "NEV",
    }),
  ],
};
```

## 打包 vue

- 配置文件

```js
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
// 解析vue文件的插件
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "./js/main.js",
    path: path.join(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        // 配置解析vue的loader
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./build/template/template.html",
    }),
    new VueLoaderPlugin(), // 使用插件
  ],
  resolve: {
    alias: {
      // 配置引入包的路径
      // 引入vue包时导入有template complier的包
      vue$: "vue/dist/vue.esm.js",
    },
  },
};
```

## 不同环境配置文件

- webpack.base.js 基础配置
- webpack.dev.js 开发环境配置
- webpack.pro.js 生产环境配置

```js
const proConfig = {
  mode: "production",
};
const devConfig = {
  mode: "development",
  devServer: {},
};
```

- webpack-merge 合并配置

```js
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const devConfig = {
  mode: "development",
  devServer: {},
};
module.exports = merge(baseConfig, devConfig);
```

- package.json

```json
{
  "build": "webpack --config webpack.pro.js",
  "dev": "webpack-dev-server --config webpack.dev.js"
}
```

## code spliting

- 将第三方模块包和义务代码分离
- webpack 不会分割同步代码，但会默认分割异步代码

```js
module.exports = {
  optimizition: {
    // 优化
    splitChunks: {
      // 分割代码
      chunks: "all", // 分割规则
    },
  },
};
```

- 异步引入第三方包，第三方包一般同步引入
- 思考：首屏优化，异步引入 js 文件

```js
const axios = () => import("axios");
import("axios");
```

- 使用 async await 导入的包会被打包到另一个 js 文件，算异步引入
- 思考：使用 await 算异步引入，可以做优化
- 使用 require 为同步引入

```js
// 同步
import clickSync from "./js/click";
// 异步
const clickPromise = import("./js/click");
const { default: clickFn } = await clickPromise;
// 同步
const { default: clickRequire } = require("./js/click");
```

## loader

```js
module.exports = {
  resolveLoader: {
    // 解析loader时的路径，在所有路径中寻找loader
    modules: ["node_modules", path.join(__dirname, "loaders")],
  },
};
```

### loader 实现

- loaderUtils -- loader 的工具包
- babel-loader

```js
const babel = require("@babel/core");
const loaderUtils = require("loader-utils");
function loader(source) {
  // source 为打包js的源代码
  // 告诉loader将会异步执行代码 并通过callBack返回数据
  const callBack = this.async();
  // presets 预制：解析代码的babel的核心包
  const { presets } = loaderUtils.getOptions(this);
  // transform 解析
  babel.transform(source, { presets }, (err, result) => {
    // 解析结束执行回调函数
    callBack(err, result);
  });
}
```

- file-loader
  - loader 默认解析 js 文件
  - 当其他文件时(source)源码会乱码
  - loader.raw 解析二进制文件

```js
const loaderUtils = require("loader-utils");

function loader(source) {
  // 生成图片的名字
  const filename = loaderUtils.interpolateName(this, "[hash].[ext]", {
    content: source,
  });
  // 生成图片
  this.emitFile(filename, source);
  return `module.exports=${JSON.stringify(filename)}`;
}
loader.raw = true;
module.exports = loader
```

- url-loader

```js
const loaderUtils = require("loader-utils");
const path = require('path')
function loader(source) {
  // const 
  const { limit } = loaderUtils.getOptions('this')
  // path.extname 获取后缀名
  // this.resourcePath 文件绝对路径
  const extname = path.extname(this.resourcePath).slice(1)
  let result = ''
  if(source.length < limit) {
    const base64 = source.toString('base64')
    result = `module.exports = "data:image/${extname};base64,${base64}"`
  } else {
    // 大于limit文件大小限制时使用file-loader处理文件
    result = require('file-loader').call(this, source)
  }
  return result
}
loader.raw = true;
module.exports = loader
```

## 问题

### webpack 问题

- webpack@3.8.0 和 webpack-dev-server@2.9.7可以兼容，但是和html-webpack-plugin@4.5.1不兼容
- 使用老版本的 webpack 不支持 mode 属性

```npm
configuration has an unknown property 'mode'.
```

- 使用最新版找不到包

```npm
{
  "webpack": "^5.13.0",
  "webpack-cli": "^4.3.1",
  "webpack-dev-server": "^3.11.1"
}
error: Cannot find module 'webpack-cli/bin/config-yargs'
```
