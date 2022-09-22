# Nuxt

## Directory structure

### Assets Directory

provide static assets for client-side

if you want to serve assets from the server, should taking a look at the **public** directory.

---

### Components Directory

Nuxt automatically imports any components in your **components/**.

#### component names

```
| components/
--| base/
----| foo/
------| Button.vue
```

the component's name will be:

```
<BaseFooButton />
```

#### dynamic components

if you want to use the Vue **<component :is="component">** syntax, then you will need to use the **resolveComponent** helper provided by Vue.

```vue
<template>
  <component :is="clickable ? MyButton : 'div'" />
</template>
<script>
const MyButton = resolveComponent("MyButton");
</script>
```

- globally(not recommended)

register all your components globally.

```ts
export default defineNuxtConfig({
  components: {
    globally: true,
    dirs: [
      "~/components"
      // or some components
      "~/component/global"
    ],
  },
});
```

> You can auto import for third library use the property(components) configure, but can't auto import style of component(recommended).

#### library authors

You can use the **components:dir** hook to extend the directory list.

- in **node_modules/awesome-ui/nuxt.js**.

```js
import { defineNuxtModule } from "@nuxt/kit";
import { fileURLToPath } from "node:url";

export default defineNuxtModule({
  hooks: {
    "components:dirs"(dirs) {
      dirs.push({
        path: fileURLToPath(new URL("./components", import.meta.url)),
        prefix: "awesome",
      });
    },
  },
});
```

- and in your **nuxt.config** file

```js
export default {
  modules: ["awesome-ui/nuxt"],
};
```

> Recommended: That can't auto import style of components.

---

### Composables Directory

only scans files at the top level of the **Composables/** directory.

- nested directories

if you want to get auto imports working for nested modules, you could either re-export them from the **composables/index.ts** or configure the scanner to include nested directories.

```ts
// in composables/index.ts
export {utils} form './nested/utils.ts'
// configure nested directories
export default defineNuxtConfig({
  imports:{
    dirs: [
      'composables',
      'composables/*/index.{ts,js,mjs,mts}',
      'composables/**',
    ]
  }
})
```

---
