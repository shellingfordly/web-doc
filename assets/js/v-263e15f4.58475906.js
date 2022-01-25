"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[6925],{4559:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-263e15f4",path:"/frame/sass/",title:"Sass",lang:"en-US",frontmatter:{sidebar:"auto",categories:["frame","sass"]},excerpt:"",headers:[{level:2,title:"创建变量",slug:"创建变量",children:[]},{level:2,title:"样式重用",slug:"样式重用",children:[]},{level:2,title:"判断语句",slug:"判断语句",children:[]},{level:2,title:"for 循环",slug:"for-循环",children:[]},{level:2,title:"each",slug:"each",children:[]},{level:2,title:"while 循环",slug:"while-循环",children:[]},{level:2,title:"将一组样式扩展到另一个元素",slug:"将一组样式扩展到另一个元素",children:[]}],filePathRelative:"frame/sass/README.md",git:{updatedTime:1643087976e3,contributors:[{name:"liu",email:"shellingfordly@qq.com",commits:1}]}}},1457:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> Sass</h1><h2 id="创建变量" tabindex="-1"><a class="header-anchor" href="#创建变量" aria-hidden="true">#</a> 创建变量</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n\n<span class="token selector">div </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="样式重用" tabindex="-1"><a class="header-anchor" href="#样式重用" aria-hidden="true">#</a> 样式重用</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">div </span><span class="token punctuation">{</span>\n  <span class="token keyword">@include</span> <span class="token function">backgroundColor</span><span class="token punctuation">(</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">p </span><span class="token punctuation">{</span>\n  <span class="token keyword">@include</span> <span class="token function">backgroundColor</span><span class="token punctuation">(</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="判断语句" tabindex="-1"><a class="header-anchor" href="#判断语句" aria-hidden="true">#</a> 判断语句</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">border-stroke</span><span class="token punctuation">(</span><span class="token variable">$type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$type</span> == small </span><span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 10px solid green<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$type</span> == medium </span><span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 20px solid green<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$type</span> == large </span><span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 30px solid green<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 40px solid green<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">div </span><span class="token punctuation">{</span>\n  <span class="token keyword">@include</span> <span class="token function">border-stroke</span><span class="token punctuation">(</span>large<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> for 循环</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token atrule"><span class="token rule">@for</span> $i from 1 through 5</span> <span class="token punctuation">{</span>\n    <span class="token selector">.text-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n      <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="each" tabindex="-1"><a class="header-anchor" href="#each" aria-hidden="true">#</a> each</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  $<span class="token property">colors</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>\n    <span class="token property">blue</span><span class="token punctuation">:</span> blue<span class="token punctuation">,</span>\n    <span class="token property">black</span><span class="token punctuation">:</span> black<span class="token punctuation">,</span>\n    <span class="token property">red</span><span class="token punctuation">:</span> red<span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token atrule"><span class="token rule">@each</span> $key<span class="token punctuation">,</span> $color in $colors</span> <span class="token punctuation">{</span>\n    <span class="token selector">.#</span><span class="token punctuation">{</span>$key<span class="token punctuation">}</span><span class="token selector">-bg</span> <span class="token punctuation">{</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">div</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue-bg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>black-bg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red-bg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> while 循环</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  $<span class="token property">index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n  <span class="token atrule"><span class="token rule">@while</span> $index &lt; 6</span> <span class="token punctuation">{</span>\n    <span class="token selector">.text-#</span><span class="token punctuation">{</span>$index<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 50px * $index<span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n      $<span class="token property">index</span><span class="token punctuation">:</span> $index + 1<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="将一组样式扩展到另一个元素" tabindex="-1"><a class="header-anchor" href="#将一组样式扩展到另一个元素" aria-hidden="true">#</a> 将一组样式扩展到另一个元素</h2><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.div1 </span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.div2 </span><span class="token punctuation">{</span>\n  <span class="token keyword">@extend</span> .div1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',15),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}}}]);