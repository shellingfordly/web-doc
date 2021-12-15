"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[178],{4770:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-33242a10",path:"/frame/vue/vue3/problem.html",title:"问题",lang:"en-US",frontmatter:{categories:["frame","vue","vue3"]},excerpt:"",headers:[{level:2,title:"getCurrentInstance",slug:"getcurrentinstance",children:[]},{level:2,title:"ctx",slug:"ctx",children:[]},{level:2,title:"proxy",slug:"proxy",children:[]},{level:2,title:"数据响应",slug:"数据响应",children:[{level:3,title:"某些特殊情况下，非响应式数据改变也能被页面响应",slug:"某些特殊情况下-非响应式数据改变也能被页面响应",children:[]}]},{level:2,title:"组件循环",slug:"组件循环",children:[]}],filePathRelative:"frame/vue/vue3/problem.md",git:{updatedTime:1639550125e3,contributors:[{name:"liu",email:"shellingfordly@qq.com",commits:1}]}}},2600:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var t=a(6252);const p=(0,t.uE)('<h1 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h1><h2 id="getcurrentinstance" tabindex="-1"><a class="header-anchor" href="#getcurrentinstance" aria-hidden="true">#</a> getCurrentInstance</h2><blockquote><p>获取当前组件实例</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="ctx" tabindex="-1"><a class="header-anchor" href="#ctx" aria-hidden="true">#</a> ctx</h2><blockquote><p>当前组件的上下文，只能在开发环境下使用，生产环境下的 ctx 将访问不到，ctx 中包含了组件中由 ref 和 reactive 创建的响应式数据对象，以及 proxy 下的属性</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p>注意：在 setup 中不可以调用 getCurrentInstance().ctx 来获取组件内部数据，因为在 prod 模式会被干掉</p></li><li><p>原因：</p><ul><li>ctx 只是为了便于在开发模式下通过控制台检查</li><li>在 prod 模式是一个空对象</li></ul></li></ul>',8),e=(0,t._)("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5bff5eb65818408aa012a6fff86c2852~tplv-k3u1fbpfcp-watermark.image?imageslim",alt:"instance.ctx"},null,-1),o=(0,t.Uk)(" 图片来源"),c={href:"https://juejin.cn/post/6899432348266283022",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("掘金 春去春又来"),u=(0,t.uE)('<h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> proxy</h2><blockquote><p>在开发环境以及生产环境下都能放到组件上下文对象（推荐）</p></blockquote><p>包含属性$attrs,$data,$el,$emit,$forceUpdate,$nextTick,$options,$parent,$props,$refs,$root,$slots,$watch</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="数据响应" tabindex="-1"><a class="header-anchor" href="#数据响应" aria-hidden="true">#</a> 数据响应</h2><h3 id="某些特殊情况下-非响应式数据改变也能被页面响应" tabindex="-1"><a class="header-anchor" href="#某些特殊情况下-非响应式数据改变也能被页面响应" aria-hidden="true">#</a> 某些特殊情况下，非响应式数据改变也能被页面响应</h3><p>非响应式变量改变时页面是无法重新渲染的，如果在响应式数据改变的时候，改变了非响应式的变量，此时页面会同时重新渲染新数据。但是只限于数组和对象的改变，普通字符串不渲染。</p><h4 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h4><ul><li>数组的 push/pop 或者是直接[index]赋值的方式都是会触发的</li></ul><p>template 代码</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>push<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Push<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>ts 代码</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n <span class="token keyword">const</span> list1 <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bbb&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ccc&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;AAA&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;BBB&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;CCC&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    list1<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;ddd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    list2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;DDD&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span> list1<span class="token punctuation">,</span> list2<span class="token punctuation">,</span> push <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>点击 Push，页面同时渲染了 list1 和 list2</p><h4 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h4><ul><li>对象的属性修改/新增也是会触发页面渲染的</li></ul><p>template 代码</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modify<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>modify<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ obj1 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ obj2 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>ts 代码</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    key<span class="token operator">:</span> <span class="token string">&quot;obj1 key&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>\n    key<span class="token operator">:</span> <span class="token string">&quot;obj2 key&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">modify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    obj1<span class="token punctuation">.</span>key <span class="token operator">=</span> <span class="token string">&quot;modify obj1 key&quot;</span><span class="token punctuation">;</span>\n    obj2<span class="token punctuation">.</span>key <span class="token operator">=</span> <span class="token string">&quot;modify obj2 key&quot;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span> obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">,</span> modify <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>点击修改 obj1 和 obj2 的 key 后，页面都渲染了</p><h4 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h4><ul><li>修改普通字符串后，页面没有渲染</li><li>数字/Boolean 和字符串的效果一样</li></ul><p>template 代码</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modify<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>modify<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>value1 ====== {{ value1 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>value2 ====== {{ value2 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>js 代码</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> value1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;使用ref声明的value1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> value2 <span class="token operator">=</span> <span class="token string">&quot;普通字符串value2&quot;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">modify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    value1<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&quot;修改value1&quot;</span><span class="token punctuation">;</span>\n    value2 <span class="token operator">=</span> <span class="token string">&quot;修改value2&quot;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span> value1<span class="token punctuation">,</span> value2<span class="token punctuation">,</span> modify <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>点击修改后页面只有 ref 声明的变量重新渲染了，普通声明的变量并没有重新渲染</p><h2 id="组件循环" tabindex="-1"><a class="header-anchor" href="#组件循环" aria-hidden="true">#</a> 组件循环</h2><ul><li>当在给某组件循环需要在外层套 div/template ，但同时 div/template 会影响结构时，可以直接循环组件</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Parent</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in list<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Parent</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',31),i={},r=(0,a(3744).Z)(i,[["render",function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[e,o,(0,t._)("a",c,[l,(0,t.Wm)(a)])]),u],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);