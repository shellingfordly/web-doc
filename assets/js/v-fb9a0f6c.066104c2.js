"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[94],{9161:(e,n,l)=>{l.r(n),l.d(n,{data:()=>a});const a={key:"v-fb9a0f6c",path:"/pages/86be77/",title:"problem",lang:"en-US",frontmatter:{title:"problem",date:"2021-11-25T14:03:02.000Z",permalink:"/pages/86be77/",categories:["other","m1"],tags:[null]},excerpt:"",headers:[{level:2,title:"m1 上安装包问题",slug:"m1-上安装包问题",children:[]},{level:2,title:"安装 gitbook 问题",slug:"安装-gitbook-问题",children:[]}],filePathRelative:"other/m1/problem.md",git:{updatedTime:163912863e4,contributors:[{name:"liu",email:"shellingfordly@qq.com",commits:1}]}}},9162:(e,n,l)=>{l.r(n),l.d(n,{default:()=>v});var a=l(6252);const t=(0,a.uE)('<h1 id="m1" tabindex="-1"><a class="header-anchor" href="#m1" aria-hidden="true">#</a> m1</h1><h2 id="m1-上安装包问题" tabindex="-1"><a class="header-anchor" href="#m1-上安装包问题" aria-hidden="true">#</a> m1 上安装包问题</h2><ol><li>安装老版本 node</li></ol><ul><li>选择 x86 环境</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arch -x86_64 zsh\narch -x86_64 $SHELL\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="安装-gitbook-问题" tabindex="-1"><a class="header-anchor" href="#安装-gitbook-问题" aria-hidden="true">#</a> 安装 gitbook 问题</h2><ol><li><p>node 版本问题</p></li><li><p>m1 环境问题</p></li></ol><ul><li>报错</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xcode-select: error: tool &#39;xcodebuild&#39; requires Xcode, but active developer directory &#39;/Library/Developer/CommandLineTools&#39; is a command line tools instance\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',9),o=(0,a.Uk)("解决方法 "),s={href:"https://github.com/nodejs/node-gyp/issues/569",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("node-gyp issues/569"),r=(0,a.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>xcode-select --install\nsudo xcode-select --switch /Library/Developer/CommandLineTools\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',1),d=(0,a.Uk)("即使这样依然还是会报上面的错误，从下面的错误看出可能是 node-gyp 的问题，在"),c={href:"https://github.com/nodejs/node-gyp/blob/master/macOS_Catalina.md",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("node-gyp macOS_Catalina.md"),m=(0,a.Uk)("找到解决方法"),b=(0,a._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,a._)("pre",{class:"language-text"},[(0,a._)("code",null,"curl -sL https://github.com/nodejs/node-gyp/raw/master/macOS_Catalina_acid_test.sh | bash\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),p=(0,a._)("p",null,[(0,a.Uk)("然后终于能正常工作了，因为一开始 nodev17 也报错 xcode-select，我尝试使用 nodev17 去安装 gitbook，发现依然不行，"),(0,a._)("code",null,"gitbook init"),(0,a.Uk)("之后只有 README.md 文件，没有 SUMMARY.md 文件。")],-1),g=(0,a._)("p",null,[(0,a.Uk)("不得不说 M1 虽然很好，但是环境问题真的很烦人，为了装个 gitbook 花了我差不多两天的时间，原本我在 node 官网下载的 v17 的 node，安装 gitbook 报错 cb.apply is not a function，这个问题基本属于网上搜到大家统一的问题，解决方案就是安装老版本的 node，因此我去安装 nvm，但是网上搜的一句话命令有装不上，网络问题，最后迫不得已用 brew（因为大家都说不推荐，所以一开始没用）。接着使用 nvm 安装老版本 node 的时候又有 arm 架构问题，得使用"),(0,a._)("code",null,"arch -x86_64 zsh"),(0,a.Uk)("切换到 x86 才能装，最后就是装了 nodev10 发现 gitbook 依然跑不起来，卡在 3.2.3 那半天，最后报个错，真的是吐血了。")],-1),h={},v=(0,l(3744).Z)(h,[["render",function(e,n){const l=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,(0,a._)("ul",null,[(0,a._)("li",null,[o,(0,a._)("a",s,[i,(0,a.Wm)(l)])])]),r,(0,a._)("p",null,[d,(0,a._)("a",c,[u,(0,a.Wm)(l)]),m]),b,p,g],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const l=e.__vccOpts||e;for(const[e,a]of n)l[e]=a;return l}}}]);