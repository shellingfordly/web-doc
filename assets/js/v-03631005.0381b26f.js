"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[4446],{1210:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-03631005",path:"/frame/react/problem.html",title:"问题",lang:"en-US",frontmatter:{categories:["frame","react"]},excerpt:"",headers:[{level:2,title:"函数组件请求数据",slug:"函数组件请求数据",children:[]},{level:2,title:"自定义 hook 函数一直被执行问题",slug:"自定义-hook-函数一直被执行问题",children:[]}],filePathRelative:"frame/react/problem.md",git:{updatedTime:1650960179e3,contributors:[{name:"liuyao",email:"liuyao@liuyaodeiMac.local",commits:1}]}}},6820:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});const t=(0,a(6252).uE)('<h1 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h1><h2 id="函数组件请求数据" tabindex="-1"><a class="header-anchor" href="#函数组件请求数据" aria-hidden="true">#</a> 函数组件请求数据</h2><p>问题：在函数组件中请求数据，API.UserListAll 被一直不停的调用</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">UserPower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>tableData<span class="token punctuation">,</span> setTableData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  window<span class="token punctuation">.</span><span class="token constant">API</span><span class="token punctuation">.</span><span class="token function">UserListAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    count<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">users</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTableData</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>tableData<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>自我猜测：setTableData 改变了渲染用到的数据，因此再次触发 UserPower render，无限循环。 思考: 怎么在函数组件中只请求第一次，函数组件没有生命周期，难道只能用 class 组件来写吗</p><p>解决方法：</p><p>方案一：使用 useEffect</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> window<span class="token punctuation">.</span><span class="token constant">API</span><span class="token punctuation">.</span>UserListAll<span class="token operator">&lt;</span><span class="token constant">API</span><span class="token punctuation">.</span>RequestData<span class="token punctuation">,</span> <span class="token constant">API</span><span class="token punctuation">.</span>UserInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      count<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setTableData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="自定义-hook-函数一直被执行问题" tabindex="-1"><a class="header-anchor" href="#自定义-hook-函数一直被执行问题" aria-hidden="true">#</a> 自定义 hook 函数一直被执行问题</h2><ol><li>场景</li></ol><p>自定义 hook 中获取数据，到父组件中初始化数据，在子孙组件中使用</p><ol start="2"><li>问题</li></ol><p>自定义 hook 函数会被循环执行</p><ul><li>自定义 useContext</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> createContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">API</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/src/api&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> Context <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>StateModel<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">setData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token constant">API</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      id<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setState</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setData<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>父组件 Parent 中使用自定义 hook 创建初始数据</li></ul><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Context <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./hooks/useContext&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// useContext会被循环执行，导致接口一直被请求</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Context.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>state<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Son1</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Son2</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Context.Provider</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>子组件 Son1 中使用 context</li></ul><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Context <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./hooks/useContext&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Son1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>Context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Son1 context: </span><span class="token punctuation">{</span>context<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>子组件 Son2 中使用 context</li></ul><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Context <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./hooks/useContext&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Son2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>Context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Son2 context: </span><span class="token punctuation">{</span>context<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',21),p={},o=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);