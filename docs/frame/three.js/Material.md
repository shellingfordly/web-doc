# Material

## 材料类型

## 属性

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/887a88ecc92146a3a957202517456c99~tplv-k3u1fbpfcp-watermark.image?)

### side

设置物体如何显示贴图等等

- THREE.FrontSide 前面(默认)
- THREE.BackSide 后面
- THREE.DoubleSide 双面

```js
var material = new THREE.MeshBasicMaterial({
  color: 0xdd00ff,
  side: THREE.DoubleSide,
});
```

### opacity

设置物体透明度，设置 opacity 属性时需要将 transparent 值设置为 true

```js
var material = new THREE.MeshPhongMaterial({
  color: 0x220000,
  transparent: true,
  opacity: 0.4,
});
// 通过访问属性设置
material.transparent = true;
material.opacity = 0.4;
```
