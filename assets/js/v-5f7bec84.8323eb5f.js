"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[3851],{1248:(n,a,s)=>{s.r(a),s.d(a,{data:()=>p});const p={key:"v-5f7bec84",path:"/frame/vue/vue3/ref.html",title:"ref",lang:"en-US",frontmatter:{categories:["frame","vue","vue3"]},excerpt:"",headers:[{level:2,title:"直接赋值问题",slug:"直接赋值问题",children:[{level:3,title:"数组",slug:"数组",children:[]},{level:3,title:"对象",slug:"对象",children:[]}]},{level:2,title:"与 reactive 的区别",slug:"与-reactive-的区别",children:[]}],filePathRelative:"frame/vue/vue3/ref.md",git:{updatedTime:1643087976e3,contributors:[{name:"liu",email:"shellingfordly@qq.com",commits:1}]}}},1624:(n,a,s)=>{s.r(a),s.d(a,{default:()=>e});const p=(0,s(6252).uE)('<h1 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h1><ul><li>ref 返回一个 Ref 类型的数据</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> headData<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>DataType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nheadData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    data<span class="token operator">:</span> <span class="token string">&quot;121w&quot;</span><span class="token punctuation">,</span>\n    note<span class="token operator">:</span> <span class="token string">&quot;总播放量&quot;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\ndata<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">return</span> <span class="token punctuation">{</span> headData<span class="token punctuation">,</span> data <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="直接赋值问题" tabindex="-1"><a class="header-anchor" href="#直接赋值问题" aria-hidden="true">#</a> 直接赋值问题</h2><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><ul><li>使用 ref 创建的数据直接进行=赋值是可以响应视图的</li><li>而使用 reactive 不可以</li><li>数组不设定类型的话，添加数据会报类型错误 <ul><li>并且要是一个 Ref 类型</li></ul></li></ul><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3><ul><li>对象使用 data.value 赋值时 ts 不会报类型错误</li><li>直接对 data 使用=赋值则会报类型错误</li></ul><h2 id="与-reactive-的区别" tabindex="-1"><a class="header-anchor" href="#与-reactive-的区别" aria-hidden="true">#</a> 与 reactive 的区别</h2><ul><li>使用 ref 创建对象无法被 watch 监控到</li><li>想要被 watch 监控需要获取 value</li><li>想要监控到具体的值时需要使用函数返回值</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> objRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> objReactive <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 无法监控到</span>\n<span class="token function">watch</span><span class="token punctuation">(</span>objRef<span class="token punctuation">,</span> <span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 可以监控到</span>\n<span class="token function">watch</span><span class="token punctuation">(</span>objRef<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 可以监控到</span>\n<span class="token function">watch</span><span class="token punctuation">(</span>objReactive<span class="token punctuation">,</span> <span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 监控具体到值</span>\n<span class="token function">watch</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> objReactive<span class="token punctuation">.</span>id<span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',11),t={},e=(0,s(3744).Z)(t,[["render",function(n,a){return p}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,p]of a)s[n]=p;return s}}}]);