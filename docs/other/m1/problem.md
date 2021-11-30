# m1

## m1 上安装包问题

1. 安装老版本 node

- 选择 x86 环境

```
arch -x86_64 zsh
arch -x86_64 $SHELL
```

## 安装 gitbook 问题

1. node 版本问题

2. m1 环境问题

- 报错

```
xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance
```

- 解决方法
  [node-gyp issues/569](https://github.com/nodejs/node-gyp/issues/569)

```
xcode-select --install
sudo xcode-select --switch /Library/Developer/CommandLineTools
```

即使这样依然还是会报上面的错误，从下面的错误看出可能是 node-gyp 的问题，在[node-gyp macOS_Catalina.md](https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md)找到解决方法

```
curl -sL https://github.com/nodejs/node-gyp/raw/master/macOS_Catalina_acid_test.sh | bash
```

然后终于能正常工作了，因为一开始 nodev17 也报错 xcode-select，我尝试使用 nodev17 去安装 gitbook，发现依然不行，`gitbook init`之后只有 README.md 文件，没有 SUMMARY.md 文件。

不得不说 M1 虽然很好，但是环境问题真的很烦人，为了装个 gitbook 花了我差不多两天的时间，原本我在 node 官网下载的 v17 的 node，安装 gitbook 报错 cb.apply is not a function，这个问题基本属于网上搜到大家统一的问题，解决方案就是安装老版本的 node，因此我去安装 nvm，但是网上搜的一句话命令有装不上，网络问题，最后迫不得已用 brew（因为大家都说不推荐，所以一开始没用）。接着使用 nvm 安装老版本 node 的时候又有 arm 架构问题，得使用`arch -x86_64 zsh`切换到 x86 才能装，最后就是装了 nodev10 发现 gitbook 依然跑不起来，卡在 3.2.3 那半天，最后报个错，真的是吐血了。
