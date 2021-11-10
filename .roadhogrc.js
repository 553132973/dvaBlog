export default {
  proxy: {
    "/apis": {
      target: "https://dev-boss.amh-group.com'",
      changeOrigin: true, //创建虚拟服务器，changeOrigin默认是false：请求头中host仍然是浏览器发送过来的host，如果设置成true：发送请求头中host会设置成target·
      pathRewrite: { "^/apis": "" }, //路径替换
    },
  },
};
