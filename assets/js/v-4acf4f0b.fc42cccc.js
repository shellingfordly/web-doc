"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[485],{2995:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-4acf4f0b",path:"/frame/vue/vue3/case.html",title:"对新特性的实际应用",lang:"en-US",frontmatter:{categories:["frame","vue","vue3"]},excerpt:"",headers:[{level:2,title:"hook 形式使用弹窗组件",slug:"hook-形式使用弹窗组件",children:[{level:3,title:"MyDrawer.vue",slug:"mydrawer-vue",children:[]},{level:3,title:"useDialog.ts",slug:"usedialog-ts",children:[]},{level:3,title:"home.vue",slug:"home-vue",children:[]},{level:3,title:"TestDialog.vue",slug:"testdialog-vue",children:[]}]}],filePathRelative:"frame/vue/vue3/case.md",git:{updatedTime:163912863e4,contributors:[{name:"liu",email:"shellingfordly@qq.com",commits:1}]}}},2917:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="对新特性的实际应用" tabindex="-1"><a class="header-anchor" href="#对新特性的实际应用" aria-hidden="true">#</a> 对新特性的实际应用</h1><h2 id="hook-形式使用弹窗组件" tabindex="-1"><a class="header-anchor" href="#hook-形式使用弹窗组件" aria-hidden="true">#</a> hook 形式使用弹窗组件</h2><p>vue3 新增了 composition api 之后，组件功能的拆分更加方便了，下面使用这种方式来编写弹窗组件，抽屉同理。</p><h3 id="mydrawer-vue" tabindex="-1"><a class="header-anchor" href="#mydrawer-vue" aria-hidden="true">#</a> MyDrawer.vue</h3><p>首先，自定义一个 dialog 组件。此组件内部暴露控制弹窗显隐的方法、和设置属性的方法，getCurrentInstance 是 vue 提供的获取组件实例的方法，具体代码如下———</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>el<span class="token operator">-</span>dialog\n    <span class="token operator">:</span>before<span class="token operator">-</span>close<span class="token operator">=</span><span class="token string">&quot;()=&gt;{ actionDialog(false) }&quot;</span>\n    v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;visible&quot;</span>\n    v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;getProps&quot;</span>\n  <span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>template #<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;data&quot;</span> v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in Object.keys($slots, &#39;default&#39;)&quot;</span><span class="token operator">&gt;</span>\n      <span class="token operator">&lt;</span>slot <span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">&quot;item&quot;</span> v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;data&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>dialog<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  computed<span class="token punctuation">,</span>\n  defineComponent<span class="token punctuation">,</span>\n  getCurrentInstance<span class="token punctuation">,</span>\n  reactive<span class="token punctuation">,</span>\n  ref<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> propsRef <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      visible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      title<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> getProps <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>propsRef<span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> dialogInstance <span class="token operator">=</span> <span class="token punctuation">{</span>\n      actionDialog<span class="token punctuation">,</span>\n      setProps<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&quot;register&quot;</span><span class="token punctuation">,</span> dialogInstance<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">actionDialog</span><span class="token punctuation">(</span><span class="token parameter">isShow<span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      visible<span class="token punctuation">.</span>value <span class="token operator">=</span> isShow<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">setProps</span><span class="token punctuation">(</span><span class="token parameter">propsValue<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>propsRef <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> propsValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      visible<span class="token punctuation">,</span>\n      getProps<span class="token punctuation">,</span>\n      actionDialog<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h3 id="usedialog-ts" tabindex="-1"><a class="header-anchor" href="#usedialog-ts" aria-hidden="true">#</a> useDialog.ts</h3><p>除了自定义组件内部需要做一些处理之外，还需要提供一个暴露一些操作弹窗方法的 useDialog 方法，这就是常说的 hook 函数吧。此处暴露一个 register 方法，在使用时该方法需要绑定在自定义 dialog 组件上。当创建了 dialog 组件后，就会触发 register 方法，将 dialog 实例和内部提供的方法传递出来，然后在父组件中使用。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/reactivity&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> isInSetup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/utils/help/vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DialogPropsModel<span class="token punctuation">,</span> ResultModel<span class="token punctuation">,</span> MethodsModel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./types&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useDialog</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token operator">?</span><span class="token operator">:</span> DialogPropsModel</span><span class="token punctuation">)</span><span class="token operator">:</span> ResultModel <span class="token punctuation">{</span>\n  <span class="token comment">// 监测是否在setup里面调用</span>\n  <span class="token function">isInSetup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> instanceRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> uuidRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter">dialogInstance<span class="token operator">:</span> any<span class="token punctuation">,</span> uuid<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    instanceRef<span class="token punctuation">.</span>value <span class="token operator">=</span> dialogInstance<span class="token punctuation">;</span>\n    uuidRef<span class="token punctuation">.</span>value <span class="token operator">=</span> uuid<span class="token punctuation">;</span>\n\n    props <span class="token operator">&amp;&amp;</span> methods<span class="token punctuation">.</span><span class="token function">setProps</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">getInstance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>instanceRef<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;useModal instance is undefined!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> instance<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> methods<span class="token operator">:</span> MethodsModel <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token function">actionDialog</span><span class="token punctuation">(</span><span class="token parameter">open <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">actionDialog</span><span class="token punctuation">(</span>open<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setProps</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">setProps</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">[</span>register<span class="token punctuation">,</span> methods<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h3 id="home-vue" tabindex="-1"><a class="header-anchor" href="#home-vue" aria-hidden="true">#</a> home.vue</h3><p>具体使用时，在父组件中调用对应的 TestDialog 组件，然后使用 useDialog 函数暴露出 register 注册函数和 actionDialog 操作显隐的函数，将 register 绑定到 TestDialog 上，这样当组件被创建时，就会触发 emit 暴露方法再通过 useDialog 返回出来，也就是 actionDialog 函数，绑定对应的触发 Dom 上就 OK 了。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>el<span class="token operator">-</span>button @click<span class="token operator">=</span><span class="token string">&quot;actionDialog()&quot;</span><span class="token operator">&gt;</span>open dialog<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>TestDialog @register<span class="token operator">=</span><span class="token string">&quot;register&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> userStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/store/modules/user&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> TestDialog <span class="token keyword">from</span> <span class="token string">&quot;/@/components/TestDialog.vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useDialog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/components/dialog/useDialog&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span> MyDrawer <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">,</span> <span class="token punctuation">{</span> actionDialog <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;Dialog&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      register<span class="token punctuation">,</span>\n      actionDialog<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="testdialog-vue" tabindex="-1"><a class="header-anchor" href="#testdialog-vue" aria-hidden="true">#</a> TestDialog.vue</h3><p>TestDialog 组件中只需要调用 MyDialog 并使用 v-bind=&quot;$attrs&quot;将所有的属性和事件传递给 MyDialog 就可以了。然后就可以在 MyDialog 中编写弹窗内显示的内容。弹窗的属性可以通过 useDialog 传递，也可以直接在 TestDialog 中编写。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>MyDialog v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;$attrs&quot;</span><span class="token operator">&gt;</span>\n    这是弹窗内部的内容！\n  <span class="token operator">&lt;</span><span class="token operator">/</span>MyDialog<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> MyDialog <span class="token keyword">from</span> <span class="token string">&quot;/@/components/dialog/MyDialog.vue&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;TestDrawer&quot;</span><span class="token punctuation">,</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span> MyDialog <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>弹窗代码的拆解，hook 形式的代码就完成了。实现了设置 dialog 属性和设置显示隐藏的简单功能。这样拆解之后，减少了 Home 组件内部弹窗的 template 代码，可以随意的将属性在 js 中或者子组件中进行设置。虽然功能不复杂，但编写起来舒服了很多，否则 Home 组件中调用 element 原生的 dialog 组件的话，需要在 template 传递很多属性。如果直接抽离的话又需要在子组件中监听显隐变量，父组件监听显隐事件，写了很多与数据不相关的代码，代码看起来也不那么请爽。</p>',16),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);