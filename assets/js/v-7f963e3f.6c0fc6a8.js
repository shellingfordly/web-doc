"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[127],{7628:(e,l,a)=>{a.r(l),a.d(l,{data:()=>i});const i={key:"v-7f963e3f",path:"/frame/vue/vue2/",title:"Vue2 学习笔记",lang:"en-US",frontmatter:{sidebar:"auto",categories:["frame","vue","vue2"]},excerpt:"",headers:[{level:2,title:"vuex",slug:"vuex",children:[{level:3,title:"思考",slug:"思考",children:[]},{level:3,title:"回答",slug:"回答",children:[]}]},{level:2,title:"组件通信",slug:"组件通信",children:[{level:3,title:"组件关系通信",slug:"组件关系通信",children:[]}]},{level:2,title:"vue-router",slug:"vue-router",children:[]},{level:2,title:"设计原则",slug:"设计原则",children:[{level:3,title:"易用性",slug:"易用性",children:[]},{level:3,title:"灵活性",slug:"灵活性",children:[]},{level:3,title:"高效性",slug:"高效性",children:[]}]},{level:2,title:"vue 中 key",slug:"vue-中-key",children:[]},{level:2,title:"性能优化",slug:"性能优化",children:[{level:3,title:"路由懒加载",slug:"路由懒加载",children:[]},{level:3,title:"keep-alive 缓存页面",slug:"keep-alive-缓存页面",children:[]},{level:3,title:"使用 v-show 复用 DOM",slug:"使用-v-show-复用-dom",children:[]},{level:3,title:"v-for 和 v-if",slug:"v-for-和-v-if",children:[]},{level:3,title:"长列表",slug:"长列表",children:[]},{level:3,title:"事件销毁",slug:"事件销毁",children:[]},{level:3,title:"图片懒加载",slug:"图片懒加载",children:[]},{level:3,title:"第三方组件按需引入",slug:"第三方组件按需引入",children:[]},{level:3,title:"无状态组件",slug:"无状态组件",children:[]},{level:3,title:"子组件分割",slug:"子组件分割",children:[]},{level:3,title:"变量的本地化",slug:"变量的本地化",children:[]},{level:3,title:"SSR",slug:"ssr",children:[]}]},{level:2,title:"nextTick",slug:"nexttick",children:[{level:3,title:"思考",slug:"思考-1",children:[]},{level:3,title:"回答",slug:"回答-1",children:[]}]},{level:2,title:"vue 响应式",slug:"vue-响应式",children:[{level:3,title:"思考",slug:"思考-2",children:[]},{level:3,title:"回答",slug:"回答-2",children:[]}]}],filePathRelative:"frame/vue/vue2/README.md",git:{updatedTime:1639550125e3,contributors:[{name:"liu",email:"shellingfordly@qq.com",commits:1}]}}},8143:(e,l,a)=>{a.r(l),a.d(l,{default:()=>s});const i=(0,a(6252).uE)('<h1 id="vue2-学习笔记" tabindex="-1"><a class="header-anchor" href="#vue2-学习笔记" aria-hidden="true">#</a> Vue2 学习笔记</h1><h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> vuex</h2><h3 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h3><ul><li>vuex 的定义</li><li>vuex 解决了什么问题</li><li>什么时候需要 vuex</li><li>具体用法</li><li>vuex 原理</li></ul><h3 id="回答" tabindex="-1"><a class="header-anchor" href="#回答" aria-hidden="true">#</a> 回答</h3><ul><li>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化</li><li>主要解决多组件之间状态共享的问题，保证了多个组件状态的一致性，保证单向数据流动，使代码更结构化且易于维护</li><li>vuex 实现：new vue 实例，将 state 作为 data 对其进行响应式处理</li></ul><h2 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信" aria-hidden="true">#</a> 组件通信</h2><ul><li>props</li><li>$emit/$on</li><li>$children/$parent</li><li>$attrs/$listeners</li><li>ref</li><li>$root</li><li>eventbus</li><li>vuex</li></ul><h3 id="组件关系通信" tabindex="-1"><a class="header-anchor" href="#组件关系通信" aria-hidden="true">#</a> 组件关系通信</h3><ul><li>父子 <ul><li>props</li><li>$emit/$on</li><li>$children/$parent</li><li>$attrs/$listeners</li><li>ref</li></ul></li><li>兄弟 <ul><li>$root</li><li>$parent</li><li>eventbus</li><li>vuex</li></ul></li><li>跨层级 <ul><li>eventbus</li><li>vuex</li><li>provide/inject</li></ul></li></ul><h2 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> vue-router</h2><ul><li><p>vue-router 中路由保护策略</p></li><li><p>路由安全通常使用导航守卫来做，通过设置路由导航钩子函数的方式添加守卫函数，在里面判断用户的登录状态和权限，从而达到保护指定路由的目的</p></li><li><p>实现</p><ul><li>全局前置守卫 beforeEach</li><li>路由独享守卫 beforeEnter</li><li>组件内守卫 beforeRouteEnter</li></ul></li><li><p>过程</p><ul><li>全局守卫可以使用 router.beforeEach((to, form, next)=&gt;{})设置守卫，每次路由导航时，都会执行该守卫，从而检查当前用户是否可以继续导航，通过给 next 函数传递多种参数达到不同的目的，比如如果禁止用户继续导航可以传递 next（false），正常放行可以不传递参数，传递 path 字符串可以重定向到一个新的地址等等</li></ul></li><li><p>生效方式：比如 beforeEach 只是注册一个 hook，当路由发生变化，router 准备导航之前会批量执行这些 hooks，并且把目标路由 to，当前路由 from，以及后续处理函数 next 传递给 hook</p></li><li><p>全局守卫、路由独享守卫和组件内守卫</p><ul><li>作用范围</li><li>组件实例的获取 <ul><li>beforeRouteEnter 内可以获取到 vm 组件实例</li></ul></li><li>名称/数量/顺序 <ul><li>导航被触发</li><li>在失活的组件里调用离开守卫</li><li>调用全局的 beforeEach 守卫</li><li>在重用的组件里调用 beforeRouteUpdate 守卫</li><li>在路由配置里调用 beforeEnter</li><li>解析异步路由组件</li><li>在被激活的组件里调用 beforeRouteEnter</li><li>调用全局的 beforeResolve 守卫</li><li>导航被确认</li><li>调用全局的 afterEach 钩子</li><li>触发 DOM 更新</li><li>用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数</li></ul></li></ul></li><li><p>项目中路由守卫的应用</p></li><li><p>前后端路由一样吗</p></li><li><p>前端路由是用什么方式实现的</p></li><li><p>路由守卫的 next 方法是怎么实现的</p></li></ul><h2 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则" aria-hidden="true">#</a> 设计原则</h2><ul><li>渐进式 JS 框架</li><li>易用、灵活、高效</li></ul><h3 id="易用性" tabindex="-1"><a class="header-anchor" href="#易用性" aria-hidden="true">#</a> 易用性</h3><h3 id="灵活性" tabindex="-1"><a class="header-anchor" href="#灵活性" aria-hidden="true">#</a> 灵活性</h3><h3 id="高效性" tabindex="-1"><a class="header-anchor" href="#高效性" aria-hidden="true">#</a> 高效性</h3><ul><li>虚拟 dom</li><li>diff 算法</li></ul><h2 id="vue-中-key" tabindex="-1"><a class="header-anchor" href="#vue-中-key" aria-hidden="true">#</a> vue 中 key</h2><ul><li><p>确定唯一的 dom 元素</p></li><li><p>首位判断假猜策略</p></li></ul><p>key 的作用是为了高效的更新虚拟 DOM，其原理是 vue 在 patch 过程中通过 key 可以精准判断两个节点是否是同一个，从而避免频繁更新不同元素，减少 dom 操作，提高性能； 并且没有 key 值可能会在列表更新时引发一些隐藏 bug； 在使用相同标签元素的过度切换时，也会用到 key 属性，其目的也是为了让 vue 可以区分它们，否则 vue 只会替换其内部属性而不会触发过渡效果</p><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h2><h3 id="路由懒加载" tabindex="-1"><a class="header-anchor" href="#路由懒加载" aria-hidden="true">#</a> 路由懒加载</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  routes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&quot;/foo/&quot;</span><span class="token punctuation">,</span> <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;./Foo.vue&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="keep-alive-缓存页面" tabindex="-1"><a class="header-anchor" href="#keep-alive-缓存页面" aria-hidden="true">#</a> keep-alive 缓存页面</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="使用-v-show-复用-dom" tabindex="-1"><a class="header-anchor" href="#使用-v-show-复用-dom" aria-hidden="true">#</a> 使用 v-show 复用 DOM</h3><h3 id="v-for-和-v-if" tabindex="-1"><a class="header-anchor" href="#v-for-和-v-if" aria-hidden="true">#</a> v-for 和 v-if</h3><blockquote><p>源码 compiler/codegen/index.js</p></blockquote><ul><li><p>v-for 优先于 v-if</p></li><li><p>同时出现时，每次渲染都会先执行循环再判断条件，无论如何循环都不可避免，浪费了性能</p></li><li><p>避免这种情况</p><ul><li>先 v-if 在做循环</li><li>如果是 v-for 内部的组件需要判断 v-if，则可以先处理数据，在给 template 循环</li></ul></li></ul><h3 id="长列表" tabindex="-1"><a class="header-anchor" href="#长列表" aria-hidden="true">#</a> 长列表</h3><ul><li><p>存粹的数据展示，使用 Object.freeze 冻结数据</p></li><li><p>虚拟滚动</p><ul><li>vue-virtual-scroller</li><li>vue-virtual-scroll-list</li></ul></li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recycle-scroller</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>recycle-scroller</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="事件销毁" tabindex="-1"><a class="header-anchor" href="#事件销毁" aria-hidden="true">#</a> 事件销毁</h3><ul><li>消除定时器</li></ul><h3 id="图片懒加载" tabindex="-1"><a class="header-anchor" href="#图片懒加载" aria-hidden="true">#</a> 图片懒加载</h3><ul><li>vue-lazyload</li></ul><h3 id="第三方组件按需引入" tabindex="-1"><a class="header-anchor" href="#第三方组件按需引入" aria-hidden="true">#</a> 第三方组件按需引入</h3><h3 id="无状态组件" tabindex="-1"><a class="header-anchor" href="#无状态组件" aria-hidden="true">#</a> 无状态组件</h3><ul><li>函数式组件</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">functional</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="子组件分割" tabindex="-1"><a class="header-anchor" href="#子组件分割" aria-hidden="true">#</a> 子组件分割</h3><ul><li>更新频繁的组件拆分出去，更新时只更新自己的状态</li></ul><h3 id="变量的本地化" tabindex="-1"><a class="header-anchor" href="#变量的本地化" aria-hidden="true">#</a> 变量的本地化</h3><ul><li>外部传入的数据，在自组件中使用变量接收，不会频繁的取去引用 props 计算属性</li></ul><h3 id="ssr" tabindex="-1"><a class="header-anchor" href="#ssr" aria-hidden="true">#</a> SSR</h3><h2 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick</h2><h3 id="思考-1" tabindex="-1"><a class="header-anchor" href="#思考-1" aria-hidden="true">#</a> 思考</h3><ul><li>nextTick 是啥</li><li>为什么需要 nextTick，用异步更新队列实现原理解释</li><li>在什么地方用到它</li><li>如何使用 nextTick</li><li>nextTick 的源码实现</li></ul><h3 id="回答-1" tabindex="-1"><a class="header-anchor" href="#回答-1" aria-hidden="true">#</a> 回答</h3><ul><li>延迟回调：在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用这个方法，可以立即获取更新后的 DOM 状态</li><li>nextTick 是一个全局 API，由于 vue 的异步更新策略导致对数据修改之后不会立刻体现在 dom 变化上，此时如果想要立即获取更新后的 dom 状态，就需要使用这个方法</li><li>vue 在更新 dom 时是异步执行的。只要侦听到数据变化，vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 dom 操作时非常重要的。nextTick 方法会在队列中加入一个回调函数，确保该函数在前面的 dom 操作完成后才调用</li><li>实现：在 callback 里加入我们传入的函数，然后用 timerFunc 异步方式调用他们，首选的异步方式会是 Promise</li></ul><h2 id="vue-响应式" tabindex="-1"><a class="header-anchor" href="#vue-响应式" aria-hidden="true">#</a> vue 响应式</h2><h3 id="思考-2" tabindex="-1"><a class="header-anchor" href="#思考-2" aria-hidden="true">#</a> 思考</h3><ul><li>什么是响应式</li><li>为什么需要响应式</li><li>能带来什么好处</li><li>vue 的响应式怎么实现的，有什么缺点</li><li>vue3 响应式的变化</li></ul><h3 id="回答-2" tabindex="-1"><a class="header-anchor" href="#回答-2" aria-hidden="true">#</a> 回答</h3><ul><li>概念：能够使数据在变化时可以被检测到并对这种变化做出相应的机制</li><li>mvvm 框架要解决的核心问题就是连接数据层和视图层。因为 mvvm 框架是一个胶水层，解决 model 和 view 层的耦合关系，提高生产力。通过数据驱动应用，数据变化，视图更新，要做到这点就需要对数据做响应式处理，这样一旦数据发生变化就可以立即做出更新处理</li><li>vue 为例，通过数据响应式加上虚拟 dom 和 patch 算法，是我们只需要操作数据，不用频繁做 dom 操作，提升开发效率，降低开发难度</li><li>vue2 的数据响应式会根据数据类型来做不同的处理，如果是对象则采用 Object.defineProperty()的方式定义数据拦截，当数据被访问或发生变化时，做出相应。数组则是通过覆盖数组原型的方法，扩展它的 7 个变更方法，使这些方法可以额外的做更新通知，从而做出响应。缺陷：初始化时递归遍历会造成性能损失，新增或删除属性时需要使用 Vue.set/delete 这样特殊的 api 才能生效；对 es6 中新产生的 Map、Set 这些数据结构不支持等问题</li><li>vue3：利用 es6 的 Proxy（支持对象和数组）机制代理要响应化的数据，它有很多好处，编程体验是一致的，不需要使用特殊 api，初始化性能和内存消耗得到大幅改善。由于响应式的实现抽取为独立的包，可以更灵活的使用它，抽出公共的逻辑代码。 <ul><li>Proxy 只对数据外层包裹了一个壳，没有对数组或者对象内部的元素进行代理，当使用到内部的元素时才会去创建 Proxy 对其响应，因此降低了 cpu 的使用和内存消耗</li></ul></li></ul>',56),n={},s=(0,a(3744).Z)(n,[["render",function(e,l){return i}]])},3744:(e,l)=>{l.Z=(e,l)=>{const a=e.__vccOpts||e;for(const[e,i]of l)a[e]=i;return a}}}]);