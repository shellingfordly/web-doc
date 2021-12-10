---
sidebar: auto
categories:
  - frame
  - sass
---

# Sass

## 创建变量

```scss
$color: red;

div {
  color: $color;
}
```

## 样式重用

```scss
@mixin backgroundColor($color) {
  background-color: $color;
}

div {
  @include backgroundColor(green);
}

p {
  @include backgroundColor(red);
}
```

## 判断语句

```scss
@mixin border-stroke($type) {
  @if $type == small {
    border: 10px solid green;
  } @else if $type == medium {
    border: 20px solid green;
  } @else if $type == large {
    border: 30px solid green;
  } @else {
    border: 40px solid green;
  }
}

div {
  @include border-stroke(large);
}
```

## for 循环

```html
<style type="text/scss">
  @for $i from 1 through 5 {
    .text-#{$i} {
      color: red;
    }
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

## each

```html
<style type="text/scss">
  $colors: (
    blue: blue,
    black: black,
    red: red,
  );

  @each $key, $color in $colors {
    .#{$key}-bg {
      background-color: $color;
    }
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

## while 循环

```html
<style type="text/scss">
  $index: 1;
  @while $index < 6 {
    .text-#{$index} {
      width: 50px * $index;
      background-color: red;
      $index: $index + 1;
    }
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

## 将一组样式扩展到另一个元素

```scss
.div1 {
  width: 200px;
  border: 1px solid black;
  margin: 0 auto;
}

.div2 {
  @extend .div1;
}
```
