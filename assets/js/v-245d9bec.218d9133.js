"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[1019],{4667:(e,a,l)=>{l.r(a),l.d(a,{data:()=>s});const s={key:"v-245d9bec",path:"/tools/git/",title:"git",lang:"en-US",frontmatter:{sidebar:"auto",categories:["tools","git"]},excerpt:"",headers:[{level:2,title:"常用命令",slug:"常用命令",children:[{level:3,title:"初始化",slug:"初始化",children:[]},{level:3,title:"添加远程定义",slug:"添加远程定义",children:[]},{level:3,title:"配置用户名",slug:"配置用户名",children:[]},{level:3,title:"拉取远程仓库",slug:"拉取远程仓库",children:[]},{level:3,title:"查看当前版本状态",slug:"查看当前版本状态",children:[]},{level:3,title:"add",slug:"add",children:[]},{level:3,title:"提交",slug:"提交",children:[]},{level:3,title:"查看提交日志",slug:"查看提交日志",children:[]},{level:3,title:"tag",slug:"tag",children:[]},{level:3,title:"查看改动",slug:"查看改动",children:[]},{level:3,title:"分支",slug:"分支",children:[]},{level:3,title:"回滚到上一个提交版本",slug:"回滚到上一个提交版本",children:[]},{level:3,title:"撤销 commit",slug:"撤销-commit",children:[]},{level:3,title:"切换分支并拉去远程分支",slug:"切换分支并拉去远程分支",children:[]},{level:3,title:"tag",slug:"tag-1",children:[]}]}],filePathRelative:"tools/git/README.md",git:{updatedTime:1663579823e3,contributors:[{name:"shellingfordly",email:"shellingfordly@qq.com",commits:1}]}}},4641:(e,a,l)=>{l.r(a),l.d(a,{default:()=>n});const s=(0,l(6252).uE)('<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h1><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git init\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="添加远程定义" tabindex="-1"><a class="header-anchor" href="#添加远程定义" aria-hidden="true">#</a> 添加远程定义</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote add origin\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="配置用户名" tabindex="-1"><a class="header-anchor" href="#配置用户名" aria-hidden="true">#</a> 配置用户名</h3><ul><li>用户名</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config --global user.name &quot;xxx&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>邮箱</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config --global user.email &quot;xxx@xxx.com&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="拉取远程仓库" tabindex="-1"><a class="header-anchor" href="#拉取远程仓库" aria-hidden="true">#</a> 拉取远程仓库</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone git@github.com:xxx/xxx.git\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="查看当前版本状态" tabindex="-1"><a class="header-anchor" href="#查看当前版本状态" aria-hidden="true">#</a> 查看当前版本状态</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git status\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add</h3><ul><li>添加所有更改过文件</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git add .\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>清除 add 的文件</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git restore --staged [file_path]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="提交" tabindex="-1"><a class="header-anchor" href="#提交" aria-hidden="true">#</a> 提交</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git  commit -m &quot;xxx&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>合并上一次提交</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git commit --amend -m &#39;xxx&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>add commit 合并</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git commit -am &#39;xxx&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="查看提交日志" tabindex="-1"><a class="header-anchor" href="#查看提交日志" aria-hidden="true">#</a> 查看提交日志</h3><ul><li>查看</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git log\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>显示一行</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git log -1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="tag" tabindex="-1"><a class="header-anchor" href="#tag" aria-hidden="true">#</a> tag</h3><ul><li>显示</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git tag\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>增加 tag</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git tag -a v2.0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>显示指定 tag 的日志及详细内容</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git show v2.0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="查看改动" tabindex="-1"><a class="header-anchor" href="#查看改动" aria-hidden="true">#</a> 查看改动</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git diff\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>显示未 commit 的改动</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git diff --cached\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>比较与上一个版本的差异</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git diff HEAD^\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>比较远程分支与本地分支差异</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git diff origin/master..master\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>只显示差异的文件</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git diff origin/master..master --stat\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h3><ul><li>显示分支</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git branch\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>显示所有分支</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git branch -a\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>删除分支</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git branch -D xxx\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="回滚到上一个提交版本" tabindex="-1"><a class="header-anchor" href="#回滚到上一个提交版本" aria-hidden="true">#</a> 回滚到上一个提交版本</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git reset --hard\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="撤销-commit" tabindex="-1"><a class="header-anchor" href="#撤销-commit" aria-hidden="true">#</a> 撤销 commit</h3><ul><li>软撤销：只撤销 commit，不撤销 git add，本地代码不变</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git reset --soft HEAD~1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>硬撤销：撤销 commit，撤销 git add，本地代码变为指定版本</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git reset --hard HEAD~1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="切换分支并拉去远程分支" tabindex="-1"><a class="header-anchor" href="#切换分支并拉去远程分支" aria-hidden="true">#</a> 切换分支并拉去远程分支</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git checkout -b dev origin/xxx\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="tag-1" tabindex="-1"><a class="header-anchor" href="#tag-1" aria-hidden="true">#</a> tag</h3><ul><li>查看</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git tag\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>添加</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git tag -a v1.0.0 -m &quot;version 1.0.0&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>push</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git push origin --tags\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',71),i={},n=(0,l(3744).Z)(i,[["render",function(e,a){return s}]])},3744:(e,a)=>{a.Z=(e,a)=>{const l=e.__vccOpts||e;for(const[e,s]of a)l[e]=s;return l}}}]);