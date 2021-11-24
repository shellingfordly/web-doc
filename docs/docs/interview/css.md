## CSS

### 复合图层以及硬件加速

#### 硬件加速

网页中绘制 3D 图形是使用 webgl 的 api（基于 gpu 的 api 开源库 opengl 实现），为了让 3D 动效的性能更好，可以使用 css 的一些属性开启 gpu 渲染，也就是硬件加速，当然，这会耗费一些内存。

浏览器在处理 transform、opacity、filter、will-change 时会使用 gpu 渲染。浏览器会把内容分到不同的图层进行分别渲染，最后合并到一起，触发 gpu 渲染硬件加速需要新建图层，把元素移动到新图层是个耗时的操作，界面可能会闪一下，所有可以提前告诉浏览器一开始就把元素放到新的图层，方便后面直接用 gpu 渲染。

- 手动开启 gpu 渲染
  - 打开浏览器调试，蓝色框的元素是 cpu 渲染的，黄色框的元素是 gpu 渲染的
  - transform、opacity、filter 会默认开启 gpu 渲染

```css
 {
  /* 1 */
  will-change: transform;
  will-change: opacity;
  will-change: filter;
  /* 2 */
  transform: translate3d(0, 0, 0);
}
```

在 Chrome、FireFox、Safari、IE9+和最新的 Opera 都支持硬件加速，当使用到 transform、opacity、filter、will-change 这些 css 规则时就会开启，比如下面的 css 就会默认开启硬件加速。

```css
 {
  transform: translate3d(10px, 10px, 10px);
  transform: rotate3d(1, 1, 1, 45deg);
  transform: scale3d(0.5, 0.5, 0.5);
}
```

- 但有时可能我们不需要对元素应用 3D 变化的效果，此时可以借助 transform 欺骗浏览器开启硬件加速

```css
 {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}
```

- 解决使用 transform/animations 时页面闪烁

```css
 {
  backface-visibility: hidden;
  perspective: 1000;
}
```

- webkit 内核浏览器，有另一个方法

```css
 {
  transform: translate3d(0, 0, 0);
}
```

- 需要注意
  - 太多元素使用 css3 硬件加速会导致内存占用过大，有性能上的问题
  - 由于 GPU 和 CPU 的算法不同，GPU 渲染字体会导致抗锯齿无效，如果不在动画结束后关闭硬件加速，会产生字体模糊

### css 预加载

### 布局方式

### 定位

- 绝对定位
- 相对定位

### em/rem/px/rpx/vh/vw

### flex/grid

### 1px 问题
