"use strict";(self.webpackChunkweb_doc=self.webpackChunkweb_doc||[]).push([[5271],{9713:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-056a2c04",path:"/frame/three.js/First.html",title:"Three.js",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"First Scene",slug:"first-scene",children:[{level:3,title:"几何体 Geometry",slug:"几何体-geometry",children:[]},{level:3,title:"材料 Material",slug:"材料-material",children:[]},{level:3,title:"光源 Light",slug:"光源-light",children:[]},{level:3,title:"相机 Camera",slug:"相机-camera",children:[]},{level:3,title:"整体结构",slug:"整体结构",children:[]},{level:3,title:"过程",slug:"过程",children:[]}]},{level:2,title:"插入多个几何体",slug:"插入多个几何体",children:[{level:3,title:"几何体",slug:"几何体",children:[]},{level:3,title:"辅助三维坐标系 AxisHelper",slug:"辅助三维坐标系-axishelper",children:[]},{level:3,title:"同时绘制多个几何体",slug:"同时绘制多个几何体",children:[]}]},{level:2,title:"材料",slug:"材料",children:[{level:3,title:"材料类型",slug:"材料类型",children:[]},{level:3,title:"材料属性",slug:"材料属性",children:[]}]},{level:2,title:"光源",slug:"光源",children:[{level:3,title:"类型",slug:"类型",children:[]}]}],filePathRelative:"frame/three.js/First.md",git:{updatedTime:1663579823e3,contributors:[{name:"shellingfordly",email:"shellingfordly@qq.com",commits:1}]}}},1204:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var e=a(6252);const p=(0,e._)("h1",{id:"three-js",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#three-js","aria-hidden":"true"},"#"),(0,e.Uk)(" Three.js")],-1),t={href:"http://www.yanhuangxueyuan.com/Three.js/",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("Three.js 零基础入门教程(郭隆邦)"),o={href:"http://www.yanhuangxueyuan.com/threejs/docs/index.html",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("Three.js 中文文档"),r=(0,e.uE)('<h2 id="first-scene" tabindex="-1"><a class="header-anchor" href="#first-scene" aria-hidden="true">#</a> First Scene</h2><h3 id="几何体-geometry" tabindex="-1"><a class="header-anchor" href="#几何体-geometry" aria-hidden="true">#</a> 几何体 Geometry</h3><ul><li>THREE.BoxGeometry(宽, 高, 长) 立方体</li><li>THREE.SphereGeometry(半径, number, number) 球体</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>SphereGeometry</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b707bad1cb1949ceb3766f951344a1b3~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h3 id="材料-material" tabindex="-1"><a class="header-anchor" href="#材料-material" aria-hidden="true">#</a> 材料 Material</h3><p>对立方体的颜色、透明度等等属性进行设置</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshLambertMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token number">0x0000ff</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="光源-light" tabindex="-1"><a class="header-anchor" href="#光源-light" aria-hidden="true">#</a> 光源 Light</h3><p>创建一个点光源，参数定义光照强度，光源强度变低时，物体也随之变暗淡</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PointLight</span><span class="token punctuation">(</span><span class="token number">0xffffff</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="相机-camera" tabindex="-1"><a class="header-anchor" href="#相机-camera" aria-hidden="true">#</a> 相机 Camera</h3><p>THREE.OrthographicCamera()创建一个正射投影相机对象，参数改变拍照窗口的大小。取景范围变小，物体变大，反之变小。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>OrthographicCamera</span><span class="token punctuation">(</span><span class="token operator">-</span>s <span class="token operator">*</span> k<span class="token punctuation">,</span> s <span class="token operator">*</span> k<span class="token punctuation">,</span> s<span class="token punctuation">,</span> <span class="token operator">-</span>s<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="整体结构" tabindex="-1"><a class="header-anchor" href="#整体结构" aria-hidden="true">#</a> 整体结构</h3><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9712b956096d42be81e387ff96ca1efa~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h3 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h3><ol><li>THREE.Scene() 创建场景对象</li></ol><ul><li>new THREE.BoxGeometry 创建物体</li><li>new THREE.MeshLambertMaterial 使用材料</li><li>new THREE.Mesh(box,material) 创建网格，添加物体</li><li>new THREE.PointLight(0xffffff) 创建光源</li><li>new THREE.AmbientLight(0x444444) 创建环境光</li><li>scene.add(mesg/point/ambient) 向场景中添加对象</li></ul><ol start="2"><li>创造物体对象</li><li>THREE.OrthographicCamera() 创建相机对象</li><li>THREE.WebGLRenderer() 创建渲染对象</li><li>renderer.render(scene,camera) 投影</li></ol><h2 id="插入多个几何体" tabindex="-1"><a class="header-anchor" href="#插入多个几何体" aria-hidden="true">#</a> 插入多个几何体</h2><h3 id="几何体" tabindex="-1"><a class="header-anchor" href="#几何体" aria-hidden="true">#</a> 几何体</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//长方体 参数：长，宽，高</span>\n<span class="token keyword">var</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 球体 参数：半径60  经纬度细分数40,40</span>\n<span class="token keyword">var</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>SphereGeometry</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 圆柱  参数：圆柱面顶部、底部直径50,50   高度100  圆周分段数</span>\n<span class="token keyword">var</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>CylinderGeometry</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 正八面体</span>\n<span class="token keyword">var</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>OctahedronGeometry</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 正十二面体</span>\n<span class="token keyword">var</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>DodecahedronGeometry</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 正二十面体</span>\n<span class="token keyword">var</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>IcosahedronGeometry</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="辅助三维坐标系-axishelper" tabindex="-1"><a class="header-anchor" href="#辅助三维坐标系-axishelper" aria-hidden="true">#</a> 辅助三维坐标系 AxisHelper</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置</span>\n<span class="token keyword">var</span> axisHelper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>AxisHelper</span><span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nscene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>axisHelper<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="同时绘制多个几何体" tabindex="-1"><a class="header-anchor" href="#同时绘制多个几何体" aria-hidden="true">#</a> 同时绘制多个几何体</h3><ul><li>代码</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> geometry1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> material1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshLambertMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  color<span class="token operator">:</span> <span class="token number">0x0000ff</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> mesh1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry1<span class="token punctuation">,</span> material1<span class="token punctuation">)</span><span class="token punctuation">;</span>\nscene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mesh1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> geometry2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>SphereGeometry</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> material2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshLambertMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  color<span class="token operator">:</span> <span class="token number">0xff00ff</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> mesh2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry2<span class="token punctuation">,</span> material2<span class="token punctuation">)</span><span class="token punctuation">;</span>\nmesh2<span class="token punctuation">.</span><span class="token function">translateX</span><span class="token punctuation">(</span><span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//球体网格模型沿Y轴正方向平移120</span>\nscene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mesh2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> geometry3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>CylinderGeometry</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> material3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshLambertMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  color<span class="token operator">:</span> <span class="token number">0xffff00</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> mesh3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry3<span class="token punctuation">,</span> material3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// mesh3.translateX(120); //球体网格模型沿Y轴正方向平移120</span>\nmesh3<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//设置mesh3模型对象的xyz坐标为120,0,0</span>\nscene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mesh3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li>效果</li></ul><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48ea915adc1a42a480cffc853d6dcacb~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h2 id="材料" tabindex="-1"><a class="header-anchor" href="#材料" aria-hidden="true">#</a> 材料</h2><h3 id="材料类型" tabindex="-1"><a class="header-anchor" href="#材料类型" aria-hidden="true">#</a> 材料类型</h3><ul><li>MeshBasicMaterial 基础网格材质，不受光照影响的材质</li><li>MeshLambertMaterial Lambert 网格材质，与光照有反应，漫反射</li><li>MeshPhongMaterial 高光 Phong 材质,与光照有反应</li><li>MeshStandardMaterial PBR 物理材质，相比较高光 Phong 材质可以更好的模拟金属、玻璃等效果</li></ul><h3 id="材料属性" tabindex="-1"><a class="header-anchor" href="#材料属性" aria-hidden="true">#</a> 材料属性</h3><p>修改 THREE.MeshLambertMaterial()的参数，改变几何体的显示效果</p><ul><li>线框效果</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> sphereMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshLambertMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  color<span class="token operator">:</span> <span class="token number">0xff0000</span><span class="token punctuation">,</span>\n  wireframe<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 将几何图形渲染为线框</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b6fdf0b3ad3547c98f2186360435ff3f~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ul><li>透明效果</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> sphereMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshLambertMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  color<span class="token operator">:</span> <span class="token number">0xff0000</span><span class="token punctuation">,</span>\n  opacity<span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span>\n  transparent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f9bd0601882941429ebe396a88b8daf6~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ul><li>高光效果</li></ul><p>好像没什么区别</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 左边</span>\n<span class="token keyword">var</span> sphereMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshPhongMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  color<span class="token operator">:</span> <span class="token number">0x0000ff</span><span class="token punctuation">,</span>\n  specular<span class="token operator">:</span> <span class="token number">0x4488ee</span><span class="token punctuation">,</span>\n  shininess<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 右边</span>\n<span class="token keyword">var</span> sphereMaterial <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshPhongMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  color<span class="token operator">:</span> <span class="token number">0x0000ff</span><span class="token punctuation">,</span>\n  specular<span class="token operator">:</span> <span class="token number">0x4488ee</span><span class="token punctuation">,</span>\n  shininess<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44a60e3830c84752a7fa29d62cc58f8c~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>把 shininess 改成-100 稍微明显一点了</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/530bb86f07a64e4abf7347382dd3e7ab~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h2 id="光源" tabindex="-1"><a class="header-anchor" href="#光源" aria-hidden="true">#</a> 光源</h2><p>没有光源时所有的物体都是黑色，上面所有的示例都是在有光源的情况下展示出来的</p><h3 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h3><ul><li>AmbientLight 环境光</li><li>PointLight 点光源</li><li>DirectionalLight 平行光，比如太阳光</li><li>SpotLight 聚光源</li></ul><blockquote><p>注意： MeshBasicMaterial 基础材料是不会反光的，因此注意切换材料，否则是没有效果的</p></blockquote><h4 id="环境光" tabindex="-1"><a class="header-anchor" href="#环境光" aria-hidden="true">#</a> 环境光</h4><p>环境光只是设置了整个空间的敏感效果，设置了环境光之后能够看清物体的颜色，但无法看清物体的棱角，没有很好的立体效果</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> ambient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>AmbientLight</span><span class="token punctuation">(</span><span class="token number">0x444444</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nscene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>ambient<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ff128332b374625bc33ed38830ad184~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h4 id="点光源" tabindex="-1"><a class="header-anchor" href="#点光源" aria-hidden="true">#</a> 点光源</h4><p>设置了点光源之后物体就立体起来了，当把点光源的位置设置为(0,0,0)时是无效的，因为光源在物体内部无法照射到物体表面</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//点光源</span>\n<span class="token keyword">var</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PointLight</span><span class="token punctuation">(</span><span class="token number">0xffffff</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npoint<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nscene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>point<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/223374fc2b684370b46e09b50fb2a1af~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>而当打开了鼠标控制，调整到物体的背面时，又是暗的，原因是点光源无法照射到另一面，设置相对位置的点光源则可照亮整个物体</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PointLight</span><span class="token punctuation">(</span><span class="token number">0xffffff</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\npoint<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nscene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>point<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0fffe8fafd994f80922655b556a92bf2~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p>',63),u={},i=(0,a(3744).Z)(u,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",t,[c,(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e._)("a",o,[l,(0,e.Wm)(a)])])]),r],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);