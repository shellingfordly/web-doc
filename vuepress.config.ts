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
            link: "/frame/react/",
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
                link: "/frame/vue/vue3/",
              },
              {
                text: "vite",
                link: "/frame/vue/vite/",
              },
            ],
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
      "/frame/react/": ["README", "hooks", "memo", "problem"],
      "/frame/vue/vue2/": ["README", "vue2_note"],
      "/frame/vue/vue3/": [
        "README",
        "ref",
        "slot",
        "vue-router",
        "soundCode",
        "problem",
        "case",
      ],
      "/frame/vue/vite/": ["README"],
      "/frame/tools/": ["README"],
      "/tools/server/": ["linux", "nginx"],
    },
    displayAllHeaders: true,
    lastUpdated: true,
    lastUpdatedText: "上次更新",
    smoothScroll: true,
  },
});
