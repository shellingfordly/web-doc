"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[282],{4569:(e,r,a)=>{a.r(r),a.d(r,{data:()=>n});const n={key:"v-0258f704",path:"/pages/9bedfe/",title:"js",lang:"en-US",frontmatter:{title:"js",date:"2021-11-25T14:02:23.000Z",permalink:"/pages/9bedfe/",categories:["web","javascript","js"],tags:[null]},excerpt:"",headers:[{level:2,title:"对象",slug:"对象",children:[{level:3,title:"结构",slug:"结构",children:[]},{level:3,title:"创建对象",slug:"创建对象",children:[]},{level:3,title:"构造函数模式",slug:"构造函数模式",children:[]}]},{level:2,title:"问题",slug:"问题",children:[]}]}},8730:(e,r,a)=>{a.r(r),a.d(r,{default:()=>s});const n=(0,a(6252).uE)('<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2><ul><li><p>Object.defineProperty(obj, obj) 设置对象的默认特性</p></li><li><p>Object.defineProperties(obj, obj) 设置多个属性的特性</p></li><li><p>Object.getOwnPropertyDescriptor(obj, key) 获取对象指定属性的特性</p></li><li><p>Object.getOwnPropertyDescriptors(obj, key) 获取对象所有属性的特性</p></li></ul><h3 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h3><ul><li>嵌套结构</li><li>部分解构</li><li>参数上下文匹配</li></ul><h3 id="创建对象" tabindex="-1"><a class="header-anchor" href="#创建对象" aria-hidden="true">#</a> 创建对象</h3><ul><li>工厂模式</li><li>构造函数模式</li></ul><h3 id="构造函数模式" tabindex="-1"><a class="header-anchor" href="#构造函数模式" aria-hidden="true">#</a> 构造函数模式</h3><ul><li>person1.__proto__ 就是 Person.prototype</li><li>person1.constructor 就是 Person</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function Person(name) {\n  this.name = name;\n}\nconst person1 = new Person(&quot;sss&quot;);\nconsole.log(person1.__proto__ === Person.prototype); // true\nconsole.log(person1.constructor === Person); // true\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><ul><li>对象的 set 属性需要返回值吗</li><li>_isAMomentObject?</li></ul>',12),l={},s=(0,a(3744).Z)(l,[["render",function(e,r){return n}]])},3744:(e,r)=>{r.Z=(e,r)=>{const a=e.__vccOpts||e;for(const[e,n]of r)a[e]=n;return a}}}]);