"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[845],{7073:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-9bc2cf98",path:"/pages/93f87b/",title:"README",lang:"en-US",frontmatter:{sidebar:"auto",title:"README",date:"2021-11-25T10:27:00.000Z",permalink:"/pages/93f87b/",categories:["web","javascript"],tags:[null]},excerpt:"",headers:[{level:2,title:"对象",slug:"对象",children:[{level:3,title:"结构",slug:"结构",children:[]},{level:3,title:"创建对象",slug:"创建对象",children:[]},{level:3,title:"构造函数模式",slug:"构造函数模式",children:[]}]},{level:2,title:"问题",slug:"问题",children:[]}],filePathRelative:"web/javascript/README.md",git:{updatedTime:1638519252e3,contributors:[{name:"liu",email:"shellingfordly@qq.com",commits:1}]}}},5211:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2><ul><li><p>Object.defineProperty(obj, obj) 设置对象的默认特性</p></li><li><p>Object.defineProperties(obj, obj) 设置多个属性的特性</p></li><li><p>Object.getOwnPropertyDescriptor(obj, key) 获取对象指定属性的特性</p></li><li><p>Object.getOwnPropertyDescriptors(obj, key) 获取对象所有属性的特性</p></li></ul><h3 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h3><ul><li>嵌套结构</li><li>部分解构</li><li>参数上下文匹配</li></ul><h3 id="创建对象" tabindex="-1"><a class="header-anchor" href="#创建对象" aria-hidden="true">#</a> 创建对象</h3><ul><li>工厂模式</li><li>构造函数模式</li></ul><h3 id="构造函数模式" tabindex="-1"><a class="header-anchor" href="#构造函数模式" aria-hidden="true">#</a> 构造函数模式</h3><ul><li>person1.__proto__ 就是 Person.prototype</li><li>person1.constructor 就是 Person</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;sss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><ul><li>对象的 set 属性需要返回值吗</li><li>_isAMomentObject?</li></ul>',12),t={},p=(0,a(3744).Z)(t,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);