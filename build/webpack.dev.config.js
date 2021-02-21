const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = merge(baseConfig, {
  devServer: {
    compress: true,                    // 开启 gzip压缩
    contentBase: resolve('../dist'),   // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
    hot: true,                         // 启用 webpack 的模块热替换特性 与HotModuleReplacementPlugin 配合使用
    // hotOnly:true,                     // 热替换失败的时候不会刷新页面
    historyApiFallback: true,          // 任意的 404 响应都可能需要被替代为 index.html
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

