# git

## 常用命令

### 初始化

```
git init
```

### 添加远程定义

```
git remote add origin
```

### 配置用户名

- 用户名

```
git config --global user.name "xxx"
```

- 邮箱

```
git config --global user.email "xxx@xxx.com"
```

### 拉取远程仓库

```
git clone git@github.com:xxx/xxx.git
```

### 查看当前版本状态

```
git status
```

### 添加所有更改过文件

```
git add .
```

### 提交

```
git  commit -m "xxx"
```

- 合并上一次提交

```
git commit --amend -m 'xxx'
```

- add commit 合并

```
git commit -am 'xxx'
```

### 查看提交日志

- 查看

```
git log
```

- 显示一行

```
git log -1
```

### tag

- 显示

```
git tag
```

- 增加 tag

```
git tag -a v2.0
```

- 显示指定 tag 的日志及详细内容

```
git show v2.0
```

### 查看改动

```
git diff
```

- 显示未 commit 的改动

```
git diff --cached
```

- 比较与上一个版本的差异

```
git diff HEAD^
```

- 比较远程分支与本地分支差异

```
git diff origin/master..master
```

- 只显示差异的文件

```
git diff origin/master..master --stat
```

### 分支

- 显示分支

```
git branch
```

- 显示所有分支

```
git branch -a
```

- 删除分支

```
git branch -D xxx
```

### 回滚到上一个提交版本

```
git reset --hard
```

### 切换分支并拉去远程分支

```
git checkout -b dev origin/xxx
```
