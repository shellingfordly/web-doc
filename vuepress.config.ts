import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  title: "Web Doc",
  base: "/web-doc/",
  themeConfig: {
    navbar: [
      { text: "Home", link: "/" },
      {
        text: "前端",
        ariaLabel: "Web Menu",
        children: [
          {
            text: "JavaScript",
            link: "/web/javascript/",
          },
          {
            text: "HTML",
            link: "/web/html/",
          },
          {
            text: "HTTP",
            link: "/web/http/",
          },
        ],
      },
      {
        text: "框架",
        ariaLabel: "Frame Menu",
        children: [
          {
            text: "React",
            link: "/frame/react/react.md",
          },
          {
            text: "Vue",
            children: [
              {
                text: "Vue2",
                link: "/frame/vue/vue2/",
              },
              {
                text: "Vue3",
                link: "/frame/vue/vue3/vue3.md",
              },
              {
                text: "vite",
                link: "/frame/vue/vite/",
              },
            ],
          },
          {
            text: "Three.js",
            link: "/frame/three.js/First.md",
          },
        ],
      },
      {
        text: "其他",
        ariaLabel: "Tools Menu",
        children: [],
      },
      {
        text: "工具",
        ariaLabel: "Tools Menu",
        children: [
          {
            text: "server",
            link: "/tools/server/linux",
          },
          {
            text: "Webpack",
            link: "/tools/webpack/",
          },
          {
            text: "Git",
            link: "/tools/git/",
          },
          {
            text: "vim",
            link: "/tools/vim/",
          },
          {
            text: "google",
            link: "/tools/google/",
          },
        ],
      },
      {
        text: "面试",
        link: "/interview/",
      },
      {
        text: "Github",
        link: "https://github.com/shellingfordly/web-doc",
        target: "_blank",
      },
    ],
    sidebar: {
      "/frame/react/": ["react", "hooks", "memo", "problem"],
      "/frame/vue/vue3/": [
        "vue3",
        "ref",
        "slot",
        "vue-router",
        "soundCode",
        "problem",
        "case",
      ],
      "/frame/three.js/": ["First", "Material", "Second", "Third"],
      "/frame/tools/": ["README"],
      "/tools/server/": ["linux", "nginx"],
    },
    displayAllHeaders: true,
    lastUpdated: true,
    lastUpdatedText: "上次更新",
    smoothScroll: true,
  },
});
