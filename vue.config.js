module.exports = {
  lintOnSave: true, // 是否在保存的时候检查
  devServer: {
    // 环境配置
    host: 'localhost',
    port: 2712,
    https: false,
    hotOnly: false,
    open: true, // 配置自动启动浏览器
  },
  css: {
    loaderOptions: {
      sass: {
        test: /\.scss$/
      },
    }
  }
}


