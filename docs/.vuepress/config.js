module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  locales: false,
  themeConfig: {
    logo: "/assets/header.png",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Github",
        link: "https://github.com/shellingfordly/web-doc",
        target: "_blank",
      },
    ],
    sidebar: ["/", "/html", "/guide"],
    displayAllHeaders: true,
    lastUpdated: "上次更新",
    smoothScroll: true,
  },
};
