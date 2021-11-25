const navConfig = require("./navConfig");
const sidebarConfig = require("./sidebarConfig");

module.exports = {
  title: "Web Doc",
  description: "Just playing around",
  locales: false,
  themeConfig: {
    nav: navConfig,
    sidebar: sidebarConfig,
    displayAllHeaders: true,
    lastUpdated: "上次更新",
    smoothScroll: true,
  },
};
