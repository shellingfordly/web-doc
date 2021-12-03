"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[59],{1437:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-4bc2f0fd",path:"/frame/vue/vue3/slot.html",title:"",lang:"en-US",frontmatter:{categories:["frame","vue","vue3"]},excerpt:"",headers:[{level:2,title:"插槽",slug:"插槽",children:[{level:3,title:"父组件",slug:"父组件",children:[]},{level:3,title:"自组件",slug:"自组件",children:[]}]}]}},9517:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><h3 id="父组件" tabindex="-1"><a class="header-anchor" href="#父组件" aria-hidden="true">#</a> 父组件</h3><ul><li>v-slot 简写 #</li><li>在 slot 上传递的属性可以被 v-slot 接收 <ul><li>\b\b 可以使用:修改命名</li><li>可以使用扩展运算符取值</li></ul></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;\n  &lt;div&gt;\n    &lt;Son&gt;\n      &lt;template #less=&quot;data&quot;&gt;\n        {{ data.data }}\n      &lt;/template&gt;\n      &lt;template #more=&quot;{ data, other: otherMsg }&quot;&gt;\n        {{ data }} --- {{ otherMsg }}\n      &lt;/template&gt;\n    &lt;/Son&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n&lt;script&gt;\nimport Son from &quot;./Son.vue&quot;;\nexport default {\n  name: &quot;Parent&quot;,\n  components: {\n    Son,\n  },\n};\n&lt;/script&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="自组件" tabindex="-1"><a class="header-anchor" href="#自组件" aria-hidden="true">#</a> 自组件</h3><ul><li>传递多属性时可以使用 v-bind</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;\n  &lt;div class=&quot;son&quot;&gt;\n    &lt;slot name=&quot;less&quot; :data=&quot;data&quot;&gt;\n      {{ msg }}\n    &lt;/slot&gt;\n    &lt;slot name=&quot;more&quot; v-bind=&quot;{ ...state }&quot;&gt;\n      {{ msg }}\n    &lt;/slot&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n&lt;script&gt;\nexport default {\n  name: &quot;Son&quot;,\n  data() {\n    return {\n      state: {\n        data: &quot;我是子组件的数据&quot;,\n        other: &quot;其他数据&quot;,\n        test: &quot;测试数据&quot;,\n      },\n      msg: &quot;我是子组件的默认数据&quot;,\n    };\n  },\n};\n&lt;/script&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>',7),l={},t=(0,a(3744).Z)(l,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);