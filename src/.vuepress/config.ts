import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { seoPlugin } from "vuepress-plugin-seo2";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "DreameLink联机(公测版)",
  description: "DreameLink联机程序的使用文档",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
    plugins: [
        seoPlugin({
            // 你的选项
            hostname: "https://www.dreame.top",
        }),
    ],
});
