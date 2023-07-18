import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { seoPlugin } from "vuepress-plugin-seo2";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "DreameLink联机(公测版)",
  description: "一款优秀的我的世界联机工具，超低延迟，速度联机，快来使用DreameLink来和朋友在MC里遨游吧",
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
