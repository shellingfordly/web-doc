"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[9721],{9458:(e,l,i)=>{i.r(l),i.d(l,{data:()=>r});const r={key:"v-3538de14",path:"/web/javascript/nodejs/",title:"Node.js",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Buffer",slug:"buffer",children:[{level:3,title:"特性",slug:"特性",children:[]},{level:3,title:"创建 Buffer",slug:"创建-buffer",children:[]},{level:3,title:"方法",slug:"方法",children:[]}]},{level:2,title:"常用属性",slug:"常用属性",children:[{level:3,title:"fs.read",slug:"fs-read",children:[]},{level:3,title:"fs.write",slug:"fs-write",children:[]},{level:3,title:"vm",slug:"vm",children:[]}]}],filePathRelative:"web/javascript/nodejs/README.md",git:{updatedTime:1645178209e3,contributors:[{name:"liu",email:"shellingfordly@qq.com",commits:1}]}}},1873:(e,l,i)=>{i.r(l),i.d(l,{default:()=>t});const r=(0,i(6252).uE)('<h1 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h1><h2 id="buffer" tabindex="-1"><a class="header-anchor" href="#buffer" aria-hidden="true">#</a> Buffer</h2><h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3><ul><li>全局变量</li><li>二进制数据操作</li><li>不占据 V8 堆内存大小的内存空间</li><li>node 控制，V8 的 GC 回收</li><li>配置 Stream 流使用，充当数据缓冲区</li></ul><h3 id="创建-buffer" tabindex="-1"><a class="header-anchor" href="#创建-buffer" aria-hidden="true">#</a> 创建 Buffer</h3><ul><li>alloc 创建指定字节大小的 buffer</li><li>allocUnsafe 创建指定大小的 buffer（不安全）</li><li>from 接受数据，创建 buffer</li></ul><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3><ul><li>fill 使用数据填充 buffer</li><li>write 向 buffer 中写入数据</li><li>toString 从 buffer 中提取数据</li><li>slice 截取 buffer</li><li>indexOf 在 buffer 中查找数据</li><li>copy 拷贝 buffer 中的数据</li></ul><h2 id="常用属性" tabindex="-1"><a class="header-anchor" href="#常用属性" aria-hidden="true">#</a> 常用属性</h2><h3 id="fs-read" tabindex="-1"><a class="header-anchor" href="#fs-read" aria-hidden="true">#</a> fs.read</h3><blockquote><p>fs.read(rfd, buf, offset, length, position)</p></blockquote><ul><li>rfd 定位当前被打开的文件</li><li>buf 表示当前缓冲区 buffer</li><li>offset 表示当前从 buf 的哪个位置开始执行写入</li><li>length 表示当前次写入的长度</li><li>position 表示当前从文件的哪个位置开始读取</li></ul><h3 id="fs-write" tabindex="-1"><a class="header-anchor" href="#fs-write" aria-hidden="true">#</a> fs.write</h3><blockquote><p>fs.write(wfd, buf, offset, length, position)</p></blockquote><ul><li>属性同 read</li></ul><h3 id="vm" tabindex="-1"><a class="header-anchor" href="#vm" aria-hidden="true">#</a> vm</h3><blockquote><p>vm.runInThisContext(&#39;let a = 1&#39;) 运行一串 js 代码字符串</p></blockquote>',17),a={},t=(0,i(3744).Z)(a,[["render",function(e,l){return r}]])},3744:(e,l)=>{l.Z=(e,l)=>{const i=e.__vccOpts||e;for(const[e,r]of l)i[e]=r;return i}}}]);