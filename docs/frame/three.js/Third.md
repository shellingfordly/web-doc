# Third Scene

实现一个月球绕着地球旋转的 Demo， 效果展示

![地球.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d69885fb13e4286a528f432a8fe1d7c~tplv-k3u1fbpfcp-watermark.image?)

[源码地址 threejs-demo](https://github.com/shellingfordly/threejs-demo)

[预览地址](https://shellingfordly.github.io/threejs-demo/%E5%9C%B0%E7%90%83.html)

## 需要用到的包

```html
<!-- three.js包 -->
<script src="./three.js"></script>
<script src="./OrbitControls.js"></script>
<script src="./CSS2DRenderer.js"></script>
```

## 实现

1. 创建 scence，实例化纹理加载器，添加时钟

```js
const clock = new THREE.Clock();
// 实例化纹理加载器
const textureLoader = new THREE.TextureLoader();
const scene = new THREE.Scene();
```

2. 创建地球对象和月球对象

- 实例化月球对象

```js
const moonGeometry = new THREE.SphereGeometry(5, 30, 30);
const moonMaterial = new THREE.MeshPhongMaterial({
  map: textureLoader.load("./imgs/moon.jpg"),
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
scene.add(moon);
```

- 实例化地球对象
  - shininess 高亮的程度，越高的值越闪亮
  - map 颜色贴图

```js
const earthGeometry = new THREE.SphereGeometry(50, 50, 50);
const earthMaterial = new THREE.MeshPhongMaterial({
  shininess: 5,
  map: textureLoader.load(`./imgs/worldmap.jpg`),
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
```

3. 动画

```js
function animation() {
  const elapsed = clock.getElapsedTime();
  moon.position.set(Math.sin(elapsed) * 100, 0, Math.cos(elapsed) * 100);
  const axis = new THREE.Vector3(0, 1, 0);
  earth.rotateOnAxis(axis, (elapsed * Math.PI) / 1000);
  renderer.render(scene, camera);
  requestAnimationFrame(animation);
}
animation();
```

## 切换地图

顺便尝试一下尤大新出的[petite-vue](https://github.com/vuejs/petite-vue)，petite-vue 在 html 中使用就十分方便了，又轻又小，一键使用

```html
<div id="app" v-scope @vue:mounted="mounted">
  <div class="select-container">
    <span>切换地图</span>
    <select v-model="index" @change="change">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
  </div>
  <div class="loading-container" v-if="!domElement">Loading...</div>
</div>
```

```js
import { createApp } from "https://unpkg.com/petite-vue?module";

createApp({
  index: 1,
  domElement: null,
  mounted() {
    this.domElement = init(this.index);
  },
  change(event) {
    app.removeChild(this.domElement);
    this.domElement = null;
    setTimeout(() => {
      this.domElement = init(this.index);
    }, 500);
  },
}).mount();
```

最终实现效果

![地球 - 地图切换.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/326024d431e7442784006bd3a7c19499~tplv-k3u1fbpfcp-watermark.image?)
