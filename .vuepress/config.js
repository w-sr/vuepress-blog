module.exports = {
  title: "Home page",
  description: "Vuepress Blog",
  themeConfig: {
    nav: [{ text: "About", link: "/" }, { text: "Blog", link: "/blog/" }, { text: "Test", link: "/test/" }]
  },
  plugins: ["vuepress-plugin-reading-time"],
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  }
};
