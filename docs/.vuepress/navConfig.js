module.exports = [
  { text: "Home", link: "/" },
  {
    text: "前端",
    ariaLabel: "Web Menu",
    items: [
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
    items: [
      {
        text: "React",
        link: "/frame/react/introduce",
      },
      {
        text: "Vue",
        items: [
          {
            text: "Vue2",
            link: "/frame/vue/vue2/introduce",
          },
          {
            text: "Vue3",
            link: "/frame/vue/vue3/introduce",
          },
          {
            text: "vite",
            link: "/frame/vue/vite/introduce",
          },
        ],
      },
    ],
  },
  {
    text: "其他",
    ariaLabel: "Tools Menu",
    items: [],
  },
  {
    text: "工具",
    ariaLabel: "Tools Menu",
    items: [
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
];
