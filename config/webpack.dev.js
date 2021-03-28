const paths = require('./paths')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const jstsRegex = /\.(js|jsx|ts|tsx)$/
module.exports = merge(common, {

  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    compress: true,
    hot: true,
    port: 8080,
  },

  module: {
    rules: [
      {
        test: jstsRegex,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
})
