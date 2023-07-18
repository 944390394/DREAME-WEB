import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/DREAME-WEB/",

  lang: "zh-CN",
  title: "DreameLink(公测版)",
    description: "DreameLink的使用文档",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
