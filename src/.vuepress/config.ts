import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { seoPlugin } from "vuepress-plugin-seo2";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "DreameLink联机(公测版)",
  description: "一款优秀的我的世界联机程序",

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
