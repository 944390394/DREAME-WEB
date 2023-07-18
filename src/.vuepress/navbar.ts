import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "使用教程",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "创建方",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "创建方常见问题", icon: "ellipsis", link: "" }],
      },
      {
        text: "加入方",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "加入方常见问题", icon: "ellipsis", link: "" }],
      },
    ],
  },
]);
