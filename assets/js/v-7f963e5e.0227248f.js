"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[80],{2113:(n,e,s)=>{s.r(e),s.d(e,{data:()=>l});const l={key:"v-7f963e5e",path:"/frame/vue/vue3/",title:"Vue3 学习笔记",lang:"en-US",frontmatter:{sidebar:"auto",categories:["frame","vue","vue3"]},excerpt:"",headers:[{level:2,title:"新特性",slug:"新特性",children:[{level:3,title:"虚拟 DOM 重写",slug:"虚拟-dom-重写",children:[]},{level:3,title:"插槽",slug:"插槽",children:[]},{level:3,title:"使用自组件的 props 类型",slug:"使用自组件的-props-类型",children:[]},{level:3,title:"检测元素在外部/内部点击",slug:"检测元素在外部-内部点击",children:[]},{level:3,title:"递归插槽",slug:"递归插槽",children:[]}]},{level:2,title:"setup",slug:"setup",children:[{level:3,title:"Suspense",slug:"suspense",children:[]},{level:3,title:"props",slug:"props",children:[]}]},{level:2,title:"data",slug:"data",children:[{level:3,title:"ref",slug:"ref",children:[]}]},{level:2,title:"配置",slug:"配置",children:[]},{level:2,title:"插槽",slug:"插槽-1",children:[]},{level:2,title:"自定义组件",slug:"自定义组件",children:[]},{level:2,title:"v-model",slug:"v-model",children:[]},{level:2,title:"踩坑",slug:"踩坑",children:[{level:3,title:"input",slug:"input",children:[]},{level:3,title:"双向数据绑定",slug:"双向数据绑定",children:[]},{level:3,title:"img src",slug:"img-src",children:[]}]},{level:2,title:"TS",slug:"ts",children:[{level:3,title:"类型推导",slug:"类型推导",children:[]},{level:3,title:"全局类型",slug:"全局类型",children:[]}]},{level:2,title:"key",slug:"key",children:[]},{level:2,title:"一些特性",slug:"一些特性",children:[{level:3,title:"Attribute 继承",slug:"attribute-继承",children:[]},{level:3,title:"teleport",slug:"teleport",children:[]}]}]}},875:(n,e,s)=>{s.r(e),s.d(e,{default:()=>t});const l=(0,s(6252).uE)('<h1 id="vue3-学习笔记" tabindex="-1"><a class="header-anchor" href="#vue3-学习笔记" aria-hidden="true">#</a> Vue3 学习笔记</h1><h2 id="新特性" tabindex="-1"><a class="header-anchor" href="#新特性" aria-hidden="true">#</a> 新特性</h2><ul><li>更快 <ul><li>虚拟 DOM 重写</li><li>优化 slots 的生成</li><li>静态树提升</li><li>静态属性提升</li><li>基于 proxy 响应式</li></ul></li><li>更小 <ul><li>通过摇树优化核心库体积</li></ul></li><li>更容易维护 <ul><li>ts + 模块化</li></ul></li><li>更友好 <ul><li>跨平台： 编译器和运行时核心与平台无关，使 vue 更容易与任何平台（Web、Android、Ios）一起使用</li></ul></li><li>更容易使用 <ul><li>ts</li><li>更好的调试支持</li><li>独立的响应式模块</li><li>Composition API <ul><li>逻辑复用</li></ul></li></ul></li></ul><h3 id="虚拟-dom-重写" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-重写" aria-hidden="true">#</a> 虚拟 DOM 重写</h3><h3 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h3><ol><li>默认内容和扩展点</li></ol><ul><li>vue 中的插槽可以有默认的内容</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;button class=&quot;button&quot; @click=&quot;$emit(&#39;click&#39;)&quot;&gt;\n  &lt;slot&gt;\n    &lt;!-- Used if no slot is provided --&gt;\n    Click me\n  &lt;/slot&gt;\n&lt;/button&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2"><li>单个作用域的插槽不需要 template 标签</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;DataTable&gt;\n  &lt;template #header=&quot;tableAttributes&quot;&gt;\n    &lt;TableHeader v-bind=&quot;tableAttributes&quot; /&gt;\n  &lt;/template&gt;\n&lt;/DataTable&gt;\n\n&lt;!-- 简写 --&gt;\n&lt;DataTable #header=&quot;tableAttributes&quot;&gt;\n  &lt;TableHeader v-bind=&quot;tableAttributes&quot; /&gt;\n&lt;/DataTable&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="3"><li>监听插槽的变化</li></ol><blockquote><p>MutationObserver 接口提供了监视对 DOM 树所做更改的能力。它被设计为旧的 Mutation Events 功能的替代品，该功能是 DOM3 Events 规范的一部分。</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>export default {\n  mounted() {\n    // 当有变化时调用`update`\n    const observer = new MutationObserver(this.update);\n\n    // 监听此组件的变化\n    observer.observe(this.$el, {\n      childList: true,\n      subtree: true,\n    });\n  },\n};\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="使用自组件的-props-类型" tabindex="-1"><a class="header-anchor" href="#使用自组件的-props-类型" aria-hidden="true">#</a> 使用自组件的 props 类型</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import Icon from &quot;./Icon&quot;;\nexport default {\n  components: { Icon },\n  props: {\n    ...Icon.props,\n  },\n};\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import Icon from &quot;./Icon&quot;;\n\nconst iconProps = {};\n\nObject.entries(Icon.props).forEach((key, val) =&gt; {\n  iconProps[`icon${key.toUpperCase()}`] = val;\n});\n\nexport default {\n  components: { Icon },\n  props: {\n    ...iconProps,\n    heading: {\n      type: String,\n      required: true,\n    },\n  },\n};\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="检测元素在外部-内部点击" tabindex="-1"><a class="header-anchor" href="#检测元素在外部-内部点击" aria-hidden="true">#</a> 检测元素在外部/内部点击</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window.addEventListener(&quot;mousedown&quot;, (e) =&gt; {\n  // 获取被点击的元素\n  const clickedEl = e.target;\n\n  if (el.contains(clickedEl)) {\n    //在 &quot;el &quot;里面点击了\n  } else {\n    //在 &quot;el &quot;外点击了\n  }\n});\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="递归插槽" tabindex="-1"><a class="header-anchor" href="#递归插槽" aria-hidden="true">#</a> 递归插槽</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;!-- VFor.vue --&gt;\n&lt;template&gt;\n  &lt;div&gt;\n    &lt;!--  渲染第一项 --&gt;\n    {{ list[0] }}\n    &lt;!-- 如果我们有更多的项目，继续!但是不要使用我们刚刚渲染的项 --&gt;\n    &lt;v-for v-if=&quot;list.length &gt; 1&quot; :list=&quot;list.slice(1)&quot; /&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>使用插槽，设置默认内容</li><li>方便对特殊的子项进行更改</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;\n  &lt;div&gt;\n    &lt;!-- Pass the item into the slot to be rendered --&gt;\n    &lt;slot v-bind:item=&quot;list[0]&quot;&gt;\n      &lt;!-- Default --&gt;\n      {{ list[0] }}\n    &lt;/slot&gt;\n\n    &lt;v-for v-if=&quot;list.length &gt; 1&quot; :list=&quot;list.slice(1)&quot;&gt;\n      &lt;!-- Recursively pass down scoped slot --&gt;\n      &lt;template v-slot=&quot;{ item }&quot;&gt;\n        &lt;slot v-bind:item=&quot;item&quot; /&gt;\n      &lt;/template&gt;\n    &lt;/v-for&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li>使用</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;\n  &lt;div&gt;\n    &lt;!-- 常规列表 --&gt;\n    &lt;v-for :list=&quot;list&quot; /&gt;\n\n    &lt;!-- 加粗的项目列表 --&gt;\n    &lt;v-for :list=&quot;list&quot;&gt;\n      &lt;template v-slot=&quot;{ item }&quot;&gt;\n        &lt;strong&gt;{{ item }}&lt;/strong&gt;\n      &lt;/template&gt;\n    &lt;/v-for&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h2><ul><li>setup 加上 async 时组件无法渲染出来</li><li>要给 setup 添加 async 就需要使用 Suspense 包裹此组件</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;Suspense&gt;\n  &lt;template #default&gt;\n    &lt;kol-table /&gt;\n  &lt;/template&gt;\n  &lt;template #fallback&gt; 数据加载中 ... &lt;/template&gt;\n&lt;/Suspense&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="suspense" tabindex="-1"><a class="header-anchor" href="#suspense" aria-hidden="true">#</a> Suspense</h3><ul><li>Suspense 的 template 下只能一个子元素 DOM，多了显示不出来</li><li>不过 antd 给的提示说 api 可能会变</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;!-- 错误写法 --&gt;\n&lt;!-- &lt;Suspense&gt; is an experimental feature and its API will likely change. --&gt;\n&lt;Suspense&gt;\n  &lt;template #default&gt;\n    &lt;div&gt;&lt;/div&gt;\n    &lt;div&gt;&lt;/div&gt;\n  &lt;/template&gt;\n&lt;/Suspense&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;!-- 正确写法 --&gt;\n&lt;Suspense&gt;\n  &lt;template #default&gt;\n    &lt;div&gt;\n      &lt;div&gt;&lt;/div&gt;\n      &lt;div&gt;&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/template&gt;\n&lt;/Suspense&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3><ul><li>setup 的 props 参数需要在 props 属性接收了才有</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>export default defineComponent({\n  // 接收\n  props: [&quot;data&quot;],\n  async setup(props) {\n    console.log(props.data);\n    return {};\n  },\n});\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data</h2><h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h3><ul><li>取值的时候需要加 value</li></ul><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><ul><li>无法配置多级默认路由</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>&#39;/api&#39;:&#39;https://w1.cosmeapp.com/api/xxx&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="插槽-1" tabindex="-1"><a class="header-anchor" href="#插槽-1" aria-hidden="true">#</a> 插槽</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;!-- Son.vue --&gt;\n&lt;template&gt;\n  &lt;slot name=&quot;left&quot;&gt;&lt;/slot&gt;\n&lt;/template&gt;\n\n&lt;!-- Parent.vue --&gt;\n&lt;template&gt;\n  &lt;Son&gt;\n    &lt;template #left&gt; &lt;/template&gt;\n  &lt;/Son&gt;\n&lt;/template&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="自定义组件" tabindex="-1"><a class="header-anchor" href="#自定义组件" aria-hidden="true">#</a> 自定义组件</h2><ul><li><s>不需要对自组件进行绑定也可以触发事件</s></li><li><s>给 Select 组件绑定的 v-model:value 和@change 都不要代理</s></li><li>当 Select 组件的根组件直接是 a-select 时，可以不需要代理，属性将默认传入 a-select 组件</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;!-- Parent.vue --&gt;\n&lt;template&gt;\n  &lt;Select\n    v-model:value=&quot;state.value&quot;\n    :options=&quot;state.options&quot;\n    @change=&quot;changeValue&quot;\n  &gt;&lt;/Select&gt;\n&lt;/template&gt;\n\n&lt;!-- Select.vue --&gt;\n&lt;template&gt;\n  &lt;a-select ref=&quot;select&quot;&gt;\n    &lt;a-select-option v-for=&quot;(item, i) in options&quot; :key=&quot;i&quot; :value=&quot;item.value&quot;&gt;\n      {{ item.label }}\n    &lt;/a-select-option&gt;\n  &lt;/a-select&gt;\n&lt;/template&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h2><ul><li>可以指定接受的变量名</li><li>可以绑定多个 v-model</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;!-- Son.vue --&gt;\n&lt;template&gt;\n  &lt;!-- 接受对应的变量 --&gt;\n  &lt;input type=&quot;text&quot; :value=&quot;value&quot; /&gt;\n  &lt;input type=&quot;text&quot; :value=&quot;msg&quot; /&gt;\n&lt;/template&gt;\n\n&lt;!-- Parent.vue --&gt;\n&lt;template&gt;\n  &lt;Son v-model:value=&quot;value&quot; v-model:msg=&quot;msg&quot; /&gt;\n&lt;/template&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>自组件给父组件传值</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>setup(props, ctx){\n  ctx.emit(&#39;update:msg&#39;,e.target.value)\n  ctx.emit(&#39;update:value&#39;,e.target.value)\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="踩坑" tabindex="-1"><a class="header-anchor" href="#踩坑" aria-hidden="true">#</a> 踩坑</h2><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> input</h3><ul><li>给 input 绑定的值必须是 reactive 创建响应式对象的属性，ref 创建字符串将无法输入</li></ul><h3 id="双向数据绑定" tabindex="-1"><a class="header-anchor" href="#双向数据绑定" aria-hidden="true">#</a> 双向数据绑定</h3><ul><li>对象直接重新赋值页面不响应</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const data = reactive({\n  a: 1,\n});\ndata = {\n  b: 2,\n};\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="img-src" tabindex="-1"><a class="header-anchor" href="#img-src" aria-hidden="true">#</a> img src</h3><ul><li>protocol should added in img src, otherwise an error occurred, maybe it&#39;s a bug of vite</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;!-- correct --&gt;\n&lt;img src=&quot;http://xxx&quot; /&gt;\n&lt;!-- An error occurred while img src without protocol (http or https)  --&gt;\n&lt;img src=&quot;//xxx&quot; /&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="ts" tabindex="-1"><a class="header-anchor" href="#ts" aria-hidden="true">#</a> TS</h2><h3 id="类型推导" tabindex="-1"><a class="header-anchor" href="#类型推导" aria-hidden="true">#</a> 类型推导</h3><ul><li>获取某个变量的推导类型</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>const obj = {\n  a: 1,\n  b: 2,\n};\nconst obj1: typeof obj = {}; // 类型检测会报错\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>获取没个函数返回的类型</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function fn() {\n  return {\n    a: 1,\n  };\n}\nconst obj: ReturnType&lt;typeof fn&gt; = {\n  a: 1,\n  b: 2, // 类型检测会报错\n};\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>Object 通过变量获取</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface {\n  [key: string]: any\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="全局类型" tabindex="-1"><a class="header-anchor" href="#全局类型" aria-hidden="true">#</a> 全局类型</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>declare namesepace API {\n  interface Common {\n    [key: string]: any\n  }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> key</h2><ul><li>用于强制替换元素/组件而不是重复使用它 <ul><li>完整地触发组件的生命周期钩子</li><li>触发过渡</li></ul></li><li>当 text 发生改变时，&lt;span&gt; 总是会被替换而不是被修改，因此会触发过渡</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;transition&gt;\n  &lt;span :key=&quot;text&quot;&gt;{{ text }}&lt;/span&gt;\n&lt;/transition&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="一些特性" tabindex="-1"><a class="header-anchor" href="#一些特性" aria-hidden="true">#</a> 一些特性</h2><h3 id="attribute-继承" tabindex="-1"><a class="header-anchor" href="#attribute-继承" aria-hidden="true">#</a> Attribute 继承</h3><p>props 和 emits property 中未包含的所有属性将会自动绑定到自组件的根节点上</p><ul><li>可以使用 inheritAttrs: false 禁用</li><li>多个根节点组件不会自动绑定，将会发出警告，使用 v-bind 绑定后则清楚警告</li></ul><h3 id="teleport" tabindex="-1"><a class="header-anchor" href="#teleport" aria-hidden="true">#</a> teleport</h3><p>将一个 DOM 挂载到另一个 DOM 上，多个 &lt;teleport&gt; 组件可以将其内容挂载到同一个目标元素</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;teleport to=&quot;#modals&quot;&gt;\n  &lt;div&gt;A&lt;/div&gt;\n&lt;/teleport&gt;\n&lt;teleport to=&quot;#modals&quot;&gt;\n  &lt;div&gt;B&lt;/div&gt;\n&lt;/teleport&gt;\n&lt;!-- result--&gt;\n&lt;div id=&quot;modals&quot;&gt;\n  &lt;div&gt;A&lt;/div&gt;\n  &lt;div&gt;B&lt;/div&gt;\n&lt;/div&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',79),a={},t=(0,s(3744).Z)(a,[["render",function(n,e){return l}]])},3744:(n,e)=>{e.Z=(n,e)=>{const s=n.__vccOpts||n;for(const[n,l]of e)s[n]=l;return s}}}]);