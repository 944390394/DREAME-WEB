import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "使用展示",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: ["README.md"],
    },
    {
      text: "使用教程",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    //"slides",
  ],
});
